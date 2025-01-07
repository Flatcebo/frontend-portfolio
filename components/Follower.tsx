"use client";

import {useEffect, useRef} from "react";

export default function Follower() {
  const elementRef = useRef<HTMLDivElement>(null);
  const mousePositionRef = useRef({x: 0, y: 0}); // 마우스 위치를 저장하는 Ref

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // 마우스 위치 업데이트
      mousePositionRef.current = {
        x: event.clientX,
        y: event.clientY,
      };

      updateElementPosition();
    };

    const handleScroll = () => {
      // 스크롤 이벤트 발생 시 현재 마우스 위치 기반으로 업데이트
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

    // 이벤트 리스너 등록
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      // 이벤트 리스너 제거
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className="absolute top-0 left-0 w-[40px] h-[40px] bg-none border-[2px] border-[#13264e] rounded-full pointer-events-none transition-transform duration-[100] ease-out z-[9999]"
    />
  );
}
