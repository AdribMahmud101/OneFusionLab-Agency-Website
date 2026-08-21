import * as React from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ThemeToggle"
import { cn } from "@/lib/utils"

const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
]

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <motion.header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-background/80 backdrop-blur-md border-b border-white/10 shadow-lg shadow-cyan-500/5"
                    : "bg-transparent"
            )}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Left: Mobile Menu & Desktop Nav */}
                    <div className="flex items-center">
                        <div className="md:hidden mr-2">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-foreground hover:text-cyan-400"
                            >
                                {isOpen ? <X /> : <Menu />}
                            </Button>
                        </div>

                        <nav className="hidden md:flex space-x-1">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-cyan-400 transition-colors relative group"
                                >
                                    {item.name}
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Center: Branding */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center w-full justify-center md:w-auto pointer-events-none">
                        <a href="/" className="flex items-center space-x-2 group whitespace-nowrap pointer-events-auto">
                            <span className="text-sm sm:text-lg md:text-2xl font-bold tracking-wider md:tracking-widest font-orbitron text-foreground group-hover:text-cyan-400 transition-colors duration-300">
                                ONE FUSION <span className="text-cyan-600 dark:text-cyan-500 group-hover:text-cyan-500 dark:group-hover:text-white transition-colors duration-300">LAB</span>
                            </span>
                        </a>
                    </div>

                    {/* Right: CTA & Theme Toggle */}
                    <div className="flex items-center space-x-2 md:space-x-4">
                        <div className="hidden md:block">
                            <Button
                                asChild
                                variant="default"
                                className="bg-cyan-600 hover:bg-cyan-500 text-white border-0 shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:shadow-[0_0_25px_rgba(6,182,212,0.7)] transition-all duration-300"
                            >
                                <a href="https://t.me/adribmahmud" target="_blank" rel="noopener noreferrer">
                                    Let's Talk
                                </a>
                            </Button>
                        </div>
                        <ThemeToggle />
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <motion.div
                className={cn(
                    "md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-white/10 overflow-hidden",
                    isOpen ? "block" : "hidden"
                )}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            >
                <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-3 text-lg font-medium text-foreground hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                    <div className="pt-4 pb-2">
                        <Button asChild className="w-full bg-cyan-600 hover:bg-cyan-500 text-white">
                            <a href="https://t.me/adribmahmud" target="_blank" rel="noopener noreferrer">
                                Let's Talk
                            </a>
                        </Button>
                    </div>
                </div>
            </motion.div>
        </motion.header>
    )
}
