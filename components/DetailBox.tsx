"use client";

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
  const categories: PfCategoryKey[] = [
    "period",
    "part",
    "language",
    "frontStacks",
    "backStacks",
    "url",
    "gitUrl",
    "desc",
  ];

  const content = useMemo(() => {
    return (
      <div className="p-4 text-left w-full">
        {data &&
          data.map((i, idx) => {
            return (
              <article className="w-full" key={idx}>
                {categories.map((cat, cateIdx) => {
                  const value = i[cat];

                  return (
                    <div className="w-full break-words" key={cateIdx}>
                      <h4 className="text-[18px] font-bold">{cat}</h4>

                      {/* 배열인 경우 */}
                      {Array.isArray(value) ? (
                        <ul className="pl-[6px] w-full flex">
                          {value.map((s, sIdx) => (
                            <li key={sIdx} className="text-left">
                              {s}
                            </li>
                          ))}
                        </ul>
                      ) : value && typeof value === "object" ? (
                        // 객체인 경우
                        <ul className="pl-[6px] w-full">
                          {Object.entries(value).map(
                            ([key, val]: any, objIdx) => (
                              <li key={objIdx} className="text-left">
                                <strong>{key}: </strong>
                                {Array.isArray(val) ? val.join(", ") : val}
                              </li>
                            )
                          )}
                        </ul>
                      ) : (
                        // 문자열이나 다른 타입 처리
                        <p>{value || "N/A"}</p>
                      )}
                    </div>
                  );
                })}
              </article>
            );
          })}
      </div>
    );
  }, [visible, data]);

  return visible ? (
    <div className="w-[1500px] h-full bg-[#ffffff15] rounded-[10px] flex flex-col justify-between">
      {content}
      <button
        onClick={handleCloseDetail}
        className="bg-[#ffffff15] text-center py-[10px] rounded-b-[10px] hover:bg-[#ffffff40]"
      >
        CLOSE
      </button>
    </div>
  ) : null;
}
