"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Sparkles, Check } from "lucide-react";

export default function Services() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const services = [
        {
            title: "Elite Life Coaching",
            description: "Unlocking peak performance and profound personal transformation for high-net-worth individuals and executives.",
            features: ["Mindset Architecture", "Legacy Planning", "Executive Presence", "Holistic Wellness"],
            icon: Sparkles,
            // Deep gold/soft gradient for coaching
            gradient: "from-executive-gold/20 to-transparent",
        },
        {
            title: "Luxury Real Estate",
            description: "Curating exclusive investment opportunities and developing high-end properties that define skylines.",
            features: ["Portfolio Management", "Prime Development", "Market Analytics", "Asset Acquisition"],
            icon: Building2,
            // Slightly stronger structure for Real Estate
            gradient: "from-executive-gold/20 to-transparent",
        },
    ];

    // Stagger animation for container
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.4, 0.25, 1],
            },
        },
    };

    return (
        <section ref={ref} className="py-24 md:py-32 px-6 bg-background relative overflow-hidden" id="services">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-executive-muted/30 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-24 text-center md:text-left"
                >
                    <h2 className="text-executive-gold tracking-[0.2em] uppercase text-xs font-semibold mb-4">
                        Specialized Services
                    </h2>
                    <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                        Dual Mastery
                    </h3>
                </motion.div>

                {/* 3D Tilt Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} variants={cardVariants} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

// ========== 3D TILT SERVICE CARD COMPONENT ==========
const ServiceCard = ({ service, variants }) => {
    const cardRef = useRef(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        // Multiply by -15 for a nice satisfying tilt range
        setRotateX(yPct * -15);
        setRotateY(xPct * 15);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <motion.div
            variants={variants}
            className="perspective-1000 h-[600px] w-full"
            style={{ perspective: "1000px" }}
        >
            <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="group relative h-full w-full bg-executive-muted/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-executive-gold/50 transition-all duration-300 ease-out hover:shadow-[0_0_50px_-10px_rgba(197,160,117,0.3)]"
                style={{
                    transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                    transformStyle: "preserve-3d",
                }}
            >
                {/* 1. Top Area: Icon & Glow Container (1/3 Height) */}
                <div className="h-1/3 w-full relative overflow-hidden flex items-center justify-center bg-gradient-to-b from-executive-gold/10 to-transparent">
                    {/* Inner moving shine effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ transform: "translateZ(20px)" }} />

                    {/* The Icon */}
                    <div
                        className="relative z-10 p-6 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500 hover:border-executive-gold/30 hover:shadow-[0_0_30px_rgba(197,160,117,0.2)]"
                        style={{ transform: "translateZ(40px)" }}
                    >
                        <service.icon className="w-10 h-10 md:w-12 md:h-12 text-executive-gold" strokeWidth={1.2} />
                    </div>
                </div>

                {/* 2. Bottom Area: Content (2/3 Height) */}
                <div className="h-2/3 p-8 md:p-10 flex flex-col relative z-20">
                    {/* Floating Title */}
                    <div style={{ transform: "translateZ(30px)" }}>
                        <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-executive-gold transition-colors duration-300">
                            {service.title}
                        </h3>
                        <div className="w-12 h-1 bg-executive-gold/30 mb-6 group-hover:w-24 transition-all duration-500" />
                    </div>

                    {/* Description */}
                    <p
                        className="text-executive-soft text-base md:text-lg leading-relaxed mb-8"
                        style={{ transform: "translateZ(20px)" }}
                    >
                        {service.description}
                    </p>

                    {/* Features List */}
                    <div
                        className="mt-auto grid grid-cols-1 md:grid-cols-2 gap-4"
                        style={{ transform: "translateZ(25px)" }}
                    >
                        {service.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-3 group/item">
                                <div className="w-1.5 h-1.5 rounded-full bg-executive-gold shadow-[0_0_8px_rgba(197,160,117,0.5)] group-hover/item:scale-125 transition-transform" />
                                <span className="text-sm font-medium text-executive-soft group-hover/item:text-white transition-colors">
                                    {feature}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. Hover Inner Glow (Bottom Up) */}
                <div className="absolute inset-0 bg-gradient-to-t from-executive-gold/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            </motion.div>
        </motion.div>
    );
};
