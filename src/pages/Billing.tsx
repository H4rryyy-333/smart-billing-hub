import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ArrowRight, FileText, Send, CreditCard, RefreshCw, Mail, MessageSquare, CheckCircle, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const workflow = [
  { icon: FileText, title: "Create", description: "Design with templates or from scratch", color: "bg-primary/10 text-primary" },
  { icon: Send, title: "Send", description: "Email, WhatsApp, or download PDF", color: "bg-accent/10 text-accent" },
  { icon: CreditCard, title: "Pay", description: "Multiple payment options", color: "bg-primary/10 text-primary" },
  { icon: RefreshCw, title: "Reconcile", description: "Automatic matching", color: "bg-accent/10 text-accent" },
];

const features = [
  {
    title: "Estimates & Quotes",
    description: "Create professional estimates and convert them to invoices with one click.",
    icon: FileText,
  },
  {
    title: "Auto Reconciliation",
    description: "Bank feeds automatically matched with invoices. Zero manual work.",
    icon: CheckCircle,
  },
  {
    title: "Email Reminders",
    description: "Automated payment reminders sent at the perfect time.",
    icon: Mail,
  },
  {
    title: "Multi-channel Notifications",
    description: "Reach customers via email, SMS, and WhatsApp.",
    icon: MessageSquare,
  },
];

export default function Billing() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-4 py-20 md:py-28 relative">
          <SectionHeader
            badge="Billing & Invoicing"
            title="From Invoice to Payment in Minutes"
            description="Streamlined workflows that get you paid faster with less effort."
          />
        </div>
      </section>

      {/* Workflow */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {workflow.map((step, index) => (
                <div key={step.title} className="relative animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="glass-card rounded-2xl p-6 text-center h-full">
                    <div className={`w-14 h-14 rounded-xl ${step.color.split(' ')[0]} flex items-center justify-center mb-4 mx-auto`}>
                      <step.icon className={`w-7 h-7 ${step.color.split(' ')[1]}`} />
                    </div>
                    <h4 className="font-bold text-lg text-foreground mb-2">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                  {index < workflow.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                      <ArrowRight className="w-5 h-5 text-muted-foreground/50" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Powerful Billing Features
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to streamline your billing process
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="glass-card rounded-2xl p-6 hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Invoice */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Beautiful Invoice Design
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional invoices that reflect your brand
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="glass-card-elevated rounded-2xl md:rounded-3xl p-6 md:p-8 relative">
              <div className="absolute -inset-1 bg-gradient-hero opacity-10 blur-2xl rounded-3xl" />
              
              <div className="relative">
                {/* Invoice Header */}
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center mb-3">
                      <span className="text-primary-foreground font-bold text-sm">Z</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Zenelait Infotech</p>
                    <p className="text-xs text-muted-foreground">Bengaluru, India</p>
                  </div>
                  <div className="text-right">
                    <h4 className="text-2xl font-bold text-foreground">INVOICE</h4>
                    <p className="text-sm text-muted-foreground">#INV-2024-0042</p>
                    <p className="text-xs text-muted-foreground mt-1">Dec 24, 2024</p>
                  </div>
                </div>

                {/* Bill To */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-muted/30 rounded-xl p-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Bill To</p>
                    <p className="font-semibold text-foreground">Acme Corporation</p>
                    <p className="text-sm text-muted-foreground">123 Business Street</p>
                    <p className="text-sm text-muted-foreground">Mumbai, India</p>
                  </div>
                  <div className="bg-muted/30 rounded-xl p-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Payment Details</p>
                    <p className="text-sm text-muted-foreground">Due Date: <span className="text-foreground font-medium">Jan 15, 2024</span></p>
                    <p className="text-sm text-muted-foreground">Status: <span className="text-accent font-medium">Pending</span></p>
                  </div>
                </div>

                {/* Items Table */}
                <div className="border border-border rounded-xl overflow-hidden mb-6">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="text-left py-3 px-4 text-sm text-muted-foreground font-medium">Item</th>
                        <th className="text-right py-3 px-4 text-sm text-muted-foreground font-medium">Qty</th>
                        <th className="text-right py-3 px-4 text-sm text-muted-foreground font-medium">Rate</th>
                        <th className="text-right py-3 px-4 text-sm text-muted-foreground font-medium">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-border/50">
                        <td className="py-4 px-4 text-foreground">Software License</td>
                        <td className="py-4 px-4 text-right text-muted-foreground">1</td>
                        <td className="py-4 px-4 text-right text-muted-foreground">₹45,000</td>
                        <td className="py-4 px-4 text-right font-medium text-foreground">₹45,000</td>
                      </tr>
                      <tr className="border-t border-border/50">
                        <td className="py-4 px-4 text-foreground">Implementation</td>
                        <td className="py-4 px-4 text-right text-muted-foreground">10 hrs</td>
                        <td className="py-4 px-4 text-right text-muted-foreground">₹2,000</td>
                        <td className="py-4 px-4 text-right font-medium text-foreground">₹20,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Totals */}
                <div className="flex justify-end">
                  <div className="w-64">
                    <div className="flex justify-between py-2 text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="text-foreground">₹65,000</span>
                    </div>
                    <div className="flex justify-between py-2 text-sm">
                      <span className="text-muted-foreground">GST (18%)</span>
                      <span className="text-foreground">₹11,700</span>
                    </div>
                    <div className="flex justify-between py-3 border-t border-border mt-2">
                      <span className="font-semibold text-foreground">Total</span>
                      <span className="font-bold text-primary text-xl">₹76,700</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
            Start Sending Professional Invoices Today
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Join thousands of businesses that trust Zenelait for their billing needs.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-hero text-primary-foreground shadow-lg shadow-primary/25">
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}