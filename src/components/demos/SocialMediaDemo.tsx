import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles, Send, MessageSquare, Heart, Bookmark } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export const SocialMediaDemo = () => {
    const [prompt, setPrompt] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [result, setResult] = useState<null | { image: string, caption: string, hashtags: string[] }>(null);

    const handleGenerate = async () => {
        if (!prompt) return;
        setIsGenerating(true);
        setResult(null);

        try {
            const response = await fetch('http://localhost:5678/webhook-test/539a461a-4257-4796-8cd7-03486a3be703', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ chatInput: prompt }),
            });

            if (!response.ok) {
                throw new Error('Webhook request failed');
            }

            const data = await response.json();

            // Handle base64 image if present, or fallback to URL
            const imageUrl = data.image_base64
                ? `data:image/jpeg;base64,${data.image_base64}`
                : (data.image || "https://images.unsplash.com/photo-1620641788421-7a1c3103428f?q=80&w=2600&auto=format&fit=crop");

            setResult({
                image: imageUrl,
                caption: (data.headline ? `${data.headline}\n\n` : "") + (data.content || data.caption || `Generated content for: "${prompt}"`),
                hashtags: Array.isArray(data.hashtags) ? data.hashtags : ["#AI", "#Innovation", "#OneFusionLab"]
            });

        } catch (error) {
            console.error("Generation failed:", error);
            setResult({
                image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2670&auto=format&fit=crop",
                caption: `⚠️ Live Agent Connection Failed.\n\nShowing simulated result for: "${prompt}". \n\nEnsure your local n8n workflow is active!`,
                hashtags: ["#Offline", "#DemoMode"]
            });
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start my-8">
            {/* LEFT: Input Section */}
            <div className="flex flex-col gap-5 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl">
                <div className="space-y-2">
                    <h2 className="text-2xl font-orbitron font-bold text-white flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-cyan-400" />
                        AI Post Generator
                    </h2>
                    <p className="text-muted-foreground text-sm">
                        Describe your topic and let our agents craft the perfect viral post.
                    </p>
                </div>

                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-300">Prompt</label>
                        <Textarea
                            placeholder="e.g. Write a LinkedIn post about the benefits of AI in supply chain management..."
                            className="min-h-[150px] text-base border-zinc-200 dark:border-white/10 focus:border-cyan-500/50"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                        />
                    </div>

                    <Button
                        onClick={handleGenerate}
                        disabled={isGenerating || !prompt}
                        className="w-full bg-cyan-600 hover:bg-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300 h-12 text-lg font-semibold"
                    >
                        {isGenerating ? (
                            <span className="flex items-center gap-2">
                                <span className="animate-spin">⏳</span> Generating Magic...
                            </span>
                        ) : (
                            <span className="flex items-center gap-2">
                                <Sparkles className="w-4 h-4" /> Generate Post
                            </span>
                        )}
                    </Button>
                </div>

                {/* Simulated Steps */}
                <div className="mt-4 space-y-3">
                    <div className={`flex items-center gap-3 text-sm p-3 rounded-lg border transition-all duration-500 ${isGenerating ? 'border-cyan-500/50 bg-cyan-950/20 text-cyan-200' : 'border-white/5 bg-transparent text-muted-foreground'}`}>
                        <div className={`w-2 h-2 rounded-full ${isGenerating ? 'bg-cyan-400 animate-pulse' : 'bg-zinc-600'}`} />
                        Analyzing Intent...
                    </div>
                    <div className={`flex items-center gap-3 text-sm p-3 rounded-lg border transition-all duration-500 delay-1000 ${isGenerating ? 'border-orange-500/50 bg-orange-950/20 text-orange-200' : 'border-white/5 bg-transparent text-muted-foreground'}`}>
                        <div className={`w-2 h-2 rounded-full ${isGenerating ? 'bg-orange-400 animate-pulse' : 'bg-zinc-600'}`} />
                        Generating Creative Assets...
                    </div>
                </div>
            </div>

            {/* RIGHT: Output Section (Mock Phone) */}
            <div className="relative flex justify-center">
                <div className="w-[300px] h-[600px] border-[6px] border-zinc-900 rounded-[2.5rem] bg-black overflow-hidden shadow-2xl relative">
                    {/* Status Bar Mock */}
                    <div className="absolute top-0 w-full h-8 bg-black z-20 flex justify-between px-6 items-center text-[10px] font-bold text-white">
                        <span>9:41</span>
                        <div className="flex gap-1">
                            <span>Signal</span>
                            <span>WiFi</span>
                            <span>100%</span>
                        </div>
                    </div>

                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-black rounded-b-2xl z-20"></div>

                    {/* App Content */}
                    <div className="h-full w-full bg-zinc-950 pt-12 pb-8 px-4 flex flex-col relative overflow-y-auto no-scrollbar">

                        {/* Empty State */}
                        {!result && !isGenerating && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 space-y-4 opacity-50">
                                <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                    <Sparkles className="w-8 h-8 text-muted-foreground" />
                                </div>
                                <p className="text-muted-foreground">Preview will appear here</p>
                            </div>
                        )}

                        {/* Generating Animation */}
                        {isGenerating && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm z-10 space-y-4">
                                <div className="relative w-24 h-24">
                                    <div className="absolute inset-0 border-4 border-cyan-500/30 rounded-full animate-ping"></div>
                                    <div className="absolute inset-0 border-4 border-t-cyan-500 rounded-full animate-spin"></div>
                                </div>
                                <p className="text-cyan-400 font-orbitron text-sm animate-pulse tracking-widest">AI AGENT WORKING...</p>
                            </div>
                        )}

                        {/* Result Display */}
                        <AnimatePresence>
                            {result && !isGenerating && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex flex-col gap-4"
                                >
                                    {/* Mock Post Header */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-xs">AI</div>
                                            <div className="flex flex-col">
                                                <span className="text-sm font-semibold text-white">OneFusionLab Bot</span>
                                                <span className="text-xs text-muted-foreground">Just now • 🌍</span>
                                            </div>
                                        </div>
                                        <div className="text-muted-foreground">•••</div>
                                    </div>

                                    {/* Generated Image */}
                                    <div className="relative aspect-square rounded-xl overflow-hidden bg-zinc-900 border border-white/10">
                                        <motion.img
                                            initial={{ scale: 1.1 }}
                                            animate={{ scale: 1 }}
                                            transition={{ duration: 2 }}
                                            src={result.image}
                                            className="object-cover w-full h-full"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                                        <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-md px-2 py-1 rounded text-[10px] text-white/80 border border-white/10 flex items-center gap-1">
                                            <Sparkles className="w-3 h-3 text-cyan-400" />
                                            AI Generated
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex items-center justify-between text-white/80 px-1">
                                        <div className="flex gap-4">
                                            <Heart className="w-6 h-6 hover:text-red-500 cursor-pointer transition-colors" />
                                            <MessageSquare className="w-6 h-6 hover:text-cyan-400 cursor-pointer transition-colors" />
                                            <Send className="w-6 h-6 hover:text-cyan-400 cursor-pointer transition-colors" />
                                        </div>
                                        <Bookmark className="w-6 h-6 hover:text-yellow-400 cursor-pointer transition-colors" />
                                    </div>

                                    {/* Caption */}
                                    <div className="space-y-2">
                                        <div className="text-sm text-zinc-100 leading-relaxed font-light">
                                            <span className="font-semibold mr-2 block mb-1">OneFusionLab Bot</span>
                                            <ReactMarkdown
                                                components={{
                                                    p: ({ node, ...props }) => <p className="mb-2 last:mb-0" {...props} />,
                                                    h1: ({ node, ...props }) => <h2 className="font-bold text-base mb-2 mt-4 text-white" {...props} />,
                                                    h2: ({ node, ...props }) => <h3 className="font-bold text-sm mb-2 mt-3 text-white" {...props} />,
                                                    h3: ({ node, ...props }) => <h4 className="font-bold text-sm mb-1 mt-2 text-white" {...props} />,
                                                    ul: ({ node, ...props }) => <ul className="list-disc pl-4 mb-2 space-y-1" {...props} />,
                                                    ol: ({ node, ...props }) => <ol className="list-decimal pl-4 mb-2 space-y-1" {...props} />,
                                                    li: ({ node, ...props }) => <li className="text-zinc-200" {...props} />,
                                                    strong: ({ node, ...props }) => <strong className="font-semibold text-white" {...props} />,
                                                }}
                                            >
                                                {result.caption}
                                            </ReactMarkdown>
                                        </div>
                                        <div className="flex flex-wrap gap-2 pt-1">
                                            {result.hashtags.map((tag, i) => (
                                                <span key={i} className="text-cyan-400 text-xs hover:underline cursor-pointer">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                    </div>

                    {/* Home Bar */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};
