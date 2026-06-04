import React from 'react'
import FramedImage from '../atoms/FramedImage'

const WhatWeDo = () => {

  const whatWeDo = [
    {
      heading: 'Professional Consultations',
      content: 'Browse and connect with vetted experts across a wide range of industries and disciplines. Whether you need specialist advice, a second opinion, or ongoing professional guidance, our platform gives you direct access to the right person for your specific need.',
      image: '/images/consultations.jpg',
    },
    {
      heading: 'IT Training',
      content: 'Build practical, in-demand technology skills with training programmes designed and delivered by experienced IT professionals. From foundational knowledge to advanced competencies, our courses are structured to produce results you can apply immediately.',
      image: '/images/it-training.jpg',
    },
    {
      heading: 'IELTS Preparation',
      content: 'Prepare for your IELTS examination with focused, expert-led coaching that targets your specific areas of improvement. Our preparation programmes are designed to help you achieve the score you need with clarity and confidence.',
      image: '/images/ielts-prep.jpg',
    },
    {
      heading: 'Higher Education Advisory',
      content: 'Navigating higher education options can be complex. Our advisors provide clear, personalised guidance on institution selection, application processes, and academic pathways, helping you make well-informed decisions about your educational future.',
      image: '/images/higher-education.jpg',
    },
  ]
  return (
    <section className="w-full py-20 flex flex-col gap-20 items-center" id="services">
<h1>What we do</h1>

<ul className="flex flex-col gap-16 w-[270px]">
  {whatWeDo.map(({ heading, content, image }, i) => (
    <li key={i} className="flex flex-col gap-8">
      <FramedImage image={image} alt={heading} className="w-full h-[320px]" />
      <div className="flex flex-col gap-3 text-center">
        <h2>{heading}</h2>
        <p>{content}</p>
      </div>
    </li>
  ))}
</ul>
   </section>
  )
}

export default WhatWeDo