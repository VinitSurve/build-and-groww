"use client";

import { m } from "framer-motion";
import { Mail, MailOpen } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const mumbaiOrganizers = [
  { name: "Abhishek Sharma", role: "Lead Cloud Engineer", company: "Searce Inc", bio: "Google Developer Expert · Cloud Adviser · Tech Speaker", image: "https://rcmsiziewjaxxwhssnvl.supabase.co/storage/v1/object/public/Images/abhishek_sharma_RQClIHO.webp", profile: "https://linktr.ee/acloudpotato", github: "https://github.com/acloudpotato", linkedin: "https://www.linkedin.com/in/acloudpotato/" },
  { name: "Niharika Dhanik", role: "Cloud Engineer", company: "Searce Inc", bio: "Cloud whiz, community builder — obsessed with observability and sharing knowledge.", image: "/Niharika Dhanik.jpeg", profile: "https://linktr.ee/niharikadhanik", github: "https://github.com/niharicka2602/", linkedin: "https://www.linkedin.com/in/niharikadhanik/" },
  { name: "Rushabh Mahale", role: "Cloud Engineer", company: "Searce inc", image: "/rushabh_mahale_N4nLK69.webp", profile: "https://gdg.community.dev/u/m4yrkb/#/about", github: "https://github.com/rushabhmahale", linkedin: "https://www.linkedin.com/in/rushabh-mahale-9507701a5" },
  { name: "Nikunj Shah", role: "Sr. AVP- India & Mauritius", company: "Winjit Tech", image: "/nikunj_shah_3SB4kkE.webp", profile: "#", github: "#", linkedin: "#" }
];

const puneOrganizers = [
  { name: "Antrixsh Gupta", role: "GDG Organizer", company: "", image: "/antrixsh_gupta_imgupscaler.ai_V1(Fast)_2K.png", linkedin: "https://www.linkedin.com/in/antrixshgupta" },
  { name: "Pratik Kale", role: "Co-Organizer", company: "Impulsive Web", image: "/pratik_kale_JE4xYmT_imgupscaler.ai_V1(Fast)_2K.png", profile: "pratikkale.in", email: "ppvkale@gmail.com", linkedin: "https://www.linkedin.com/in/pratikkalein/" },
  { name: "Dnyanada Mahajan", role: "Co Organizer", company: "Gen Digital - NortonLifeLock", image: "/dnyanada_mahajan_imgupscaler.ai_V1(Fast)_2K.png", linkedin: "linkedin.com/in/dnyanadam" },
  { name: "Vatsal Jain", role: "Event Organizer", company: "vConstruct Pvt Ltd", image: "/vatsal_jain_9uuB5SU_imgupscaler.ai_V1(Fast)_2K.png", linkedin: "linkedin.com/in/vatsaljain0205" }
];

