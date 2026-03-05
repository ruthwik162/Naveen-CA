"use client"
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CheckCircle2, ShieldAlert, BarChart3, Fingerprint } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const page = () => {
    const container = useRef()

    useGSAP(() => {
        gsap.from(".service-card", {
            scrollTrigger: {
                trigger: ".service-grid",
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            stagger: 0.15,
            duration: 1,
            ease: "expo.out"
        })
    }, { scope: container })

    const expertises = [
        {
            title: "Statutory & Internal Audit",
            desc: "Beyond mere compliance, we perform forensic-level examinations of your financial health. Our audits act as a 'stress test' for your business operations, ensuring that every entry is backed by verifiable evidence and aligns with global accounting standards.",
            icon: <Fingerprint className="text-indigo-600" />
        },
        {
            title: "Strategic Tax Engineering",
            desc: "Taxation is not a cost; it is a variable to be managed. We design legal frameworks for Income Tax and GST that maximize your retention while ensuring you remain 'Audit-Ready' 365 days a year. We handle the complexity so you can focus on the scale.",
            icon: <ShieldAlert className="text-indigo-600" />
        },
        {
            title: "Corporate Advisory",
            desc: "Navigating company law and ROC compliance requires a surgical touch. We provide the structural backbone for startups and established firms, managing everything from entity formation to complex M&A due diligence.",
            icon: <BarChart3 className="text-indigo-600" />
        }
    ]

    return (
        <section ref={container} className="min-h-screen bg-white py-32 px-[5vw] md:px-[2vw] cursor-crosshair">
            <div className="border-b border-black/10 pb-10 mb-20">
                <p className="text-[10px] uppercase tracking-[0.4em] font-semibold text-indigo-600 mb-4">02 — Solutions</p>
                <h2 className="text-[12vw] md:text-[6vw] font-semibold uppercase tracking-tighter leading-none">
                    Financial <br /> Engineering.
                </h2>
            </div>

            <div className="service-grid grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-black/10 border border-black/10">
                {expertises.map((item, idx) => (
                    <div key={idx} className="service-card bg-white p-10 flex flex-col justify-between hover:bg-[#F8F8F8] transition-colors group">
                        <div>
                            <div className="mb-10 group-hover:scale-110 transition-transform duration-500 w-fit">{item.icon}</div>
                            <h3 className="text-[6vw] md:text-[1.8vw] font-semibold uppercase mb-6 leading-tight">{item.title}</h3>
                            <p className="text-[4vw] md:text-[1.1vw] leading-relaxed text-black/60 font-medium">
                                {item.desc}
                            </p>
                        </div>
                        <div className="mt-12 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-indigo-600">
                            Learn more <ArrowRight size={12} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default page