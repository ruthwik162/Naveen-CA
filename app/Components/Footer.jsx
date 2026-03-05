"use client"

import React from 'react'
import { ArrowUpRight, Globe, Mail, Phone, Shield, Terminal, Zap } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="w-full bg-white text-[#111] font-[PPNeueMontreal] relative pt-20 pb-10 px-4 md:px-[2vw] border-t border-black/10 overflow-hidden">
      
      {/* 12-Column Grid Lines (Visual Consistency) */}
      <div className="absolute inset-0 grid grid-cols-6 md:grid-cols-12 px-4 md:px-[2vw] pointer-events-none opacity-[0.03]">
        {[...Array(13)].map((_, i) => (
          <div key={i} className="border-r border-black h-full" />
        ))}
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto">
        
        {/* TOP SECTION: BIG LOGO / TERMINAL STATUS */}
        <div className="grid grid-cols-6 md:grid-cols-12 gap-8 mb-20">
          <div className="col-span-6 md:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <Terminal size={14} className="text-indigo-600" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em]">System_Status: Online</span>
            </div>
            <h2 className="text-[12vw] md:text-[6vw] font-black uppercase tracking-tighter leading-[0.8] italic mb-8">
              SNGWR <span className="text-black/10">&</span> CO.
            </h2>
            <div className="flex flex-wrap gap-4">
              <button className="group flex items-center gap-4 border border-black px-6 py-3 hover:bg-black hover:text-white transition-all duration-500">
                <span className="text-[10px] font-bold uppercase tracking-widest">Initialize Audit</span>
                <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform" />
              </button>
              <button className="group flex items-center gap-4 bg-indigo-600 text-white px-6 py-3 hover:bg-black transition-all duration-500">
                <span className="text-[10px] font-bold uppercase tracking-widest">Client Login</span>
                <Shield size={14} />
              </button>
            </div>
          </div>

          {/* QUICK LINKS: High Density Data */}
          <div className="col-span-3 md:col-span-2 space-y-8">
            <div>
              <p className="text-[9px] font-mono font-black uppercase opacity-30 mb-4 tracking-widest">Core_Nodes</p>
              <ul className="text-[12px] font-bold uppercase space-y-2">
                <li className="hover:text-indigo-600 cursor-pointer transition-colors">Services</li>
                <li className="hover:text-indigo-600 cursor-pointer transition-colors">Integrity</li>
                <li className="hover:text-indigo-600 cursor-pointer transition-colors">Methodology</li>
                <li className="hover:text-indigo-600 cursor-pointer transition-colors">Dossier</li>
              </ul>
            </div>
          </div>

          {/* CONTACT: HQ DATA */}
          <div className="col-span-3 md:col-span-3 space-y-8">
            <div>
              <p className="text-[9px] font-mono font-black uppercase opacity-30 mb-4 tracking-widest">Access_Points</p>
              <div className="text-[11px] font-medium space-y-4">
                <p className="flex items-start gap-3">
                  <Globe size={12} className="mt-0.5 text-indigo-600" />
                  <span>Suite 402, Financial District<br/>Hyderabad, TS 500032</span>
                </p>
                <p className="flex items-center gap-3 hover:text-indigo-600 cursor-pointer transition-colors">
                  <Mail size={12} className="text-indigo-600" />
                  <span>protocol@sngwr.com</span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone size={12} className="text-indigo-600" />
                  <span>+91 40 2930 XXXX</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR: Metadata & Security Stamps */}
        <div className="pt-10 border-t border-black/10 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-2">
            <p className="text-[8px] font-mono font-black uppercase tracking-[0.5em] opacity-20">
              © 2026 SNGWR & CO // ARCHITECTURAL FINANCE // ALL RIGHTS RESERVED
            </p>
          </div>
          
          <div className="flex items-center gap-4 md:justify-end">
            <Zap size={10} className="text-indigo-600" />
            <span className="text-[8px] font-mono font-black uppercase tracking-widest opacity-40">Encryption: AES-256</span>
          </div>
          
          <div className="flex items-center gap-4 md:justify-end">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            <span className="text-[8px] font-mono font-black uppercase tracking-widest opacity-40">Server: HYD_N01_ACTIVE</span>
          </div>
        </div>

      </div>

      {/* Aesthetic "Edge" Detail */}
      <div className="absolute right-0 bottom-0 opacity-[0.02] pointer-events-none">
        <h2 className="text-[20vw] font-black leading-none translate-y-1/2">SNGWR</h2>
      </div>
    </footer>
  )
}

export default Footer