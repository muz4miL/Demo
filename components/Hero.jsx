"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Counter from "./Counter";

// Word-by-word animation component
function AnimatedWord({ children, index, scrollY }) {
    const start = index * 30;
    const end = start + 150;

    const opacity = useTransform(scrollY, [start, end, 400], [1, 0.3, 0]);
    const y = useTransform(scrollY, [start, end, 400], [0, -20, -40]);

    return (
        <motion.span
            style={{ opacity, y }}
            className="inline-block mr-[0.25em]"
        >
            {children}
        </motion.span>
    );
}

export default function Hero() {
    const { scrollY } = useScroll();

    // Headline words for staggered animation
    const line1Words = ["Architecting", "Legacies."];
    const line2Words = ["Transforming", "Leadership."];

    return (
        <section className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-slate-900 via-black to-black border-b border-white/5">
            {/* Animated Glow Orbs - Champagne Gold Aura */}
            <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F7E7CE]/20 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-[#F7E7CE]/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-[#F7E7CE]/10 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* ========== DESKTOP LAYOUT ========== */}
            <div className="hidden md:flex w-full min-h-screen items-center pt-20">
                {/* Left: Content - Golden Ratio 60% */}
                <div className="w-[60%] flex items-center justify-center p-8 lg:p-16 xl:p-24 relative z-10">
                    <div className="w-full max-w-2xl space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <h2 className="tracking-[0.2em] uppercase text-xs font-semibold mb-6" style={{ color: '#F7E7CE' }}>
                                EXECUTIVE PROFILE
                            </h2>

                            {/* Word-by-Word Animated Headline */}
                            <h1 className="font-serif font-bold leading-[0.9] tracking-tighter mb-6 text-slate-100" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)' }}>
                                <span className="block">
                                    {line1Words.map((word, i) => (
                                        <AnimatedWord key={word} index={i} scrollY={scrollY}>
                                            {word}
                                        </AnimatedWord>
                                    ))}
                                </span>
                                <span className="block text-slate-300">
                                    {line2Words.map((word, i) => (
                                        <AnimatedWord key={word} index={i + line1Words.length} scrollY={scrollY}>
                                            {word}
                                        </AnimatedWord>
                                    ))}
                                </span>
                            </h1>

                            <motion.p
                                className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-lg font-light"
                                style={{
                                    opacity: useTransform(scrollY, [0, 200], [1, 0]),
                                    y: useTransform(scrollY, [0, 200], [0, -30])
                                }}
                            >
                                16 years of cross-industry mastery in Real Estate development and High-Performance Life Coaching. Bridging the gap between vision and execution.
                            </motion.p>
                        </motion.div>

                        {/* Animated Counters with Scroll Exit */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                            className="flex items-center gap-6"
                            style={{
                                opacity: useTransform(scrollY, [0, 250], [1, 0]),
                                y: useTransform(scrollY, [0, 250], [0, -40])
                            }}
                        >
                            <div className="flex flex-col">
                                <h3 className="text-3xl font-serif text-white">
                                    <Counter from={0} to={16} suffix="+" duration={2} />
                                </h3>
                                <span className="text-sm text-slate-500 uppercase tracking-wider">Years Exp.</span>
                            </div>
                            <div className="w-px h-12 bg-white/10"></div>
                            <div className="flex flex-col">
                                <h3 className="text-3xl font-serif text-white">
                                    <Counter from={0} to={3} suffix="+" duration={1.5} />
                                </h3>
                                <span className="text-sm text-slate-500 uppercase tracking-wider">Industries</span>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Right: Image - Golden Ratio 40% with Premium Art Frame */}
                <div className="w-[40%] h-screen flex items-center justify-center p-16 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative w-full h-full"
                    >
                        {/* Glow behind image */}
                        <div className="absolute -z-10 inset-0 bg-[#F7E7CE]/15 blur-[120px]"></div>

                        <div className="relative w-full h-full bg-neutral-800 rounded-[3rem] overflow-hidden">
                            <Image
                                src="/shakeel-profile.png"
                                alt="Shakeel Bukhari - Executive Coach & Real Estate Specialist"
                                fill
                                className="object-cover object-center rounded-[3rem]"
                                priority
                                quality={95}
                            />
                            {/* Subtle overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/30 to-transparent"></div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ========== MOBILE LAYOUT - "EDITORIAL STACK" ========== */}
            <div className="md:hidden flex flex-col pt-16">
                {/* Image Container - 50vh Portrait */}
                <div className="w-full relative h-[50vh]">
                    <Image
                        src="/shakeel-profile.png"
                        alt="Shakeel Bukhari - Executive Coach & Real Estate Specialist"
                        fill
                        className="object-cover object-top"
                        priority
                        quality={95}
                    />
                    {/* Bottom gradient for seamless blend */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#121212] to-transparent"></div>
                </div>

                {/* Text Container - Centered, Subtle Overlap */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full px-10 py-16 mt-[-20px] text-center"
                >
                    <h2 className="tracking-[0.2em] uppercase text-[10px] font-semibold mb-4" style={{ color: '#F7E7CE' }}>
                        EXECUTIVE PROFILE
                    </h2>
                    <h1 className="font-serif text-4xl font-bold leading-[0.95] tracking-tighter text-slate-100 text-balance mb-4">
                        Architecting Legacies. <br />
                        <span className="text-slate-300">Transforming Leadership.</span>
                    </h1>
                    <p className="text-slate-400 text-base leading-relaxed font-light mb-8 max-w-sm mx-auto">
                        16 years of cross-industry mastery in Real Estate development and High-Performance Life Coaching.
                    </p>

                    {/* Centered Animated Counters */}
                    <div className="flex items-center justify-center gap-8">
                        <div className="flex flex-col items-center">
                            <h3 className="text-2xl font-serif text-white">
                                <Counter from={0} to={16} suffix="+" duration={2} />
                            </h3>
                            <span className="text-xs text-slate-500 uppercase tracking-wider">Years</span>
                        </div>
                        <div className="w-px h-10 bg-white/20"></div>
                        <div className="flex flex-col items-center">
                            <h3 className="text-2xl font-serif text-white">
                                <Counter from={0} to={3} suffix="+" duration={1.5} />
                            </h3>
                            <span className="text-xs text-slate-500 uppercase tracking-wider">Industries</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
