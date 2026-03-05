"use client"

import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { Plus } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger, SplitText)

const About = () => {
    const sectionRef = useRef()
    const textRef = useRef()

    useGSAP(() => {
        // 1. Text Highlight Effect (The Narrative)
        const split = new SplitText(".reveal-about", { type: "words" })
        
        gsap.from(split.words, {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                end: "bottom 60%",
                scrub: true,
            },
            opacity: 0.1,
            stagger: 0.1,
            ease: "none"
        })

        // 2. Horizontal Lines "Blueprinting"
        gsap.from(".about-line", {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
            },
            scaleX: 0,
            duration: 1.5,
            stagger: 0.3,
            transformOrigin: "left",
            ease: "power4.inOut"
        })

        // 3. Floating Stats Parallax
        gsap.to(".floating-stat", {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            },
            y: -100,
            ease: "none"
        })

    }, { scope: sectionRef })

    return (
        <section 
            ref={sectionRef} 
            className='w-full min-h-screen bg-white relative py-[10vw] px-4 md:px-[2vw] overflow-hidden'
        >
            {/* 12-Column Blueprint Background (Inherited from Hero) */}
            <div className="absolute inset-0 grid grid-cols-6 md:grid-cols-12 px-4 md:px-[2vw] pointer-events-none">
                {[...Array(13)].map((_, i) => (
                    <div key={i} className="border-r border-black/[0.03] h-full" />
                ))}
            </div>

            <div className='relative z-10 grid grid-cols-6 md:grid-cols-12 gap-8'>
                
                {/* Small Label */}
                <div className='col-span-6 md:col-span-12 about-line border-t border-black/10 pt-4'>
                    <p className='text-[3vw] md:text-[0.7vw] uppercase font-black tracking-widest text-indigo-600'>
                        01 — Professional Context
                    </p>
                </div>

                {/* Main Narrative - Huge Scrollytelling text */}
                <div className='col-span-6 md:col-start-3 md:col-span-8 mt-[5vw]'>
                    <h2 className='reveal-about text-[8vw] md:text-[4.5vw] leading-[0.9] font-medium tracking-tight text-black'>
                        We operate at the intersection of <span className='italic font-serif'>meticulous audit</span> and strategic growth. Founded by Naveen Sangewar, our firm was built to replace traditional paperwork with modern, <span className='text-indigo-600 underline'>insight-driven</span> financial architecture.
                    </h2>
                </div>

                {/* Secondary Grid Section */}
                <div className='col-span-6 md:col-span-12 mt-[10vw] about-line border-t border-black/10 pt-8 grid grid-cols-6 md:grid-cols-12 gap-8'>
                    
                    {/* Vision Stat */}
                    <div className='col-span-3 md:col-span-3 floating-stat'>
                        <h4 className='text-[10vw] md:text-[5vw] font-black leading-none italic'>100%</h4>
                        <p className='text-[3vw] md:text-[0.7vw] uppercase font-bold opacity-40 mt-2'>Compliance Accuracy</p>
                    </div>

                    {/* Description Paragraph */}
                    <div className='col-span-6 md:col-start-6 md:col-span-4'>
                        <p className='text-[4.5vw] md:text-[1.1vw] leading-relaxed text-black/70'>
                            In an era of rapid regulatory changes, we provide more than just signatures. We provide a roadmap. Whether you are an MSME scaling up or a corporate navigating complex GST/Income Tax laws, our expertise ensures your foundation is unbreakable.
                        </p>
                        
                        <div className='flex items-center gap-4 mt-8 group cursor-pointer'>
                            <div className='w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500'>
                                <Plus size={20} className='group-hover:rotate-90 transition-transform duration-500' />
                            </div>
                            <span className='text-[3.5vw] md:text-[0.8vw] uppercase font-black tracking-widest'>Our Methodology</span>
                        </div>
                    </div>

                    {/* Tertiary Stat */}
                    <div className='col-span-3 md:col-start-11 md:col-span-2 floating-stat'>
                        <p className='text-[4vw] md:text-[1vw] font-bold leading-tight'>Modern <br/> Hyderabad <br/> Office</p>
                        <div className='w-full h-[1px] bg-black/10 my-4' />
                        <p className='text-[3vw] md:text-[0.6vw] uppercase opacity-40'>Global Standards</p>
                    </div>
                </div>

            </div>

            {/* Aesthetic "Folder" Detail at the bottom */}
            <div className='absolute bottom-10 right-10 opacity-10 hidden md:block'>
                <p className='text-[5vw] font-black uppercase tracking-tighter'>About_Firm_v2.0</p>
            </div>
        </section>
    )
}

export default About