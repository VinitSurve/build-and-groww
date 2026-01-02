"use client";

import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const developers = [
  {
    name: "Vinit Surve",
    title: "Full Stack Developer",
    affiliation: "GDG OC Organizer • GDG Cloud Mumbai Member",
    image: "https://rcmsiziewjaxxwhssnvl.supabase.co/storage/v1/object/public/Images/Vinit%20Surve.jpg",
    github: "https://github.com/VinitSurve",
    linkedin: "https://www.linkedin.com/in/surve-vinit/",
    email: "survevinit56@gmail.com",
  },
  {
    name: "Abdullah Shaikh",
    title: "Co-Founder & Product Designer Lixta Network",
    affiliation: "GDG Cloud Mumbai Member",
    image: "https://rcmsiziewjaxxwhssnvl.supabase.co/storage/v1/object/public/Images/abdullah.jpg",
    github: "https://github.com/elite24shaikh",
    linkedin: "https://www.linkedin.com/in/abdullahs24",
    email: "hello.abdullabdev@gmail.com",
  },
  {
    name: "Yash Agrawal",
    title: "Developer & Data Scientist",
    affiliation: "GDG Cloud Mumbai Member",
    image: "https://rcmsiziewjaxxwhssnvl.supabase.co/storage/v1/object/public/Images/yash-agrawal.jpg",
    github: "https://github.com/agrawal-yash",
    linkedin: "https://www.linkedin.com/in/yash-agrawal04",
    email: "agrawal.yash.g@gmail.com",
  },
  {
    name: "Durgesh Keshri",
    title: "GDG Cloud Mumbai Member",
    affiliation: "",
    image: "https://rcmsiziewjaxxwhssnvl.supabase.co/storage/v1/object/public/Images/Durgesh%20Keshri.jpeg",
    github: "https://github.com/Durgeshkeshri",
    linkedin: "https://www.linkedin.com/in/durgesh-keshri-89712b201/",
    email: "durgeshkeshri7@gmail.com",
  },
  {
    name: "Nupur Bhoir",
    title: "UI UX & Graphics Designer",
    affiliation: "GDG Cloud Mumbai Member",
    image: "https://rcmsiziewjaxxwhssnvl.supabase.co/storage/v1/object/public/Images/Nupur%20Bhoir.jpg",
    github: "https://github.com/Nupurbhoir",
    linkedin: "https://www.linkedin.com/in/nupur-bhoir-ab1499329/",
    email: "nupurbhoir21@gmail.com",
  },
  {
    name: "Anuj chandak",
    title: "Design Member",
    affiliation: "GDG Cloud Pune Member",
    image: "https://rcmsiziewjaxxwhssnvl.supabase.co/storage/v1/object/public/Images/anuj%20chandak.jpg",
    // github: "https://github.com/Anujchandak",
    // linkedin: "https://www.linkedin.com/in/anuj-chandak-2803/",
    email: "anujchandakji2803@gmail.com",
  },
  {
    name: "Rohan Sunil Borse",
    title: "Management",
    affiliation: "GDG Cloud Pune Member",
    image: "https://rcmsiziewjaxxwhssnvl.supabase.co/storage/v1/object/public/Images/ROHAN%20BORSE.jpg",
    github: "https://github.com/rohan730",
    linkedin: "https://www.linkedin.com/in/rohan-borse-b0232b223?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "rohanborse7171@gmail.com",
  },
  {
    name: "Yash Bhausaheb Bade",
    title: "Management",
    affiliation: "GDG Cloud Pune Member",
    image: "https://rcmsiziewjaxxwhssnvl.supabase.co/storage/v1/object/public/Images/Yash%20Bade.jpg",
    github: "https://github.com/yashbade-ctrl",
    linkedin: "https://www.linkedin.com/in/yash-bade-2b5916337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "yash.b.bade@gmail.com",
  },
  {
    name: "Grishma Thakare",
    title: "Full Stack Dev",
    affiliation: "GDG Cloud Mumbai Member",
    image: "https://rcmsiziewjaxxwhssnvl.supabase.co/storage/v1/object/public/Images/Grishma%20Thakur.jpeg",
    github: "https://github.com/grishma-blip",
    linkedin: "https://www.linkedin.com/in/grishma-thakare-793732285/",
    email: "grishmathakare21@gmail.com",
  },
  {
    name: "Siddharth Reddy",
    title: "Full Stack Dev & Editor",
    affiliation: "GDG Cloud Mumbai Member",
    image: "https://rcmsiziewjaxxwhssnvl.supabase.co/storage/v1/object/public/Images/Siddharth%20Reddy.jpg",
    github: "https://github.com/SidReddy-24",
    linkedin: "https://www.linkedin.com/in/the-siddharth-reddy",
    email: "sidreddy.onwork@gmail.com",
  },
  {
    name: "Sumedh Patil",
    title: "Developer",
    affiliation: "GDG Cloud Mumbai Member",
    image: "https://rcmsiziewjaxxwhssnvl.supabase.co/storage/v1/object/public/Images/Sumedh.jpeg",
    github: "https://github.com/Sumedh1102",
    linkedin: "linkedin.com/in/sumedh-patil-640512251",
    email: "psumedh31@gmail.com",
  },
  // Add more members below - yahan apne naye members add kar
  {
    name: "Varun Kakapuri",
    title: "Management",
    affiliation: "GDG Cloud Pune Member",
    image: "https://rcmsiziewjaxxwhssnvl.supabase.co/storage/v1/object/public/Images/varun%20kakapuri.jpeg",
    github: "https://github.com/Viisek",
    linkedin: "https://www.linkedin.com/in/varunkakapuri?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    email: "varun.kakapuri@gmail.com",
  },
  {
    name: "Darshan Prakash Chavan",
    title: "Designer",
    affiliation: "GDG Cloud Pune Member",
    image: "https://rcmsiziewjaxxwhssnvl.supabase.co/storage/v1/object/public/Images/Darshan%20Chavan.jpeg",
    github: "https://github.com/DarshanChavan28",
    linkedin: "www.linkedin.com/in/darshan-chavan-0200528d",
    email: "darshanchavan0228@gmail.com",
  },
  {
    name: "Abhisar Choubey",
    title: "Developer",
    affiliation: "GDG Cloud Pune Member",
    image: "https://rcmsiziewjaxxwhssnvl.supabase.co/storage/v1/object/public/Images/Abhisar%20Choubey.jpg",
    github: "https://github.com/forkzen",
    linkedin: "https://www.linkedin.com/in/abhisar-choubey",
    email: "abhisar.choubey@gmail.com",
  },
  {
    name: "Khushi Rahane ",
    title: "Data Scientist",
    affiliation: "GDG Cloud Pune Member",
    image: "https://rcmsiziewjaxxwhssnvl.supabase.co/storage/v1/object/public/Images/sleepy%20koala.jpg",
    github: "https://github.com/KhushiRahane",
    linkedin: "https://www.linkedin.com/in/khushi-rahane-26718b28a/",
    email: "khushirahane74@gmail.com",
  },
  {
    name: "Darp Lalani",
    title: "Full Stack Dev",
    affiliation: "GDG Cloud Pune Member",
    image: "https://rcmsiziewjaxxwhssnvl.supabase.co/storage/v1/object/public/Images/Lalani%20Darp.JPG",
    github: "https://github.com/darplalani08",
    linkedin: "https://www.linkedin.com/in/darplalani0",
    email: "lalanidarp08@gmail.com",
  },
  {
    name: "Soha Kulkarni ",
    title: "UI/UX Designer",
    affiliation: "GDG Cloud Pune Member",
    image: "https://rcmsiziewjaxxwhssnvl.supabase.co/storage/v1/object/public/Images/SOHA.jpg",
    github: "https://github.com/sohakulkarni20",
    linkedin: "https://www.linkedin.com/in/soha-kulkarni-66782a255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "24010066@pvgcoet.ac.in",
  },
  {
    name: "Priyal Sathe",
    title: "Backend Developer",
    affiliation: "GDG Cloud Pune Member",
    image: "https://rcmsiziewjaxxwhssnvl.supabase.co/storage/v1/object/public/Images/img%20-%20mei.jpeg",
    github: "https://github.com/PriyalSathe",
    linkedin: "https://www.linkedin.com/in/priyal-sathe",
    email: "canzeesathe11@gmail.com",
  },
  {
    name: "Omkar Davare",
    title: "Frontend Developer",
    affiliation: "GDG Cloud Pune Member",
    image: "https://rcmsiziewjaxxwhssnvl.supabase.co/storage/v1/object/public/Images/Omkar%20Davare.jpeg",
    github: "https://github.com/omkarr001-ai",
    linkedin: "https://www.linkedin.com/in/omkar-davare-488b9330a/",
    email: "omkardavare69@gmail.com",
  },
  {
    name: "Vinayak Govindalwar",
    title: "Frontend Developer",
    affiliation: "GDG Cloud Pune Member",
    image: "https://rcmsiziewjaxxwhssnvl.supabase.co/storage/v1/object/public/Images/Vinayak%20Govindalwar.jpg",
    // github: "https://github.com/omkarr001-ai",
    linkedin: "https://www.linkedin.com/in/vinayak-govindalwar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "Vinayakgovindalwar@gmail.com",
  },
  {
    name: "Swarnim Shamgaonkar",
    title: "Frontend Developer",
    affiliation: "GDG Cloud Pune Member",
    image: "https://rcmsiziewjaxxwhssnvl.supabase.co/storage/v1/object/public/Images/Swarnim%20Shamgaonkar.jpg",
    github: "https://github.com/Swarnim31",
    linkedin: "https://www.linkedin.com/in/swarnim-shamgaonkar-b725472b1/",
    email: "swarnimsham@gmail.com",
  },
  {
    name: "Arth Onkar Dhavale ",
    title: "Frontend Developer",
    affiliation: "GDG Cloud Pune Member",
    image: "https://rcmsiziewjaxxwhssnvl.supabase.co/storage/v1/object/public/Images/Arth%20Dhavale.jpg",
    github: "https://github.com/ArthDhavale",
    linkedin: "https://www.linkedin.com/in/arth-dhavale-053136309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "arth.o.dhavale@gmail.com",
  },
];

