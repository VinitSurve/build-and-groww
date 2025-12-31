"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function GemmaSection() {
  const cardRef = useRef<HTMLDivElement>(null);
  const hasPlayedRef = useRef(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !cardRef.current || hasPlayedRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      hasPlayedRef.current = true;
      return;
    }

    const card = cardRef.current;
    const centerNode = card.querySelector(".collab-center");
    const connectorLeft = card.querySelector(".connector-left");
    const connectorRight = card.querySelector(".connector-right");

    // Only animate elements that exist
    gsap.set([centerNode, connectorLeft, connectorRight].filter(Boolean), {
      opacity: 0,
    });
    gsap.set([centerNode].filter(Boolean), { scale: 0.8 });

    const tl = gsap.timeline({
      onComplete: () => {
        hasPlayedRef.current = true;
      },
    });

    if (connectorLeft) {
      tl.to(connectorLeft, {
        opacity: 0.2,
        duration: 1,
        ease: "power2.out",
      });
    }
    if (centerNode) {
      tl.to(
        centerNode,
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.2)",
        },
        "-=0.5"
      );
    }
    if (connectorRight) {
      tl.to(
        connectorRight,
        {
          opacity: 0.2,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.5"
      );
    }
  }, [mounted]);

  return (
    <section
      id="collaboration"
      className="relative py-12 sm:py-16 md:py-20 px-4 overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl">
        <div
          ref={cardRef}
          className="relative bg-gradient-to-br from-[#0a0b0d] via-[#0f1113] to-[#0a0b0d] rounded-2xl sm:rounded-3xl border border-white/10 p-6 sm:p-8 md:p-12 lg:p-16 overflow-hidden backdrop-blur-xl"
          style={{
            boxShadow:
              "0 0 60px -15px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
          }}
        >
          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center relative z-10">
            {/* Left: Text content */}
            <div className="space-y-0">
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-left">
                GDG Cloud Mumbai
              </h2>
              <br />
              <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-blue-400 font-semibold leading-tight text-left">
                in collaboration with
              </p>
              <br />
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-left">
                GDG Cloud Pune
              </h2>
              <p className="text-gray-400 text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed max-w-xl text-left mt-4 sm:mt-5 md:mt-6">
                GDG Cloud Mumbai and GDG Cloud Pune collaborate to deliver a
                unified AI-first hackathon experience driven by community and
                innovation.
              </p>
            </div>
            {/* End of Left: Text content */}
            {/* Right: Collaboration Visual with Layered Landmarks */}
            <div className="relative h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* 🔥 SCALE WRAPPER — controls whole visual size */}
                <div
                  className="relative w-full h-full flex items-center justify-center"
                  style={{
                    transform: "scale(1.12)", // ← increase/decrease ONLY this value
                    transformOrigin: "center",
                  }}
                >
                  {/* CENTER: GDG Infinity Video */}
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ zIndex: 1, transform: "translateY(-22px)" }}
                  >
                    <video
                      src="/video.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] object-contain"
                      style={{
                        mixBlendMode: "screen",
                        filter:
                          "brightness(1.2) contrast(1.15) drop-shadow(0 0 24px rgba(255,200,0,0.25))",
                      }}
                    />
                  </div>

                  {/* LEFT: Mumbai – Gateway of India */}
                  <div
                    className="absolute flex flex-col items-center"
                    style={{
                      left: "50%",
                      transform: "translateX(-90%)",
                      bottom: "18%",
                      zIndex: 7,
                    }}
                  >
                    <img
                      src="/Gateway.png"
                      alt="Gateway of India"
                      className="w-[170px] sm:w-[180px] md:w-[200px] lg:w-[220px] object-contain"
                    />
                    <span className="mt-2 text-cyan-400 text-lg sm:text-xl md:text-2xl font-semibold">
                      Mumbai
                    </span>
                  </div>

                  {/* RIGHT: Pune – Shaniwar Wada */}
                  <div
                    className="absolute flex flex-col items-center"
                    style={{ 
                      left: "50%",
                      transform: "translateX(0%)",
                      bottom: "18%",
                      zIndex: 7,
                    }}
                  >
                    <img
                      src="/Shaniwaar_Wada-removebg-preview.png"
                      alt="Shaniwar Wada"
                      className="w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] object-contain"
                    />
                    <span className="mt-2 text-cyan-400 text-lg sm:text-xl md:text-2xl font-semibold">
                      Pune
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* End of Right: Collaboration Visual */}
          </div>
        </div>
      </div>
    </section>
  );
}
