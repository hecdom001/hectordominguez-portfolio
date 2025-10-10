"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/section";
import { PROJECTS } from "@/lib/data";
import React from "react";

// --- Add types ---
type ProjectLink = { href: string; label: string };

export default function ProjectsSection() {
    return (
        <Section id="projects">
            <div className="flex items-end justify-between mb-4">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
                    <span className="text-gradient">Projects</span>
                </h2>
                <Button
                    variant="ghost"
                    className="rounded-full"
                    onClick={() =>
                        window.open(
                            "https://github.com/your-username?tab=repositories",
                            "_blank"
                        )
                    }
                >
                    See all
                </Button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROJECTS.map((p, idx) => (
                    <Card
                        key={idx}
                        className="group glass rounded-3xl card-hover [transform-style:preserve-3d]"
                        onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => {
                            const el = e.currentTarget;
                            const r = el.getBoundingClientRect();
                            const px = (e.clientX - r.left) / r.width - 0.5;
                            const py = (e.clientY - r.top) / r.height - 0.5;
                            el.style.transform = `rotateX(${-py * 5}deg) rotateY(${px * 6}deg) translateZ(0)`;
                        }}
                        onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                            e.currentTarget.style.transform = "";
                        }}
                    >
                        <CardHeader>
                            <CardTitle className="flex items-center justify-between">
                                <span className="text-foreground/90">{p.title}</span>

                                {p.title === "CoachFlow" ? (
                                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-700 border border-yellow-500/30">
                    Work in progress
                  </span>
                                ) : (
                                    <span className="text-[11px] text-muted-foreground/80 px-2 py-0.5 rounded-full border">
                    Project
                  </span>
                                )}
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">{p.blurb}</p>

                            <div className="flex flex-wrap gap-1.5">
                                {p.tags.map((t) => (
                                    <Badge key={t} variant="outline" className="rounded-full text-[11px]">
                                        {t}
                                    </Badge>
                                ))}
                            </div>

                            <div className="flex gap-2 pt-2">
                                {p.links.map((l: ProjectLink, i) => (
                                    <Button
                                        key={i}
                                        asChild
                                        size="sm"
                                        variant={i === 0 ? "default" : "outline"}
                                        className="rounded-full"
                                    >
                                        <a href={l.href} target="_blank" rel="noreferrer">
                                            {l.label}
                                        </a>
                                    </Button>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Section>
    );
}

