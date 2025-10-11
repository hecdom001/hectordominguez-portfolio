import React from "react";
import Image from "next/image";
import { ACCENT_A, ACCENT_B, gbtn } from "@/lib/theme";

export default function Hero() {
    return (
        <section id="home" className="relative overflow-hidden" data-testid="hero">
            <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 items-center gap-10">
                <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-gray-500">Hello, I am</p>
                    <h1 className="text-5xl md:text-6xl font-extrabold mt-2 leading-tight">
                        Hector
                        <span
                            className="text-transparent bg-clip-text"
                            style={{ backgroundImage: `linear-gradient(135deg, ${ACCENT_A}, ${ACCENT_B})` }}
                        >
              {" "}Dominguez
            </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mt-4">Backend & Full-stack Engineer</p>
                    <p className="mt-4 text-gray-600 max-w-prose">
                        Java • TypeScript • Next.js • AWS/OCI • PostgreSQL. Pragmatic systems, crisp UX, and cost-aware cloud.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                        <a href="#works" className={`rounded-full text-white px-6 py-3 text-sm shadow-sm hover:opacity-95 transition ${gbtn}`}>
                            View Projects
                        </a>
                        <a href="#contact" className="rounded-full border px-6 py-3 text-sm">Contact</a>
                    </div>
                </div>

                {/* Avatar frame (Kalvin-style) */}
                <div className="relative">
                    <div
                        className="relative mx-auto w-64 h-64 md:w-80 md:h-80 rounded-full bg-white shadow-xl border"
                        style={{ borderColor: ACCENT_B }}
                    >
                        {}
                        <div className="absolute inset-4 md:inset-5 rounded-full overflow-hidden">
                            <Image
                                src="/images/profile.jpg"
                                alt="Hector Dominguez"
                                fill
                                sizes="(min-width: 768px) 20rem, 16rem"
                                className="object-cover object-top"
                                priority
                            />
                        </div>

                        {/* Decorative dots */}
                        <span className="absolute -top-3 -left-3 w-6 h-6 rounded-full" style={{ background: ACCENT_A }} />
                        <span className="absolute -bottom-3 -right-3 w-8 h-8 rounded-full opacity-80" style={{ background: ACCENT_B }} />
                    </div>
                </div>
            </div>

            {/* soft background circle */}
            <svg className="absolute -z-10 opacity-20 left-1/2 -translate-x-1/2 top-10" width="700" height="700" viewBox="0 0 700 700" fill="none" aria-hidden>
                <circle cx="350" cy="350" r="320" stroke="url(#g)" strokeWidth="2" />
                <defs>
                    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor={ACCENT_A} />
                        <stop offset="100%" stopColor={ACCENT_B} />
                    </linearGradient>
                </defs>
            </svg>
        </section>
    );
}
