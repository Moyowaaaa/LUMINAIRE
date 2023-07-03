import Splitting from "splitting";
import { intersectionObserver } from "./useIntersectionObserver";
import { gsap } from "gsap";

export const split = () => {
  const p = Array.from(
    document.querySelectorAll("[data-animation='paragraph']")
  ) as HTMLElement[];
  const H = Array.from(
    document.querySelectorAll("[data-animation='header']")
  ) as HTMLElement[];
  const f = Array.from(
    document.querySelectorAll("[data-animation='fade']")
  ) as HTMLElement[];

  p.forEach((item: HTMLElement) => {
    const line = Splitting({
      target: item,
      by: "lines",
    }) as unknown as any[]; // Assuming `Splitting` returns an array

    line.forEach((splitResult: any) => {
      const wrappedLines = splitResult.words
        .map(
          (wordsArr: HTMLElement) => `
                    <span class="word_wrap">
                        ${wordsArr.outerHTML}
                    </span>`
        )
        .join("");
      splitResult.el.innerHTML = wrappedLines;
    });

    gsap.set(item.querySelectorAll(".word"), {
      yPercent: 105,
      opacity: 0,
      rotateX: 50,
      transformStyle: "preserve-3d",
    });

    intersectionObserver(item, { threshold: 1 }).then(() => {
      const elem = item.querySelectorAll(".word");
      gsap.to(elem, {
        yPercent: 0,
        opacity: 1,
        rotateX: 0,
        stagger: elem.length > 100 ? 0.02 : 0.03,
        duration: elem.length > 100 ? 0.65 : 0.75,
        ease: "easeOut",
      });
    });
  });

  H.forEach((item: HTMLElement) => {
    Splitting({
      target: item,
      by: "chars",
    });

    gsap.set(item.querySelectorAll(".char"), {
      opacity: 0,
      yPercent: 100,
      transformStyle: "preserve-3d",
    });

    intersectionObserver(item, {
      threshold: 1,
    }).then(() => {
      const elem = item.querySelectorAll(".char");
      gsap.to(elem, {
        opacity: 1,
        yPercent: 0,
        stagger: elem.length > 100 ? 0.01 : 0.02,
        duration: elem.length > 100 ? 0.5 : 0.6,
        ease: "easeOut",
      });
    });
  });

  f.forEach((item: HTMLElement) => {
    gsap.set(item, {
      autoAlpha: 0,
      yPercent: 50,
      transformStyle: "preserve-3d",
    });

    intersectionObserver(item as any, { threshold: 0.3 }).then(() => {
      gsap.to(item as any, {
        autoAlpha: 1,
        yPercent: 0,
        duration: f.length > 100 ? 0.5 : 0.6,
        ease: "easeOut",
      });
    });
  });
};
