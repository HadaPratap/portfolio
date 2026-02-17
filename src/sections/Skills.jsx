import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { resume } from '../data/resume';

const SkillCategory = ({ title, skills, color }) => (
    <div className="mb-10">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${color}`} />
            {title}
        </h3>
        <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
                <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-white dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all font-medium text-sm cursor-default shadow-sm"
                >
                    {skill}
                </motion.span>
            ))}
        </div>
    </div>
);

const Skills = () => {
    const { languages, frameworks, tools, integrations, databases } = resume.skills;

    return (
        <SectionWrapper id="skills" className="relative">
            <div className="text-center mb-16">
                <span className="text-amber-500 font-semibold tracking-wider text-sm uppercase mb-2 block">Tech Stack</span>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                    Technologies & <span className="text-gradient">Tools</span>
                </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <SkillCategory title="Mobile Development" skills={[...languages, ...frameworks]} color="bg-teal-500" />
                <SkillCategory title="Architecture & Patterns" skills={["MVVM", "Clean Architecture", "Repository Pattern", "DI (Hilt)", "SOLID"]} color="bg-amber-500" />
                <SkillCategory title="Backend & APIs" skills={[...databases, "Firebase", "REST APIs", "Retrofit"]} color="bg-purple-500" />
                <SkillCategory title="Payments & Integrations" skills={integrations} color="bg-emerald-500" />
                <SkillCategory title="DevOps & Tools" skills={tools} color="bg-blue-500" />
            </div>
        </SectionWrapper>
    );
};

export default Skills;
