import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  FileText,
  Users,
  Package,
  BarChart3,
  Sparkles,
  Settings,
  Bell,
  Search,
  ChevronDown,
  ArrowUpRight,
  ArrowDownRight,
  AlertTriangle,
  TrendingUp,
  Clock,
  Menu,
  X,
} from "lucide-react";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: FileText, label: "Invoices" },
  { icon: Users, label: "Customers" },
  { icon: Package, label: "Products" },
  { icon: BarChart3, label: "Reports" },
  { icon: Sparkles, label: "AI Insights" },
  { icon: Settings, label: "Settings" },
];

const stats = [
  { label: "Total Revenue", value: "₹12,45,800", change: "+12.5%", positive: true },
  { label: "Pending Payments", value: "₹2,83,400", change: "8 invoices", positive: false },
  { label: "Monthly Invoices", value: "47", change: "+8 this week", positive: true },
  { label: "Collection Rate", value: "94.2%", change: "+2.1%", positive: true },
];

const recentInvoices = [
  { id: "INV-2024-0047", customer: "Acme Corp", amount: "₹76,700", status: "Paid", date: "Dec 24" },
  { id: "INV-2024-0046", customer: "TechStart Inc", amount: "₹45,000", status: "Pending", date: "Dec 23" },
  { id: "INV-2024-0045", customer: "GlobalTrade", amount: "₹1,23,500", status: "Overdue", date: "Dec 20" },
  { id: "INV-2024-0044", customer: "StartupXYZ", amount: "₹28,900", status: "Paid", date: "Dec 19" },
];

const aiAlerts = [
  { type: "warning", icon: AlertTriangle, title: "Late Payment Risk", description: "GlobalTrade invoice has 72% chance of late payment" },
  { type: "insight", icon: TrendingUp, title: "Revenue Trend", description: "Sales up 15% compared to last quarter" },
  { type: "action", icon: Clock, title: "Optimal Send Time", description: "Send invoices on Tuesday 10 AM for faster payment" },
];

export default function Demo() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-sidebar transform transition-transform duration-200 lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between h-16 px-6 border-b border-sidebar-border">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-hero flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">Z</span>
              </div>
              <span className="font-bold text-lg text-sidebar-foreground">Zenelait</span>
            </Link>
            <button className="lg:hidden p-1 text-sidebar-foreground" onClick={() => setSidebarOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex-1 px-3 py-4 space-y-1">
            {sidebarItems.map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  item.active
                    ? "bg-sidebar-accent text-sidebar-primary"
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            ))}
          </nav>

          <div className="p-4 border-t border-sidebar-border">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-sidebar-accent flex items-center justify-center">
                <span className="text-sm font-medium text-sidebar-foreground">JD</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-sidebar-foreground truncate">John Doe</p>
                <p className="text-xs text-sidebar-foreground/60 truncate">Admin</p>
              </div>
              <ChevronDown className="w-4 h-4 text-sidebar-foreground/60" />
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="h-16 bg-card border-b border-border flex items-center px-4 lg:px-6 gap-4">
          <button className="lg:hidden p-2 hover:bg-muted rounded-lg" onClick={() => setSidebarOpen(true)}>
            <Menu className="w-5 h-5" />
          </button>

          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search invoices, customers..."
                className="w-full h-10 pl-10 pr-4 bg-muted/50 border border-border rounded-lg text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          <button className="relative p-2 hover:bg-muted rounded-lg">
            <Bell className="w-5 h-5 text-muted-foreground" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-destructive rounded-full" />
          </button>

          <Link to="/contact">
            <Button variant="hero" size="sm">
              Upgrade Plan
            </Button>
          </Link>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-4 lg:p-6 overflow-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Here's your business overview.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card rounded-xl p-4 lg:p-5">
                <p className="text-xs lg:text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-xl lg:text-2xl font-bold text-foreground">{stat.value}</p>
                <div className={`flex items-center gap-1 mt-1 text-xs lg:text-sm ${stat.positive ? "text-accent" : "text-muted-foreground"}`}>
                  {stat.positive ? <ArrowUpRight className="w-3 h-3" /> : stat.label === "Pending Payments" ? null : <ArrowDownRight className="w-3 h-3" />}
                  {stat.change}
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Recent Invoices */}
            <div className="lg:col-span-2 glass-card rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-foreground">Recent Invoices</h2>
                <button className="text-sm text-primary hover:underline">View all</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 text-xs text-muted-foreground font-medium">Invoice</th>
                      <th className="text-left py-3 text-xs text-muted-foreground font-medium">Customer</th>
                      <th className="text-right py-3 text-xs text-muted-foreground font-medium">Amount</th>
                      <th className="text-right py-3 text-xs text-muted-foreground font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentInvoices.map((invoice) => (
                      <tr key={invoice.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                        <td className="py-3">
                          <p className="font-medium text-foreground text-sm">{invoice.id}</p>
                          <p className="text-xs text-muted-foreground">{invoice.date}</p>
                        </td>
                        <td className="py-3 text-sm text-muted-foreground">{invoice.customer}</td>
                        <td className="py-3 text-right font-medium text-foreground text-sm">{invoice.amount}</td>
                        <td className="py-3 text-right">
                          <span
                            className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                              invoice.status === "Paid"
                                ? "bg-accent/10 text-accent"
                                : invoice.status === "Pending"
                                ? "bg-primary/10 text-primary"
                                : "bg-destructive/10 text-destructive"
                            }`}
                          >
                            {invoice.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* AI Alerts */}
            <div className="glass-card rounded-xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-primary" />
                <h2 className="font-semibold text-foreground">AI Insights</h2>
              </div>
              <div className="space-y-4">
                {aiAlerts.map((alert, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg ${
                      alert.type === "warning"
                        ? "bg-destructive/5 border border-destructive/20"
                        : alert.type === "insight"
                        ? "bg-accent/5 border border-accent/20"
                        : "bg-primary/5 border border-primary/20"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <alert.icon
                        className={`w-5 h-5 flex-shrink-0 ${
                          alert.type === "warning"
                            ? "text-destructive"
                            : alert.type === "insight"
                            ? "text-accent"
                            : "text-primary"
                        }`}
                      />
                      <div>
                        <p className="font-medium text-foreground text-sm">{alert.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">{alert.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Demo Notice */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              This is a demo dashboard.{" "}
              <Link to="/contact" className="text-primary hover:underline font-medium">
                Request a personalized demo
              </Link>{" "}
              to see real data.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
