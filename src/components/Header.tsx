"use client";

import React from "react";
import { NAV } from "@/lib/data";

export default function Header() {
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={[
                "fixed top-0 inset-x-0 z-50 transition-colors duration-300",
                scrolled
                    ? "bg-white/80 backdrop-blur border-b border-gray-100"
                    : "bg-transparent",
            ].join(" ")}
        >
            <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#home"
                    className={[
                        "text-lg tracking-widest font-bold uppercase",
                        scrolled ? "text-gray-900" : "text-white",
                    ].join(" ")}
                >
                    Hector
                </a>

                {/* Nav */}
                <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wide">
                    {NAV.map((n) => (
                        <a
                            key={n.id}
                            href={`#${n.id}`}
                            className={[
                                "relative pb-1 transition",
                                scrolled
                                    ? "text-gray-700 hover:text-black"
                                    : "text-white/90 hover:text-white",
                            ].join(" ")}
                        >
                            {n.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}
