"use client";

import Background from "@/components/Background";
import FlowBar from "@/components/FlowBar";
import Follower from "@/components/Follower";
import ParallaxSection from "@/components/ParallaxSection";
import SectionHero from "@/pages/SectionHero";
import SideNav from "@/components/SideNav";
import ThemeButton from "@/components/ThemeButton";
import {useEffect, useRef, useState} from "react";
import SectionCareer from "@/pages/SectionCareer";
import SectionSkills from "@/pages/SectionSkills";
import SectionPortfolio from "@/pages/SectionPortfolio";
import SectionContact from "@/pages/SectionContact";
import SectionAbout from "@/pages/SectionAbout";
import {useDeviceStore} from "@/stores/useDeviceStore";

export default function Home() {
  const scrollPosition = useRef(0);
  const [scrollAlert, setScrollAlert] = useState(false);
  const [view, setView] = useState("HERO");

  useEffect(() => {
    const sections = [
      {id: "hero", name: "HERO"},
      {id: "career", name: "CAREER"},
      {id: "skills", name: "SKILLS"},
      {id: "portfolio", name: "PORTFOLIO"},
      {id: "contact", name: "CONTACT"},
    ];

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

      setScrollAlert(scrollPosition.current >= 10);

      for (let i = sectionPositions.length - 1; i >= 0; i--) {
        if (
          scrollPosition.current >=
          sectionPositions[i].top - screenHeight / 2
        ) {
          setView(sections[i].name);
          return;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
  }, []);

  const updateDeviceState = useDeviceStore((state) => state.updateDeviceState);

  useEffect(() => {
    const handleResize = () => {
      updateDeviceState(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [updateDeviceState]);

  // console.log(view);

  return (
    <div className="w-full h-auto relative overflow-visible">
      <Follower />

      <Background scrollAlert={scrollAlert} />

      <FlowBar />

      <ThemeButton />

      <SideNav view={view} />

      {/* <SectionHero /> */}

      {/* <SectionCareer /> */}

      {/* <SectionSkills /> */}

      <SectionPortfolio />

      {/* <SectionContact /> */}
    </div>
  );
}
