"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "#about", label: "About" },
        { href: "#experience", label: "Experience" },
        { href: "#services", label: "Services" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/5">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="font-serif text-xl md:text-2xl text-white tracking-tight">
                    <span style={{ color: '#F7E7CE' }}>S</span>hakeel <span style={{ color: '#F7E7CE' }}>B</span>ukhari
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm text-slate-300 hover:text-white transition-colors duration-300"
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* CTA Button with Glass-Gold Finish */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="rounded-full"
                    >
                        <Link
                            href="#contact"
                            className="block px-6 py-2.5 bg-[#F7E7CE] text-black text-xs font-semibold uppercase tracking-[0.25em] rounded-full transition-all backdrop-blur-md shadow-[0_0_20px_rgba(247,231,206,0.2)] hover:shadow-[0_0_30px_rgba(247,231,206,0.5)]"
                        >
                            Connect
                        </Link>
                    </motion.div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white p-2"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/5"
                    >
                        <div className="px-6 py-8 space-y-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-lg text-slate-300 hover:text-white transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="block text-center px-6 py-3 bg-[#F7E7CE] text-[#121212] text-xs font-semibold uppercase tracking-[0.25em] rounded-full"
                            >
                                Connect
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
