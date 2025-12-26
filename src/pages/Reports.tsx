import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { BarChart3, PieChart, TrendingUp, ShoppingBag, Users, Clock, Sparkles, Calendar } from "lucide-react";

const reportTypes = [
  { icon: BarChart3, title: "Income & Expense Overview", description: "Track all money in and out with visual charts." },
  { icon: TrendingUp, title: "Revenue Forecasting", description: "AI-powered predictions for future revenue." },
  { icon: ShoppingBag, title: "Best-selling Products", description: "Identify your top performers and trends." },
  { icon: Users, title: "Customer Buying Patterns", description: "Understand what customers buy and when." },
  { icon: Clock, title: "Aging & Tax Reports", description: "Track overdue invoices and tax liabilities." },
  { icon: Calendar, title: "Period Comparisons", description: "Compare performance across time periods." },
];

const aiInsights = [
  { icon: TrendingUp, title: "AI Sales Trend Prediction", description: "Machine learning models predict sales patterns." },
  { icon: Sparkles, title: "Optimal Invoice Cycle", description: "AI suggests the best time to send invoices." },
];

export default function Reports() {
  return (
    <PageLayout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Reports & AI"
            title="Data-Driven Business Insights"
            description="Make smarter decisions with comprehensive reports and AI-powered analytics."
          />

          {/* Reports Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {reportTypes.map((report, index) => (
              <div
                key={report.title}
                className="glass-card rounded-xl p-6 hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <report.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{report.title}</h3>
                <p className="text-muted-foreground text-sm">{report.description}</p>
              </div>
            ))}
          </div>

          {/* AI Insights Section */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">AI Insights</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {aiInsights.map((insight, index) => (
                <div
                  key={insight.title}
                  className="glass-card rounded-xl p-6 border-accent/20 hover-lift animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <insight.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{insight.title}</h3>
                  <p className="text-muted-foreground text-sm">{insight.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard Mock */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Dashboard Preview</h3>
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-muted/50 rounded-xl p-4">
                  <p className="text-xs text-muted-foreground mb-1">Monthly Revenue</p>
                  <p className="text-2xl font-bold text-foreground">₹8.2L</p>
                  <p className="text-xs text-accent">+15% vs last month</p>
                </div>
                <div className="bg-muted/50 rounded-xl p-4">
                  <p className="text-xs text-muted-foreground mb-1">Expenses</p>
                  <p className="text-2xl font-bold text-foreground">₹3.1L</p>
                  <p className="text-xs text-muted-foreground">-5% vs last month</p>
                </div>
                <div className="bg-muted/50 rounded-xl p-4">
                  <p className="text-xs text-muted-foreground mb-1">Net Profit</p>
                  <p className="text-2xl font-bold text-foreground">₹5.1L</p>
                  <p className="text-xs text-accent">+28% margin</p>
                </div>
                <div className="bg-muted/50 rounded-xl p-4">
                  <p className="text-xs text-muted-foreground mb-1">AI Prediction</p>
                  <p className="text-2xl font-bold text-primary">₹9.5L</p>
                  <p className="text-xs text-muted-foreground">Next month forecast</p>
                </div>
              </div>

              {/* Chart Placeholder */}
              <div className="bg-muted/30 rounded-xl p-6 flex items-center justify-center min-h-[200px]">
                <div className="text-center">
                  <BarChart3 className="w-12 h-12 text-muted-foreground/50 mx-auto mb-3" />
                  <p className="text-muted-foreground">Revenue Trend Chart</p>
                  <p className="text-sm text-muted-foreground/70">Interactive charts in live dashboard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
