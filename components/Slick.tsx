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
import SlickBottomButton from "@/components/SlickBottomButton";

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
          width: side ? 40 : 48,
          height: side ? 40 : 48,
          left: side ? 0 : -60,
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
          width: side ? 40 : 48,
          height: side ? 40 : 48,
          right: side ? 0 : -60,
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
      "rounded-sm font-bold text-center content-center lg:text-[12px] xxs:text-[4px] lg:w-auto xxs:w-[30px] lg:h-auto xxs:h-[10px] lg:px-2 xxs:px-0";
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
    <div className="w-full">
      <Slider {...settings} className="" ref={sliderRef}>
        {data.map((i, idx) => {
          // console.log(i.url, idx);
          return (
            <div
              key={idx}
              className="w-full !flex my-[4px] gap-[10px]
                          lg:flex-row xxs:flex-col
                          lg:mx-[6px] xxs:mx-[0px]
                          lg:px-[0px] xxs:px-[6px]"
            >
              <div
                className="flex
                                lg:gap-[0px] xxs:gap-[10px]"
              >
                {i.imgUrl ? (
                  <div className="flex flex-col items-center gap-[4px]">
                    <Image
                      src={i.imgUrl}
                      alt={i.title}
                      width={4000}
                      height={4000}
                      className="rounded-[4px] object-fill shadow-div
                              lg:w-[300px] xxs:w-[120px]
                              lg:h-[169px] xxs:h-[68px]"
                    />
                    <div className="text-[12px] text-center lg:hidden xxs:flex">
                      {i.period}
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-[4px]">
                    <div
                      className={`rounded-[4px] content-center shadow-div
                                lg:w-[300px] xxs:w-[120px]
                                lg:h-[169px] xxs:h-[68px]
                                ${
                                  isDarkMode
                                    ? "bg-[#ffffff15]"
                                    : "bg-[#13264e4d]"
                                }`}
                    >
                      <p className="text-[8px] font-bold">😢</p>
                    </div>
                    <div className="text-[12px] text-center lg:hidden xxs:flex">
                      {i.period}
                    </div>
                  </div>
                )}
                <div
                  className="text-[white] text-left flex flex-col gap-[4px] bg-[]
                                lg:w-[700px] xxs:w-[60%]
                                lg:h-auto xxs:h-auto
                                lg:px-[30px] xxs:px-[0px]"
                >
                  <div className="flex justify-between">
                    <div
                      className="flex
                                      lg:gap-[10px] xxs:gap-[4px]"
                    >
                      {i.part.map((part, partIdx) => {
                        return (
                          <div
                            key={partIdx}
                            className={`${getBackgroundClass(part)} `}
                          >
                            {part.toUpperCase()}
                          </div>
                        );
                      })}
                    </div>
                    <div className="lg:flex xxs:hidden">{i.period}</div>
                  </div>

                  <h4
                    className="font-bold
                                lg:text-[20px] xxs:text-[14px]"
                  >
                    {i.title}
                  </h4>

                  <div className="w-full h-full flex flex-col justify-between">
                    <div
                      className="text-[#eaeaea] break-words
                                    lg:text-[14px] xxs:text-[10px]
                                    lg:tracking-[0.6px] xxs:tracking-[0px]"
                    >
                      {i.intro}
                    </div>

                    <div className="lg:flex xxs:hidden">
                      <SlickBottomButton
                        i={i}
                        handleOpenDetail={handleOpenDetail}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:hidden xxs:flex">
                <SlickBottomButton i={i} handleOpenDetail={handleOpenDetail} />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
