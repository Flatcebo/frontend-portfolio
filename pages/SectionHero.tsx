"use client";

export default function SectionHero() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen flex flex-col justify-start items-start z-[996] p-10 rounded-2xl text-center transition-opacity duration-[1000ms] ease-in-out animate-slide-up
                    leading-[90px] tracking-[0px]"
    >
      <div className="">
        <p className="text-[#ddd] text-[60px] select-none text-left pl-[6px]">
          Frontend Developer
        </p>

        <h1
          className="text-[#ddd] text-[140px] font-bold mb-4 select-none text-left"
          // style={{
          //   textShadow: `0 6px 8px #214083`,
          // }}
        >
          Park DongSeok&apos;s Portfolio
        </h1>
      </div>
      {/* <div>반갑습니다.</div> */}
    </section>
  );
}
