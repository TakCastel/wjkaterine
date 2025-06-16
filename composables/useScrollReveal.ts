import { onMounted, onBeforeUnmount, nextTick } from "vue";

type RevealItem = {
  ref: any;
  direction?: "left" | "right" | "up";
};

export function useScrollReveal(
  containerRef: any,
  elements: RevealItem[],
  threshold: number = 0.3
) {
  let observer: IntersectionObserver | null = null;

  const animateIn = () => {
    elements.forEach((item, i) => {
      const dir = item.direction || "up";
      const el = item.ref.value;
      if (el) {
        el.style.animationDelay = `${i * 0.2}s`;
        el.classList.add(`animate-slide-${dir}`);
      }
    });
  };

  const animateOut = () => {
    elements.forEach((item) => {
      const dir = item.direction || "up";
      const el = item.ref.value;
      if (el) {
        el.style.animationDelay = "";
        el.classList.remove(`animate-slide-${dir}`);
        void el.offsetWidth;
      }
    });
  };

  onMounted(async () => {
    await nextTick();

    observer = new IntersectionObserver(
      ([entry]) => {
        const visibleRatio = entry.intersectionRatio;

        if (visibleRatio > 0.2) {
          animateIn();
        } else {
          animateOut();
        }
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      }
    );

    if (containerRef.value) observer.observe(containerRef.value);
  });

  onBeforeUnmount(() => {
    observer?.disconnect();
  });
}
