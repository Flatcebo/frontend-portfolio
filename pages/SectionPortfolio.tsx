"use client";

import Dropdown from "@/components/Dropdown";
import Image from "next/image";
import {useEffect, useState} from "react";
import {IoIosArrowDown} from "react-icons/io";
import pfData from "@/public/data/portfolio.json";
import WebView from "@/components/WebView";
import Header from "@/components/Header";
import Slick from "@/components/Slick";

export default function SectionPortfolio() {
  const [data, setData] = useState<PfCategory[]>([]);
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [webView, setWebView] = useState(false);
  const [selectedItem, setSelectedItem] = useState<SkillItem>({
    title: "ALL",
    imgUrl: "",
  });
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [selectedUrl, setSelectedUrl] = useState("");

  useEffect(() => {
    setData(pfData as PfCategory[]);
  }, []);

  useEffect(() => {
    const selectedUrl = data.find((item, idx) => idx === selectedIdx)?.url;
    setSelectedUrl(selectedUrl as any);
  }, [selectedIdx]);

  const handleDropdown = () => {
    setDropdown((any) => !any);
  };

  const handleClickPortfolio = (idx: number, url: string) => {
    setSelectedIdx(idx);
    setSelectedUrl(url);
  };

  // console.log(selectedUrl);

  return (
    <section
      id="portfolio"
      className="relative w-full h-screen z-[996] p-0 rounded-2xl text-center transition-opacity duration-[1000ms] ease-in-out animate-slide-up"
    >
      {/* {dropdown && (
        <button
          onClick={handleDropdown}
          className="absolute w-full h-screen z-[999]"
        />
      )} */}

      <Header title="PORTFOLIO" />

      <div className="relative w-full h-full flex flex-col justify-start items-center gap-[0px]">
        {/* <Image
          src={`/images/portfolio/test.png`}
          alt="PROJECT"
          width={4000}
          height={4000}
          className="absolute w-[full] h-[screen] rounded-[10px]"
          // className="w-[400px] h-[225px] rounded-[10px]"
        /> */}
        <div className="relative w-[1000px] h-[600px]">
          <WebView url={selectedUrl} />

          <div className="relative w-full h-[60px] flex justify-between items-center text-left">
            <div className="flex justify-center items-center gap-[10px] ml-1">
              {data.map((i, idx) => {
                // console.log(i.url);
                return (
                  <button
                    onClick={() => handleClickPortfolio(idx, i.url)}
                    className={`${
                      idx === selectedIdx &&
                      "border-[1px] border-[#cacaca] rounded-[4px]"
                    } px-[1px] `}
                  >
                    {/* <Image
                      src={`/images/portfolio/test.png`}
                      alt={i.title}
                      width={4000}
                      height={4000}
                      className="w-[57px] h-[32px] rounded-[4px] object-fill"
                    /> */}
                    {i.url ? (
                      <iframe
                        src={i.url}
                        // alt={i.title}
                        width={4000}
                        height={4000}
                        allow="fullscreen"
                        draggable={false}
                        className="w-[57px] h-[32px] rounded-[4px] object-fill pointer-events-none"
                      />
                    ) : (
                      <div
                        className={`w-[57px] h-[32px] rounded-[4px] content-center bg-[#ffffff15]`}
                      >
                        <p className="text-[8px] font-bold">😢</p>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            <button
              onClick={handleDropdown}
              className="flex items-center gap-[4px]"
            >
              <span className="text-[18px]">{selectedItem.title}</span>

              <IoIosArrowDown color="#fff" size={24} />
            </button>

            <Dropdown
              visible={dropdown}
              onClose={() => setDropdown(false)}
              setSelectedItem={(item) =>
                setSelectedItem({title: item.title, imgUrl: item.imgUrl})
              }
            />
          </div>

          <div className="w-full h-[170px] flex flex-col bg-[] p-0 gap-[0px] mb-[0px]">
            <Slick
              data={data}
              setCount={(count) => setSelectedIdx(count)}
              // setSelectedUrl={(url) => setSelectedUrl(url)}
              selectedIdx={selectedIdx}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
