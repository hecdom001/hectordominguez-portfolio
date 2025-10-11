import React from "react";
import Section from "./Section";
import { SERVICES } from "@/lib/data";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function Services({ nextId, showIndicator }: { nextId?: string; showIndicator?: boolean }) {
    return (
        <div className="relative bg-[radial-gradient(ellipse_at_top_left,rgba(108,108,229,0.08),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(255,76,96,0.08),transparent_40%)]">
            <Section id="services" kicker="Services" title="What I Can Do" nextId={nextId} showIndicator={showIndicator}>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SERVICES.map((s) => (
                        <div key={s.title} className="rounded-2xl border p-6 hover:shadow-md transition">
                            <h3 className="font-medium">{s.title}</h3>
                            <p className="text-gray-600 mt-2 text-sm">{s.blurb}</p>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}