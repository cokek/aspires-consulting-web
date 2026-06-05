import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import iconWhite from '@/app/images/iconWhite.png'
import { CiLinkedin, CiYoutube, CiInstagram } from 'react-icons/ci'

const MARQUEE_TEXT = Array(20).fill('ASPIRES').join('')

const quickLinks = [
  { label: 'Home',          href: '/' },
  { label: 'Who we are',    href: '/#about' },
  { label: 'What we do',    href: '/#services' },
  { label: 'Key personnel', href: '/#team' },
  { label: 'Contact a pro', href: '/#contact' },
]

const contacts = [
  { label: 'aspiresconsultingservices@gmail.com', href: 'mailto:aspiresconsultingservices@gmail.com' },
  { label: '+447824029823', href: 'tel:+447824029823' },
  { label: 'Coventry, England, United Kingdom', href: 'https://www.google.com/maps/search/?api=1&query=Coventry,+England,+United+Kingdom' },
]

const socials = [
  { icon: CiLinkedin,  href: 'https://www.linkedin.com/company/aspires-consulting-services', label: 'LinkedIn' },
  { icon: CiYoutube,   href: 'https://www.youtube.com/@AspiresConsultingServices', label: 'YouTube' },
]

const legal = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of use',   href: '/terms-of-use' },
]

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center">
      <span className="text-6xl text-text font-bold tracking-widest leading-none whitespace-nowrap overflow-hidden block -mb-3">
        {MARQUEE_TEXT}
      </span>

      <section className="w-full flex flex-col gap-12 py-12 px-4 bg-text text-background justify-center
      md:flex-row
      xl:px-9 xl:py-16 xl:gap-36
      ">

        {/* Brand */}
        <div className="flex items-center flex-col gap-6 md:items-start ">
          <Image src={iconWhite} alt="Logo" width={500} height={500} className="h-14 w-auto xl:h-22" />
          <span className="text-center md:text-left">Connecting you with the expertise that moves you forward.</span>
        </div>

<div className="w-full flex flex-col gap-12 flex-wrap md:flex-row">
          {/* Quick Links */}
          <div className="flex flex-col items-center gap-4 md:items-start md:w-36">
          <h3 className="font-bold text-xl">Quick Links</h3>
          <ul className="flex flex-col items-center gap-3 md:items-start">
            {quickLinks.map(({ label, href }) => (
              <li key={label}><Link href={href} className="hover:text-hover transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Contacts */}
        <div className="flex flex-col items-center gap-4 md:items-start">
          <h3 className="font-bold text-lg">Contacts</h3>
          <ul className="flex flex-col items-center gap-3 md:items-start">
            {contacts.map(({ label, href }) => (
              <li key={label}><a href={href} target="_blank" className="hover:text-hover transition-colors text-center block">{label}</a></li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div className="flex flex-col items-center gap-4 md:items-start md:w-36">
          <h3 className="font-bold text-lg">Socials</h3>
          <div className="flex items-center gap-6 md:items-start">
            {socials.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" aria-label={label} className="text-2xl hover:text-hover transition-colors">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Legal */}
        <div className="flex flex-col items-center gap-4 md:items-start md:w-36">
          <h3 className="font-bold text-lg">Legal</h3>
          <ul className="flex flex-col items-center gap-3 md:items-start">
            {legal.map(({ label, href }) => (
              <li key={label}><Link href={href} className="hover:text-hover transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Copyright */}
        <span className="text-center self-end md:text-left">Created by <a href="https://peaceakoja-portfolio-v2.vercel.app/" target="_blank" className="underline hover:text-hover transition-colors">Peace Akoja</a>. All rights reserved.</span>

</div>
      </section>
    </footer>
  )
}

export default Footer