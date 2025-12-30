import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { BarChart3, TrendingUp, ShoppingBag, Users, Clock, Calendar, Sparkles } from "lucide-react";

const reportTypes = [
  { icon: BarChart3, title: "Income & Expense", description: "Track all money in and out with visual charts." },
  { icon: TrendingUp, title: "Revenue Forecasting", description: "AI-powered predictions for future revenue." },
  { icon: ShoppingBag, title: "Best-selling Products", description: "Identify your top performers and trends." },
  { icon: Users, title: "Buying Patterns", description: "Understand what customers buy and when." },
  { icon: Clock, title: "Aging Reports", description: "Track overdue invoices and tax liabilities." },
  { icon: Calendar, title: "Period Comparisons", description: "Compare performance across time periods." },
];

export default function Reports() {
  return (
    <PageLayout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent" />
        <div className="container mx-auto px-4 py-20 md:py-28 relative">
          <SectionHeader badge="Reports & AI" title="Data-Driven Business Insights" description="Make smarter decisions with comprehensive reports and AI-powered analytics." />
        </div>
      </section>

      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {reportTypes.map((r, i) => (
              <div key={r.title} className="glass-card rounded-2xl p-6 hover-lift animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4"><r.icon className="w-6 h-6 text-primary" /></div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{r.title}</h3>
                <p className="text-muted-foreground text-sm">{r.description}</p>
              </div>
            ))}
          </div>
          <div className="max-w-5xl mx-auto glass-card-elevated rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-muted/50 rounded-xl p-4"><p className="text-xs text-muted-foreground mb-1">Monthly Revenue</p><p className="text-2xl font-bold text-foreground">₹8.2L</p><p className="text-xs text-accent">+15%</p></div>
              <div className="bg-muted/50 rounded-xl p-4"><p className="text-xs text-muted-foreground mb-1">Expenses</p><p className="text-2xl font-bold text-foreground">₹3.1L</p><p className="text-xs text-muted-foreground">-5%</p></div>
              <div className="bg-muted/50 rounded-xl p-4"><p className="text-xs text-muted-foreground mb-1">Net Profit</p><p className="text-2xl font-bold text-foreground">₹5.1L</p><p className="text-xs text-accent">+28%</p></div>
              <div className="bg-muted/50 rounded-xl p-4"><p className="text-xs text-muted-foreground mb-1">AI Forecast</p><p className="text-2xl font-bold text-primary">₹9.5L</p><p className="text-xs text-muted-foreground">Next month</p></div>
            </div>
            <div className="bg-muted/30 rounded-xl p-6 flex items-end justify-between gap-2 h-40">
              {[40, 65, 45, 80, 55, 75, 90, 60, 85, 70, 95, 80].map((h, i) => <div key={i} className="flex-1 bg-gradient-to-t from-primary/60 to-primary/20 rounded-t-sm" style={{ height: `${h}%` }} />)}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}