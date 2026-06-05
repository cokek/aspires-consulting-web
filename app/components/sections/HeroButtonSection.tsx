'use client'

import React from 'react'
import Button from '../atoms/Button'
import { MdGroups, MdPersonAdd } from "react-icons/md"

const HeroButtonSection = () => {
  return (
<div className="flex flex-col gap-2 md:flex-row xl:gap-4">
  <Button text="Contact a Pro" onClick={() => {}} icon={<MdPersonAdd />} className="bg-primary text-background hover:text-text hover:bg-accent hover:border hover:border-text w-fit xl:text-2xl xl:h-14 xl:px-6 xl:gap-4" />
  <Button text="Who we are" onClick={() => {}} icon={<MdGroups />} className="bg-background text-text border border-text hover:bg-hover w-fit xl:text-2xl xl:h-14 xl:px-6 xl:gap-4" />
</div>
  )
}

export default HeroButtonSection