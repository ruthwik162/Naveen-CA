"use client"

import { useGSAP } from '@gsap/react'
import { ReactLenis } from '@studio-freight/react-lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, Fingerprint, Globe, Plus, Shield } from 'lucide-react'
import React, { useRef, useEffect } from 'react'
import TextY from './TextY'

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const container = useRef()
    const buttonRef = useRef()

    // Magnetic Button Effect for that premium feel
    useEffect(() => {
        const btn = buttonRef.current;
        const onMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = btn.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            gsap.to(btn, { x: x * 0.4, y: y * 0.4, duration: 0.6, ease: "power2.out" });
        };
        const onMouseLeave = () => {
            gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.3)" });
        };
        btn.addEventListener("mousemove", onMouseMove);
        btn.addEventListener("mouseleave", onMouseLeave);
        return () => {
            btn.removeEventListener("mousemove", onMouseMove);
            btn.removeEventListener("mouseleave", onMouseLeave);
        };
    }, []);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "expo.inOut" } });

        // Initial States
        gsap.set(".reveal-text", { yPercent: 100 });
        gsap.set(".overlay", { opacity: 0 });
        gsap.set(".bg-image", { scale: 1.2 });

        // The Entrance Sequence
        tl.to(".overlay", { opacity: 1, duration: 2 })
            .to(".bg-image", { scale: 1, duration: 3 }, "-=2")
            .to(".grid-line", { scaleY: 1, duration: 1.5, stagger: 0.05, transformOrigin: "top" }, "-=2.5")
            .to(".reveal-text", { yPercent: 0, duration: 1.5, stagger: 0.1 }, "-=1.5")
            .from(".stat-node", { opacity: 0, y: 20, stagger: 0.1, duration: 1 }, "-=1");

        // Parallax scroll on the background
        gsap.to(".bg-image", {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
                trigger: container.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });
    }, { scope: container });

    return (
        <ReactLenis root>
            <div ref={container} className='relative w-full min-h-screen bg-black text-white font-[PPNeueMontreal] overflow-hidden'>

                {/* 1. FULL BACKGROUND IMAGE (Financial District/Architectural) */}
                <div className='absolute inset-0 z-0 overflow-hidden'>
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                        className='bg-image w-full h-full object-cover opacity-60'
                        alt="High-end Financial District"
                    />
                    {/* Dark Cinematic Overlay */}
                    <div className='overlay absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 z-10' />
                </div>

                {/* 2. TECHNICAL BLUEPRINT GRID */}
                <div className="absolute inset-0 grid grid-cols-6 md:grid-cols-12 px-4 md:px-[2vw] pointer-events-none z-20">
                    {[...Array(13)].map((_, i) => (
                        <div key={i} className="grid-line border-r border-white/10 h-full w-full scale-y-0" />
                    ))}
                </div>

                {/* 3. MAIN CONTENT LAYER */}
                <section className='relative z-30 px-4 md:px-[2vw] pt-24 md:pt-[15vh] min-h-screen flex flex-col justify-between pb-12'>

                    <div className='grid grid-cols-6 md:grid-cols-12 gap-y-12 md:gap-x-8'>

                        {/* HERO TITLE - LEFTSIDE */}
                        <div className='col-span-6 md:col-span-8'>
                            <h1 className='text-[14vw] md:text-[9vw] leading-[0.85] font-bold uppercase tracking-tighter'>
                                <div className='overflow-hidden'>
                                    <span className='reveal-text block'>Financial</span>
                                </div>
                                <div className='overflow-hidden flex items-center gap-6'>
                                    <span className='reveal-text block italic font-extralight'>Authority</span>
                                    <div className='reveal-text h-[1px] w-[12vw] bg-white/30 mt-[4vw] hidden md:block'></div>
                                </div>
                            </h1>
                        </div>

                        {/* DESCRIPTION - PINNED COL 8 TO 11 */}
                        <div className='col-span-6 md:col-start-8 md:col-span-4 flex flex-col justify-center'>
                            <div className=' space-y-1'>
                                <TextY animateOnScroll={false} delay={2.1}>
                                    <p className='text-[4vw] md:text-[1.1vw] leading-[1.1] font-medium text-white/70'>
                                        Architecting fiscal resilience for the global elite. We transform volatile market data into <span className='text-white font-medium underline underline-offset-8 decoration-indigo-500'>impenetrable</span> growth strategies.
                                    </p>
                                </TextY>

                                <TextY animateOnScroll={false} delay={2.2}>
                                    <p className='text-[4vw] md:text-[1.1vw] leading-[1.1] pt-1 font-medium text-white/70'>
                                        We design robust tax frameworks that balance efficiency with total compliance. From GST algorithmic management to high-stakes litigation, we act as your fiscal firewall.
                                    </p>
                                </TextY>
                                <div className='flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-bold text-indigo-400'>
                                    <Fingerprint size={16} /> Secure Audit Protocol Active
                                </div>
                            </div>
                        </div>

                        {/* DATA NODES - BOTTOM ROW OF GRID */}
                        <div className='col-span-6 md:col-span-3 pt-10'>
                            <div className='stat-node border-l border-white/20 pl-6'>
                                <p className='text-[10px] uppercase opacity-40 mb-2 tracking-widest'>Core Focus</p>
                                <ul className='text-xs space-y-2 font-medium'>
                                    <li className='flex items-center gap-2'><Plus size={10} /> Statutory Compliance</li>
                                    <li className='flex items-center gap-2'><Plus size={10} /> International Taxation</li>
                                    <li className='flex items-center gap-2'><Plus size={10} /> Forensic Accounting</li>
                                </ul>
                            </div>
                        </div>

                        {/* LIVE INDICATOR */}
                        <div className='col-span-6 md:col-start-5 md:col-span-3 pt-10 hidden md:block'>
                            <div className='stat-node flex items-start gap-4'>
                                <div className='w-2 h-2 rounded-full bg-emerald-500 animate-pulse mt-1'></div>
                                <div>
                                    <p className='text-[10px] uppercase opacity-40 mb-1 tracking-widest'>System Status</p>
                                    <p className='text-xs font-mono uppercase'>Nodes Online // Q3 Active</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* CALL TO ACTION & FOOTER GRID */}
                    <div className='grid grid-cols-6 md:grid-cols-12 gap-8 items-end mt-20 md:mt-0'>
                        <div className='col-span-6 md:col-span-4'>
                            <div className='stat-node flex items-center gap-6'>
                                <div className='p-4 border border-white/10 rounded-full'>
                                    <Shield size={24} className='text-indigo-400' strokeWidth={1} />
                                </div>
                                <p className='text-[10px] uppercase leading-tight tracking-widest opacity-60'>
                                    Privacy Guaranteed <br /> through end-to-end <br /> encryption protocols.
                                </p>
                            </div>
                        </div>

                        <div className='col-span-6 md:col-start-9 md:col-span-4'>
                            <button
                                ref={buttonRef}
                                className='group relative w-full bg-white text-black py-5  overflow-hidden transition-all duration-500'
                            >
                                <div className='relative z-10 flex items-center justify-center gap-4'>
                                    <span className='text-xs font-bold uppercase tracking-[0.4em]'>Secure Inquiry</span>
                                    <ArrowUpRight size={20} className='group-hover:rotate-45 transition-transform duration-500' />
                                </div>
                                <div className='absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500'></div>
                            </button>
                        </div>
                    </div>

                </section>

                {/* GRAIN LAYER (The Finishing Touch) */}
                <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.05] bg-[url('https://res.cloudinary.com/ds7v9p9p2/image/upload/v1715082155/noise_vps8sq.png')]"></div>
            </div>

            <style jsx>{`
                .reveal-text { display: inline-block; }
                ::selection { background: #4f46e5; color: white; }
            `}</style>
        </ReactLenis>
    )
}

export default Hero