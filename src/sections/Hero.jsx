import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import Button from '../components/Button';
import SectionWrapper from '../components/SectionWrapper';
import { resume } from '../data/resume';

const TechBadge = ({ name, i }) => (
    <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 + (i * 0.1) }}
        className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-300 text-sm font-medium hover:border-teal-500/50 hover:text-teal-400 transition-colors cursor-default"
    >
        {name}
    </motion.span>
);

const Hero = () => {
    const { name, title, tagline, experienceYears } = resume.personalInfo;
    const techStack = ["Flutter", "Kotlin", "Dart", "MVVM", "Clean Arch"];

    return (
        <SectionWrapper id="hero" className="min-h-screen flex items-center pt-32 lg:pt-0 overflow-hidden relative">

            {/* Background Glows */}
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px] -z-10" />

            <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-16">

                {/* Text Content */}
                <div className="flex-1 text-center lg:text-left z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm"
                    >
                        <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                        <span className="text-sm font-medium text-slate-300">Available for Freelance & Hires</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight text-slate-900 dark:text-white">
                        Building <span className="text-gradient">Scalable</span> <br />
                        Mobile Experiences.
                    </h1>

                    <h2 className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                        Senior Flutter & Android Developer specializing in <span className="text-teal-600 dark:text-teal-400">Fintech</span>, <span className="text-amber-600 dark:text-amber-400">Kiosk Systems</span>, and high-performance cross-platform apps.
                    </h2>

                    <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
                        {techStack.map((tech, i) => (
                            <TechBadge key={tech} name={tech} i={i} />
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Button href="#projects" >
                            <span className="inline-flex items-center gap-2 whitespace-nowrap">
                                View Projects <FiArrowRight />
                            </span>
                        </Button>
                        <Button outline href="#contact">
                            Contact Me
                        </Button>
                        <div className="flex items-center gap-4 ml-4">
                            {/* Social Icons could go here */}
                        </div>
                    </div>
                </div>

                {/* Visual Content - Floating Device Mockup */}
                <div className="flex-1 relative hidden lg:block">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10"
                    >
                        {/* CSS Phone Frame */}
                        <div className="w-[300px] h-[600px] bg-slate-900 rounded-[40px] border-8 border-slate-800 shadow-2xl mx-auto overflow-hidden relative">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-xl z-20" />

                            {/* Mockup Screen Content */}
                            <div className="w-full h-full bg-slate-800 relative flex flex-col">
                                {/* App Header */}
                                <div className="h-24 bg-slate-900/50 w-full flex flex-col justify-end p-5 border-b border-slate-700/50">
                                    <div className="flex justify-between items-center text-white">
                                        <div>
                                            <div className="text-xs text-slate-400 font-medium">My Arsenal</div>
                                            <div className="text-lg font-bold text-white">Tech Stack</div>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400">
                                            <FiGithub />
                                        </div>
                                    </div>
                                </div>

                                {/* Scrollable Tech Grid */}
                                <div className="p-5 overflow-y-auto no-scrollbar pb-20">
                                    <div className="grid grid-cols-2 gap-3">
                                        {[
                                            { name: 'Flutter', color: 'bg-green-500', icon: 'F' },
                                            { name: 'Kotlin', color: 'bg-green-500', icon: 'K' },
                                            { name: 'Dart', color: 'bg-green-500', icon: 'D' },
                                            { name: 'Firebase', color: 'bg-green-500', icon: '🔥' },
                                            { name: 'Android', color: 'bg-green-500', icon: '🤖' },
                                            { name: 'Stripe', color: 'bg-green-500', icon: 'S' },
                                            { name: 'Svelte', color: 'bg-green-500', icon: 'S' },
                                            { name: 'Figma', color: 'bg-green-500', icon: 'Fi' },
                                        ].map((tech, i) => (
                                            <div key={i} className="aspect-square rounded-2xl bg-slate-700/30 border border-slate-700 hover:border-teal-500/50 transition-colors p-3 flex flex-col justify-between group">
                                                <div className="flex justify-between items-start">
                                                    <div className={`w-8 h-8 rounded-lg ${tech.color}/20 flex items-center justify-center text-${tech.color.split('-')[1]}-400 font-bold`}>
                                                        {tech.icon}
                                                    </div>
                                                    <div className="w-2 h-2 rounded-full bg-slate-600 group-hover:bg-teal-400 transition-colors" />
                                                </div>
                                                <div>
                                                    <div className="text-white font-medium text-sm">{tech.name}</div>
                                                    <div className="text-[10px] text-slate-400">Advanced</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Stats Card */}
                                    <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-teal-500/10 to-teal-500/5 border border-teal-500/20">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-xs text-teal-400 font-medium">Projects Shipped</span>
                                            <span className="text-xs text-teal-400/70">Total</span>
                                        </div>
                                        <div className="text-2xl font-bold text-white">10+ Apps</div>
                                        <div className="w-full h-1 bg-slate-700 rounded-full mt-3 overflow-hidden">
                                            <div className="w-[85%] h-full bg-teal-500 rounded-full" />
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Nav */}
                                <div className="mt-auto h-20 bg-slate-900/90 backdrop-blur-md border-t border-slate-700/50 absolute bottom-0 w-full flex justify-around items-center px-6 z-20">
                                    <div className="flex flex-col items-center gap-1 text-teal-400">
                                        <div className="w-12 h-1 bg-teal-400 rounded-full mb-1" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge 1 */}
                        {/* <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute top-20 -left-12 glass-card p-4 rounded-xl flex items-center gap-3 w-48 z-30"
                        >
                            <div className="p-2 bg-green-500/20 rounded-lg text-green-400">
                                <FiArrowRight className="rotate-[-45deg]" />
                            </div>
                            <div>
                                <div className="text-xs text-slate-400">Payment Success</div>
                                <div className="font-bold text-white text-sm">+ $850.00</div>
                            </div>
                        </motion.div> */}

                        {/* Floating Badge 2 */}
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-32 -right-12 glass-card p-4 rounded-xl flex items-center gap-3 w-48 z-30"
                        >
                            <div className="p-2 bg-amber-500/20 rounded-lg text-amber-400">
                                <span>★</span>
                            </div>
                            <div>
                                <div className="text-xs text-slate-400">App Rating</div>
                                <div className="font-bold text-slate-600 dark:text-slate-400 text-sm">4.9/5.0 Stars</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Hero;
