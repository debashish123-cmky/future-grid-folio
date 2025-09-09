import React from 'react';
import { motion } from 'framer-motion';

interface ConnectedTimelineItemProps {
  title: string;
  company: string;
  duration: string;
  description: string;
  isLast?: boolean;
}

interface ConnectedTimelineProps {
  items: ConnectedTimelineItemProps[];
  className?: string;
}

export const ConnectedTimeline = ({ items, className = '' }: ConnectedTimelineProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Central vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/60 via-primary to-primary/60 transform -translate-x-1/2" />
      
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          viewport={{ once: true }}
          className={`relative flex items-center mb-16 ${
            index % 2 === 0 ? 'justify-start' : 'justify-end'
          }`}
        >
          {/* Experience Card */}
          <div className={`w-5/12 ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
            <div className="backdrop-blur-md bg-card/20 border border-border/30 rounded-2xl p-8 shadow-2xl relative group hover:scale-105 transition-all duration-300">
              {/* Hanging string effect */}
              <div className={`absolute top-0 w-px h-8 bg-gradient-to-b from-primary to-transparent ${
                index % 2 === 0 ? 'right-8' : 'left-8'
              }`} />
              
              {/* Connection line to center */}
              <div className={`absolute top-1/2 w-12 h-px bg-gradient-to-r from-primary/60 to-primary transform -translate-y-1/2 ${
                index % 2 === 0 ? '-right-12' : '-left-12'
              }`} />
              
              {/* Floating badge with duration */}
              <div className={`absolute -top-4 px-4 py-2 bg-primary/90 backdrop-blur-sm rounded-full border border-primary/30 ${
                index % 2 === 0 ? 'right-4' : 'left-4'
              }`}>
                <span className="text-xs font-semibold text-primary-foreground font-mono">
                  {item.duration}
                </span>
              </div>

              <div className="space-y-4 pt-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-lg font-semibold text-accent">{item.company}</p>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                {/* Decorative elements */}
                <div className="flex items-center space-x-2 pt-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <div className="w-1 h-1 bg-primary/60 rounded-full animate-pulse delay-100" />
                  <div className="w-1 h-1 bg-primary/30 rounded-full animate-pulse delay-200" />
                </div>
              </div>
            </div>
          </div>

          {/* Central connection point */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
              viewport={{ once: true }}
              className="w-6 h-6 bg-primary rounded-full border-4 border-background shadow-glow-cyber relative z-10"
            >
              {/* Ripple effect */}
              <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75" />
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};