interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({ 
  badge, 
  title, 
  description, 
  centered = true,
  className = ""
}: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-14 lg:mb-16 ${className}`}>
      {badge && (
        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-primary/10 text-primary mb-5 animate-fade-up">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 leading-tight text-balance animate-fade-up" style={{ animationDelay: "0.1s" }}>
        {title}
      </h2>
      {description && (
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
          {description}
        </p>
      )}
    </div>
  );
}