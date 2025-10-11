import React from "react";
import Section from "./Section";
import { WORKS } from "@/lib/data";
import InteractiveCard from "./InteractiveCard";
import ProjectCard from "./ProjectCard";

export default function Portfolio({ nextId, showIndicator }: { nextId?: string; showIndicator?: boolean }) {
    return (
        <Section id="works" kicker="Projects" title="Highlights" nextId={nextId} showIndicator={showIndicator}>
            {/* (optional) filters here */}
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                {WORKS.map((w, i) => (
                    <InteractiveCard key={i} className="group">
                        <ProjectCard work={w} />
                    </InteractiveCard>
                ))}
            </div>
        </Section>
    );
}
