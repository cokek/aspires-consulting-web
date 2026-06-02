import React from 'react'
import FramedImage from '../atoms/FramedImage'
import FramedImageClickable from '../atoms/FramedImageClickable'
import PersonnelList from './PersonnelList'

const KeyPersonnel = () => {

 
  return (
    <section className="w-full py-20 flex flex-col gap-20 items-center" id="services">
<h1>Key personnel</h1>


  <PersonnelList />

   </section>
  )
}

export default KeyPersonnel