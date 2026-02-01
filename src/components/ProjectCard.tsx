"use client";

import React, { useMemo, useState } from "react";
import { Work } from "@/lib/data";
import { ACCENT_A, ACCENT_B } from "@/lib/theme";
import Image from "next/image";

type Props = {
    work: Work;
    className?: string;
};

function Badge({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-gray-600 bg-white/70 shadow-sm">
      {children}
    </span>
    );
}

export default function ProjectCard({ work, className }: Props) {
    const images = useMemo(() => {
        const arr = (work.images && work.images.length > 0) ? work.images : [];
        if (arr.length > 0) return arr;
        return work.img ? [work.img] : [];
    }, [work.images, work.img]);

    const [active, setActive] = useState(0);

    React.useEffect(() => {
        setActive(0); // reset when card data changes
    }, [work.title]);


    const primary =
        work.links?.find(l => /production|live/i.test(l.label)) ?? work.links?.[0];
    const secondary = (work.links ?? []).filter(l => l !== primary);

    return (
        <figure
            className={[
                "relative isolate overflow-hidden rounded-[28px] border bg-white",
                "shadow-[0_6px_30px_-10px_rgba(0,0,0,0.15)]",
                "p-6 sm:p-8 md:p-10",
                className ?? ""
            ].join(" ")}
        >
            {/* soft corner glow (top-right) */}
            <div
                aria-hidden
                className="pointer-events-none absolute -top-24 right-0 h-56 w-56 rounded-full blur-2xl opacity-40"
                style={{ background: `radial-gradient(60% 60% at 50% 50%, ${ACCENT_B}, transparent)` }}
            />
            <div
                aria-hidden
                className="pointer-events-none absolute -top-10 right-28 h-56 w-56 rounded-full blur-3xl opacity-25"
                style={{ background: `radial-gradient(60% 60% at 50% 50%, ${ACCENT_A}, transparent)` }}
            />

            {/* header row */}
            <div className="flex items-start justify-between gap-4 pr-28">
                <h3 className="text-[32px] leading-[1.1] font-extrabold text-gray-900">
                    {work.title}
                </h3>
                <Badge>{work.tag || "Project"}</Badge>

                {work.completed === false && (
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-700 border border-yellow-500/30">
                        Work in progress
                    </span>
                )}

            </div>

            {/* two-column content (text/buttons left, image right) */}
            <div className="mt-5 grid gap-6 md:grid-cols-[minmax(0,520px),1fr]">
                {/* left side */}
                <div className="max-w-prose">
                    {work.blurb && (
                        <p className="text-[17px] leading-7 text-gray-600">
                            {work.blurb}
                        </p>
                    )}

                    {/* actions stacked vertically like the screenshot */}
                    {work.links && work.links.length > 0 && (
                        <div className="mt-6 flex flex-row gap-3 max-w-[220px]">
                            {primary && (
                                <a
                                    href={primary.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white bg-gray-900"
                                >
                                    {primary.label}
                                </a>
                            )}
                            {secondary.map((l, i) => (
                                <a
                                    key={i}
                                    href={l.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-medium bg-white"
                                >
                                    {l.label}
                                </a>
                            ))}
                        </div>
                    )}

                    {work.showImage && images.length > 0 && (
                        <div className="mt-6 rounded-2xl border overflow-hidden shadow bg-white">
                            <div className="relative">
                                <Image
                                    src={images[active]}
                                    alt={`${work.title} screenshot ${active + 1}`}
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto object-cover"
                                    priority={false}
                                />

                                {/* prev/next (only if multiple) */}
                                {images.length > 1 && (
                                    <>
                                        <button
                                            type="button"
                                            onClick={() => setActive((prev) => (prev - 1 + images.length) % images.length)}
                                            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 border px-3 py-2 text-sm shadow hover:bg-white"
                                            aria-label="Previous image"
                                        >
                                            ‹
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => setActive((prev) => (prev + 1) % images.length)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 border px-3 py-2 text-sm shadow hover:bg-white"
                                            aria-label="Next image"
                                        >
                                            ›
                                        </button>
                                    </>
                                )}
                            </div>

                            {/* dots */}
                            {images.length > 1 && (
                                <div className="flex items-center justify-center gap-2 p-3">
                                    {images.map((_, i) => (
                                        <button
                                            key={i}
                                            type="button"
                                            onClick={() => setActive(i)}
                                            className={[
                                                "h-2.5 w-2.5 rounded-full border",
                                                i === active ? "bg-gray-900 border-gray-900" : "bg-white border-gray-300"
                                            ].join(" ")}
                                            aria-label={`Go to image ${i + 1}`}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* big rounded inner border to mimic the “card inside soft canvas” feel */}
            <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-black/5" />
        </figure>
    );
}
