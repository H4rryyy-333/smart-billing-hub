import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  children?: ReactNode;
}

export function FeatureCard({ icon: Icon, title, description, className = "", children }: FeatureCardProps) {
  return (
    <div className={`glass-card rounded-xl p-6 hover-lift group ${className}`}>
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="font-semibold text-lg text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      {children}
    </div>
  );
}
