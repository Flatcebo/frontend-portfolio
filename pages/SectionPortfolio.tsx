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

export default function SectionPortfolio() {
  const [data, setData] = useState<PfCategory[]>([]);
  const [selectedData, setSelectedData] = useState<PfCategory[]>([]);
  const [filterButton, setFilterButton] = useState<boolean>(false);
  const [detailBox, setDetailBox] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<SkillItem>({
    title: "ALL",
    imgUrl: "",
  });
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [selectedUrl, setSelectedUrl] = useState("");

  const {refresh, handleRefresh} = useRefresh();

  useEffect(() => {
    const filtered = pfData.filter((item) => item.part.includes("Frontend"));
    setData(filtered as PfCategory[]);
    // setSelectedData(select as any);
  }, []);

  useEffect(() => {
    const select = data.filter((i, idx) => idx === selectedIdx);
    const selectedUrl = data.find((item, idx) => idx === selectedIdx)?.url;

    setSelectedData(select as any);
    setSelectedUrl(selectedUrl as any);
  }, [data, selectedIdx]);

  // useEffect(() => {
  //   const title = selectedItem.title;
  //   const filter = data.filter((i, idx) => i.frontStacks.includes(title));

  //   if (title !== "ALL") {
  //     setData(filter);
  //   }
  //   // setData(filter);

  //   console.log("filter =>", filter);
  // }, [selectedItem]);

  // console.log(selectedData);

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
    // console.log(filteredFrameworks);
  };
  // console.log(selectedUrl);

  return (
    <section
      id="portfolio"
      className="relative w-full h-screen z-[996] p-0 rounded-2xl text-center transition-opacity duration-[1000ms] ease-in-out animate-slide-up"
    >
      <Header title="PORTFOLIO" />

      <div className="relative w-full h-full flex flex-col justify-start items-center gap-[0px] pt-[34px]">
        <div className="relative w-[1000px] h-auto">
          <div className="w-full h-[563px] flex gap-[20px] transition-colors duration-[500ms] ease-in-out animate-opacity">
            <WebView url={selectedUrl} />

            <DetailBox
              visible={detailBox}
              data={selectedData}
              handleCloseDetail={handleCloseDetail}
            />
          </div>

          <div className="relative w-full h-[60px] flex justify-between items-center text-left">
            {/* Panorama */}
            <div className="flex justify-center items-center gap-[10px] ml-1">
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
                        className={`w-[57px] h-[32px] rounded-[4px] content-center bg-[#ffffff15] hover:shadow-div transition-all duration-[500ms] ease-in-out animate-opacity`}
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
            <div className="bg-[#ffffff15] rounded-full">
              <button
                onClick={handleClickFilterAll}
                className={`w-[80px] py-[4px] text-center content-center rounded-full transition-colors duration-[500ms] ease-in-out ${
                  filterButton && "bg-[#ffffff40]"
                }`}
              >
                ALL
              </button>

              <button
                onClick={handleClickFilterFront}
                className={`w-[80px] py-[4px] text-center content-center rounded-full transition-colors duration-[500ms] ease-in-out ${
                  !filterButton && "bg-[#ffffff40]"
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
              // setSelectedUrl={(url) => setSelectedUrl(url)}
              selectedIdx={selectedIdx}
              handleOpenDetail={handleOpenDetail}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
