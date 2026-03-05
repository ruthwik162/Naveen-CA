"use client"

import React, { useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Plus, Minus, ArrowUpRight, ShieldCheck, Zap, BarChart3, Fingerprint, Activity, Terminal } from 'lucide-react'

const services = [
  {
    id: "01",
    category: "Taxation",
    title: "Regulatory Architecture",
    description: "We design robust tax frameworks that balance efficiency with total compliance. From GST algorithmic management to high-stakes litigation, we act as your fiscal firewall.",
    icon: <ShieldCheck className="w-4 h-4" />,
    tags: ["Direct Tax", "GST Strategy", "Litigation"],
    dataPoint: "TRS-99.2%"
  },
  {
    id: "02",
    category: "Assurance",
    title: "Forensic Intelligence",
    description: "Statutory auditing reimagined as business intelligence. We don't just verify numbers; we analyze internal workflows to detect anomalies and strengthen integrity.",
    icon: <Fingerprint className="w-4 h-4" />,
    tags: ["Statutory Audit", "Internal Audit", "Fraud"],
    dataPoint: "ERR-0.01%"
  },
  {
    id: "03",
    category: "Advisory",
    title: "Growth Engineering",
    description: "Strategic capital scaling and project financing. We translate your business vision into Detailed Project Reports (DPRs) that resonate with institutional banks.",
    icon: <Zap className="w-4 h-4" />,
    tags: ["Valuation", "Project Finance", "M&A"],
    dataPoint: "ROI-MAX"
  },
  {
    id: "04",
    category: "Corporate",
    title: "Systemic Compliance",
    description: "Total lifecycle management for the modern enterprise. From ROC filings to FEMA international transfer pricing, we ensure your machine runs without technical debt.",
    icon: <BarChart3 className="w-4 h-4" />,
    tags: ["ROC", "FEMA", "Secretarial"],
    dataPoint: "LLC-SYNC"
  }
]

