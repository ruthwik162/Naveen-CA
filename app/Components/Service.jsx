"use client"

import React, { useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { 
  Plus, 
  Minus, 
  ArrowUpRight, 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  Fingerprint, 
  Terminal,
  Cpu,
  Layers,
  Scale
} from 'lucide-react'

const services = [
  {
    id: "01",
    category: "Defensive",
    title: "Taxation Architecture",
    description: "Navigating the volatile landscape of Direct & Indirect taxation. We design robust GST frameworks and Income Tax strategies that minimize leakage while maintaining an impenetrable compliance posture during assessments.",
    icon: <ShieldCheck className="w-4 h-4" />,
    tags: ["GST Algorithmic Management", "International Transfer Pricing", "Tax Litigation"],
    dataPoint: "COMPLIANCE-100",
    flow: ["Structural Assessment", "Liability Optimization", "Statutory Filing"]
  },
  {
    id: "02",
    category: "Integrity",
    title: "Forensic Assurance",
    description: "Statutory auditing reimagined as business intelligence. Beyond the balance sheet, we verify the integrity of your internal controls and financial reporting standards (Ind AS) to ensure investor-ready transparency.",
    icon: <Fingerprint className="w-4 h-4" />,
    tags: ["Statutory Audit", "Internal Risk Control", "Fraud Detection"],
    dataPoint: "ERROR-MARGIN: 0.00%",
    flow: ["Data Ingestion", "Anomaly Detection", "Certification"]
  },
  {
    id: "03",
    category: "Structural",
    title: "Capital Engineering",
    description: "Fueling enterprise expansion through project financing and valuation. We translate your operational vision into high-fidelity Detailed Project Reports (DPRs) that secure institutional funding and venture capital.",
    icon: <Zap className="w-4 h-4" />,
    tags: ["Project Reports (DPR)", "CMA Data Analysis", "Business Valuation"],
    dataPoint: "FUNDING-READY",
    flow: ["Projection Modeling", "Debt Structuring", "Bank Liaison"]
  },
  {
    id: "04",
    category: "Systemic",
    title: "Corporate Governance",
    description: "End-to-end lifecycle management for modern corporations. From ROC annual filings to FEMA cross-border regulations, we ensure your legal entity operates without technical or regulatory debt.",
    icon: <BarChart3 className="w-4 h-4" />,
    tags: ["ROC Compliance", "FEMA & RBI Regulations", "Company Formation"],
    dataPoint: "LEGAL-SYNC",
    flow: ["Governance Audit", "Document Synthesis", "Regulatory Submission"]
  }
]

const Service = () => {
  const [activeIdx, setActiveIdx] = useState(0)
  const container = useRef()

  useGSAP(() => {
    gsap.from(".service-row", {
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "expo.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      }
    })
  }, { scope: container })

  return (
    <section ref={container} className="w-full bg-[#FDFDFD] text-[#111] font-[PPNeueMontreal] px-4 md:px-[2vw] py-24 relative overflow-hidden">
      
      {/* HEADER SECTION - Matched to Hero/About */}
      <div className="grid grid-cols-6 md:grid-cols-12 gap-4 mb-20">
        <div className="col-span-6 md:col-span-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-indigo-600 rounded-full" />
            <p className="text-[10px] uppercase tracking-[0.5em] font-black text-indigo-600">Service Inventory</p>
          </div>
          <h2 className="text-[11vw] md:text-[6vw] leading-[0.85] font-bold uppercase tracking-tighter">
            Operational <br /> <span className="italic font-light text-black/20">Protocols.</span>
          </h2>
        </div>
        <div className="col-span-6 md:col-span-4 flex flex-col justify-end md:items-end">
          <div className="flex items-center gap-2 mb-2">
            <Terminal size={12} className="text-indigo-600" />
            <p className="text-[9px] font-mono font-bold opacity-30 tracking-widest">SNGWR_CORE_ENGINE</p>
          </div>
          <p className="text-[12px] font-medium leading-tight max-w-[240px] md:text-right opacity-60 uppercase tracking-tight">
            Deploying high-precision fiscal instruments for enterprise resilience.
          </p>
        </div>
      </div>

      {/* ACCORDION LIST */}
      <div className="relative border-t border-black/10">
        {services.map((service, idx) => (
          <div key={service.id} className={`service-row group transition-colors duration-500 ${activeIdx === idx ? 'bg-indigo-50/20' : 'hover:bg-zinc-50'}`}>
            <button 
              onClick={() => setActiveIdx(activeIdx === idx ? -1 : idx)}
              className="w-full py-10 md:py-12 grid grid-cols-6 md:grid-cols-12 items-center text-left px-4"
            >
              <div className="col-span-1 hidden md:block">
                <span className={`text-[12px] font-mono transition-opacity duration-500 ${activeIdx === idx ? 'opacity-100 font-bold text-indigo-600' : 'opacity-20'}`}>
                  /{service.id}
                </span>
              </div>

              <div className="col-span-4 md:col-span-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[9px] uppercase font-black text-white bg-black px-2 py-0.5">
                    {service.category}
                  </span>
                  <span className="text-[9px] font-mono text-indigo-600 font-bold">{service.dataPoint}</span>
                </div>
                <h3 className="text-[7vw] md:text-[3vw] font-bold tracking-tighter leading-none transition-all duration-300">
                    {service.title}
                </h3>
              </div>
              
              <div className="col-span-4 hidden md:flex gap-6 items-center justify-center">
                 {service.tags.slice(0, 2).map(tag => (
                   <span key={tag} className="text-[9px] uppercase font-bold opacity-30 tracking-widest">
                     {tag}
                   </span>
                 ))}
              </div>

              <div className="col-span-2 md:col-span-1 flex justify-end">
                <div className={`w-12 h-12 flex items-center justify-center rounded-full border border-black/10 transition-all duration-500 ${activeIdx === idx ? 'bg-indigo-600 text-white border-indigo-600' : 'group-hover:bg-black group-hover:text-white'}`}>
                    {activeIdx === idx ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </div>
            </button>

            {/* EXPANDABLE DETAIL */}
            <div className={`grid transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${activeIdx === idx ? 'grid-rows-[1fr] opacity-100 border-b border-black/10' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden">
                <div className="grid grid-cols-6 md:grid-cols-12 gap-12 px-6 pb-20">
                    
                    {/* Content */}
                    <div className="col-span-6 md:col-start-2 md:col-span-5 space-y-10">
                        <p className="text-[5vw] md:text-[1.4vw] leading-tight text-black/80 font-medium tracking-tight">
                           {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {service.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 bg-zinc-100 text-[10px] font-bold uppercase tracking-wider text-black/40">
                              {tag}
                            </span>
                          ))}
                        </div>
                    </div>

                    {/* Workflow Schematic */}
                    <div className="col-span-6 md:col-start-8 md:col-span-4 space-y-8">
                        <div>
                          <p className="text-[10px] uppercase font-black text-indigo-600 mb-6 tracking-[0.2em] flex items-center gap-2">
                             <Layers size={14} /> Pipeline Execution
                          </p>
                          <div className="space-y-4">
                              {service.flow.map((step, i) => (
                                  <div key={i} className="flex items-center justify-between border-b border-black/5 pb-2">
                                      <span className="text-[11px] font-bold uppercase">{step}</span>
                                      <span className="text-[10px] font-mono opacity-30">STEP_0{i+1}</span>
                                  </div>
                              ))}
                          </div>
                        </div>

                        <div className="p-6 bg-black text-white rounded-sm flex justify-between items-center group/btn cursor-pointer">
                           <div>
                              <p className="text-[8px] uppercase font-bold opacity-50 mb-1">Request Engagement</p>
                              <p className="text-xs font-bold uppercase tracking-widest">Initialize Protocol</p>
                           </div>
                           <ArrowUpRight className="group-hover:rotate-45 transition-transform" />
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER SYSTEM DATA */}
      <div className="mt-20 flex flex-col md:flex-row justify-between items-center opacity-30 gap-4">
        <div className="flex items-center gap-6">
           <div className="flex items-center gap-2">
              <Scale size={14} />
              <p className="text-[9px] font-bold uppercase tracking-widest">ICAI Regulatory Standards</p>
           </div>
           <div className="flex items-center gap-2">
              <Cpu size={14} />
              <p className="text-[9px] font-bold uppercase tracking-widest">Automated Audit Nodes</p>
           </div>
        </div>
        <p className="text-[9px] font-mono font-bold uppercase">SNGWR // DATA_ACCESS_GRANTED</p>
      </div>

    </section>
  )
}

export default Service