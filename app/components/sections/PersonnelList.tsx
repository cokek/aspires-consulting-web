import React from 'react'
import PersonnelCard from '../atoms/PersonnelCard'

const PersonnelList = () => {
  return (
    <ul className="flex flex-col gap-16 w-[270px]">
      <PersonnelCard
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1000&q=80"
        name="John Doe"
        consultationFee="£ 1000"
        bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatibus reprehenderit ducimus nisi tempora dignissimos quod, labore sequi aliquam necessitatibus."
        socials={[
          { label: 'LinkedIn', url: '#' },
          { label: 'LinkedIn', url: '#' },
          { label: 'LinkedIn', url: '#' },
        ]}
      />
    </ul>
  )
}

export default PersonnelList