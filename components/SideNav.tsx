"use client";

interface INavProps {
  view: string;
}

export default function SideNav({view}: INavProps) {
  const sections = ["HERO", "CAREER", "SKILLS", "PORTFOLIO", "STUDY"];

  const handleScrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({behavior: "smooth", block: "start"});
    }
  };

  return (
    <div className="fixed top-1/2 right-6 w-[65px] transform -translate-y-1/2 z-[999] ">
      <ul className="flex flex-col gap-[40px] text-[#e5e5e5] animate-slide-up">
        {sections.map((section) => (
          <li
            key={section}
            className={view === section ? "text-[#244998]" : undefined}
          >
            <button onClick={() => handleScrollToSection(section)}>
              {section}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
