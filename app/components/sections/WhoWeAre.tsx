'use client'

import React, { useState, useEffect, useRef } from 'react'
import FramedImage from '../atoms/FramedImage'

const WhoWeAre = () => {
  const [active, setActive] = useState<number | null>(null)
  const listRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (listRef.current && !listRef.current.contains(e.target as Node)) {
        setActive(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const whoWeAre = [
    {
      text: "Aspires Consulting Services is a professional platform that connects individuals and organisations with verified experts across a wide range of fields. We understand that access to the right advice at the right time can change outcomes, which is why we have built a space where credibility is the standard and expertise is always within reach.",
      image: '/images/who-we-are-platform.jpg',
      alt: 'A professional team collaborating',
    },
    {
      text: "Every professional listed on the Aspires platform has been carefully vetted and approved by our team. This means that when you reach out to an expert through us, you are not taking a chance. You are engaging someone whose knowledge, background, and professional standing have already been assessed on your behalf.",
      image: '/images/who-we-are-vetted.jpg',
      alt: 'A trusted professional',
    },
    {
      text: "Beyond connecting clients with professionals, Aspires also offers IT training, IELTS examination preparation, and higher education advisory services. Whether you are here to consult an expert, develop a skill, or plan your academic future, Aspires is the platform built to support every stage of that journey.",
      image: '/images/who-we-are-education.jpg',
      alt: 'Students in a learning environment',
    },
  ]

  const activeItem = active !== null ? whoWeAre[active] : whoWeAre[0]

  return (
    <section className="w-full py-20 flex flex-col gap-12 items-center
    md:items-start
    xl:w-[1154px] xl:mx-auto xl:gap-25
    " id="about">
<h1>Who we are</h1>

<div className="flex gap-5 items-end xl:gap-36">
<FramedImage image={activeItem.image} alt={activeItem.alt} 
className="w-full h-[500px] object-cover hidden md:block md:w-[400px]
xl:w-[500px] 
" />

<ul ref={listRef} className="flex flex-col gap-5 w-full">
    {whoWeAre.map(({ text }, i) => (
      <li
        key={i}
        onClick={() => setActive(active === i ? null : i)}
        className={`transition-all duration-300 border-radius-card cursor-pointer  xl:text-2xl
          ${active === i
            ? 'bg-text text-background px-2 py-3 xl:px-4 xl:py-4'
            : 'hover:underline'
          }`}
      >
        {text}
      </li>
    ))}
</ul>
</div>
   </section>
  )
}

export default WhoWeAre