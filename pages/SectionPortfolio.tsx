"use client";

import Dropdown from "@/components/Dropdown";
import Image from "next/image";
import React, {useEffect, useState} from "react";
import {IoIosArrowDown} from "react-icons/io";
import pfData from "@/public/data/portfolio.json";
import WebView from "@/components/WebView";
import Header from "@/components/Header";
import Slick from "@/components/Slick";
import DetailBox from "@/components/DetailBox";
import {useRefresh} from "@/contexts/RefreshContext";
import {useThemeStore} from "@/stores/useThemeStore";

export default function SectionPortfolio() {
  const {isDarkMode} = useThemeStore();

  const [data, setData] = useState<PfCategory[]>([]);
  const [selectedData, setSelectedData] = useState<PfCategory[]>([]);
  const [filterButton, setFilterButton] = useState<boolean>(false);
  const [detailBox, setDetailBox] = useState<boolean>(false);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [selectedUrl, setSelectedUrl] = useState("");

  const {handleRefresh} = useRefresh();

  useEffect(() => {
    const filtered = pfData.filter((item) => item.part.includes("Frontend"));
    setData(filtered as PfCategory[]);
  }, []);

  useEffect(() => {
    const select = data.filter((i, idx) => idx === selectedIdx);
    const selectedUrl = data.find((item, idx) => idx === selectedIdx)?.url;

    setSelectedData(select as any);
    setSelectedUrl(selectedUrl as any);
  }, [data, selectedIdx]);

  const handleClickPortfolio = (idx: number, url: string) => {
    setSelectedIdx(idx);
    setSelectedUrl(url);
  };

  const handleOpenDetail = () => {
    handleRefresh();
    setDetailBox(true);
  };

  const handleCloseDetail = () => {
    handleRefresh();
    setDetailBox(false);
  };

  const handleClickFilterAll = () => {
    setFilterButton(true);
    setData(pfData as PfCategory[]);
  };

  const handleClickFilterFront = () => {
    const filtered = pfData.filter((item) => item.part.includes("Frontend"));

    setFilterButton(false);

    setData(filtered as PfCategory[]);
  };
  // console.log(selectedUrl);

  return (
    <section
      id="portfolio"
      className="relative w-full h-screen z-[996] p-0 rounded-2xl text-center transition-opacity duration-[1000ms] ease-in-out animate-slide-up"
    >
      <Header title="PORTFOLIO" />

      <div className="relative w-full h-full flex flex-col justify-center items-center gap-[0px] pt-[-59px]">
        <div
          className="relative h-auto
                      lg:w-[1000px] xxs:w-[90%]"
        >
          <div
            className="relative aspect-[16/9] w-full flex transition-colors duration-[500ms] ease-in-out animate-opacity
                            exlg:flex-row xxs:flex-col
                            exlg:gap-[20px] xxs:gap-[10px]"
          >
            <WebView url={selectedUrl} />

            <DetailBox
              visible={detailBox}
              data={selectedData}
              handleCloseDetail={handleCloseDetail}
            />
          </div>

          <div
            className="relative w-full flex justify-between text-left
                        lg:h-[60px] xxs:h-auto
                        lg:flex-row xxs:flex-col-reverse
                        lg:items-center xxs:items-start
                        lg:my-[0px] xxs:my-[10px]
                        lg:gap-[0px] xxs:gap-[10px]
                        "
          >
            {/* Panorama */}
            <div
              className="flex items-center gap-[10px] ml-1
                          lg:justify-center xxs:justify-start
                          lg:flex-nowrap xxs:flex-wrap"
            >
              {data.map((i, idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => handleClickPortfolio(idx, i.url)}
                    className={`${
                      idx === selectedIdx &&
                      "outline-[2px] outline-[#cacaca] outline rounded-[4px]"
                    } px-[0px] `}
                  >
                    {i.imgUrl ? (
                      <Image
                        src={i.imgUrl}
                        alt={i.title}
                        width={4000}
                        height={4000}
                        draggable={false}
                        className="w-[57px] h-[32px] rounded-[4px] object-fill hover:shadow-div transition-all duration-[500ms] ease-in-out animate-opacity"
                      />
                    ) : (
                      <div
                        className={`w-[57px] h-[32px] rounded-[4px] content-center hover:shadow-div transition-all duration-[500ms] ease-in-out animate-opacity
                                      ${
                                        isDarkMode
                                          ? "bg-[#ffffff15]"
                                          : "bg-[#13264e4d]"
                                      }`}
                      >
                        <p className="text-[8px] font-bold">😢</p>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
            {/*  */}

            {/* Select */}
            <div
              className={`rounded-full w-full flex
                              ${
                                isDarkMode ? "bg-[#ffffff15]" : "bg-[#13264e60]"
                              }`}
            >
              <button
                onClick={handleClickFilterAll}
                className={`py-[4px] text-center content-center rounded-full transition-colors duration-[500ms] ease-in-out
                              lg:w-[80px] xxs:w-[100%]
                              ${
                                isDarkMode
                                  ? filterButton
                                    ? "bg-[#ffffff40]"
                                    : ""
                                  : filterButton
                                  ? "bg-[#13264e90]"
                                  : ""
                              }
                              `}
              >
                ALL
              </button>

              <button
                onClick={handleClickFilterFront}
                className={`py-[4px] text-center content-center rounded-full transition-colors duration-[500ms] ease-in-out
                              lg:w-[80px] xxs:w-[100%]
                              ${
                                isDarkMode
                                  ? !filterButton
                                    ? "bg-[#ffffff40]"
                                    : ""
                                  : !filterButton
                                  ? "bg-[#13264e90]"
                                  : ""
                              }`}
              >
                FRONT
              </button>
            </div>

            {/* <button
              onClick={handleDropdown}
              className="flex items-center gap-[4px]"
            >
              <span className="text-[18px]">{selectedItem.title}</span>

              <IoIosArrowDown color="#fff" size={24} />
            </button> */}

            {/* <Dropdown
              visible={dropdown}
              onClose={() => setDropdown(false)}
              setSelectedItem={(item) =>
                setSelectedItem({title: item.title, imgUrl: item.imgUrl})
              }
            /> */}
          </div>
          {/*  */}

          <div className="w-full h-[170px] flex flex-col bg-[] p-0 gap-[0px] mb-[0px]">
            <Slick
              data={data}
              setCount={(count) => setSelectedIdx(count)}
              selectedIdx={selectedIdx}
              handleOpenDetail={handleOpenDetail}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
