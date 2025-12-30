import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { Users, Layers, History, UserCheck, Package, TrendingDown, AlertTriangle, Barcode } from "lucide-react";

const customerFeatures = [
  { icon: Users, title: "Customer Database", description: "Centralized customer information with contact details, history, and preferences." },
  { icon: Layers, title: "Smart Segmentation", description: "Group customers by type, location, purchase behavior, or custom criteria." },
  { icon: History, title: "Payment History", description: "Track payment patterns, credit limits, and outstanding balances." },
  { icon: UserCheck, title: "Self-Service Portal", description: "Let customers view invoices, make payments, and download receipts." },
];

const inventoryFeatures = [
  { icon: Package, title: "Stock Management", description: "Complete inventory tracking with categories, variants, and pricing." },
  { icon: TrendingDown, title: "Auto Reduction", description: "Stock levels update automatically when invoices are created." },
  { icon: AlertTriangle, title: "Low Stock Alerts", description: "Get notified before you run out of popular items." },
  { icon: Barcode, title: "Barcode Support", description: "Support for barcodes, SKUs, and product variations." },
];

export default function Customers() {
  return (
    <PageLayout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent" />
        <div className="container mx-auto px-4 py-20 md:py-28 relative">
          <SectionHeader badge="Customers & Inventory" title="Manage Relationships & Stock" description="Keep track of who you sell to and what you sell—all in one place." />
        </div>
      </section>

      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Customer Management</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {customerFeatures.map((f, i) => <div key={f.title} className="animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}><FeatureCard icon={f.icon} title={f.title} description={f.description} /></div>)}
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Inventory & Products</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {inventoryFeatures.map((f, i) => <div key={f.title} className="animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}><FeatureCard icon={f.icon} title={f.title} description={f.description} /></div>)}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}