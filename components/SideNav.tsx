"use client";

import {useThemeStore} from "@/stores/useThemeStore";

interface INavProps {
  view: string;
}

export default function SideNav({view}: INavProps) {
  const {isDarkMode} = useThemeStore();

  const sections = ["HERO", "CAREER", "SKILLS", "PORTFOLIO", "CONTACT"];

  const handleScrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({behavior: "smooth", block: "start"});
    }
  };

  return (
    <div className="fixed top-1/2 right-6 w-[65px] transform -translate-y-1/2 z-[997] ">
      <ul
        className={`flex flex-col gap-[40px] animate-slide-up
                        ${isDarkMode ? "text-[#e5e5e5]" : "text-[#fff]"}`}
      >
        {sections.map((section) => (
          <li
            key={section}
            className={`hover:text-[#244998] ${
              view === section ? "text-[#244998]" : undefined
            }`}
          >
            <button onClick={() => handleScrollToSection(section)}>
              {section}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
