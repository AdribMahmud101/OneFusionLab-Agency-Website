import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import type { ReactNode } from "react";

const BentoGrid = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
                className,
            )}
        >
            {children}
        </div>
    );
};

const BentoCard = ({
    name,
    className,
    background,
    Icon,
    description,
    href,
    cta,
}: {
    name: string;
    className: string;
    background: ReactNode;
    Icon?: any;
    description: string;
    href: string;
    cta: string;
}) => {
    return (
        <div
            key={name}
            className={cn(
                "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
                "bg-black/5 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10 [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
                "hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300",
                className,
            )}
        >
            <div>{background}</div>
            <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
                {Icon && <Icon className="h-12 w-12 origin-left transform-gpu text-cyan-600 dark:text-cyan-400 transition-all duration-300 ease-in-out group-hover:scale-75" />}
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                    {name}
                </h3>
                <p className="max-w-lg text-zinc-600 dark:text-neutral-400">{description}</p>
            </div>

            <div
                className={cn(
                    "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
                )}
            >
                <a
                    href={href}
                    className="pointer-events-auto flex items-center gap-2 rounded-full bg-black/10 dark:bg-white/10 px-4 py-2 text-sm font-medium text-zinc-900 dark:text-white hover:bg-black/20 dark:hover:bg-white/20 backdrop-blur-sm"
                >
                    {cta}
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                </a>
            </div>
            <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
        </div>
    );
};

export { BentoCard, BentoGrid };
