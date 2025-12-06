"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Hero() {
    const container = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const buttonRef = useRef(null);

    useGSAP(
        () => {
            const tl = gsap.timeline();

            tl.from(titleRef.current, {
                y: 100,
                opacity: 0,
                duration: 1,
                ease: "power4.out",
                delay: 0.5,
            })
                .from(
                    subtitleRef.current,
                    {
                        y: 50,
                        opacity: 0,
                        duration: 1,
                        ease: "power3.out",
                    },
                    "-=0.5"
                )
                .from(
                    buttonRef.current,
                    {
                        y: 30,
                        opacity: 0,
                        duration: 0.8,
                        ease: "power3.out",
                    },
                    "-=0.5"
                );
        },
        { scope: container }
    );

    return (
        <section
            ref={container}
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-orange-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <h1
                    ref={titleRef}
                    className="text-5xl md:text-7xl lg:text-9xl font-bold mb-8 leading-tight"
                >
                    Welcome <br />
                    <span className="font-light text-white/70">To</span> NITS
                </h1>

                <div className="max-w-2xl mx-auto">
                    <p
                        ref={subtitleRef}
                        className="text-lg md:text-xl text-white/60 mb-12 leading-relaxed"
                    >
                        Welcome to NITS. We are a collective of dreamers and doers,
                        transforming ideas into digital reality. Let&apos;s embark on a journey
                        where innovation meets elegance.
                    </p>

                    <div ref={buttonRef}>
                        <a href="#portfolio" className="mil-button">
                            View Our Work
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <svg
                    className="w-6 h-6 text-white/50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </div>
        </section>
    );
}
