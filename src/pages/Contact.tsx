import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({ title: "Demo Request Received!", description: "Our team will contact you within 24 hours." });
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <PageLayout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent" />
        <div className="container mx-auto px-4 py-20 md:py-28 relative">
          <SectionHeader badge="Contact Us" title="Book a Free Demo" description="See how Zenelait can transform your billing process." />

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div><h3 className="text-xl font-bold text-foreground mb-4">Get in Touch</h3><p className="text-muted-foreground">Have questions? Want a personalized demo? We're here to help.</p></div>
              <div className="space-y-6">
                <div className="flex items-start gap-4"><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"><Mail className="w-5 h-5 text-primary" /></div><div><p className="font-medium text-foreground">Email</p><p className="text-muted-foreground">hello@zenelait.com</p></div></div>
                <div className="flex items-start gap-4"><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"><Phone className="w-5 h-5 text-primary" /></div><div><p className="font-medium text-foreground">Phone</p><p className="text-muted-foreground">+91 98765 43210</p></div></div>
                <div className="flex items-start gap-4"><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"><MapPin className="w-5 h-5 text-primary" /></div><div><p className="font-medium text-foreground">Office</p><p className="text-muted-foreground">Zenelait Infotech<br />Bengaluru, India</p></div></div>
              </div>
            </div>

            <div className="glass-card-elevated rounded-2xl p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div><label className="block text-sm font-medium text-foreground mb-2">Full Name</label><Input placeholder="Your name" required className="bg-background" /></div>
                <div><label className="block text-sm font-medium text-foreground mb-2">Email</label><Input type="email" placeholder="you@company.com" required className="bg-background" /></div>
                <div><label className="block text-sm font-medium text-foreground mb-2">Company</label><Input placeholder="Your company" className="bg-background" /></div>
                <div><label className="block text-sm font-medium text-foreground mb-2">Requirements</label><Textarea placeholder="What features interest you?" rows={4} className="bg-background resize-none" /></div>
                <Button size="lg" className="w-full bg-gradient-hero text-primary-foreground" disabled={isSubmitting}>{isSubmitting ? "Sending..." : <><Send className="w-4 h-4 mr-2" />Book a Free Demo</>}</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}