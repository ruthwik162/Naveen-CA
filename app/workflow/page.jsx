"use client"

import React, { useRef, useEffect } from "react"
import { Plus, MoveRight, ArrowUpRight, Shield, Globe, Cpu, Zap } from "lucide-react"
import { ReactLenis } from '@studio-freight/react-lenis'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(ScrollTrigger, SplitText)

const workflowSteps = [
    { id: "01", title: "Strategic Discovery", desc: "A deep dive into your corporate DNA to align financial structures with long-term vision.", icon: "✧" },
    { id: "02", title: "Forensic Audit", desc: "Granular review of GST, tax history, and compliance health using proprietary frameworks.", icon: "⊞" },
    { id: "03", title: "Capital Optimization", desc: "Identifying tax efficiencies and structuring reports to unlock institutional funding.", icon: "⊠" },
    { id: "04", title: "Seamless Compliance", desc: "Automated filing and ROC management, ensuring you stay 'audit-ready' 24/7.", icon: "⟡" },
]

const services = [
    { title: "Auditing & Assurance", desc: "Statutory audits that provide more than just compliance—we provide clarity and trust for stakeholders.", tag: "Trust" },
    { title: "Taxation Architecture", desc: "Crafting domestic and international tax strategies that preserve your bottom line.", tag: "Growth" },
    { title: "Risk Advisory", desc: "Navigating volatile regulatory landscapes with proactive risk mitigation and internal controls.", tag: "Security" },
    { title: "Strategic Financing", desc: "Detailed project reports and valuation services to bridge the gap between vision and capital.", tag: "Scale" }
]

