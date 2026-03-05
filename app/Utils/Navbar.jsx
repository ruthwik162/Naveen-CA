"use client";
import React, { useEffect, useRef, ReactNode, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useTransitionRouter } from "next-view-transitions";
import { useGSAP } from "@gsap/react";
import { Hash, Plus, X, Globe, Zap, ArrowUpRight, Cpu } from "lucide-react";

const Navbar = () => {
  const router = useTransitionRouter();
  const drawerRef = useRef(null);
  const overlayRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Index", href: "/", id: "00" },
    { name: "The Firm", href: "/about", id: "01" },
    { name: "Solutions", href: "/service", id: "02" },
    { name: "Workflow", href: "/process", id: "03" },
    { name: "Contact", href: "/contact", id: "04" },
  ];

  // Lock scroll when drawer is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  useGSAP(() => {
    if (menuOpen) {
      // Show Overlay
      gsap.to(overlayRef.current, { opacity: 1, pointerEvents: "all", duration: 0.5 });
      // Slide Drawer In
      gsap.to(drawerRef.current, { x: 0, duration: 1, ease: "expo.inOut" });
      // Stagger Links
      gsap.fromTo(".drawer-link", 
        { x: 50, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 0.8, stagger: 0.05, ease: "power4.out", delay: 0.4 }
      );
    } else {
      gsap.to(overlayRef.current, { opacity: 0, pointerEvents: "none", duration: 0.5 });
      gsap.to(drawerRef.current, { x: "100%", duration: 0.8, ease: "expo.inOut" });
    }
  }, [menuOpen]);

  return (
    <>
      {/* ---- BACKDROP OVERLAY ---- */}
      <div 
        ref={overlayRef}
        onClick={() => setMenuOpen(false)}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[40] opacity-0 pointer-events-none transition-opacity duration-500"
      />

      {/* ---- SLIDE-OUT DRAWER ---- */}
      <div
        ref={drawerRef}
        className="fixed top-0 right-0 w-full md:w-[450px] h-full bg-[#FDFDFD] text-[#111] z-[110] flex flex-col translate-x-full shadow-2xl border-l border-black/5"
      >
        {/* Drawer Header (Internal) */}
        <div className="p-8 border-b border-black/5 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Cpu size={14} className="text-indigo-600 animate-pulse" />
            <span className="text-[9px] font-black uppercase tracking-[0.3em] opacity-40">System_Access</span>
          </div>
          <button 
            onClick={() => setMenuOpen(false)}
            className="text-[10px] uppercase font-bold tracking-widest flex items-center gap-2 hover:text-indigo-600 transition-colors"
          >
            Close <X size={14} />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 px-8 py-12 flex flex-col justify-between overflow-y-auto">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <div key={link.name} className="overflow-hidden group">
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    router.push(link.href, { onTransitionReady: pageAnimation });
                  }}
                  className="drawer-link w-full py-1 flex items-baseline justify-between border-b border-black/[0.03] group-hover:border-indigo-600 transition-all duration-500"
                >
                  <div className="flex items-baseline gap-6">
                    <span className="text-[10px] font-mono opacity-20 tracking-tighter">({link.id})</span>
                    <span className="text-[7vw] md:text-[2.2vw] font-light uppercase tracking-tighter group-hover:italic group-hover:translate-x-2 transition-all duration-500">
                      {link.name}
                    </span>
                  </div>
                  <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-all duration-500 text-indigo-600" />
                </button>
              </div>
            ))}
          </nav>

          {/* Drawer Data Footer */}
          <div className="pt-12 space-y-8">
            <div className="grid grid-cols-2 gap-4">
               <div>
                 <p className="text-[8px] uppercase font-black opacity-30 tracking-[0.4em] mb-2">Practice HQ</p>
                 <p className="text-[10px] font-bold uppercase tracking-widest">Hyderabad, IN</p>
               </div>
               <div>
                 <p className="text-[8px] uppercase font-black opacity-30 tracking-[0.4em] mb-2">Availability</p>
                 <p className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                   <div className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Slots Open Q2
                 </p>
               </div>
            </div>
            
            <div className="bg-zinc-50 p-6 rounded-sm border border-black/[0.03]">
               <p className="text-[9px] font-mono opacity-40 leading-relaxed uppercase">
                 Our methodology utilizes forensic-grade data analysis to ensure statutory integrity for the modern corporate entity.
               </p>
            </div>
          </div>
        </div>
      </div>

      {/* ---- PERMANENT HUD NAV ---- */}
      <nav className="fixed top-0 inset-x-0 z-[100] p-6 md:p-10 pointer-events-none">
        <div className="flex justify-between items-start">
          
          {/* Identity */}
          <div className="pointer-events-auto bg-white/50 backdrop-blur-md p-4 border border-black/5 rounded-sm">
            <Link href="/" className="flex flex-col">
              <span className="text-[12px] md:text-[14px] font-black uppercase tracking-[0.2em] leading-none">
                SNGWR <span className="font-light text-black/40">&</span> CO
              </span>
              <span className="text-[7px] uppercase tracking-[0.5em] font-bold opacity-30 mt-1">
                Forensic Architecture
              </span>
            </Link>
          </div>

          {/* Trigger */}
          <div className="flex z-[150] flex-col items-end gap-6 pointer-events-auto">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="group relative w-12 h-12 md:w-16 md:h-16 flex flex-col items-center justify-center gap-1.5 bg-black text-white rounded-full transition-transform active:scale-90"
            >
               <span className={`w-5 h-[1.5px] bg-white transition-all duration-500 ${menuOpen ? 'rotate-45 translate-y-[3px]' : ''}`} />
               <span className={`w-5 h-[1.5px] bg-white transition-all duration-500 ${menuOpen ? '-rotate-45 -translate-y-[4px]' : ''}`} />
               
               {/* Hover Effect */}
               <div className="absolute inset-0 bg-indigo-600 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 -z-10" />
            </button>

            {/* HUD Status */}
            <div className="hidden md:flex flex-col items-end opacity-40">
               <div className="flex items-center gap-2">
                 <Hash size={8} />
                 <span className="text-[7px] uppercase font-black tracking-[0.4em]">Node_v.2026</span>
               </div>
               <span className="text-[7px] font-mono tracking-widest uppercase mt-1">Status: Active</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

const pageAnimation = () => {
  const root = document.documentElement;
  root.animate(
    [{ opacity: 1, filter: "grayscale(0)" }, { opacity: 0, filter: "grayscale(1)" }],
    { duration: 400, easing: "expo.out", pseudoElement: "::view-transition-old(root)" }
  );
};

export default Navbar;