import React from "react";
import Marquee from "@/components/ui/marquee";
import { Icons } from "@/components/TechIcons";

const techStack = [
    { name: "Rust", category: "Core", icon: Icons.Rust },
    { name: "TypeScript", category: "Core", icon: Icons.TypeScript },
    { name: "Kotlin", category: "Core", icon: Icons.Kotlin },
    { name: "Python", category: "Core", icon: Icons.Python },
    { name: "Linux", category: "Core", icon: Icons.Linux },
    { name: "n8n", category: "Automation", icon: Icons.n8n },
    { name: "Windmill", category: "Automation", icon: Icons.Windmill },
    { name: "Tauri", category: "Desktop", icon: Icons.Tauri },
];

const frameworks = [
    { name: "Astro", category: "Web", icon: Icons.Astro },
    { name: "React", category: "Web", icon: Icons.React },
    { name: "Svelte", category: "Web", icon: Icons.Svelte },
    { name: "Vue", category: "Web", icon: Icons.Vue },
    { name: "Next.js", category: "Web", icon: Icons.Nextjs },
    { name: "Jetpack Compose", category: "Android", icon: Icons.JetpackCompose },
    { name: "Flutter", category: "Android", icon: Icons.Flutter },
    { name: "React Native", category: "Android", icon: Icons.ReactNative },
];

const TechBadge = ({ name, category, icon: Icon }: { name: string; category: string; icon: React.ComponentType<React.SVGProps<SVGSVGElement>> }) => (
    <div className="mx-2 flex items-center justify-center rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-6 py-3 backdrop-blur-md transition-all hover:bg-black/10 dark:hover:bg-white/10 hover:border-cyan-500/30 gap-3 group">
        <Icon className="h-6 w-6 text-muted-foreground group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
        <span className="text-lg font-medium text-zinc-800 dark:text-white/90">{name}</span>
    </div>
);

export function TechStack() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center gap-8 overflow-hidden py-20 bg-zinc-50/50 dark:bg-black/20">
            <div className="container mx-auto px-4 text-center mb-4">
                <p className="text-xl text-muted-foreground">
                    Powered by the tech stack we use
                </p>
            </div>

            <Marquee pauseOnHover className="[--duration:40s] [--gap:1rem]">
                {techStack.map((tech) => (
                    <TechBadge key={tech.name} name={tech.name} category={tech.category} icon={tech.icon} />
                ))}
            </Marquee>

            <Marquee reverse pauseOnHover className="[--duration:40s] [--gap:1rem]">
                {frameworks.map((tech) => (
                    <TechBadge key={tech.name} name={tech.name} category={tech.category} icon={tech.icon} />
                ))}
            </Marquee>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background dark:from-background to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background dark:from-background to-transparent"></div>
        </div>
    );
}
