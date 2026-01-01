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
            className="relative pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8 xl:px-12 min-h-screen flex items-center overflow-hidden"
        >
            {/* Using global ContinuousBackground */}

            <div
                className="relative z-10 max-w-[1440px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center"
            >
                {/* Left Column: Text Content */}
                <div
                    ref={cardRef}
                    className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 text-center md:text-left px-2 sm:px-4 md:px-0 max-w-2xl mx-auto md:mx-0"
                >
                    {/* Announcement Badge */}

                    <h1
                        className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight text-white leading-[1.15] sm:leading-[1.1] md:leading-[1.05]"
                        data-speed="1.1"
                    >
                        Build & Grow
                        <img
                            src="/BGAI.png"
                            alt="AI Hackathon"
                            className="inline-block w-12 xs:w-14 sm:w-16 md:w-20 lg:w-24 xl:w-28 align-middle ml-2 sm:ml-3 md:ml-4 lg:ml-6 mb-0 md:mb-1"
                        />
                        <br />
                        AI Hackathon 2.0
                    </h1>
                     
                    <div className="mt-2 sm:mt-3 md:mt-4 lg:mt-6 flex justify-center md:justify-start">
                        <img
                            src="/initiative.png"
                            alt="Initiative"
                            className="block w-11/12 xs:w-10/12 sm:w-3/4 md:w-2/3 lg:w-3/5 max-w-[380px] sm:max-w-[420px] md:max-w-[280px] lg:max-w-[300px] xl:max-w-[320px] object-contain pointer-events-none"
                        />
                    </div>
                    <p
                        className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-[#9aa0a6] max-w-2xl mx-auto md:mx-0 font-light leading-relaxed px-2 sm:px-0"
                        data-speed="1.05"
                    >
                        Join India's premier developer hackathon. Build innovative solutions with Google technologies, connect with mentors, and compete for amazing prizes.
                    </p>

                    <div className="pt-2 sm:pt-3 md:pt-4 flex flex-row flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 w-full max-w-lg mx-auto md:mx-0">
                        <a
                            className="luma-checkout--button min-w-[140px] h-10 sm:h-11 md:h-12 px-4 sm:px-6 md:px-8 rounded-full hover:bg-[#1967d2] text-white font-medium text-sm sm:text-base md:text-lg transition-all shadow-[0_0_20px_rgba(26,115,232,0.25)] hover:shadow-[0_0_28px_rgba(26,115,232,0.35)] flex items-center justify-center"
                            data-luma-action="checkout"
                            data-luma-event-id="evt-LWX8PnUfs4Xq5Us"
                            style={{ backgroundColor: '#1a73e8' }}
                        >
                            Register for मुंबई
                        </a>
                        <a
                            href="https://luma.com/event/evt-3mCXbHur70XnLMt"
                            className="luma-checkout--button min-w-[140px] h-10 sm:h-11 md:h-12 px-4 sm:px-6 md:px-8 rounded-full hover:bg-[#1967d2] text-white font-medium text-sm sm:text-base md:text-lg transition-all shadow-[0_0_20px_rgba(26,115,232,0.25)] hover:shadow-[0_0_28px_rgba(26,115,232,0.35)] flex items-center justify-center"
                            data-luma-action="checkout"
                            data-luma-event-id="evt-3mCXbHur70XnLMt"
                            style={{ backgroundColor: '#1a73e8' }}
                        >
                            Register for पुणे
                        </a>
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-white/90 px-2 sm:px-0"><b>Note:</b> Grand finale will be in Mumbai only.</p>
                </div>

                {/* Right Column: Code Editor - Responsive stacking */}
                <div className="flex items-center justify-center md:justify-end mt-6 sm:mt-8 md:mt-0 w-full px-4 sm:px-0">
                    <div className="w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[380px] md:max-w-[440px] lg:max-w-[500px] xl:max-w-[560px]">
                        <TypewriterCode />
                    </div>
                </div>
            </div>
            
            <script id="luma-checkout" src="https://embed.lu.ma/checkout-button.js"></script>
            {/* Removed the line division for better blending */}
        </section>
    );
}

