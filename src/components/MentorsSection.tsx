"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const mentors = [
  { 
    name: "Biswanath Giri", 
    role: "Mentor",
    company: "Google Cloud Technical Architect",
    image: "https://cdn.jsdelivr.net/gh/randomaiphoto/build-and-grow-media@main/Biswanath.webp"
  },
  { 
    name: "Suraj Pujari", 
    role: "Mentor",
    company: "Customer Engineer, Google",
    image: "https://cdn.jsdelivr.net/gh/randomaiphoto/build-and-grow-media@main/Suraj%20Pujari.png"
  },
  { 
    name: "Rakesh Varade", 
    role: "Mentor",
    company: "Infrastructure Modernisation Specialist, Google",
    image: "https://cdn.jsdelivr.net/gh/randomaiphoto/build-and-grow-media@main/Rakesh%20Varade.webp"
  },
  { 
    name: "Asmita Khuspe", 
    role: "Mentor",
    company: "Platform Engineer, NCS",
    image: "https://cdn.jsdelivr.net/gh/randomaiphoto/build-and-grow-media@main/asmita.jpg"
  },
  { 
    name: "Vikas Giri", 
    role: "Mentor",
    company: "Cloud Solution Architect, Amazon AWS India",
    image: "https://cdn.jsdelivr.net/gh/randomaiphoto/build-and-grow-media@main/Vikas%20Giri.jpg"
  },
  { 
    name: "Namrata More", 
    role: "Mentor",
    company: "Product Manager, OneCard (FPL Technologies)",
    image: "https://cdn.jsdelivr.net/gh/randomaiphoto/build-and-grow-media@main/namrata.webp"
  },
  { 
    name: "Haider Khursheed", 
    role: "Mentor",
    company: "Founder and CEO, Lixta Network",
    image: "https://cdn.jsdelivr.net/gh/randomaiphoto/build-and-grow-media@main/Haider%20Khursheed.webp"
  },
  { 
    name: "Dr. Varun Aggarwala", 
    role: "Mentor",
    company: "Founding Faculty, Jio Institute",
    image: "https://cdn.jsdelivr.net/gh/randomaiphoto/build-and-grow-media@main/Varun.webp"
  },
  { 
    name: "Mohit Bhimrajka", 
    role: "Mentor",
    company: "Forward Deployed AI Engineer, Supertriyl",
    image: "https://cdn.jsdelivr.net/gh/randomaiphoto/build-and-grow-media@main/Mohit.webp"
  },
  { 
    name: "Akshay Shah", 
    role: "Mentor",
    company: "Founder, Goodex Infotech",
    image: "https://cdn.jsdelivr.net/gh/randomaiphoto/build-and-grow-media@main/Akshay.webp"
  },
  { 
    name: "Kailash Sharma", 
    role: "Mentor",
    company: "SDE-1, Shaadi.com",
    image: "https://cdn.jsdelivr.net/gh/randomaiphoto/build-and-grow-media@main/Kailash.webp"
  },
  { 
    name: "Yogesh Dhavale", 
    role: "Mentor",
    company: "Lead GenAI Specialist, LTIMindtree",
    image: "https://cdn.jsdelivr.net/gh/randomaiphoto/build-and-grow-media@main/Yogesh%20.jpg"
  },
  { 
    name: "Anand Kumar", 
    role: "Mentor",
    company: "PhD Student, IIT Bombay",
    image: "https://cdn.jsdelivr.net/gh/randomaiphoto/build-and-grow-media@main/Anand%20Anand%20.jpg"
  },
  { 
    name: "Mohammed Kaif Ansari", 
    role: "Mentor",
    company: "Software Engineer, Fidelity Investments",
    image: "https://cdn.jsdelivr.net/gh/randomaiphoto/build-and-grow-media@main/Mohmmed%20kaif.webp"
  },
  { 
    name: "Rushabh Vasa", 
    role: "Mentor",
    company: "Tech Expert",
    image: "https://cdn.jsdelivr.net/gh/randomaiphoto/build-and-grow-media@main/Rushabh%20Vasa.png"
  },
];

const neonColors = ['#7C3AED', '#06B6D4', '#F97316', '#DB2777', '#3B82F6', '#10B981', '#F59E0B'];

const neonStyle = (i: number) => ({
  backgroundImage: `radial-gradient(circle at 30% 30%, ${neonColors[i % neonColors.length]}33 0%, transparent 35%), radial-gradient(circle at 70% 70%, ${neonColors[(i+1) % neonColors.length]}22 0%, transparent 45%)`,
  filter: 'blur(40px)'
} as React.CSSProperties);

export default function MentorsSection() {
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

    // Mentor cards animation
    const cards = sectionRef.current.querySelectorAll('.mentor-card');
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
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div ref={containerRef} className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="reveal-heading text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-4">
            Meet Our Mentors
          </h2>
          <p className="reveal-heading text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Industry experts guiding the next generation of AI innovators
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="mentor-card group relative"
              onMouseEnter={() => setHoveredCard(`mentor-${index}`)}
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
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/50 to-blue-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                
                {/* Inner card */}
                <div className="relative bg-black/40 rounded-xl p-4 overflow-hidden">
                  {/* Image container */}
                  <div className="relative aspect-square mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-cyan-500/20">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Overlay gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Mentor info */}
                  <div className="text-center">
                    <h3 className="text-white font-bold text-lg md:text-xl mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                      {mentor.name}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base">
                      {mentor.role}
                    </p>
                    {mentor.company && (
                      <p className="text-gray-500 text-xs md:text-sm mt-1">
                        {mentor.company}
                      </p>
                    )}
                  </div>

                  {/* Animated corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500/0 group-hover:border-cyan-500/50 transition-all duration-300" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-500/0 group-hover:border-purple-500/50 transition-all duration-300" />
                </div>
              </div>

              {/* Floating particles effect */}
              {hoveredCard === `mentor-${index}` && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float"
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

