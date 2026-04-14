import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function JoinUsModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-dark border-white/10 text-white max-w-2xl p-0 overflow-hidden rounded-[32px] md:rounded-[40px]">
        <div className="relative p-6 md:p-12 lg:p-16 bg-mesh">
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 transition-colors z-50 group"
          >
            <X className="w-6 h-6 text-white/50 group-hover:text-white" />
          </button>

          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-neon-purple/20 blur-[120px] -z-10 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-neon-blue/10 blur-[120px] -z-10 animate-pulse delay-700" />

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <DialogHeader className="mb-10 lg:mb-12">
                  <DialogTitle className="text-4xl md:text-5xl lg:text-5xl font-display leading-[1.1]! tracking-tighter uppercase text-left">
                    Join the{" "}
                    <span className="text-gradient drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                      Future
                    </span>
                  </DialogTitle>
                  <p className="text-white/60 mt-4 text-base md:text-lg font-medium text-left">
                    Become a part of Guru Nanak College's most elite technical
                    community.
                  </p>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="group space-y-3">
                      <label className="text-[10px] text-white/50 ml-1 uppercase tracking-[0.2em] group-focus-within:text-neon-purple transition-colors">
                        Full Name
                      </label>
                      <Input
                        required
                        placeholder="John Doe"
                        className="glass border-white/10 h-14 px-6 focus:border-neon-purple focus:ring-neon-purple/20 rounded-2xl transition-all duration-300"
                      />
                    </div>
                    <div className="group space-y-3">
                      <label className="text-[10px] text-white/50 ml-1 uppercase tracking-[0.2em] group-focus-within:text-neon-purple transition-colors">
                        Department
                      </label>
                      <Input
                        required
                        placeholder="Computer Applications"
                        className="glass border-white/10 h-14 px-6 focus:border-neon-purple focus:ring-neon-purple/20 rounded-2xl transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="group space-y-3">
                      <label className="text-[10px] text-white/50 ml-1 uppercase tracking-[0.2em] group-focus-within:text-neon-purple transition-colors">
                        Year of Study
                      </label>
                      <Select required>
                        <SelectTrigger className="glass border-white/10 h-14 px-6 focus:border-neon-purple rounded-2xl transition-all duration-300">
                          <SelectValue placeholder="Select Year" />
                        </SelectTrigger>
                        <SelectContent className="glass-dark border-white/10 text-white backdrop-blur-xl">
                          <SelectItem value="1">1st Year</SelectItem>
                          <SelectItem value="2">2nd Year</SelectItem>
                          <SelectItem value="3">3rd Year</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="group space-y-3">
                      <label className="text-[10px] text-white/50 ml-1 uppercase tracking-[0.2em] group-focus-within:text-neon-purple transition-colors">
                        Domain of Interest
                      </label>
                      <Select required>
                        <SelectTrigger className="glass border-white/10 h-14 px-6 focus:border-neon-purple rounded-2xl transition-all duration-300">
                          <SelectValue placeholder="Select Domain" />
                        </SelectTrigger>
                        <SelectContent className="glass-dark border-white/10 text-white backdrop-blur-xl">
                          <SelectItem value="photography">Photography</SelectItem>
                          <SelectItem value="videography">Videography</SelectItem>
                          <SelectItem value="editing">Video Editing</SelectItem>
                          <SelectItem value="design">Graphic Design</SelectItem>
                          <SelectItem value="web">Web Development</SelectItem>
                          <SelectItem value="docs">Documentation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="group space-y-3">
                    <label className="text-[10px] text-white/50 ml-1 uppercase tracking-[0.2em] group-focus-within:text-neon-purple transition-colors">
                      Portfolio Link (Optional)
                    </label>
                    <Input
                      placeholder="https://behance.net/yourname"
                      className="glass border-white/10 h-14 px-6 focus:border-neon-purple rounded-2xl transition-all duration-300"
                    />
                  </div>

                  <div className="group space-y-3">
                    <label className="text-[10px] text-white/50 ml-1 uppercase tracking-[0.2em] group-focus-within:text-neon-purple transition-colors">
                      Statement of Purpose
                    </label>
                    <Textarea
                      required
                      placeholder="Tell us about your passion..."
                      className="glass border-white/10 focus:border-neon-purple min-h-[120px] p-6 rounded-[24px] focus:ring-neon-purple/20 transition-all duration-300"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full btn-primary py-8 rounded-2xl text-lg uppercase tracking-[0.3em] font-bold shadow-[0_10px_30px_rgba(163,85,247,0.3)] hover:shadow-[0_15px_40px_rgba(163,85,247,0.5)] transition-all duration-500"
                  >
                    Submit Application
                  </Button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-24 text-center"
              >
                <div className="w-24 h-24 rounded-full bg-neon-purple/20 flex items-center justify-center mb-8 neon-border shadow-[0_0_50px_rgba(168,85,247,0.3)]">
                  <CheckCircle2 className="w-12 h-12 text-neon-purple" />
                </div>
                <h3 className="text-4xl font-sans uppercase mb-4">
                  Transmission Successful
                </h3>
                <p className="text-white/60 text-xl max-w-xs mx-auto">
                  Your application has been received. Our team will review your
                  profile and contact you soon.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
}
