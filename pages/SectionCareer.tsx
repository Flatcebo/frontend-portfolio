"use client";

import career from "@/public/data/career.json";

export default function SectionCareer() {
  return (
    <section
      id="career"
      className="relative w-full h-screen flex flex-col justify-center items-center z-[998] p-10 rounded-2xl text-center transition-opacity duration-[1000ms] ease-in-out animate-slide-up"
    >
      <div className="w-[90%] flex justify-start items-start gap-[40px]">
        <h2 className="text-[48px] font-bold text-center mb-10">My Journey</h2>
        <div className="relative px-6">
          {career.map((career, index) => (
            <div key={index} className="flex items-center mb-10">
              {/* <div className="w-10 h-10 bg-blue-500 rounded-full flex-shrink-0 "></div> */}
              <div className="ml-0 w-[200px]">
                <h3 className="text-xl font-bold">{career.company}</h3>
                <span className="text-gray-500">{career.period}</span>
                <p className="text-gray-700">{career.field}</p>
              </div>
            </div>
          ))}
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-blue-500"></div>
        </div>
      </div>
    </section>
  );
}
