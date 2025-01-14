"use client";

import ReactLenis from "@studio-freight/react-lenis";

export default function SmoothScroll({children}: any) {
  return (
    <ReactLenis
      options={{
        lerp: 0.1,
        smoothWheel: true,
      }}
      root
    >
      {children}
    </ReactLenis>
  );
}
