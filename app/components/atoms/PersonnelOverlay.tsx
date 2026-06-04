'use client'

import React, { useEffect } from 'react'
import FramedImageClickable from './FramedImageClickable'
import Button from './Button'
import { CiLinkedin, CiMail } from 'react-icons/ci'
import { FaYoutube, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'
import FramedImage from './FramedImage'

type SocialLink = {
  label: string
  url: string
}

type PersonnelOverlayProps = {
  image: string
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
  onClose: () => void
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

const PersonnelOverlay = ({ image, name, consultationFee, bio, services, paymentDetails, socials, onClose }: PersonnelOverlayProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div
      className="fixed inset-0 z-100 bg-background overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex flex-col gap-6 px-4 py-6 w-[400px] mx-auto
      md:w-full md:mx-0
      ">

        <button
          onClick={onClose}
          className="self-start flex items-center gap-2 bg-text text-background px-4 py-2 border-radius-button font-medium"
        >
          <MdClose />
          Close
        </button>


          <div className="flex flex-col gap-6
          md:flex-row
          ">
          <FramedImage image={image} alt={name} 
          className="w-full h-[320px] shrink-0 md:w-[350px] md:h-[400px]" />
 

 <div className="flex flex-col gap-4">
   <h1>{name}</h1>

   <div className="flex items-center justify-between px-5 gap-2 h-12 border-radius-card border border-text
   md:w-[270px]
   ">
     <span>Consultation fee</span>
     <strong>{consultationFee}</strong>
   </div>

   <p>{bio}</p>

   {services && services !== '' && (
     <div className="flex flex-col gap-1 px-5 py-4 border-radius-card bg-secondary">
       <span className="font-bold">Services</span>
       <p>{services}</p>
     </div>
   )}

   <div className="flex items-start  px-5 py-4 gap-5 border-radius-card bg-secondary">
     <span className="shrink-0">Payment details</span>
     <div className="flex flex-col font-bold">
       <span>BANK: {paymentDetails.bank}</span>
       <span>ACCT NO: {paymentDetails.accountNo}</span>
       <span>SORT CODE: {paymentDetails.sortCode}</span>
     </div>
   </div>

   <div className="grid grid-cols-2 gap-2">
     {socials.map(({ label, url }, i) => (
       <Button
         key={i + label}
         text={label}
         onClick={() => window.open(url, '_blank')}
         className="w-full bg-text text-background hover:text-text hover:bg-hover hover:border hover:border-text"
         icon={socialIcon(label)}
       />
     ))}
   </div>
 </div>
          </div>

      </div>
    </div>
  )
}

export default PersonnelOverlay
