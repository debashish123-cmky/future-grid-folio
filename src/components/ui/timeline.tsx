import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  title: string;
  company: string;
  duration: string;
  description: string;
  isLast?: boolean;
}

interface TimelineProps {
  items: TimelineItemProps[];
  className?: string;
}

export const Timeline = ({ items, className = '' }: TimelineProps) => {
  return (
    <div className={`relative ${className}`}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="relative flex items-start mb-8 last:mb-0"
        >
          {/* Timeline line and dot */}
          <div className="flex flex-col items-center mr-6">
            {/* Dot */}
            <div className="w-4 h-4 bg-primary rounded-full border-2 border-background shadow-glow-cyber z-10" />
            {/* Dotted line */}
            {!item.isLast && (
              <div className="w-0.5 h-16 border-l-2 border-dotted border-primary/30 mt-2" />
            )}
          </div>

          {/* Content */}
          <div className="flex-1 backdrop-blur-md bg-card/20 border border-border/30 rounded-lg p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
              <span className="text-sm text-primary font-mono bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                {item.duration}
              </span>
            </div>
            <p className="text-muted-foreground mb-2 font-medium">{item.company}</p>
            <p className="text-muted-foreground leading-relaxed">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};