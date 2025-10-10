
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/section";
import { SKILLS } from "@/lib/data";


export default function AboutSection(){
    return (
        <Section id="about">
            <div className="grid md:grid-cols-2 gap-6 items-start">
                <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
                        <span className="text-gradient">About</span>
                    </h2>
                    <p className="text-muted-foreground">9+ years building backend systems and full‑stack features at Oracle, Amazon, American Express.</p>
                    <div className="flex flex-wrap gap-2 pt-1">
                        {Object.entries(SKILLS).map(([category, skills]) => (
                            <div key={category} className="space-y-2">
                                <h3 className="text-sm font-semibold capitalize">{formatCategory(category)}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map(s => (
                                        <Badge
                                            key={s}
                                            variant="secondary"
                                            className="rounded-full px-3 py-1 text-xs"
                                        >
                                            {s}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Card>
                    <CardHeader><CardTitle className="text-base">Quick Facts</CardTitle></CardHeader>
                    <CardContent className="text-sm text-muted-foreground space-y-3">
                        <div className="flex items-center justify-between"><span>Location</span><span className="font-medium text-foreground">Southern California</span></div>
                        <div className="flex items-center justify-between"><span>Focus</span><span className="font-medium text-foreground">Backend, Full-Stack, Database</span></div>
                        <div className="flex items-center justify-between"><span>Contact</span><a className="font-medium underline-offset-4 hover:underline" href="mailto:you@example.com">hecdom001@gmail.com</a></div>
                    </CardContent>
                </Card>
            </div>
        </Section>
    );
}
function formatCategory(category: string) {
    switch (category) {
        case "frameworksAndTools": return "Frameworks & Tools";
        case "cloudAndDevOps": return "Cloud & DevOps";
        default: return category.charAt(0).toUpperCase() + category.slice(1);
    }
}