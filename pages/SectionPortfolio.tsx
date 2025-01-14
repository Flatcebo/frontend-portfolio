"use client";

import {useEffect, useState} from "react";

export default function SectionPortfolio() {
  const [rotateAngle, setRotateAngle] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionStart = 500; // 두 번째 섹션 시작 지점
      const sectionEnd = 1000; // 두 번째 섹션 끝 지점

      // 스크롤 위치가 2번째 섹션 범위에 있을 때만 회전값 계산
      if (scrollPosition >= sectionStart && scrollPosition <= sectionEnd) {
        const progress =
          (scrollPosition - sectionStart) / (sectionEnd - sectionStart); // 0 ~ 1 비율
        setRotateAngle(progress * 360); // 0도 ~ 360도
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-[300vh]">
      {/* 첫 번째 섹션 */}
      <section className="h-screen flex items-center justify-center bg-blue-500">
        <h1 className="text-white text-4xl">First Section</h1>
      </section>

      {/* 두 번째 섹션 */}
      <section className="h-screen flex flex-col items-center justify-center bg-green-500">
        <h1 className="text-white text-4xl mb-8">Second Section</h1>
        {/* 삼각형 */}
        <div
          className="w-16 h-16 bg-yellow-500 transform"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)", // 삼각형 생성
            transform: `rotate(${rotateAngle}deg)`,
          }}
        ></div>
      </section>

      {/* 세 번째 섹션 */}
      <section className="h-screen flex items-center justify-center bg-red-500">
        <h1 className="text-white text-4xl">Third Section</h1>
      </section>
    </div>
  );
}
