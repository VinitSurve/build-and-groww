"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const valueBlocks = [
  {
    title: "Developer Reach",
    desc: "Engage thousands of high-intent developers across Mumbai & Pune.",
  },
  {
    title: "Brand Visibility",
    desc: "Prominent exposure across events, social channels, and community platforms.",
  },
  {
    title: "Talent Access",
    desc: "Direct access to skilled AI & cloud builders before the market.",
  },
  {
    title: "Community Impact",
    desc: "Support hands-on learning and real-world innovation at scale.",
  },
];

const neonColors = ['#7C3AED', '#06B6D4', '#F97316', '#DB2777', '#3B82F6'];

const neonStyle = (i: number) => ({
  backgroundImage: `radial-gradient(circle at 30% 30%, ${neonColors[i % neonColors.length]}33 0%, transparent 35%), radial-gradient(circle at 70% 70%, ${neonColors[(i+1) % neonColors.length]}22 0%, transparent 45%)`,
  filter: 'blur(40px)'
} as React.CSSProperties);

export default function SponsorsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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

    // (vertical rail removed)

    // Cards entrance animation
    const cards = sectionRef.current.querySelectorAll(".sponsor-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 60, rotateX: 15 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 75%",
        }
      }
    );

    // Neon pulse for card backgrounds
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

    // CTA buttons scale-in
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".cta-btn"),
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: sectionRef.current.querySelector(".cta-container"),
          start: "top 80%",
        }
      }
    );

  }, []);

  return (
    <section
      ref={sectionRef}
      id="sponsors"
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
                <span className="text-xs sm:text-sm text-cyan-300 font-medium tracking-widest uppercase">Exclusive Opportunity</span>
              </div>
              
              <h2 className="reveal-heading text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 mb-4 sm:mb-6">
                Call for Sponsors
              </h2>
              
              <div className="reveal-heading w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent rounded-full mx-auto mb-4 sm:mb-6" />
              
              <p className="reveal-heading text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                Partner with India's next-generation AI hackathon and gain
                <span className="text-cyan-400 font-semibold"> unmatched visibility</span>,
                <span className="text-purple-400 font-semibold"> talent access</span>, and
                <span className="text-blue-400 font-semibold"> ecosystem impact</span>.
              </p>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 items-start relative">
              
              {/* Left: CTA Section */}
              <div className="lg:col-span-2 space-y-6 sm:space-y-8 cta-container">
                <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 shadow-2xl">
                  <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-cyan-400/30 to-purple-500/20 rounded-full blur-2xl" />
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Why Sponsor?</h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    Build & Grow AI Hackathon brings together the most motivated
                    developers, builders, and innovators. Sponsoring positions your brand
                    at the <span className="text-cyan-400 font-semibold">center of real-world AI adoption</span>.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://forms.gle/5ST8XkEszrgHCKLg9" target="_blank"
                    className="cta-btn group relative text-center px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105 overflow-hidden"
                  >
                    <span className="relative z-10 ">Become a Sponsor</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1HZvnBm8kNEaroL8eHsPJzuooqlTOZixf/view?usp=drivesdk"
                    target="_blank"
                    className="cta-btn px-8 py-4 rounded-full border-2 border-cyan-400/40 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-400/60 font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] text-center"
                  >
                    Download Deck
                  </a>
                </div>
              </div>

              {/* Right: Value Cards with Vertical Rail */}
              <div className="lg:col-span-3 relative" ref={cardsRef}>
                {/* vertical rail removed */}

                <div className="grid sm:grid-cols-2 gap-6 lg:pl-8">
                  {valueBlocks.map((block, i) => (
                    <div
                      key={block.title}
                      className="sponsor-card group relative"
                      onMouseEnter={() => setHoveredCard(i)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      {/* Neon glow background */}
                      <div
                        className="neon-glow absolute inset-0 z-0 opacity-25 group-hover:opacity-80 transition-all duration-500 rounded-3xl"
                        style={neonStyle(i)}
                      />

                      {/* Glass card */}
                      <div className="relative z-10 bg-gradient-to-br from-white/8 to-white/[0.02] backdrop-blur-2xl border border-cyan-400/20 rounded-3xl p-6 sm:p-7 flex flex-col shadow-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02] group-hover:shadow-[0_20px_60px_-12px_rgba(6,182,212,0.4)] group-hover:border-cyan-400/40" style={{ minHeight: 180 }}>
                        
                        {/* timeline dot removed */}

                        {/* Icon badge removed (no emojis) */}

                        {/* Content */}
                        <h3 className="font-bold text-white text-lg sm:text-xl mb-2 tracking-wide group-hover:text-cyan-300 transition-colors">
                          {block.title}
                        </h3>
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed flex-1">
                          {block.desc}
                        </p>

                        {/* Animated bottom accent */}
                        <div className="mt-4 h-[3px] rounded-full bg-gradient-to-r from-cyan-400/50 via-purple-500/50 to-blue-500/50 overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 transition-all duration-700"
                            style={{ 
                              width: hoveredCard === i ? '100%' : '0%',
                              boxShadow: hoveredCard === i ? '0 0 10px rgba(6,182,212,0.8)' : 'none'
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
