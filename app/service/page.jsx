"use client"

import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { ReactLenis } from '@studio-freight/react-lenis'
import {
  ArrowUpRight,
  Building2,
  Calculator,
  FileText,
  ShieldCheck,
  Landmark,
  Briefcase,
  BadgeCheck,
  Layers,
  Compass,
  MoveRight
} from "lucide-react"
import TextY from '../Components/TextY'

// Assuming TextY is a component that handles Y-axis overflow reveals

gsap.registerPlugin(ScrollTrigger, SplitText)

const services = [
  {
    id: "01",
    title: "Start Your Business",
    tag: "REGISTRATION",
    desc: "Every business begins with the right foundation. We help you register your company, LLP, or partnership and complete all government formalities so your business can start legally and smoothly.",
    icon: <Building2 size={32} strokeWidth={1} />,
  },
  {
    id: "02",
    title: "GST Registration & Filing",
    tag: "GST SERVICES",
    desc: "Once your business starts, GST becomes an important part of operations. We help with GST registration, monthly return filing, and keeping your business compliant with GST rules.",
    icon: <Calculator size={32} strokeWidth={1} />,
  },
  {
    id: "03",
    title: "Income Tax Filing",
    tag: "TAX SERVICES",
    desc: "We prepare and file income tax returns for individuals and businesses. Our goal is to ensure accurate filing while helping you plan taxes in the most efficient way.",
    icon: <FileText size={32} strokeWidth={1} />,
  },
  {
    id: "04",
    title: "Audit & Financial Review",
    tag: "AUDIT",
    desc: "Audits help businesses maintain transparency and trust. We conduct statutory and internal audits to ensure financial records are accurate and follow legal requirements.",
    icon: <ShieldCheck size={32} strokeWidth={1} />,
  },
  {
    id: "05",
    title: "Company Compliance",
    tag: "COMPLIANCE",
    desc: "Businesses must follow several legal rules every year. We handle ROC filings, director KYC, and other compliance tasks to keep your company safe from penalties.",
    icon: <Landmark size={32} strokeWidth={1} />,
  },
  {
    id: "06",
    title: "Business Growth Support",
    tag: "ADVISORY",
    desc: "When your business is ready to grow, we help with project reports, loan documentation, and financial planning required for bank funding and expansion.",
    icon: <Briefcase size={32} strokeWidth={1} />,
  },
]

