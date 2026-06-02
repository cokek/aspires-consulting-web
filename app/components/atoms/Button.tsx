'use client'

import React from 'react'

const Button = ({ text, onClick, className, icon }: { text: string, onClick: () => void, className: string, icon: React.ReactNode }) => {
  return (
    <button className={`border-radius-button flex h-11 items-center justify-between px-4 gap-3 ${className}`}
    onClick={onClick}
    >
        {text}
        {icon && <span className="text-lg shrink-0">{icon}</span>}
    </button>
  )
}

export default Button