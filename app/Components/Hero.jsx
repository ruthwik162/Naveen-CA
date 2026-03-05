"use client"

import { images } from '@/public/assets/assets'
import { useGSAP } from '@gsap/react'
import { ReactLenis } from '@studio-freight/react-lenis'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { Activity, ArrowUpRight, Plus } from 'lucide-react'
import React, { useRef } from 'react'

gsap.registerPlugin(SplitText)

const Hero = () => {
    const container = useRef()

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "expo.out", duration: 1.2 } });

        // Text reveal with a tighter, faster stagger
        const split = new SplitText(".reveal", { type: "lines", linesClass: "overflow-hidden" });
        new SplitText(".reveal", { type: "lines", linesClass: "line-item" });

        tl.from(".line-item", { yPercent: 100, stagger: 0.05 })
            .from(".border-anim", { scaleX: 0, stagger: 0.1, transformOrigin: "left" }, "-=1")
            .from(".img-reveal", { clipPath: "inset(0% 0% 100% 0%)", scale: 1.1 }, "-=1.2")
            .from(".stat-item", { opacity: 0, y: 10, stagger: 0.1 }, "-=0.8");

    }, { scope: container });

    return (
        <ReactLenis root>
            <div ref={container} className='w-full min-h-screen bg-white text-[#111] font-[PPNeueMontreal] selection:bg-black selection:text-white'>

                {/* 12-Column Grid Lines (The "Blueprint" Look) */}
                <div className="fixed inset-0 grid grid-cols-6 md:grid-cols-12 px-4 md:px-[2vw] pointer-events-none">
                    {[...Array(13)].map((_, i) => (
                        <div key={i} className="border-r border-black/[0.03] h-full" />
                    ))}
                </div>

                <section className='relative px-4 md:px-[2vw] pt-15 md:pt-32'>

                    {/* MAIN CONTENT GRID */}
                    <div className='grid grid-cols-6 md:grid-cols-12 gap-y-8 md:gap-8 mt-6'>

                        {/* 1. HERO TITLE - Aggressive & Compact */}
                        <div className='col-span-6 md:col-span-8'>
                            <h1 className='reveal text-[13vw] md:text-[8vw] leading-[0.85] font-black uppercase tracking-tighter italic'>
                                Financial <br /> Precision.
                            </h1>
                        </div>

                        {/* 2. SERVICES TAGS - Mobile-Friendly Pills */}
                        <div className='col-span-6 md:col-span-4 flex flex-wrap gap-2 content-start'>
                            {['Taxation', 'Audit', 'Advisory', 'Strategy'].map((item) => (
                                <span key={item} className='stat-item px-3 py-1 border border-black/10 rounded-full text-[2.5vw] md:text-[0.6vw] uppercase font-bold hover:bg-black hover:text-white transition-colors cursor-crosshair'>
                                    {item}
                                </span>
                            ))}
                        </div>

                        {/* 3. CENTER IMAGE - Aspect Ratio controlled for mobile screens */}
                        <div className='col-span-6 md:col-span-5 h-[40vh] md:h-[60vh] overflow-hidden relative group'>
                            <div className='img-reveal w-full h-full bg-zinc-100'>
                                <img
                                    src={images.naveen.src}
                                    className='w-full h-full object-cover grayscale brightness-110 contrast-110 transition-transform duration-700 group-hover:scale-105'
                                    alt="Naveen Sangewar"
                                />
                            </div>
                            <div className='absolute top-4 right-4 bg-white p-2 md:p-4 rounded-full mix-blend-difference'>
                                <ArrowUpRight className='w-6 h-6' />
                            </div>
                        </div>

                        {/* 4. DATA SECTION - Small text, high density */}
                        <div className='col-span-6 md:col-start-7 md:col-span-5 flex flex-col justify-between py-2'>
                            <div className='space-y-6'>
                                <div className='border-anim border-t border-black/10 pt-4'>
                                    <h4 className='stat-item text-[3vw] md:text-[0.7vw] uppercase font-black mb-2 flex items-center gap-2'>
                                        <Plus className='w-3 h-3 text-indigo-600' /> The Philosophy
                                    </h4>
                                    <p className='reveal text-[4.5vw] md:text-[1.2vw] leading-tight font-medium text-black/70'>
                                        Boutique financial architecture for MSMEs and Corporates. We translate complex compliance into <span className='text-black underline decoration-indigo-500 underline-offset-4'>growth-ready</span> data.
                                    </p>
                                </div>

                                <div className='grid grid-cols-2 gap-4'>
                                    <div className='stat-item'>
                                        <p className='text-[2.5vw] md:text-[0.6vw] uppercase opacity-40'>HQ</p>
                                        <p className='text-[3.5vw] md:text-[0.9vw] font-bold'>Hyderabad, India</p>
                                    </div>
                                    <div className='stat-item'>
                                        <p className='text-[2.5vw] md:text-[0.6vw] uppercase opacity-40'>Firm No.</p>
                                        <p className='text-[3.5vw] md:text-[0.9vw] font-bold'>EST. 2022</p>
                                    </div>
                                </div>
                            </div>


                            <div className='mt-20 md:mt-0'>
                                <div className='blueprint-line border-t border-black/10 pt-6 grid grid-cols-2 gap-4'>
                                    <div className='data-node'>
                                        <p className='text-[10px] uppercase font-bold opacity-30 mb-2'>Core Competency</p>
                                        <ul className='text-[12px] font-bold uppercase space-y-1'>
                                            <li className='flex items-center gap-2'><Activity size={10} className='text-indigo-600' /> Statutory Audit</li>
                                            <li className='flex items-center gap-2'><Activity size={10} className='text-indigo-600' /> Forensic Tax</li>
                                        </ul>
                                    </div>
                                    <div className='data-node flex flex-col justify-end items-end'>
                                        <button className='group flex items-center gap-3 bg-black text-white px-6 py-3 rounded-sm hover:bg-indigo-600 transition-all duration-500'>
                                            <span className='text-[10px] font-bold uppercase tracking-widest'>Secure Inquiry</span>
                                            <ArrowUpRight size={14} className='group-hover:rotate-45 transition-transform' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>

            <style jsx>{`
                .overflow-hidden { overflow: hidden; }
                .line-item { display: block; }
            `}</style>
        </ReactLenis>
    )
}

export default Hero