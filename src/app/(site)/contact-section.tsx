"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Section } from "@/components/section";

export default function ContactSection() {
    const TO = "hecdom001@gmail.com";

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const subject = encodeURIComponent("Portfolio Inquiry");
        const body = encodeURIComponent(
            `Name: ${data.get("name")}\r\nEmail: ${data.get("email")}\r\n\r\n${data.get("message")}`
        );
        const href = `mailto:${TO}?subject=${subject}&body=${body}`;

        // Try programmatic click first
        const a = document.createElement("a");
        a.href = href;
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        a.remove();

        // Fallback navigation
        setTimeout(() => {
            window.location.href = href;
        }, 100);
    }

    return (
        <Section id="contact">
            <Card className="bg-background/60 backdrop-blur">
                <CardHeader>
                    <CardTitle className="text-2xl">Let’s build something</CardTitle>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Interested in working together or want feedback on an idea? Shoot me a note — I read every message.
                    </p>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Left column: intro text (optional to expand later) */}
                        <p className="hidden md:block text-muted-foreground text-sm leading-relaxed">
                            Drop me a message with your project idea, collaboration request, or just to say hello.
                            I’ll get back to you as soon as I can!
                        </p>

                        {/* Right column: the form */}
                        <form onSubmit={onSubmit} className="space-y-3">
                            <Input type="text" name="name" placeholder="Name" required />
                            <Input type="email" name="email" placeholder="Email" required />
                            <Textarea name="message" placeholder="Your message..." rows={5} required />
                            <Button type="submit" className="rounded-full">Send</Button>
                        </form>
                    </div>
                </CardContent>
            </Card>
        </Section>
    );
}
