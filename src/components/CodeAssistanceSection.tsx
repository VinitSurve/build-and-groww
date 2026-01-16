"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const tabs = [
  { id: "health", label: "Health Tech" },
  { id: "fintech", label: "FinTech" },
  { id: "cyber", label: "Cyber Security" },
  { id: "edu", label: "Edu Tech" },
  { id: "agri", label: "Agri Tech" },
  { id: "open", label: "Open Innovation" },
];

export default function CodeAssistanceSection() {
  const [activeTab, setActiveTab] = useState("health");
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const activeTabIndex = tabs.findIndex((t) => t.id === activeTab);
  const sequenceNumber = (activeTabIndex + 1).toString().padStart(2, "0");

  useEffect(() => {
    if (!sectionRef.current) return;

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
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  // Auto-rotate tabs every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((currentTab) => {
        const currentIndex = tabs.findIndex((t) => t.id === currentTab);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex].id;
      });
    }, 7000); // 7 seconds

    return () => clearInterval(interval);
  }, []);

  // Animate content change
  useEffect(() => {
    if (!contentRef.current) return;
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, x: 20 },
      { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
    );
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case "health":
        return (
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center w-full">
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-2 sm:mb-4">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-white flex items-center gap-2 sm:gap-3">
                  Health Tech: Smarter healthcare and diagnostics
                </h3>
                <span className="text-[9px] sm:text-[10px] bg-green-500/10 text-green-400 px-2 sm:px-3 py-1 rounded-full border border-green-500/20 font-bold uppercase tracking-wider w-fit">
                  All Levels
                </span>
              </div>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg font-light leading-relaxed">
                Build AI solutions to improve diagnostics, patient monitoring,
                and healthcare workflows.
              </p>
            </div>
            <div className="relative w-full h-full flex justify-end pr-4 sm:pr-6 md:pr-8 lg:pr-10">
  <div className="w-full max-w-[520px] relative overflow-visible">

                <div className="absolute inset-0 rounded-xl pointer-events-none" style={{ boxShadow: '0 0 100px 30px rgba(234,67,53,0.18)', border: '1px solid rgba(234,67,53,0.12)' }} />

                <div className="overflow-hidden rounded-xl relative z-20">
                  <img
                    src="https://cdn.jsdelivr.net/gh/randomaiphoto/build-and-grow-media/health.webp"
                    alt="Health Tech"
                    className="w-full h-full object-cover object-right transform scale-105 md:scale-110 lg:scale-125"
                    style={{ willChange: "transform" }}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case "fintech":
        return (
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center w-full">
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-2 sm:mb-4">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-white flex items-center gap-2 sm:gap-3">
                  FinTech: Financial automation and fraud prevention
                </h3>
                <span className="text-[9px] sm:text-[10px] bg-green-500/10 text-green-400 px-2 sm:px-3 py-1 rounded-full border border-green-500/20 font-bold uppercase tracking-wider w-fit">
                  All Levels
                </span>
              </div>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg font-light leading-relaxed">
                Create tools for payment automation, risk analysis, or real-time
                fraud detection.
              </p>
            </div>
            <div className="relative w-full h-full flex justify-end pr-4 sm:pr-6 md:pr-8 lg:pr-10">
  <div className="w-full max-w-[520px] relative overflow-visible">

                <div className="absolute inset-0 rounded-xl pointer-events-none" style={{ boxShadow: '0 0 100px 30px rgba(52,168,83,0.18)', border: '1px solid rgba(52,168,83,0.12)' }} />

                <div className="overflow-hidden rounded-xl relative z-20">
                  <img
                    src="/fintech.webp"
                    alt="FinTech"
                    className="w-full h-full object-cover object-right transform scale-105 md:scale-110 lg:scale-125"
                    style={{ willChange: "transform" }}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case "cyber":
        return (
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center w-full">
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-2 sm:mb-4">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-white flex items-center gap-2 sm:gap-3">
                  Cyber Security: AI-powered protection and threat detection
                </h3>
                <span className="text-[9px] sm:text-[10px] bg-green-500/10 text-green-400 px-2 sm:px-3 py-1 rounded-full border border-green-500/20 font-bold uppercase tracking-wider w-fit">
                  All Levels
                </span>
              </div>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg font-light leading-relaxed">
                Design systems that leverage AI to detect, prevent, and respond
                to security threats.
              </p>
            </div>
            <div className="relative w-full h-full flex justify-end pr-4 sm:pr-6 md:pr-8 lg:pr-10">
  <div className="w-full max-w-[520px] relative overflow-visible">

                <div className="absolute inset-0 rounded-xl pointer-events-none" style={{ boxShadow: '0 0 100px 30px rgba(66,133,244,0.18)', border: '1px solid rgba(66,133,244,0.12)' }} />

                <div className="overflow-hidden rounded-xl relative z-20">
                  <img
                    src="/cyber.webp"
                    alt="Cyber Security"
                    className="w-full h-full object-cover object-right transform scale-105 md:scale-110 lg:scale-125"
                    style={{ willChange: "transform" }}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case "edu":
        return (
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-3xl font-medium text-white flex items-center gap-3">
                  Edu Tech: Learning accessibility and skill-building platforms
                </h3>
                <span className="text-[10px] bg-green-500/10 text-green-400 px-3 py-1 rounded-full border border-green-500/20 font-bold uppercase tracking-wider">
                  All Levels
                </span>
              </div>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                Build platforms that personalize learning, assessment, and skill
                development at scale.
              </p>
            </div>
            <div className="relative w-full h-full flex justify-end pr-4 sm:pr-6 md:pr-8 lg:pr-10">
  <div className="w-full max-w-[520px] relative overflow-visible">

                <div className="absolute inset-0 rounded-xl pointer-events-none" style={{ boxShadow: '0 0 100px 30px rgba(251,188,5,0.18)', border: '1px solid rgba(251,188,5,0.12)' }} />

                <div className="overflow-hidden rounded-xl relative z-20">
                  <img
                    src="/edutech.webp"
                    alt="Edu Tech"
                    className="w-full h-full object-cover object-right transform scale-105 md:scale-110 lg:scale-125"
                    style={{ willChange: "transform" }}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case "agri":
        return (
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-3xl font-medium text-white flex items-center gap-3">
                  Agri Tech: Smart farming and agricultural innovations
                </h3>
                <span className="text-[10px] bg-green-500/10 text-green-400 px-3 py-1 rounded-full border border-green-500/20 font-bold uppercase tracking-wider">
                  All Levels
                </span>
              </div>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                Use AI and IoT to optimize crop yields, resource usage, and
                supply-chain visibility.
              </p>
            </div>
            <div className="relative w-full h-full flex justify-end pr-4 sm:pr-6 md:pr-8 lg:pr-10">
  <div className="w-full max-w-[520px] relative overflow-visible">

                <div className="absolute inset-0 rounded-xl pointer-events-none" style={{ boxShadow: '0 0 100px 30px rgba(0,172,193,0.18)', border: '1px solid rgba(0,172,193,0.12)' }} />

                <div className="overflow-hidden rounded-xl relative z-20">
                  <img
                    src="/agritech.webp"
                    alt="Agri Tech"
                    className="w-full h-full object-cover object-right transform scale-105 md:scale-110 lg:scale-125"
                    style={{ willChange: "transform" }}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case "open":
        return (
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-3xl font-medium text-white flex items-center gap-3">
                  Open Innovation: Collaborative development and idea sharing
                </h3>
                <span className="text-[10px] bg-green-500/10 text-green-400 px-3 py-1 rounded-full border border-green-500/20 font-bold uppercase tracking-wider">
                  All Levels
                </span>
              </div>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                Foster open-source projects and platforms that encourage
                community-driven innovation.
              </p>
            </div>
            <div className="relative w-full h-full flex justify-end pr-4 sm:pr-6 md:pr-8 lg:pr-10">
  <div className="w-full max-w-[520px] relative overflow-visible">

                <div className="absolute inset-0 rounded-xl pointer-events-none" style={{ boxShadow: '0 0 100px 30px rgba(59,130,246,0.18)', border: '1px solid rgba(59,130,246,0.12)' }} />

                <div className="overflow-hidden rounded-xl relative z-20">
                  <img
                    src="/open_innovation.webp"
                    alt="Open Innovation"
                    className="w-full h-full object-cover object-right transform scale-105 md:scale-110 lg:scale-125"
                    style={{ willChange: "transform" }}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="problems"
      ref={sectionRef}
      className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12 md:space-y-16">
        <div className="text-center space-y-4 sm:space-y-6 md:space-y-8">
          <h2 className="animate-reveal text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight">
            Problem Statements
          </h2>

          {/* Tabs Navigation */}
          <div className="animate-reveal flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mt-8 sm:mt-10 md:mt-12 px-2 sm:px-4">
            {tabs.map((tab) => {
              // Google-like RGB colors for each tab
              const colorMap: Record<string, string> = {
                health: "234,67,53", // red (Google Red)
                fintech: "52,168,83", // green
                cyber: "66,133,244", // blue
                edu: "251,188,5", // yellow
                agri: "0,172,193", // teal
              };

              const rgb = colorMap[tab.id] || "59,130,246";
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border ${
                    isActive
                      ? "text-white"
                      : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
                  }`}
                  style={
                    isActive
                      ? {
                          backgroundColor: `rgba(${rgb}, 0.12)`,
                          borderColor: `rgba(${rgb}, 0.28)`,
                          boxShadow: `0 8px 30px rgba(${rgb}, 0.12)`,
                        }
                      : undefined
                  }
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content Box */}
        <div className="bg-[#16171a] rounded-2xl sm:rounded-3xl md:rounded-[3rem] p-4 sm:p-6 md:p-12 lg:p-16 xl:p-20 border border-white/5 relative overflow-hidden shadow-2xl min-h-[400px] sm:min-h-[480px] md:min-h-[550px] flex items-center">
          {/* Sequence Number */}
          <div className="absolute top-4 sm:top-6 md:top-8 left-6 sm:left-8 md:left-12 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white/[0.03] select-none pointer-events-none">
            {sequenceNumber}
          </div>

          <div ref={contentRef} className="w-full h-full relative z-10">
            {renderContent()}
          </div>

          {/* Background glow specific to this section */}
          <div className="absolute inset-x-0 bottom-[-20%] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
        </div>

        {/* Thematic Challenge Track - Premium Card */}
        <div className="mt-16 sm:mt-20 md:mt-24 relative">
          {/* Ambient glow effects */}
          <div className="absolute left-[10%] top-[20%] w-[40vw] h-[25vw] bg-gradient-to-br from-yellow-500/10 via-orange-500/8 to-transparent blur-[140px] animate-pulse pointer-events-none" />
          <div className="absolute right-[15%] bottom-[15%] w-[35vw] h-[30vw] bg-gradient-to-tl from-blue-500/10 via-green-500/8 to-transparent blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />
          
          {/* Glass morphism container */}
          <div className="p-[2px] rounded-[2.5rem] bg-gradient-to-r from-yellow-500/30 via-blue-500/25 to-green-500/20 shadow-2xl relative z-10">
            <div className="rounded-[2.5rem] bg-gradient-to-br from-[#0a0d14] via-[#0f1219] to-[#0a0d14] backdrop-blur-xl p-6 sm:p-10 md:p-14 lg:p-16 relative overflow-hidden">
              
              {/* Decorative top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-blue-500 via-green-500 via-yellow-500 to-orange-500 rounded-t-[2.5rem]" />
              
              {/* Header Section */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6 relative z-10">
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="text-3xl sm:text-4xl md:text-5xl">🧠</span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-green-400">
                    Thematic Challenge Track
                  </h2>
                </div>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-green-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-400/30 w-fit">
                  <span className="text-lg">🎓</span>
                  <span className="text-xs sm:text-sm font-semibold text-blue-300">Academic Partner: Jio Institute</span>
                </div>
              </div>

              {/* Intro Text */}
              <div className="mb-8 p-4 sm:p-5 bg-gradient-to-r from-blue-500/5 to-transparent backdrop-blur-sm border-l-4 border-blue-500 rounded-xl relative z-10">
                <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                  In collaboration with our Academic Partner – <span className="text-blue-400 font-semibold">Jio Institute</span>, we have introduced a Thematic Challenge Track as part of Build & Grow AI Hackathon 2.0.
                </p>
              </div>

              {/* Info Grid */}
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-8 relative z-10">
                {/* Eligibility Card */}
                <div className="group relative">
                  {/* Neon glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative bg-gradient-to-br from-white/8 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-green-400/30 transition-all duration-300">
                    <h3 className="text-sm font-semibold text-green-400 mb-3 flex items-center gap-2">
                      <span className="text-lg">✅</span>
                      Full Eligibility
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Teams are evaluated like all other teams and remain fully eligible for main hackathon prizes.
                    </p>
                  </div>
                </div>

                {/* Optional Participation Card */}
                <div className="group relative">
                  {/* Neon glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative bg-gradient-to-br from-white/8 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-blue-400/30 transition-all duration-300">
                    <h3 className="text-sm font-semibold text-blue-400 mb-3 flex items-center gap-2">
                      <span className="text-lg">🎯</span>
                      Optional Participation
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Participation depends solely on the problem statement you choose – no separate registration needed.
                    </p>
                  </div>
                </div>
              </div>

              {/* Prize Highlight Box */}
              <div className="relative mb-8 group">
                {/* Animated neon glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/30 via-orange-500/20 to-yellow-500/30 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700 animate-pulse" />
                
                <div className="relative bg-gradient-to-br from-yellow-500/10 via-orange-500/5 to-yellow-500/10 backdrop-blur-xl border-2 border-yellow-500/30 rounded-3xl p-6 sm:p-8 text-center overflow-hidden">
                  {/* Decorative corner accents */}
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-yellow-400/40 rounded-tl-3xl" />
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-yellow-400/40 rounded-br-3xl" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <span className="text-3xl sm:text-4xl">🏆</span>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-300">
                        ₹5,000 Cash Prize + Trophy
                      </h3>
                      <span className="text-3xl sm:text-4xl">🏆</span>
                    </div>
                    <p className="text-gray-200 text-sm sm:text-base mb-2">
                      Awarded to the <span className="text-yellow-400 font-semibold">top-performing team</span> in this track at the <span className="text-yellow-400 font-semibold">Grand Finale</span>
                    </p>
                    <p className="text-gray-400 text-xs sm:text-sm italic">
                      (This is separate from and in addition to the main hackathon prizes)
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 relative z-10">
                <a 
                  href="https://docs.google.com/document/d/1wCMJiOCh-pVVVfl8xJ8KDdxx8rDL4Cc5tNRryQe2pO0/edit?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-full font-semibold text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
                >
                  <span className="text-lg">📄</span>
                  <span>View Problem Statements</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-green-400 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 -z-10" />
                </a>
                
                
              </div>

              {/* Bottom Note */}
              <div className="p-4 sm:p-5 bg-blue-500/5 border-l-4 border-blue-500 rounded-xl relative z-10">
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  <span className="text-base sm:text-lg mr-2">💡</span>
                  <span className="font-semibold text-blue-400">Problem Areas:</span> EduTech, AgriTech, HealthTech (3 challenges), Open Innovation – Detailed statements available in the document above.
                </p>
              </div>

              {/* Decorative light rays */}
              <div className="absolute bottom-0 left-1/4 w-[1px] h-24 bg-gradient-to-t from-yellow-500/40 to-transparent pointer-events-none" />
              <div className="absolute top-1/2 right-[15%] w-[1px] h-32 bg-gradient-to-b from-blue-500/40 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}