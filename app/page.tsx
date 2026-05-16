"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import BackgroundAtmosphere from "@/components/BackgroundAtmosphere";
import Navbar from "@/components/Navbar";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden" style={{ backgroundColor: "#050507" }}>
      <BackgroundAtmosphere />
      <Navbar showEnter={false} />

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
              Mentoria Individual · Vagas limitadas
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
            className="mb-10 max-w-xl leading-relaxed"
            style={{ fontSize: "1.05rem", color: "#9B9BA1", fontWeight: 400 }}
          >
            Oferta, criativo, validação, escala e conversão aplicados na prática.
          </motion.p>

          {/* Card do mentor */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
            className="flex items-center gap-4 px-5 py-4 rounded-2xl mb-8"
            style={{
              background: "#0D0D12",
              border: "1px solid rgba(255,255,255,0.07)",
              boxShadow: "0 0 30px rgba(139,92,246,0.06)",
            }}
          >
            {/* Avatar */}
            <div
              className="w-12 h-12 rounded-full flex-shrink-0 overflow-hidden"
              style={{ boxShadow: "0 0 18px rgba(168,85,247,0.35)", border: "2px solid rgba(168,85,247,0.3)" }}
            >
              <img
                src="https://i.ibb.co/JFRGZKPw/eu.png"
                alt="Gabriel Maia"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Info */}
            <div className="text-left">
              <p className="font-bold text-sm leading-tight" style={{ color: "#F4F4F5" }}>
                Gabriel Maia
              </p>
              <p className="text-xs mt-0.5" style={{ color: "#9B9BA1" }}>
                Validando ofertas na velocidade do som.
              </p>
            </div>
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
            <span className="text-xs" style={{ color: "#9B9BA1" }}>+20 mentorados escalados</span>
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
