import { useState } from "react";
import { Link } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const plans = [
  { name: "Starter", description: "For small businesses", monthlyPrice: 999, yearlyPrice: 799, features: ["Up to 100 invoices/month", "5 users included", "Basic templates", "GST calculation", "Email support", "Mobile app"], cta: "Start Free Trial", popular: false },
  { name: "Growth", description: "For growing SMEs", monthlyPrice: 2499, yearlyPrice: 1999, features: ["Unlimited invoices", "15 users included", "Custom templates", "Multi-currency", "AI automation", "Payment gateways", "Priority support", "API access"], cta: "Start Free Trial", popular: true },
  { name: "Enterprise", description: "For large organizations", monthlyPrice: null, yearlyPrice: null, features: ["Everything in Growth", "Unlimited users", "White-label branding", "Dedicated manager", "Custom integrations", "SLA guarantee", "On-premise option", "24/7 phone support"], cta: "Contact Sales", popular: false },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <PageLayout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent" />
        <div className="container mx-auto px-4 py-20 md:py-28 relative">
          <SectionHeader badge="Pricing" title="Simple, Transparent Pricing" description="Choose the plan that fits your business. All plans include a 14-day free trial." />

          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-medium ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}>Monthly</span>
            <button onClick={() => setIsYearly(!isYearly)} className={`relative w-14 h-7 rounded-full transition-colors ${isYearly ? "bg-primary" : "bg-muted"}`}>
              <span className={`absolute top-1 w-5 h-5 bg-primary-foreground rounded-full shadow-sm transition-transform ${isYearly ? "translate-x-8" : "translate-x-1"}`} />
            </button>
            <span className={`text-sm font-medium ${isYearly ? "text-foreground" : "text-muted-foreground"}`}>Yearly <span className="ml-2 text-xs text-accent font-semibold">Save 20%</span></span>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {plans.map((plan, i) => (
              <div key={plan.name} className={`relative glass-card rounded-2xl p-8 animate-fade-up ${plan.popular ? "border-primary/50 ring-2 ring-primary/20" : ""}`} style={{ animationDelay: `${i * 0.1}s` }}>
                {plan.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2"><span className="inline-flex items-center gap-1 px-4 py-1 rounded-full text-xs font-semibold bg-gradient-hero text-primary-foreground"><Sparkles className="w-3 h-3" />Most Popular</span></div>}
                <div className="mb-6"><h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3><p className="text-sm text-muted-foreground">{plan.description}</p></div>
                <div className="mb-6">{plan.monthlyPrice ? <><span className="text-4xl font-bold text-foreground">₹{isYearly ? plan.yearlyPrice : plan.monthlyPrice}</span><span className="text-muted-foreground">/mo</span></> : <span className="text-3xl font-bold text-foreground">Custom</span>}</div>
                <ul className="space-y-3 mb-8">{plan.features.map((f) => <li key={f} className="flex items-start gap-3"><Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" /><span className="text-sm text-muted-foreground">{f}</span></li>)}</ul>
                <Link to="/contact"><Button variant={plan.popular ? "default" : "outline"} className={`w-full ${plan.popular ? "bg-gradient-hero text-primary-foreground" : ""}`} size="lg">{plan.cta}</Button></Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}