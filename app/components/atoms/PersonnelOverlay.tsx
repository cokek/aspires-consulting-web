'use client'

import React, { useEffect } from 'react'
import FramedImageClickable from './FramedImageClickable'
import Button from './Button'
import { CiLinkedin } from 'react-icons/ci'
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
  paymentDetails: {
    bank: string
    accountNo: string
  }
  socials: SocialLink[]
  onClose: () => void
}

const PersonnelOverlay = ({ image, name, consultationFee, bio, paymentDetails, socials, onClose }: PersonnelOverlayProps) => {
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
      <div className="flex flex-col gap-6 px-4 py-6 max-w-sm mx-auto">

        <button
          onClick={onClose}
          className="self-start flex items-center gap-2 bg-text text-background px-4 py-2 border-radius-button text-sm font-medium"
        >
          <MdClose />
          Close
        </button>


          <FramedImage image={image} alt={name} className="w-full h-[320px]" />
 

        <div className="flex flex-col gap-4">
          <h2>{name}</h2>

          <div className="flex items-center justify-between px-5 gap-2 h-12 border-radius-card border border-text">
            <span>Consultation fee</span>
            <strong>{consultationFee}</strong>
          </div>

          <p>{bio}</p>

          <div className="flex items-start justify-between px-5 py-4 gap-4 border-radius-card bg-secondary">
            <span className="shrink-0">Payment details</span>
            <div className="flex flex-col font-bold">
              <span>BANK: {paymentDetails.bank}</span>
              <span>ACCT NO: {paymentDetails.accountNo}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {socials.map(({ label, url }, i) => (
              <Button
                key={i + label}
                text={label}
                onClick={() => window.open(url, '_blank')}
                className="w-full bg-text text-background hover:text-text hover:bg-hover hover:border hover:border-text"
                icon={<CiLinkedin />}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default PersonnelOverlay
