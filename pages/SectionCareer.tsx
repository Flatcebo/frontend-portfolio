"use client";

import Header from "@/components/Header";
import career from "@/public/data/career.json";
import {useThemeStore} from "@/stores/useThemeStore";

export default function SectionCareer() {
  const {isDarkMode} = useThemeStore();
  return (
    <section
      id="career"
      className="relative w-full h-screen z-[996] p-0 rounded-2xl text-center transition-opacity duration-[1000ms] ease-in-out animate-slide-up"
    >
      <Header title="CAREER" />

      <div className="relative w-full h-full flex justify-center items-center gap-[0px] pb-[100px]">
        <div className="relative w-[840px] py-0 flex flex-wrap justify-between gap-[40px] ">
          {career.map((career, index) => (
            <div
              key={index}
              className="h-[200px] flex flex-col justify-start items-start gap-[0px] text-left"
            >
              <div
                className={`ml-0 w-[400px] h-[224px] p-[16px] rounded-lg
                                ${isDarkMode ? "" : "bg-[#13264e72]"}`}
              >
                <h3
                  className={`text-xl font-bold
                                  ${isDarkMode ? "" : "text-[#fff]"}`}
                >
                  {career.company}
                </h3>
                <span
                  className={`${
                    isDarkMode ? "text-gray-700" : "text-gray-300"
                  }`}
                >
                  {career.period}
                </span>
                <p
                  className={`${
                    isDarkMode ? "text-gray-500" : "text-[#9ca3af]"
                  }`}
                >
                  {career.field}
                </p>
                <div className="text-[#d1d5db] tracking-[0.5px] w-full mt-[20px] text-left">
                  {career.task}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
