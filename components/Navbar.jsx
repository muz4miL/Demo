"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-transparent",
                scrolled ? "bg-[#121212]/30 backdrop-blur-md border-white/10" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-white">
                    <span className="text-primary">S</span>hakeel <span className="text-primary">B</span>ukhari
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link href="#about" className="text-sm font-medium text-slate-300 hover:text-primary transition-colors">
                        About
                    </Link>
                    <Link href="#experience" className="text-sm font-medium text-slate-300 hover:text-primary transition-colors">
                        Experience
                    </Link>
                    <Link href="#services" className="text-sm font-medium text-slate-300 hover:text-primary transition-colors">
                        Services
                    </Link>
                </div>

                {/* CTA */}
                <div className="hidden md:block">
                    <motion.div
                        animate={{
                            boxShadow: [
                                "0 0 15px rgba(247,231,206,0.3)",
                                "0 0 25px rgba(247,231,206,0.5)",
                                "0 0 15px rgba(247,231,206,0.3)",
                            ],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        whileHover={{ scale: 1.05 }}
                        className="rounded-full"
                    >
                        <Link
                            href="#contact"
                            className="block px-4 md:px-6 py-2 md:py-2.5 bg-primary text-primary-foreground text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] rounded-full hover:bg-primary/90 transition-all"
                        >
                            Connect
                        </Link>
                    </motion.div>
                </div>

                {/* Mobile Toggle */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-[#121212] border-b border-white/10 px-6 py-4 space-y-4"
                >
                    <Link href="#about" onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-primary">
                        About
                    </Link>
                    <Link href="#experience" onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-primary">
                        Experience
                    </Link>
                    <Link href="#services" onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-primary">
                        Services
                    </Link>
                    <Link
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                        className="block text-center px-6 py-3 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-[0.25em] rounded-full"
                    >
                        Connect
                    </Link>
                </motion.div>
            )}
        </nav>
    );
}
