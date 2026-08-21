import { Github, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
    return (
        <footer className="w-full border-t border-black/5 dark:border-white/10 bg-white/50 dark:bg-black/40 backdrop-blur-md pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="relative h-10 w-10 overflow-hidden rounded-full">
                                <img src={logo.src} alt="OneFusionLab Logo" className="object-cover" />
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
                                OneFusionLab
                            </span>
                        </div>
                        <p className="text-zinc-600 dark:text-muted-foreground text-sm max-w-xs">
                            Engineering self-driving business infrastructures with autonomous agents.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://github.com/onefusionlab" className="text-zinc-500 dark:text-muted-foreground hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                                <Github className="h-5 w-5" />
                            </a>
                            <a href="https://twitter.com/onefusionlab" className="text-zinc-500 dark:text-muted-foreground hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="https://linkedin.com/company/onefusionlab" className="text-zinc-500 dark:text-muted-foreground hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-zinc-900 dark:text-white mb-6">Product</h3>
                        <ul className="space-y-4 text-sm text-zinc-600 dark:text-muted-foreground">
                            <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Integrations</a></li>
                            <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Changelog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-zinc-900 dark:text-white mb-6">Company</h3>
                        <ul className="space-y-4 text-sm text-zinc-600 dark:text-muted-foreground">
                            <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-zinc-900 dark:text-white mb-6">Legal</h3>
                        <ul className="space-y-4 text-sm text-zinc-600 dark:text-muted-foreground">
                            <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-black/5 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500 dark:text-muted-foreground">
                    <p>© 2024 OneFusionLab. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Terms</a>
                        <a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
