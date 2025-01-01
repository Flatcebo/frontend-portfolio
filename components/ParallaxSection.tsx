"use client";

import {useEffect, useState} from "react";

export default function ParallaxSection() {
  const [offsetY, setOffsetY] = useState(0);

  // Debounced scroll handler
  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    const handleScrollThrottle = () => {
      window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", handleScrollThrottle);

    return () => window.removeEventListener("scroll", handleScrollThrottle);
  }, []);

  return (
    <div className="relative h-[200vh] overflow-hidden bg-gray-900">
      {/* Background Layer (slowest) */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center "
        style={{
          backgroundImage: `url('/images/juck.jpeg')`,
          transform: `translateY(${offsetY * 0.15}px)`,
        }}
      ></div>

      {/* <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/nam.jpeg')`,
          transform: `translateY(${offsetY * 0.5}px)`,
        }}
      ></div>

      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center duration-500 ease-in"
        style={{
          backgroundImage: `url('/images/bike.jpeg')`,
          transform: `translateY(${offsetY * 10.8}px)`,
        }}
      ></div> */}

      {/* Foreground Content */}
      <div className="relative z-10 h-screen flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-6xl font-extrabold mb-4">Explore the Depth</h1>
        <p className="text-lg">Scroll to see the parallax effect in action</p>
      </div>

      {/* Second Section */}
      <div className="relative z-10 h-screen flex items-center justify-center text-white bg-gradient-to-b from-gray-800 to-gray-900">
        <h2 className="text-4xl font-bold">Welcome to the second section!</h2>
      </div>
    </div>
  );
}
