import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CareerSectionProps {
  children: ReactNode;
  id: string;
  className?: string;
}

export const CareerSection = ({ children, id, className = "" }: CareerSectionProps) => {
  return (
    <motion.section
      id={id}
      className={`min-h-screen flex items-center px-6 py-12 ${className}`}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto max-w-full w-full">
        {children}
      </div>
    </motion.section>
  );
};