const EnhancedWorkflow = () => {
    const container = useRef()
    const horizRef = useRef()
    const pinRef = useRef()

    useGSAP(() => {
        let mm = gsap.matchMedia();

        // 1. Reveal CA Heading with "Focus" effect
        const split = new SplitText(".ca-heading", { type: "words" })
        gsap.from(split.words, {
            scrollTrigger: {
                trigger: ".ca-heading",
                start: "top 80%",
                end: "top 20%",
                scrub: true,
            },
            opacity: 0.1,
            filter: "blur(10px)",
            stagger: 0.1,
        })

        mm.add("(min-width: 1024px)", () => {
            // 2. Horizontal Scroll with Parallax Background
            gsap.to(horizRef.current, {
                x: () => -(horizRef.current.scrollWidth - window.innerWidth),
                ease: "none",
                scrollTrigger: {
                    trigger: pinRef.current,
                    pin: true,
                    scrub: 1,
                    start: "top top",
                    end: () => `+=${horizRef.current.scrollWidth}`,
                }
            });

            // Parallax for the abstract shapes
            gsap.to(".floating-shape", {
                x: -200,
                rotate: 360,
                scrollTrigger: {
                    trigger: pinRef.current,
                    scrub: 2
                }
            })
        });

        return () => mm.revert();
    }, { scope: container });

    return (
        <ReactLenis root>
            <main ref={container} className="bg-white text-zinc-900 selection:bg-[#b4f481]">

                {/* --- SECTION 1: THE HERO (DYNAMIC SCALE) --- */}
                <section className="relative h-screen flex flex-col justify-center px-6 md:px-[8vw] overflow-hidden">
                    <div className="absolute top-20 right-[-5%] w-[40vw] h-[40vw] bg-zinc-50 rounded-full blur-3xl opacity-50 -z-10" />

                    <div className="max-w-7xl mx-auto w-full">
                        <div className="flex items-center gap-4 mb-10 overflow-hidden">
                            <div className="h-[1px] w-12 bg-zinc-900 origin-left animate-expand" />
                            <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-zinc-400">Next Gen Advisory</span>
                        </div>

                        <h1 className="text-[12vw] md:text-[8.5vw] leading-[0.85] font-medium tracking-tighter text-zinc-900 uppercase">
                            Elevate Your <br />
                            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-900 italic font-light pr-4">
                                Standards.
                            </span>
                        </h1>

                        <div className="mt-20 flex flex-col md:flex-row md:items-center justify-between gap-10">
                            <p className="max-w-md text-zinc-500 text-lg leading-snug">
                                We bridge the gap between complex regulation and business agility through high-fidelity financial engineering.
                            </p>
                            <div className="group cursor-pointer relative overflow-hidden bg-[#b4f481] px-10 py-5 flex items-center gap-3 font-bold uppercase text-xs transition-all hover:bg-zinc-900 hover:text-white">
                                Contact us today
                                <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- SECTION 2: THE PHILOSOPHY (BENTO GRID REVEAL) --- */}
                <section className="bg-zinc-900 py-32 px-6 md:px-[8vw] text-white overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <div className="relative">
                            <div className="aspect-[4/5] bg-zinc-800 overflow-hidden relative">
                                <img
                                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                                    className="w-full h-full object-cover opacity-60 grayscale hover:scale-110 transition-transform duration-[2s]"
                                    alt="Architecture"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                            </div>
                        </div>
                        <div className="space-y-10">
                            <h2 className="ca-heading text-4xl md:text-5xl font-light leading-tight">
                                Chartered Accountants provide a range of financial services, helping businesses with <span className="text-zinc-500">regulatory compliance</span> and strategic decision-making for growth.
                            </h2>
                            <div className="grid grid-cols-2 gap-8 pt-10 border-t border-zinc-800">
                                <div>
                                    <Shield className="text-[#b4f481] mb-4" size={20} />
                                    <h4 className="font-bold uppercase text-xs mb-2">Verified</h4>
                                    <p className="text-zinc-500 text-xs">Multi-layer audit protocols.</p>
                                </div>
                                <div>
                                    <Globe className="text-[#b4f481] mb-4" size={20} />
                                    <h4 className="font-bold uppercase text-xs mb-2">Global</h4>
                                    <p className="text-zinc-500 text-xs">Cross-border tax planning.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- SECTION 3: WORKFLOW (HORIZONTAL PARALLAX) --- */}
                <section ref={pinRef} className="bg-zinc-50 py-32 overflow-hidden">
                    <div className="px-6 md:px-[8vw] mb-20">
                        <h2 className="text-sm font-black tracking-[0.3em] uppercase opacity-20">How we help you succeed</h2>
                    </div>

                    <div ref={horizRef} className="flex flex-col lg:flex-row items-center">
                        {workflowSteps.map((step, i) => (
                            <div key={i} className="min-w-full lg:min-w-[60vw] h-[70vh] flex flex-col justify-center px-10 lg:px-24 relative group">
                                <span className="floating-shape absolute top-10 right-20 text-[20vw] opacity-[0.03] font-serif pointer-events-none select-none">
                                    {step.icon}
                                </span>

                                <div className="relative z-10">
                                    <span className="text-[#b4f481] font-mono text-xl mb-6 block">// 0{i + 1}</span>
                                    <h3 className="text-[8vw] lg:text-[5vw] font-bold uppercase leading-none tracking-tighter mb-8 group-hover:italic transition-all duration-700">
                                        {step.title}
                                    </h3>
                                    <p className="max-w-md text-zinc-500 text-xl leading-relaxed">
                                        {step.desc}
                                    </p>

                                    <div className="mt-12 w-0 h-[2px] bg-zinc-900 group-hover:w-full transition-all duration-1000" />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- SECTION 4: SERVICES (ACCORDION GLASS) --- */}
                <section className="py-32 px-6 md:px-[8vw] bg-white">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-6xl font-medium tracking-tighter mb-24 uppercase">Services <span className="text-zinc-300">Included</span></h2>

                        <div className="flex flex-col">
                            {services.map((service, i) => (
                                <div key={i} className="group border-b border-zinc-100 py-12 flex flex-col md:flex-row items-start justify-between gap-10 hover:px-8 transition-all duration-500 cursor-pointer relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[#b4f481] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 -z-10" />

                                    <div className="flex items-start gap-12">
                                        <span className="font-mono text-zinc-300 group-hover:text-zinc-900 transition-colors pt-2">0{i + 1}</span>
                                        <div>
                                            <h4 className="text-3xl font-bold uppercase tracking-tight group-hover:scale-105 origin-left transition-transform">{service.title}</h4>
                                            <span className="inline-block mt-4 px-3 py-1 border border-zinc-200 text-[10px] uppercase font-bold group-hover:border-zinc-900 transition-colors">
                                                {service.tag}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="max-w-md">
                                        <p className="text-zinc-500 group-hover:text-zinc-900 transition-colors text-lg">
                                            {service.desc}
                                        </p>
                                    </div>

                                    <div className="h-16 w-16 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-all">
                                        <Plus size={24} className="group-hover:rotate-90 transition-transform" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* --- CTA: 12 COLUMN GRID --- */}
                <footer className="py-40 px-6 md:px-[4vw] bg-[#b4f481] text-black">
                    <div className="grid grid-cols-6 md:grid-cols-12 gap-4">
                        <div className="col-span-6 md:col-span-9">
                            <h2 className="text-[10vw] font-bold uppercase leading-[0.8] tracking-tighter skew-elem">
                                Ready to reach <br /> the next milestone?
                            </h2>
                        </div>
                        <div className="col-span-6 md:col-span-3 flex md:items-end md:justify-end mt-10 md:mt-0">
                            <div className="w-32 h-32 rounded-full border border-black flex items-center justify-center group cursor-pointer hover:bg-black hover:text-white transition-all duration-500">
                                <ArrowUpRight size={40} className="group-hover:rotate-45 transition-transform" />
                            </div>
                        </div>
                    </div>
                </footer>

            </main>
        </ReactLenis>
    )
}

export default EnhancedWorkflow