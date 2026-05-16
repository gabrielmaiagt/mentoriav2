"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface NavbarProps {
  showEnter?: boolean;
}

export default function Navbar({ showEnter = true }: NavbarProps) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-8 py-5"
      style={{
        background: "linear-gradient(180deg, rgba(5,5,7,0.95) 0%, transparent 100%)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <Link href="/" className="flex items-center gap-3 group cursor-pointer">
        <div
          className="w-7 h-7 rounded-md flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #8B5CF6, #A855F7)",
            boxShadow: "0 0 16px rgba(168,85,247,0.4)",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 2L7 7L12 2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M2 7L7 12L12 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
          </svg>
        </div>
        <span
          className="font-bold tracking-widest text-sm"
          style={{
            color: "#F4F4F5",
            letterSpacing: "0.18em",
          }}
        >
          ANTI-FLUXO
        </span>
      </Link>

      {showEnter && (
        <Link href="/onboarding">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="text-xs font-medium px-4 py-2 rounded-md"
            style={{
              color: "#9B9BA1",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.02)",
              letterSpacing: "0.06em",
              transition: "all 0.2s ease",
            }}
          >
            Entrar
          </motion.button>
        </Link>
      )}
    </motion.nav>
  );
}
