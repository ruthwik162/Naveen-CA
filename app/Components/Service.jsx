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
import TextY from './TextY'

const services = [
  {
    id: "01",
    category: "Tax",
    title: "GST & Income Tax Services",
    description:
      "We help individuals and businesses manage GST and Income Tax smoothly. Our services include tax planning, return filing, and ensuring full compliance with government regulations.",
    icon: <ShieldCheck className="w-4 h-4" />,
    tags: ["GST Filing", "Income Tax Returns", "Tax Planning"],
    dataPoint: "TAX-COMPLIANT",
    flow: ["Tax Review", "Return Preparation", "Filing & Compliance"]
  },
  {
    id: "02",
    category: "Audit",
    title: "Audit & Financial Review",
    description:
      "We conduct statutory and internal audits to ensure your financial records are accurate and compliant. Our audit process helps businesses maintain transparency and build trust with investors and regulators.",
    icon: <Fingerprint className="w-4 h-4" />,
    tags: ["Statutory Audit", "Internal Audit", "Financial Review"],
    dataPoint: "ACCURACY-CHECK",
    flow: ["Data Review", "Compliance Check", "Audit Report"]
  },
  {
    id: "03",
    category: "Business",
    title: "Project Reports & Business Finance",
    description:
      "We prepare detailed project reports and financial documents required for bank loans and funding. Our analysis helps businesses secure finance and plan sustainable growth.",
    icon: <Zap className="w-4 h-4" />,
    tags: ["Project Reports", "Loan Documentation", "Business Valuation"],
    dataPoint: "FUNDING-READY",
    flow: ["Financial Analysis", "Report Preparation", "Bank Submission"]
  },
  {
    id: "04",
    category: "Compliance",
    title: "Company Registration & Compliance",
    description:
      "We assist with company registration, ROC filings, and regulatory compliance. Our goal is to ensure your business operates legally and stays updated with all statutory requirements.",
    icon: <BarChart3 className="w-4 h-4" />,
    tags: ["Company Registration", "ROC Filings", "Regulatory Compliance"],
    dataPoint: "LEGAL-COMPLIANT",
    flow: ["Registration", "Documentation", "Regulatory Filing"]
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

      {/* HEADER SECTION */}
      <div className="grid grid-cols-6 md:grid-cols-12 gap-4 mb-20">
        <div className="col-span-6 md:col-span-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-indigo-600 rounded-full" />
            <p className="text-[10px] uppercase tracking-[0.5em] font-black text-indigo-600">
              Our Services
            </p>
          </div>

          <h2 className="text-[11vw] md:text-[6vw] leading-[0.85] font-bold uppercase tracking-tighter">
            Financial <br />
            <span className="italic font-light text-black/20">Services</span>
          </h2>
        </div>

        <div className="col-span-6 md:col-span-4 flex flex-col justify-end md:items-end">
          <div className="flex items-center gap-2 mb-2">
            <Terminal size={12} className="text-indigo-600" />
            <p className="text-[9px] font-mono font-bold opacity-30 tracking-widest">
              CA PROFESSIONAL SERVICES
            </p>
          </div>

          <p className="text-[12px] font-medium leading-tight max-w-[240px] md:text-right opacity-60 uppercase tracking-tight">
            Helping businesses manage taxes, audits, and compliance with confidence.
          </p>
        </div>
      </div>

      {/* ACCORDION LIST */}
      <div className="relative border-t border-black/10">
        {services.map((service, idx) => (
          <div key={service.id} className={`service-row group transition-colors duration-500 ${activeIdx === idx ? 'bg-indigo-50/20' : 'hover:bg-zinc-50'}`}>
            <button
              onClick={() => setActiveIdx(activeIdx === idx ? -1 : idx)}
              className="w-full py-10 md:py-3 grid grid-cols-6 md:grid-cols-12 items-center text-left px-4"
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
                    <TextY>
                      <p className="text-[5vw] md:text-[1.4vw] leading-[1.05] text-black/80 font-medium tracking-tight">
                        {service.description}
                      </p>
                    </TextY>
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
                            <span className="text-[10px] font-mono opacity-30">STEP_0{i + 1}</span>
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

    </section>
  )
}

export default Service