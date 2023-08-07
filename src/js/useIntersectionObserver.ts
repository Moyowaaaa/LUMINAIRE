export const intersectionObserver = (item: HTMLElement, options: any) => {
  return new Promise<void>((resolve) => {
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          resolve();
        }
      });
    }, options);
    observer.observe(item);
  });
};
