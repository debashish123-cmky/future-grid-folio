'use client';

import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useSpring, useTransform, SpringOptions } from 'framer-motion';
import { cn } from '@/lib/utils';

type CursorSpotlightProps = {
  className?: string;
  size?: number;
  springOptions?: SpringOptions;
  children?: React.ReactNode;
};

export function CursorSpotlight({
  className,
  size = 300,
  springOptions = { bounce: 0 },
  children
}: CursorSpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useSpring(0, springOptions);
  const mouseY = useSpring(0, springOptions);

  const spotlightLeft = useTransform(mouseX, (x) => `${x - size / 2}px`);
  const spotlightTop = useTransform(mouseY, (y) => `${y - size / 2}px`);

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!containerRef.current) return;
      const { left, top } = containerRef.current.getBoundingClientRect();
      mouseX.set(event.clientX - left);
      mouseY.set(event.clientY - top);
    },
    [mouseX, mouseY]
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', () => setIsHovered(true));
    container.addEventListener('mouseleave', () => setIsHovered(false));

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', () => setIsHovered(true));
      container.removeEventListener('mouseleave', () => setIsHovered(false));
    };
  }, [handleMouseMove]);

  return (
    <div
      ref={containerRef}
      className={cn('relative overflow-hidden', className)}
    >
      <motion.div
        className="pointer-events-none absolute rounded-full bg-[radial-gradient(circle_at_center,hsl(var(--primary))_0%,hsl(var(--primary)/50%)_40%,transparent_80%)] blur-xl transition-opacity duration-300"
        style={{
          width: size,
          height: size,
          left: spotlightLeft,
          top: spotlightTop,
          opacity: isHovered ? 0.6 : 0,
        }}
      />
      {children}
    </div>
  );
}