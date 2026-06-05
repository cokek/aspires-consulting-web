import React from 'react'
import FramedImage from '../atoms/FramedImage'
import FramedImageClickable from '../atoms/FramedImageClickable'
import PersonnelList from './PersonnelList'

const KeyPersonnel = () => {

 
  return (
    <section className="w-full py-20 flex flex-col gap-20 items-center 
    md:items-start md:gap-25
    xl:w-[1154px] xl:mx-auto xl:gap-32
    " id="team">
<h1>Key personnel</h1>


  <PersonnelList />

   </section>
  )
}

export default KeyPersonnel