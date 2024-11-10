import { type ClassValue, clsx } from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

type MainProps = {
    children: React.ReactNode;
    className?: string;
    id?: string;
};

const Main = ({ children, className, id }: MainProps) => {
    return (
        <main
            className={cn(
                "max-w-none prose-p:m-0",
                "prose prose-neutral prose:font-sans dark:prose-invert xl:prose-lg",
                "prose-headings:font-normal",
                "prose-strong:font-semibold",
                "prose-a:underline prose-a:decoration-primary/50 prose-a:underline-offset-2 prose-a:text-foreground/75 prose-a:transition-all",
                "hover:prose-a:decoration-primary hover:prose-a:text-foreground",
                "prose-blockquote:not-italic",
                "prose-pre:border prose-pre:bg-muted/25 prose-pre:text-foreground",
                className
            )}
            id={id}>
            {children}
        </main>
    );
};

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

export { Section, Container, Main };