import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, outline = false, href, onClick, className = '' }) => {
    const baseClasses = "px-8 py-3.5 rounded-xl font-bold tracking-wide transition-all duration-300 transform hover:-translate-y-1 inline-block cursor-pointer flex items-center justify-center gap-2";

    // Teal Glow Primary
    const solidClasses = "bg-teal-500 hover:bg-teal-400 text-white shadow-[0_0_20px_rgba(20,184,166,0.4)] hover:shadow-[0_0_30px_rgba(20,184,166,0.6)] border border-teal-400/20";

    // Amber/Teal Outline
    const outlineClasses = "bg-transparent border border-gray-700 text-gray-300 hover:border-teal-500 hover:text-teal-400 hover:bg-teal-500/10";

    const classes = `${baseClasses} ${outline ? outlineClasses : solidClasses} ${className}`;

    if (href) {
        return (
            <motion.a
                href={href}
                className={classes}
                whileTap={{ scale: 0.95 }}
            >
                {children}
            </motion.a>
        );
    }

    return (
        <motion.button
            onClick={onClick}
            className={classes}
            whileTap={{ scale: 0.95 }}
        >
            {children}
        </motion.button>
    );
};

export default Button;
