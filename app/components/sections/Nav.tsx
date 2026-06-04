'use client'

import React, { useState, useRef, useEffect } from 'react'
import icon from '@/app/images/icon.png'
import Image from 'next/image'
import Link from 'next/link'
import { MdMenu, MdClose, MdGroups, MdWork, MdBadge, MdPersonAdd } from "react-icons/md"

const navLinks = [
  { label: 'Who we are',    href: '/#about',     icon: MdGroups },
  { label: 'What we do',    href: '/#services',  icon: MdWork },
  { label: 'Key personnel', href: '/#team',      icon: MdBadge },
  { label: 'Contact a pro', href: '/#contact',   icon: MdPersonAdd },
]

const Nav = () => {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className="flex items-center justify-between p-4 bg-background drop-shadow-sm sticky top-0 left-0 right-0 z-50
    md:px-10
    ">
      <Link href="/">
        <Image src={icon} alt="Logo" width={500} height={500} className="h-6 w-auto" />
      </Link>

      <div className="relative md:hidden" ref={menuRef}>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="text-2xl text-text hover:text-hover transition-colors"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <MdClose /> : <MdMenu />}
        </button>

        {open && (
          <div className="absolute right-0 top-full mt-2 w-56 px-3 py-5 flex flex-col gap-3 bg-text rounded-sm overflow-hidden shadow-lg">
            {navLinks.map(({ label, href, icon: Icon }, i) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`flex items-start justify-between w-full h-6 text-background transition-all duration-300 border-b border-background
                    hover:bg-accent hover:text-text hover:items-center hover:px-2
                    `}
              >
                <span className="text-sm font-medium">{label}</span>
                <Icon className="text-lg shrink-0" />
              </Link>
            ))}
          </div>
        )}
      </div>

      <ul className="hidden md:flex items-center gap-4 text-xs font-medium">
        <li><Link href="/#about" className="hover:text-hover transition-colors">Who we are</Link></li>
        <li><Link href="/#services" className="hover:text-hover transition-colors">What we do</Link></li>
        <li><Link href="/#team" className="hover:text-hover transition-colors">Key personnel</Link></li>
        <li><Link href="/#contact" className="hover:text-hover transition-colors">Contact a pro</Link></li>
      </ul>
    </nav>
  )
}

export default Nav