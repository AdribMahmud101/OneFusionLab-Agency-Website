import logo from "@/assets/logo.png";
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Globe, Code, Database, Server, Cloud, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

interface OrbitProps {
    className?: string;
}

export function Orbit({ className }: OrbitProps) {
    return (
        <div className={cn("relative flex h-[500px] w-full max-w-[500px] items-center justify-center", className)}>
            {/* Central Core */}
            <div className="absolute z-10 flex h-44 w-44 items-center justify-center rounded-full bg-white dark:bg-black border border-cyan-500/20 overflow-hidden">
                <img src={logo.src} alt="OneFusionLab Logo" className="h-[70%] w-[70%] object-contain" />
            </div>

            {/* Inner Ring */}
            <div className="absolute h-[250px] w-[250px] rounded-full border border-cyan-500/20 opacity-100" />
            <OrbitingIcon radius={125} duration={20} delay={0} icon={Code} />
            <OrbitingIcon radius={125} duration={20} delay={10} icon={Database} />

            {/* Middle Ring */}
            <div className="absolute h-[350px] w-[350px] rounded-full border border-cyan-500/10 opacity-100" />
            <OrbitingIcon radius={175} duration={30} delay={0} reverse icon={Server} />
            <OrbitingIcon radius={175} duration={30} delay={10} reverse icon={Cloud} />
            <OrbitingIcon radius={175} duration={30} delay={20} reverse icon={Shield} />

            {/* Outer Ring */}
            <div className="absolute h-[450px] w-[450px] rounded-full border border-cyan-500/5 opacity-100" />
            <OrbitingIcon radius={225} duration={40} delay={5} icon={Globe} />
            <OrbitingIcon radius={225} duration={40} delay={25} icon={Cpu} />

            {/* Background Glow */}
            <div className="absolute inset-0 -z-10 bg-cyan-500/5 blur-3xl rounded-full" />
        </div>
    );
}

interface OrbitingIconProps {
    radius: number;
    duration: number;
    delay: number;
    reverse?: boolean;
    icon: React.ElementType;
}

function OrbitingIcon({ radius, duration, delay, reverse = false, icon: Icon }: OrbitingIconProps) {
    return (
        <motion.div
            className="absolute flex items-center justify-center"
            animate={{
                rotate: reverse ? -360 : 360,
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "linear",
                delay: -delay, // Negative delay to start at different positions immediately
            }}
            style={{
                width: radius * 2,
                height: radius * 2,
            }}
        >
            <div
                className="absolute flex h-10 w-10 items-center justify-center rounded-full bg-background border border-cyan-500/30 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                style={{
                    top: 0,
                    left: '50%',
                    transform: 'translate(-50%, -50%) rotate(0deg)', // Counter-rotate logic would go here if we wanted icon to stay upright, but for simple shapes it's fine
                }}
            >
                <Icon className="h-5 w-5" />
            </div>
        </motion.div>
    );
}
