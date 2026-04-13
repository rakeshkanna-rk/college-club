import React, { useState } from "react";
import { motion } from "motion/react";
import { SectionHeader, GlassCard, TiltCard } from "@/components/UIElements";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, CheckCircle2, ClipboardList, Users, Zap, Sparkles } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Submit Request",
    description: "Fill out the support form with your specific technical or creative requirements."
  },
  {
    icon: Users,
    title: "Team Review",
    description: "Our domain leads review the request and coordinate the necessary resources."
  },
  {
    icon: Zap,
    title: "Support Delivered",
    description: "We provide the requested support, ensuring high-quality results for your event."
  }
];

export default function Support() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main className="pt-32 pb-20 bg-mesh min-h-screen">
      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="How We Support"
            subtitle="A simple 3-step process to get technical assistance for your department or event."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <TiltCard>
                  <GlassCard className="text-center h-full border border-white/5 p-10">
                    <div className="w-20 h-20 rounded-[24px] bg-neon-blue/10 flex items-center justify-center mx-auto mb-8 neon-border border-neon-blue/40 group-hover:scale-110 transition-transform duration-500">
                      <step.icon className="w-10 h-10 text-neon-blue" />
                    </div>
                    <div className="absolute top-10 right-10 text-6xl font-display font-black text-white/5">{index + 1}</div>
                    <h3 className="text-2xl font-display font-black text-white mb-4 uppercase tracking-tighter">{step.title}</h3>
                    <p className="text-white/60 text-lg leading-relaxed">{step.description}</p>
                  </GlassCard>
                </TiltCard>
                {index < 2 && (
                  <div className="hidden lg:block absolute top-1/2 -right-5 -translate-y-1/2 z-20">
                    <div className="w-10 h-px bg-gradient-to-r from-neon-blue to-transparent" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <GlassCard className="p-10 md:p-20 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-10">
                <Sparkles className="w-32 h-32 text-neon-blue" />
              </div>

              <SectionHeader
                align="left"
                title="Request Support"
                subtitle="Fill in the details below and our team will get in touch with you shortly."
              />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <div className="w-24 h-24 rounded-full bg-neon-blue/20 flex items-center justify-center mb-8 neon-border border-neon-blue/40 shadow-[0_0_50px_rgba(59,130,246,0.3)]">
                    <CheckCircle2 className="w-12 h-12 text-neon-blue" />
                  </div>
                  <h3 className="text-4xl font-display font-black text-white mb-4 uppercase tracking-tighter">Request Transmitted</h3>
                  <p className="text-white/60 text-xl max-w-md mx-auto">
                    Your request has been successfully logged into our system. Our domain leads will contact you within 24 hours.
                  </p>
                  <Button 
                    onClick={() => setSubmitted(false)}
                    variant="link" 
                    className="mt-10 text-neon-blue hover:text-white text-lg font-bold uppercase tracking-widest"
                  >
                    Log another request
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="text-xs font-black text-white/50 ml-1 uppercase tracking-[0.2em]">Full Name</label>
                      <Input required placeholder="John Doe" className="glass border-white/10 h-16 px-8 text-lg focus:border-neon-blue focus:ring-neon-blue/20 rounded-2xl" />
                    </div>
                    <div className="space-y-4">
                      <label className="text-xs font-black text-white/50 ml-1 uppercase tracking-[0.2em]">Department / Class</label>
                      <Input required placeholder="B.Sc Computer Science" className="glass border-white/10 h-16 px-8 text-lg focus:border-neon-blue focus:ring-neon-blue/20 rounded-2xl" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-xs font-black text-white/50 ml-1 uppercase tracking-[0.2em]">Service Domain</label>
                    <Select required>
                      <SelectTrigger className="glass border-white/10 h-16 px-8 text-lg focus:border-neon-blue rounded-2xl">
                        <SelectValue placeholder="Select required domain" />
                      </SelectTrigger>
                      <SelectContent className="glass-dark border-white/10 text-white">
                        <SelectItem value="photography">Photography Support</SelectItem>
                        <SelectItem value="videography">Videography / Live Stream</SelectItem>
                        <SelectItem value="design">Graphic Design / Posters</SelectItem>
                        <SelectItem value="web">Web / Digital Support</SelectItem>
                        <SelectItem value="other">Other Technical Assistance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <label className="text-xs font-black text-white/50 ml-1 uppercase tracking-[0.2em]">Requirement Details</label>
                    <Textarea required placeholder="Please provide a detailed description of your technical or creative needs..." className="glass border-white/10 min-h-[200px] p-8 text-lg focus:border-neon-blue focus:ring-neon-blue/20 rounded-3xl" />
                  </div>

                  <div className="space-y-4">
                    <label className="text-xs font-black text-white/50 ml-1 uppercase tracking-[0.2em]">Communication Channel</label>
                    <Input required placeholder="Email or WhatsApp Number" className="glass border-white/10 h-16 px-8 text-lg focus:border-neon-blue focus:ring-neon-blue/20 rounded-2xl" />
                  </div>

                  <Button type="submit" className="w-full btn-primary py-10 rounded-2xl text-xl uppercase tracking-[0.3em] group">
                    Initialize Request
                    <Send className="ml-3 w-6 h-6 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                  </Button>
                </form>
              )}
            </GlassCard>
          </div>
        </div>
      </section>
    </main>
  );
}
