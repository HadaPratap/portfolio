import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';
import { FiLayers, FiSmartphone, FiCreditCard, FiCpu, FiGrid, FiActivity } from 'react-icons/fi';

const expertiseItems = [
    {
        icon: <FiLayers className="text-teal-400" size={32} />,
        title: "Cross-Platform Architecture",
        desc: "Building scalable single-codebase solutions for Android & Web using Clean Architecture principles."
    },
    {
        icon: <FiSmartphone className="text-amber-400" size={32} />,
        title: "Platform Channels",
        desc: "Deep native integrations allowing Flutter to communicate seamlessly with Android/iOS native APIs."
    },
    {
        icon: <FiCreditCard className="text-purple-400" size={32} />,
        title: "Payment Systems",
        desc: "Expert implementation of Stripe, Square, Apple Pay & Google Pay for secure transaction flows."
    },
    {
        icon: <FiGrid className="text-blue-400" size={32} />,
        title: "Responsive UI/UX",
        desc: "Creating adaptive interfaces that function perfectly across Kiosks, Tablets, and Mobile devices."
    },
    {
        icon: <FiActivity className="text-emerald-400" size={32} />,
        title: "App Performance",
        desc: "Profiling & optimizing frame rendering, memory usage, and startup time for 60fps buttery smooth apps."
    },
    {
        icon: <FiCpu className="text-rose-400" size={32} />,
        title: "API-Driven Logic",
        desc: "Designing dynamic systems where UI and business logic are controlled remotely via REST APIs."
    }
];

const FlutterExpertise = () => {
    return (
        <SectionWrapper id="flutter-expertise" className="">
            <div className="text-center mb-16">
                <span className="text-teal-400 font-semibold tracking-wider text-sm uppercase mb-2 block">Core Strengths</span>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                    Flutter Engineering <span className="text-gradient">Expertise</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                    Going beyond basic UI building to deliver complex, enterprise-grade applications.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {expertiseItems.map((item, index) => (
                    <Card key={index} className="flex flex-col h-full bg-white dark:bg-slate-800/40 hover:bg-slate-50 dark:hover:bg-slate-800/60 border-slate-200 dark:border-slate-700/50 shadow-md dark:shadow-none">
                        <div className="mb-6 p-4 bg-slate-200 dark:bg-white/5 rounded-2xl w-fit backdrop-blur-md">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            {item.desc}
                        </p>
                    </Card>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default FlutterExpertise;