const ServicesPage = () => {
  const sectionRef = useRef()
  const bgContainerRef = useRef()
  const bgRef = useRef()
  const stickyTriggerRef = useRef()

  useGSAP(() => {
    // 1. PINNED BACKGROUND EFFECT
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom top",
      pin: bgContainerRef.current,
      pinSpacing: false,
    })

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

    // 2. TEXT REVEAL ANIMATION
    const narrativeElements = gsap.utils.toArray(".narrative-text");
    narrativeElements.forEach((text) => {
      const split = new SplitText(text, { type: "words" });
      gsap.from(split.words, {
        scrollTrigger: {
          trigger: text,
          start: "top 85%",
          end: "top 45%",
          scrub: 0.5,
        },
        opacity: 0.1,
        y: 15,
        stagger: 0.1,
        ease: "power2.out"
      });
    });

    // 3. PROGRESS BAR
    gsap.to(".scroll-progress", {
      scrollTrigger: {
        trigger: stickyTriggerRef.current,
        start: "top 20%",
        end: "bottom bottom",
        scrub: true,
      },
      scaleY: 1,
      ease: "none"
    });

    // 4. SERVICE CARD REVEAL
    gsap.from(".service-card", {
      scrollTrigger: {
        trigger: ".service-grid",
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out"
    })

  }, { scope: sectionRef })

  return (
    <ReactLenis root>
      <section ref={sectionRef} className='w-full bg-[#050505] relative font-[PPNeueMontreal] overflow-hidden'>

        {/* PINNED BACKGROUND LAYER */}
        <div ref={bgContainerRef} className="absolute inset-0 w-full h-screen z-0">
          <div
            ref={bgRef}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1974&auto=format&fit=crop')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
        </div>

        {/* CONTENT LAYER */}
        <div className='relative z-10 px-6 md:px-[5vw]'>

          {/* HERO SECTION */}
          <div className="h-[80vh] flex flex-col justify-end pb-32">
            <div className="flex items-center gap-4 mb-6">
              <span className='w-16 h-[1px] bg-indigo-500'></span>
              <p className='text-[10px] uppercase font-black tracking-[0.5em] text-indigo-400'>Capabilities // 2026</p>
            </div>
            <h1 className='text-white text-[12vw] md:text-[9vw] font-bold uppercase leading-[0.8] tracking-tighter'>
              Expert <br /> <span className="text-zinc-600 italic font-light">Services.</span>
            </h1>
          </div>

          {/* STICKY NARRATIVE & GRID SECTION */}
          <div ref={stickyTriggerRef} className='max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 relative'>

            {/* LEFT SIDE: STICKY INFO */}
            <div className='col-span-1 md:col-span-4 mb-20 md:mb-0'>
              <div className='md:sticky md:top-40 h-fit flex gap-10'>
                {/* Visual Progress Line */}
                <div className='hidden md:block w-[1px] h-[400px] bg-white/10 relative overflow-hidden'>
                  <div className='scroll-progress absolute top-0 left-0 w-full h-full bg-indigo-600 origin-top scale-y-0' />
                </div>

                <div className='flex flex-col gap-8'>
                  <h3 className='text-[10vw] md:text-[3.5vw] font-bold leading-[0.9] uppercase tracking-tighter text-white'>
                    Systemic <br /> <span className='text-indigo-500 italic'>Solutions.</span>
                  </h3>

                  <div className='p-8 border border-white/5 bg-white/[0.01] backdrop-blur-xl'>
                    <Layers size={28} className='text-indigo-500 mb-8' />
                    <h4 className='text-white text-lg font-bold uppercase mb-3'>Operational Rigor</h4>
                    <p className='text-zinc-500 text-xs leading-relaxed uppercase tracking-wider font-medium'>
                      Every service we provide is a component of a larger financial architecture. We don't just file papers; we build defensible systems.
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 mt-4">
                    <p className="text-zinc-600 text-[10px] font-mono uppercase">Practice Focus:</p>
                    <div className="flex flex-wrap gap-2">
                      {['Statutory', 'Direct Tax', 'FEMA', 'Audit'].map(tag => (
                        <span key={tag} className="px-3 py-1 border border-white/10 text-[9px] text-zinc-400 uppercase tracking-widest">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: SCROLLING SERVICES */}
            <div className='col-span-1 md:col-start-6 md:col-span-7 flex flex-col gap-24 pb-40'>

              <div className='flex flex-col gap-10 mb-20'>
                <h2 className='narrative-text text-[6vw] md:text-[2.2vw] leading-[1.2] font-medium tracking-tight text-zinc-300'>
                  We provide a comprehensive suite of Chartered Accountancy services designed to scale with your ambition. Accuracy is our foundation; strategy is our distinction.
                </h2>
              </div>

              {/* SERVICE GRID */}
              <div className="service-grid grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
                {services.map((item, index) => (
                  <div
                    key={index}
                    className="service-card group bg-[#080808] p-10 flex flex-col justify-between aspect-square hover:bg-[#0C0C0C] transition-colors duration-500"
                  >
                    <div className="flex justify-between items-start">
                      <div className="text-indigo-500 group-hover:scale-110 transition-transform duration-500">
                        {item.icon}
                      </div>
                      <span className="font-mono text-[10px] text-zinc-600">{item.id}</span>
                    </div>

                    <div className="mt-12">
                      <span className="text-[10px] font-bold text-indigo-400 tracking-[0.3em] uppercase mb-4 block">
                        {item.tag}
                      </span>
                      <h3 className="text-white text-2xl md:text-3xl font-bold uppercase tracking-tighter mb-4 group-hover:text-indigo-50 transition-colors">
                        {item.title}
                      </h3>
                      <TextY>
                        <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
                          {item.desc}
                        </p>
                      </TextY>
                    </div>

                    <div className="mt-8 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-600 group-hover:text-white transition-all">
                        Details <MoveRight size={14} className="group-hover:translate-x-2 transition-transform" />
                      </div>
                      <ArrowUpRight size={18} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                ))}
              </div>

              {/* EXTRA ADVISORY CALLOUT */}
              <div className="mt-20 p-12 bg-indigo-600 flex flex-col md:flex-row justify-between items-center gap-8 group cursor-pointer">
                <div className="text-white">
                  <p className="text-[10px] font-black tracking-[0.3em] uppercase mb-2 opacity-80">Extended Protocol</p>
                  <h3 className="text-4xl font-bold uppercase tracking-tighter">Custom Advisory</h3>
                  <p className="text-indigo-100 text-sm mt-2">Tailored financial frameworks for high-growth startups.</p>
                </div>
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-indigo-600 transition-all duration-500">
                  <ArrowUpRight size={30} />
                </div>
              </div>

            </div>
          </div>

          {/* FOOTER QUOTE (Matching About Page) */}
          <div className='col-span-12 py-40 flex flex-col items-center text-center'>
            <Compass size={40} className='text-indigo-500 mb-12 animate-spin-slow' />
            <TextY>
              <p className='text-[6vw] md:text-[3vw] text-zinc-200 font-light leading-[1] max-w-4xl uppercase tracking-tighter'>
                "Financial excellence is not a one-time audit, but a <span className='text-white font-bold'>continuous architecture</span> of integrity."
              </p>
            </TextY>

            <div className='mt-20 flex flex-col items-center gap-6'>
              <button className="px-12 py-5 bg-white text-black font-bold text-[10px] uppercase tracking-[0.4em] hover:bg-indigo-500 hover:text-white transition-all duration-500">
                Book a Consultation
              </button>
              <span className='w-[1px] h-24 bg-gradient-to-b from-indigo-500 to-transparent' />
            </div>
          </div>
        </div>
      </section>
    </ReactLenis>
  )
}

export default ServicesPage