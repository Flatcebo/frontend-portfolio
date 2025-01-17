"use client";

import {useRefresh} from "@/app/contexts/RefreshContext";
import {useMemo} from "react";

interface WebViewProps {
  url: string;
}

export default function WebView({url}: WebViewProps) {
  const {refresh} = useRefresh();
  // console.log(refresh);
  const content = useMemo(() => {
    if (url) {
      return (
        <iframe
          key={refresh}
          src={url}
          className="w-full h-full rounded-[10px]"
          allow="fullscreen"
        />
      );
    } else {
      return (
        <div className="w-full h-full rounded-[10px] bg-[#ffffff15] flex justify-center items-center">
          <p className="text-[40px] font-bold">😢</p>
        </div>
      );
    }
  }, [url, refresh]);

  return <div className="w-full h-full z-[999] p-0">{content}</div>;
}
