import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  children?: ReactNode;
  variant?: "default" | "accent";
}

export function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  className = "", 
  children,
  variant = "default"
}: FeatureCardProps) {
  const iconBg = variant === "accent" ? "bg-accent/10" : "bg-primary/10";
  const iconColor = variant === "accent" ? "text-accent" : "text-primary";
  const hoverIconBg = variant === "accent" ? "group-hover:bg-accent/15" : "group-hover:bg-primary/15";

  return (
    <div className={`glass-card rounded-2xl p-6 hover-lift group h-full ${className}`}>
      <div className={`w-12 h-12 rounded-xl ${iconBg} ${hoverIconBg} flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-105`}>
        <Icon className={`w-6 h-6 ${iconColor}`} />
      </div>
      <h3 className="font-semibold text-lg text-foreground mb-2 leading-snug">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      {children}
    </div>
  );
}