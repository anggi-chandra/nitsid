"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
    {
        name: "I Made Dwi Arya Wiguna",
        role: "Founder",
        image: "/arya.JPG",
    },
    {
        name: "Anggie Chandra Wiguna",
        role: "Co-Founder",
        image: "/anggi.jpg",
    },
];

export default function ThePilar() {
    const container = useRef(null);

    useGSAP(
        () => {
            const cards = gsap.utils.toArray(".team-card");

            gsap.from(cards, {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                },
                y: 100,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
            });
        },
        { scope: container }
    );

    return (
        <section ref={container} className="py-24 md:py-32 bg-neutral-900/30">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        The Pilar <br />
                        <span className="font-light text-white/70">Founder & Co-Founder</span>
                    </h2>
                    <p className="text-lg text-white/60 max-w-2xl">
                        Meet the visionaries behind NITS. Passionate leaders dedicated to
                        pushing boundaries and defining the future of digital experiences.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="team-card group relative bg-neutral-900 rounded-xl overflow-hidden"
                        >
                            <div className="aspect-[3/4] bg-neutral-800 relative">
                                {member.image ? (
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover object-top"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-neutral-600">
                                        <span className="text-lg">Photo Placeholder</span>
                                    </div>
                                )}

                                {/* Overlay on Hover */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                    <h3 className="text-2xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        {member.name}
                                    </h3>
                                    <p className="text-orange-500 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                        {member.role}
                                    </p>
                                </div>
                            </div>

                            {/* Default visible info (mobile friendly) */}
                            <div className="p-6 md:hidden">
                                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                                <p className="text-orange-500">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
