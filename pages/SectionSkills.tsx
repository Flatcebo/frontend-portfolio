"use client";

import React from "react";
import skills from "@/public/data/skills.json";
import Image from "next/image";
import Bubble from "@/components/Bubble";
import {FaStar} from "react-icons/fa";
import Header from "@/components/Header";
import {useThemeStore} from "@/stores/useThemeStore";

export default function SectionSkills() {
  const {isDarkMode} = useThemeStore();
  const skillData: SkillCategory[] = skills;

  const categories: CategoryKey[] = [
    "language",
    "framework",
    "database",
    "markUp",
    "tool",
  ];

  return (
    <section
      id="skills"
      className="relative w-full h-screen z-[996] p-0 rounded-2xl text-center transition-opacity duration-[1000ms] ease-in-out animate-slide-up"
    >
      <Header title="SKILLS" />

      <div className="relative w-full h-full flex flex-col justify-center items-center gap-[0px] mt-[-59px]">
        {/* <Bubble categories={categories} skillData={skillData} /> */}

        <div
          className="relative py-0 flex justify-center items-center gap-[0px]
                          exlg:w-[900px] xxs:w-[90%]"
        >
          {skillData.map((skill, index) => (
            <div
              key={index}
              className="ml-0 flex flex-col
                          exlg:gap-[40px] xxs:gap-[20px]
                          "
            >
              {categories.map((category) => (
                <div
                  key={category}
                  className="flex justify-start items-center
                              exlg:flex-row xxs:flex-col
                              exlg:gap-[0px] xxs:gap-[20px]
                              "
                >
                  <h4
                    className={`w-[80px]
                                  exlg:text-center xxs:text-center
                                  exlg:mr-[40px] xxs:mr-[0px]
                                  
                                  ${isDarkMode ? "" : "text-[#333]"}`}
                  >
                    {category.toUpperCase()}
                  </h4>

                  <div
                    className="flex items-center
                                    exlg:gap-[40px] xxs:gap-[20px]"
                  >
                    {[...skill[category]]
                      .sort((a, b) => (b.star ? 1 : 0) - (a.star ? 1 : 0))
                      .map((item, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col justify-center items-center
                                      exlg:w-[120px] xxs:w-[12px]"
                        >
                          <div className="relative w-[48px] h-[48px] bg-[white] rounded-full flex justify-center items-center ">
                            {item.star && (
                              <FaStar
                                color="#fffb06"
                                size={20}
                                className="absolute top-0 translate-y-[-50%] translate-x-[-0%]"
                              />
                            )}

                            <Image
                              src={item.imgUrl}
                              alt={item.title}
                              width={42}
                              height={42}
                              draggable={false}
                              className="w-[42px] h-[42px] rounded-full object-cover"
                            />
                          </div>

                          <span
                            className={`
                                          exlg:flex xxs:hidden
                               ${
                                 isDarkMode ? "text-gray-500" : "text-[#fafafa]"
                               }`}
                          >
                            {item.title}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
