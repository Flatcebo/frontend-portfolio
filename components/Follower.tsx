"use client";

import {useEffect, useRef} from "react";

export default function Follower() {
  const elementRef = useRef<HTMLDivElement>(null);
  const mousePositionRef = useRef({x: 0, y: 0});

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mousePositionRef.current = {
        x: event.clientX,
        y: event.clientY,
      };

      updateElementPosition();
    };

    const handleScroll = () => {
      updateElementPosition();
    };

    const updateElementPosition = () => {
      if (elementRef.current) {
        const offsetX =
          mousePositionRef.current.x +
          window.scrollX -
          elementRef.current.offsetWidth / 2;
        const offsetY =
          mousePositionRef.current.y +
          window.scrollY -
          elementRef.current.offsetHeight / 2;

        elementRef.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className="absolute top-0 left-0 w-[40px] h-[40px] bg-none border-[2px] border-[#244998] rounded-full pointer-events-none transition-transform duration-[100] ease-out z-[997]"
    />
  );
}
