"use client";

import {useRefresh} from "@/contexts/RefreshContext";
import {useThemeStore} from "@/stores/useThemeStore";
import {useMemo} from "react";

interface WebViewProps {
  url: string;
}

export default function WebView({url}: WebViewProps) {
  const {refresh} = useRefresh();
  const {isDarkMode} = useThemeStore();

  const content = useMemo(() => {
    if (url) {
      return (
        <iframe
          key={refresh}
          src={url}
          className={`rounded-[10px] transition-opacity duration-[500ms] ease-in-out animate-opacity
                        xs:w-full xxs:w-[1280px]
                        xs:h-full xxs:h-[720px]
                        xs:scale-0 xxs:scale-[0.25]
                        xs:transform-none xxs:origin-top-left
                        ${isDarkMode ? "bg-[#fff]" : "bg-[#fff]"}`}
          allow="fullscreen"
        />
      );
    } else {
      return (
        <div
          className={`w-full h-full rounded-[10px] flex justify-center items-center
                          ${isDarkMode ? "bg-[#ffffff15]" : "bg-[#13264e4d]"}`}
        >
          <p className="text-[40px] font-bold">😢</p>
        </div>
      );
    }
  }, [url, refresh, isDarkMode]);

  return (
    <div className="w-full h-full z-[999] p-0 overflow-hidden">{content}</div>
  );
}
