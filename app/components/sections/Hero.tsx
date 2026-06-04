import React from 'react'
import { MdArrowRight } from 'react-icons/md'
import Button from '@/app/components/atoms/Button'
import HeroButtonSection from './HeroButtonSection'
import FramedImage from '../atoms/FramedImage'

const Hero = () => {
  return (
   <section className="w-full py-25 flex flex-col gap-18
   md:flex-row md:items-end md:gap-6
   ">
<div className="flex flex-col gap-5
md:w-full
">
<h1 className="text-primary">Find the Right Expert. <br/>Get the Right Advice.</h1>

<div className="flex flex-col gap-3">
<p>Aspires connects you with vetted professionals across every field, so you can access credible expertise, make informed decisions, and move forward with confidence.</p>

<HeroButtonSection />
</div>
</div>

<FramedImage image="/images/hero-meeting.jpg" alt="Hero Image" className="w-full h-[360px] object-cover md:h-[450px]" />
   </section>
  )
}

export default Hero