
"use client";
import React from "react";
import Section from "./Section";
import { gbtn } from "@/lib/theme";


export default function Contact({ nextId, showIndicator }: { nextId?: string; showIndicator?: boolean }) {
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const payload = {
            name: (form.elements.namedItem("name") as HTMLInputElement)?.value,
            email: (form.elements.namedItem("email") as HTMLInputElement)?.value,
            subject: (form.elements.namedItem("subject") as HTMLInputElement)?.value,
            message: (form.elements.namedItem("message") as HTMLTextAreaElement)?.value,
        };
        await fetch("/api/contact", { method: "POST", body: JSON.stringify(payload) });
        form.reset();
        alert("Message sent!");
    };


    return (
        <Section id="contact" kicker="Contact" title="Get In Touch" nextId={nextId} showIndicator={showIndicator}>
            <div className="grid md:grid-cols-2 gap-8">
                <form onSubmit={onSubmit} className="rounded-2xl border p-6 bg-white">
                    <div className="grid sm:grid-cols-2 gap-4">
                        <input name="name" className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-black/10" placeholder="Name" />
                        <input name="email" className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-black/10" placeholder="Email" type="email" />
                    </div>
                    <input name="subject" className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-black/10 mt-4" placeholder="Subject" />
                    <textarea name="message" className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-black/10 mt-4 min-h-[140px]" placeholder="Message" />
                    <button className={`mt-4 rounded-full text-white px-5 py-2 text-sm ${gbtn}`}>Send Message</button>
                </form>
                <div className="rounded-2xl border p-6 bg-white">
                    <h4 className="font-medium">Hector Dominguez</h4>
                    <p className="text-sm text-gray-600">Southern California, USA</p>
                    <dl className="mt-4 space-y-3 text-sm">
                        <div>
                            <dt className="text-gray-500">Phone</dt>
                            <dd>+1 (951) 742‑0144</dd>
                        </div>
                        <div>
                            <dt className="text-gray-500">Email</dt>
                            <dd>hecdom001@gmail.com</dd>
                        </div>
                        <div>
                            <dt className="text-gray-500">Address</dt>
                            <dd>San Bernardino, CA</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </Section>
    );
}