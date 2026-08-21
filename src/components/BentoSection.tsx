import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Globe from "@/components/ui/globe";
import { BrainCircuit, Globe as GlobeIcon, Users } from "lucide-react";

export function BentoSection() {
    const features = [
        {
            Icon: BrainCircuit,
            name: "Our Research",
            description:
                "Pushing the boundaries of autonomous agents and neural architectures. We publish papers on self-optimizing systems and agentic workflows.",
            href: "/research",
            cta: "Read Papers",
            background: <div className="absolute -right-20 -top-20 opacity-60 pointer-events-none">
                <div className="h-[400px] w-[600px] bg-gradient-to-tr from-cyan-500/20 to-transparent blur-3xl rounded-full" />
            </div>,
            className: "col-span-3 lg:col-span-1",
        },
        {
            Icon: GlobeIcon, // Not rendered, using custom background
            name: "Open Source",
            description:
                "We believe in open collaboration. Explore our contributions to the ecosystem, from agent frameworks to UI libraries.",
            href: "https://github.com/onefusionlab",
            cta: "View Github",
            background: (
                <div className="absolute inset-0 flex items-center justify-center opacity-50 mask-image-b-0">
                    <Globe className="top-10" />
                </div>
            ),
            className: "col-span-3 lg:col-span-2",
        },
        {
            Icon: Users,
            name: "Our Team",
            description:
                "A distributed collective of engineers, researchers, and designers. We are building the future of work.",
            href: "/team",
            cta: "Meet the Team",
            background: <div className="absolute -right-20 -top-20 opacity-60 pointer-events-none">
                <div className="h-[400px] w-[600px] bg-gradient-to-bl from-orange-500/20 to-transparent blur-3xl rounded-full" />
            </div>,
            className: "col-span-3 lg:col-span-3",
        },
    ];

    return (
        <section className="relative w-full py-20 px-4 md:px-0">
            <div className="container mx-auto space-y-8">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-zinc-900 dark:text-white">
                        Discover Our <span className="text-cyan-600 dark:text-cyan-400">Universe</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        From cutting-edge research to global open-source impact.
                    </p>
                </div>

                <BentoGrid>
                    {features.map((feature) => (
                        <BentoCard key={feature.name} {...feature} />
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
}
