"use client"

import { images } from '@/public/assets/assets'
import { ReactLenis } from '@studio-freight/react-lenis'
import { Circle, LocationEditIcon } from 'lucide-react'
import React from 'react'

const Hero = () => {
    return (

        <ReactLenis root>
            <div className='w-full min-h-screen  md:px-[2vw] px-[5vw]  overflow-hidden'>
                <section className='xl:pt-[5vw]  h-screen lg:pt-[7vw] md:pt-[9vw] pt-[15vw]  xl:text-[5vw] grid grid-cols-6 justify-between  md:grid-cols-12 md:gap-8  gap-4 xl:leading-[5vw] text-black font-semibold font-[PPNeueMontreal]'>
                    <div className='overflow-hidden col-start-1 w-full h-full md:col-span-5 xl:col-span-3 aspect-video col-span-4'>
                        <img src={images.naveen.src} className='bg-red-500  object-cover object-center w-full h-full' alt="" />
                    </div>


                    <div className=' md:col-start-7  md:col-span-6 justify-between flex flex-col  items-start   col-start-2 col-span-5'>
                        <h1 className='xl:text-[3vw] xl:leading-[3vw] lg:text-[5vw] lg:leading-[5vw] font-bold md:text-[4vw] md:leading-[4vw] text-[5vw] leading-[5vw] text-black/60'><span className='text-black'>SANGEWAR & ASSOCIATES</span> <br />  Chartered Accountants </h1>
                        <p className='xl:text-[1vw] xl:leading-[1vw] xl:w-1/2 lg:text-[2vw]  lg:leading-[2vw] md:text-[2.5vw] md:leading-[2.5vw] font-[Sathoshi] text-[2.5vw] leading-[3vw] font-semibold'>Chartered Accountants redefining trust, transparency, and financial clarity.</p>
                    </div>

                    <div className='md:col-start-1 md:col-span-2 col-start-1 col-span-5 '>
                        <h1 className='font-bold xl:text-[1vw] xl:leading-[3.1vw] lg:text-[1.5vw] md:text-[3vw] text-[4vw] leading-[4vw] '>Founded in <span className='xl:text-[6vw] text-[9vw] text-indigo-500 font-bold'>2022</span></h1>
                    </div>


                    <div className='md:col-start-4 xl:col-start-4 md:col-span-9 xl:col-span-9 col-span-6 col-start-1 font-[Sathoshi] uppercase xl:mt-0 lg:mt-[15vw] md:mt-[5vw]'>
                        <h1 className='font-bold  xl:text-[7.9vw] xl:leading-[6.5vw] tracking-tighter lg:text-[11.5vw] lg:leading-[10vw] md:text-[8.3vw] md:leading-[8vw] text-[9.5vw] leading-[8.5vw] '>Accounting For <span className='text-indigo-500'>Better Business</span></h1>
                    </div>


                    <div className='md:col-start-1 md:col-span-8  xl:col-span-5 lg:col-span-8 col-start-1 col-span-4  text-black/70 '>
                        <p className='xl:text-[1.8vw] xl:leading-[1.9vw] font-[Sathoshi] lg:text-[2.5vw] lg:leading-[2.5vw] md:text-[3.5vw] tracking-tight md:leading-[3.5vw] text-[3.5vw] leading-[4vw] font-bold '>
                            A boutique CA firm from Hyderabad delivering modern, compliant, and insight-driven financial solutions.
                            Built on integrity. Powered by expertise. Focused on your growth.
                        </p>
                    </div>


                    <div className='xl:col-start-7  xl:col-span-3 md:col-start-1 md:col-span-3  col-start-1 col-span-3 '>
                        <ul className='xl:text-[1vw] xl:leading-[1vw] lg:text-[1.2vw] lg:leading-[1.2vw] flex items-start justify-start flex-col md:text-[2vw] md:leading-[2vw] text-[3vw] leading-[4vw] dm-mono-medium '>
                            <li className=''>Tax</li>
                            <li> Audit</li>
                            <li> Corporate Law</li>
                            <li> Finance Operations</li>
                        </ul>
                    </div>

                    <div className='md:col-start-8 md:col-span-4 xl:col-start-11  lg:col-start-8 lg:col-span-3 xl:col-span-2 col-start-4 col-span-3 text-black/70 '>
                        <p className='xl:text-[1vw] xl:leading-[1.2vw] lg:text-[2.5vw] lg:leading-[2.6vw] md:text-[3vw] md:leading-[3.5vw] text-[3vw] leading-[4vw] font-semibold '>
                            We partner with individuals, startups, MSMEs, and corporates — offering services that are fast, reliable, and deeply research-oriented.
                        </p>
                    </div>
                </section>

                <section>
                    <div className='md:col-start-4 md:col-span-3 mt-[10vw]'>
                        <h1 className='dm-mono-medium xl:text-[1vw] lg:text-[1.5vw] md:text-[3vw] text-[4vw] '><LocationEditIcon className='inline-block w-5 h-5' />  Hyderabad, Telangana, India</h1>
                    </div>


                </section>
            </div>
        </ReactLenis>
    )
}

export default Hero
