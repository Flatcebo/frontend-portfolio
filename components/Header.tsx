"use client";

import {useThemeStore} from "@/stores/useThemeStore";

interface HeaderProps {
  title: string;
}

export default function Header({title}: HeaderProps) {
  const {isDarkMode} = useThemeStore();

  return (
    <div
      className={`sticky top-[3px] left-[0px] py-[4px] z-[999]
                  exlg:w-[200px] xxs:w-[140px]
                      ${isDarkMode ? "bg-[#ffffff2e]" : "bg-[#]"}`}
    >
      <h2
        className={`font-bold text-center
                      lg:text-[32px] xxs:text-[24px]
                      ${isDarkMode ? "text-[#fff]" : "text-[#244998]"}`}
      >
        {title}
      </h2>
    </div>
  );
}
