interface SectorBadgeProps {
  name: string;
}

const SectorBadge = ({ name }: SectorBadgeProps) => {
  return (
    <div className="px-4 py-2 rounded-lg bg-secondary border border-border text-cream-muted font-body text-sm font-medium hover:border-gold/30 hover:text-gold transition-all duration-200 cursor-default">
      {name}
    </div>
  );
};

export default SectorBadge;
