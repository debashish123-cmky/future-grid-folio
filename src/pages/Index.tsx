import { Squares } from "@/components/ui/squares-background";
import { PulseBeams } from "@/components/ui/pulse-beams";
import { TypingAnimation } from "@/components/ui/typing-animation";

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
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 space-y-8">
        {/* Typing Animation with Binary Text */}
        <TypingAnimation
          text="01110111011001010110110101100101"
          duration={150}
          className="text-2xl md:text-4xl font-mono cyber-text neon-glow tracking-wider"
        />
        
        {/* Pulse Beams Button */}
        <PulseBeams className="h-auto">
          <button className="bg-card w-[320px] z-40 h-[120px] no-underline group cursor-pointer relative shadow-2xl rounded-full p-px text-xs font-semibold leading-6 text-foreground inline-block border border-primary/20 hover:border-primary/40 transition-all duration-300">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex justify-center w-[320px] text-center space-x-2 h-[120px] items-center z-10 rounded-full bg-background py-0.5 px-4 ring-1 ring-primary/10">
              <span className="md:text-4xl text-base inline-block bg-clip-text text-transparent bg-gradient-to-r from-foreground via-muted-foreground to-foreground">
                Connect
              </span>
            </div>
          </button>
        </PulseBeams>
      </div>
    </div>
  );
};

export default Index;
