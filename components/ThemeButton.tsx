"use client";

import {useThemeStore} from "@/stores/useThemeStore";
import {MdOutlineNightlightRound} from "react-icons/md";
import {useShallow} from "zustand/react/shallow";

export default function ThemeButton() {
  const {toggleTheme} = useThemeStore(useShallow((state) => state));

  return (
    <button
      onClick={toggleTheme}
      className={`fixed flex justify-center items-center rounded-full
                  shadow-mode hover:shadow-[#244998ca] z-[997] animate-slide-up
                  text-[#244998] hover:text-[#244998ca]
                    exlg:w-[60px] xxs:w-[52px]
                    exlg:h-[60px] xxs:h-[52px]
                    exlg:top-10 xxs:top-20
                    exlg:right-10 xxs:right-2
                    exlg:text-[40px] xxs:text-[28px] `}
    >
      <MdOutlineNightlightRound className="" />
    </button>
  );
}
