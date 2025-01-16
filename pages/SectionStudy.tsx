"use client";

import Header from "@/components/Header";

export default function SectionStudy() {
  return (
    <section
      id="study"
      className="relative w-full h-screen z-[996] p-10 rounded-2xl text-center transition-opacity duration-[1000ms] ease-in-out animate-slide-up"
    >
      <Header title="STUDY" />

      <div className="pb-[120px]">
        <p className="text-[#ddd] text-[60px] select-none text-left pl-[6px]">
          Frontend Developer
        </p>

        <h1 className="text-[#ddd] text-[140px] font-bold mb-4 select-none text-left">
          Park DongSeok's Portfolio
        </h1>
      </div>
    </section>
  );
}
