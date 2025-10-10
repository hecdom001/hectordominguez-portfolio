"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Section } from "@/components/section";

export default function HeroSection(){
    return (
        <Section id="home" className="pt-16 pb-10">
            <div className="grid md:grid-cols-[1.1fr,0.9fr] gap-8 items-center">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 text-xs rounded-full border px-3 py-1 bg-background/60">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />Available for freelance & collabs
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight text-gradient">
                        Designing code that scales and software that lasts.
                    </h1>
                    <p className="text-base sm:text-lg text-muted-foreground/90 max-w-prose">
                        I’m <span className="font-medium">Hector Dominguez</span> — a passionate software engineer with 9+ years of experience building scalable backend systems and full-stack applications. Skilled in databases, APIs, and cloud technologies, I focus on writing clean, reliable code and designing solutions that scale. I enjoy solving complex problems, learning quickly, and creating software that’s both high-quality and user-friendly.
                    </p>
                    <div className="flex flex-wrap gap-3" id="magnet">
                        <Button asChild className="rounded-full"><a href="#projects">View Projects</a></Button>
                        <Button asChild variant="outline" className="rounded-full"><a href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a></Button>
                    </div>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                          (function(){
                            const root = document.getElementById('magnet');
                            if(!root) return;
                            root.addEventListener('pointermove', (e)=>{
                              root.querySelectorAll('a,button').forEach((el)=>{
                                const r = el.getBoundingClientRect();
                                const dx = e.clientX - (r.left + r.width/2);
                                const dy = e.clientY - (r.top + r.height/2);
                                const dist = Math.hypot(dx,dy);
                                const pull = Math.max(0, 10 - dist/20);
                                el.style.transform = \`translate3d(\${(dx/dist||0)*pull}px,\${(dy/dist||0)*pull}px,0)\`;
                              });
                            });
                            root.addEventListener('pointerleave', ()=> {
                              root.querySelectorAll('a,button').forEach((el)=> el.style.transform = '');
                            });
                          })();
                        `,
                        }}
                    />
                </div>
                <div className="relative">
                    <div className="absolute -inset-4 blur-2xl rounded-full bg-gradient-to-tr from-primary/30 via-fuchsia-500/20 to-emerald-400/20" />
                    <div className="relative size-40 md:size-56 rounded-full overflow-hidden glass grid place-items-center">
                        <Image
                            src="/images/avatar.jpg"
                            alt="Hector Dominguez"
                            width={224}
                            height={224}
                            className="object-cover object-[50%_25%]"  // tweak 25–30% as you like
                            priority
                        />
                    </div>
                </div>
            </div>
        </Section>
    );
}