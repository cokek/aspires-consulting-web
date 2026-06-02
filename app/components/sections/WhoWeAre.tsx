'use client'

import React, { useState } from 'react'

const WhoWeAre = () => {
  const [active, setActive] = useState<number | null>(null)

  const whoWeAre = [
    "Aspires Consulting Services is a professional platform that connects individuals and organisations with verified experts across a wide range of fields. We understand that access to the right advice at the right time can change outcomes, which is why we have built a space where credibility is the standard and expertise is always within reach.",
    "Every professional listed on the Aspires platform has been carefully vetted and approved by our team. This means that when you reach out to an expert through us, you are not taking a chance. You are engaging someone whose knowledge, background, and professional standing have already been assessed on your behalf.",
    "Beyond connecting clients with professionals, Aspires also offers IT training, IELTS examination preparation, and higher education advisory services. Whether you are here to consult an expert, develop a skill, or plan your academic future, Aspires is the platform built to support every stage of that journey.",
  ]
  return (
    <section className="w-full py-20 flex flex-col gap-12 items-center" id="about">
<h1>Who we are</h1>

<ul className="flex flex-col gap-5">
    {whoWeAre.map((paragraph, i) => (
      <li
        key={i}
        onClick={() => setActive(active === i ? null : i)}
        className={`transition-all duration-300 border-radius-card cursor-pointer
          ${active === i
            ? 'bg-text text-background px-2 py-3'
            : 'hover:bg-text hover:text-background hover:px-2 hover:py-3'
          }`}
      >
        {paragraph}
      </li>
    ))}
</ul>
   </section>
  )
}

export default WhoWeAre