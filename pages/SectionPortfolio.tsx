"use client";

import Dropdown from "@/components/Dropdown";
import Image from "next/image";
import {useEffect, useState} from "react";
import {IoIosArrowDown} from "react-icons/io";

export default function SectionPortfolio() {
  const [rotateAngle, setRotateAngle] = useState(0);
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("ALL");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionStart = 500;
      const sectionEnd = 1000;

      // 스크롤 위치가 2번째 섹션 범위에 있을 때만 회전값 계산
      if (scrollPosition >= sectionStart && scrollPosition <= sectionEnd) {
        const progress =
          (scrollPosition - sectionStart) / (sectionEnd - sectionStart); // 0 ~ 1 비율
        setRotateAngle(progress * 360); // 0도 ~ 360도
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdown = () => {
    setDropdown((any) => !any);
  };

  // console.log(title);
  return (
    <section
      id="portfolio"
      className="relative w-full h-screen flex justify-center items-center z-[998] p-0 rounded-2xl text-center transition-opacity duration-[1000ms] ease-in-out animate-slide-up"
    >
      {/* {dropdown && (
        <button
          onClick={handleDropdown}
          className="absolute w-full h-screen z-[999]"
        />
      )} */}

      <div className="relative w-full h-auto flex flex-col justify-center items-center gap-[0px]">
        <h2 className="text-[48px] w-auto font-bold text-center mb-10 leading-[40px]">
          PORTFOLIO
        </h2>

        <div className="relative w-[700px] h-[60px] flex justify-end items-center text-left">
          <button
            onClick={handleDropdown}
            className="flex items-center gap-[4px]"
          >
            <div className="w-[32px] h-[32px] bg-[white] rounded-full flex justify-center items-center ">
              <Image
                src={`/images/skills/nextjs_rounded.svg`}
                alt="PROJECT"
                width={4000}
                height={4000}
                className="w-[28px] h-[28px] rounded-full bg-[white]"
              />
            </div>
            {title === "ALL" && <span className="text-[18px]">{title}</span>}

            <IoIosArrowDown color="#fff" size={24} />
          </button>

          <Dropdown
            visible={dropdown}
            onClose={() => setDropdown(false)}
            setSelectTitle={(i) => setTitle(i)}
          />
        </div>

        <div className="relative w-[700px] h-[600px] flex flex-col gap-[10px]">
          <div className="flex">
            <Image
              src={`/images/skills/mariadb.png`}
              alt="PROJECT"
              width={4000}
              height={4000}
              className="w-[200px] h-[200px]"
            />

            <div className="text-[white] w-[500px] px-[40px] text-left flex flex-col gap-[40px]">
              <h4 className="text-[28px] font-bold">PROJECT TITLE</h4>

              <div className="text-[18px] break-words tracking-[0.6px]">
                설명입니다 설명입니다설명입니다 설명입니다설명입니다
                설명입니다설명입니다 설명입니다설명입니다 설명입니다
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
