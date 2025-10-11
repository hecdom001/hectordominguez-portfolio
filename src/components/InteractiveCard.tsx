"use client";
import React from "react";


type Props = {
    children: React.ReactNode;
    className?: string;
};


// A tiny client-only wrapper so hover/mousemove handlers live on the client
// and are NOT passed as props from a Server Component.
export default function InteractiveCard({ children, className }: Props) {
    const ref = React.useRef<HTMLDivElement>(null);


    function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rx = ((y / rect.height) - 0.5) * -6; // tilt range
        const ry = ((x / rect.width) - 0.5) * 6;
        el.style.setProperty("--rx", `${rx}deg`);
        el.style.setProperty("--ry", `${ry}deg`);
    }


    function onMouseLeave() {
        const el = ref.current;
        if (!el) return;
        el.style.setProperty("--rx", `0deg`);
        el.style.setProperty("--ry", `0deg`);
    }


    return (
        <div
            ref={ref}
            data-slot="card"
            className={className}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={{ transform: "perspective(800px) rotateX(var(--rx,0)) rotateY(var(--ry,0))", transition: "transform 120ms ease" }}
        >
            {children}
        </div>
    );
}