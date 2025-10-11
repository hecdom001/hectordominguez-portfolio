import React from "react";
import ScrollIndicator from "./ScrollIndicator";

type Props = {
    id: string;
    kicker?: string;
    title?: string;
    children: React.ReactNode;
    nextId?: string;          // id of next section (e.g. "services")
    showIndicator?: boolean;  // show the scroll button at the bottom
};

export default function Section({ id, kicker, title, children, nextId, showIndicator }: Props) {
    return (
        <section
            id={id}
            className="relative scroll-mt-28 md:scroll-mt-32 pb-20 md:pb-24"
            data-testid={`section-${id}`}
        >
            <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
                {(kicker || title) && (
                    <div className="mb-10">
                        {kicker && <p className="uppercase tracking-[0.3em] text-xs text-gray-500">{kicker}</p>}
                        {title && <h2 className="text-3xl md:text-4xl font-extrabold mt-2">{title}</h2>}
                    </div>
                )}
                {children}
            </div>

            {showIndicator && nextId && (
                <ScrollIndicator target={`#${nextId}`} />
            )}
        </section>
    );
}
