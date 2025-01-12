"use client";

import Background from "@/components/Background";
import Contact from "@/components/Contact";
import FlowBar from "@/components/FlowBar";
import Follower from "@/components/Follower";
import Hero from "@/components/Hero";
import ParallaxSection from "@/components/ParallaxSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import SectionHero from "@/pages/SectionHero";
import SideNav from "@/components/SideNav";
import Skills from "@/components/Skills";
import ThemeButton from "@/components/ThemeButton";
import Timeline from "@/components/Timeline";
import {useEffect, useRef, useState} from "react";
import SectionCareer from "@/pages/SectionCareer";
import SectionSkills from "@/pages/SectionSkills";
import SectionPortfolio from "@/pages/SectionPortfolio";
import SectionStudy from "@/pages/SectionStudy";

export default function Home() {
  const scrollPosition = useRef(0);
  const [scrollAlert, setScrollAlert] = useState(false);
  const [view, setView] = useState("HERO");

  useEffect(() => {
    // 각 섹션의 ID 및 이름 정의
    const sections = [
      {id: "hero", name: "HERO"},
      {id: "career", name: "CAREER"},
      {id: "skills", name: "SKILLS"},
      {id: "portfolio", name: "PORTFOLIO"},
    ];

    // 각 섹션의 위치 계산
    const sectionPositions = sections
      .map(({id}) => {
        const element = document.getElementById(id);
        if (element) {
          return {id, top: element.offsetTop};
        }
        return null;
      })
      .filter(Boolean) as {id: string; top: number}[];

    const handleScroll = () => {
      scrollPosition.current = window.scrollY;
      const screenHeight = window.innerHeight;

      // 스크롤 경고 상태 업데이트
      setScrollAlert(scrollPosition.current >= 10);

      // 현재 위치와 가장 가까운 섹션 찾기
      for (let i = sectionPositions.length - 1; i >= 0; i--) {
        if (
          scrollPosition.current >=
          sectionPositions[i].top - screenHeight / 2
        ) {
          setView(sections[i].name);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // console.log(view);

  return (
    <div className="w-full h-auto flex items-center justify-center flex-col relative overflow-hidden">
      <Follower />

      <Background scrollAlert={scrollAlert} />

      <FlowBar />

      <ThemeButton />

      <SideNav view={view} />

      <SectionHero />

      <SectionCareer />

      <SectionSkills />

      <SectionPortfolio />

      <SectionStudy />

      {/* <Hero /> */}
      {/* <Timeline /> */}
      {/* <Skills /> */}
      {/* <ProjectShowcase /> */}
      {/* <Contact /> */}
      {/* <ParallaxSection /> */}
      {/* <section
        id="skills"
        className="relative w-auto h-screen flex flex-col justify-center items-center z-10 p-10 rounded-2xl text-center transition-opacity duration-1000 ease-in-out"
      >
        <h1 className="text-[#e5e5e5] text-[70px] font-bold mb-4">SKILLS</h1>
      </section> */}
    </div>
  );
}
