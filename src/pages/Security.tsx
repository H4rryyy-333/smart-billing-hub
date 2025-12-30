import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { Shield, Lock, Key, FileCheck, Cloud, Link2, CreditCard, Building, FileText, MessageSquare, Mail, Database } from "lucide-react";

const securityFeatures = [
  { icon: Lock, title: "Two-Factor Auth", description: "Extra layer of security with 2FA for all users." },
  { icon: Key, title: "Role-Based Access", description: "Control who sees what with granular permissions." },
  { icon: FileCheck, title: "Audit Logs", description: "Complete history of all actions and changes." },
  { icon: Shield, title: "GDPR Compliance", description: "Built to meet global privacy and data standards." },
  { icon: Cloud, title: "Auto Backups", description: "Daily encrypted backups with instant recovery." },
  { icon: Database, title: "Data Encryption", description: "End-to-end encryption for all sensitive data." },
];

const integrations = [
  { icon: Building, title: "CRM, ERP & LMS", description: "Connect with Salesforce, SAP, Zoho, and more." },
  { icon: CreditCard, title: "Payment Gateways", description: "Razorpay, Stripe, PayPal, PayTM integration." },
  { icon: Link2, title: "Bank Reconciliation", description: "Automatic bank feed matching and reconciliation." },
  { icon: FileText, title: "Tally & QuickBooks", description: "Import/export with popular accounting software." },
  { icon: MessageSquare, title: "WhatsApp Business", description: "Send invoices and reminders via WhatsApp." },
  { icon: Mail, title: "Email & SMS", description: "Automated notifications through multiple channels." },
];

export default function Security() {
  return (
    <PageLayout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent" />
        <div className="container mx-auto px-4 py-20 md:py-28 relative">
          <SectionHeader badge="Security & Integrations" title="Enterprise-Grade Protection" description="Your data is safe with bank-level security and seamless integrations." />
        </div>
      </section>

      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Security Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {securityFeatures.map((f, i) => <div key={f.title} className="animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}><FeatureCard icon={f.icon} title={f.title} description={f.description} /></div>)}
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Integrations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((f, i) => <div key={f.title} className="animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}><FeatureCard icon={f.icon} title={f.title} description={f.description} variant="accent" /></div>)}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}