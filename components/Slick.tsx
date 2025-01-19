"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image, {ImageLoaderProps} from "next/image";
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import {imgLoader} from "@/utils/imgLoader";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import Link from "next/link";
import {useThemeStore} from "@/stores/useThemeStore";

interface SlickProps {
  data: PfCategory[];
  setCount: (count: number) => void;
  selectedIdx: number;
  handleOpenDetail: () => void;
}

export default function Slick({
  data,
  setCount,
  selectedIdx,
  handleOpenDetail,
}: SlickProps) {
  const {isDarkMode} = useThemeStore();

  const [side, setSide] = useState(false);
  const [inSeat, setInSeat] = useState(false);
  const sliderRef = useRef<Slider>(null);
  const imgLoad = ({src, width, quality}: ImageLoaderProps) =>
    imgLoader({src, width, quality});

  useLayoutEffect(() => {
    const width = window.innerWidth;
    width <= 1200 ? setSide(true) : setSide(false);
  }, []);

  useEffect(() => {
    setCount(selectedIdx);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(selectedIdx);
    }
  }, [selectedIdx]);

  function PrevArrow({className, style, onClick}: any) {
    return (
      <IoIosArrowBack
        size={80}
        className={className}
        style={{
          ...style,
          display: "block",
          background: side && "#333333bc",
          width: side ? 40 : 48,
          height: side ? 40 : 48,
          left: side ? 16 : -120,
          zIndex: 3,
          borderRadius: 6,
        }}
        onClick={onClick}
        color="#ffffff"
      />
    );
  }

  function NextArrow({className, style, onClick}: any) {
    return (
      <IoIosArrowForward
        size={80}
        className={className}
        style={{
          ...style,
          display: "block",
          background: side && "#333333bc",
          width: side ? 40 : 48,
          height: side ? 40 : 48,
          right: side ? 16 : -120,
          zIndex: 3,
          borderRadius: 6,
        }}
        onClick={onClick}
        color="#ffffff"
      />
    );
  }

  const settings = {
    // dots: true,
    infinite: inSeat ? false : true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    // arrows: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange: (current: number) => setCount(current),
  };

  const getBackgroundClass = (part: string) => {
    const base =
      "px-2 rounded-sm text-[12px] font-bold text-center content-center";
    const colors: Record<string, string> = {
      Planning: "bg-[#a47864]",
      Design: "bg-[#fcad80]",
      Publishing: "bg-[#bb2649]",
      Frontend: "bg-[#6667ab]",
      Backend: "bg-[#649a64]",
    };

    return `${colors[part] || ""} ${base}`.trim();
  };

  return (
    <div className="">
      <Slider {...settings} className="" ref={sliderRef}>
        {data.map((i, idx) => {
          // console.log(i.url, idx);
          return (
            <div key={idx} className="!flex mx-[6px] my-[4px]">
              {i.imgUrl ? (
                <Image
                  src={i.imgUrl}
                  alt={i.title}
                  width={4000}
                  height={4000}
                  className="w-[300px] h-[169px] rounded-[4px] object-fill shadow-div"
                />
              ) : (
                <div
                  className={`w-[300px] h-[169px] rounded-[4px] content-center shadow-div
                                ${
                                  isDarkMode
                                    ? "bg-[#ffffff15]"
                                    : "bg-[#13264e4d]"
                                }`}
                >
                  <p className="text-[8px] font-bold">😢</p>
                </div>
              )}
              <div className="w-[700px] text-[white] px-[30px] text-left flex flex-col gap-[4px]">
                <div className="flex justify-between">
                  <div className="flex gap-[10px]">
                    {i.part.map((part, partIdx) => {
                      return (
                        <div key={partIdx} className={getBackgroundClass(part)}>
                          {part.toUpperCase()}
                        </div>
                      );
                    })}
                  </div>
                  <div>{i.period}</div>
                </div>

                <h4 className="text-[20px] font-bold">{i.title}</h4>

                <div className="w-full h-full flex flex-col justify-between">
                  <div className="text-[14px] text-[#eaeaea] break-words tracking-[0.6px]">
                    {i.intro}
                  </div>

                  <div className="flex w-full">
                    {i.url && i.gitUrl && (
                      <Link
                        target="_blank"
                        draggable={false}
                        href={`${i.url || i.gitUrl}`}
                        className={`w-full text-center py-[10px] rounded-r-[6px] transition-colors duration-[500ms] ease-in-out
                          ${
                            isDarkMode
                              ? "bg-[#ffffff15] hover:bg-[#ffffff40]"
                              : "bg-[#13264e60] hover:bg-[#13264e]"
                          }`}
                      >
                        VISIT
                      </Link>
                    )}

                    <button
                      onClick={handleOpenDetail}
                      className={`w-full text-center py-[10px] rounded-r-[6px] transition-colors duration-[500ms] ease-in-out
                                    ${
                                      isDarkMode
                                        ? "bg-[#ffffff15] hover:bg-[#ffffff40]"
                                        : "bg-[#13264e60] hover:bg-[#13264e]"
                                    }`}
                    >
                      DETAIL
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
