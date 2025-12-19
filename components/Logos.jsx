"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

export default function Logos() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const companies = [
        { name: "IMARAT Group", logo: "/imarat-logo.png", width: 140, height: 60 },
        { name: "Telenor", logo: "/telenor-logo.png", width: 140, height: 60 },
        { name: "Jazz", logo: "/jazz-logo.png", width: 100, height: 60 },
    ];

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <section ref={ref} className="py-16 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Optional Label */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center text-slate-500 text-xs uppercase tracking-[0.2em] mb-10"
                >
                    Trusted By Industry Leaders
                </motion.p>

                {/* Desktop: Floating Glass Ribbon */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8 }}
                    onMouseMove={handleMouseMove}
                    className="hidden md:block relative max-w-4xl mx-auto bg-white/5 backdrop-blur-md rounded-full border border-white/10 py-8 px-12"
                >
                    {/* Spotlight that follows mouse */}
                    <div
                        className="absolute pointer-events-none transition-opacity duration-500"
                        style={{
                            left: mousePosition.x - 100,
                            top: mousePosition.y - 100,
                            width: '200px',
                            height: '200px',
                            background: 'radial-gradient(circle, rgba(247,231,206,0.15) 0%, transparent 70%)',
                            filter: 'blur(20px)',
                        }}
                    ></div>

                    {/* Logos */}
                    <div className="relative z-10 flex items-center justify-around gap-12">
                        {companies.map((company, index) => (
                            <motion.div
                                key={company.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.1 }}
                                className="group relative flex items-center justify-center"
                                style={{ minWidth: '120px' }}
                            >
                                <div className="relative transition-all duration-500 grayscale brightness-200 group-hover:grayscale-0 group-hover:brightness-100">
                                    <Image
                                        src={company.logo}
                                        alt={company.name}
                                        width={company.width}
                                        height={company.height}
                                        className="object-contain"
                                        style={{ filter: 'drop-shadow(0 0 10px rgba(255,215,0,0))' }}
                                    />
                                </div>
                                {/* Gold glow on hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F7E7CE]/20 to-transparent blur-xl"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Mobile: Auto-scroll Infinite Loop */}
                <div className="md:hidden relative overflow-hidden">
                    <div className="flex animate-[scroll_20s_linear_infinite] whitespace-nowrap">
                        {[...companies, ...companies].map((company, index) => (
                            <div
                                key={`${company.name}-${index}`}
                                className="inline-flex items-center justify-center px-8"
                            >
                                <div className="grayscale brightness-200">
                                    <Image
                                        src={company.logo}
                                        alt={company.name}
                                        width={company.width * 0.8}
                                        height={company.height * 0.8}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
        </section>
    );
}
