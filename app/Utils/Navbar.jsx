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
        { x: 0, opacity: 1, duration: 0.8, stagger: 0.05, ease: "power4.out", delay: 0.35 }
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
        className="fixed top-0 right-0 w-full md:w-[450px] h-full bg-[#FDFDFD] text-[#111] z-[40] flex flex-col translate-x-full shadow-2xl border-l border-black/5"
      >
        {/* Drawer Header (Internal) */}
        <div className="p-8 border-b border-black/5 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Cpu size={14} className="text-indigo-600 animate-pulse" />
            <span className="text-[9px] font-black uppercase tracking-[0.3em] opacity-40">System_Access</span>
          </div>

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
      <nav className="fixed top-0 inset-x-0 z-[100] p-6 mix-blend-difference text-white md:p-10 pointer-events-none">
        <div className="flex justify-between items-center ">

          {/* 1. HIGH-END LOGO STYLE */}
          <Link href="/" className="pointer-events-auto group">
            <div className="flex items-center gap-5">
              {/* Vertical accent line */}
              <div className="h-8 w-[1px] bg-black/10 group-hover:bg-indigo-600 transition-colors duration-500" />

              <div className="flex flex-col text-white mix-blend-difference">
                <div className="flex items-baseline gap-2">
                  <span className="text-lg md:text-xl  uppercase tracking-[-0.05em] leading-none">
                    Sangewar
                  </span>
                  <span className="text-lg md:text-xl font-extralight italic uppercase tracking-[-0.05em] leading-none opacity-40">
                    & Co.
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[8px] font-bold uppercase tracking-[0.3em] opacity-60">
                    Chartered Accountancy
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* 2. MINIMALIST HUD MENU TRIGGER */}
          <div className="flex items-center gap-8 pointer-events-auto">


            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative w-14 h-14 md:w-16 md:h-16 group flex items-center justify-center bg-black text-white rounded-sm transition-all duration-500 overflow-hidden active:scale-95"
            >
              {/* Background Hover Animation */}
              <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

              {/* The "Mechanical" Icon */}
              <div className="relative z-10 flex flex-col gap-[4px] items-end group-hover:items-center transition-all duration-500">
                <span className={`h-[1px] bg-white transition-all duration-500 ${menuOpen ? 'w-6 rotate-45 translate-y-[2.5px]' : 'w-8'}`} />
                <span className={`h-[1px] bg-white transition-all duration-500 ${menuOpen ? 'w-6 -rotate-45 -translate-y-[2.5px]' : 'w-5'}`} />
              </div>

              {/* HUD Corner Accents (The perfectionist touch) */}
              <div className="absolute top-1 left-1 w-1 h-1 border-t border-l border-white/30" />
              <div className="absolute bottom-1 right-1 w-1 h-1 border-b border-r border-white/30" />
            </button>
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