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
  { label: 'email@email.com', href: 'mailto:email@email.com' },
  { label: '+44 807 444 5555', href: 'tel:+448074445555' },
  { label: 'CV3 333, Northweltshire, United Kingdom', href: '#' },
]

const socials = [
  { icon: CiLinkedin,  href: '#', label: 'LinkedIn' },
  { icon: CiYoutube,   href: '#', label: 'YouTube' },
  { icon: CiInstagram, href: '#', label: 'Instagram' },
]

const legal = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of use',   href: '#' },
]

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center">
      <span className="text-6xl text-text font-bold tracking-widest leading-none whitespace-nowrap overflow-hidden block -mb-3">
        {MARQUEE_TEXT}
      </span>

      <section className="w-full flex flex-col gap-12 py-12 px-4 bg-text text-background">

        {/* Brand */}
        <div className="flex items-center flex-col gap-6">
          <Image src={iconWhite} alt="Logo" width={500} height={500} className="h-14 w-auto" />
          <span className="text-center">Connecting you with the expertise that moves you forward.</span>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center gap-4">
          <h3 className="font-bold text-xl">Quick Links</h3>
          <ul className="flex flex-col items-center gap-3">
            {quickLinks.map(({ label, href }) => (
              <li key={label}><Link href={href} className="hover:text-hover transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Contacts */}
        <div className="flex flex-col items-center gap-4">
          <h3 className="font-bold text-lg">Contacts</h3>
          <ul className="flex flex-col items-center gap-3">
            {contacts.map(({ label, href }) => (
              <li key={label}><a href={href} className="hover:text-hover transition-colors text-center block">{label}</a></li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div className="flex flex-col items-center gap-4">
          <h3 className="font-bold text-lg">Socials</h3>
          <div className="flex items-center gap-6">
            {socials.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} aria-label={label} className="text-2xl hover:text-hover transition-colors">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Legal */}
        <div className="flex flex-col items-center gap-4">
          <h3 className="font-bold text-lg">Legal</h3>
          <ul className="flex flex-col items-center gap-3">
            {legal.map(({ label, href }) => (
              <li key={label}><Link href={href} className="hover:text-hover transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm">Created by <a href="https://peaceakoja-portfolio-v2.vercel.app/" target="_blank" className="underline hover:text-hover transition-colors">Peace Akoja</a>. All rights reserved.</p>

      </section>
    </footer>
  )
}

export default Footer