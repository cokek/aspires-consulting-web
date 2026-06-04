import React from 'react'
import PersonnelCard from '../atoms/PersonnelCard'
import { getPersonnel } from '@/app/lib/getPersonnel'

const PersonnelList = async () => {
  const personnel = await getPersonnel()

  if (personnel.length === 0) {
    return (
      <p className="text-center text-sm opacity-60">No personnel to display at this time.</p>
    )
  }

  return (
    <ul className="grid grid-cols-1 gap-16 w-[270px]
    md:grid-cols-2 md:w-full md:gap-20
    ">
      {personnel.map((person, i) => (
        <PersonnelCard key={i} {...person} />
      ))}
    </ul>
  )
}

export default PersonnelList
