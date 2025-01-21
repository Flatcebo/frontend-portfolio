"use client";

import career from "@/public/data/career.json";
import {useDeviceStore} from "@/stores/useDeviceStore";
import {useThemeStore} from "@/stores/useThemeStore";
import {useLayoutEffect, useState} from "react";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";

export default function CareerItem() {
  const {isDarkMode} = useThemeStore();
  const {pc, tablet, mobile} = useDeviceStore();

  const [desc, setDesc] = useState(true);
  const [descIdx, setDescIdx] = useState<number>(0);

  useLayoutEffect(() => {
    if (tablet || mobile) {
      setDesc(false);
    }
  }, [tablet, mobile, pc]);

  return (
    <div
      className="relative w-full h-full flex justify-center items-center gap-[0px]
                      exlg:mt-[-59px] xxs:mt-[-59px]"
    >
      <div
        className="relative py-0 flex flex-wrap justify-between
                        exlg:w-[840px] xxs:w-full
                        exlg:h-auto xxs:h-[510px]
                        exlg:overflow-y-hidden xxs:overflow-y-auto
                        exlg:gap-[40px] xxs:gap-[10px]"
      >
        {career.map((career, index) => (
          <button
            key={index}
            onClick={() => {
              if (tablet || mobile) {
                setDescIdx(index);
                setDesc((any) => !any);
              }
            }}
            className="flex flex-col gap-[40px] text-left
                          exlg:w-[400px] xxs:w-full
                          exlg:h-[224px] xxs:h-auto
                          exlg:justify-start xxs:justify-center
                          exlg:items-start xxs:items-center
                          exlg:cursor-default xxs:cursor-pointer
                          "
          >
            <div
              className={`ml-0 rounded-lg 
                              exlg:w-[400px] xxs:w-[90%]
                              exlg:h-[224px] xxs:h-full
                              exlg:p-[16px] xxs:p-[12px]
                              ${isDarkMode ? "" : "bg-[#13264e72]"}
                              `}
            >
              <div className="flex justify-between">
                <h3
                  className={`font-bold
                              exlg:text-[20px] xxs:text-[16px]
                              ${isDarkMode ? "" : "text-[#fff]"}
                              `}
                >
                  {career.company}
                </h3>

                {tablet || mobile ? (
                  desc && career.task && index === descIdx ? (
                    <div className="text-[20px] text-gray-500">
                      <IoIosArrowUp />
                    </div>
                  ) : (
                    <div className="text-[20px] text-gray-500">
                      <IoIosArrowDown />
                    </div>
                  )
                ) : null}
              </div>

              <span
                className={`
                    exlg:text-[16px] xxs:text-[14px]
                    ${isDarkMode ? "text-gray-700" : "text-gray-300"}
                    `}
              >
                {career.period}
              </span>

              <p
                className={`
                    exlg:text-[16px] xxs:text-[14px]
                    ${isDarkMode ? "text-gray-500" : "text-[#9ca3af]"}
                    `}
              >
                {career.field}
              </p>
              {tablet || mobile ? (
                desc && career.task && index === descIdx ? (
                  <div
                    id="task"
                    className="text-[#d1d5db] tracking-[0.5px] w-full text-left animate-slide-up
                                  exlg:mt-[20px] xxs:mt-[4px]
                                  "
                  >
                    {career.task}
                  </div>
                ) : null
              ) : (
                <div
                  id="task"
                  className="text-[#d1d5db] tracking-[0.5px] w-full text-left
                                  exlg:mt-[20px] xxs:mt-[4px]
                                  "
                >
                  {career.task}
                </div>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
