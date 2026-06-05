'use client'

import React, { useState } from 'react'
import FramedImageClickable from './FramedImageClickable'
import Button from './Button'
import PersonnelOverlay from './PersonnelOverlay'
import { CiLinkedin, CiMail } from 'react-icons/ci'
import { FaYoutube, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import profileDefault from '@/app/images/profileDefault.png'

type SocialLink = {
  label: string
  url: string
}

type PersonnelCardProps = {
  image?: string
  name: string
  consultationFee: string
  bio: string
  services: string
  paymentDetails: {
    bank: string
    accountNo: string
    sortCode: string
  }
  socials: SocialLink[]
}

const socialIcon = (label: string) => {
  switch (label.toLowerCase()) {
    case 'youtube':   return <FaYoutube />
    case 'instagram': return <FaInstagram />
    case 'whatsapp':  return <FaWhatsapp />
    case 'email':     return <CiMail />
    default:          return <CiLinkedin />
  }
}

const PersonnelCard = ({ image, name, consultationFee, bio, services, paymentDetails, socials }: PersonnelCardProps) => {
  const resolvedImage = image && image !== '' ? image : profileDefault.src
  const [overlayOpen, setOverlayOpen] = useState(false)

  return (
    <>
      <li className="flex flex-col gap-10 w-[270px]
      md:w-full
      ">
        <FramedImageClickable
          image={resolvedImage}
          alt={name}
          className="w-full h-[320px]"
          imageClassName="w-full h-[320px]"
          onClick={() => setOverlayOpen(true)}
        />
        <div className="flex flex-col gap-3">
          <h2>{name}</h2>
          <div className="flex items-center justify-between px-5 gap-2 h-12 border-radius-card border border-text xl:text-2xl xl:h-16">
            <span>Consultation fee</span>
            <strong>{consultationFee}</strong>
          </div>
          {/* <p className="line-clamp-3">{bio}</p> */}
          {services && services !== '' && (
            <div className="flex flex-col gap-1 px-5 py-4 border-radius-card bg-secondary">
              <span className="font-bold">Services</span>
              <p className="line-clamp-3 xl:line-clamp-5">{services}</p>
            </div>
          )}
          <div className="grid grid-cols-2 gap-2">
            {socials.map(({ label, url }, index) => (
              <Button
                key={index + label}
                text={label}
                onClick={() => window.open(url, '_blank')}
                className="w-full bg-text text-background hover:text-text hover:bg-hover hover:border hover:border-text"
                icon={socialIcon(label)}
              />
            ))}
          </div>
        </div>
      </li>

      {overlayOpen && (
        <PersonnelOverlay
          image={resolvedImage}
          name={name}
          consultationFee={consultationFee}
          bio={bio}
          services={services}
          paymentDetails={paymentDetails}
          socials={socials}
          onClose={() => setOverlayOpen(false)}
        />
      )}
    </>
  )
}

export default PersonnelCard
