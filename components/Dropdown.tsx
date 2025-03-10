"use client";

import Image from "next/image";
import pfData from "@/public/data/portfolio.json";
import {useEffect, useState} from "react";

interface DropdownProps {
  visible: boolean;
  onClose: () => void;
  setSelectedItem: (title: PfCategory) => void;
}

export default function Dropdown({
  visible,
  onClose,
  setSelectedItem,
}: DropdownProps) {
  const [data, setData] = useState<PfCategory[]>([]);

  useEffect(() => {
    const filteredFrameworks = pfData.filter((item) =>
      item.part.includes("Frontend")
    );

    // setData(filteredFrameworks);
    // console.log(filteredFrameworks);
  }, [visible]);

  //   useEffect(() => {
  //     const handleClickOutside = (event: MouseEvent) => {
  //       const target = event.target as HTMLElement;
  //       if (visible && !target.closest(".dropdown")) {
  //         onClose();
  //       }
  //     };

  //     document.addEventListener("mousedown", handleClickOutside);
  //     return () => {
  //       document.removeEventListener("mousedown", handleClickOutside);
  //     };
  //   }, [visible, onClose]);

  const handleChangeItem = (item: PfCategory) => {
    // console.log(title);
    setSelectedItem(item);
    onClose();
  };

  //   console.log(selectedTitle);

  return visible ? (
    <div className="absolute top-[60px] right-0 w-[60px] h-[auto] flex flex-col items-center z-[98]">
      <button
        // onClick={() => handleChangeItem({title: "ALL", imgUrl: ""})}
        className="w-[32px] h-[32px] bg-[black] flex justify-center items-center mb-[10px] text-[16px] text-center rounded-full border-[3px] z-[99]"
      >
        ALL
      </button>

      {/* {data.map((i, idx) => {
        return (
          <button
            key={idx}
            onClick={() => handleChangeItem(i)}
            className="w-[32px] h-[32px] bg-[white] rounded-full flex justify-center items-center mb-[10px] z-[99]"
          >
            <Image
              src={i.imgUrl}
              alt={i.title}
              width={4000}
              height={4000}
              draggable={false}
              className="w-[28px] h-[28px] rounded-full bg-[white]"
            />
          </button>
        );
      })} */}
    </div>
  ) : null;
}
