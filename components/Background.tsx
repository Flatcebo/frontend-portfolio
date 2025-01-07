"use client";

import {useMemo} from "react";

interface IBgProps {
  scrollAlert: boolean;
}

export default function Background({scrollAlert}: IBgProps) {
  const dots = useMemo(() => {
    return [...Array(80)].map(() => ({
      width: Math.random() * 2 + 1,
      height: Math.random() * 2 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      animationDuration: Math.random() * 5 + 10,
      animationDelay: Math.random() * 5,
      animationType: ["float", "circle", "zigzag"][
        Math.floor(Math.random() * 3)
      ], // 랜덤 애니메이션 선택
      boxShadowBlur: Math.random() * 5 + 1,
      boxShadowOpacity: Math.random() + 0.5,
    }));
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-[#000] via-[#000] to-[#13264eb3] flex items-center justify-center z-0">
      {/* Particles */}
      <div className="absolute w-full h-full z-0 pointer-events-none">
        {dots.map((dot, i) => (
          <div
            key={i}
            className={`relative bg-[#2860d7] rounded-full z-0`}
            style={{
              width: `${dot.width}px`,
              height: `${dot.height}px`,
              top: `${dot.top}%`,
              left: `${dot.left}%`,
              animation: `${dot.animationType} ${dot.animationDuration}s ease-in-out infinite`,
              animationDelay: `${dot.animationDelay}s`,
              boxShadow: `0 0px ${dot.boxShadowBlur}px ${dot.boxShadowOpacity}px #13264e`,
            }}
          />
        ))}
      </div>

      <div
        className={`absolute w-full bottom-[0px] left-[20px] text-[#e5e5e5] font-bold text-center select-none ${
          !scrollAlert ? "animate-slide-up" : "animate-slide-down"
        } `}
      >
        SCROLL TO TRAVEL
        <div className="w-full flex justify-center items-center mt-[4px]">
          <div className=" w-[2px] h-[100px] rounded-full animate-gradient" />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(-15px, -15px);
          }
          50% {
            transform: translate(20px, -10px);
          }
          75% {
            transform: translate(-10px, 15px);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        @keyframes circle {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(15px, -15px) rotate(90deg);
          }
          50% {
            transform: translate(0, -30px) rotate(180deg);
          }
          75% {
            transform: translate(-15px, -15px) rotate(270deg);
          }
          100% {
            transform: translate(0, 0) rotate(360deg);
          }
        }

        @keyframes zigzag {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(15px, -10px);
          }
          50% {
            transform: translate(-15px, 10px);
          }
          75% {
            transform: translate(15px, -10px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
      `}</style>
    </div>
  );
}
