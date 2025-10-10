"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";


const variants = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } };


export function Section({ id, className, children }:{ id?: string; className?: string; children: React.ReactNode }) {
    return (
        <section id={id} className={cn("max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-16", className)}>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={variants}>
                {children}
            </motion.div>
        </section>
    );
}