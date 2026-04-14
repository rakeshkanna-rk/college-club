import { motion, useScroll, useTransform } from "motion/react";
import * as Icons from "lucide-react";
import { domains } from "@/data/clubData";
import { SectionHeader, GlassCard, TiltCard } from "./UIElements";

export function Domains() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section id="domains" className="py-32 relative bg-mesh">
      <motion.div 
        style={{ y }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-purple/5 blur-[150px] -z-10" 
      />
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Our Domains"
          subtitle="Specialized teams working together to provide comprehensive technical and creative solutions."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {domains.map((domain, index) => {
            const IconComponent = (Icons as any)[domain.icon];
            return (
              <motion.div
                key={domain.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <TiltCard>
                  <GlassCard className="h-full border border-white/5 hover:border-neon-purple/50 transition-all duration-500">
                    <div className="w-16 h-16 rounded-2xl bg-neon-purple/10 flex items-center justify-center mb-8 neon-border group-hover:bg-neon-purple/20 group-hover:scale-110 transition-all duration-500">
                      {IconComponent && <IconComponent className="w-8 h-8 text-neon-purple" />}
                    </div>
                    <h3 className="text-3xl font-display text-white mb-4 uppercase">{domain.name}</h3>
                    <p className="text-white/60 text-lg leading-relaxed mb-8">
                      {domain.description}
                    </p>
                  </GlassCard>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
