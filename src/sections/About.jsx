import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { FiTarget, FiBox, FiTrendingUp } from 'react-icons/fi';

const StatCard = ({ icon, value, label }) => (
    <div className="p-6 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-teal-500/50 transition-colors shadow-sm">
        <div className="text-teal-400 mb-4">{icon}</div>
        <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{value}</div>
        <div className="text-sm text-slate-400">{label}</div>
    </div>
);

const About = () => {
    return (
        <SectionWrapper id="about" className="">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Visual Side */}
                <div className="relative order-2 lg:order-1">
                    <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-amber-500/20 rounded-[40px] rotate-3 blur-2xl -z-10" />
                    <div className="bg-slate-900 border border-slate-800 rounded-[32px] p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full -mr-10 -mt-10 blur-xl" />

                        <h3 className="text-xl font-bold text-white mb-6">Engineering Impact</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                                <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400">
                                    <FiTarget />
                                </div>
                                <div>
                                    <div className="text-white font-medium">Precision Architecture</div>
                                    <div className="text-xs text-slate-400">Clean Code & MVVM</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                                <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400">
                                    <FiBox />
                                </div>
                                <div>
                                    <div className="text-white font-medium">Product Scalability</div>
                                    <div className="text-xs text-slate-400">Modular Systems</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                                    <FiTrendingUp />
                                </div>
                                <div>
                                    <div className="text-white font-medium">Business Growth</div>
                                    <div className="text-xs text-slate-400">Revenue-driving Features</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Side */}
                <div className="order-1 lg:order-2">
                    <span className="text-teal-400 font-semibold tracking-wider text-sm uppercase mb-2 block">About Me</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                        More Than Just <span className="text-gradient">Code</span>
                    </h2>

                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
                        I am a product-focused Senior Flutter & Android Developer with over 6 years of experience building mission-critical applications. My expertise lies in architecting scalable cross-platform solutions that drive business value.
                    </p>

                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                        Specializing in <strong>Fintech</strong> and <strong>Enterprise Kiosk Systems</strong>, I bridge the gap between complex engineering challenges and seamless user experiences. From integrating secure payment gateways (Stripe, Square) to optimizing app performance for millions of users, I build software that performs.
                    </p>

                    <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-800">
                        <div>
                            <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">6+</div>
                            <div className="text-xs text-slate-500 uppercase tracking-wide">Years Exp</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">150k+</div>
                            <div className="text-xs text-slate-500 uppercase tracking-wide">Downloads</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">100%</div>
                            <div className="text-xs text-slate-500 uppercase tracking-wide">Success Rate</div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default About;
