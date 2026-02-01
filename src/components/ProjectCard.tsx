"use client";

import React, { useMemo, useState, useEffect } from "react";
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
        const arr = work.images && work.images.length > 0 ? work.images : [];
        if (arr.length > 0) return arr;
        return work.img ? [work.img] : [];
    }, [work.images, work.img]);

    const [active, setActive] = useState(0);

    useEffect(() => {
        setActive(0);
    }, [work.title]);

    const primary =
        work.links?.find((l) => /production|live/i.test(l.label)) ?? work.links?.[0];
    const secondary = (work.links ?? []).filter((l) => l !== primary);

    return (
        <figure
            className={[
                "relative isolate overflow-hidden rounded-[28px] border bg-white",
                "shadow-[0_6px_30px_-10px_rgba(0,0,0,0.15)]",
                "p-5 sm:p-8 md:p-10", // slightly tighter on mobile
                className ?? "",
            ].join(" ")}
        >
            {/* soft corner glow (dialed down on mobile so it doesn't fight text) */}
            <div
                aria-hidden
                className="pointer-events-none absolute -top-20 right-0 h-44 w-44 sm:-top-24 sm:h-56 sm:w-56 rounded-full blur-2xl opacity-30 sm:opacity-40"
                style={{
                    background: `radial-gradient(60% 60% at 50% 50%, ${ACCENT_B}, transparent)`,
                }}
            />
            <div
                aria-hidden
                className="pointer-events-none absolute -top-8 right-16 sm:-top-10 sm:right-28 h-44 w-44 sm:h-56 sm:w-56 rounded-full blur-3xl opacity-20 sm:opacity-25"
                style={{
                    background: `radial-gradient(60% 60% at 50% 50%, ${ACCENT_A}, transparent)`,
                }}
            />

            {/* header row (stack on mobile, inline on desktop) */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <h3 className="text-2xl sm:text-[32px] leading-[1.1] font-extrabold text-gray-900">
                    {work.title}
                </h3>

                <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                    <Badge>{work.tag || "Project"}</Badge>

                    {work.completed === false && (
                        <span className="text-[11px] px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-700 border border-yellow-500/30">
              Work in progress
            </span>
                    )}
                </div>
            </div>

            {/* content */}
            <div className="mt-5">
                {work.blurb && (
                    <p className="text-[15px] sm:text-[17px] leading-7 text-gray-600">
                        {work.blurb}
                    </p>
                )}

                {/* actions (wrap nicely on mobile) */}
                {work.links && work.links.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-3">
                        {primary && (
                            <a
                                href={primary.href}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-full px-5 sm:px-6 py-3 text-sm font-medium text-white bg-gray-900 w-full sm:w-auto"
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
                                className="inline-flex items-center justify-center rounded-full border px-5 sm:px-6 py-3 text-sm font-medium bg-white w-full sm:w-auto"
                            >
                                {l.label}
                            </a>
                        ))}
                    </div>
                )}

                {/* image carousel */}
                {work.showImage && images.length > 0 && (
                    <div className="mt-6 rounded-2xl border overflow-hidden shadow bg-white">
                        <div className="relative">
                            <Image
                                src={images[active]}
                                alt={`${work.title} screenshot ${active + 1}`}
                                width={1200}
                                height={800}
                                className="w-full h-auto object-cover"
                            />

                            {images.length > 1 && (
                                <>
                                    {/* Smaller controls on mobile + lower placement so they don't cover the focal point */}
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setActive((prev) => (prev - 1 + images.length) % images.length)
                                        }
                                        className="absolute left-2 sm:left-3 bottom-3 sm:top-1/2 sm:bottom-auto sm:-translate-y-1/2 rounded-full bg-white/90 border px-3 py-2 text-sm shadow hover:bg-white"
                                        aria-label="Previous image"
                                    >
                                        ‹
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setActive((prev) => (prev + 1) % images.length)}
                                        className="absolute right-2 sm:right-3 bottom-3 sm:top-1/2 sm:bottom-auto sm:-translate-y-1/2 rounded-full bg-white/90 border px-3 py-2 text-sm shadow hover:bg-white"
                                        aria-label="Next image"
                                    >
                                        ›
                                    </button>
                                </>
                            )}
                        </div>

                        {images.length > 1 && (
                            <div className="flex items-center justify-center gap-2 p-3">
                                {images.map((_, i) => (
                                    <button
                                        key={i}
                                        type="button"
                                        onClick={() => setActive(i)}
                                        className={[
                                            "h-2.5 w-2.5 rounded-full border",
                                            i === active ? "bg-gray-900 border-gray-900" : "bg-white border-gray-300",
                                        ].join(" ")}
                                        aria-label={`Go to image ${i + 1}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>

            <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-black/5" />
        </figure>
    );
}
