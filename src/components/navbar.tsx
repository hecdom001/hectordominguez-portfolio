"use client";
import { Button } from "@/components/ui/button";
import { NAV } from "@/lib/data";


export default function Navbar() {
    const go = (href: string) => {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    return (
        <header className="sticky top-0 z-50 backdrop-blur border-b border-border/40 bg-background/60">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
                <a href="#home" onClick={(e)=>{e.preventDefault();go('#home')}} className="font-semibold">hectordominguez.dev</a>
                <nav className="hidden md:flex items-center gap-1">
                    {NAV.map(n => (
                        <Button key={n.href} variant="ghost" size="sm" className="rounded-full" onClick={() => go(n.href)}>{n.label}</Button>
                    ))}
                </nav>
                <Button asChild size="sm" className="rounded-full"><a href="#contact" onClick={(e)=>{e.preventDefault();go('#contact')}}>Contact</a></Button>
            </div>
        </header>
    );
}