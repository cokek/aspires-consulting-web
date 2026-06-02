'use client'

import React from 'react'
import Button from '../atoms/Button'
import { MdGroups, MdPersonAdd } from "react-icons/md"

const HeroButtonSection = () => {
  return (
<div className="flex flex-col gap-2">
  <Button text="Contact a Pro" onClick={() => {}} icon={<MdPersonAdd />} className="bg-primary text-background hover:bg-accent hover:border hover:border-text w-fit" />
  <Button text="Who we are" onClick={() => {}} icon={<MdGroups />} className="bg-background text-text border border-text hover:bg-hover w-fit" />
</div>
  )
}

export default HeroButtonSection