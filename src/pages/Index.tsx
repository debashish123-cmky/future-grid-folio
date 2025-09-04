import { Squares } from "@/components/ui/squares-background";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Squares Background */}
      <div className="absolute inset-0 z-0">
        <Squares 
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="#333" 
          hoverFillColor="#222"
        />
      </div>
      
      {/* Content Layer */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 cyber-text neon-glow">
            PORTFOLIO
          </h1>
          <div className="w-32 h-1 bg-gradient-cyber mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light tracking-wide">
            Professional • Futuristic • Interactive
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-cyber text-background font-semibold rounded-lg hover:shadow-cyber transition-all duration-300 transform hover:scale-105">
              VIEW PROJECTS
            </button>
            <button className="px-8 py-4 border border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-background transition-all duration-300 transform hover:scale-105">
              CONTACT ME
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-cyber-cyan rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-32 w-3 h-3 bg-cyber-purple rounded-full animate-pulse delay-300"></div>
      <div className="absolute bottom-32 left-16 w-2 h-2 bg-cyber-pink rounded-full animate-pulse delay-700"></div>
    </div>
  );
};

export default Index;
