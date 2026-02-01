"use client";

import React from "react";
import Image from "next/image";
import Typewriter from "@/components/Typewriter";

export default function IntroHero() {
    return (
        <section
            id="home"
            data-testid="hero"
            className={[
                "relative isolate flex items-center overflow-hidden",
                // Mobile: fill the available app screen height (minus bottom nav)
                "min-h-[calc(100dvh-72px-env(safe-area-inset-bottom))]",
                // Desktop: your original behavior
                "md:min-h-screen"
            ].join(" ")}
        >
            {/* Background image + overlay */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/images/intro-hero.jpg"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-[12%_center] sm:object-center"
                />
                <div className="absolute inset-0 bg-black/45" />
            </div>

            <div className="max-w-6xl mx-auto px-4 w-full">
                <div className="max-w-2xl">
                    <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight">
                        Hi! I&apos;m Hector.
                    </h1>

                    <p className="mt-4 sm:mt-5 text-white/80 text-base sm:text-lg md:text-xl font-normal">
                        Software Engineer from Southern California. <br className="hidden md:block" />
                        I build reliable{" "}
                        <Typewriter
                            phrases={["systems", "APIs", "full-stack applications"]}
                            className="font-bold text-white"
                        />
                    </p>
                </div>
            </div>

            {/* Scroll chevron (hide on mobile tabs since it's not a long scroll page) */}
            <a
                href="#about"
                className="hidden md:inline-flex absolute left-1/2 -translate-x-1/2 bottom-8 h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow"
                aria-label="Scroll down"
            >
                <span className="block -translate-y-[1px]">⌄</span>
            </a>
        </section>
    );
}
