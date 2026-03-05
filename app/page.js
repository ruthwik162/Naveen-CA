import React from 'react'
import Hero from './Components/Hero'
import About from './Components/About'
import Service from './Components/Service'
import Integrity from './Components/Integrity'

const page = () => {
  return (
    <div className='w-full '>
      <Hero/>
      <About/>
      <Service/>
      <Integrity/>
    </div>
  )
}

export default page
