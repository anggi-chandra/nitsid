"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "GLORY OF SCHOOL",
        category: "DESEMBER 2024",
        images: ["/GOS_1.jpg", "/GOS_2.jpg", "/GOS_3.jpg", "/GOS_4.jpg"],
    },
    {
        title: "XD FIESTA MLBB 2024",
        category: "SEPTEMBER 2024",
        images: ["/XD_1.jpg", "/XD_2.jpg", "/XD_3.jpg", "/XD_4.jpg"],
    },
    {
        title: "MOBILE LEGENDS COMMUNITY HERO",
        category: "NOVEMBER 2024",
        images: ["/MCH_1.jpg", "/MCH_2.jpg", "/MCH_3.jpg", "/MCH_4.jpg"],
    },
    {
        title: "TOURNAMENT MOBILE LEGENDS",
        category: "JANUARI 2025",
        images: ["/ML_1.jpg", "/ML_2.jpg", "/ML_3.jpg", "/ML_4.jpg"],
    },
    {
        title: "SITEFEST 2025",
        category: "MEI 2025",
        images: ["/SITEFEST_1.jpg", "/SITEFEST_2.jpg", "/SITEFEST_3.jpg", "/SITEFEST_4.jpg"],
    },
    {
        title: "XD FIESTA MLBB X PUBG 2025",
        category: "SEPTEMBER 2025",
        images: ["/XD2_1.JPG", "/XD2_2.JPG", "/XD2_3.JPG", "/XD2_4.JPG"],
    },
];

export default function Portfolio() {
    const container = useRef(null);

    useGSAP(
        () => {
            const projects = gsap.utils.toArray(".project-card");

            gsap.from(projects, {
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
        <section ref={container} id="portfolio" className="py-24 md:py-32">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Our <span className="font-light text-white/70">Projects</span>
                        </h2>
                        <p className="text-white/60">
                            A showcase of our recent work and creative endeavors.
                        </p>
                    </div>
                    <a href="#" className="hidden md:inline-flex mil-button mt-8 md:mt-0">
                        View All Works
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card group relative aspect-[4/3] bg-neutral-900 rounded-xl overflow-hidden cursor-pointer"
                        >
                            {/* 2x2 Grid for Images */}
                            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                                {project.images.map((img, imgIndex) => (
                                    <div
                                        key={imgIndex}
                                        className="relative border border-white/5 bg-neutral-800 flex items-center justify-center overflow-hidden"
                                    >
                                        {img ? (
                                            <img
                                                src={img}
                                                alt={`${project.title} - ${imgIndex + 1}`}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        ) : (
                                            <span className="text-neutral-700 text-xs font-mono">
                                                IMG {imgIndex + 1}
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center z-10">
                                <h3 className="text-3xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-orange-500 uppercase tracking-widest text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    {project.category}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <a href="#" className="mil-button">
                        View All Works
                    </a>
                </div>
            </div>
        </section>
    );
}