const Service = () => {
  const [activeIdx, setActiveIdx] = useState(0)
  const container = useRef()

  useGSAP(() => {
    // Reveal rows on scroll
    gsap.from(".service-row", {
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 1.2,
      ease: "expo.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      }
    })
  }, { scope: container })

  return (
    <section ref={container} className="w-full bg-[#FDFDFD] text-[#111] font-[PPNeueMontreal] px-4 md:px-[2vw] py-24 relative overflow-hidden">
      
      {/* BACKGROUND TEXTURE (Subtle Grid) */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#000 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px' }} />

      {/* HEADER SECTION */}
      <div className="grid grid-cols-6 md:grid-cols-12 gap-4 mb-20">
        <div className="col-span-6 md:col-span-8 relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-indigo-600 rounded-full animate-ping" />
            <p className="text-[10px] uppercase tracking-[0.5em] font-black text-indigo-600">Active Capabilities</p>
          </div>
          <h2 className="text-[11vw] md:text-[5.5vw] leading-[0.85] font-semibold uppercase tracking-tighter">
            Strategic <br /> <span className="italic font-light text-black/20">Infrastructures.</span>
          </h2>
        </div>
        <div className="col-span-6 md:col-span-4 flex flex-col justify-end md:items-end border-l md:border-l-0 border-black/10 pl-4 md:pl-0">
          <div className="flex items-center gap-2 mb-2">
            <Terminal size={12} className="opacity-30" />
            <p className="text-[9px] font-mono font-bold opacity-30 tracking-widest">SNGWR_OS_v4.0</p>
          </div>
          <p className="text-[11px] font-medium leading-tight max-w-[200px] md:text-right opacity-60">
            Translating complex fiscal laws into scalable business logic.
          </p>
        </div>
      </div>

      {/* ACCORDION LIST */}
      <div className="relative border-t border-black/10 grid grid-cols-6 md:grid-cols-12">
        {services.map((service, idx) => (
          <div key={service.id} className={`service-row md:col-span-9 col-start-1 col-span-6 group transition-colors duration-500 ${activeIdx === idx ? 'bg-indigo-50/30' : 'hover:bg-zinc-50'}`}>
            <button 
              onClick={() => setActiveIdx(activeIdx === idx ? -1 : idx)}
              className="w-full py-8 md:py-3 grid grid-cols-6 md:grid-cols-12 items-center text-left px-4"
            >
              {/* Index */}
              <div className="col-span-1 hidden md:block">
                <span className={`text-[12px] font-mono transition-opacity duration-500 ${activeIdx === idx ? 'opacity-100 font-bold' : 'opacity-20'}`}>
                  [{service.id}]
                </span>
              </div>

              {/* Title Block */}
              <div className="col-span-4 md:col-span-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[9px] uppercase font-black text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded-sm">
                    {service.category}
                  </span>
                  <span className="text-[9px] font-mono opacity-30">{service.dataPoint}</span>
                </div>
                <h3 className="text-[6.5vw] md:text-[2.8vw] font-medium tracking-tight leading-none group-hover:italic transition-all duration-300">
                    {service.title}
                </h3>
              </div>
              
              {/* Tags (Desktop Center) */}
              <div className="col-span-4 hidden md:flex gap-4 items-center justify-center">
                 {service.tags.map(tag => (
                   <div key={tag} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-black/10 rounded-full" />
                      <span className="text-[9px] uppercase font-bold opacity-40 tracking-wider group-hover:opacity-100 transition-opacity">
                        {tag}
                      </span>
                   </div>
                 ))}
              </div>

              {/* Toggle Interaction */}
              <div className="col-span-2 md:col-span-1 flex justify-end items-center gap-4">
                <div className={`transition-all duration-500 ${activeIdx === idx ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} hidden md:block`}>
                    <ArrowUpRight size={20} className="text-indigo-600" />
                </div>
                <div className={`w-10 h-10 md:w-14 md:h-13 flex items-center justify-center rounded-full border border-black/10 transition-all duration-500 ${activeIdx === idx ? 'bg-black text-white' : 'group-hover:border-black/60'}`}>
                    {activeIdx === idx ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </div>
            </button>

            {/* EXPANDABLE DETAIL CONTENT */}
            <div className={`grid transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${activeIdx === idx ? 'grid-rows-[1fr] opacity-100 border-b border-black/10' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden">
                <div className="grid grid-cols-6 md:grid-cols-12 gap-10 px-4 pb-16">
                    
                    {/* The "Story" Column */}
                    <div className="col-span-6 md:col-start-2 md:col-span-6 space-y-8">
                        <div className="h-[1px] w-12 bg-indigo-600" />
                        <p className="text-[4vw] md:text-[1.2vw] leading-[1.2] text-black/80 font-medium tracking-tight">
                           {service.description}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="group relative flex items-center gap-6 bg-black text-white px-8 py-4 rounded-full overflow-hidden transition-transform active:scale-95">
                               <span className="relative z-10 text-[10px] uppercase font-black tracking-widest">Initialize Audit</span>
                               <ArrowUpRight size={16} className="relative z-10 group-hover:rotate-45 transition-transform duration-300" />
                               <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                            </button>
                        </div>
                    </div>

                    {/* The "Schematic" Column */}
                    <div className="col-span-6 md:col-span-4 border-t md:border-t-0 md:border-l border-black/10 pt-10 md:pt-0 md:pl-12">
                        <div className="grid grid-cols-1 gap-10">
                            <div className="space-y-4">
                                <p className="text-[9px] uppercase font-bold opacity-30 tracking-[0.3em]">Operational Flow</p>
                                <div className="space-y-3">
                                    {['Data Extraction', 'Regulatory Matching', 'Final Certification'].map((step, i) => (
                                        <div key={i} className="flex items-center gap-4 group/item">
                                            <span className="text-[10px] font-mono opacity-20">0{i+1}</span>
                                            <span className="text-[11px] uppercase font-bold tracking-tight group-hover/item:text-indigo-600 transition-colors cursor-default">
                                                {step}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="p-6 bg-zinc-100 rounded-sm border border-black/5 relative overflow-hidden group/card">
                                <div className="absolute top-0 right-0 p-2 opacity-10 group-hover/card:opacity-100 transition-opacity">
                                    {service.icon}
                                </div>
                                <p className="text-[8px] uppercase font-black opacity-40 mb-2">Technical Core</p>
                                <p className="text-[12px] font-bold uppercase leading-none">High-Precision <br /> {service.category} Engine</p>
                            </div>
                        </div>
                    </div>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER DATA LINE */}
      <div className="mt-20 pt-8 border-t border-black/5 flex justify-between items-center opacity-20">
        <p className="text-[8px] font-mono font-bold uppercase tracking-widest">© SNGWR & CO // ARCHITECTURAL FINANCE</p>
        <p className="text-[8px] font-mono font-bold uppercase tracking-widest text-right">ENCRYPTED END-TO-END</p>
      </div>

    </section>
  )
}

export default Service