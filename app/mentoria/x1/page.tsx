"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import BackgroundAtmosphere from "@/components/BackgroundAtmosphere";
import Navbar from "@/components/Navbar";

function FakeDashboard() {
  return (
    <div
      className="w-full h-full rounded-2xl overflow-hidden p-5 relative"
      style={{ background: "#0D0D12", border: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-mono" style={{ color: "#9B9BA1" }}>Painel · Operação X1</span>
        <span className="text-xs px-2 py-0.5 rounded" style={{ background: "rgba(139,92,246,0.12)", color: "#A855F7" }}>AO VIVO</span>
      </div>

      {/* Metrics row */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {[
          { label: "Conversas Ativas", value: "14" },
          { label: "Taxa de Conv.", value: "7.2%" },
          { label: "Faturamento", value: "R$8.4k" },
          { label: "ROAS Médio", value: "4.1x" },
        ].map((m) => (
          <div key={m.label} className="p-3 rounded-lg" style={{ background: "#12121A" }}>
            <div className="text-xs mb-1" style={{ color: "#9B9BA1" }}>{m.label}</div>
            <div className="font-bold text-base" style={{ color: "#F4F4F5" }}>{m.value}</div>
          </div>
        ))}
      </div>

      {/* Fake chart */}
      <div className="rounded-lg p-3 mb-4" style={{ background: "#12121A" }}>
        <div className="text-xs mb-3" style={{ color: "#9B9BA1" }}>Conversões por dia</div>
        <div className="flex items-end gap-1 h-16">
          {[30, 55, 40, 70, 60, 85, 75, 90, 80, 95].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t"
              style={{
                height: `${h}%`,
                background: i === 9 ? "linear-gradient(180deg, #8B5CF6, #A855F7)" : "rgba(139,92,246,0.2)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Fake chat */}
      <div className="space-y-2">
        <div className="text-xs mb-2" style={{ color: "#9B9BA1" }}>Conversas recentes</div>
        {[
          { name: "Lucas M.", msg: "Quanto é o acesso?", time: "2min" },
          { name: "Marina S.", msg: "Quero me inscrever", time: "5min" },
        ].map((c) => (
          <div key={c.name} className="flex items-center gap-3 p-2.5 rounded-lg" style={{ background: "#12121A" }}>
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
              style={{ background: "rgba(139,92,246,0.25)", color: "#A855F7" }}
            >
              {c.name[0]}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-medium" style={{ color: "#F4F4F5" }}>{c.name}</div>
              <div className="text-xs truncate" style={{ color: "#9B9BA1" }}>{c.msg}</div>
            </div>
            <span className="text-xs flex-shrink-0" style={{ color: "rgba(155,155,161,0.5)" }}>{c.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const modules = [
  { num: "01", title: "Estrutura de Operação", desc: "Como montar uma operação funcional do zero com ferramentas simples e foco em resultado." },
  { num: "02", title: "Construção da Oferta", desc: "Como criar uma oferta irresistível que converte em conversa e fecha no X1." },
  { num: "03", title: "Criativo & Atenção", desc: "Produção de criativos para tráfego direto focado em iniciar conversa no WhatsApp." },
  { num: "04", title: "Conversão no WhatsApp", desc: "Scripts, abordagem e cadência para converter leads em compradores." },
  { num: "05", title: "Validação Rápida", desc: "Como validar oferta com R$50-100 de investimento antes de escalar." },
  { num: "06", title: "Escala da Operação", desc: "Estrutura para escalar mantendo margem e operação enxuta." },
];

const entrega = {
  calls: ["Estrutura", "Oferta", "Criativos", "Conversão", "Escala"],
  suporte: ["WhatsApp direto", "Acompanhamento semanal", "Sem intermediários"],
  bonus: ["Swipe file de criativos", "Templates de copy", "Estruturas de oferta", "Prompts de IA para criativo"],
};

const pagamentos = [
  { label: "PIX", icon: "⬡", sub: "Acesso imediato" },
  { label: "Cartão", icon: "▬", sub: "Até 12x sem juros" },
  { label: "Internacional", icon: "◈", sub: "USD / EUR" },
];

export default function MentoriaX1() {
  const whatsappLink = "https://wa.me/5511999999999?text=Fala+Gabriel%2C+acabei+de+preencher+a+aplica%C3%A7%C3%A3o+da+mentoria+X1.";

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: "#050507" }}>
      <BackgroundAtmosphere />
      <Navbar />

      {/* HERO */}
      <section className="relative z-10 min-h-screen flex items-center pt-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
          {/* Left */}
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
              Aprenda a estruturar{" "}
              <span style={{ color: "#A855F7", textShadow: "0 0 24px rgba(168,85,247,0.35)" }}>
                operações de X1
              </span>{" "}
              usando WhatsApp e low ticket.
            </h1>
            <p className="mb-10 leading-relaxed" style={{ color: "#9B9BA1", fontSize: "1.05rem" }}>
              O processo que utilizo para criar ofertas, validar criativos e transformar conversas em vendas.
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

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-96 lg:h-[480px]"
          >
            <FakeDashboard />
          </motion.div>
        </div>
      </section>

      {/* OBJETIVO */}
      <section className="relative z-10 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl"
            style={{ background: "#0D0D12", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(168,85,247,0.2)" }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2L11 7H16L12 10L14 15L9 12L4 15L6 10L2 7H7L9 2Z" stroke="#8B5CF6" strokeWidth="1.5" fill="none" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-semibold mb-3" style={{ color: "#A855F7", letterSpacing: "0.15em" }}>OBJETIVO DA MENTORIA</div>
                <p className="leading-relaxed text-base" style={{ color: "#F4F4F5" }}>
                  O objetivo da mentoria é te ajudar a construir uma operação simples, prática e lucrativa usando X1 e tráfego direto — sem complexidade desnecessária, sem fórmula mágica, com execução real.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MÓDULOS */}
      <section className="relative z-10 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
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

      {/* RESULTADOS */}
      <section className="relative z-10 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="text-xs font-semibold" style={{ color: "#A855F7", letterSpacing: "0.18em" }}>RESULTADOS</span>
            <h2 className="font-black mt-3" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#F4F4F5", letterSpacing: "-0.02em" }}>
              Métricas reais de operação
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { val: "4.2x", label: "ROAS médio" },
              { val: "R$42k", label: "Faturamento mensal" },
              { val: "7.1%", label: "Taxa de conversão" },
              { val: "+200", label: "Alunos treinados" },
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
                <div className="font-black text-3xl mb-1" style={{ color: "#A855F7", textShadow: "0 0 20px rgba(168,85,247,0.3)" }}>
                  {m.val}
                </div>
                <div className="text-xs" style={{ color: "#9B9BA1" }}>{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ RECEBE */}
      <section className="relative z-10 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="text-xs font-semibold" style={{ color: "#A855F7", letterSpacing: "0.18em" }}>ENTREGÁVEIS</span>
            <h2 className="font-black mt-3" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#F4F4F5", letterSpacing: "-0.02em" }}>
              O que você recebe
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "CALLS", items: entrega.calls },
              { title: "SUPORTE", items: entrega.suporte },
              { title: "BÔNUS", items: entrega.bonus },
            ].map((block, i) => (
              <motion.div
                key={block.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl"
                style={{ background: "#0D0D12", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div className="text-xs font-bold mb-4" style={{ color: "#A855F7", letterSpacing: "0.18em" }}>{block.title}</div>
                <ul className="space-y-3">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7L5.5 10.5L12 3.5" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-sm" style={{ color: "#9B9BA1" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PAGAMENTO */}
      <section className="relative z-10 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-black" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#F4F4F5", letterSpacing: "-0.02em" }}>
              Investimento — R$1.200
            </h2>
          </motion.div>
          <div className="grid grid-cols-3 gap-4 mb-10">
            {pagamentos.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-5 rounded-xl text-center"
                style={{ background: "#0D0D12", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div className="text-2xl mb-2">{p.icon}</div>
                <div className="font-bold text-sm mb-1" style={{ color: "#F4F4F5" }}>{p.label}</div>
                <div className="text-xs" style={{ color: "#9B9BA1" }}>{p.sub}</div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center">
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
          </div>
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
