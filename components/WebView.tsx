"use client";

interface WebViewProps {
  url: string;
}

export default function WebView({url}: WebViewProps) {
  return (
    <div className="w-full h-[563px] z-[999] p-0">
      {url ? (
        <iframe
          src={url}
          className="w-full h-full rounded-[20px]"
          allow="fullscreen"
        />
      ) : (
        <div
          className={`w-full h-full rounded-[20px] content-center ${
            !url && "bg-[#ffffff15]"
          }`}
        >
          <p className="text-[40px] font-bold">😢</p>
        </div>
      )}
    </div>
  );
}
