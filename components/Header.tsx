"use client";

import {useThemeStore} from "@/stores/useThemeStore";

interface HeaderProps {
  title: string;
}

export default function Header({title}: HeaderProps) {
  const {isDarkMode} = useThemeStore();

  return (
    <div
      className={`sticky top-[3px] left-[0px] w-[200px] py-[4px] z-[999]
                      ${isDarkMode ? "bg-[#ffffff2e]" : "bg-[#]"}`}
    >
      <h2
        className={` text-[32px] font-bold text-center
                      ${isDarkMode ? "text-[#fff]" : "text-[#244998]"}`}
      >
        {title}
      </h2>
    </div>
  );
}
