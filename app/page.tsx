"use client";

import Link from "next/link";
import {useEffect, useRef, useState} from "react";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-visible flex justify-center items-center">
      <Link
        href={`/portfolio`}
        draggable={false}
        className="w-[300px] h-[100px] text-center content-center text-[28px] font-bold bg-[#ffffff20] rounded-md shadow-horizon 
                  active:bg-[#ffffff10] active:shadow-[#ffffffaa] active:text-[#ffffffaa]"
      >
        PORTFOLIO
      </Link>
    </div>
  );
}
