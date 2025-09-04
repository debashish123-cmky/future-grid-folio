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
      
      {/* Simple Content Layer */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 space-y-8">
        {/* Simple Binary Text */}
        <h1 className="text-2xl md:text-4xl font-mono cyber-text neon-glow tracking-wider">
          01110111011001010110110101100101
        </h1>
        
        {/* Simple Button */}
        <button className="bg-card w-[320px] h-[120px] cursor-pointer relative shadow-2xl rounded-full border border-primary/20 hover:border-primary/40 transition-all duration-300">
          <div className="relative flex justify-center w-full text-center h-full items-center rounded-full bg-background">
            <span className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-foreground via-muted-foreground to-foreground">
              Connect
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Index;
