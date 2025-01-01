"use client";

import ReactLenis from "@studio-freight/react-lenis";

export default function SmoothScroll({children}: any) {
  return <ReactLenis root>{children}</ReactLenis>;
}
