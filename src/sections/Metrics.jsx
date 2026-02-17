import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';

const counters = [
    { label: "Years Experience", value: 6, suffix: "+" },
    { label: "App Users Served", value: 150, suffix: "K+" },
    { label: "Payment Integrations", value: 10, suffix: "+" },
    { label: "Cross-Platform Apps", value: 10, suffix: "+" },
];

const CounterItem = ({ item, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        viewport={{ once: true }}
        className="text-center p-6"
    >
        <div className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2 font-display">
            {item.value}{item.suffix}
        </div>
        <div className="text-slate-600 dark:text-slate-400 font-medium tracking-wide uppercase text-xs md:text-sm">
            {item.label}
        </div>
    </motion.div>
);

const Metrics = () => {
    return (
        <section className="py-12 border-y border-slate-200 dark:border-white/5 bg-white/30 dark:bg-slate-900/30 backdrop-blur-sm relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 bg-teal-500/5 -skew-y-2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                {counters.map((item, index) => (
                    <CounterItem key={index} item={item} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Metrics;
