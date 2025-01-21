"use client";

import {useThemeStore} from "@/stores/useThemeStore";
import React, {useMemo} from "react";

interface DetailBoxProps {
  visible: boolean;
  data: PfCategory[];
  handleCloseDetail: () => void;
}

export default function DetailBox({
  visible,
  data,
  handleCloseDetail,
}: DetailBoxProps) {
  const {isDarkMode} = useThemeStore();

  const content = useMemo(() => {
    return (
      <div
        className="text-left w-full overflow-y-auto transition-colors duration-[500ms] ease-in-out animate-opacity
                        exlg:p-[24px] xxs:p-[16px]"
      >
        {data &&
          data.map((i, idx) => {
            return (
              <article className="w-full flex flex-col gap-[20px]" key={idx}>
                <div className="w-full break-words">
                  <h4 className="text-[18px] font-bold">주요 기술 스택</h4>

                  <div className="flex justify-between px-0 gap-[10px]">
                    {i.frontStacks.length !== 0 && (
                      <div className="w-full">
                        <h4 className="text-[16px]">FRONTEND</h4>

                        <ul className="pl-[16px]">
                          {i.frontStacks.map((frontStack, frontStackIdx) => {
                            return (
                              <li
                                key={frontStackIdx}
                                className="text-left list-disc text-[14px] tracking-[0.4px]"
                              >
                                {frontStack}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}

                    {i.backStacks.length !== 0 && (
                      <div className="w-full">
                        <h4>BACKEND</h4>

                        <ul className="pl-[16px]">
                          {i.backStacks.map((backStack, backStackIdx) => {
                            return (
                              <li
                                key={backStackIdx}
                                className="text-left list-disc text-[14px] tracking-[0.4px]"
                              >
                                {backStack}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* 주요 담당 업무 */}
                <div className="w-full break-words">
                  <h4 className="text-[18px] font-bold ">주요 담당 업무</h4>

                  {i.task &&
                    i.task.map((task, taskIdx) => {
                      return (
                        <div
                          key={taskIdx}
                          className="flex justify-between px-0 gap-[10px]"
                        >
                          {task.front.length !== 0 && (
                            <div className="w-full">
                              <h4 className="text-[16px]">FRONTEND</h4>
                              <ul className="pl-[16px]">
                                {task.front.map((front, frontIdx) => {
                                  return (
                                    <li
                                      key={frontIdx}
                                      className="text-left list-disc text-[14px] tracking-[0.4px]"
                                    >
                                      {front}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          )}

                          {task.back.length !== 0 && (
                            <div className="w-full">
                              <h4>BACKEND</h4>

                              <ul className="pl-[16px]">
                                {task.back.map((back, backIdx) => {
                                  return (
                                    <li
                                      key={backIdx}
                                      className="text-left list-disc text-[14px] tracking-[0.4px]"
                                    >
                                      {back}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          )}
                        </div>
                      );
                    })}
                </div>

                {i.desc && (
                  <div>
                    <h4 className="text-[18px] font-bold pb-[4px]">
                      추가 설명
                    </h4>

                    <p className="text-[14px] tracking-[0.4px]">{i.desc}</p>
                  </div>
                )}
              </article>
            );
          })}
      </div>
    );
  }, [visible, data]);

  return visible ? (
    <div
      className={` rounded-[10px] flex flex-col justify-between z-[999]
                    exlg:relative xxs:absolute
                    exlg:w-[1500px] xxs:w-full
                    exlg:h-full xxs:h-full
                      ${
                        isDarkMode
                          ? "exlg:bg-[#ffffff15] xxs:bg-[#000000b0]"
                          : "exlg:bg-[#13264e4d] xxs:bg-[#000000b0]"
                      }`}
    >
      {content}

      <button
        onClick={handleCloseDetail}
        className={`text-center py-[10px] rounded-b-[10px] transition-colors duration-[500ms] ease-in-out
                    ${
                      isDarkMode
                        ? "bg-[#ffffff15] hover:bg-[#ffffff40]"
                        : "bg-[#ffffff15] hover:bg-[#ffffff40]"
                    }`}
      >
        CLOSE
      </button>
    </div>
  ) : null;
}
