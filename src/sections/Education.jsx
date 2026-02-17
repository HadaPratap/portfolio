import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { resume } from '../data/resume';
import { FiAward } from 'react-icons/fi';

const Education = () => {
    const { education, testimonials } = resume;

    return (
        <SectionWrapper id="education" className="bg-slate-50 dark:bg-slate-950">
            <div className="grid lg:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-3">
                        <FiAward className="text-blue-600" /> Education
                    </h2>
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-md border-l-4 border-blue-600">
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">{education.degree}</h3>
                        <p className="text-lg text-slate-600 dark:text-slate-300 mb-1">{education.university}</p>
                        <div className="flex justify-between items-center text-slate-500 dark:text-slate-400 font-medium">
                            <span>Year: {education.year}</span>
                            <span>CGPA: {education.gpa}</span>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-8">
                        Endorsements
                    </h2>
                    <div className="space-y-6">
                        {testimonials.map((t, i) => (
                            <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm relative">
                                <div className="text-4xl text-blue-200 dark:text-blue-900 absolute top-4 right-4 italic font-serif">"</div>
                                <p className="text-slate-600 dark:text-slate-300 italic mb-4 relative z-10">"{t.text}"</p>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white">{t.author}</h4>
                                    <span className="text-sm text-slate-500 dark:text-slate-400">{t.company}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Education;
