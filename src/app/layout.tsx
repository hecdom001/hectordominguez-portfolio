import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";


const poppins = Poppins({ weight: ["400", "600", "700"], subsets: ["latin"] });


export const metadata: Metadata = {
    title: "Hector — Portfolio",
    description: "Backend & Full‑stack Engineer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="scroll-smooth">
        <body>{children}</body>
        </html>
    );
}