"use client";

import { motion } from "framer-motion";

export default function PageGlowBorder() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
      style={{
        // Máscara que exibe APENAS a borda (anel de ~2px)
        WebkitMaskImage:
          "linear-gradient(black, black), linear-gradient(black, black)",
        WebkitMaskSize: "calc(100% - 4px) calc(100% - 4px), 100% 100%",
        WebkitMaskPosition: "center, center",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskComposite: "destination-out",
        maskImage:
          "linear-gradient(black, black), linear-gradient(black, black)",
        maskSize: "calc(100% - 4px) calc(100% - 4px), 100% 100%",
        maskPosition: "center, center",
        maskRepeat: "no-repeat",
        maskComposite: "exclude",
      }}
    >
      {/* Gradiente cônico que gira — só o arco roxo fica visível pela máscara */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          width: "220vmax",
          height: "220vmax",
          top: "50%",
          left: "50%",
          x: "-50%",
          y: "-50%",
          background:
            "conic-gradient(from 0deg, transparent 0%, transparent 38%, rgba(139,92,246,0.5) 46%, #A855F7 50%, rgba(168,85,247,0.8) 52%, rgba(139,92,246,0.4) 56%, transparent 63%, transparent 100%)",
          filter: "blur(2px)",
        }}
      />
    </div>
  );
}
