"use client";

import {useThemeStore} from "@/stores/useThemeStore";

export default function SectionHero() {
  const {isDarkMode} = useThemeStore();
  return (
    <section
      id="hero"
      className="relative w-full h-screen flex flex-col z-[996]
                  rounded-2xl text-center transition-opacity duration-[1000ms] ease-in-out 
                  animate-slide-up tracking-[0px]
                    exlg:justify-start xxs:justify-center
                    exlg:items-start xxs:items-center
                    exlg:p-10 xxs:p-4
                    exlg:pt-10 xxs:pt-8
                    exlg:leading-[90px] xxs:leading-none"
    >
      <div className="">
        <p
          className={`select-none
                      exlg:text-[60px] xxs:text-[20px]
                      exlg:text-left xxs:text-center
                      exlg:pl-[6px] xxs:pl-[0px]
                      ${isDarkMode ? "text-[#ddd]" : "text-[#244998]"}
                      `}
        >
          Frontend Developer
        </p>

        <h1
          className={`font-bold mb-4 select-none text-left
                      exlg:text-[140px] xxs:text-[48px]
                      exlg:mt-0 xxs:mt-2
                      ${isDarkMode ? "text-[#ddd]" : "text-[#244998]"}`}
        >
          Park DongSeok
        </h1>
      </div>
    </section>
  );
}
// &apos;
