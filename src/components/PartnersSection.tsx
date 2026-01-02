"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const mainPartner = { src: "https://rcmsiziewjaxxwhssnvl.supabase.co/storage/v1/object/public/Images/google-for-developers.png", alt: "Google for Developers", href: "https://developers.google.com" };

const secondaryLogos = [
  { src: "https://rcmsiziewjaxxwhssnvl.supabase.co/storage/v1/object/public/Images/AI%20Pune%20-%20Black.png", alt: "AI Pune", href: "#" },
  { src: "https://rcmsiziewjaxxwhssnvl.supabase.co/storage/v1/object/public/Images/GDG%20On%20Campus%20-%20White%20Text.png", alt: "GDG On Campus", href: "#" },
  { src: "https://rcmsiziewjaxxwhssnvl.supabase.co/storage/v1/object/public/Images/Hyphen.png", alt: "Hyphen", href: "#" },
  { src: "https://rcmsiziewjaxxwhssnvl.supabase.co/storage/v1/object/public/Images/MPSTME_18Ulfmu.png", alt: "MPSTME", href: "#" },
  { src: "https://rcmsiziewjaxxwhssnvl.supabase.co/storage/v1/object/public/Images/Ai_Impact_Summit.png", alt: "AI Impact Summit", href: "#" },
];

const neonColors = ['#7C3AED', '#06B6D4', '#F97316', '#DB2777', '#3B82F6'];
const neonStyle = (i: number) => ({
  backgroundImage: `radial-gradient(circle at 30% 30%, ${neonColors[i % neonColors.length]}33 0%, transparent 35%), radial-gradient(circle at 70% 70%, ${neonColors[(i+1) % neonColors.length]}22 0%, transparent 45%)`,
  filter: 'blur(40px)'
} as React.CSSProperties);

