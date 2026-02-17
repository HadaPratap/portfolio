import React from 'react';
import SectionWrapper from '../components/SectionWrapper';

const StandardCard = ({ number, title, desc }) => (
    <div className="relative group p-8 border-l border-slate-300 dark:border-slate-800 hover:border-teal-500 transition-colors duration-300">
        <div className="absolute -left-3 top-8 w-6 h-6 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-full flex items-center justify-center group-hover:border-teal-500 transition-colors z-10">
            <div className="w-2 h-2 bg-slate-600 rounded-full group-hover:bg-teal-400 transition-colors" />
        </div>
        <div className="text-6xl font-bold text-slate-200 dark:text-slate-800/50 absolute top-4 right-4 z-0 pointer-events-none group-hover:text-slate-300 dark:group-hover:text-slate-800 transition-colors select-none">
            {number}
        </div>
        <div className="relative z-10">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">{title}</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                {desc}
            </p>
        </div>
    </div>
);

const EngineeringStandards = () => {
    const standards = [
        { title: "Clean Architecture", desc: "Separation of concerns into Domain, Data, and Presentation layers for testable and scalable codebases." },
        { title: "Modularization", desc: "Feature-first project structure ensuring code decoupling and faster build times for large teams." },
        { title: "Solid Principles", desc: "Strict adherence to SOLID principles to creating maintainable systems that are easy to extend." },
        { title: "Automated Testing", desc: "Robust testing strategy covering Unit Tests for logic and Widget Tests for UI stability." },
        { title: "CI/CD Pipelines", desc: "Automated build and deployment workflows using GitHub Actions and Codemagic." },
        { title: "Performance Profiling", desc: "Proactive memory leak detection and frame rendering optimization using DevTools." },
    ];

    return (
        <SectionWrapper id="engineering" className="bg-slate-50 dark:bg-slate-900/50">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                    Engineering <span className="text-gradient">Standards</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                    I don't just write code that works; I write code that is scalable, maintainable, and built to last.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border border-slate-300 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900/40 overflow-hidden shadow-lg dark:shadow-none">
                {standards.map((s, i) => (
                    <StandardCard key={i} number={`0${i + 1}`} title={s.title} desc={s.desc} />
                ))}
            </div>
        </SectionWrapper>
    );
};

export default EngineeringStandards;
