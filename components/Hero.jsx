"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col md:flex-row items-stretch overflow-hidden pt-20 md:pt-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-slate-900 via-black to-black border-b border-white/5">
            {/* Animated Glow Orbs */}
            <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FFD700]/20 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-[#FFD700]/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-[#FFD700]/10 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex w-full items-center">
                {/* Left: Content */}
                <div className="w-[55%] flex items-center justify-center p-8 lg:p-16 xl:p-24 relative z-10">
                    <div className="w-full max-w-2xl space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <h2 className="tracking-[0.2em] uppercase text-xs font-semibold mb-6" style={{ color: '#FFD700' }}>
                                EXECUTIVE PROFILE
                            </h2>
                            <h1 className="font-serif font-bold leading-[0.9] tracking-tighter mb-6 text-slate-100 mix-blend-screen text-balance" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)' }}>
                                Architecting Legacies. <br />
                                <span className="text-slate-300">Transforming Leadership.</span>
                            </h1>
                            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-lg font-light">
                                16 years of cross-industry mastery in Real Estate development and High-Performance Life Coaching. Bridging the gap between vision and execution.
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

                {/* Right: Image - Premium Frame */}
                <div className="w-[45%] h-screen flex items-center justify-center p-12 relative z-10">
                    <div className="relative w-full h-full rounded-3xl overflow-hidden">
                        {/* Glow behind image */}
                        <div className="absolute -z-10 inset-0 bg-[#FFD700]/15 blur-[120px]"></div>

                        <div className="relative w-full h-full bg-neutral-800 rounded-3xl overflow-hidden">
                            <Image
                                src="/shakeel-profile.png"
                                alt="Shakeel Bukhari - Executive Coach & Real Estate Specialist"
                                fill
                                className="object-cover object-center"
                                priority
                                quality={95}
                            />
                            {/* Subtle overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/30 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Layout - Overlap Design */}
            <div className="md:hidden flex flex-col relative w-full min-h-screen">
                {/* Image at Top */}
                <div className="relative w-full h-[60vh]">
                    <Image
                        src="/shakeel-profile.png"
                        alt="Shakeel Bukhari - Executive Coach & Real Estate Specialist"
                        fill
                        className="object-cover object-center"
                        priority
                        quality={95}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
                </div>

                {/* Overlapping Glass Card */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: -80 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative z-20 mx-6 -mt-32 bg-black/60 backdrop-blur-xl rounded-3xl border border-white/10 p-8 space-y-6"
                >
                    <h2 className="tracking-[0.2em] uppercase text-[10px] font-semibold" style={{ color: '#FFD700' }}>
                        EXECUTIVE PROFILE
                    </h2>
                    <h1 className="font-serif text-4xl font-bold leading-[0.9] tracking-tighter text-slate-100 text-balance">
                        Architecting Legacies. <br />
                        <span className="text-slate-300">Transforming Leadership.</span>
                    </h1>
                    <p className="text-slate-400 text-base leading-relaxed font-light">
                        16 years of cross-industry mastery in Real Estate development and High-Performance Life Coaching.
                    </p>

                    <div className="flex items-center gap-6 pt-4">
                        <div className="flex flex-col">
                            <h3 className="text-2xl font-serif text-white">16+</h3>
                            <span className="text-xs text-slate-500 uppercase tracking-wider">Years</span>
                        </div>
                        <div className="w-px h-10 bg-white/10"></div>
                        <div className="flex flex-col">
                            <h3 className="text-2xl font-serif text-white">3+</h3>
                            <span className="text-xs text-slate-500 uppercase tracking-wider">Industries</span>
                        </div>
                    </div>
                </motion.div>

                {/* Spacer */}
                <div className="h-32"></div>
            </div>
        </section>
    );
}
