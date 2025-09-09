import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';

interface CertificateItem {
  image: string;
  text: string;
  skills: string[];
  organization: string;
  issueDate: string;
  credentialId: string;
  onClick: () => void;
}

interface CertificateGalleryProps {
  certificates: CertificateItem[];
  className?: string;
}

export const CertificateGallery = ({ certificates, className = '' }: CertificateGalleryProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };

    const handleMouseEnter = () => {
      setIsScrolling(true);
      // Stop page scroll when mouse enters certificate gallery
      document.body.style.overflow = 'hidden';
    };

    const handleMouseLeave = () => {
      setIsScrolling(false);
      // Restore page scroll when mouse leaves certificate gallery
      document.body.style.overflow = 'auto';
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className={`relative ${className}`}>
      {/* Scroll indicator */}
      <div className="absolute top-4 right-4 z-20 flex items-center space-x-2 text-primary/60 text-sm">
        <span>Scroll horizontally →</span>
      </div>

      <div
        ref={containerRef}
        className="flex space-x-6 overflow-x-auto overflow-y-hidden pb-4 px-4 scrollbar-hide cursor-grab active:cursor-grabbing"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.credentialId}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-80 group"
          >
            <div className="backdrop-blur-md bg-card/20 border border-border/30 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              {/* Certificate Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.text}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Action button */}
                <button
                  onClick={cert.onClick}
                  className="absolute top-3 right-3 p-2 bg-primary/90 backdrop-blur-sm rounded-full hover:bg-primary transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-primary-foreground" />
                </button>

                {/* Issue date badge */}
                <div className="absolute bottom-3 left-3 px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full">
                  <span className="text-xs font-semibold text-foreground">{cert.issueDate}</span>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="p-6 space-y-4">
                {/* Organization Logo Area */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg leading-tight">
                      {cert.text}
                    </h3>
                    <p className="text-sm font-medium text-primary">
                      {cert.organization}
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    Skills Covered
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 text-xs bg-accent/10 text-accent rounded-md border border-accent/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Credential ID */}
                <div className="pt-2 border-t border-border/30">
                  <p className="text-xs text-muted-foreground">
                    ID: <span className="font-mono">{cert.credentialId}</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `
      }} />
    </div>
  );
};