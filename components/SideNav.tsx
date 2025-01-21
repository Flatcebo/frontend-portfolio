"use client";

import {useThemeStore} from "@/stores/useThemeStore";
import {useState} from "react";
import {RxHamburgerMenu} from "react-icons/rx";
import {IoClose} from "react-icons/io5";

interface INavProps {
  view: string;
}

export default function SideNav({view}: INavProps) {
  const {isDarkMode} = useThemeStore();
  const [menu, setMenu] = useState(false);

  const sections = ["HERO", "CAREER", "SKILLS", "PORTFOLIO", "CONTACT"];

  const handleScrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({behavior: "smooth", block: "start"});
    }
  };

  const handleClickMenu = () => {
    setMenu((any) => !any);
  };

  const handleClickClose = () => {
    setMenu(false);
  };

  return (
    <div
      className="fixed z-[997]
                    exlg:w-[65px] xxs:w-auto
                    exlg:top-1/2 xxs:top-4
                    exlg:transform xxs:transform-none
                    exlg:-translate-y-1/3 xxs:-translate-y-none
                    exlg:right-6 xxs:right-2
                    "
    >
      <ul
        className={`flex-col animate-slide-up
                      exlg:flex xxs:hidden
                      exlg:gap-[40px] xxs:gap-[30px]
                        ${isDarkMode ? "text-[#e5e5e5]" : "text-[#fff]"}`}
      >
        {sections.map((section) => (
          <li
            key={section}
            className={`hover:text-[#244998] text-[16px] ${
              view === section ? "text-[#244998]" : undefined
            }`}
          >
            <button onClick={() => handleScrollToSection(section)}>
              {section}
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={handleClickMenu}
        className="text-[28px] w-[52px] h-[52px] flex justify-center items-center animate-slide-up
                    shadow-mode hover:shadow-[#244998ca] rounded-full
                  text-[#244998] hover:text-[#244998ca]
                    exlg:hidden xxs:relative"
      >
        <RxHamburgerMenu className="" />
      </button>

      {menu && (
        <div className="fixed top-0 right-0 w-full h-screen bg-[#000000ca] p-0">
          <button
            onClick={handleClickClose}
            className="absolute top-2 right-2 text-[40px] content-end z-[999]"
          >
            <IoClose />
          </button>

          <ul
            className={`w-full h-screen flex flex-col justify-center items-center animate-slide-up gap-[20px]
                        ${isDarkMode ? "text-[#e5e5e5]" : "text-[#fff]"}`}
          >
            {sections.map((section) => (
              <li
                key={section}
                className={`hover:text-[#244998] text-[20px] ${
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
      )}
    </div>
  );
}
