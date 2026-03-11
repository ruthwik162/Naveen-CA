"use client"

import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { ReactLenis } from '@studio-freight/react-lenis'
import { Balance, Scale, ShieldCheck, Landmark, FileCheck, Award, TrendingUp, ArrowUpRight } from 'lucide-react'

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, SplitText);
}

const Integrity = () => {
    const container = useRef()

    const pingRef = useRef();

    useGSAP(() => {
        gsap.to(pingRef.current, {
            scale: 3,
            opacity: 0,
            duration: 2,
            repeat: -1,
            ease: "power2.out"
        });
    }, { scope: container });

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
            }
        });

        const split = new SplitText(".reveal-text", { type: "lines", linesClass: "overflow-hidden" });
        new SplitText(".reveal-text", { type: "lines", linesClass: "line-item" });

        tl.from(".line-item", { yPercent: 100, stagger: 0.05, duration: 1, ease: "expo.out" })
            .from(".trust-node", { opacity: 0, y: 20, stagger: 0.1, duration: 0.8 }, "-=1");

        gsap.utils.toArray(".stat-counter").forEach(stat => {
            const target = parseInt(stat.getAttribute("data-target"));
            gsap.to(stat, {
                innerText: target,
                duration: 2,
                snap: { innerText: 1 },
                scrollTrigger: {
                    trigger: stat,
                    start: "top 90%",
                }
            });
        });
    }, { scope: container });

    return (
        <ReactLenis root>
            <div ref={container} className='w-full min-h-screen bg-white text-[#111] font-[PPNeueMontreal] selection:bg-indigo-600 selection:text-white relative overflow-hidden'>

                {/* 12-Column Grid Lines */}
                <div className="fixed inset-0 grid grid-cols-6 md:grid-cols-12 px-4 md:px-[2vw] pointer-events-none">
                    {[...Array(13)].map((_, i) => (
                        <div key={i} className="border-r border-black/[0.03] h-full" />
                    ))}
                </div>

                <section className='relative px-4 md:px-[2vw] pt-32 pb-20'>

                    {/* TOP SECTION: PROFESSIONAL STANDARDS */}
                    <div className='grid grid-cols-6 md:grid-cols-12 gap-8 mb-20'>
                        <div className='col-span-6 md:col-span-8'>
                            <div className='flex items-center gap-3 mb-6'>
                                <div className="relative flex items-center justify-center">
                                    {/* The Core Dot */}
                                    <div className='w-2 h-2 bg-indigo-600 rounded-full relative z-10' />
                                    {/* The Animated Pulse */}
                                    <div
                                        ref={pingRef}
                                        className='absolute w-2 h-2 bg-indigo-600 rounded-full z-0'
                                    />
                                </div>                                <span className='text-[10px] uppercase font-black tracking-[0.4em] text-indigo-600'>Credentialed: ICAI Certified</span>
                            </div>
                            <h1 className='reveal-text text-[13vw] md:text-[8vw] leading-[0.85] font-black uppercase tracking-tighter'>
                                Ethical <br /> Stewardship.
                            </h1>
                        </div>
                        <div className='col-span-6 md:col-span-4 flex flex-col justify-end border-l border-black/10 pl-6'>
                            <p className='text-[11px] font-mono opacity-40 uppercase tracking-widest mb-4'>Practice_No: NS_2026_HYD</p>
                            <p className='reveal-text text-[4.5vw] md:text-[1.2vw] font-medium leading-tight text-black/70'>
                                As Chartered Accountants, we are the custodians of <span className='text-black underline decoration-indigo-600 underline-offset-4'>Public Trust</span>, ensuring that every financial statement reflects absolute truth.
                            </p>
                        </div>
                    </div>

                    {/* STATS BAR: Audit Metrics */}
                    <div className='border-draw border-y border-black/10 grid grid-cols-2 md:grid-cols-4 mb-32'>
                        {[
                            { label: "Annual Audits", val: "120", unit: "+" },
                            { label: "Tax Compliance", val: "100", unit: "%" },
                            { label: "Client Retention", val: "98", unit: "%" },
                            { label: "Audit Defaults", val: "0", unit: "" }
                        ].map((stat, i) => (
                            <div key={i} className='p-8 border-r last:border-r-0 border-black/[0.05]'>
                                <p className='text-[9px] font-mono font-bold uppercase tracking-widest opacity-30 mb-2'>{stat.label}</p>
                                <div className='text-4xl md:text-5xl font-black tracking-tighter text-indigo-900'>
                                    <span className="stat-counter" data-target={stat.val}>0</span>{stat.unit}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* VALIDATION GRID: Core CA Duties */}
                    <div className='grid grid-cols-6 md:grid-cols-12 gap-y-12 md:gap-8'>

                        {/* 01. Audit & Assurance */}
                        <div className='trust-node col-span-6 md:col-span-4 bg-zinc-50 p-8 border border-black/[0.03] group hover:bg-indigo-950 hover:text-white transition-all duration-700'>
                            <FileCheck className='text-indigo-600 mb-12 group-hover:text-white transition-colors' size={32} />
                            <h3 className='text-2xl font-black uppercase tracking-tighter mb-4'>Audit & <br /> Assurance.</h3>
                            <p className='text-sm opacity-60 leading-relaxed uppercase font-bold tracking-tight'>
                                Independent verification of financial records to provide stakeholders with confidence. We ensure compliance with Companies Act and Accounting Standards.
                            </p>
                        </div>

                        {/* 02. Taxation Strategy */}
                        <div className='trust-node col-span-6 md:col-span-4 bg-white p-8 border border-black/[0.08] relative overflow-hidden group'>
                            <div className='relative z-10'>
                                <TrendingUp className='text-indigo-600 mb-12' size={32} />
                                <h3 className='text-2xl font-black uppercase tracking-tighter mb-4'>Strategic <br /> Taxation.</h3>
                                <p className='text-sm text-black/60 leading-relaxed'>
                                    Navigating the complexities of Direct and Indirect Taxes. We optimize your tax liability while ensuring 100% adherence to evolving GST and Income Tax laws.
                                </p>
                            </div>
                            <Landmark className='absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-10 transition-opacity' size={160} />
                        </div>

                        {/* 03. Advisory Block */}
                        <div className='trust-node col-span-6 md:col-span-4 flex flex-col justify-between p-8 border-t-4 border-indigo-600 bg-zinc-900 text-white'>
                            <div className='space-y-4'>
                                <p className='text-[10px] font-mono opacity-40 uppercase tracking-[0.3em]'>Chartered_Advisory</p>
                                <h3 className='text-xl font-bold leading-tight'>Beyond Bookkeeping: Strategic Financial Counsel.</h3>
                                <div className='space-y-2'>
                                    {["Corporate Governance", "Risk Management", "Business Valuation"].map(item => (
                                        <div key={item} className='flex items-center gap-2'>
                                            <Award size={12} className='text-indigo-400' />
                                            <span className='text-[10px] font-bold uppercase tracking-widest'>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <button className='mt-12 group flex items-center justify-between bg-indigo-600 px-6 py-4 rounded-sm hover:bg-white hover:text-black transition-all duration-500'>
                                <span className='text-[10px] font-black uppercase tracking-widest'>Consult a CA</span>
                                <ArrowUpRight size={18} className='group-hover:rotate-45 transition-transform' />
                            </button>
                        </div>

                    </div>

                </section>

                {/* COORDINATE FOOTER */}
                <div className='px-[2vw] py-10 opacity-20 flex justify-between items-center border-t border-black/[0.05]'>
                    <p className='text-[8px] font-mono font-black uppercase tracking-[0.4em]'>Professional Ethics Code // ICAI Standard</p>
                    <p className='text-[8px] font-mono font-black uppercase tracking-[0.4em]'>TS_HYD_OFFICE_NODE</p>
                </div>

            </div>

            <style jsx>{`
                .overflow-hidden { overflow: hidden; }
                .line-item { display: block; }
            `}</style>
        </ReactLenis>
    )
}

export default Integrity