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
}

export default function Slick({data, setCount, selectedIdx}: SlickProps) {
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
              <Image
                src={`/images/portfolio/test.png`}
                alt={i.title}
                width={4000}
                height={4000}
                draggable={false}
                loader={imgLoad}
                // className=" w-[full] h-[screen] rounded-[10px]"
                className="w-[300px] h-[169px] rounded-[10px] shadow-div"
              />
              <div className="text-[white] px-[30px] text-left flex flex-col gap-[30px]">
                <h4 className="text-[28px] font-bold">{i.title}</h4>

                <div className="text-[18px] break-words tracking-[0.6px]">
                  설명입니다 설명입니다설명입니다 설명입니다설명입니다
                  설명입니다설명입니다 설명입니다설명입니다 설명입니다
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
