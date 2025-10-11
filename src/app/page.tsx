import React from "react";
import About from "@/components/About";
import Header from "@/components/Header";
import IntroHero from "@/components/IntroHero";
import Services from "@/components/Services";
import Counters from "@/components/Counters";
import Portfolio from "@/components/Portfolio";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import { ACCENT_A, ACCENT_B, BG_BASE, BG_MUTED } from "@/lib/theme";

export default function Page() {
    return (
        <main
            className="scroll-smooth text-gray-900 bg-[var(--bg)]"
            data-testid="page-root"
            style={{ "--a": ACCENT_A, "--b": ACCENT_B, "--bg": BG_BASE, "--bg2": BG_MUTED } as React.CSSProperties}
        >
            <Header/>
            <IntroHero />
            <About nextId="services" showIndicator />
            <Services nextId="stats" showIndicator />
            <Counters nextId="works" showIndicator />
            <Portfolio nextId="blog" showIndicator />
            <Blog nextId="contact" showIndicator />
            <Contact />
            <footer className="border-t border-gray-100" data-testid="footer">
                <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p>© {new Date().getFullYear()} Hector. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="https://www.x.com/hdomi001" className="hover:text-gray-700" style={{ color: ACCENT_B }}>Twitter</a>
                        <a href="https://www.github.com/hecdom001" className="hover:text-gray-700" style={{ color: ACCENT_A }}>GitHub</a>
                        <a href="https://www.linkedin.com/in/hdomi001 " className="hover:text-gray-700" style={{ color: ACCENT_B }}>LinkedIn</a>
                    </div>
                </div>
            </footer>
        </main>
    );
}
