import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Home = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 z-0">
         
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[500px] w-[500px] rounded-full bg-gold/20 opacity-30 blur-[120px] animate-pulse"></div>

      {/* Content */}
      <div
        className={cn(
          "absolute inset-0 z-0 bg-dot-slate-700/[0.5] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"
        )}
      ></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center p-6 bg-background/50 backdrop-blur-sm rounded-xl border border-border/20">
        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6">
          Welcome to Tycho Ventures
        </h1>
        <p className="text-cream-muted font-body text-lg leading-relaxed mb-4">
          Tycho Ventures is an angel investment firm supporting early-stage startups in technology, defense, and innovation-led sectors.
        </p>
        <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
          We invest in bold ideas, strong founders, and scalable businesses shaping tomorrow’s world.
        </p>
        <Button asChild size="lg" className="bg-gold text-background hover:bg-gold/90">
          <Link to="/ravi-pathak">View Profile <ArrowRight className="w-4 h-4 ml-2" /></Link>
        </Button>
      </div>
    </div>
  );
};

export default Home;
