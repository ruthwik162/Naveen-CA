"use client"

import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { ReactLenis } from '@studio-freight/react-lenis'
import { ShieldCheck, Lock, CheckCircle2, Landmark, FileText, Activity, Plus, ArrowUpRight } from 'lucide-react'

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, SplitText);
}

const Integrity = () => {
    const container = useRef()

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
            }
        });

        // Text reveal
        const split = new SplitText(".reveal-text", { type: "lines", linesClass: "overflow-hidden" });
        new SplitText(".reveal-text", { type: "lines", linesClass: "line-item" });

        tl.from(".line-item", { yPercent: 100, stagger: 0.05, duration: 1, ease: "expo.out" })
          .from(".trust-node", { opacity: 0, y: 20, stagger: 0.1, duration: 0.8 }, "-=1");

        // Counter animation
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
            <div ref={container} className='w-full min-h-screen bg-white text-[#111] font-[PPNeueMontreal] selection:bg-black selection:text-white relative overflow-hidden'>
                
                {/* 12-Column Grid Lines (Consistent with Hero) */}
                <div className="fixed inset-0 grid grid-cols-6 md:grid-cols-12 px-4 md:px-[2vw] pointer-events-none">
                    {[...Array(13)].map((_, i) => (
                        <div key={i} className="border-r border-black/[0.03] h-full" />
                    ))}
                </div>

                <section className='relative px-4 md:px-[2vw] pt-32 pb-20'>
                    
                    {/* TOP SECTION: IDENTIFICATION */}
                    <div className='grid grid-cols-6 md:grid-cols-12 gap-8 mb-20'>
                        <div className='col-span-6 md:col-span-8'>
                            <div className='flex items-center gap-3 mb-6'>
                                <div className='w-2 h-2 bg-indigo-600 rounded-full animate-ping' />
                                <span className='text-[10px] uppercase font-black tracking-[0.4em] text-indigo-600'>Status: Verified</span>
                            </div>
                            <h1 className='reveal-text text-[13vw] md:text-[8vw] leading-[0.85] font-black uppercase tracking-tighter italic'>
                                System <br /> Integrity.
                            </h1>
                        </div>
                        <div className='col-span-6 md:col-span-4 flex flex-col justify-end border-l border-black/10 pl-6'>
                            <p className='text-[11px] font-mono opacity-40 uppercase tracking-widest mb-4'>Protocol_Ref: SNGWR_004</p>
                            <p className='reveal-text text-[4.5vw] md:text-[1.2vw] font-medium leading-tight text-black/70'>
                                Our practice is governed by <span className='text-black underline decoration-indigo-600 underline-offset-4'>Forensic Standards</span> ensuring every engagement maintains statutory equilibrium.
                            </p>
                        </div>
                    </div>

                    {/* STATS BAR: Data Blocks */}
                    <div className='border-draw border-y border-black/10 grid grid-cols-2 md:grid-cols-4 mb-32'>
                        {[
                            { label: "Active Nodes", val: "450", unit: "+" },
                            { label: "Precision Rate", val: "99", unit: ".9%" },
                            { label: "Legacy Years", val: "12", unit: "+" },
                            { label: "Defaults", val: "0", unit: "" }
                        ].map((stat, i) => (
                            <div key={i} className='p-8 border-r last:border-r-0 border-black/[0.05]'>
                                <p className='text-[9px] font-mono font-bold uppercase tracking-widest opacity-30 mb-2'>{stat.label}</p>
                                <div className='text-4xl md:text-5xl font-black tracking-tighter'>
                                    <span className="stat-counter" data-target={stat.val}>0</span>{stat.unit}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* VALIDATION GRID: Trust Cards */}
                    <div className='grid grid-cols-6 md:grid-cols-12 gap-y-12 md:gap-8'>
                        
                        {/* 01. Regulatory Card */}
                        <div className='trust-node col-span-6 md:col-span-4 bg-zinc-50 p-8 border border-black/[0.03] group hover:bg-black hover:text-white transition-all duration-700'>
                            <Landmark className='text-indigo-600 mb-12 group-hover:text-white transition-colors' size={32} />
                            <h3 className='text-2xl font-black uppercase tracking-tighter mb-4'>Statutory <br /> Bonded.</h3>
                            <p className='text-sm opacity-60 leading-relaxed uppercase font-bold tracking-tight'>
                                Fully integrated with ICAI and Ministry of Corporate Affairs protocols. Total statutory alignment across all active sectors.
                            </p>
                        </div>

                        {/* 02. Encryption / Tech Card */}
                        <div className='trust-node col-span-6 md:col-span-4 bg-white p-8 border border-black/[0.08] relative overflow-hidden group'>
                            <div className='relative z-10'>
                                <Activity className='text-indigo-600 mb-12' size={32} />
                                <h3 className='text-2xl font-black uppercase tracking-tighter mb-4'>Forensic <br /> Monitoring.</h3>
                                <p className='text-sm text-black/60 leading-relaxed'>
                                    Utilizing AI-driven anomaly detection for 24/7 monitoring of client fiscal health. Real-time auditing to detect systemic vulnerabilities.
                                </p>
                            </div>
                            <Lock className='absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-10 transition-opacity' size={160} />
                        </div>

                        {/* 03. Call to Action Block */}
                        <div className='trust-node col-span-6 md:col-span-4 flex flex-col justify-between p-8 border-t-4 border-indigo-600 bg-zinc-900 text-white'>
                            <div className='space-y-4'>
                                <p className='text-[10px] font-mono opacity-40 uppercase tracking-[0.3em]'>Security_Protocol</p>
                                <h3 className='text-xl font-bold leading-tight'>Your data is treated as a sovereign asset.</h3>
                                <div className='space-y-2'>
                                    {["Multi-Factor Auth", "End-to-End Encryption", "Vaulted Backups"].map(item => (
                                        <div key={item} className='flex items-center gap-2'>
                                            <CheckCircle2 size={12} className='text-indigo-400' />
                                            <span className='text-[10px] font-bold uppercase tracking-widest'>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <button className='mt-12 group flex items-center justify-between bg-indigo-600 px-6 py-4 rounded-sm hover:bg-white hover:text-black transition-all duration-500'>
                                <span className='text-[10px] font-black uppercase tracking-widest'>Request Audit</span>
                                <ArrowUpRight size={18} className='group-hover:rotate-45 transition-transform' />
                            </button>
                        </div>

                    </div>

                </section>

                {/* COORDINATE FOOTER */}
                <div className='px-[2vw] py-10 opacity-20 flex justify-between items-center border-t border-black/[0.05]'>
                    <p className='text-[8px] font-mono font-black uppercase tracking-[0.4em]'>Verified_Archive // 2026.03.06</p>
                    <p className='text-[8px] font-mono font-black uppercase tracking-[0.4em]'>HYD_NODE_STABLE</p>
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