'use client'

import React from 'react'
import FramedImageClickable from './FramedImageClickable'
import Button from './Button'
import { CiLinkedin } from 'react-icons/ci'

type SocialLink = {
  label: string
  url: string
}

type PersonnelCardProps = {
  image: string
  name: string
  consultationFee: string
  bio: string
  socials: SocialLink[]
  onImageClick?: () => void
}

const PersonnelCard = ({ image, name, consultationFee, bio, socials, onImageClick = () => {} }: PersonnelCardProps) => {
  return (
    <li className="flex flex-col gap-10 w-[270px]">
      <FramedImageClickable
        image={image}
        alt={name}
        className="w-full h-[320px]"
        imageClassName="w-full h-[320px]"
        onClick={onImageClick}
      />
      <div className="flex flex-col gap-3">
        <h2>{name}</h2>
        <div className="flex items-center justify-between px-5 gap-2 h-12 border-radius-card border border-text">
          <span>Consultation fee</span>
          <strong>{consultationFee}</strong>
        </div>
        <p className="line-clamp-3">{bio}</p>
        <div className="grid grid-cols-2 gap-2">
          {socials.map(({ label, url }, index) => (
            <Button
              key={index+label}
              text={label}
              onClick={() => window.open(url, '_blank')}
              className="w-full bg-text text-background hover:text-text hover:bg-hover hover:border hover:border-text"
              icon={<CiLinkedin />}
            />
          ))}
        </div>
      </div>
    </li>
  )
}

export default PersonnelCard
