import React from "react";
import Image from "next/image";
import { ACCENT_A, ACCENT_B } from "@/lib/theme";
import Typewriter from "@/components/Typewriter";

export default function IntroHero() {
    return (
        <section
            id="home"
            data-testid="hero"
            className="relative min-h-[90vh] md:min-h-screen isolate flex items-center"
        >
            {/* Background image + overlay (unchanged) */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/images/intro-hero.jpg"
                    alt=""
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/45" />
            </div>

            <div className="max-w-6xl mx-auto px-4 w-full">
                <div className="max-w-2xl">
                    <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-tight">
                        Hi! I&apos;m Hector.
                    </h1>

                    <p className="mt-5 text-white/80 text-lg md:text-xl font-normal">
                        Software Engineer from Southern California. <br className="hidden md:block" />
                        I build reliable{" "}
                        <Typewriter
                            phrases={["systems", "APIs", "full-stack applications"]}
                            className="font-bold text-white"
                        />
                    </p>
                </div>
            </div>


            {/* Scroll chevron + wave (unchanged) */}
            <a
                href="#about"
                className="absolute left-1/2 -translate-x-1/2 bottom-8 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow"
                aria-label="Scroll down"
            >
                <span className="block -translate-y-[1px]">⌄</span>
            </a>
        </section>
    );
}
