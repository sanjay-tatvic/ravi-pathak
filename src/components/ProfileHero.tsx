import { MapPin } from "lucide-react";
import raviHeadshot from "@/assets/ravi-pathak-headshot.jpg";

const ProfileHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center py-20 px-6 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gold blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-gold blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Photo */}
        <div className="mb-10 opacity-0 animate-fade-up">
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-br from-gold to-gold-muted rounded-full opacity-30 blur-sm" />
            <img
              src={raviHeadshot}
              alt="Ravi Pathak"
              className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-2 border-gold/30 glow-gold"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="font-display text-5xl md:text-7xl font-semibold mb-4 opacity-0 animate-fade-up animate-delay-100">
          <span className="text-gradient-gold">Ravi Pathak</span>
        </h1>

        {/* Title */}
        <p className="font-body text-xl md:text-2xl text-cream-muted mb-6 opacity-0 animate-fade-up animate-delay-200">
          Founder & Angel Investor
        </p>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-muted-foreground opacity-0 animate-fade-up animate-delay-300">
          <MapPin className="w-4 h-4 text-gold" />
          <span className="font-body text-sm tracking-wide uppercase">
            Ahmedabad, India / Singapore
          </span>
        </div>

        {/* Decorative line */}
        <div className="mt-12 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 animate-fade-in animate-delay-400" />
      </div>
    </section>
  );
};

export default ProfileHero;
