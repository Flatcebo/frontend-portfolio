"use client";

import React from "react";
import skills from "@/public/data/skills.json";
import Image from "next/image";
import Bubble from "@/components/Bubble";

export default function SectionSkills() {
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
      className="relative w-full h-screen flex justify-center items-center z-[998] p-0 rounded-2xl text-center transition-opacity duration-[1000ms] ease-in-out animate-slide-up"
    >
      <div className="relative w-full h-auto flex justify-center items-start gap-[200px]">
        <h2 className="text-[48px] w-auto font-bold text-center mb-10 leading-[40px]">
          SKILLS
        </h2>

        {/* <Bubble categories={categories} skillData={skillData} /> */}

        <div className="relative w-[900px] py-0 flex justify-start items-start gap-[0px]">
          {skillData.map((skill, index) => (
            <div className="ml-0 ">
              {categories.map((category) => (
                <div
                  key={category}
                  className="flex justify-center items-center"
                >
                  <h4 className="text-[white] mr-[20px]">
                    {category.toUpperCase()} :
                  </h4>

                  <div className="flex items-center gap-[40px]">
                    {skill[category].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col justify-center items-center w-[120px]"
                      >
                        <div className="w-[48px] h-[48px] bg-[white] rounded-full flex justify-center items-center ">
                          <Image
                            src={item.imgUrl}
                            alt={item.title}
                            width={42}
                            height={42}
                            className="w-[42px] h-[42px] rounded-full object-cover"
                          />
                        </div>

                        <span className="text-gray-500">{item.title}</span>
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
