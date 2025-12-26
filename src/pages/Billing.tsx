import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ArrowRight, FileText, Send, CreditCard, RefreshCw, Mail, MessageSquare, CheckCircle } from "lucide-react";

const workflow = [
  { icon: FileText, title: "Create Invoice", description: "Design with templates or from scratch" },
  { icon: Send, title: "Send", description: "Email, WhatsApp, or download PDF" },
  { icon: CreditCard, title: "Pay", description: "Multiple payment options for clients" },
  { icon: RefreshCw, title: "Auto Reconcile", description: "Payments matched automatically" },
];

const features = [
  {
    title: "Estimates & Quotes",
    description: "Create professional estimates and convert them to invoices with one click.",
    icon: FileText,
  },
  {
    title: "Auto Payment Reconciliation",
    description: "Bank feeds automatically matched with invoices. Zero manual work.",
    icon: CheckCircle,
  },
  {
    title: "Email Reminders",
    description: "Automated payment reminders sent at the perfect time.",
    icon: Mail,
  },
  {
    title: "SMS & WhatsApp",
    description: "Multi-channel notifications to reach customers where they are.",
    icon: MessageSquare,
  },
];

export default function Billing() {
  return (
    <PageLayout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Billing & Invoicing"
            title="From Invoice to Payment in Minutes"
            description="Streamlined workflows that get you paid faster with less effort."
          />

          {/* Workflow */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {workflow.map((step, index) => (
                <div key={step.title} className="flex items-center gap-4">
                  <div className="text-center animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-3 mx-auto">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                  {index < workflow.length - 1 && (
                    <ArrowRight className="hidden md:block w-6 h-6 text-muted-foreground/50 flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="glass-card rounded-xl p-6 hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Demo Invoice Mock */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Sample Invoice Preview
            </h3>
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center mb-2">
                    <span className="text-primary-foreground font-bold text-sm">Z</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Zenelait Infotech</p>
                </div>
                <div className="text-right">
                  <h4 className="text-xl font-bold text-foreground">INVOICE</h4>
                  <p className="text-sm text-muted-foreground">#INV-2024-0042</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Bill To</p>
                  <p className="font-medium text-foreground">Acme Corporation</p>
                  <p className="text-sm text-muted-foreground">123 Business Street</p>
                </div>
                <div className="md:text-right">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Due Date</p>
                  <p className="font-medium text-foreground">January 15, 2024</p>
                </div>
              </div>

              <table className="w-full mb-8">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 text-sm text-muted-foreground font-medium">Item</th>
                    <th className="text-right py-3 text-sm text-muted-foreground font-medium">Qty</th>
                    <th className="text-right py-3 text-sm text-muted-foreground font-medium">Rate</th>
                    <th className="text-right py-3 text-sm text-muted-foreground font-medium">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 text-foreground">Software License</td>
                    <td className="py-3 text-right text-muted-foreground">1</td>
                    <td className="py-3 text-right text-muted-foreground">₹45,000</td>
                    <td className="py-3 text-right font-medium text-foreground">₹45,000</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 text-foreground">Implementation</td>
                    <td className="py-3 text-right text-muted-foreground">10 hrs</td>
                    <td className="py-3 text-right text-muted-foreground">₹2,000</td>
                    <td className="py-3 text-right font-medium text-foreground">₹20,000</td>
                  </tr>
                </tbody>
              </table>

              <div className="flex justify-end">
                <div className="w-48">
                  <div className="flex justify-between py-2 text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground">₹65,000</span>
                  </div>
                  <div className="flex justify-between py-2 text-sm">
                    <span className="text-muted-foreground">GST (18%)</span>
                    <span className="text-foreground">₹11,700</span>
                  </div>
                  <div className="flex justify-between py-2 border-t border-border mt-2">
                    <span className="font-semibold text-foreground">Total</span>
                    <span className="font-bold text-primary text-lg">₹76,700</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
