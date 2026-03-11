"use client"

import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { Fingerprint, Globe, MoveRight } from 'lucide-react'
import TextY from './TextY'

gsap.registerPlugin(ScrollTrigger, SplitText)

const About = () => {
    const sectionRef = useRef()
    const bgContainerRef = useRef()
    const bgRef = useRef()
    const stickyTriggerRef = useRef()

    useGSAP(() => {
        // 1. PIN THE BACKGROUND (The architectural image)
        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            pin: bgContainerRef.current,
            pinSpacing: false,
        })

        // 2. Background Visual Polish
        gsap.to(bgRef.current, {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
            scale: 1.2,
            filter: "brightness(0.1) blur(5px)",
            ease: "none"
        })

        // 3. Narrative Text Reveal (Word by Word)
        const narrativeElements = gsap.utils.toArray(".narrative-text");
        narrativeElements.forEach((text) => {
            const split = new SplitText(text, { type: "words" });
            gsap.from(split.words, {
                scrollTrigger: {
                    trigger: text,
                    start: "top 85%",
                    end: "top 40%",
                    scrub: 0.5,
                },
                opacity: 0.1,
                y: 10,
                stagger: 0.1,
                ease: "power2.out"
            });
        });

        // 4. Progress Bar for the Sticky Section
        gsap.to(".scroll-progress", {
            scrollTrigger: {
                trigger: stickyTriggerRef.current,
                start: "top 20%",
                end: "bottom bottom",
                scrub: true,
            },
            scaleY: 1,
            ease: "none"
        });

    }, { scope: sectionRef })

    return (
        <section ref={sectionRef} className='w-full bg-black relative font-[PPNeueMontreal]'>

            {/* PINNED BACKGROUND LAYER */}
            <div ref={bgContainerRef} className="absolute inset-0 w-full h-screen z-0 overflow-hidden">
                <div
                    ref={bgRef}
                    className="absolute inset-0 w-full h-full bg-cover bg-center brightness-[0.3]"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
            </div>

            {/* CONTENT LAYER */}
            <div className='relative z-10 px-4 md:px-[4vw]'>

                {/* INITIAL SPACER */}
                <div className="h-[70vh] flex flex-col justify-end pb-24">
                    <div className="flex items-center gap-4 mb-4">
                        <span className='w-12 h-[1px] bg-indigo-500'></span>
                        <p className='text-[10px] uppercase font-black tracking-[0.4em] text-indigo-400'>The Visionary / 01</p>
                    </div>
                    <h1 className='text-white text-5xl md:text-8xl font-bold uppercase tracking-tighter'>About Us.</h1>
                </div>

                {/* STICKY NARRATIVE SECTION */}
                <div ref={stickyTriggerRef} className='max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 relative'>

                    {/* LEFT COLUMN: STICKY TEXT */}
                    <div className='col-span-1 md:col-span-5 mb-20 md:mb-0'>
                        <div className='md:sticky md:top-40 h-fit flex gap-8'>
                            {/* Visual Progress Line */}
                            <div className='hidden md:block w-[1px] h-[300px] bg-white/10 relative overflow-hidden'>
                                <div className='scroll-progress absolute top-0 left-0 w-full h-full bg-indigo-500 origin-top scale-y-0' />
                            </div>

                            <div className='flex flex-col gap-6'>
                                <h3 className='text-[12vw] md:text-[4.5vw] font-bold leading-[0.85] uppercase tracking-tighter text-white'>
                                    From Ledger <br /> <span className='text-indigo-500 italic'>to Logic.</span>
                                </h3>
                                <p className='text-zinc-500 font-mono text-[10px] uppercase tracking-widest'>Est. Practice / Hyderabad</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: SCROLLING CONTENT */}
                    <div className='col-span-1 md:col-start-7 md:col-span-6 flex flex-col gap-32 pb-60'>

                        <div className='flex flex-col gap-10'>
                            <h2 className='narrative-text text-[7vw] md:text-[2.8vw] leading-[1.1] font-medium tracking-tight text-zinc-300'>
                                Naveen Sangewar founded this practice with a clear vision — to transform the traditional approach of accounting and compliance into a modern, technology-driven financial ecosystem.
                            </h2>
                            <p className='narrative-text text-zinc-400 text-lg md:text-xl leading-relaxed'>
                                What once relied heavily on paperwork, manual processes, and fragmented financial records is now being reimagined through structured systems, digital workflows, and intelligent financial planning.
                            </p>
                        </div>

                        <div className='flex flex-col gap-10'>
                            <h2 className='narrative-text text-[7vw] md:text-[2.8vw] leading-[1.1] font-medium tracking-tight text-zinc-300'>
                                With a strong foundation in Chartered Accountancy principles, the firm focuses on helping businesses understand the story behind their numbers.
                            </h2>
                            <p className='narrative-text text-zinc-400 text-lg md:text-xl leading-relaxed'>
                                Every balance sheet, audit report, and tax strategy is treated as an opportunity to provide deeper financial insight and long-term direction for clients. We believe accuracy is the baseline; strategy is the value.
                            </p>
                        </div>

                        {/* FOCUSED CARDS WITHIN THE FLOW */}
                        <div className='grid grid-cols-1 gap-6 pt-10'>
                            <div className='p-10 border border-white/10 bg-white/[0.02] backdrop-blur-md'>
                                <Fingerprint size={32} className='text-indigo-500 mb-10' />
                                <h4 className='text-white text-2xl font-bold uppercase mb-4'>Precision First</h4>
                                <p className='text-zinc-400 text-sm leading-relaxed'>
                                    Zero-margin for error in statutory compliance. We build the skeleton that allows your enterprise to withstand global scrutiny.
                                </p>
                            </div>

                            <div className='flex flex-col items-end text-right pt-20 relative'>
                                <span className='text-[15vw] font-black text-white/5 absolute -top-10 right-0 leading-none'>100%</span>
                                <p className='text-indigo-500 font-mono text-sm mb-2'>TRS-LEVEL: OPTIMAL</p>
                                <h2 className='text-white text-4xl md:text-5xl font-bold uppercase tracking-tighter'>Compliance <br /> Accuracy</h2>
                            </div>
                        </div>
                    </div>
                </div>

                {/* QUOTE REVEAL */}
                <div className='col-span-12 py-60 flex flex-col items-center text-center'>
                    <Globe size={40} className='text-indigo-500 mb-12 animate-pulse' />
                    <TextY>
                        <p className='text-[6vw] md:text-[2.8vw] text-zinc-200 font-light leading-tight max-w-5xl'>
                            "A balance sheet is just the skeleton. Our job is to build the <span className='text-white font-bold uppercase'>muscle</span> that allows your business to move and scale."
                        </p>
                    </TextY>

                    <div className='mt-16 flex flex-col items-center gap-4'>
                        <span className='w-[1px] h-24 bg-gradient-to-b from-indigo-500 to-transparent' />
                        <p className='text-white font-black uppercase tracking-widest text-[10px]'>Naveen Sangewar, Founder</p>
                    </div>
                </div>
            </div>

            {/* SYSTEM HUD */}
            <div className='fixed bottom-10 right-10 z-50 pointer-events-none opacity-40 mix-blend-difference'>
                <div className='flex flex-col items-end gap-2 text-white font-mono text-[9px] tracking-widest'>
                    <p>STATUS: SYSTEM_ACTIVE</p>
                    <div className='flex items-center gap-2'>
                        <span className='w-2 h-2 rounded-full bg-indigo-500 animate-ping' />
                        <p>COORD: HYD_CORE</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About