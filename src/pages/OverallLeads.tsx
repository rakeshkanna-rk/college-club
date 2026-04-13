import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { leadArchive } from "@/data/clubData";
import { SectionHeader, GlassCard, TiltCard } from "@/components/UIElements";
import { Linkedin, Globe, Instagram, Users } from "lucide-react";

export default function OverallLeads() {
  const [activeYear, setActiveYear] = useState(leadArchive[0].year);

  const currentArchive = leadArchive.find((a) => a.year === activeYear);

  return (
    <main className="pt-32 pb-20 min-h-screen bg-mesh">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Leadership Archive"
          subtitle="Honoring the visionaries who have shaped G-Tech Club through the years."
          className="mb-12"
        />

        {/* Year Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {leadArchive.map((archive) => (
            <button
              key={archive.year}
              onClick={() => setActiveYear(archive.year)}
              className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${
                activeYear === archive.year
                  ? "bg-neon-purple text-white glow-primary scale-105"
                  : "glass text-white/50 hover:text-white hover:bg-white/5"
              }`}
            >
              {archive.year}
            </button>
          ))}
        </div>

        {/* Leads Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeYear}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {currentArchive?.leads.map((lead, index) => (
              <motion.div
                key={lead.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <TiltCard>
                  <GlassCard className="h-full flex flex-col items-center text-center p-6 border-white/5 hover:border-neon-purple/50">
                    <div className="relative w-32 h-32 mb-6 group/img">
                      <div className="absolute inset-0 bg-gradient-to-br from-neon-purple to-neon-blue rounded-2xl rotate-6 group-hover/img:rotate-12 transition-transform duration-500" />
                      <img
                        src={lead.image}
                        alt={lead.name}
                        className="relative z-10 w-full h-full object-cover rounded-2xl border border-white/10"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    
                    <h3 className="text-xl font-display font-bold text-white mb-1">{lead.name}</h3>
                    <p className="text-neon-purple text-xs font-bold uppercase tracking-widest mb-2">{lead.role}</p>
                    <p className="text-white/40 text-sm mb-6">{lead.domain}</p>

                    {/* Social Links */}
                    <div className="flex items-center gap-4 mt-auto">
                      {lead.links?.linkedin ? (
                        <a href={lead.links.linkedin} className="text-white/40 hover:text-neon-blue transition-colors">
                          <Linkedin className="w-5 h-5" />
                        </a>
                      ) : null}
                      {lead.links?.portfolio ? (
                        <a href={lead.links.portfolio} className="text-white/40 hover:text-neon-purple transition-colors">
                          <Globe className="w-5 h-5" />
                        </a>
                      ) : null}
                      {lead.links?.instagram ? (
                        <a href={lead.links.instagram} className="text-white/40 hover:text-pink-500 transition-colors">
                          <Instagram className="w-5 h-5" />
                        </a>
                      ) : null}
                      {!lead.links && (
                        <span className="text-white/20 text-[10px] uppercase font-bold tracking-widest">No links available</span>
                      )}
                    </div>
                  </GlassCard>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {currentArchive?.leads.length === 0 && (
          <div className="text-center py-20">
            <Users className="w-16 h-16 text-white/10 mx-auto mb-4" />
            <p className="text-white/30 text-lg">No records found for this period.</p>
          </div>
        )}
      </div>
    </main>
  );
}
