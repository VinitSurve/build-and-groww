"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const neonColors = ['#7C3AED', '#06B6D4', '#F97316', '#DB2777'];
const neonStyle = (i: number) => ({
  backgroundImage: `radial-gradient(circle at 30% 30%, ${neonColors[i % neonColors.length]}33 0%, transparent 35%), radial-gradient(circle at 70% 70%, ${neonColors[(i+1) % neonColors.length]}22 0%, transparent 45%)`,
  filter: 'blur(40px)'
} as React.CSSProperties);

export default function EdgeSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const landmarksRef = useRef<HTMLDivElement>(null);
    const gatewayRef = useRef<HTMLImageElement | null>(null);
    const statsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        // Heading and description reveal
        gsap.fromTo(
            sectionRef.current.querySelectorAll(".reveal-heading"),
            { opacity: 0, y: 40, scale: 0.95 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
            }
        );

        // Landmarks entrance
        if (landmarksRef.current) {
            const landmarks = landmarksRef.current.querySelectorAll('.landmark-item');
            gsap.fromTo(
                landmarks,
                { opacity: 0, y: 60, rotateX: 15 },
                {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    duration: 0.9,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: landmarksRef.current,
                        start: "top 75%",
                    }
                }
            );
        }

        // Stats grid reveal
        if (statsRef.current) {
            const statCards = statsRef.current.querySelectorAll('.stat-card');
            gsap.fromTo(
                statCards,
                { opacity: 0, scale: 0.9 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.7,
                    stagger: 0.1,
                    ease: "back.out(1.3)",
                    scrollTrigger: {
                        trigger: statsRef.current,
                        start: "top 80%",
                    }
                }
            );
        }

        // Bottom cards reveal
        gsap.fromTo(
            sectionRef.current.querySelectorAll(".animate-reveal"),
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current.querySelector('.bottom-cards'),
                    start: "top 80%",
                },
            }
        );

        // Neon pulse for landmark backgrounds
        const neonLayers = sectionRef.current.querySelectorAll('.neon-glow');
        if (neonLayers.length) {
            gsap.to(neonLayers, {
                scale: 1.08,
                opacity: 0.85,
                duration: 2.5,
                ease: 'sine.inOut',
                repeat: -1,
                yoyo: true,
                stagger: { each: 0.3 }
            });
        }
    }, []);

    const handleGatewayClick = () => {
        const el = gatewayRef.current;
        if (!el) return;
        gsap.to(el, { scale: 1.08, duration: 0.12, ease: 'power1.out', yoyo: true, repeat: 1 });
    };

    return (
        <section id="insights" ref={sectionRef} className="relative py-8 sm:py-12 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-7xl mx-auto bg-[#16171a] rounded-[3rem] p-8 md:p-16 border border-white/5 relative overflow-hidden shadow-2xl">
                    <div className="relative z-10">
                        
                        {/* Decorative light rays */}
                        <div className="absolute top-0 left-1/4 w-[1px] h-24 bg-gradient-to-b from-cyan-400/50 to-transparent" />
                        <div className="absolute bottom-0 right-1/3 w-[1px] h-32 bg-gradient-to-t from-purple-500/40 to-transparent" />

                        {/* Ambient background glows */}
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute left-[10%] top-[15%] w-[40vw] h-[25vw] bg-gradient-to-br from-purple-600/12 via-blue-500/8 to-transparent blur-[140px] animate-pulse" />
                            <div className="absolute right-[20%] bottom-[10%] w-[35vw] h-[30vw] bg-gradient-to-tl from-cyan-400/10 via-pink-500/6 to-transparent blur-[120px] animate-pulse" style={{ animationDelay: '1.2s' }} />
                        </div>

                        {/* Content */}
                        <div className="relative z-10">
                            {/* Top Section: Heading + Mumbai Landmarks Visual */}
                            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
                                
                                {/* Left: Text Content */}
                                <div className="space-y-6 md:space-y-8">
                                    <div className="reveal-heading inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-400/20 mb-4">
                                        <span className="text-xs sm:text-sm text-cyan-300 font-medium tracking-widest uppercase">Mumbai Community Insights</span>
                                    </div>

                                    <h2 className="reveal-heading text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400">
                                        GDG Cloud Mumbai
                                    </h2>

                                    <p className="reveal-heading text-gray-300 text-base md:text-lg leading-relaxed max-w-lg">
                                        Empowering developers, startups, and tech leaders through
                                        collaborative events, workshops, and hackathons—building a
                                        thriving ecosystem for cloud and AI innovation.
                                    </p>

                                    <button className="reveal-heading group relative w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105 overflow-hidden">
                                        <a href="https://linktr.ee/gdgcloudmumbai" target="_blank" rel="noreferrer" className="relative z-10">
                                            Explore Our Community
                                        </a>
                                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </button>
                                </div>

                                {/* Right: Mumbai Landmarks Visual */}
                                <div ref={landmarksRef} className="relative h-[320px] sm:h-[380px] md:h-[450px] flex items-center justify-center">
                                    <div className="relative w-full max-w-xl">
                                        
                                        {/* Background glow circles */}
                                        <div className="absolute left-1/4 top-1/3 w-48 h-48 bg-cyan-400/20 rounded-full blur-[100px]" />
                                        <div className="absolute right-1/4 bottom-1/3 w-40 h-40 bg-purple-500/15 rounded-full blur-[90px]" />

                                        {/* Gateway of India Card */}
                                        <div className="landmark-item absolute left-0 top-1/2 -translate-y-1/2 w-[99%] flex items-center justify-center">
                                            <div className="relative flex flex-col items-center justify-center">
                                                {/* soft neon halo behind image */}
                                                <div className="absolute -inset-6 rounded-full opacity-30 pointer-events-none" style={neonStyle(0)} />

                                                <div className="w-full max-w-[220px] sm:max-w-[260px] md:max-w-[300px] mx-auto">
                                                    <img
                                                        ref={gatewayRef}
                                                        onClick={handleGatewayClick}
                                                        src="/Gateway Mumbai.png"
                                                        alt="Gateway of India"
                                                        className="w-full h-auto object-contain rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                                                    />
                                                </div>

                                            </div>
                                        </div>

                                        {/* Sea Link and central GDG connector removed per design request */}
                                    </div>
                                </div>
                            </div>

                            {/* Stats Grid (replacing orbital stats) */}
                            <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
                                {[
                                    { label: '8+', desc: 'Years', color: 'from-purple-500 to-pink-500' },
                                    { label: '8K+', desc: 'Members', color: 'from-cyan-500 to-blue-500' },
                                    { label: '20+', desc: 'Events', color: 'from-orange-500 to-red-500' },
                                    { label: '1M+', desc: 'Reach', color: 'from-blue-500 to-purple-500' },
                                ].map((stat, i) => (
                                    <div key={i} className="stat-card group relative">
                                        {/* Neon glow */}
                                        <div className="neon-glow absolute inset-0 z-0 opacity-20 group-hover:opacity-70 transition-all duration-500 rounded-2xl" style={neonStyle(i)} />
                                        
                                        {/* Glass card */}
                                        <div className="relative z-10 bg-gradient-to-br from-white/6 to-white/[0.02] backdrop-blur-xl border border-cyan-400/15 rounded-2xl p-4 sm:p-6 text-center shadow-xl transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-105 group-hover:border-cyan-400/30">
                                            <div className={`text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                                                {stat.label}
                                            </div>
                                            <div className="text-gray-300 text-xs sm:text-sm font-medium tracking-wide">
                                                {stat.desc}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Bottom Cards (keep existing structure with enhancements) */}
                            <div className="bottom-cards grid md:grid-cols-2 gap-6">
                                {/* Card 1: Community Impact */}
                                <div className="animate-reveal bg-gradient-to-br from-[#1a1c20] to-[#16171a] rounded-[2.5rem] p-6 sm:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start border border-white/5 shadow-2xl hover:border-cyan-400/20 transition-all duration-300 group">
                                    <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex-shrink-0 rounded-3xl overflow-hidden border border-white/10 relative group-hover:border-cyan-400/30 transition-all">
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent z-0" />
                                        <img src="/IMG_2046.JPG" alt="Community Impact" className="relative z-10 object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" />
                                    </div>

                                    <div className="flex-1 space-y-3">
                                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">Community Impact</h3>
                                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                                            Over 10,000 developers and tech enthusiasts connected through innovative workshops, hackathons, and collaborative learning experiences.
                                        </p>
                                        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30">
                                            <span className="text-blue-400 text-sm font-semibold">10,000+ Active Members</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Card 2: Events & Reach */}
                                <div className="animate-reveal bg-gradient-to-br from-[#1a1c20] to-[#16171a] rounded-[2.5rem] p-6 sm:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start border border-white/5 shadow-2xl hover:border-cyan-400/20 transition-all duration-300 group">
                                    <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex-shrink-0 rounded-3xl overflow-hidden border border-white/10 relative group-hover:border-cyan-400/30 transition-all">
                                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent z-0" />
                                        <img src="/IMG_1674.JPG" alt="Events & Reach" className="relative z-10 object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" />
                                    </div>

                                    <div className="flex-1 space-y-3">
                                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">Events & Reach</h3>
                                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                                            Delivering 100+ events annually with an impressive 1M+ reach, creating opportunities for learning, networking, and growth.
                                        </p>
                                        <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30">
                                            <span className="text-cyan-400 text-sm font-semibold">1M+ Annual Reach</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
