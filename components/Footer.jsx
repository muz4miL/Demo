"use client";

import Link from "next/link";
import { Linkedin, MessageCircle, Mail, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative py-16 md:py-24 px-6 border-t border-white/5 overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-executive-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-12">
                    {/* Left: Brand */}
                    <div className="space-y-6">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
                            <span className="text-executive-gold">S</span>hakeel <span className="text-executive-gold">B</span>ukhari
                        </h2>
                        <p className="text-executive-soft text-sm md:text-base leading-relaxed max-w-md">
                            Transforming visions into reality through strategic leadership and high-end real estate expertise.
                        </p>

                        {/* Socials */}
                        <div className="flex items-center space-x-4 pt-4">
                            <Link
                                href="https://linkedin.com"
                                target="_blank"
                                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-executive-soft hover:text-executive-gold hover:border-executive-gold transition-all duration-300"
                            >
                                <Linkedin size={18} />
                            </Link>
                            <Link
                                href="https://wa.me/923118970002"
                                target="_blank"
                                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-executive-soft hover:text-executive-gold hover:border-executive-gold transition-all duration-300"
                            >
                                <MessageCircle size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Right: Contact Links */}
                    <div className="flex flex-col md:items-end space-y-6">
                        <div className="space-y-4">
                            <Link
                                href="#contact"
                                className="group flex items-center space-x-3 text-executive-soft hover:text-executive-gold transition-colors duration-300"
                            >
                                <Phone size={18} className="opacity-50 group-hover:opacity-100" />
                                <span className="text-sm md:text-base font-medium">Book a Strategy Call</span>
                            </Link>

                            <Link
                                href="#contact"
                                className="group flex items-center space-x-3 text-executive-soft hover:text-executive-gold transition-colors duration-300"
                            >
                                <MessageCircle size={18} className="opacity-50 group-hover:opacity-100" />
                                <span className="text-sm md:text-base font-medium">Real Estate Inquiry</span>
                            </Link>

                            <Link
                                href="mailto:syed@shakeelbukhari.com"
                                className="group flex items-center space-x-3 text-executive-soft hover:text-executive-gold transition-colors duration-300"
                            >
                                <Mail size={18} className="opacity-50 group-hover:opacity-100" />
                                <span className="text-sm md:text-base font-medium">syed@shakeelbukhari.com</span>
                            </Link>

                            <div className="group flex items-center space-x-3 text-executive-soft">
                                <Phone size={18} className="opacity-50" />
                                <span className="text-sm md:text-base">+92-311-8970002</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-executive-soft text-xs">
                    <p>© {new Date().getFullYear()} Shakeel Bukhari. All rights reserved.</p>
                    <p className="text-executive-soft/50">
                        Designed with <span className="text-executive-gold">excellence</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
