import type {Metadata} from "next";
import {
  Inter,
  Poppins,
  Roboto_Condensed,
  Rubik,
  PT_Sans_Narrow,
} from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import {RefreshProvider} from "@/contexts/RefreshContext";

const inter = Inter({subsets: ["latin"]});
const poppins = Poppins({subsets: ["latin"], weight: "400"});
const roboto = Roboto_Condensed({subsets: ["latin"], weight: "400"});
const rubik = Rubik({subsets: ["latin"], weight: "400"});
const cabin = PT_Sans_Narrow({subsets: ["latin"], weight: "400"});

export const metadata: Metadata = {
  title: "프론트엔드 포트폴리오 - 박동석",
  description: "포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cabin.className} text-white`}>
        <RefreshProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </RefreshProvider>
      </body>
    </html>
  );
}
