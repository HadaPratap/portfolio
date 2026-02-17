import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '' }) => {
    return (
        <motion.div
            className={`glass-card p-8 rounded-2xl transition-all duration-500 hover:border-teal-500/30 hover:shadow-[0_0_30px_-5px_rgba(20,184,166,0.3)] ${className}`}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            {children}
        </motion.div>
    );
};

export default Card;
