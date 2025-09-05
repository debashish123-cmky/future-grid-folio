import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface DimensionalTransitionProps {
  isActive: boolean;
  onComplete: () => void;
}

export const DimensionalTransition = ({ isActive, onComplete }: DimensionalTransitionProps) => {
  const [stage, setStage] = useState<'idle' | 'opening' | 'traveling' | 'closing'>('idle');

  useEffect(() => {
    if (isActive) {
      setStage('opening');
      
      const timer1 = setTimeout(() => setStage('traveling'), 500);
      const timer2 = setTimeout(() => setStage('closing'), 1500);
      const timer3 = setTimeout(() => {
        setStage('idle');
        onComplete();
      }, 2000);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [isActive, onComplete]);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Dimensional portal effect */}
          <motion.div
            className="relative w-96 h-96"
            initial={{ scale: 0, rotate: 0 }}
            animate={{
              scale: stage === 'opening' ? [0, 1.2, 1] : stage === 'traveling' ? 1 : [1, 0],
              rotate: stage === 'traveling' ? 360 : 0,
            }}
            transition={{
              scale: { duration: stage === 'opening' ? 0.5 : 0.3 },
              rotate: { duration: 1, ease: "linear" }
            }}
          >
            {/* Outer ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-primary/60"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Middle ring */}
            <motion.div
              className="absolute inset-4 rounded-full border-2 border-secondary/40"
              animate={{
                scale: [1, 0.9, 1],
                rotate: -360,
              }}
              transition={{
                scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 3, repeat: Infinity, ease: "linear" }
              }}
            />
            
            {/* Inner portal */}
            <motion.div
              className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/20 via-secondary/30 to-primary/20 backdrop-blur-sm"
              animate={{
                scale: stage === 'traveling' ? [1, 0.8, 1] : 1,
              }}
              transition={{
                duration: 0.5,
                repeat: stage === 'traveling' ? Infinity : 0,
                ease: "easeInOut"
              }}
            />
            
            {/* Center particle effect */}
            <motion.div
              className="absolute inset-1/2 w-2 h-2 -ml-1 -mt-1 bg-primary rounded-full"
              animate={{
                scale: [1, 3, 1],
                opacity: [1, 0, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          
          {/* Status text */}
          <motion.div
            className="absolute bottom-1/4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.p
              className="text-white font-mono text-lg tracking-wider"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {stage === 'opening' && 'Opening dimensional portal...'}
              {stage === 'traveling' && 'Traveling through dimensions...'}
              {stage === 'closing' && 'Arriving at destination...'}
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};