"use client";

import { useRef } from "react";
import { TypewriterCode } from "./TypewriterCode";


export default function Hero() {
    const cardRef = useRef<HTMLDivElement>(null);

    // The text to be typed out
    const fullText = "Create an app that analyzes customer feedback and generates a report that follows the attached style guidelines.";

    return (
        
        // Hero Section

        <section
            id="home"
            className="relative pt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-14 md:pb-20 px-3 sm:px-6 lg:px-8 min-h-[70vh] sm:min-h-[80vh] lg:min-h-[90vh] flex items-center overflow-hidden"
        >
            {/* Using global ContinuousBackground */}

            <div
                className="relative z-10 max-w-[1440px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center"
            >
                {/* Left Column: Text Content */}
                <div
                    ref={cardRef}
                    className="space-y-4 sm:space-y-6 md:space-y-8 text-center md:text-left px-2 sm:px-0 max-w-2xl mx-auto md:mx-0"
                >
                    {/* Announcement Badge */}

                    <h1
                        className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-tight md:leading-[1.05]"
                        data-speed="1.1"
                    >
                        Build & Grow
                        <img
                            src="/BGAI.png"
                            alt="AI Hackathon"
                            className="inline-block w-16 xs:w-18 sm:w-20 md:w-24 lg:w-28 xl:w-32 align-middle ml-3 md:ml-5 lg:ml-6 mb-0 md:mb-1"
                        />
                        <br />
                        AI Hackathon 2.0
                    </h1>
                     
                    <div className="mt-3 md:mt-6 flex justify-center md:justify-start">
                        <img
                            src="/initiative.png"
                            alt="Initiative"
                            className="block w-10/12 xs:w-9/12 sm:w-3/4 md:w-2/3 max-w-[420px] md:max-w-[260px] xl:max-w-[300px] object-contain pointer-events-none"
                        />
                    </div>
                    <p
                        className="text-base xs:text-lg sm:text-xl md:text-2xl text-[#9aa0a6] max-w-2xl mx-auto md:mx-0 font-light leading-relaxed"
                        data-speed="1.05"
                    >
                        Join India's premier developer hackathon. Build innovative solutions with Google technologies, connect with mentors, and compete for amazing prizes.
                    </p>

                    <div className="pt-2 sm:pt-4 flex flex-row items-center justify-center md:justify-start gap-3 sm:gap-4">
                        <a
                            className="luma-checkout--button w-[220px] xs:w-auto h-14 xs:h-16 px-6 xs:px-12 rounded-full hover:bg-[#1967d2] text-white font-medium text-lg xs:text-xl transition-all shadow-[0_0_28px_rgba(26,115,232,0.35)] hover:shadow-[0_0_40px_rgba(26,115,232,0.55)] flex items-center justify-center"
                            data-luma-action="checkout"
                            data-luma-event-id="evt-LWX8PnUfs4Xq5Us"
                            style={{ backgroundColor: '#1a73e8' }}
                        >
                            Register Now
                        </a>
                    </div>
                </div>

                {/* Right Column: Code Editor - Responsive stacking */}
                <div className="flex items-center justify-center md:justify-end mt-8 md:mt-0 w-full">
                    <div className="w-full max-w-[320px] xs:max-w-[360px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[520px] xl:max-w-[580px]">
                        <TypewriterCode />
                    </div>
                </div>
            </div>

            {/* Removed the line division for better blending */}
        </section>
    );
}

