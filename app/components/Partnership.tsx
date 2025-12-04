"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Partnership() {
    const container = useRef(null);
    const sliderRef = useRef(null);

    useGSAP(
        () => {
            // Infinite scroll animation
            const slider = sliderRef.current;

            gsap.to(slider, {
                x: "-50%",
                duration: 20,
                ease: "none",
                repeat: -1,
            });
        },
        { scope: container }
    );

    return (
        <section ref={container} className="py-24 bg-white/5 overflow-hidden">
            <div className="container mx-auto px-6 mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold">
                    Trusted <span className="font-light text-white/70">Partners</span>
                </h2>
            </div>

            <div className="relative w-full overflow-hidden">
                <div ref={sliderRef} className="flex whitespace-nowrap w-fit">
                    {/* Duplicated list for infinite scroll effect */}
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex items-center gap-16 px-8">
                            {[
                                { name: "MKStore", logo: "/mkstore.jpeg" },
                                { name: "Esprime", logo: "/esprime.png" },
                                { name: "MKStore", logo: "/mkstore.jpeg" },
                                { name: "Esprime", logo: "/esprime.png" },
                                { name: "MKStore", logo: "/mkstore.jpeg" },
                                { name: "Esprime", logo: "/esprime.png" },
                            ].map((partner, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 group cursor-pointer"
                                >
                                    {partner.logo && (
                                        <div className="relative w-8 h-8 rounded-full overflow-hidden bg-white/10">
                                            <img
                                                src={partner.logo}
                                                alt={partner.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    )}
                                    <span className="text-4xl font-bold text-white/20 group-hover:text-orange-500 transition-colors duration-300">
                                        {partner.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
