"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Logos() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const companies = [
        { name: "IMARAT Group", logo: "IMARAT" },
        { name: "Telenor", logo: "TELENOR" },
        { name: "Jazz", logo: "JAZZ" },
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
                    className="hidden md:block relative max-w-4xl mx-auto bg-white/5 backdrop-blur-md rounded-full border border-white/10 py-6 px-12"
                >
                    {/* Spotlight that follows mouse */}
                    <div
                        className="absolute pointer-events-none transition-opacity duration-500"
                        style={{
                            left: mousePosition.x - 100,
                            top: mousePosition.y - 100,
                            width: '200px',
                            height: '200px',
                            background: 'radial-gradient(circle, rgba(255,215,0,0.15) 0%, transparent 70%)',
                            filter: 'blur(20px)',
                        }}
                    ></div>

                    {/* Logos */}
                    <div className="relative z-10 flex items-center justify-around gap-8">
                        {companies.map((company, index) => (
                            <motion.div
                                key={company.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.1 }}
                                className="group relative h-12 flex items-center"
                            >
                                <div
                                    className="font-serif text-2xl font-bold tracking-tight cursor-default transition-all duration-500"
                                    style={{
                                        filter: 'grayscale(100%) brightness(200%)',
                                    }}
                                >
                                    <span
                                        className="bg-gradient-to-r from-slate-300 to-slate-200 group-hover:from-[#FFD700] group-hover:to-amber-200 bg-clip-text text-transparent transition-all duration-500"
                                        onMouseEnter={(e) => {
                                            e.currentTarget.parentElement.style.filter = 'grayscale(0%) brightness(100%)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.parentElement.style.filter = 'grayscale(100%) brightness(200%)';
                                        }}
                                    >
                                        {company.logo}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Mobile: Auto-scroll Infinite Loop */}
                <div className="md:hidden relative">
                    <div className="flex animate-[scroll_20s_linear_infinite] whitespace-nowrap">
                        {[...companies, ...companies].map((company, index) => (
                            <div
                                key={`${company.name}-${index}`}
                                className="inline-flex items-center justify-center px-8"
                            >
                                <div className="font-serif text-xl font-bold tracking-tight" style={{ filter: 'grayscale(100%) brightness(200%)' }}>
                                    <span className="bg-gradient-to-r from-slate-300 to-slate-200 bg-clip-text text-transparent">
                                        {company.logo}
                                    </span>
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
