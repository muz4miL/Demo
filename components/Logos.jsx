"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Logos() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const companies = [
        { name: "IMARAT Group", logo: "/imarat-logo.png", width: 140, height: 60 },
        { name: "Telenor", logo: "/telenor-logo.png", width: 140, height: 60 },
        { name: "Jazz", logo: "/jazz-logo.png", width: 100, height: 60 },
    ];

    return (
        <section
            ref={ref}
            className="py-16 px-6 relative overflow-visible"
        >
            <div className="max-w-7xl mx-auto">
                {/* Label */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center text-executive-soft text-xs uppercase tracking-[0.2em] mb-10"
                >
                    Trusted By Industry Leaders
                </motion.p>

                {/* Desktop: Floating Glass Ribbon with Infinite Scroll */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8 }}
                    className="hidden md:block relative max-w-4xl mx-auto bg-white/5 backdrop-blur-md rounded-full border border-white/10 py-6 px-12 overflow-hidden"
                >
                    {/* Infinite Scrolling Logos - Full Brand Colors */}
                    <div className="flex items-center gap-16 animate-[scroll_20s_linear_infinite]">
                        {[...companies, ...companies].map((company, index) => (
                            <motion.div
                                key={`${company.name}-${index}`}
                                whileHover={{ scale: 1.1 }}
                                className="group relative flex items-center justify-center cursor-pointer flex-shrink-0"
                                style={{
                                    minWidth: '140px',
                                    filter: 'drop-shadow(0 0 10px rgba(197,160,117,0.1))'
                                }}
                            >
                                <Image
                                    src={company.logo}
                                    alt={company.name}
                                    width={company.width}
                                    height={company.height}
                                    className="object-contain transition-all duration-300"
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Mobile: Glass Pill with Infinite Scroll */}
                <div className="md:hidden relative z-30 overflow-visible">
                    <div className="relative max-w-md mx-auto bg-white/5 backdrop-blur-md rounded-full border border-white/10 py-4 px-8 overflow-hidden">
                        <div className="flex items-center gap-12 animate-[scroll_20s_linear_infinite]">
                            {[...companies, ...companies].map((company, index) => (
                                <div
                                    key={`${company.name}-${index}`}
                                    className="inline-flex items-center justify-center flex-shrink-0"
                                    style={{
                                        minWidth: '100px',
                                        filter: 'drop-shadow(0 0 10px rgba(197,160,117,0.1))'
                                    }}
                                >
                                    <Image
                                        src={company.logo}
                                        alt={company.name}
                                        width={company.width * 0.7}
                                        height={company.height * 0.7}
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                        </div>
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
