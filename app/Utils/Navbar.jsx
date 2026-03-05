"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useTransitionRouter } from "next-view-transitions";
import { useGSAP } from "@gsap/react";
import { Fingerprint, Menu, X, Plus, Hash } from "lucide-react";

const Navbar = () => {
  const router = useTransitionRouter();
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Index", href: "/", id: "00" },
    { name: "The Firm", href: "/about", id: "01" },
    { name: "Solutions", href: "/service", id: "02" },
    { name: "Workflow", href: "/process", id: "03" },
  ];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useGSAP(() => {
    if (menuOpen) {
      gsap.to(menuRef.current, {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.2,
        ease: "expo.inOut",
      });
      gsap.fromTo(
        ".nav-reveal",
        { yPercent: 100 },
        { yPercent: 0, duration: 1, stagger: 0.1, ease: "expo.out", delay: 0.4 }
      );
    } else {
      gsap.to(menuRef.current, {
        clipPath: "inset(0% 0% 100% 0%)",
        duration: 0.8,
        ease: "expo.inOut",
      });
    }
  }, [menuOpen]);

  return (
    <>
      {/* ---- FULL-SCREEN TECHNICAL OVERLAY ---- */}
      <div
        ref={menuRef}
        className="fixed inset-0 bg-[#FDFDFD] text-[#111] z-[80] flex flex-col justify-between p-6 md:p-12 overflow-hidden"
        style={{ clipPath: "inset(0% 0% 100% 0%)" }}
      >
        {/* Background Grid for Menu */}
        <div className="absolute inset-0 grid grid-cols-6 md:grid-cols-12 px-4 md:px-[2vw] pointer-events-none opacity-20">
          {[...Array(13)].map((_, i) => (
            <div key={i} className="border-r border-black/[0.1] h-full" />
          ))}
        </div>

        <div className="relative z-10 mt-20">
          <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-indigo-600 mb-12">
            System / Directory
          </p>
          <div className="flex flex-col space-y-2">
            {links.map((link) => (
              <div key={link.name} className="overflow-hidden group border-b border-black/5 last:border-0">
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    router.push(link.href, { onTransitionReady: pageAnimation });
                  }}
                  className="nav-reveal py-1 md:py-2 flex items-center gap-2 md:gap-8 text-[6vw] md:text-[3vw] font-semibold uppercase tracking-tighter hover:italic hover:text-indigo-600 transition-all duration-500"
                >
                  <span className="text-[3vw] md:text-[1vw] font-bold opacity-20 italic">({link.id})</span>
                  {link.name}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-8 border-t border-black/10 pt-8">
          <div className="hidden md:block">
             <p className="text-[9px] uppercase font-bold opacity-30 tracking-[0.3em] mb-2">Practice HQ</p>
             <p className="text-[12px] font-bold uppercase tracking-tight">Hyderabad // India</p>
          </div>
          <div className="flex gap-12">
            <a href="#" className="text-[10px] uppercase font-bold hover:text-indigo-600">LinkedIn // IN</a>
            <a href="#" className="text-[10px] uppercase font-bold hover:text-indigo-600">Portal // Access</a>
          </div>
        </div>
      </div>

      {/* ---- HUD NAV ---- */}
      <nav className="fixed top-0 inset-x-0 z-[90] p-4 md:p-8 pointer-events-none">
        <div className="flex justify-between items-start">
          
          {/* Identity Block */}
          <div className="pointer-events-auto flex flex-col gap-1 border-l-2 border-indigo-600 pl-4">
            <Link href="/" className="group">
              <span className="text-[14px] md:text-[18px] font-bold uppercase tracking-tighter block leading-none">
                Sangewar <span className="text-indigo-600">&</span> Co.
              </span>
              <span className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] font-bold opacity-40 block mt-1">
                Forensic Architecture
              </span>
            </Link>
          </div>

          {/* Controller Block */}
          <div className="flex flex-col items-end gap-6 pointer-events-auto">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="group relative flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-black text-white rounded-full overflow-hidden"
            >
              <div className={`transition-transform duration-500 ${menuOpen ? 'rotate-90' : 'rotate-0'}`}>
                {menuOpen ? <X size={24} /> : <Plus size={24} />}
              </div>
              {/* Background fill on hover */}
              <div className="absolute inset-0 bg-indigo-600 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full -z-10" />
            </button>

            {/* Data Badge */}
            <div className="hidden md:flex flex-col items-end gap-1 opacity-40">
               <div className="flex items-center gap-2">
                 <Hash size={10} />
                 <span className="text-[9px] uppercase font-bold tracking-[0.2em]">Compliance.Node_Active</span>
               </div>
               <span className="text-[8px] font-mono tracking-tighter">17.3850° N, 78.4867° E</span>
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
    { duration: 500, easing: "expo.out", pseudoElement: "::view-transition-old(root)" }
  );
};

export default Navbar;