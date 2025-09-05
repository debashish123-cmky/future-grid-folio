import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Career = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      className="min-h-screen bg-background relative overflow-hidden"
      initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.23, 1, 0.32, 1],
        rotateY: { duration: 1 }
      }}
    >
      {/* Dimensional grid background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent)] animate-pulse" />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-12">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Button>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Career Journey
          </h1>
          
          <div className="space-y-8">
            <motion.div 
              className="bg-card p-6 rounded-lg border border-border/50 backdrop-blur-sm"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Professional Experience</h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to my career dimension! This is where I showcase my professional journey,
                achievements, and the path that brought me to where I am today.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-card p-6 rounded-lg border border-border/50 backdrop-blur-sm"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Skills & Expertise</h2>
              <p className="text-muted-foreground leading-relaxed">
                Explore the technical skills and expertise I've developed throughout my career.
                From cutting-edge technologies to timeless principles of software development.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Career;