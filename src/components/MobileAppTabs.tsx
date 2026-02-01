"use client";

import React from "react";
import { Home, User, Wrench, Briefcase, Mail } from "lucide-react";

import IntroHero from "@/components/IntroHero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

type TabKey = "home" | "about" | "services" | "work" | "contact";

const TABS: { key: TabKey; label: string; Icon: React.ComponentType<{ className?: string }> }[] = [
    { key: "home", label: "Home", Icon: Home },
    { key: "about", label: "About", Icon: User },
    { key: "services", label: "Services", Icon: Wrench },
    { key: "work", label: "Work", Icon: Briefcase },
    { key: "contact", label: "Contact", Icon: Mail }
];

export default function MobileAppTabs() {
    const [tab, setTab] = React.useState<TabKey>("home");

    // (Optional) remember last tab per session
    React.useEffect(() => {
        const saved = sessionStorage.getItem("mobile_tab") as TabKey | null;
        if (saved) setTab(saved);
    }, []);

    React.useEffect(() => {
        sessionStorage.setItem("mobile_tab", tab);
    }, [tab]);

    return (
        <div className="md:hidden min-h-dvh bg-[var(--bg)] overflow-hidden">
            {/* Screen area */}
            <div className="h-[calc(100dvh-72px-env(safe-area-inset-bottom))] overflow-y-auto">
                <div className="px-4 pt-4 pb-10">
                    {tab === "home" && (
                        <div className="-mx-4 -mt-4">
                            <IntroHero />
                        </div>
                    )}

                    {tab === "about" && (
                        <div>
                            {/* showIndicator off on mobile tabs */}
                            <About showIndicator={false} />
                        </div>
                    )}

                    {tab === "services" && (
                        <div>
                            <Services showIndicator={false} />
                        </div>
                    )}

                    {tab === "work" && (
                        <div>
                            <Portfolio showIndicator={false} />
                        </div>
                    )}

                    {tab === "contact" && (
                        <div>
                            <Contact />
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom tab bar */}
            <nav
                className={[
                    "fixed inset-x-0 bottom-0 z-50",
                    "border-t border-gray-200 bg-white/90 backdrop-blur",
                    "pb-[max(env(safe-area-inset-bottom),0px)]"
                ].join(" ")}
                aria-label="Mobile tabs"
            >
                <div className="mx-auto max-w-6xl px-2">
                    <div className="grid grid-cols-5 gap-1 py-2">
                        {TABS.map(({ key, label, Icon }) => {
                            const active = tab === key;
                            return (
                                <button
                                    key={key}
                                    type="button"
                                    onClick={() => setTab(key)}
                                    className={[
                                        "flex flex-col items-center justify-center rounded-xl px-2 py-2",
                                        "text-[11px] leading-none",
                                        active ? "text-gray-900" : "text-gray-500"
                                    ].join(" ")}
                                    aria-current={active ? "page" : undefined}
                                >
                                    <Icon className="mb-1 h-5 w-5" />
                                    <span>{label}</span>
                                    <span className={["mt-1 h-1 w-6 rounded-full", active ? "bg-gray-900" : "bg-transparent"].join(" ")} />
                                </button>
                            );
                        })}
                    </div>
                </div>
            </nav>
        </div>
    );
}
