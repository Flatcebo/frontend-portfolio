"use client";

interface HeaderProps {
  title: string;
}

export default function Header({title}: HeaderProps) {
  return (
    <div className="sticky top-[3px] left-[0px] w-[200px] py-[4px] bg-[#ffffff2e] z-[999]">
      <h2 className="text-[#fff] text-[32px] font-bold text-center">{title}</h2>
    </div>
  );
}
