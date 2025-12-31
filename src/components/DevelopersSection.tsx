"use client";

import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const developers = [
  {
    name: "Vinit Surve",
    title: "Full Stack Developer",
    affiliation: "GDG OC Organizer • GDG Cloud Mumbai Member",
    image: "/Vinit Surve.jpg",
    github: "https://github.com/VinitSurve",
    linkedin: "https://www.linkedin.com/in/surve-vinit/",
    email: "survevinit56@gmail.com",
  },
  {
    name: "Abdullah Shaikh",
    title: "UI UX Designer",
    affiliation: "GDG Cloud Mumbai Member",
    image: "/abdullah.jpg",
    github: "https://github.com/elite24shaikh",
    linkedin: "https://www.linkedin.com/in/abdullahs24",
    email: "hello.abdullabdev@gmail.com",
  },
  {
    name: "Yash Agrawal",
    title: "Developer & Data Scientist",
    affiliation: "GDG Cloud Mumbai Member",
    image: "/yash-agrawal.jpg",
    github: "https://github.com/agrawal-yash",
    linkedin: "https://www.linkedin.com/in/yash-agrawal04",
    email: "agrawal.yash.g@gmail.com",
  },
  {
    name: "Durgesh Keshri",
    title: "GDG Cloud Mumbai Member",
    affiliation: "",
    image: "/Durgesh Keshri.jpeg",
    github: "https://github.com/Durgeshkeshri",
    linkedin: "https://www.linkedin.com/in/durgesh-keshri-89712b201/",
    email: "durgeshkeshri7@gmail.com",
  },
  {
    name: "Nupur Bhoir",
    title: "UI UX & Graphics Designer",
    affiliation: "GDG Cloud Mumbai Member",
    image: "/Nupur Bhoir.jpg",
    github: "https://github.com/Nupurbhoir",
    linkedin: "https://www.linkedin.com/in/nupur-bhoir-ab1499329/",
    email: "nupurbhoir21@gmail.com",
  },
  {
    name: "Grishma Thakare",
    title: "Full Stack Dev",
    affiliation: "GDG Cloud Mumbai Member",
    image: "/Grishma Thakur.jpeg",
    github: "https://github.com/grishma-blip",
    linkedin: "https://www.linkedin.com/in/grishma-thakare-793732285/",
    email: "grishmathakare21@gmail.com",
  },
  {
    name: "Siddharth Reddy",
    title: "Full Stack Dev & Editor",
    affiliation: "GDG Cloud Mumbai Member",
    image: "/Siddharth Reddy.jpg",
    github: "https://github.com/SidReddy-24",
    linkedin: "https://www.linkedin.com/in/the-siddharth-reddy",
    email: "sidreddy.onwork@gmail.com",
  },
];

export default function DevelopersSection() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [activeDevId, setActiveDevId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasPlayedRef = useRef(false);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  const neonColors = ['#06B6D4', '#7C3AED', '#F97316', '#06D6A0'];
  const neonStyle = (i: number) => ({
    backgroundImage: `radial-gradient(circle at 30% 30%, ${neonColors[i % neonColors.length]}33 0%, transparent 25%), radial-gradient(circle at 70% 70%, ${neonColors[(i + 1) % neonColors.length]}22 0%, transparent 35%)`,
    filter: 'blur(36px)'
  } as React.CSSProperties);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || hasPlayedRef.current) {
      setAnimationComplete(true);
      return;
    }

    hasPlayedRef.current = true;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const cardsContainer = cardsRef.current;
        const photos = cardsContainer ? Array.from(cardsContainer.querySelectorAll('.dev-photo')) as HTMLElement[] : [];

        if (prefersReducedMotion || photos.length === 0) {
          photos.forEach((p) => { p.style.opacity = '1'; p.style.transform = 'none'; });
        } else {
          gsap.set(photos, { opacity: 0, scale: 0.98 });
          gsap.to(photos, { opacity: 1, scale: 1, duration: 0.45, ease: 'power3.out', stagger: 0.08 });
        }

        setAnimationComplete(true);
        observer.disconnect();
      });
    }, { threshold: 0.2 });

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white">Our Team</h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-400 max-w-2xl mx-auto mt-2 px-4">Meet the team behind this initiatve</p>
        </div>

        <div ref={cardsRef} className={`grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6`}>
          {developers.map((d, i) => (
            <div
              key={i}
              onClick={(e) => {
                if ((e.target as HTMLElement).closest('a')) return;
                setActiveDevId(activeDevId === `dev-${i}` ? null : `dev-${i}`);
              }}
              className="developer-card group relative aspect-[4/5] overflow-hidden rounded-xl shadow-xl"
            >
              <div className={`absolute inset-0 rounded-xl transition-opacity duration-400 z-0 pointer-events-none ${activeDevId === `dev-${i}` ? 'opacity-90' : 'opacity-0 group-hover:opacity-80'}`} style={neonStyle(i)} />
              <img src={d.image} alt={d.name} className="relative z-10 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 dev-photo" />

              {/* name bar always visible (hidden on hover/active) */}
              <div className={`absolute left-0 right-0 bottom-0 p-3 z-20 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 ${activeDevId === `dev-${i}` ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'}`}>
                <div className="text-white font-semibold text-sm sm:text-base md:text-lg">{d.name}</div>
              </div>

              {/* hover details slide up */}
              <div className={`absolute left-0 right-0 bottom-0 p-4 z-30 transform transition-transform duration-400 bg-gradient-to-t from-black/90 to-transparent ${activeDevId === `dev-${i}` ? 'translate-y-0' : 'translate-y-full'} group-hover:translate-y-0`}>
                <div className="text-indigo-300 font-semibold text-sm sm:text-base">{d.title}</div>
                <div className="text-gray-300 text-xs sm:text-sm mt-1 line-clamp-2">{d.affiliation}</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a href={d.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs sm:text-sm bg-[#24292e] text-white px-2.5 py-1 rounded-full border border-white/6">GitHub</a>
                  <a href={d.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs sm:text-sm bg-[#0A66C2] text-white px-2.5 py-1 rounded-full border border-white/6">LinkedIn</a>
                  <a href={`mailto:${d.email}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs sm:text-sm bg-[#D44638] text-white px-2.5 py-1 rounded-full border border-white/6">Email</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
