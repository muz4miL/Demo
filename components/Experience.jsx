"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, TrendingUp, Users } from "lucide-react";

export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const cards = [
        {
            id: 1,
            span: "md:col-span-2",
            title: "16 Years of Excellence",
            subtitle: "Strategic Leadership at IMARAT, Telenor, & Jazz",
            icon: Building2,
            gradient: "from-[#F7E7CE]/20 to-transparent",
        },
        {
            id: 2,
            span: "md:col-span-1",
            title: "3+ Industries",
            subtitle: "Real Estate • Telecom • Coaching",
            icon: TrendingUp,
            gradient: "from-[#F7E7CE]/10 to-transparent",
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
            gradient: "from-[#F7E7CE]/15 to-transparent",
        },
    ];

    return (
        <section ref={ref} className="py-20 md:py-32 px-6 relative overflow-hidden">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="max-w-7xl mx-auto mb-16"
            >
                <h2 className="text-[#F7E7CE] tracking-[0.2em] uppercase text-xs font-semibold mb-4">
                    Experience
                </h2>
                <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100">
                    A Legacy of Impact
                </h3>
            </motion.div>

            {/* Bento Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {cards.map((card, index) => (
                    <motion.div
                        key={card.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ y: -5, borderColor: "#F7E7CE" }}
                        className={`${card.span} bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 group transition-all duration-300 relative overflow-hidden`}
                    >
                        {/* Gradient Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                        {/* Icon */}
                        {card.icon && (
                            <card.icon className="w-8 h-8 text-[#F7E7CE] mb-4 relative z-10" strokeWidth={1.5} />
                        )}

                        {/* Content */}
                        <div className="relative z-10">
                            <h4 className="font-serif text-2xl md:text-3xl font-bold text-slate-100 mb-2">
                                {card.title}
                            </h4>
                            {card.subtitle && (
                                <p className="text-slate-400 text-sm md:text-base leading-relaxed">{card.subtitle}</p>
                            )}

                            {/* Roles List */}
                            {card.roles && (
                                <div className="mt-6 space-y-4">
                                    {card.roles.map((role, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                            transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                                            className="border-l-2 border-[#F7E7CE]/30 pl-4"
                                        >
                                            <h5 className="text-slate-100 font-semibold text-base md:text-xl leading-relaxed">
                                                {role.company}
                                            </h5>
                                            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{role.role}</p>
                                            <p className="text-slate-500 text-xs mt-1">{role.years}</p>
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
