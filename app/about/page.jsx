"use client"

import React, { useRef } from 'react'
import { images } from '@/public/assets/assets'
import { ReactLenis } from '@studio-freight/react-lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/SplitText' // Ensure this is installed or use a polyfill
import { Fingerprint, ShieldCheck, Plus, ArrowUpRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger, SplitText)

const AboutStory = () => {
    const container = useRef()
    const svgPath = useRef()

    useGSAP(() => {
        // 1. The SVG "Audit Trail" Animation
        const path = svgPath.current;
        const pathLength = path.getTotalLength();
        gsap.set(path, { strokeDasharray: pathLength, strokeDashoffset: pathLength });

        gsap.to(path, {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
                trigger: container.current,
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
            }
        });

        // 2. High-End Text Reveal (Line by Line)
        const textElements = gsap.utils.toArray(".reveal-text");
        textElements.forEach((el) => {
            const split = new SplitText(el, { type: "lines", linesClass: "overflow-hidden" });
            const childSplit = new SplitText(el, { type: "lines", linesClass: "line-item" });

            gsap.from(childSplit.lines, {
                yPercent: 100,
                stagger: 0.05,
                duration: 1.2,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                }
            });
        });

        // 3. Image Clip Reveal
        gsap.from(".img-mask", {
            clipPath: "inset(0% 0% 100% 0%)",
            duration: 1.5,
            ease: "expo.inOut",
            scrollTrigger: {
                trigger: ".img-section",
                start: "top 60%",
            }
        });

    }, { scope: container });

    const services = [
        { title: "Direct Taxation", category: "Audit / 01", desc: "Engineering legal frameworks that optimize tax outflow while maintaining airtight compliance with ICAI standards." },
        { title: "Statutory Audit", category: "Corporate / 02", desc: "Forensic examination of financial records to build stakeholder trust and investor-grade transparency." },
        { title: "GST Ecosystems", category: "Advisory / 03", desc: "Navigating the complexities of indirect tax through algorithmic precision and proactive risk mitigation." }
    ];

    return (
        <ReactLenis root>
            <main ref={container} className='relative w-full bg-white text-[#111] font-[PPNeueMontreal] selection:bg-indigo-600 selection:text-white cursor-crosshair'>
                
                {/* Fixed Blueprint Grid Lines */}
                <div className="fixed inset-0 grid grid-cols-6 md:grid-cols-12 px-4 md:px-[2vw] pointer-events-none z-0">
                    {[...Array(13)].map((_, i) => (
                        <div key={i} className="border-r border-black/[0.03] h-full" />
                    ))}
                </div>

                {/* Background Storytelling Line */}
                <svg className="absolute left-0 top-0 w-full h-full pointer-events-none z-10 opacity-20" viewBox="0 0 1000 4000" fill="none" preserveAspectRatio="none">
                    <path ref={svgPath} d="M500 0 V600 C500 800 100 800 100 1000 V1800 C100 2000 900 2000 900 2200 V3000 C900 3200 500 3200 500 3400 V4000" stroke="#4f46e5" strokeWidth="1" />
                </svg>

                {/* HERO: PROFILE HEADER */}
                <section className='relative min-h-screen pt-32 px-4 md:px-[2vw] z-20'>
                    <div className='flex justify-between items-end border-b border-black/10 pb-6 mb-20'>
                        <div className='flex items-center gap-3'>
                            <Fingerprint size={18} className="text-indigo-600" />
                            <p className='text-[10px] uppercase font-bold tracking-[0.3em]'>Chartered Accountant / / 2026</p>
                        </div>
                        <p className='text-[10px] uppercase opacity-40 italic'>Forensic Intelligence</p>
                    </div>

                    <div className='grid grid-cols-6 md:grid-cols-12 gap-8 items-end'>
                        <div className='col-span-6 md:col-span-9'>
                            <h1 className='reveal-text text-[14vw] md:text-[9vw] font-semibold uppercase leading-[0.8] tracking-tighter italic'>
                                Naveen <br /> Sangewar.
                            </h1>
                        </div>
                        <div className='col-span-6 md:col-span-3 pb-2'>
                            <p className='reveal-text text-[4.5vw] md:text-[1.1vw] font-medium leading-tight text-black/60'>
                                Rebuilding the bridge between complex regulation and financial clarity. 
                            </p>
                        </div>
                    </div>
                </section>

                {/* THE PHILOSOPHY: IMAGE SECTION */}
                <section className='img-section relative py-32 px-4 md:px-[2vw] z-20 grid grid-cols-6 md:grid-cols-12 gap-10 md:gap-20'>
                    <div className='col-span-6 md:col-span-7'>
                        <div className='img-mask aspect-[4/5] md:aspect-video overflow-hidden bg-zinc-100 border border-black/5'>
                            <img src={images.naveen.src} className='w-full h-full object-cover grayscale brightness-110 contrast-125 transition-transform duration-1000 hover:scale-105' alt="Portrait" />
                        </div>
                    </div>
                    <div className='col-span-6 md:col-span-5 flex flex-col justify-center'>
                        <div className='space-y-10'>
                            <div>
                                <h4 className='flex items-center gap-2 text-[10px] uppercase font-bold text-indigo-600 mb-6'>
                                    <Plus size={12} /> The Approach
                                </h4>
                                <h2 className='reveal-text text-[8vw] md:text-[3.5vw] font-semibold uppercase leading-[0.9] tracking-tighter italic mb-8'>
                                    Precision over <br /> Probability.
                                </h2>
                                <p className='reveal-text text-[4.5vw] md:text-[1.2vw] font-medium text-black/70 leading-relaxed max-w-md'>
                                    I believe a Chartered Accountant’s greatest value is not in the tax saved, but in the visibility provided. We find anomalies before they become liabilities.
                                </p>
                            </div>
                            <div className='border-t border-black/10 pt-10 flex items-center gap-4'>
                                <ShieldCheck className='text-indigo-600' />
                                <span className='text-[10px] uppercase font-bold tracking-widest'>Statutory Compliance Leader</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SOLUTIONS: THE LEDGER GRID */}
                <section className='relative py-32 px-4 md:px-[2vw] z-20'>
                    <div className='flex justify-between items-end mb-20'>
                        <h2 className='reveal-text text-[10vw] md:text-[5vw] font-semibold uppercase tracking-tighter italic'>Solutions.</h2>
                        <ArrowUpRight size={40} strokeWidth={1} className='opacity-20' />
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-black/5 border border-black/5'>
                        {services.map((s, i) => (
                            <div key={i} className='bg-white p-12 group hover:bg-zinc-50 transition-colors duration-500'>
                                <p className='text-[10px] font-bold uppercase tracking-widest text-indigo-600 mb-16'>{s.category}</p>
                                <h3 className='text-[7vw] md:text-[2vw] font-semibold uppercase mb-6 tracking-tight'>{s.title}</h3>
                                <p className='text-[4vw] md:text-[1vw] font-medium text-black/40 group-hover:text-black/70 transition-colors leading-relaxed'>
                                    {s.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* METHODOLOGY: DARK SECTION */}
                <section className='relative min-h-screen bg-[#0A0A0B] text-white py-40 px-4 md:px-[10vw] z-20'>
                    <div className='max-w-5xl'>
                        <div className='flex items-center gap-4 mb-16 opacity-30'>
                            <div className='w-8 h-[1px] bg-white' />
                            <p className='text-[10px] uppercase font-bold tracking-[0.4em]'>The Methodology</p>
                        </div>
                        <h2 className='reveal-text text-[9vw] md:text-[5vw] font-semibold uppercase leading-[0.9] tracking-tighter mb-20'>
                            "A clean ledger is the <br /> <span className='text-indigo-500 italic'>silent authority</span> of <br /> a scaling business."
                        </h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-white/10 pt-16'>
                            <p className='reveal-text text-[4.5vw] md:text-[1.2vw] font-medium leading-relaxed opacity-50'>
                                Most entrepreneurs view a CA as a seasonal cost. We teach you to see us as your Structural Engineers. Monthly forensic oversight allows you to take high-stakes risks with total legal safety.
                            </p>
                            <p className='reveal-text text-[4.5vw] md:text-[1.2vw] font-medium leading-relaxed opacity-50'>
                                From the MSMEs of Hyderabad to global entities, we act as the firewall between your vision and regulatory friction.
                            </p>
                        </div>
                    </div>
                </section>
                
                <style jsx>{`
                    .overflow-hidden { overflow: hidden; }
                    .line-item { display: block; }
                `}</style>
            </main>
        </ReactLenis>
    )
}

export default AboutStory