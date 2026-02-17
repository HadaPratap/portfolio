import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';
import { resume } from '../data/resume';
import { FiCode, FiExternalLink, FiLayers, FiSmartphone } from 'react-icons/fi';

const ProjectMockup = ({ type }) => (
    <div className={`w-full h-48 rounded-xl mb-6 relative overflow-hidden flex items-center justify-center ${type === 'kiosk' ? 'bg-amber-500/10' : 'bg-teal-500/10'}`}>
        <div className={`w-32 h-48 border-4 border-slate-300 dark:border-slate-700 rounded-2xl bg-white dark:bg-slate-800 shadow-2xl transform ${type === 'kiosk' ? 'rotate-0 scale-75' : '-rotate-6 translate-y-4'}`}>
            <div className="w-full h-full bg-slate-50 dark:bg-slate-900 rounded-lg overflow-hidden relative">
                <div className="h-4 bg-slate-200 dark:bg-slate-800 w-full" />
                <div className="p-2 space-y-2">
                    <div className="w-full h-12 bg-slate-200 dark:bg-slate-800 rounded-lg animate-pulse" />
                    <div className="w-2/3 h-4 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
                    <div className="w-full h-20 bg-slate-100 dark:bg-slate-800/50 rounded-lg" />
                </div>
            </div>
        </div>
        {type !== 'kiosk' && (
            <div className="absolute w-32 h-48 border-4 border-slate-300 dark:border-slate-700 rounded-2xl bg-white dark:bg-slate-800 shadow-xl transform rotate-6 translate-x-12 translate-y-8 opacity-80 z-0">
                <div className="w-full h-full bg-slate-50 dark:bg-slate-900 rounded-lg" />
            </div>
        )}
    </div>
);

const Projects = () => {
    return (
        <SectionWrapper id="projects" className="bg-slate-900/0">
            <div className="text-center mb-16">
                <span className="text-teal-400 font-semibold tracking-wider text-sm uppercase mb-2 block">Case Studies</span>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                    Featured <span className="text-gradient">Projects</span>
                </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {resume.projects.map((project, index) => (
                    <Card key={index} className="h-full flex flex-col group hover:border-teal-500/40">
                        {/* Mockup Area */}
                        <ProjectMockup type={project.title.toLowerCase().includes('kiosk') ? 'kiosk' : 'mobile'} />

                        <div className="mb-4">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">{project.title}</h3>
                                <div className="flex gap-3 text-slate-500 dark:text-slate-400">
                                    {/* Action Icons */}
                                </div>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        <div className="mb-6 flex-grow">
                            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                                <FiLayers className="text-teal-500" /> Key Features
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                {project.highlights.map((h, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                                        {h}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-auto pt-6 border-t border-slate-800">
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map(t => (
                                    <span key={t} className="text-xs font-semibold px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-teal-600 dark:text-teal-300 rounded-md border border-slate-200 dark:border-slate-700">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Projects;
