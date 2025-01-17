// 'use client'

// import Image from "next/image";
// import { useMemo } from "react";

// export default function Panorama() {
//     const content = useMemo(() => {
//         return data.map((i, idx) => {
//                 // console.log(i.url);
//                 return (
//                   <button
//                     key={idx}
//                     onClick={() => handleClickPortfolio(idx, i.url)}
//                     className={`${
//                       idx === selectedIdx &&
//                       "border-[1px] border-[#cacaca] rounded-[4px]"
//                     } px-[1px] `}
//                   >
//                     {i.imgUrl ? (
//                       <Image
//                         src={i.imgUrl}
//                         alt={i.title}
//                         width={4000}
//                         height={4000}
//                         className="w-[57px] h-[32px] rounded-[4px] object-fill"
//                       />
//                     ) : (
//                       <div
//                         className={`w-[57px] h-[32px] rounded-[4px] content-center bg-[#ffffff15]`}
//                       >
//                         <p className="text-[8px] font-bold">😢</p>
//                       </div>
//                     )}
//                   </button>
//                 );
//               })
//     } ,[])
//     return(
//         <div className="flex justify-center items-center gap-[10px] ml-1">

//             </div>
//     )
// }
