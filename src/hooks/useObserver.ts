import { useState } from "react";

export const useObserver = () => {
  const [visible, setVisible] = useState(false)

  const myObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.25 }
  );

  function setRef(ref: React.MutableRefObject<null>) {
    if (ref.current) {
      myObserver.observe(ref.current)
    }
  }
  return { visible, setRef }
}