"use client"

import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { Plus, Fingerprint, MoveRight, ArrowDown } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger, SplitText)

const About = () => {
    const sectionRef = useRef()
    const containerRef = useRef()

    useGSAP(() => {
        // 1. Smooth Text Reveal (Scrollytelling)
        const childSplit = new SplitText(".narrative-text", { type: "words", linesClass: "split-child" });
        
        gsap.from(childSplit.words, {
            scrollTrigger: {
                trigger: ".narrative-text",
                start: "top 85%",
                end: "bottom 60%",
                scrub: 0.5,
            },
            opacity: 0.1,
            y: 10,
            stagger: 0.1,
            ease: "power2.out"
        })

        // 2. Blueprint Line Animation
        gsap.from(".draw-line", {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
            },
            scaleX: 0,
            duration: 2,
            stagger: 0.4,
            transformOrigin: "left",
            ease: "expo.inOut"
        })

        // 3. Image/Data Block Reveal
        gsap.from(".reveal-block", {
            scrollTrigger: {
                trigger: ".reveal-block",
                start: "top 90%",
            },
            y: 100,
            opacity: 0,
            duration: 1.5,
            ease: "expo.out"
        })

    }, { scope: sectionRef })

    return (
        <section 
            ref={sectionRef} 
            className='w-full bg-[#FDFDFD] relative py-24 md:py-40 px-4 md:px-[2vw] overflow-hidden font-[PPNeueMontreal]'
        >
            {/* GRID OVERLAY */}
            <div className="absolute inset-0 grid grid-cols-6 md:grid-cols-12 px-4 md:px-[2vw] pointer-events-none opacity-20">
                {[...Array(13)].map((_, i) => (
                    <div key={i} className="border-r border-black/[0.1] h-full" />
                ))}
            </div>

            <div className='relative z-10 max-w-[1400px] mx-auto'>
                
                {/* PHASE 01: THE ORIGIN */}
                <div className='grid grid-cols-6 md:grid-cols-12 gap-y-12 mb-32'>
                    <div className='col-span-6 md:col-span-4'>
                        <div className='flex items-center gap-4 mb-8'>
                            <span className='w-12 h-[1px] bg-indigo-600 draw-line'></span>
                            <p className='text-[10px] uppercase font-black tracking-[0.4em] text-indigo-600'>01 / Genesis</p>
                        </div>
                        <div className='reveal-block'>
                            <h3 className='text-[8vw] md:text-[2.5vw] font-semibold leading-none uppercase tracking-tighter mb-6'>
                                From Ledger to <br/> Logic.
                            </h3>
                            <p className='text-[4.5vw] md:text-[1.1vw] text-black/60 leading-relaxed max-w-sm'>
                                Naveen Sangewar founded this practice not to count numbers, but to make numbers count. We saw a gap between "Compliance" and "Clarity."
                            </p>
                        </div>
                    </div>

                    <div className='col-span-6 md:col-start-6 md:col-span-7'>
                        <h2 className='narrative-text text-[8vw] md:text-[4.5vw] leading-[1] font-medium tracking-tight text-black'>
                            We operate at the intersection of <span className='italic font-light text-black/30 underline decoration-indigo-500/30'>meticulous audit</span> and strategic growth. Founded in Hyderabad, our firm was built to replace traditional paperwork with modern, <span className='text-indigo-600'>insight-driven</span> financial architecture.
                        </h2>
                    </div>
                </div>

                {/* PHASE 02: THE METHODOLOGY (Visual Break) */}
                <div className='grid grid-cols-6 md:grid-cols-12 gap-8 mb-32'>
                    <div className='col-span-6 md:col-span-12 draw-line border-t border-black/10' />
                    
                    <div className='col-span-3 md:col-span-3 pt-8'>
                        <p className='text-[9px] uppercase font-bold opacity-30 mb-12 tracking-widest'>Core Philosophy</p>
                        <div className='space-y-8'>
                           <div>
                                <h4 className='text-[12px] font-black uppercase mb-2 flex items-center gap-2'>
                                    <Fingerprint size={14} className='text-indigo-600'/> Precision
                                </h4>
                                <p className='text-[10px] uppercase font-bold opacity-50 tracking-wider'>Zero-margin for error in statutory compliance.</p>
                           </div>
                           <div>
                                <h4 className='text-[12px] font-black uppercase mb-2 flex items-center gap-2'>
                                    <MoveRight size={14} className='text-indigo-600'/> Velocity
                                </h4>
                                <p className='text-[10px] uppercase font-bold opacity-50 tracking-wider'>MSME scaling at the speed of modern markets.</p>
                           </div>
                        </div>
                    </div>

                    <div className='col-span-3 md:col-start-5 md:col-span-4 pt-8'>
                         <div className='aspect-[4/5] bg-zinc-100 overflow-hidden reveal-block'>
                            <img 
                                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2000&auto=format&fit=crop" 
                                className='w-full h-full object-cover grayscale contrast-125'
                                alt="Financial Architecture"
                            />
                         </div>
                    </div>

                    <div className='col-span-6 md:col-start-10 md:col-span-3 pt-8 flex flex-col justify-between'>
                        <div className='reveal-block'>
                            <h4 className='text-[10vw] md:text-[5vw] font-black leading-none italic text-indigo-600'>100%</h4>
                            <p className='text-[3vw] md:text-[0.7vw] uppercase font-bold opacity-40 mt-4 tracking-widest leading-relaxed'>
                                Compliance Accuracy <br/> Across 45+ Active Sectors
                            </p>
                        </div>
                        <div className='mt-20 md:mt-0'>
                            <p className='text-[11px] leading-relaxed opacity-70'>
                                "A balance sheet is just the skeleton. Our job is to build the muscle that allows the business to move."
                            </p>
                            <p className='text-[10px] font-bold mt-4 uppercase tracking-tighter'>— Naveen Sangewar, Founder</p>
                        </div>
                    </div>
                </div>

                {/* PHASE 03: THE CALL TO ACTION */}
                <div className='grid grid-cols-6 md:grid-cols-12'>
                    <div className='col-span-6 md:col-span-12 flex flex-col md:flex-row items-center justify-between border-y border-black/10 py-12 group cursor-pointer'>
                         <h2 className='text-[8vw] md:text-[3vw] font-semibold uppercase tracking-tighter'>
                            Ready to <span className='italic font-light'>Engineer</span> Your Growth?
                         </h2>
                         <div className='mt-8 md:mt-0 flex items-center gap-6'>
                            <span className='text-[10px] uppercase font-black tracking-widest group-hover:text-indigo-600 transition-colors'>Explore Methodology</span>
                            <div className='w-16 h-16 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-indigo-600 transition-all duration-500'>
                                <ArrowDown size={24} className='group-hover:translate-y-1 transition-transform' />
                            </div>
                         </div>
                    </div>
                </div>

            </div>

            {/* Aesthetic Detail */}
            <div className='absolute bottom-10 left-10 opacity-5 font-mono text-[10px]'>
                COORD: 17.3850° N, 78.4867° E // HYD_OFFICE
            </div>
        </section>
    )
}

export default About