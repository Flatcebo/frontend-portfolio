"use client";

import {useThemeStore} from "@/stores/useThemeStore";

export default function SectionHero() {
  const {isDarkMode} = useThemeStore();
  return (
    <section
      id="hero"
      className="relative w-full h-screen flex flex-col justify-start items-start z-[996] p-10 rounded-2xl text-center transition-opacity duration-[1000ms] ease-in-out animate-slide-up
                    leading-[90px] tracking-[0px]"
    >
      <div className="">
        <p
          className={`text-[60px] select-none text-left pl-[6px]
                        ${isDarkMode ? "text-[#ddd]" : "text-[#244998]"}`}
        >
          Frontend Developer
        </p>

        <h1
          className={`text-[140px] font-bold mb-4 select-none text-left
                        ${isDarkMode ? "text-[#ddd]" : "text-[#244998]"}`}
        >
          Park DongSeok
        </h1>
      </div>
    </section>
  );
}
// &apos;
