import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { FiMonitor, FiCreditCard, FiSmartphone, FiLayers } from 'react-icons/fi';

const Specialization = () => {
    const specs = [
        {
            icon: <FiMonitor size={40} className="text-blue-600" />,
            title: "Kiosk Applications",
            desc: "Deep expertise in building robust, always-on kiosk systems for retail and hospitality with native hardware integration."
        },
        {
            icon: <FiCreditCard size={40} className="text-cyan-500" />,
            title: "Payment Integration",
            desc: "Secure integration of payment gateways like Stripe, Square, Apple Pay, and Google Pay using platform channels."
        },
        {
            icon: <FiSmartphone size={40} className="text-violet-500" />,
            title: "Cross-Platform Apps",
            desc: "High-performance Flutter applications that run seamlessly on Android, iOS, and Web from a single codebase."
        },
        {
            icon: <FiLayers size={40} className="text-emerald-500" />,
            title: "API-Driven Architecture",
            desc: "Building dynamic, server-controlled UIs where app structure and content are fully managed via REST APIs."
        }
    ];

    return (
        <SectionWrapper id="specialization" className="bg-slate-50/50 dark:bg-slate-900/50">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-800 dark:text-white">
                My Specializations
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {specs.map((spec, idx) => (
                    <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md text-center hover:transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="bg-slate-50 dark:bg-slate-700 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 shadow-inner">
                            {spec.icon}
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">{spec.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            {spec.desc}
                        </p>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Specialization;
