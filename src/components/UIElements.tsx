import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

export function SectionHeader({ 
  title, 
  subtitle, 
  gradient,
  align = "center",
  className = ""
}: { 
  title: string; 
  subtitle?: string; 
  gradient?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-16 ${align === "center" ? "text-center" : "text-left"} ${className}`}
    >
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "80px" }}
        viewport={{ once: true }}
        className={`rounded-2xl h-1 bg-linear-to-r from-neon-purple to-neon-blue mb-6 ${align === "center" ? "mx-auto" : ""}`}
      />
      <h2 className="text-4xl md:text-7xl font-display text-white mb-4 uppercase">
        {title} {gradient && <span className="text-gradient drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]">{gradient}</span>}
      </h2>
      {subtitle && (
        <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

export function GlassCard({ 
  children, 
  className = "",
  hover = true
}: { 
  children: React.ReactNode; 
  className?: string;
  hover?: boolean;
}) {
  return (
    <motion.div
      whileHover={hover ? { y: -10, scale: 1.02 } : {}}
      className={`glass rounded-3xl p-8 relative overflow-hidden group ${className}`}
    >
      {/* Subtle Inner Glow */}
      <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Animated Border Glow */}
      <div className="absolute -inset-px bg-linear-to-r from-neon-purple/0 via-neon-purple/30 to-neon-purple/0 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}

export function TiltCard({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode; 
  className?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`relative rounded-3xl ${className}`}
    >
      <div
        style={{
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d",
        }}
        className="h-full w-full"
      >
        {children}
      </div>
    </motion.div>
  );
}
