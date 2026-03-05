import React from 'react'
import Hero from './Components/Hero'
import About from './Components/About'
import Service from './Components/Service'

const page = () => {
  return (
    <div className='w-full '>
      <Hero/>
      <About/>
      <Service/>
    </div>
  )
}

export default page