export default function PartnersSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [tooltipVisibleId, setTooltipVisibleId] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const longPressRef = useRef<{[key:string]: {timer?: number, triggered?: boolean}}>({});

  useEffect(() => {
    if (!sectionRef.current) return;

    // Heading reveal
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".reveal-heading"),
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );

    // Partner cards animation
    const cards = sectionRef.current.querySelectorAll('.partner-card');
    gsap.fromTo(
      cards,
      { opacity: 0, y: 60, rotateX: 15 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        }
      }
    );

    // Neon pulse animation for neon layers
    const neonLayers = sectionRef.current.querySelectorAll('.neon-glow');
    if (neonLayers.length) {
      gsap.to(neonLayers, {
        scale: 1.08,
        opacity: 0.85,
        duration: 2.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: { each: 0.2 }
      });
    }
  }, []);

  // Long-press handlers: show tooltip on press-and-hold (~600ms)
  const handlePointerDown = (id: string) => (e: React.PointerEvent) => {
    // start timer
    longPressRef.current[id] = { timer: window.setTimeout(() => {
      longPressRef.current[id].triggered = true;
      setTooltipVisibleId(id);
    }, 600) };
  };

  const clearLongPress = (id: string) => () => {
    const entry = longPressRef.current[id];
    if (!entry) return;
    if (entry.timer) {
      clearTimeout(entry.timer);
    }
    // reset triggered after a short delay to allow click handler to check
    setTimeout(() => {
      if (longPressRef.current[id]) delete longPressRef.current[id];
    }, 0);
  };

  const handleClick = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    const entry = longPressRef.current[id];
    if (entry && entry.triggered) {
      // long press was triggered — prevent navigation
      e.preventDefault();
      // keep tooltip visible for slightly longer
      setTimeout(() => setTooltipVisibleId(null), 1200);
    }
    // otherwise allow normal navigation
  };

  return (
    <section
      ref={sectionRef}
      id="partners"
      className="relative py-20 sm:py-24 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Ambient multi-layered background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[20%] top-[10%] w-[50vw] h-[30vw] bg-gradient-to-br from-purple-600/15 via-blue-500/10 to-transparent blur-[160px] animate-pulse" />
        <div className="absolute right-[15%] bottom-[20%] w-[40vw] h-[35vw] bg-gradient-to-tl from-cyan-400/12 via-pink-500/8 to-transparent blur-[140px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Futuristic glass container with gradient border */}
        <div className="p-[2px] rounded-[2.5rem] bg-gradient-to-r from-purple-600/30 via-cyan-400/25 to-blue-500/20 shadow-2xl">
          <div className="rounded-[2.5rem] bg-gradient-to-br from-[#0a0d14] via-[#0f1219] to-[#0a0d14] backdrop-blur-xl px-6 py-12 sm:px-10 sm:py-16 md:px-14 md:py-20 relative overflow-hidden">
            
            {/* Decorative light rays */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-cyan-400/60 to-transparent" />
            <div className="absolute bottom-0 right-[20%] w-[1px] h-24 bg-gradient-to-t from-purple-500/50 to-transparent" />

            {/* Heading with futuristic styling */}
            <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 md:mb-20 relative z-10">
              <div className="reveal-heading inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-400/20 mb-4 sm:mb-6">
                <span className="text-xs sm:text-sm text-cyan-300 font-medium tracking-widest uppercase">Powered By</span>
              </div>
              
              <h2 className="reveal-heading text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 mb-4 sm:mb-6">
                Partners
              </h2>
              
              <div className="reveal-heading w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent rounded-full mx-auto mb-4 sm:mb-6" />
              
              <p className="reveal-heading text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                We're grateful to the organisations supporting this initiative. Reach out if you'd like to
                <span className="text-cyan-400 font-semibold"> partner with us</span>.
              </p>
            </div>

            {/* Google for Developers - Centered Main Partner */}
            <div className="flex justify-center mb-16" ref={containerRef}>
              <a
                href={mainPartner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="partner-card group relative"
                onPointerDown={handlePointerDown('partner-main')}
                onPointerUp={clearLongPress('partner-main')}
                onPointerLeave={clearLongPress('partner-main')}
                onPointerCancel={clearLongPress('partner-main')}
                onClick={handleClick('partner-main')}
                onMouseEnter={() => setHoveredCard('partner-main')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Neon glow background */}
                <div
                  className="neon-glow absolute inset-0 z-0 opacity-25 group-hover:opacity-80 transition-all duration-500 rounded-3xl"
                  style={neonStyle(0)}
                />

                {/* Glass card */}
                <div className="relative z-10 bg-gradient-to-br from-white/8 to-white/[0.02] backdrop-blur-2xl border border-cyan-400/20 rounded-3xl p-4 sm:p-10 flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02] group-hover:shadow-[0_20px_60px_-12px_rgba(6,182,212,0.4)] group-hover:border-cyan-400/40">
                  <img src={mainPartner.src} alt={mainPartner.alt} className="h-24 sm:h-28 md:h-32 lg:h-36 object-contain" />
                  
                  {/* Animated bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 rounded-full bg-gradient-to-r from-cyan-400/50 via-purple-500/50 to-blue-500/50 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 transition-all duration-700"
                      style={{ 
                        width: hoveredCard === 'partner-main' ? '100%' : '0%',
                        boxShadow: hoveredCard === 'partner-main' ? '0 0 10px rgba(6,182,212,0.8)' : 'none'
                      }}
                    />
                  </div>
                </div>

                {/* Hover label */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-400/30 text-xs text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {mainPartner.alt}
                </div>

                {/* Long-press tooltip */}
                {tooltipVisibleId === 'partner-main' && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 -top-12 z-40 px-4 py-2 rounded-lg bg-black/90 text-white text-sm shadow-2xl border border-cyan-400/30">
                    {mainPartner.alt}
                  </div>
                )}
              </a>
            </div>

            {/* Secondary Partners - Grid Layout */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {secondaryLogos.map((l, i) => {
                const id = `partner-${i}`;
                return (
                  <a
                    key={i}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="partner-card group relative"
                    onPointerDown={handlePointerDown(id)}
                    onPointerUp={clearLongPress(id)}
                    onPointerLeave={clearLongPress(id)}
                    onPointerCancel={clearLongPress(id)}
                    onClick={handleClick(id)}
                    onMouseEnter={() => setHoveredCard(id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Neon glow background */}
                    <div
                      className="neon-glow absolute inset-0 z-0 opacity-25 group-hover:opacity-80 transition-all duration-500 rounded-3xl"
                      style={neonStyle(i + 1)}
                    />

                    {/* Glass card */}
                    <div className="relative z-10 bg-gradient-to-br from-white/8 to-white/[0.02] backdrop-blur-2xl border border-cyan-400/20 rounded-3xl p-1 sm:p-3 flex flex-col items-center justify-center shadow-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02] group-hover:shadow-[0_20px_60px_-12px_rgba(6,182,212,0.4)] group-hover:border-cyan-400/40" style={{ minHeight: 140 }}>
                      <img src={l.src} alt={l.alt} className="h-16 sm:h-18 md:h-20 object-contain" />
                      
                      {/* Animated bottom accent */}
                      <div className="absolute bottom-0 left-0 right-0  rounded-full bg-gradient-to-r from-cyan-400/50 via-purple-500/50 to-blue-500/50 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 transition-all duration-700"
                          style={{ 
                            width: hoveredCard === id ? '100%' : '0%',
                            boxShadow: hoveredCard === id ? '0 0 10px rgba(6,182,212,0.8)' : 'none'
                          }}
                        />
                      </div>
                    </div>

                    {/* Hover label */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-400/30 text-xs text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {l.alt}
                    </div>

                    {/* Long-press tooltip */}
                    {tooltipVisibleId === id && (
                      <div className="absolute left-1/2 transform -translate-x-1/2 -top-12 z-40 px-3 py-1.5 rounded-lg bg-black/90 text-white text-xs shadow-2xl border border-cyan-400/30">
                        {l.alt}
                      </div>
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
