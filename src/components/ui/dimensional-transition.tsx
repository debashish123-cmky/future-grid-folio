import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import WarpDriveShader from './warp-drive-shader';

interface DimensionalTransitionProps {
  isActive: boolean;
  onTransitionComplete: () => void;
}

export const DimensionalTransition = ({ isActive, onTransitionComplete }: DimensionalTransitionProps) => {
  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        onTransitionComplete();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isActive, onTransitionComplete]);


  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          className="fixed inset-0 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <WarpDriveShader />
          
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-foreground font-mono tracking-wider text-center px-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
            >
              Welcome to my Digital World
            </motion.h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};