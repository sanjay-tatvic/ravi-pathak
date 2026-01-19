import { Building2, ExternalLink } from "lucide-react";

interface CompanyCardProps {
  name: string;
  role: string;
  description: string;
  focus: string[];
  locations?: string[];
}

const CompanyCard = ({ name, role, description, focus, locations }: CompanyCardProps) => {
  return (
    <div className="group relative bg-card rounded-xl p-6 md:p-8 border border-border hover:border-gold/30 transition-all duration-300">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
              <Building2 className="w-6 h-6 text-gold" />
            </div>
            <div>
              <h3 className="font-display text-xl md:text-2xl text-foreground">
                {name}
              </h3>
              <p className="text-gold font-body text-sm font-medium">
                {role}
              </p>
            </div>
          </div>
          <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        <p className="text-cream-muted font-body leading-relaxed mb-6">
          {description}
        </p>

        {locations && locations.length > 0 && (
          <p className="text-muted-foreground text-sm mb-4">
            <span className="text-gold">Offices:</span> {locations.join(" • ")}
          </p>
        )}

        <div className="flex flex-wrap gap-2">
          {focus.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-body font-medium rounded-full bg-secondary text-cream-muted border border-border"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
