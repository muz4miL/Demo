"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col md:flex-row items-stretch overflow-hidden pt-20">
            {/* Left: Content */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 relative z-10">
                <div className="w-full max-w-xl space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="text-primary text-lg md:text-xl tracking-widest uppercase font-medium mb-4">
                            Executive Profile
                        </h2>
                        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white">
                            16 Years of <br />
                            <span className="text-slate-300">Excellence.</span>
                        </h1>
                        <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-lg">
                            Transforming visions into reality through expert Life Coaching, Business Strategy, and High-End Real Estate solutions.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className="flex items-center gap-6"
                    >
                        <div className="flex flex-col">
                            <h3 className="text-3xl font-serif text-white">16+</h3>
                            <span className="text-sm text-slate-500 uppercase tracking-wider">Years Exp.</span>
                        </div>
                        <div className="w-px h-12 bg-white/10"></div>
                        <div className="flex flex-col">
                            <h3 className="text-3xl font-serif text-white">3+</h3>
                            <span className="text-sm text-slate-500 uppercase tracking-wider">Industries</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Right: Image */}
            <div className="w-full md:w-1/2 relative min-h-[50vh] md:min-h-screen">
                <div className="absolute inset-0 bg-neutral-800">
                    {/* Placeholder for High Res Image */}
                    {/* Use a luxury gradient or abstract placeholder if no image is available yet */}
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
                        <span className="text-white/10 font-serif text-4xl">[High Res Portrait]</span>
                    </div>
                    {/* Overlay to blend with dark theme */}
                    <div className="absolute inset-0 bg-gradient-to-l from-[#121212] via-transparent to-transparent opacity-50 md:opacity-100"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent md:hidden"></div>
                </div>
            </div>
        </section>
    );
}
