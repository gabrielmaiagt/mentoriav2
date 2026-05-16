"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const pct = Math.round((current / total) * 100);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[2px]" style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
      <motion.div
        className="h-full"
        initial={{ width: 0 }}
        animate={{ width: `${pct}%` }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{
          background: "linear-gradient(90deg, #8B5CF6, #A855F7)",
          boxShadow: "0 0 12px rgba(168,85,247,0.6), 0 0 4px rgba(168,85,247,0.9)",
        }}
      />
    </div>
  );
}
