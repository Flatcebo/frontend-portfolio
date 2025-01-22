"use client";

import Header from "@/components/Header";
import {useThemeStore} from "@/stores/useThemeStore";
import Image from "next/image";

export default function SectionContact() {
  const {isDarkMode} = useThemeStore();

  const handleCopyToClipboard = () => {
    const email = "organicsic@naver.com";

    if (
      navigator.clipboard &&
      typeof navigator.clipboard.writeText === "function"
    ) {
      navigator.clipboard
        .writeText(email)
        .then(() => {
          alert("클립보드에 복사되었습니다.");
        })
        .catch((error) => {
          console.error("Failed to copy: ", error);
        });
    } else {
      // Fallback for unsupported environments
      const textarea = document.createElement("textarea");
      textarea.value = email;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
        alert("클립보드에 복사되었습니다.");
      } catch (error) {
        console.error("Fallback failed to copy: ", error);
      }
      document.body.removeChild(textarea);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full h-screen z-[996] p-0 rounded-2xl text-center transition-opacity duration-[1000ms] ease-in-out animate-slide-up"
    >
      <Header title="CONTACT" />

      <div className="relative w-full h-full flex justify-center items-center gap-[0px] mt-[-59px]">
        <div className="flex flex-col gap-[40px]">
          <div
            className={`
                          exlg:text-[48px] xxs:text-[24px]
                            ${isDarkMode ? "" : "text-[#244998]"} `}
          >
            고생 많으셨습니다.
          </div>

          <div className="flex gap-[20px] justify-center">
            <button
              onClick={handleCopyToClipboard}
              className={`relative group w-[48px] h-[48px] flex items-center rounded-full hover:w-[220px] transition-all duration-300 ease-in-out
                            ${isDarkMode ? "bg-[#ffffff]" : "bg-[#13264e40]"}`}
            >
              <Image
                src={"/images/skills/naver.png"}
                alt="NAVER"
                width={4000}
                height={4000}
                draggable={false}
                className="w-[48px] h-[48px] object-cover p-[6px]"
              />

              <div
                className={`text-[20px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 delay-200
                                ${isDarkMode ? "text-[#333]" : "text-[#fff]"}`}
              >
                organicsic@naver.com
              </div>
            </button>

            <button
              onClick={() => {
                window.open("https://github.com/Flatcebo", "_blank");
              }}
              className={`relative group w-[48px] h-[48px] flex flex-row-reverse items-center rounded-full hover:w-[260px] transition-all duration-300 ease-in-out
                            ${isDarkMode ? "bg-[#ffffff]" : "bg-[#13264e40]"}`}
            >
              <Image
                src={"/images/skills/github.png"}
                alt="GITHUB"
                width={4000}
                height={4000}
                draggable={false}
                className="w-[48px] h-[48px] object-cover p-[4px]"
              />

              <div
                className={`text-[20px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 delay-200
                                ${isDarkMode ? "text-[#333]" : "text-[#fff]"}`}
              >
                https://github.com/Flatcebo
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