// Kitne initially dikhane hain
const INITIAL_VISIBLE_COUNT = 6;

export default function DevelopersSection() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [activeDevId, setActiveDevId] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasPlayedRef = useRef(false);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  const neonColors = ['#06B6D4', '#7C3AED', '#F97316', '#06D6A0'];
  const neonStyle = (i: number) => ({
    backgroundImage: `radial-gradient(circle at 30% 30%, ${neonColors[i % neonColors.length]}33 0%, transparent 25%), radial-gradient(circle at 70% 70%, ${neonColors[(i + 1) % neonColors.length]}22 0%, transparent 35%)`,
    filter: 'blur(36px)'
  } as React.CSSProperties);

  // Decide which developers to show
  const visibleDevelopers = showAll ? developers : developers.slice(0, INITIAL_VISIBLE_COUNT);
  const hasMore = developers.length > INITIAL_VISIBLE_COUNT;

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

  // Animate new cards when Load More is clicked
  useEffect(() => {
    if (!showAll) return;

    const cardsContainer = cardsRef.current;
    if (!cardsContainer) return;

    const newCards = Array.from(cardsContainer.querySelectorAll('.dev-photo')).slice(INITIAL_VISIBLE_COUNT);
    if (newCards.length === 0) return;

    gsap.set(newCards, { opacity: 0, scale: 0.95 });
    gsap.to(newCards, { 
      opacity: 1, 
      scale: 1, 
      duration: 0.4, 
      ease: 'power3.out', 
      stagger: 0.06 
    });
  }, [showAll]);

  return (
    <section ref={sectionRef} className="relative py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white">Our Team</h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-400 max-w-2xl mx-auto mt-2 px-4">Meet the team behind this initiative</p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {visibleDevelopers.map((d, i) => (
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

              <div className={`absolute left-0 right-0 bottom-0 p-3 z-20 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 ${activeDevId === `dev-${i}` ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'}`}>
                <div className="text-white font-semibold text-sm sm:text-base md:text-lg">{d.name}</div>
              </div>

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

        {/* Load More Button */}
        {hasMore && !showAll && (
          <div className="mt-8 sm:mt-10 md:mt-12 flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="group relative px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Load More</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300" />
            </button>
          </div>
        )}

        {/* Show Less Button (optional) */}
        {showAll && (
          <div className="mt-8 sm:mt-10 md:mt-12 flex justify-center">
            <button
              onClick={() => {
                setShowAll(false);
                // Scroll back to top of section
                sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="px-8 py-3 bg-gray-700 text-white font-semibold rounded-full shadow-lg hover:bg-gray-600 transition-all duration-300"
            >
              Show Less
            </button>
          </div>
        )}
      </div>
    </section>
  );
}