"use client"

import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { ArrowUpRight, Coins, FileSearch, Fingerprint, GanttChartSquare, Globe, Globe2, MoveRight, Scale, ShieldCheck, Cpu } from 'lucide-react'
import { ReactLenis } from '@studio-freight/react-lenis'

gsap.registerPlugin(ScrollTrigger, SplitText)

const About = () => {
    const sectionRef = useRef()
    const bgContainerRef = useRef()
    const bgRef = useRef()
    const stickyTriggerRef = useRef()

    const serviceList = [
        {
            title: "Taxation & Strategy",
            icon: <ShieldCheck size={32} strokeWidth={1} />,
            desc: "Advanced GST planning, Direct Tax optimization, and international treaty benefits (DTAA) to minimize leakage.",
            tag: "FISCAL DEFENSE"
        },
        {
            title: "Audit & Assurance",
            icon: <FileSearch size={32} strokeWidth={1} />,
            desc: "Statutory audits that go beyond compliance to identify operational bottlenecks and risk vulnerabilities.",
            tag: "INTEGRITY CHECK"
        },
        {
            title: "Corporate Advisory",
            icon: <GanttChartSquare size={32} strokeWidth={1} />,
            desc: "Structural engineering for startups and conglomerates—from ROC compliance to complex mergers.",
            tag: "STRUCTURAL"
        },
        {
            title: "Forensic Accounting",
            icon: <Scale size={32} strokeWidth={1} />,
            desc: "Investigative deep-dives into financial data to detect anomalies, fraud prevention, and litigation support.",
            tag: "INVESTIGATIVE"
        },
        {
            title: "Wealth Management",
            icon: <Coins size={32} strokeWidth={1} />,
            desc: "Personalized portfolio architecture for HNIs, focusing on tax-efficient wealth preservation and succession.",
            tag: "ASSET GROWTH"
        },
        {
            title: "Global Compliance",
            icon: <Globe2 size={32} strokeWidth={1} />,
            desc: "Cross-border transaction advisory, FEMA compliance, and Transfer Pricing documentation.",
            tag: "FEMA/IFT"
        }
    ]

    useGSAP(() => {
        // 1. PIN THE BACKGROUND 
        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            pin: bgContainerRef.current,
            pinSpacing: false,
        })

        // 2. Background Visual Polish (Blur & Scale)
        gsap.to(bgRef.current, {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
            scale: 1.15,
            filter: "brightness(0.15) blur(8px)",
            ease: "none"
        })

        // 3. Narrative Text Highlight (Jesko Style)
        const narrativeElements = gsap.utils.toArray(".narrative-text");
        narrativeElements.forEach((text) => {
            const split = new SplitText(text, { type: "words" });
            gsap.from(split.words, {
                scrollTrigger: {
                    trigger: text,
                    start: "top 80%",
                    end: "top 30%",
                    scrub: 0.8,
                },
                opacity: 0.1,
                y: 20,
                rotateX: -30,
                stagger: 0.1,
                color: "#4f46e5", // Fades from indigo to white/zinc
                ease: "power2.out"
            });
        });

        // 4. Progress Bar
        gsap.to(".scroll-progress", {
            scrollTrigger: {
                trigger: stickyTriggerRef.current,
                start: "top 20%",
                end: "bottom bottom",
                scrub: true,
            },
            scaleY: 1,
            backgroundColor: "#C5A059", // Transition to Gold
            ease: "none"
        });

    }, { scope: sectionRef })

    return (
        <ReactLenis root>
            <section ref={sectionRef} className='w-full bg-[#0A0A0A] relative font-[PPNeueMontreal] overflow-hidden selection:bg-[#C5A059] selection:text-black'>

                {/* PINNED BACKGROUND LAYER */}
                <div ref={bgContainerRef} className="absolute inset-0 w-full h-screen z-0 overflow-hidden">
                    <div
                        ref={bgRef}
                        className="absolute inset-0 w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A] opacity-90" />
                </div>

                {/* CONTENT LAYER */}
                <div className='relative z-10 px-6 md:px-[5vw]'>

                    {/* INITIAL SPACER / HERO HEAD */}
                    <div className="h-[80vh] flex flex-col justify-end pb-32">
                        <div className="flex items-center gap-6 mb-6">
                            <Cpu size={18} className="text-[#C5A059] animate-pulse" />
                            <p className='text-[10px] uppercase font-bold tracking-[0.5em] text-[#C5A059]'>The Methodology / 01</p>
                        </div>
                        <h1 className='text-white text-[15vw] md:text-[10vw] font-bold uppercase tracking-tighter leading-[0.8]'>
                            About <br /> <span className="italic font-light text-zinc-500 opacity-50">The Practice.</span>
                        </h1>
                    </div>

                    {/* STICKY NARRATIVE SECTION */}
                    <div ref={stickyTriggerRef} className='max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 relative gap-12'>

                        {/* LEFT COLUMN: STICKY BRAND BLOCK */}
                        <div className='col-span-12 md:col-span-5 mb-20 md:mb-0'>
                            <div className='md:sticky md:top-40 h-fit'>
                                <div className='flex gap-8 mb-12'>
                                    <div className='hidden md:block w-[1px] h-[400px] bg-white/5 relative overflow-hidden'>
                                        <div className='scroll-progress absolute top-0 left-0 w-full h-full bg-indigo-600 origin-top scale-y-0' />
                                    </div>

                                    <div className='flex flex-col gap-8'>
                                        <h3 className='text-[10vw] md:text-[5vw] font-bold leading-[0.85] uppercase tracking-tighter text-white'>
                                            From Ledger <br /> <span className='text-[#C5A059] italic'>to Logic.</span>
                                        </h3>
                                        <p className='text-[#C5A059] font-mono text-[10px] uppercase tracking-[0.3em]'>Est. 2026 / Hyderabad</p>

                                        <div className='p-12 border border-white/5 bg-white/[0.01] backdrop-blur-2xl relative group overflow-hidden transition-all duration-700 hover:border-[#C5A059]/30'>
                                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                                            <Fingerprint size={32} className='text-[#C5A059] mb-12 opacity-80' />
                                            <h4 className='text-white text-3xl font-bold uppercase mb-6 tracking-tight'>Precision First</h4>
                                            <p className='text-zinc-500 text-sm leading-relaxed uppercase tracking-wider font-medium'>
                                                Zero-margin for error in statutory compliance. We build the skeleton that allows your enterprise to withstand global scrutiny.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: THE SCROLLING STORY */}
                        <div className='col-span-12 md:col-start-7 md:col-span-6 flex flex-col gap-48 pb-60'>

                            <div className='flex flex-col gap-12'>
                                <h2 className='narrative-text text-[8vw] md:text-[3.2vw] leading-[1.05] font-bold tracking-tighter text-white uppercase'>
                                    Naveen Sangewar founded this practice to transform traditional compliance into a modern, technology-driven financial ecosystem.
                                </h2>
                                <p className='narrative-text text-zinc-500 text-lg md:text-xl leading-relaxed uppercase font-medium tracking-wide'>
                                    What once relied on fragmented records is now being reimagined through structured systems, digital workflows, and intelligent planning.
                                </p>
                            </div>

                            <div className='flex flex-col gap-12'>
                                <h2 className='narrative-text text-[8vw] md:text-[3.2vw] leading-[1.05] font-bold tracking-tighter text-white uppercase'>
                                    We focus on helping businesses understand the story behind their numbers. Accuracy is the baseline; strategy is the value.
                                </h2>
                                <p className='narrative-text text-zinc-500 text-lg md:text-xl leading-relaxed uppercase font-medium tracking-wide'>
                                    Every audit report and tax strategy is treated as an opportunity to provide deeper insight and long-term direction for our clients.
                                </p>
                            </div>

                            {/* SERVICE GRID WITHIN FLOW */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
                                {serviceList.map((service, index) => (
                                    <div
                                        key={index}
                                        className="group relative p-10 bg-[#0A0A0A] transition-all duration-500 hover:bg-[#111]"
                                    >
                                        <div className="absolute top-0 left-0 w-full h-[1px] bg-[#C5A059] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                        <div className="text-[#C5A059] mb-16 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-white text-xl font-bold uppercase tracking-tight mb-4">
                                            {service.title}
                                        </h3>
                                        <p className="text-zinc-600 text-[11px] font-bold uppercase tracking-widest leading-relaxed group-hover:text-zinc-400">
                                            {service.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* BIG STAT */}
                            <div className='flex flex-col items-end text-right pt-20 relative group'>
                                <span className='text-[30vw] md:text-[18vw] font-black text-white/[0.02] absolute -bottom-10 right-0 leading-none group-hover:text-[#C5A059]/5 transition-colors duration-700'>100%</span>
                                <h2 className='text-white text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.8] relative z-10'>
                                    Compliance <br /> <span className="text-[#C5A059]">Accuracy.</span>
                                </h2>
                            </div>
                        </div>
                    </div>

                    {/* FINAL QUOTE BLOCK */}
                    <div className='py-60 flex flex-col items-center text-center'>
                        <Globe size={48} className='text-[#C5A059] mb-16 opacity-50' />
                        <h2 className='text-[8vw] md:text-[4vw] text-white font-bold leading-[0.9] max-w-5xl uppercase tracking-tighter'>
                            "A balance sheet is just the skeleton. Our job is to build the <span className='text-[#C5A059] italic'>muscle</span> that allows your business to scale."
                        </h2>

                        <div className='mt-24 flex flex-col items-center gap-6'>
                            <div className='w-[1px] h-32 bg-gradient-to-b from-[#C5A059] to-transparent' />
                            <p className='text-[#C5A059] font-bold tracking-[0.4em] text-[10px] uppercase'>Naveen Sangewar, Founder</p>
                        </div>
                    </div>
                </div>
            </section>
        </ReactLenis>
    )
}

export default About