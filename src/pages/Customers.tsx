import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FeatureCard } from "@/components/shared/FeatureCard";
import {
  Users,
  Layers,
  History,
  UserCheck,
  Package,
  TrendingDown,
  AlertTriangle,
  Barcode,
} from "lucide-react";

const customerFeatures = [
  {
    icon: Users,
    title: "Customer Database",
    description: "Centralized customer information with contact details, history, and preferences.",
  },
  {
    icon: Layers,
    title: "Smart Segmentation",
    description: "Group customers by type, location, purchase behavior, or custom criteria.",
  },
  {
    icon: History,
    title: "Payment History & Credit",
    description: "Track payment patterns, credit limits, and outstanding balances.",
  },
  {
    icon: UserCheck,
    title: "Self-Service Portal",
    description: "Let customers view invoices, make payments, and download receipts.",
  },
];

const inventoryFeatures = [
  {
    icon: Package,
    title: "Product & Stock Management",
    description: "Complete inventory tracking with categories, variants, and pricing.",
  },
  {
    icon: TrendingDown,
    title: "Auto Inventory Reduction",
    description: "Stock levels update automatically when invoices are created.",
  },
  {
    icon: AlertTriangle,
    title: "Low Stock Alerts",
    description: "Get notified before you run out of popular items.",
  },
  {
    icon: Barcode,
    title: "Barcode & Variants",
    description: "Support for barcodes, SKUs, and product variations (size, color, etc.).",
  },
];

export default function Customers() {
  return (
    <PageLayout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Customers & Inventory"
            title="Manage Relationships & Stock"
            description="Keep track of who you sell to and what you sell—all in one place."
          />

          {/* Customer Management */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Customer Management
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {customerFeatures.map((feature, index) => (
                <div key={feature.title} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <FeatureCard
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Inventory */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Inventory & Products
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {inventoryFeatures.map((feature, index) => (
                <div key={feature.title} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <FeatureCard
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
