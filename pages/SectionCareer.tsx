"use client";

import CareerItem from "@/components/CareerItem";
import Header from "@/components/Header";

export default function SectionCareer() {
  return (
    <section
      id="career"
      className="relative w-full h-screen z-[996] p-0 rounded-2xl text-center transition-opacity duration-[1000ms] ease-in-out animate-slide-up
                  "
    >
      <Header title="CAREER" />

      <CareerItem />
    </section>
  );
}