export default function OrganizersSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [activeOrganizerId, setActiveOrganizerId] = useState<string | null>(null);
  const hasPlayedRef = useRef(false);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || hasPlayedRef.current) {
      setAnimationComplete(true);
      return;
    }

    hasPlayedRef.current = true;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationComplete) {
            setAnimationComplete(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [animationComplete]);

  return (
    <section id="organizers" ref={sectionRef} className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-extralight text-white tracking-[0.2em] uppercase mb-4">
            ORGANIZERS
          </h2>
        </div>

        <div className="space-y-20">
          {/* Mumbai Section */}
          <div>
            <h3 className="text-2xl md:text-3xl font-light text-white tracking-[0.1em] uppercase mb-8 border-b border-white/10 pb-4">
              GDG Cloud Mumbai
            </h3>
            <div
              ref={cardsRef}
              className={`grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 transition-opacity duration-1000 ${animationComplete ? 'opacity-100' : 'opacity-0'
                }`}
            >
              {mumbaiOrganizers.map((p, i) => (
                <div
                  key={`mumbai-${i}`}
                  onClick={(e) => {
                    if ((e.target as HTMLElement).closest('a')) return;
                    setActiveOrganizerId(activeOrganizerId === `mumbai-${i}` ? null : `mumbai-${i}`);
                  }}
                  className="organizer-card group relative aspect-[4/5] overflow-hidden cursor-pointer rounded-xl"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className={`relative z-10 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 ${activeOrganizerId === `mumbai-${i}` ? 'scale-105' : ''}`}
                  />

                  {/* subtle persistent dim overlay to improve contrast */}
                  <div className="absolute inset-0 border border-white/5 opacity-40 rounded-xl z-20 pointer-events-none" />

                  {/* Name always visible in a subtle bar (hidden on hover/active) */}
                  <div className={`absolute left-0 right-0 bottom-0 p-3 z-30 bg-gradient-to-t from-black/95 to-transparent transition-opacity duration-300 ${activeOrganizerId === `mumbai-${i}` ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'}`}>
                    <div className="text-white font-semibold text-sm sm:text-base md:text-lg leading-tight">
                      {p.name}
                    </div>
                  </div>

                  {/* Hover details slide up */}
                    <div className={`absolute left-0 right-0 bottom-0 p-4 z-40 transform transition-transform duration-400 bg-black/95 ${activeOrganizerId === `mumbai-${i}` ? 'translate-y-0' : 'translate-y-full'} group-hover:translate-y-0`}>
                    <div className="text-indigo-300 font-semibold text-sm sm:text-base md:text-lg leading-tight">
                      {p.role}
                    </div>
                    {p.company && (
                      <div className="text-gray-300 text-[10px] sm:text-xs mt-1 line-clamp-2">
                        {p.company}
                      </div>
                    )}
                    {(p as any).bio && (
                      <div className="text-gray-300 text-xs sm:text-sm mt-2 line-clamp-3">
                        {(p as any).bio}
                      </div>
                    )}
                    <div className="mt-3 flex flex-wrap gap-2 relative z-50">
                        { (p as any).github && (
                          <a href={(p as any).github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs sm:text-sm bg-[#24292e] text-white px-2.5 py-1 rounded-full border border-white/6 hover:bg-[#2f363d] transition-colors">GitHub</a>
                        )}
                        { (p as any).linkedin && (
                          <a href={(p as any).linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs sm:text-sm bg-[#0A66C2] text-white px-2.5 py-1 rounded-full border border-white/6 hover:bg-[#004182] transition-colors">LinkedIn</a>
                        )}
                        { (p as any).email && (
                          <a href={`mailto:${(p as any).email}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs sm:text-sm bg-[#D44638] text-white px-2.5 py-1 rounded-full border border-white/6 hover:bg-[#b23121] transition-colors">Email</a>
                        )}
                        { (p as any).profile && (
                          <a href={(p as any).profile} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs sm:text-sm bg-white/6 text-white px-2.5 py-1 rounded-full border border-white/6 hover:bg-white/10 transition-colors">Profile</a>
                        )}
                      </div>
                    {/* removed 'View' button per request */}
                  </div>

                  <div className="absolute inset-0 border border-white/5 opacity-40 rounded-xl z-10 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Pune Section */}
          <div>
            <h3 className="text-2xl md:text-3xl font-light text-white tracking-[0.1em] uppercase mb-8 border-b border-white/10 pb-4">
              GDG Cloud Pune
            </h3>
            <div
              className={`grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 transition-opacity duration-1000 ${animationComplete ? 'opacity-100' : 'opacity-0'
                }`}
            >
              {puneOrganizers.map((p, i) => (
                <div
                  key={`pune-${i}`}
                  onClick={(e) => {
                    if ((e.target as HTMLElement).closest('a')) return;
                    setActiveOrganizerId(activeOrganizerId === `pune-${i}` ? null : `pune-${i}`);
                  }}
                  className="organizer-card group relative aspect-[4/5] overflow-hidden bg-zinc-900 cursor-pointer rounded-xl"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className={`w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 ${activeOrganizerId === `pune-${i}` ? 'scale-105' : ''}`}
                  />

                  <div className="absolute inset-0 border border-white/5 opacity-40 rounded-xl z-20 pointer-events-none" />

                  <div className={`absolute left-0 right-0 bottom-0 p-3 bg-gradient-to-t from-black/95 to-transparent transition-opacity duration-300 ${activeOrganizerId === `pune-${i}` ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'}`}>
                    <div className="text-white font-semibold text-sm sm:text-base md:text-lg leading-tight">
                      {p.name}
                    </div>
                  </div>

                  <div className={`absolute left-0 right-0 bottom-0 p-4 transform transition-transform duration-400 bg-black/95 ${activeOrganizerId === `pune-${i}` ? 'translate-y-0' : 'translate-y-full'} group-hover:translate-y-0`}>
                    <div className="text-indigo-300 font-semibold text-sm sm:text-base md:text-lg leading-tight">
                      {p.role}
                    </div>
                    {p.company && (
                      <div className="text-gray-300 text-[10px] sm:text-xs mt-1 line-clamp-2">
                        {p.company}
                      </div>
                    )}
                    {(p as any).bio && (
                      <div className="text-gray-300 text-xs sm:text-sm mt-2 line-clamp-3">
                        {(p as any).bio}
                      </div>
                    )}
                    <div className="mt-3 flex flex-wrap gap-2 relative z-50">
                      { (p as any).github && (
                        <a href={(p as any).github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs sm:text-sm bg-[#24292e] text-white px-2.5 py-1 rounded-full border border-white/6 hover:bg-[#2f363d] transition-colors">GitHub</a>
                      )}
                      { (p as any).linkedin && (
                        <a href={(p as any).linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs sm:text-sm bg-[#0A66C2] text-white px-2.5 py-1 rounded-full border border-white/6 hover:bg-[#004182] transition-colors">LinkedIn</a>
                      )}
                      { (p as any).email && (
                        <a href={`mailto:${(p as any).email}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs sm:text-sm bg-[#D44638] text-white px-2.5 py-1 rounded-full border border-white/6 hover:bg-[#b23121] transition-colors">Email</a>
                      )}
                      { (p as any).profile && (
                        <a href={(p as any).profile} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs sm:text-sm bg-white/6 text-white px-2.5 py-1 rounded-full border border-white/6 hover:bg-white/10 transition-colors">Profile</a>
                      )}
                    </div>
                  </div>

                  <div className="absolute inset-0 border border-white/5 opacity-40 rounded-xl z-10 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}