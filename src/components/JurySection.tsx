"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const juryMembers = [
  { 
    name: "Vijeta Pai", 
    role: "Jury Member",
    company: "Cloud Demystified",
    image: "https://cdn.jsdelivr.net/gh/randomaiphoto/build-and-grow-media@main/Vijeta%20Pai.webp"
  },
  { 
    name: "Sunil Mandaliya", 
    role: "Jury Member",
    company: "Tech Expert",
    image: "https://cdn.jsdelivr.net/gh/randomaiphoto/build-and-grow-media@main/Sunil%20Mandaliya.webp"
  },
  { 
    name: "Shailesh Kumar", 
    role: "Jury Member",
    company: "Reliance",
    image: "https://cdn.jsdelivr.net/gh/randomaiphoto/build-and-grow-media@main/Shailesh%20Kumar.webp"
  },
  { 
    name: "Drijesh Patel", 
    role: "Jury Member",
    company: "Senior Director of Engineering, Data Axle",
    image: "https://cdn.jsdelivr.net/gh/randomaiphoto/build-and-grow-media@main/Drijesh%20Patel.webp"
  },
];

const neonColors = ['#7C3AED', '#06B6D4', '#F97316', '#DB2777', '#3B82F6', '#10B981', '#F59E0B'];

const neonStyle = (i: number) => ({
  backgroundImage: `radial-gradient(circle at 30% 30%, ${neonColors[i % neonColors.length]}33 0%, transparent 35%), radial-gradient(circle at 70% 70%, ${neonColors[(i+1) % neonColors.length]}22 0%, transparent 45%)`,
  filter: 'blur(40px)'
} as React.CSSProperties);

export default function JurySection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

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

    // Jury cards animation
    const cards = sectionRef.current.querySelectorAll('.jury-card');
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
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen py-20 px-4 md:px-8 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div ref={containerRef} className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="reveal-heading text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent mb-4">
            Meet Our Jury
          </h2>
          <p className="reveal-heading text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Expert judges evaluating innovative solutions and breakthrough ideas
          </p>
        </div>

        {/* Jury Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {juryMembers.map((jury, index) => (
            <div
              key={index}
              className="jury-card group relative"
              onMouseEnter={() => setHoveredCard(`jury-${index}`)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Neon glow background */}
              <div 
                className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={neonStyle(index)}
              />
              
              {/* Card container */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-1 overflow-hidden border border-white/10 group-hover:border-white/20 transition-all duration-300">
                {/* Animated border gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-pink-500/50 to-purple-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                
                {/* Inner card */}
                <div className="relative bg-black/40 rounded-xl p-4 overflow-hidden">
                  {/* Image container */}
                  <div className="relative aspect-square mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-orange-500/20 to-pink-500/20">
                    <img
                      src={jury.image}
                      alt={jury.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Overlay gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Jury info */}
                  <div className="text-center">
                    <h3 className="text-white font-bold text-lg md:text-xl mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300">
                      {jury.name}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base">
                      {jury.role}
                    </p>
                    {jury.company && (
                      <p className="text-gray-500 text-xs md:text-sm mt-1">
                        {jury.company}
                      </p>
                    )}
                  </div>

                  {/* Animated corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-orange-500/0 group-hover:border-orange-500/50 transition-all duration-300" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-pink-500/0 group-hover:border-pink-500/50 transition-all duration-300" />
                </div>
              </div>

              {/* Floating particles effect */}
              {hoveredCard === `jury-${index}` && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-orange-400 rounded-full animate-float"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.3}s`,
                        animationDuration: `${2 + Math.random()}s`
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 1;
          }
        }
        .animate-float {
          animation: float 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
