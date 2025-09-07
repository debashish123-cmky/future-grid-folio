import React from 'react';
import { motion } from 'framer-motion';

interface CareerSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const CareerSection = ({ children, className = '', id }: CareerSectionProps) => {
  return (
    <motion.section
      id={id}
      className={`min-h-screen flex items-center justify-center py-20 px-6 ${className}`}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-10%" }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="backdrop-blur-xl bg-card/10 border border-border/20 rounded-2xl p-8 md:p-12 shadow-2xl">
          {children}
        </div>
      </div>
    </motion.section>
  );
};