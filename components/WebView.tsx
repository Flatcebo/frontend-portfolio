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
          className="w-full h-full rounded-[10px] bg-[#fff] transition-opacity duration-[500ms] ease-in-out animate-opacity"
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

  return <div className="w-full h-full z-[999] p-0">{content}</div>;
}
