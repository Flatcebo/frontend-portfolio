"use client";

import {MdOutlineNightlightRound} from "react-icons/md";

export default function ThemeButton() {
  return (
    <button className="fixed top-10 right-10 flex justify-center items-center rounded-full text-[40px] p-[10px] shadow-mode z-[997] animate-slide-up">
      <MdOutlineNightlightRound color="#244998" />
    </button>
  );
}
