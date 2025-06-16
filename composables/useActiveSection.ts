import { ref, onMounted, onBeforeUnmount } from "vue";

export const useActiveSection = () => {
  const currentSection = ref("hero");

  let observer: IntersectionObserver;

  const handleScrollTop = () => {
    if (window.scrollY === 0) {
      currentSection.value = "hero";
      history.replaceState(null, "", "/");
    }
  };

  onMounted(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));

    observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.target.getBoundingClientRect().top -
              b.target.getBoundingClientRect().top
          );

        if (visibleSections.length > 0) {
          const topMost = visibleSections[0];
          currentSection.value = topMost.target.id;
          history.replaceState(null, "", `#${topMost.target.id}`);
        } else {
          handleScrollTop();
        }
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    window.addEventListener("scroll", handleScrollTop);

    onBeforeUnmount(() => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", handleScrollTop);
    });
  });

  return { currentSection };
};
