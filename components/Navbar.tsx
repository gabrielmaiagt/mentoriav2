"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface NavbarProps {
  showEnter?: boolean;
}

export default function Navbar({ showEnter = true }: NavbarProps) {
  return (
    <nav className="relative z-10 w-full flex items-center justify-center px-8 pt-3 pb-0">
      <Link href="/" className="cursor-pointer">
        <img
          src="https://i.ibb.co/ZRTc9mDR/Chat-GPT-Image-16-de-mai-de-2026-03-53-52.png"
          alt="Anti-Fluxo"
          className="h-20 w-auto object-contain"
        />
      </Link>

      {showEnter && (
        <div className="absolute right-8">
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
        </div>
      )}
    </nav>
  );
}
