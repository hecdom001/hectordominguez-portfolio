import React from "react";
import Image from "next/image";
import Section from "./Section";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { ACCENT_A, ACCENT_B } from "@/lib/theme";

const SOCIAL = [
    { label: "Twitter", href: "https://www.x.com/hdomi001", icon: FaTwitter },
    { label: "GitHub", href: "https://www.github.com/hecdom001", icon: FaGithub },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/hdomi001", icon: FaLinkedin },
];
export default function About({ nextId, showIndicator }: { nextId?: string; showIndicator?: boolean }) {
    return (
        <div className="relative">
            <div className="absolute inset-x-0 -top-6 h-6 bg-gradient-to-b from-black/5 to-transparent pointer-events-none" aria-hidden />
            <Section id="about" nextId={nextId} showIndicator={showIndicator}>
                <div className="grid lg:grid-cols-2 gap-10 items-start">
                    <div className="relative">
                        {/* the offset “paper” layer */}
                        <div className="absolute -bottom-8 -left-8 w-[86%] h-[86%] rounded-md bg-black/5" aria-hidden />
                        <div className="relative rounded-md overflow-hidden ring-1 ring-black/10 shadow-xl">
                            <div className="relative aspect-[4/3]">
                                <Image
                                    src="/images/profile2.jpeg"
                                    alt="Hector at work"
                                    width={600}
                                    height={800}
                                    className="object-cover object-[center_30%] rounded-md"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="uppercase tracking-[0.25em] text-sm text-gray-700">About Me.</p>
                        <h2 className="text-3xl md:text-4xl font-extrabold mt-1">Software Development Engineer</h2>
                        <div
                            className="mt-3 h-1 w-16 rounded-full"
                            style={{ background: `linear-gradient(135deg, ${ACCENT_A}, ${ACCENT_B})` }}
                        />
                        <div className="mt-6 space-y-6 text-gray-600 leading-relaxed">
                            <p>
                                I&apos;m <span className="font-semibold text-gray-800">Hector Dominguez</span>, a passionate software engineer with 9+ years of experience building scalable backend systems and full-stack applications. Skilled in databases, APIs, and cloud technologies, I focus on writing clean, reliable code and designing solutions that scale. I enjoy solving complex problems, learning quickly, and creating software that’s both high-quality and user-friendly.
                            </p>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-3">
                            {SOCIAL.map((s) => {
                                const Icon = s.icon;
                                return (
                                    <a
                                        key={s.label}
                                        href={s.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black text-white hover:bg-gray-800"
                                        aria-label={s.label}
                                        title={s.label}
                                    >
                                        <Icon size={20} />
                                    </a>
                                );
                            })}
                        </div>

                        <a
                            href="/resume.pdf"
                            className="mt-6 inline-flex rounded-md bg-black px-6 py-3 text-sm font-medium text-white shadow hover:opacity-90"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </Section>
        </div>
    );
}
