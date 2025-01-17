"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image, {ImageLoaderProps} from "next/image";
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import {imgLoader} from "@/app/utils/imgLoader";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";

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
  // const params = useSearchParams();
  // const titleParam = params?.get("title") || "45";
  // const typeParam = params?.get("type") || "대형";
  // const router = useRouter();
  // const [data, setData] = useState<any[]>([]);
  const [side, setSide] = useState(false);
  const [inSeat, setInSeat] = useState(false);
  const sliderRef = useRef<Slider>(null);
  const imgLoad = ({src, width, quality}: ImageLoaderProps) =>
    imgLoader({src, width, quality});

  useLayoutEffect(() => {
    const width = window.innerWidth;
    width <= 1200 ? setSide(true) : setSide(false);
  }, []);

  // useEffect(() => {
  //   setCount(selectedIdx);
  // }, []);

  useEffect(() => {
    setCount(selectedIdx);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(selectedIdx);
    }
  }, [selectedIdx]);

  // useEffect(() => {

  // },[setCount])

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
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    // arrows: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange: (current: number) => setCount(current),
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
                  className={`w-[300px] h-[169px] rounded-[4px] content-center bg-[#ffffff15] shadow-div`}
                >
                  <p className="text-[8px] font-bold">😢</p>
                </div>
              )}
              <div className="w-[700px] text-[white] px-[30px] text-left flex flex-col gap-[4px]">
                <h4 className="text-[20px] font-bold">{i.title}</h4>

                <div className="w-full h-full flex flex-col justify-between">
                  <div className="text-[14px] break-words tracking-[0.6px]">
                    {i.intro}
                  </div>
                  <button
                    onClick={handleOpenDetail}
                    className="bg-[#ffffff15] text-center py-[10px] rounded-[2px] hover:bg-[#ffffff40]"
                  >
                    DETAIL
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
