"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Counter from "./Counter";

// Word-by-word animation component
function AnimatedWord({ children, index, scrollY, color }) {
    const start = index * 30;
    const end = start + 300;

    const opacity = useTransform(scrollY, [start, end, 500], [1, 0.3, 0]);
    const y = useTransform(scrollY, [start, end, 500], [0, -20, -40]);

    return (
        <motion.span
            style={{
                opacity,
                y,
                '--word-color': color || 'inherit',
                color: 'var(--word-color)'
            }}
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
        <section className="relative min-h-screen overflow-hidden bg-background border-b border-white/[0.03]">
            {/* Radial Glow Background */}
            <div className="absolute top-[20%] left-[20%] w-[800px] h-[800px] rounded-full blur-[160px] pointer-events-none -z-10" style={{ background: 'rgba(247, 231, 206, 0.15)' }}></div>

            {/* Animated Glow Orbs - Champagne Gold Aura */}
            <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[100px] animate-pulse" style={{ background: 'rgba(247, 231, 206, 0.15)' }}></div>
                <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full blur-[120px] animate-pulse" style={{ background: 'rgba(247, 231, 206, 0.12)', animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 right-1/4 w-72 h-72 rounded-full blur-[140px] animate-pulse" style={{ background: 'rgba(247, 231, 206, 0.10)', animationDelay: '2s' }}></div>
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
                            <h2 className="tracking-[0.2em] uppercase text-xs font-semibold mb-6 text-executive-gold">
                                EXECUTIVE PROFILE
                            </h2>

                            {/* Word-by-Word Animated Headline */}
                            <h1 className="font-serif font-bold leading-[0.9] tracking-tighter mb-6" style={{
                                fontSize: 'clamp(3rem, 8vw, 5rem)',
                                color: '#FAFAFA',
                                filter: 'drop-shadow(0 0 10px rgba(197,160,117,0.2))'
                            }}>
                                <span className="block">
                                    {line1Words.map((word, i) => (
                                        <AnimatedWord key={word} index={i} scrollY={scrollY}>
                                            {word}
                                        </AnimatedWord>
                                    ))}
                                </span>
                                <span className="block">
                                    {line2Words.map((word, i) => (
                                        <AnimatedWord key={word} index={i + line1Words.length} scrollY={scrollY} color="#C5A075">
                                            {word}
                                        </AnimatedWord>
                                    ))}
                                </span>
                            </h1>

                            <motion.p
                                className="text-lg md:text-xl leading-relaxed max-w-lg font-light"
                                style={{
                                    color: '#D1D5DB',
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
                                <span className="text-sm text-executive-soft uppercase tracking-wider">Years Exp.</span>
                            </div>
                            <div className="w-px h-12 bg-white/10"></div>
                            <div className="flex flex-col">
                                <h3 className="text-3xl font-serif text-white">
                                    <Counter from={0} to={3} suffix="+" duration={1.5} />
                                </h3>
                                <span className="text-sm text-executive-soft uppercase tracking-wider">Industries</span>
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
                        <div className="absolute -z-10 inset-0 bg-executive-gold/15 blur-[120px]"></div>

                        <div className="relative w-full h-full bg-executive-muted rounded-[3rem] overflow-hidden">
                            <Image
                                src="/shakeel-profile.png"
                                alt="Shakeel Bukhari - Executive Coach & Real Estate Specialist"
                                fill
                                className="object-cover object-center rounded-[3rem]"
                                priority
                                quality={95}
                            />
                            {/* Subtle overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent"></div>
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
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
                </div>

                {/* Text Container - Centered, Subtle Overlap */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full px-10 py-16 mt-[-20px] text-center"
                >
                    <h2 className="tracking-[0.2em] uppercase text-[10px] font-semibold mb-4 text-executive-gold">
                        EXECUTIVE PROFILE
                    </h2>
                    <h1 className="font-serif text-4xl font-bold leading-[0.95] tracking-tighter text-balance mb-4" style={{ color: '#FAFAFA' }}>
                        Architecting Legacies. <br />
                        <span style={{ color: '#C5A075' }}>Transforming Leadership.</span>
                    </h1>
                    <p className="text-base leading-relaxed font-light mb-8 max-w-sm mx-auto" style={{ color: '#D1D5DB' }}>
                        16 years of cross-industry mastery in Real Estate development and High-Performance Life Coaching.
                    </p>

                    {/* Centered Animated Counters */}
                    <div className="flex items-center justify-center gap-8">
                        <div className="flex flex-col items-center">
                            <h3 className="text-2xl font-serif text-white">
                                <Counter from={0} to={16} suffix="+" duration={2} />
                            </h3>
                            <span className="text-xs uppercase tracking-wider" style={{ color: '#9CA3AF' }}>Years</span>
                        </div>
                        <div className="w-px h-10 bg-white/20"></div>
                        <div className="flex flex-col items-center">
                            <h3 className="text-2xl font-serif text-white">
                                <Counter from={0} to={3} suffix="+" duration={1.5} />
                            </h3>
                            <span className="text-xs uppercase tracking-wider" style={{ color: '#9CA3AF' }}>Industries</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}