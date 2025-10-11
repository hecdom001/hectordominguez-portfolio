"use client";

import * as React from "react";

type Props = {
    phrases: string[];
    typingSpeed?: number;    // ms per character when typing
    deletingSpeed?: number;  // ms per character when deleting
    pauseTime?: number;      // ms to pause when a phrase is fully typed
    className?: string;
};

export default function Typewriter({
                                       phrases,
                                       typingSpeed = 45,
                                       deletingSpeed = 30,
                                       pauseTime = 1100,
                                       className,
                                   }: Props) {
    const [index, setIndex] = React.useState(0);     // which phrase
    const [sub, setSub] = React.useState("");        // current substring
    const [deleting, setDeleting] = React.useState(false);

    React.useEffect(() => {
        let timeout: number;

        const current = phrases[index % phrases.length];

        if (!deleting) {
            // typing
            if (sub.length < current.length) {
                timeout = window.setTimeout(() => setSub(current.slice(0, sub.length + 1)), typingSpeed);
            } else {
                // pause when fully typed, then start deleting
                timeout = window.setTimeout(() => setDeleting(true), pauseTime);
            }
        } else {
            // deleting
            if (sub.length > 0) {
                timeout = window.setTimeout(() => setSub(current.slice(0, sub.length - 1)), deletingSpeed);
            } else {
                setDeleting(false);
                setIndex((i) => (i + 1) % phrases.length);
            }
        }

        return () => window.clearTimeout(timeout);
    }, [phrases, index, sub, deleting, typingSpeed, deletingSpeed, pauseTime]);

    return (
        <span className={className} aria-live="polite">
      {sub}
            <span className="inline-block w-[1ch] -mb-[2px] animate-pulse">|</span>
    </span>
    );
}
