import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/section";
import { EXPERIENCE } from "@/lib/data";


export default function ExperienceSection(){
    return (
        <Section id="experience">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
                <span className="text-gradient">Experience</span>
            </h2>
            <div className="relative pl-5">
                <div className="absolute left-1 top-0 bottom-0 w-px bg-border/70" />
                <div className="space-y-6">
                    {EXPERIENCE.map((e, idx) => (
                        <div key={idx} className="relative">
                            <div className="absolute -left-1.5 top-1 size-3 rounded-full bg-primary/90 ring-2 ring-background" />
                            <Card className="border bg-background/60 backdrop-blur">
                                <CardHeader>
                                    <CardTitle className="flex flex-wrap items-center gap-x-3 gap-y-1 text-base">
                                        <span className="font-semibold">{e.role}</span>
                                        <span className="text-muted-foreground">· {e.company}</span>
                                        <span className="ml-auto text-xs text-muted-foreground">{e.period}</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {e.summary && (
                                        <p className="text-sm text-muted-foreground mb-2">{e.summary}</p>
                                    )}
                                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                                        {e.bullets.map((b: string, i: number) => (
                                            <li key={i}>{b}</li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}