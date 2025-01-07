"use client";

import {useEffect, useRef} from "react";

export default function FlowBar() {
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const fullHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollY = window.scrollY;
      const progress = (scrollY / fullHeight) * 100;

      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${progress}%`;
      }
    };

    const throttledHandleScroll = () => requestAnimationFrame(handleScroll);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] bg-transparent">
      <div
        ref={progressBarRef}
        className="w-[0%] h-full bg-[#244998] rounded-full transition-transform"
      />
    </div>
  );
}
