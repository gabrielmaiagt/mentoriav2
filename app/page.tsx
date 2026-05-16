"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import BackgroundAtmosphere from "@/components/BackgroundAtmosphere";
import Navbar from "@/components/Navbar";
import { CircularGauge, AreaChart, MiniBarChart, ProgressRow } from "@/components/DashboardWidget";

const featureCards = [
  { label: "X1" },
  { label: "TikTok Ads" },
  { label: "Escala" },
  { label: "Oferta" },
  { label: "Validação" },
  { label: "Conversão" },
];

function DashboardPreview() {
  const cardBase = {
    background: "rgba(13,13,18,0.85)",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: "16px",
    padding: "18px",
    backdropFilter: "blur(12px)",
  };

  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" style={{ opacity: 0.18 }}>
      {/* Grid de cards — visível no fundo desfocado */}
      <div
        className="absolute"
        style={{
          right: "-40px",
          top: "60px",
          width: "620px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "auto auto",
          gap: "12px",
          filter: "blur(1px)",
        }}
      >
        {/* Vendas Aprovadas */}
        <div style={cardBase}>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "rgba(139,92,246,0.2)" }}>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 1.5v10M3 5l3.5-3.5L10 5" stroke="#8B5CF6" strokeWidth="1.4" strokeLinecap="round"/></svg>
            </div>
            <span className="text-xs font-semibold" style={{ color: "#9B9BA1" }}>Vendas Aprovadas</span>
          </div>
          <div className="font-black text-2xl mb-2" style={{ color: "#F4F4F5" }}>R$ 1.679,66</div>
          <div className="h-1 rounded-full mb-1" style={{ background: "rgba(255,255,255,0.06)" }}>
            <div className="h-full rounded-full w-1/3" style={{ background: "linear-gradient(90deg,#8B5CF6,#A855F7)" }} />
          </div>
          <span className="text-xs" style={{ color: "#9B9BA1" }}>34% Aprov.</span>
        </div>

        {/* Taxa de Conversão */}
        <div style={{ ...cardBase, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div className="flex items-center gap-2 mb-2 self-start">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "rgba(139,92,246,0.2)" }}>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 9l3-3 2 2 4-5" stroke="#8B5CF6" strokeWidth="1.4" strokeLinecap="round"/></svg>
            </div>
            <span className="text-xs font-semibold" style={{ color: "#9B9BA1" }}>Taxa de Conversão</span>
          </div>
          <CircularGauge value={33.95} label="Conversão" sub="110 pagos de 324 PIX" />
        </div>

        {/* Total Starts */}
        <div style={cardBase}>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "rgba(139,92,246,0.2)" }}>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 2l1 3h3l-2.5 2 1 3-2.5-2-2.5 2 1-3L3 5h3l.5-3z" stroke="#8B5CF6" strokeWidth="1.2" fill="none"/></svg>
            </div>
            <span className="text-xs font-semibold" style={{ color: "#9B9BA1" }}>Total Starts</span>
          </div>
          <div className="font-black text-2xl mb-1" style={{ color: "#F4F4F5" }}>3.6k</div>
          <p className="text-xs mb-0.5" style={{ color: "#9B9BA1" }}>leads iniciaram conversa</p>
          <p className="text-xs" style={{ color: "#9B9BA1" }}>33 starts por venda</p>
          <MiniBarChart data={[30, 55, 80]} />
        </div>

        {/* Ticket Médio */}
        <div style={cardBase}>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "rgba(139,92,246,0.2)" }}>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><rect x="2" y="4" width="9" height="6" rx="1" stroke="#8B5CF6" strokeWidth="1.2"/><path d="M4 4V3a2 2 0 014 0v1" stroke="#8B5CF6" strokeWidth="1.2"/></svg>
            </div>
            <span className="text-xs font-semibold" style={{ color: "#9B9BA1" }}>Ticket Médio</span>
          </div>
          <div className="font-black text-2xl mb-1" style={{ color: "#F4F4F5" }}>R$ 15,00</div>
          <p className="text-xs mb-3" style={{ color: "#9B9BA1" }}>Vendas: R$ 1.679,66</p>
          <ProgressRow label="PIX Pagos" value={110} total={442} />
        </div>
      </div>

      {/* Gráfico de desempenho */}
      <div
        className="absolute"
        style={{
          right: "-40px",
          top: "310px",
          width: "620px",
          ...cardBase,
          height: "160px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <AreaChart data={[12, 18, 22, 35, 50, 58, 38]} title="Seu Desempenho" subtitle="ÚLTIMOS 7 DIAS" />
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
