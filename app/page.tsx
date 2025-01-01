"use client";

import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import ParallaxSection from "@/components/ParallaxSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import {useEffect, useMemo, useRef, useState} from "react";

export default function Home() {
  const divRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<HTMLDivElement>(null);
  const mousePositionRef = useRef({x: 0, y: 0}); // 마우스 위치를 저장하는 Ref

  const scrollPosition = useRef(0);
  const [scrollAlert, setScrollAlert] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      scrollPosition.current = window.scrollY;
      scrollPosition.current >= 10
        ? setScrollAlert(true)
        : setScrollAlert(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const dots = useMemo(() => {
    return [...Array(80)].map(() => ({
      width: Math.random() * 2 + 1,
      height: Math.random() * 2 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      animationDuration: Math.random() * 5 + 2,
      boxShadowBlur: Math.random() * 5 + 1,
      boxShadowOpacity: Math.random() + 0.5,
    }));
  }, []);

  return (
    <div className="min-h-screen w-full h-auto flex items-center justify-center flex-col relative overflow-hidden ">
      <div ref={elementRef} className="follower" />
      <div className="fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-[#000] via-[#000] to-[#13264eb3] flex items-center justify-center">
        {/* Particles */}
        <div className="absolute w-full h-full z-0 pointer-events-none">
          {dots.map((dot, i) => (
            <div
              key={i}
              className="relative bg-[#2860d7] rounded-full z-0"
              style={{
                width: `${dot.width}px`,
                height: `${dot.height}px`,
                top: `${dot.top}%`,
                left: `${dot.left}%`,
                animation: `float ${dot.animationDuration}s ease-out infinite`,
                boxShadow: `0 0px ${dot.boxShadowBlur}px ${dot.boxShadowOpacity}px #13264e`,
              }}
            />
          ))}
        </div>

        <div
          className={`absolute w-full bottom-[0px] left-[20px] text-[#fff] text-center ${
            !scrollAlert ? "animate-slide-up" : "animate-slide-down"
          } `}
        >
          SCROLL TO TRAVEL
          <div className="w-full flex justify-center items-center mt-[4px]">
            <div className=" w-[2px] h-[100px] rounded-full animate-gradient " />
          </div>
        </div>
      </div>

      {/* Glass Card */}
      <section className="relative w-full h-screen flex flex-col justify-start items-start z-10 p-10 rounded-2xl text-center transition-opacity duration-[1000ms] ease-in-out animate-slide-up">
        <p
          className="text-[#4667b0] text-[60px] "
          // style={{
          //   textShadow: `0 4px 4px #214083`,
          // }}
        >
          Frontend Developer
        </p>
        <h1
          className="text-[#4667b0] text-[140px] font-bold mb-4 "
          // style={{
          //   textShadow: `0 6px 8px #214083`,
          // }}
        >
          Park DongSeok
        </h1>
      </section>
      {/* <Hero />
      <Timeline />
      <Skills />
      <ProjectShowcase />
      <Contact />
      <ParallaxSection /> */}
      <section className="relative w-auto h-screen flex flex-col justify-center items-center z-10 p-10 rounded-2xl text-center transition-opacity duration-1000 ease-in-out">
        <h1 className="text-[#eaeaea] text-[70px] font-bold mb-4">HI</h1>
      </section>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0);
          }
        }
        @keyframes texts {
          0% {
            transform: translateY(0px);
          }
          100% {
            transform: translateY(-20px);
          }
        }
        @keyframes gradient {
          0% {
            background: linear-gradient(to top, #13264e, #7d94ad, #13264e);
            background-size: 100% 200%;
            background-position: 0% 0%;
          }
          50% {
            background: linear-gradient(to top, #13264e, #7d94ad, #13264e);
            background-size: 100% 200%;
            background-position: 0% 100%;
          }
          100% {
            background: linear-gradient(to top, #13264e, #7d94ad, #13264e);
            background-size: 100% 200%;
            background-position: 0% 0%;
          }
        }

        .animate-gradient {
          animation: gradient 3s ease-in-out infinite;
          background-clip: border-box;
        }

        .follower {
          position: absolute;
          top: 0;
          left: 0;
          width: 40px;
          height: 40px;
          background-color: none;
          border: solid 2px #13264e;
          border-radius: 100%;
          pointer-events: none;
          transition: transform 0.1s ease-out;
          z-index: 9999;
        }
      `}</style>
    </div>
  );
}
