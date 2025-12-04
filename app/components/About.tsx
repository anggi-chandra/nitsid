"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const images = ["/ABOUT.JPG", "/ABOUT_2.JPG", "/ABOUT_3.JPG"];

export default function About() {
    const container = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // Change image every 4 seconds

        return () => clearInterval(interval);
    }, []);

    useGSAP(
        () => {
            gsap.from(textRef.current, {
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });

            gsap.from(imageRef.current, {
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
                scale: 0.8,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                delay: 0.2,
            });
        },
        { scope: container }
    );

    return (
        <section ref={container} className="py-24 md:py-32 relative">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div ref={textRef}>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">
                            Discover <br />
                            <span className="font-light text-white/70">Our Studio</span>
                        </h2>
                        <p className="text-lg text-white/60 mb-6 leading-relaxed">
                            At NITS, we are a collective of talented individuals ignited by
                            our unwavering passion for transforming ideas into reality. With a
                            harmonious blend of diverse backgrounds and a vast array of skill
                            sets, we join forces to create compelling solutions for our
                            esteemed clients.
                        </p>
                        <p className="text-lg text-white/60 mb-8 leading-relaxed">
                            Collaboration is at the heart of what we do. Our team thrives on
                            the synergy that arises when unique perspectives converge,
                            fostering an environment of boundless creativity.
                        </p>
                        <a href="#contact" className="mil-button">
                            Read More
                        </a>
                    </div>

                    <div ref={imageRef} className="relative">
                        <div className="aspect-[4/5] bg-neutral-900 rounded-lg overflow-hidden relative">
                            {images.map((src, index) => (
                                <div
                                    key={src}
                                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100" : "opacity-0"
                                        }`}
                                >
                                    <Image
                                        src={src}
                                        alt={`About NITS Studio ${index + 1}`}
                                        fill
                                        className="object-cover"
                                        priority={index === 0}
                                    />
                                </div>
                            ))}

                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 blur-[50px] z-10 pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/20 blur-[50px] z-10 pointer-events-none" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
