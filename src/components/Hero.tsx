import { motion, useScroll, useTransform } from "motion/react";
import { ChevronRight, Sparkles, Zap, Shield, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TiltCard } from "./UIElements";

export function Hero({ onJoinClick }: { onJoinClick: () => void }) {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 360]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  return (
    <section className="relative min-h-[85vh] lg:min-h-screen flex items-center pt-20 lg:pt-20 overflow-hidden bg-mesh">
      {/* Dynamic Background Glows with Parallax */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
      >
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] lg:w-[40%] lg:h-[40%] bg-neon-purple/20 blur-[100px] lg:blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] lg:w-[40%] lg:h-[40%] bg-neon-blue/20 blur-[100px] lg:blur-[150px] rounded-full animate-pulse delay-1000" />
      </motion.div>
      
      <div className="container mx-auto px-6 flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-16 items-center relative z-10">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ scale }}
          className="text-center lg:text-left order-1 lg:order-1"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-2.5 py-1 lg:px-4 lg:py-2 rounded-full glass border-white/10 text-neon-purple text-[8px] lg:text-xs font-bold uppercase tracking-widest mb-3 lg:mb-8 shadow-[0_0_20px_rgba(168,85,247,0.2)]"
          >
            <Sparkles className="w-2.5 h-2.5" />
            Next-Gen Tech Community
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-7xl lg:text-9xl font-display font-black tracking-tighter text-white mb-3 lg:mb-8 leading-[0.9] lg:leading-[0.85] uppercase"
          >
            G-TECH <br />
            <span className="text-gradient drop-shadow-[0_0_30px_rgba(168,85,247,0.3)]">CLUB</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white/70 text-xs md:text-lg lg:text-2xl max-w-xl mb-5 lg:mb-12 leading-relaxed mx-auto lg:mx-0"
          >
            Empowering the next generation of creators, developers, and tech enthusiasts at Guru Nanak College.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center lg:justify-start gap-3 lg:gap-6"
          >
            <Button
              size="lg"
              className="btn-primary px-4 py-2.5 lg:px-10 lg:py-8 rounded-lg lg:rounded-2xl text-xs lg:text-xl group"
              onClick={() => document.getElementById('domains')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Domains
              <ChevronRight className="ml-1.5 w-3.5 h-3.5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="btn-secondary px-4 py-2.5 lg:px-10 lg:py-8 rounded-lg lg:rounded-2xl text-xs lg:text-xl"
              onClick={onJoinClick}
            >
              Join Us
            </Button>
          </motion.div>

          {/* Stats/Badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 lg:mt-16 flex flex-wrap justify-center lg:justify-start gap-3 lg:gap-8 opacity-50"
          >
            <div className="flex items-center gap-1.5">
              <Zap className="w-3 h-3 lg:w-5 lg:h-5 text-neon-purple" />
              <span className="text-[8px] lg:text-sm font-bold uppercase tracking-widest">Fast Support</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="w-3 h-3 lg:w-5 lg:h-5 text-neon-blue" />
              <span className="text-[8px] lg:text-sm font-bold uppercase tracking-widest">Secure Community</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Cpu className="w-3 h-3 lg:w-5 lg:h-5 text-neon-violet" />
              <span className="text-[8px] lg:text-sm font-bold uppercase tracking-widest">Tech Driven</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ y: y1 }}
          className="relative order-2 lg:order-2"
        >
          <TiltCard>
            <div className="relative w-full aspect-square max-w-[200px] md:max-w-md lg:max-w-xl mx-auto">
              {/* Complex 3D Visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Outer Rings */}
                <motion.div
                  style={{ rotate }}
                  className="absolute w-full h-full border-[1px] border-dashed border-neon-purple/20 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[80%] h-[80%] border-[1px] border-neon-blue/10 rounded-full"
                />
                
                {/* Core Object */}
                <div className="relative w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80">
                  <motion.div
                    animate={{ 
                      y: [0, -20, 0],
                      rotate: [45, 50, 45]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="w-full h-full glass rounded-[24px] md:rounded-[36px] lg:rounded-[48px] rotate-45 flex items-center justify-center border border-white/30 shadow-[0_0_40px_rgba(168,85,247,0.3)] lg:shadow-[0_0_80px_rgba(168,85,247,0.4)] overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/40 via-transparent to-neon-blue/40" />
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                    
                    {/* Inner Glow */}
                    <motion.div
                      animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 rounded-full bg-neon-purple/60 blur-2xl lg:blur-3xl"
                    />
                    
                    {/* Floating Text with Shadow */}
                    <div className="relative z-10 flex flex-col items-center -rotate-45">
                      <span className="font-display font-black text-5xl md:text-7xl lg:text-9xl text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] tracking-tighter">
                        GT
                      </span>
                      <div className="h-0.5 lg:h-1 w-10 lg:w-20 bg-neon-purple shadow-[0_0_15px_rgba(168,85,247,1)] rounded-full mt-[-5px] lg:mt-[-10px]" />
                    </div>
                  </motion.div>

                  {/* Orbiting Elements */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[-20px] lg:inset-[-40px] pointer-events-none"
                  >
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 lg:w-16 lg:h-16 glass rounded-lg lg:rounded-2xl border border-white/20 flex items-center justify-center shadow-2xl"
                    >
                      <Cpu className="w-4 h-4 lg:w-8 lg:h-8 text-neon-purple" />
                    </motion.div>
                  </motion.div>
                  
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[-40px] lg:inset-[-80px] pointer-events-none"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-6 lg:w-12 lg:h-12 glass rounded-md lg:rounded-xl border border-white/20 flex items-center justify-center shadow-2xl"
                    >
                      <Zap className="w-3 h-3 lg:w-6 lg:h-6 text-neon-blue" />
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Particle System */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    y: [0, -60, 0],
                    x: [0, Math.random() * 30 - 15, 0],
                    opacity: [0, 0.8, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 3 + Math.random() * 3, 
                    repeat: Infinity, 
                    delay: Math.random() * 4 
                  }}
                  className="absolute w-1.5 h-1.5 rounded-full bg-neon-purple/60 blur-[1px]"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`
                  }}
                />
              ))}
            </div>
          </TiltCard>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-white/40 text-xs uppercase tracking-[0.3em] font-bold">Initiating Sequence</span>
        <div className="w-px h-20 bg-gradient-to-b from-neon-purple via-neon-blue to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
