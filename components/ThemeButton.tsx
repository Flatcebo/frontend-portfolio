"use client";

import {useThemeStore} from "@/stores/useThemeStore";
import {MdOutlineNightlightRound} from "react-icons/md";
import {useShallow} from "zustand/react/shallow";

export default function ThemeButton() {
  const {toggleTheme} = useThemeStore(useShallow((state) => state));

  return (
    <button
      onClick={toggleTheme}
      className={`fixed top-10 right-10 flex justify-center items-center rounded-full text-[40px] p-[10px] shadow-mode z-[997] animate-slide-up`}
    >
      <MdOutlineNightlightRound color="#244998" />
    </button>
  );
}
