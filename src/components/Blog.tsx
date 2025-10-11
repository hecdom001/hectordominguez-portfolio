import React from "react";
import Section from "./Section";
import Image from "next/image";
import { POSTS } from "@/lib/data";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function Blog({ nextId, showIndicator }: { nextId?: string; showIndicator?: boolean }) {
    return (
        <div className="relative bg-[radial-gradient(ellipse_at_top_right,rgba(255,76,96,0.06),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(108,108,229,0.06),transparent_40%)]">
            <Section id="blog" kicker="Writing" title="Notes & Articles" nextId={nextId} showIndicator={showIndicator}>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {POSTS.map((p, i) => (
                        <a key={i} href={p.href} className="rounded-2xl overflow-hidden border bg-white hover:shadow-sm transition">
                            {p.showImage && p.img && (
                                <Image
                                    src={p.img}
                                    alt={p.title || ""}
                                    className="aspect-[4/3] w-full object-cover"
                                />
                            )}
                            <div className="p-4">
                                <h3 className="font-medium">{p.title}</h3>
                                <p className="text-xs text-gray-500 mt-1">{new Date(p.date).toLocaleDateString()}</p>
                            </div>
                        </a>
                    ))}
                </div>
                <div className="mt-8 text-center">
                    <a href="/blog" className="rounded-full text-white px-5 py-2 text-sm bg-[linear-gradient(135deg,var(--a),var(--b))]">View More</a>
                </div>
            </Section>
        </div>
    );
}