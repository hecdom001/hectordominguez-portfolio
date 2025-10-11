import React from "react";
import Section from "./Section";
import { COUNTERS } from "@/lib/data";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function Counters({ nextId, showIndicator }: { nextId?: string; showIndicator?: boolean }) {
    return (
        <div className="bg-[var(--bg2)]">
            <Section id="stats" nextId={nextId} showIndicator={showIndicator}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {COUNTERS.map((c) => (
                        <div key={c.label} className="rounded-2xl border bg-white p-6">
                            <div className="text-3xl font-semibold">{Intl.NumberFormat().format(c.value)}</div>
                            <div className="mt-1 text-gray-600 text-sm">{c.label}</div>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}