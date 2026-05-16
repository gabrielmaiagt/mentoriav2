"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import BackgroundAtmosphere from "@/components/BackgroundAtmosphere";
import Navbar from "@/components/Navbar";

function FakeTikTokDash() {
  return (
    <div
      className="w-full h-full rounded-2xl overflow-hidden p-5 relative"
      style={{ background: "#0D0D12", border: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-mono" style={{ color: "#9B9BA1" }}>TikTok Ads · Painel DR</span>
        <span className="text-xs px-2 py-0.5 rounded" style={{ background: "rgba(139,92,246,0.12)", color: "#A855F7" }}>ESCALA</span>
      </div>
      <div className="grid grid-cols-2 gap-3 mb-4">
        {[
          { label: "Gasto Hoje", value: "R$480" },
          { label: "ROAS", value: "5.2x" },
          { label: "CPM", value: "R$12,40" },
          { label: "CTR", value: "4.1%" },
        ].map((m) => (
          <div key={m.label} className="p-3 rounded-lg" style={{ background: "#12121A" }}>
            <div className="text-xs mb-1" style={{ color: "#9B9BA1" }}>{m.label}</div>
            <div className="font-bold text-base" style={{ color: "#F4F4F5" }}>{m.value}</div>
          </div>
        ))}
      </div>
      <div className="rounded-lg p-3 mb-4" style={{ background: "#12121A" }}>
        <div className="text-xs mb-3" style={{ color: "#9B9BA1" }}>Performance de criativos</div>
        <div className="space-y-2">
          {[
            { label: "Creative_A", pct: 88 },
            { label: "Creative_B", pct: 62 },
            { label: "Creative_C", pct: 45 },
          ].map((c) => (
            <div key={c.label}>
              <div className="flex justify-between text-xs mb-1" style={{ color: "#9B9BA1" }}>
                <span>{c.label}</span>
                <span>{c.pct}%</span>
              </div>
              <div className="h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
                <div
                  className="h-full rounded-full"
                  style={{ width: `${c.pct}%`, background: "linear-gradient(90deg, #8B5CF6, #A855F7)" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-end gap-1 h-14">
        {[35, 55, 45, 75, 65, 85, 70, 90, 80, 100].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t"
            style={{ height: `${h}%`, background: i === 9 ? "linear-gradient(180deg,#8B5CF6,#A855F7)" : "rgba(139,92,246,0.18)" }}
          />
        ))}
      </div>
    </div>
  );
}

const modules = [
  { num: "01", title: "Estrutura de Conta", desc: "Configuração inicial da conta de anúncios para performance máxima desde o primeiro dia." },
  { num: "02", title: "Criativo de DR", desc: "Como produzir vídeos que param o scroll e levam direto para a conversão." },
  { num: "03", title: "Construção da Oferta", desc: "Oferta alinhada com tráfego direto — do creative até o checkout." },
  { num: "04", title: "Validação R$100", desc: "Protocolo de validação de oferta com investimento mínimo antes de escalar." },
  { num: "05", title: "Estrutura de Escala", desc: "Como escalar mantendo ROAS e evitando queima de budget." },
  { num: "06", title: "Análise de Dados", desc: "Leitura de métricas e tomada de decisão baseada em dados reais." },
];

export default function MentoriaTikTok() {
  return (
    <div className="relative min-h-screen" style={{ backgroundColor: "#050507" }}>
      <BackgroundAtmosphere />
      <Navbar />

      {/* HERO */}
      <section className="relative z-10 min-h-screen flex items-center pt-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-8"
              style={{ color: "#A855F7", border: "1px solid rgba(168,85,247,0.25)", background: "rgba(168,85,247,0.07)", letterSpacing: "0.18em" }}
            >
              MENTORIA INDIVIDUAL
            </span>
            <h1
              className="font-black leading-[1.05] mb-6"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", color: "#F4F4F5", letterSpacing: "-0.02em" }}
            >
              Oferta, criativo,{" "}
              <span style={{ color: "#A855F7", textShadow: "0 0 24px rgba(168,85,247,0.35)" }}>
                validação e escala
              </span>{" "}
              usando TikTok Ads.
            </h1>
            <p className="mb-10 leading-relaxed" style={{ color: "#9B9BA1", fontSize: "1.05rem" }}>
              O sistema completo de tráfego direto que uso para gerar resultados consistentes no TikTok — do criativo ao checkout.
            </p>
            <Link href="/aprovado">
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(168,85,247,0.4)" }}
                whileTap={{ scale: 0.97 }}
                className="px-10 py-4 rounded-xl font-bold text-base"
                style={{
                  background: "linear-gradient(135deg, #8B5CF6, #A855F7)",
                  color: "#fff",
                  boxShadow: "0 0 24px rgba(168,85,247,0.25)",
                  letterSpacing: "0.04em",
                }}
              >
                Quero garantir minha vaga
              </motion.button>
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="h-96 lg:h-[480px]">
            <FakeTikTokDash />
          </motion.div>
        </div>
      </section>

      {/* MÓDULOS */}
      <section className="relative z-10 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="text-xs font-semibold" style={{ color: "#A855F7", letterSpacing: "0.18em" }}>CONTEÚDO</span>
            <h2 className="font-black mt-3" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#F4F4F5", letterSpacing: "-0.02em" }}>
              O que você vai aprender
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {modules.map((m, i) => (
              <motion.div
                key={m.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ borderColor: "rgba(168,85,247,0.25)" }}
                className="p-6 rounded-xl flex gap-5"
                style={{ background: "#0D0D12", border: "1px solid rgba(255,255,255,0.07)", transition: "all 0.2s" }}
              >
                <span className="text-3xl font-black" style={{ color: "rgba(139,92,246,0.2)", lineHeight: 1 }}>{m.num}</span>
                <div>
                  <h3 className="font-bold mb-2" style={{ color: "#F4F4F5" }}>{m.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#9B9BA1" }}>{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MÉTRICAS */}
      <section className="relative z-10 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { val: "5.2x", label: "ROAS médio" },
              { val: "R$62k", label: "Faturamento mensal" },
              { val: "4.1%", label: "CTR médio" },
              { val: "R$12", label: "CPM médio" },
            ].map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-xl text-center"
                style={{ background: "#0D0D12", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div className="font-black text-3xl mb-1" style={{ color: "#A855F7", textShadow: "0 0 20px rgba(168,85,247,0.3)" }}>{m.val}</div>
                <div className="text-xs" style={{ color: "#9B9BA1" }}>{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative z-10 py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-black mb-3" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#F4F4F5", letterSpacing: "-0.02em" }}>
              Investimento — R$1.500
            </h2>
            <p className="mb-8" style={{ color: "#9B9BA1" }}>PIX, cartão ou pagamento internacional.</p>
            <Link href="/aprovado">
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(168,85,247,0.4)" }}
                whileTap={{ scale: 0.97 }}
                className="px-12 py-4 rounded-xl font-bold text-lg"
                style={{
                  background: "linear-gradient(135deg, #8B5CF6, #A855F7)",
                  color: "#fff",
                  boxShadow: "0 0 24px rgba(168,85,247,0.25)",
                  letterSpacing: "0.04em",
                }}
              >
                Garantir minha vaga
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10 pb-8 flex justify-center">
        <span className="text-xs" style={{ color: "rgba(155,155,161,0.25)", letterSpacing: "0.1em" }}>
          ANTI-FLUXO © 2025 — ESTRUTURA PRIVADA
        </span>
      </div>
    </div>
  );
}
