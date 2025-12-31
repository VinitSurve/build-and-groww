"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const logos = [
  { src: "/google-for-developers.png", alt: "Google for Developers", href: "https://developers.google.com" },
  { src: "/Ai_Impact_Summit.png", alt: "AI Impact Summit", href: "#" },
  // future logos can be added here
];

const neon = ['#7C3AED', '#06B6D4', '#F97316', '#DB2777'];
const neonStyle = (i: number) => ({
  backgroundImage: `radial-gradient(circle at 30% 30%, ${neon[i % neon.length]}22 0%, transparent 25%), radial-gradient(circle at 70% 70%, ${neon[(i+1) % neon.length]}11 0%, transparent 35%)`,
  filter: 'blur(30px)'
} as React.CSSProperties);

export default function PartnersSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [tooltipVisibleId, setTooltipVisibleId] = useState<string | null>(null);
  const longPressRef = useRef<{[key:string]: {timer?: number, triggered?: boolean}}>({});

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const items = Array.from(el.querySelectorAll('.partner-card')) as HTMLElement[];
    if (items.length === 0) return;
    gsap.set(items, { opacity: 0, y: 24, scale: 0.98 });
    gsap.to(items, { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'power3.out', stagger: 0.08 });

    // Neon pulse animation for neon layers
    const neonLayers = Array.from(el.querySelectorAll('.neon-layer')) as HTMLElement[];
    if (neonLayers.length) {
      gsap.to(neonLayers, {
        scale: 1.06,
        opacity: 0.9,
        duration: 2.2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: { each: 0.15 }
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
    <section id="partners" className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-white tracking-wide uppercase">Partners</h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">We’re grateful to the organisations supporting this initiative. Reach out if you’d like to partner with us.</p>
        </div>

        <div ref={containerRef} className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
          {logos.map((l, i) => {
            const id = `partner-${i}`;
            return (
              <a
                key={i}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="partner-card relative w-full max-w-xs group"
                onPointerDown={handlePointerDown(id)}
                onPointerUp={clearLongPress(id)}
                onPointerLeave={clearLongPress(id)}
                onPointerCancel={clearLongPress(id)}
                onClick={handleClick(id)}
              >
                <div className="relative rounded-2xl overflow-hidden">
                  {/* neon glow layer (pulses on hover) */}
                  <div
                    className="neon-layer absolute inset-0 z-0 transition-all duration-500 transform scale-95 opacity-20 group-hover:scale-105 group-hover:opacity-95"
                    style={neonStyle(i)}
                  />

                  {/* glass card */}
                  <div className="relative z-10 bg-white/3 backdrop-blur-md border border-white/6 rounded-2xl p-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-lg">
                    <img src={l.src} alt={l.alt} className="h-16 sm:h-20 md:h-24 object-contain" />
                  </div>

                  {/* badge on hover shows org name */}
                  <div className="absolute left-3 bottom-3 px-3 py-1 rounded-full bg-white/6 text-xs text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">{l.alt}</div>

                  {/* long-press tooltip for touch devices */}
                  {tooltipVisibleId === id && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 -top-10 z-40 px-3 py-1 rounded-md bg-black/80 text-white text-xs shadow-lg">
                      {l.alt}
                    </div>
                  )}
                </div>
              </a>
            );
          })}
          {/* Removed styled-jsx scoped keyframes to avoid SSR/CSR class mismatches.
              GSAP handles the neon pulse animation on the client. */}
        </div>
      </div>
    </section>
  );
}
