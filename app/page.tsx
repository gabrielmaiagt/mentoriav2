"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import BackgroundAtmosphere from "@/components/BackgroundAtmosphere";
import Navbar from "@/components/Navbar";

const featureCards = [
  { label: "X1" },
  { label: "TikTok Ads" },
  { label: "Escala" },
  { label: "Oferta" },
  { label: "Validação" },
  { label: "Conversão" },
];

function DashboardPreview() {
  return (
    <div
      className="absolute inset-0 pointer-events-none select-none overflow-hidden"
      style={{ opacity: 0.11 }}
    >
      <div className="absolute bottom-20 right-10 w-64 h-40">
        <svg viewBox="0 0 256 160" fill="none" className="w-full h-full">
          <defs>
            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polyline points="0,120 40,100 80,80 120,60 160,40 200,50 256,20" stroke="#8B5CF6" strokeWidth="1.5" fill="none" />
          <polygon points="0,120 40,100 80,80 120,60 160,40 200,50 256,20 256,160 0,160" fill="url(#chartGrad)" />
        </svg>
      </div>
      <div className="absolute top-28 right-16 space-y-3">
        {["ROAS 4.2x", "CTR 3.8%", "CPM R$18", "Conv. 6.4%"].map((m, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#8B5CF6" }} />
            <span className="text-xs font-mono" style={{ color: "#8B5CF6" }}>{m}</span>
          </div>
        ))}
      </div>
      <div className="absolute bottom-40 left-16 flex items-end gap-1 h-20">
        {[40, 70, 55, 85, 60, 90, 75].map((h, i) => (
          <div
            key={i}
            className="w-3 rounded-t"
            style={{ height: `${h}%`, background: i === 5 ? "#8B5CF6" : "rgba(139,92,246,0.22)" }}
          />
        ))}
      </div>
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden" style={{ backgroundColor: "#050507" }}>
      <BackgroundAtmosphere />
      <DashboardPreview />
      <Navbar />

      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-20 pb-16 min-h-screen">
        <motion.div
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
          >
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full mb-10"
              style={{
                color: "#A855F7",
                border: "1px solid rgba(168,85,247,0.25)",
                background: "rgba(168,85,247,0.07)",
                letterSpacing: "0.2em",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#A855F7", boxShadow: "0 0 6px #A855F7" }} />
              ESTRUTURA OPERACIONAL
            </span>
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
            className="font-black leading-[1.05] mb-6"
            style={{ fontSize: "clamp(2.6rem, 6vw, 4.5rem)", color: "#F4F4F5", letterSpacing: "-0.02em" }}
          >
            Aprenda a estruturar{" "}
            <span style={{ color: "#A855F7", textShadow: "0 0 30px rgba(168,85,247,0.35)" }}>
              operações reais
            </span>{" "}
            usando X1, TikTok Ads e tráfego direto.
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
            className="mb-12 max-w-xl leading-relaxed"
            style={{ fontSize: "1.05rem", color: "#9B9BA1", fontWeight: 400 }}
          >
            Oferta, criativo, validação, escala e conversão aplicados na prática.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.07 } } }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {featureCards.map((card) => (
              <motion.div
                key={card.label}
                variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } } }}
                whileHover={{ scale: 1.04 }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium cursor-default"
                style={{
                  background: "#0D0D12",
                  border: "1px solid rgba(255,255,255,0.07)",
                  color: "#9B9BA1",
                  transition: "all 0.2s ease",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6L5 9L10 3" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {card.label}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
          >
            <Link href="/onboarding">
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(168,85,247,0.4), 0 0 12px rgba(168,85,247,0.25)" }}
                whileTap={{ scale: 0.97 }}
                className="px-10 py-4 rounded-xl font-bold text-base"
                style={{
                  background: "linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)",
                  color: "#fff",
                  boxShadow: "0 0 24px rgba(168,85,247,0.28), 0 4px 16px rgba(0,0,0,0.4)",
                  letterSpacing: "0.04em",
                }}
              >
                Ver se tenho perfil
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8, delay: 0.4 } } }}
            className="mt-10 flex items-center gap-3"
          >
            <div className="flex -space-x-2">
              {["G", "M", "L", "R"].map((l, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ background: `hsl(${260 + i * 20}, 70%, 35%)`, border: "2px solid #050507", color: "#F4F4F5" }}
                >
                  {l}
                </div>
              ))}
            </div>
            <span className="text-xs" style={{ color: "#9B9BA1" }}>+200 operadores treinados</span>
          </motion.div>
        </motion.div>
      </main>

      <div className="relative z-10 pb-8 flex justify-center">
        <span className="text-xs" style={{ color: "rgba(155,155,161,0.3)", letterSpacing: "0.1em" }}>
          ANTI-FLUXO © 2025 — ESTRUTURA PRIVADA
        </span>
      </div>
    </div>
  );
}
