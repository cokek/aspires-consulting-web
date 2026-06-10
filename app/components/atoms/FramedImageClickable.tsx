'use client'
import React from 'react'
import Image from 'next/image';
import { FaExpandArrowsAlt } from "react-icons/fa";
const FramedImageClickable = ({ image, alt, className, imageClassName, onClick }: { image: string, alt: string, className: string, imageClassName: string, onClick: () => void }) => {
  
  const MARQUEE_TEXT = Array(20).fill('ASPIRES').join('')
    return (
   <button className={`flex flex-col h-fit overflow-hidden  group border-radius-card border-0! ${className}`} onClick={onClick}>
     <div className={`relative ${imageClassName} w-full h-[320px]`}>
        <Image src={image} alt={alt} width={1000} height={1000} className={`w-full h-full object-cover ${imageClassName}`} />
        {/* <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 text-3xl text-background font-bold tracking-widest leading-none whitespace-nowrap overflow-hidden">
          {MARQUEE_TEXT}
        </span>
        <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 text-3xl text-text font-bold tracking-widest leading-none whitespace-nowrap overflow-hidden
        transition-all duration-300
        group-hover:text-primary
        ">
          {MARQUEE_TEXT}
        </span> */}
    </div>
    <div className='flex items-center justify-center gap-3 h-12 w-full 
    bg-text text-background text-sm 
    transition-all duration-300
    group-hover:bg-primary
    xl:text-xl 
    xl:h-16
    xl:px-6
    xl:gap-4
    '>
<span className=''>Tap to expand</span>
<FaExpandArrowsAlt />
    </div>
   </button>
  );
};

export default FramedImageClickable;