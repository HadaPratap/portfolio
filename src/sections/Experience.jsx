import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { resume } from '../data/resume';
import { motion } from 'framer-motion';

const ExperienceItem = ({ job, index }) => (
    <div className="relative pl-8 md:pl-12 py-6 border-l-2 border-slate-200 dark:border-slate-800 hover:border-teal-500/50 transition-colors duration-300 group">
        {/* Timeline Dot */}
        <div className="absolute -left-[9px] top-8 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-600 group-hover:border-teal-500 group-hover:bg-teal-500/20 transition-all" />

        <div className="glass-card p-6 md:p-8 rounded-xl border border-slate-200 dark:border-white/5 hover:border-teal-500/30 transition-all duration-300 relative bg-white/50 dark:bg-slate-900/40">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                        {job.role}
                    </h3>
                    <div className="text-lg text-slate-600 dark:text-slate-400 font-medium">
                        {job.company}
                    </div>
                </div>
                <div className="mt-2 md:mt-0 px-3 py-1 bg-amber-500/10 text-amber-500 text-sm font-semibold rounded-full border border-amber-500/20">
                    {job.period}
                </div>
            </div>

            <p className="text-slate-600 dark:text-slate-400 mb-6 italic text-sm md:text-base border-l-2 border-slate-300 dark:border-slate-700 pl-4 py-1">
                {job.description}
            </p>

            <ul className="space-y-3">
                {job.achievements.map((item, idx) => (
                    <li key={idx} className="flex items-start text-slate-700 dark:text-slate-300 text-sm md:text-base">
                        <span className="mt-2 mr-3 w-1.5 h-1.5 bg-teal-500 rounded-full flex-shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const Experience = () => {
    return (
        <SectionWrapper id="experience" className="">
            <div className="text-center mb-16">
                <span className="text-purple-400 font-semibold tracking-wider text-sm uppercase mb-2 block">Career Path</span>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                    Professional <span className="text-gradient">Experience</span>
                </h2>
            </div>

            <div className="max-w-4xl mx-auto">
                {resume.experience.map((job, index) => (
                    <ExperienceItem key={index} job={job} index={index} />
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Experience;
