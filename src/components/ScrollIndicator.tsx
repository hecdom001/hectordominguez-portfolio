"use client";

type Props = { target: string; className?: string };

export default function ScrollIndicator({ target, className }: Props) {
    return (
        <a
            href={target}
            aria-label="Scroll down"
            className={[
                "absolute bottom-6 left-1/2 -translate-x-1/2 z-20",
                "flex h-12 w-12 items-center justify-center rounded-full",
                "bg-white/90 shadow-md hover:bg-white transition",
                className ?? "",
            ].join(" ")}
        >
            {/* inline chevron (no icon package) */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        </a>
    );
}
