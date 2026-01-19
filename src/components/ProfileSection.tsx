import { ReactNode } from "react";

interface ProfileSectionProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

const ProfileSection = ({ title, icon, children, className = "" }: ProfileSectionProps) => {
  return (
    <section className={`py-16 px-6 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          {icon && (
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-gold">
              {icon}
            </div>
          )}
          <h2 className="font-display text-2xl md:text-3xl text-foreground">
            {title}
          </h2>
        </div>
        <div className="border-l-2 border-gold/20 pl-8 ml-5">
          {children}
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
