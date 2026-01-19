interface InvestmentCardProps {
  name: string;
  stage: string;
  description: string;
  logo?: string;
}

const InvestmentCard = ({ name, stage, description, logo }: InvestmentCardProps) => {
  return (
    <div className="group relative bg-card rounded-xl p-5 border border-border hover:border-gold/30 transition-all duration-300">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10 flex items-start gap-4">
        {logo ? (
          <div className="w-12 h-12 rounded-lg bg-foreground/90 flex items-center justify-center flex-shrink-0 overflow-hidden p-1.5">
            <img src={logo} alt={`${name} logo`} className="w-full h-full object-contain" />
          </div>
        ) : (
          <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
            <span className="text-gold font-display text-lg font-bold">{name.charAt(0)}</span>
          </div>
        )}
        <div className="flex-1">
          <h4 className="font-display text-lg text-foreground mb-1">
            {name}
          </h4>
          <span className="inline-block px-2 py-0.5 text-xs font-body font-medium rounded bg-gold/10 text-gold mb-2">
            {stage}
          </span>
          <p className="text-muted-foreground text-sm font-body">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvestmentCard;
