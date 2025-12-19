"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, TrendingUp, Users } from "lucide-react";
import Counter from "./Counter";

export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const cards = [
        {
            id: 1,
            span: "md:col-span-2",
            title: "16 Years of Excellence",
            number: 16,
            suffix: "+",
            subtitle: "Strategic Leadership at IMARAT, Telenor, & Jazz",
            icon: Building2,
            gradient: "from-executive-gold/20 to-transparent",
        },
        {
            id: 2,
            span: "md:col-span-1",
            title: "3+ Industries",
            number: 3,
            suffix: "+",
            subtitle: "Real Estate • Telecom • Coaching",
            icon: TrendingUp,
            gradient: "from-executive-gold/10 to-transparent",
        },
        {
            id: 3,
            span: "md:col-span-3",
            title: "Professional Journey",
            roles: [
                { company: "IMARAT Group", role: "Business Centre Manager", years: "Agency21 International" },
                { company: "Telenor", role: "Business Account Manager", years: "Telecom Leadership" },
                { company: "Jazz (Mobilink)", role: "Corporate Account Manager", years: "Enterprise Solutions" },
            ],
            icon: Users,
            gradient: "from-executive-gold/15 to-transparent",
        },
    ];

    return (
        <section ref={ref} className="py-20 md:py-32 px-6 relative overflow-hidden bg-[#0A0A0B]">
            {/* Background Spotlight Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-executive-muted/20 rounded-full blur-[160px] pointer-events-none"></div>

            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="max-w-7xl mx-auto mb-16 relative z-10"
            >
                <h2 className="text-executive-gold tracking-[0.2em] uppercase text-xs font-semibold mb-4">
                    Experience
                </h2>
                <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                    A Legacy of Impact
                </h3>
            </motion.div>

            {/* Bento Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                {cards.map((card, index) => (
                    <motion.div
                        key={card.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ y: -5, borderColor: "#C5A075" }}
                        className={`${card.span} bg-executive-muted backdrop-blur-lg border border-white/5 rounded-2xl p-6 md:p-8 ${card.roles ? 'py-10' : ''} group transition-all duration-300 relative overflow-hidden hover:border-executive-gold/50 hover:shadow-[0_0_30px_rgba(197,160,117,0.15)]`}
                    >
                        {/* Glass-Shine Sweep Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full" style={{ transition: 'transform 0.8s ease-in-out, opacity 0.5s' }}></div>

                        {/* Gradient Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                        {/* Icon with Rotation */}
                        {card.icon && (
                            <card.icon className="w-8 h-8 text-executive-gold mb-4 relative z-10 transition-transform duration-300 group-hover:rotate-12" strokeWidth={1.5} />
                        )}

                        {/* Content */}
                        <div className="relative z-10">
                            {/* Animated Counter for Stats Cards */}
                            {card.number ? (
                                <h4 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2">
                                    <Counter from={0} to={card.number} />
                                    {card.suffix} {card.title.split(' ').slice(1).join(' ')}
                                </h4>
                            ) : (
                                <h4 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2">
                                    {card.title}
                                </h4>
                            )}

                            {card.subtitle && (
                                <p className="text-sm md:text-base leading-relaxed text-executive-soft">{card.subtitle}</p>
                            )}

                            {/* Roles List */}
                            {card.roles && (
                                <div className="mt-6 space-y-6">
                                    {card.roles.map((role, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                            transition={{ duration: 0.5, delay: 0.4 + idx * 0.15 }}
                                            className="relative pl-4"
                                        >
                                            {/* Champagne Gold Gradient Border */}
                                            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-executive-gold/60 via-executive-gold/30 to-transparent"></div>

                                            <h5 className="font-serif font-semibold text-base md:text-xl leading-relaxed" style={{ color: '#F8FAFC' }}>
                                                {role.company}
                                            </h5>
                                            <p className="text-xs md:text-sm leading-relaxed" style={{ color: '#9CA3AF' }}>{role.role}</p>
                                            <p className="text-xs mt-1" style={{ color: '#6B7280' }}>{role.years}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
