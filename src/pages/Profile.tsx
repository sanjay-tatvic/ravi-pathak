import { GraduationCap, Building2, TrendingUp, Heart, Linkedin, Twitter, Mail, Award, Home } from "lucide-react";
import { Link } from "react-router-dom";
import ProfileHero from "@/components/ProfileHero";
import ProfileSection from "@/components/ProfileSection";
import CompanyCard from "@/components/CompanyCard";
import InvestmentCard from "@/components/InvestmentCard";
import SectorBadge from "@/components/SectorBadge";

import optimizedElectrotechLogo from "@/assets/optimized-electrotech-logo.png";
import unboxRoboticsLogo from "@/assets/unbox-robotics-logo.png";
import redwingLabsLogo from "@/assets/redwing-labs-logo.png";
import devxLogo from "@/assets/devx-logo.png";
import converiosLogo from "@/assets/converios-logo.png";

const Profile = () => {
  const investmentSectors = ["High Tech", "Aerospace", "Maritime", "Defense Tech"];

  const investments = [
    {
      name: "Optimized Electrotech",
      stage: "Seed Round",
      description: "A defense technology company pioneering advanced electro-optic surveillance systems for military and aerospace applications.",
      logo: optimizedElectrotechLogo,
    },
    {
      name: "Unbox Robotics",
      stage: "Series A",
      description: "Building AI-powered swarm robotics systems for automated parcel sortation and order consolidation in logistics.",
      logo: unboxRoboticsLogo,
    },
    {
      name: "Redwing Labs",
      stage: "Seed Round",
      description: "India's first agri-drone company with smart battery technology, revolutionizing modern farming through precision agriculture.",
      logo: redwingLabsLogo,
    },
    {
      name: "DevX",
      stage: "Growth",
      description: "Premium managed offices and coworking spaces fostering productivity and collaboration for enterprises across India.",
      logo: devxLogo,
    },
    {
      name: "Converios.io",
      stage: "Seed Round",
      description: "A next-generation data analytics and conversion optimization platform helping businesses maximize their digital performance through intelligent insights.",
      logo: converiosLogo,
    },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <Link to="/" className="absolute top-6 right-6 text-muted-foreground hover:text-gold transition-colors z-10" aria-label="Back to Home">
        <Home className="w-6 h-6" />
        <span className="sr-only">Back to Home</span>
      </Link>

      {/* Hero Section */}
      <ProfileHero />

      {/* Education Section */}
      <ProfileSection title="Education" icon={<GraduationCap className="w-5 h-5" />}>
        <div className="space-y-4">
          <div className="bg-card rounded-xl p-6 border border-border">
            <h3 className="font-display text-xl text-foreground mb-2">
              BK School of Management
            </h3>
            <p className="text-gold font-body text-sm font-medium mb-3">
              Master of Business Administration (MBA)
            </p>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              Advanced business education focused on strategic management and leadership, preparing for entrepreneurial ventures in the technology sector.
            </p>
          </div>
          
          <div className="bg-card rounded-xl p-6 border border-border">
            <h3 className="font-display text-xl text-foreground mb-2">
              LD College of Engineering
            </h3>
            <p className="text-gold font-body text-sm font-medium mb-3">
              Bachelor of Technology (B.Tech)
            </p>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              Strong technical foundation that laid the groundwork for 16+ years of excellence in Data & Marketing Analytics.
            </p>
          </div>
        </div>
      </ProfileSection>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Companies Section */}
      <ProfileSection title="Companies" icon={<Building2 className="w-5 h-5" />}>
        <CompanyCard
          name="Tatvic Analytics"
          role="Founder & Chair Person"
          description="A leading full-stack Mar-tech company and Premier Partner for Google Cloud and Google AI. Under Ravi's leadership, Tatvic has grown from a small team to a global entity, delivering cutting-edge data and marketing analytics solutions to enterprises worldwide."
          focus={["Data & Marketing Analytics", "Cloud for Marketing", "Conversion Rate Optimization"]}
          locations={["India", "Singapore", "Dubai", "North America"]}
        />
      </ProfileSection>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Investments Section */}
      <ProfileSection title="Investments" icon={<TrendingUp className="w-5 h-5" />}>
        <div className="space-y-6">
          <div>
            <p className="text-cream-muted font-body mb-6 leading-relaxed">
              As an <span className="text-gold font-medium">Angel Investor</span>, Ravi focuses on high-impact sectors that shape the future of technology and defense.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {investmentSectors.map((sector) => (
                <SectorBadge key={sector} name={sector} />
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-body text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Portfolio Companies
            </h4>
            <div className="grid gap-4">
              {investments.map((investment) => (
                <InvestmentCard
                  key={investment.name}
                  name={investment.name}
                  stage={investment.stage}
                  description={investment.description}
                  logo={investment.logo}
                />
              ))}
            </div>
          </div>
        </div>
      </ProfileSection>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Awards & Affiliations Section */}
      <ProfileSection title="Awards & Affiliations" icon={<Award className="w-5 h-5" />}>
        <div className="space-y-6">
          <div>
            <h4 className="font-body text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Awards & Speaking
            </h4>
            <div className="space-y-3">
              <div className="bg-card rounded-xl p-5 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-foreground mb-1">Data Analyst Leader</h4>
                    <p className="text-gold font-body text-sm font-medium mb-2">Superweek Hungary, 2015</p>
                    <p className="text-muted-foreground font-body text-sm">Recognized for excellence and leadership in data analytics at the premier European analytics conference.</p>
                  </div>
                </div>
              </div>
              <div className="bg-card rounded-xl p-5 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-foreground mb-1">Speaker</h4>
                    <p className="text-gold font-body text-sm font-medium mb-2">Russian Internet Federation, 2014</p>
                    <p className="text-muted-foreground font-body text-sm">Invited speaker sharing expertise on digital analytics and marketing technology strategies.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-body text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Affiliations
            </h4>
            <div className="bg-card rounded-xl p-5 border border-border">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <span className="text-gold font-display text-lg font-bold">♞</span>
                </div>
                <div>
                  <h4 className="font-display text-lg text-foreground">Singapore Chess Federation</h4>
                  <p className="text-muted-foreground font-body text-sm">Active member promoting the game of chess in Singapore.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ProfileSection>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Origins & Family Section */}
      <ProfileSection title="Origins & Family" icon={<Heart className="w-5 h-5" />}>
        <div className="bg-card rounded-xl p-6 border border-border">
          <p className="text-cream-muted font-body leading-relaxed mb-4">
            Originally from a <span className="text-gold">Nagar Brahmin family</span> belonging to <span className="text-gold">Bhavnagar, Gujarat</span>, that is heavily focused on educators across the family tree, Ravi brings a natural entrepreneurial spirit.
          </p>
          <p className="text-muted-foreground font-body text-sm leading-relaxed">
            This unique blend of academic heritage and innate drive for innovation has shaped his approach as both a founder and investor—combining intellectual rigor with bold entrepreneurial vision.
          </p>
        </div>
      </ProfileSection>
      <footer className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <a
              href="https://www.linkedin.com/in/ravipathak"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/30 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/ravipathak"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/30 transition-all duration-200"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="mailto:ravi@tatvic.com"
              className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/30 transition-all duration-200"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
          <p className="text-muted-foreground font-body text-sm">
            © {new Date().getFullYear()} Ravi Pathak. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Profile;
