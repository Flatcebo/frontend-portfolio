"use client";

import {useThemeStore} from "@/stores/useThemeStore";
import Link from "next/link";

interface SlickBottomButtonProps {
  i: PfCategory;
  handleOpenDetail: () => void;
}

export default function SlickBottomButton({
  i,
  handleOpenDetail,
}: SlickBottomButtonProps) {
  const {isDarkMode} = useThemeStore();

  return (
    <div className="flex w-full gap-[6px]">
      {i.url && i.gitUrl && (
        <Link
          target="_blank"
          draggable={false}
          href={`${i.url || i.gitUrl}`}
          className={`w-full text-center py-[10px] rounded-[6px] transition-colors duration-[500ms] ease-in-out
                          ${
                            isDarkMode
                              ? "bg-[#ffffff15] hover:bg-[#ffffff40]"
                              : "bg-[#13264e60] hover:bg-[#13264e]"
                          }`}
        >
          VISIT
        </Link>
      )}

      <button
        onClick={handleOpenDetail}
        className={`w-full text-center py-[10px] rounded-[6px] transition-colors duration-[500ms] ease-in-out
                                    ${
                                      isDarkMode
                                        ? "bg-[#ffffff15] hover:bg-[#ffffff40]"
                                        : "bg-[#13264e60] hover:bg-[#13264e]"
                                    }`}
      >
        DETAIL
      </button>
    </div>
  );
}
