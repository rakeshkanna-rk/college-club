import { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { Play, X } from "lucide-react";
import { videos } from "@/data/clubData";
import { SectionHeader } from "./UIElements";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export function VideoMarquee() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section className="py-40 bg-mesh overflow-hidden relative">
      <motion.div 
        style={{ x }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-neon-purple/5 blur-[150px] -z-10" 
      />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent" />

      <div className="container mx-auto px-6">
        <SectionHeader
          title="Digital Archives"
          subtitle="Experience the energy and excitement of our club activities through our lens."
        />
      </div>

      <div className="relative mt-20">
        {/* Glow behind marquee */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-40 bg-neon-purple/10 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex gap-12 w-max px-6"
        >
          {[...videos, ...videos].map((video, index) => (
            <motion.div
              key={`${video.id}-${index}`}
              whileHover={{ scale: 1.05, y: -10 }}
              onClick={() => setSelectedVideo(video.url)}
              className="relative w-[320px] aspect-[9/16] rounded-[32px] overflow-hidden glass border border-white/10 cursor-pointer group shadow-2xl"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                <div className="w-20 h-20 rounded-full bg-neon-purple/90 flex items-center justify-center shadow-[0_0_40px_rgba(168,85,247,0.6)] border border-white/20">
                  <Play className="w-10 h-10 text-white fill-white" />
                </div>
              </div>

              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white font-display font-black text-2xl leading-tight uppercase tracking-tighter drop-shadow-lg">{video.title}</p>
                <div className="w-16 h-1.5 bg-neon-purple mt-4 rounded-full shadow-[0_0_10px_rgba(168,85,247,1)]" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-5xl p-0 bg-black border-none overflow-hidden aspect-video rounded-[32px] shadow-[0_0_100px_rgba(168,85,247,0.3)]">
          {selectedVideo && (
            <iframe
              src={selectedVideo.replace("watch?v=", "embed/")}
              className="w-full h-full"
              allowFullScreen
              title="Video Player"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
