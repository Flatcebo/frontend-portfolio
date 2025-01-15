"use client";

import Image from "next/image";
import skillData from "@/public/data/skills.json";
import {useEffect, useState} from "react";

interface DropdownProps {
  visible: boolean;
  onClose: () => void;
  setSelectTitle: (item: string) => void;
}

export default function Dropdown({
  visible,
  onClose,
  setSelectTitle,
}: DropdownProps) {
  const [data, setData] = useState<SkillItem[]>([]);

  useEffect(() => {
    const filteredFrameworks = skillData[0].framework.filter((item) =>
      ["NextJS", "ReactJS"].includes(item.title)
    );

    setData(filteredFrameworks);
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

  const handleChangeItem = (title: string) => {
    // console.log(title);
    setSelectTitle(title);
    onClose();
  };

  //   console.log(selectedTitle);

  return visible ? (
    <div className="absolute top-[50px] w-[60px] h-[auto] flex flex-col items-center ">
      {data.map((i, idx) => {
        return (
          <button
            key={idx}
            onClick={() => handleChangeItem(i.title)}
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
      })}
    </div>
  ) : null;
}
