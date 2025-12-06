"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

const sliderData = [
    {
        title: "Project F1",
        description: "",
        image: "/slider/F1.PNG",
        color: "bg-blue-500"
    },
    {
        title: "Project F2",
        description: "",
        image: "/slider/F2.PNG",
        color: "bg-green-500"
    },
    {
        title: "Project F3",
        description: "",
        image: "/slider/F3.PNG",
        color: "bg-purple-500"
    },
    {
        title: "Project F4",
        description: "",
        image: "/slider/F4.PNG",
        color: "bg-orange-500"
    },
    {
        title: "Project 1",
        description: "",
        image: "/slider/X1.PNG",
        color: "bg-blue-500"
    },
    {
        title: "Project 2",
        description: "",
        image: "/slider/X2.PNG",
        color: "bg-green-500"
    },
    {
        title: "Project 3",
        description: "",
        image: "/slider/X3.PNG",
        color: "bg-purple-500"
    },
    {
        title: "Project 4",
        description: "",
        image: "/slider/X4.PNG",
        color: "bg-orange-500"
    },
    {
        title: "Project 5",
        description: "",
        image: "/slider/X5.PNG",
        color: "bg-red-500"
    },
    {
        title: "Project 6",
        description: "",
        image: "/slider/X6.PNG",
        color: "bg-yellow-500"
    },
    {
        title: "Project 7",
        description: "",
        image: "/slider/X7.PNG",
        color: "bg-indigo-500"
    }
];

export default function ProjectSlider() {
    const containerRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        gsap.to(slider, {
            x: "-50%",
            duration: 50, // Adjust speed as needed
            ease: "none",
            repeat: -1,
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-24 bg-black overflow-hidden">
            <div className="container mx-auto px-6 mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Our <span className="font-light text-white/70">Works</span>
                </h2>
            </div>

            <div className="relative w-full overflow-hidden">
                <div
                    ref={sliderRef}
                    className="flex gap-8 w-max"
                >
                    {/* Duplicate list for infinite scroll effect */}
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex gap-8">
                            {sliderData.map((item, index) => (
                                <div
                                    key={`${i}-${index}`}
                                    className="w-[85vw] md:w-[600px] aspect-[16/10] relative rounded-3xl overflow-hidden bg-neutral-900 group"
                                >
                                    {/* Image */}
                                    <div className="absolute inset-0">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className={`absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500`} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
