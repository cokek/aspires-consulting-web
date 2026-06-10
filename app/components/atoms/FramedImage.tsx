import React from 'react'
import Image from 'next/image'

const DEFAULT_IMAGE = '/images/hero-meeting.jpg'

const MARQUEE_TEXT = Array(20).fill('ASPIRES').join('')

const FramedImage = ({ image = DEFAULT_IMAGE, alt, className }: { image?: string, alt: string, className: string }) => {
  return (
    <div className={`relative border-radius-card overflow-hidden ${className}`}>
        <Image src={image} alt={alt} width={1000} height={1000} className="w-full h-full object-cover" />
        {/* <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 text-3xl text-background font-bold tracking-widest leading-none whitespace-nowrap overflow-hidden">
          {MARQUEE_TEXT}
        </span>
        <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 text-3xl text-background font-bold tracking-widest leading-none whitespace-nowrap overflow-hidden">
          {MARQUEE_TEXT}
        </span> */}
    </div>
  )
}

export default FramedImage