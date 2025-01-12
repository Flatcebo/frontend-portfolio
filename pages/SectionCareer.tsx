"use client";

import career from "@/public/data/career.json";

export default function SectionCareer() {
  return (
    <section
      id="career"
      className="relative w-full h-screen flex justify-center items-center z-[998] p-0 rounded-2xl text-center transition-opacity duration-[1000ms] ease-in-out animate-slide-up"
    >
      <div className="relative w-full h-auto flex justify-center items-start gap-[200px]">
        {/* <div className="flex items-start justify-start"> */}
        <h2 className="text-[48px] w-auto font-bold text-center mb-10 leading-[40px]">
          CAREER
        </h2>
        {/* </div> */}
        {/* <div className="relative left-4 top-0 bottom-0 w-[2px] h-full bg-[#244998]"></div> */}

        {/* <span>개발자 : 3년</span> */}
        <div className="relative w-[900px] py-0 flex flex-wrap justify-start gap-[40px]">
          {career.map((career, index) => (
            <div
              key={index}
              className="h-[200px] flex flex-col justify-start items-start gap-[20px] text-left"
            >
              {/* <div className="w-10 h-10 bg-blue-500 rounded-full flex-shrink-0"></div> */}

              <div className="ml-0 w-[400px]">
                <h3 className="text-xl font-bold">{career.company}</h3>
                <span className="text-gray-500">{career.period}</span>
                {/* <p>{career.position}</p> */}
                <p className="text-gray-700">{career.field}</p>
              </div>

              <div className="text-gray-300 tracking-[0.5px] w-[400px] text-left">
                {career.task}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
