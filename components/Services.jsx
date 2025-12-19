"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Building } from "lucide-react";

export default function Services() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const services = [
        {
            id: 1,
            title: "Elite Life Coaching",
            description: "Transforming leadership through strategic mindset development and visionary guidance.",
            features: ["Executive Leadership", "Mindset Mastery", "Vision Development", "High Performance"],
            icon: Sparkles,
            gradient: "from-amber-900/40 via-neutral-900/80 to-neutral-900",
        },
        {
            id: 2,
            title: "Luxury Real Estate",
            description: "Strategic investment consulting and high-end property development expertise.",
            features: ["Investment Strategy", "Premium Development", "Market Analysis", "Portfolio Growth"],
            icon: Building,
            gradient: "from-slate-900/40 via-neutral-900/80 to-neutral-900",
        },
    ];

    return (
        <section ref={ref} className="py-24 md:py-32 px-6 relative overflow-hidden">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="max-w-7xl mx-auto mb-16"
            >
                <h2 className="text-[#F7E7CE] tracking-[0.2em] uppercase text-xs font-semibold mb-4">
                    Specialized Services
                </h2>
                <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100">
                    Dual Mastery
                </h3>
            </motion.div>

            {/* Services Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="group relative h-[600px] rounded-2xl overflow-hidden border border-white/10 hover:border-[#F7E7CE] hover:shadow-[0_0_50px_-12px_rgba(247,231,206,0.3)] transition-all duration-500"
                    >
                        {/* Background with gradient overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} transition-transform duration-700 group-hover:scale-105`}>
                            {/* Subtle pattern overlay */}
                            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>
                        </div>

                        {/* Content */}
                        <div className="relative h-full p-8 md:p-12 flex flex-col justify-end z-10">
                            {/* Icon */}
                            <service.icon className="w-12 h-12 text-[#F7E7CE] mb-6" strokeWidth={1.5} />

                            {/* Title */}
                            <h4 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 mb-4 leading-tight">
                                {service.title}
                            </h4>

                            {/* Description */}
                            <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-6 max-w-md">
                                {service.description}
                            </p>

                            {/* Features */}
                            <div className="grid grid-cols-2 gap-3">
                                {service.features.map((feature, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                        transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                                        className="flex items-center space-x-2"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#F7E7CE]"></div>
                                        <span className="text-sm text-slate-400">{feature}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Hover glow effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#F7E7CE]/10 to-transparent"></div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
