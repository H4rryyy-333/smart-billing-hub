import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const footerLinks = {
  Product: [
    { name: "Features", path: "/features" },
    { name: "Pricing", path: "/pricing" },
    { name: "Demo Dashboard", path: "/demo" },
  ],
  Solutions: [
    { name: "Billing & Invoicing", path: "/billing" },
    { name: "Customers & Inventory", path: "/customers" },
    { name: "Reports & AI", path: "/reports" },
  ],
  Company: [
    { name: "Security", path: "/security" },
    { name: "Contact", path: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-sidebar text-sidebar-foreground relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-16 lg:py-20 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-hero flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-base">Z</span>
              </div>
              <span className="font-bold text-xl text-sidebar-foreground">Zenelait</span>
            </Link>
            <p className="text-sidebar-foreground/70 text-sm leading-relaxed max-w-xs mb-6">
              Smart billing software for modern businesses. AI-powered, GST compliant, and beautifully simple.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a href="mailto:hello@zenelait.com" className="flex items-center gap-2 text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors">
                <Mail className="w-4 h-4" />
                hello@zenelait.com
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-2 text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors">
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-sidebar-foreground/50">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sidebar-foreground/70 hover:text-sidebar-foreground text-sm transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 lg:mt-16 pt-8 border-t border-sidebar-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sidebar-foreground/50 text-sm">
            © {new Date().getFullYear()} Zenelait Infotech. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sidebar-foreground/50 hover:text-sidebar-foreground text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sidebar-foreground/50 hover:text-sidebar-foreground text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}