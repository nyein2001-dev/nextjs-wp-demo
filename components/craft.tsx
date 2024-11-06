import { type ClassValue, clsx } from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

type SectionProps = {
    children: React.ReactNode;
    className?: string;
    id?: string;
};

const Section = ({ children, className, id }: SectionProps) => {
    return (
        <section className={cn("py-8 md:py-12 fade-in", className)} id={id}>
            {children}
        </section>
    );
};

type ContainerProps = {
    children: React.ReactNode;
    className?: string;
    id?: string;
};

const Container = ({ children, className, id }: ContainerProps) => {
    return (
        <div className={cn("mx-auto max-w-5xl", "p-6 sm:p-8", className)} id={id} >
            {children}
        </div>
    );
};

export { Section, Container };