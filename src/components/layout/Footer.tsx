import { Link } from "react-router-dom";

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
    <footer className="bg-sidebar text-sidebar-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-hero flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">Z</span>
              </div>
              <span className="font-bold text-lg">Zenelait</span>
            </div>
            <p className="text-sidebar-foreground/70 text-sm leading-relaxed">
              Smart billing software for modern businesses. AI-powered, GST compliant, and beautifully simple.
            </p>
          </div>

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
                      className="text-sidebar-foreground/70 hover:text-sidebar-foreground text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-sidebar-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sidebar-foreground/50 text-sm">
            © 2024 Zenelait Infotech. All rights reserved.
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
