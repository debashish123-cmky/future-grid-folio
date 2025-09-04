

import React from "react";
import { cn } from "@/lib/utils";

interface PulseBeamsProps {
  children?: React.ReactNode;
  className?: string;
  background?: React.ReactNode;
}

export const PulseBeams = ({
  children,
  className,
  background,
}: PulseBeamsProps) => {
  return (
    <div
      className={cn(
        "w-full h-auto relative flex items-center justify-center antialiased",
        className
      )}
    >
      {background}
      <div className="relative z-10">{children}</div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[858px] h-[434px] relative">
          {/* Simplified animated beams using CSS */}
          <div className="absolute inset-0">
            <svg
              width="858"
              height="434"
              viewBox="0 0 858 434"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              {/* Static beam paths */}
              <path
                d="M269 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5"
                stroke="hsl(var(--border))"
                strokeWidth="1"
              />
              <path
                d="M568 200H841C846.523 200 851 195.523 851 190V40"
                stroke="hsl(var(--border))"
                strokeWidth="1"
              />
              <path
                d="M425.5 274V333C425.5 338.523 421.023 343 415.5 343H152C146.477 343 142 347.477 142 353V426.5"
                stroke="hsl(var(--border))"
                strokeWidth="1"
              />
              <path
                d="M493 274V333.226C493 338.749 497.477 343.226 503 343.226H760C765.523 343.226 770 347.703 770 353.226V427"
                stroke="hsl(var(--border))"
                strokeWidth="1"
              />
              <path
                d="M380 168V17C380 11.4772 384.477 7 390 7H414"
                stroke="hsl(var(--border))"
                strokeWidth="1"
              />
              
              {/* Connection points */}
              <circle cx="6.5" cy="398.5" r="6" fill="hsl(var(--border))" stroke="hsl(var(--muted-foreground))" />
              <circle cx="269" cy="220.5" r="6" fill="hsl(var(--border))" stroke="hsl(var(--muted-foreground))" />
              <circle cx="851" cy="34" r="6.5" fill="hsl(var(--border))" stroke="hsl(var(--muted-foreground))" />
              <circle cx="568" cy="200" r="6" fill="hsl(var(--border))" stroke="hsl(var(--muted-foreground))" />
              <circle cx="142" cy="427" r="6.5" fill="hsl(var(--border))" stroke="hsl(var(--muted-foreground))" />
              <circle cx="425.5" cy="274" r="6" fill="hsl(var(--border))" stroke="hsl(var(--muted-foreground))" />
              <circle cx="770" cy="427" r="6.5" fill="hsl(var(--border))" stroke="hsl(var(--muted-foreground))" />
              <circle cx="493" cy="274" r="6" fill="hsl(var(--border))" stroke="hsl(var(--muted-foreground))" />
              <circle cx="420.5" cy="6.5" r="6" fill="hsl(var(--border))" stroke="hsl(var(--muted-foreground))" />
              <circle cx="380" cy="168" r="6" fill="hsl(var(--border))" stroke="hsl(var(--muted-foreground))" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};