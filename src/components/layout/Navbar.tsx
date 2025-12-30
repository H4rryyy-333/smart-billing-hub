import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Features", path: "/features" },
  { name: "Billing", path: "/billing" },
  { name: "Customers", path: "/customers" },
  { name: "Reports", path: "/reports" },
  { name: "Security", path: "/security" },
  { name: "Pricing", path: "/pricing" },
];

export function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-hero flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/30 transition-shadow">
              <span className="text-primary-foreground font-bold text-base">Z</span>
            </div>
            <span className="font-bold text-xl text-foreground tracking-tight">Zenelait</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/demo">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                View Demo
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="sm" className="bg-gradient-hero hover:opacity-90 text-primary-foreground shadow-lg shadow-primary/25">
                Book Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted/60 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden py-4 border-t border-border/50 animate-fade-in bg-card/95 backdrop-blur-xl -mx-4 px-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex gap-3 mt-4 px-4 pt-4 border-t border-border/50">
                <Link to="/demo" className="flex-1" onClick={() => setMobileOpen(false)}>
                  <Button variant="outline" className="w-full">
                    View Demo
                  </Button>
                </Link>
                <Link to="/contact" className="flex-1" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full bg-gradient-hero text-primary-foreground">
                    Book Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}