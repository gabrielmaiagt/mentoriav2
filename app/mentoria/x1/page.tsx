"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useEffect } from "react";
import BackgroundAtmosphere from "@/components/BackgroundAtmosphere";
import Navbar from "@/components/Navbar";
import { CircularGauge, AreaChart, MiniBarChart, ProgressRow } from "@/components/DashboardWidget";

function FakeDashboard() {
  return (
    <div className="w-full h-full flex flex-col gap-3">
      {/* Row 1 */}
      <div className="grid grid-cols-2 gap-3 flex-shrink-0">
        {/* Vendas */}
        <div className="p-4 rounded-2xl" style={{ background: "#0D0D12", border: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(139,92,246,0.15)" }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1.5v11M3.5 5l3.5-3.5L10.5 5" stroke="#8B5CF6" strokeWidth="1.4" strokeLinecap="round"/></svg>
            </div>
            <span className="text-xs font-semibold" style={{ color: "#9B9BA1" }}>Vendas Aprovadas</span>
          </div>
          <div className="font-black text-xl mb-2" style={{ color: "#F4F4F5" }}>R$ 8.420,00</div>
          <div className="h-1 rounded-full mb-1.5" style={{ background: "rgba(255,255,255,0.06)" }}>
            <div className="h-full rounded-full" style={{ width: "42%", background: "linear-gradient(90deg,#8B5CF6,#A855F7)" }} />
          </div>
          <span className="text-xs" style={{ color: "#9B9BA1" }}>42% Aprovação</span>
        </div>

        {/* Conversão gauge */}
        <div className="p-4 rounded-2xl flex flex-col" style={{ background: "#0D0D12", border: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(139,92,246,0.15)" }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 10l3-3 2 2 5-6" stroke="#8B5CF6" strokeWidth="1.4" strokeLinecap="round"/></svg>
            </div>
            <span className="text-xs font-semibold" style={{ color: "#9B9BA1" }}>Taxa de Conversão</span>
          </div>
          <div className="flex-1 flex items-center justify-center -mt-1">
            <CircularGauge value={33.95} label="Conv." sub="110 pagos de 324" />
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-2 gap-3 flex-shrink-0">
        {/* Total Starts */}
        <div className="p-4 rounded-2xl" style={{ background: "#0D0D12", border: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(139,92,246,0.15)" }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2l1.2 3.6H12l-3 2.2 1.1 3.6L7 9.2l-3.1 2.2 1.1-3.6-3-2.2h3.8L7 2z" stroke="#8B5CF6" strokeWidth="1.2" fill="none"/></svg>
            </div>
            <span className="text-xs font-semibold" style={{ color: "#9B9BA1" }}>Total Starts</span>
          </div>
          <div className="font-black text-2xl" style={{ color: "#F4F4F5" }}>3.6k</div>
          <p className="text-xs mt-0.5" style={{ color: "#9B9BA1" }}>leads iniciaram conversa</p>
          <p className="text-xs" style={{ color: "#9B9BA1" }}>33 starts por venda</p>
          <MiniBarChart data={[30, 55, 80]} />
        </div>

        {/* Ticket Médio */}
        <div className="p-4 rounded-2xl" style={{ background: "#0D0D12", border: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(139,92,246,0.15)" }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="2" y="4.5" width="10" height="6.5" rx="1.2" stroke="#8B5CF6" strokeWidth="1.2"/><path d="M4.5 4.5V3.5a2.5 2.5 0 015 0v1" stroke="#8B5CF6" strokeWidth="1.2"/></svg>
            </div>
            <span className="text-xs font-semibold" style={{ color: "#9B9BA1" }}>Ticket Médio</span>
          </div>
          <div className="font-black text-2xl mb-1" style={{ color: "#F4F4F5" }}>R$ 15,00</div>
          <p className="text-xs mb-3" style={{ color: "#9B9BA1" }}>Vendas: R$ 8.420,00</p>
          <ProgressRow label="PIX Pagos" value={110} total={442} />
        </div>
      </div>

      {/* Area chart */}
      <div className="flex-1 p-4 rounded-2xl min-h-[130px]" style={{ background: "#0D0D12", border: "1px solid rgba(255,255,255,0.06)" }}>
        <AreaChart data={[12, 18, 25, 38, 52, 60, 42]} title="Seu Desempenho" subtitle="ÚLTIMOS 7 DIAS" />
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
  { tipo: "À VISTA", metodo: "Via PIX", preco: "R$ 1.200,00", detalhe: "sem juros" },
  { tipo: "PARCELADO", metodo: "Cartão", preco: "R$ 1.200,00", detalhe: "até 12x + juros" },
];

export default function MentoriaX1() {
  const router = useRouter();
  const whatsappLink = "https://wa.me/5571991511702?text=Fala+Gabriel%2C+acabei+de+preencher+a+aplica%C3%A7%C3%A3o+da+mentoria+X1.";
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const itemWidth = el.clientWidth;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    if (dir === 1 && atEnd) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      el.scrollBy({ left: dir * itemWidth, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const id = setInterval(() => scrollBy(1), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: "#050507" }}>
      <BackgroundAtmosphere />
      <Navbar showEnter={false} />

      {/* HERO */}
      {/* HERO */}
      <section className="relative z-10 px-4 pt-1 pb-6">
        <div className="max-w-2xl mx-auto">
          {/* Botão voltar */}
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium mb-4"
            style={{ color: "#9B9BA1", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", transition: "all 0.2s ease" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#F4F4F5"; e.currentTarget.style.borderColor = "rgba(168,85,247,0.3)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#9B9BA1"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Voltar
          </button>

          {/* Hero card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full rounded-2xl p-8"
            style={{
              background: "linear-gradient(135deg, #5B21B6 0%, #7C3AED 50%, #9333EA 100%)",
              boxShadow: "0 0 60px rgba(139,92,246,0.3), 0 20px 40px rgba(0,0,0,0.4)",
            }}
          >
            <span className="text-xs font-bold tracking-widest block mb-4" style={{ color: "rgba(255,255,255,0.6)", letterSpacing: "0.22em" }}>
              MENTORIA INDIVIDUAL
            </span>
            <h1
              className="font-black uppercase leading-[0.95] mb-5"
              style={{ fontSize: "clamp(2rem, 5.5vw, 3.4rem)", color: "#fff", letterSpacing: "-0.01em" }}
            >
              Aprenda a escalar low ticket pelo WhatsApp.
            </h1>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1rem", lineHeight: "1.6" }}>
              O processo que utilizo para criar/modelar ofertas, validar criativos e transformar conversas em vendas — do zero a escala de forma automática.
            </p>
          </motion.div>
        </div>
      </section>

      {/* OBJETIVO */}
      <section className="relative z-10 pt-4 pb-4">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-10 rounded-2xl"
            style={{ background: "#0D0D12", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <div>
              <div className="text-xs font-semibold mb-4" style={{ color: "#A855F7", letterSpacing: "0.15em" }}>OBJETIVO DA MENTORIA</div>
              <p className="leading-relaxed text-lg" style={{ color: "#F4F4F5" }}>
                Saber exatamente o que está funcionando no mercado, onde estão as melhores ofertas de X1, e como montar e escalar elas.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="relative z-10 py-6">
        <div className="max-w-2xl mx-auto px-4 flex flex-col gap-4">

          {/* Statement bold */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="p-6 rounded-2xl"
            style={{ background: "#0D0D12", border: "1px solid rgba(255,255,255,0.09)" }}
          >
            <p className="font-black text-xl leading-tight mb-3" style={{ color: "#F4F4F5" }}>
              Você vai copiar e colar o processo que uso para encontrar, montar e escalar ofertas de X1.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#9B9BA1" }}>
              Não é tutorial de ferramenta. É o processo estruturado que uso para identificar o que está vendendo, montar estruturas de X1 e escalar operações do zero, mesmo sem saber de nada.
            </p>
          </motion.div>

          {/* Numbered list */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="p-6 rounded-2xl"
            style={{ background: "#0D0D12", border: "1px solid rgba(168,85,247,0.15)" }}
          >
            <p className="font-bold text-sm mb-4" style={{ color: "#A855F7", letterSpacing: "0.05em" }}>O processo completo em 5 etapas:</p>
            <ol className="flex flex-col gap-3">
              {[
                { n: "1", t: "Espionagem de mercado", d: "como identificar as melhores ofertas de X1 que já estão vendendo agora" },
                { n: "2", t: "Modelagem de oferta", d: "como estruturar ou modelar uma oferta validada" },
                { n: "3", t: "Criativo e copy", d: "como criar criativos que convertem direto em PIX" },
                { n: "4", t: "X1 Automático", d: "como montar a estrutura automática de atendimento" },
                { n: "5", t: "Escala", d: "como escalar a operação mantendo consistência e volume crescente" },
              ].map((item) => (
                <li key={item.n} className="flex gap-3 text-sm">
                  <span className="font-black flex-shrink-0 mt-0.5" style={{ color: "#A855F7" }}>{item.n}</span>
                  <span style={{ color: "#F4F4F5" }}>
                    <span className="font-bold">{item.t}</span>
                    <span style={{ color: "#9B9BA1" }}> — {item.d}</span>
                  </span>
                </li>
              ))}
            </ol>
          </motion.div>

          {/* Dois stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { val: "X1", sub: "em 3 camadas", detail: "Oferta · Criativo · Estrutura" },
              { val: "100%", sub: "em call ao vivo", detail: "Sem teoria, apenas execução" },
            ].map((s) => (
              <div key={s.val} className="p-5 rounded-2xl text-center" style={{ background: "#0D0D12", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="font-black text-2xl mb-1" style={{ color: "#A855F7", textShadow: "0 0 20px rgba(168,85,247,0.3)" }}>{s.val}</div>
                <div className="text-xs mb-1" style={{ color: "#9B9BA1" }}>{s.sub}</div>
                <div className="text-xs font-semibold" style={{ color: "#F4F4F5" }}>{s.detail}</div>
              </div>
            ))}
          </motion.div>

          {/* Destaque */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="p-6 rounded-2xl text-sm leading-relaxed"
            style={{ background: "#0D0D12", border: "1px solid rgba(255,255,255,0.07)", color: "#9B9BA1" }}
          >
            Você vai sair sabendo usar o{" "}
            <span className="font-bold" style={{ color: "#F4F4F5" }}>Modelo de Escala X1</span>
            , o critério que uso escalar uma oferta: produto validado + criativos + otimização de tráfego. Sem os três, não escalo.
          </motion.div>

          {/* Resultados */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }}
          >
            <div className="flex items-center justify-between mb-4">
              <p className="font-black text-base" style={{ color: "#F4F4F5" }}>Resultados de alguns mentorados:</p>
              <div className="flex gap-2">
                <button
                  onClick={() => scrollBy(-1)}
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(168,85,247,0.3)" }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M9 2L4 7L9 12" stroke="#A855F7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  onClick={() => scrollBy(1)}
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(168,85,247,0.3)" }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M5 2L10 7L5 12" stroke="#A855F7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
            <div
              ref={scrollRef}
              className="flex overflow-x-hidden"
              style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}
            >
              {[
                "https://i.ibb.co/1tkjjT1n/Save-Clip-App-685894004-17920793895340101-1700549608471310422-n.jpg",
                "https://i.ibb.co/tMrK0rG8/Save-Clip-App-660369017-941106755565644-7463305788263116484-n.jpg",
                "https://i.ibb.co/VYZYPPNs/Save-Clip-App-635584748-17908736562340101-4905395495611671153-n.jpg",
                "https://i.ibb.co/f3GHZzx/Save-Clip-App-632053908-1476717627353969-2836410643815293693-n.jpg",
                "https://i.ibb.co/B254pYn6/Save-Clip-App-618818696-17905051743340101-7188233592841734001-n.jpg",
                "https://i.ibb.co/p60HRGcP/Save-Clip-App-682988616-17919895992340101-5332141842287777356-n.jpg",
              ].map((src, i) => (
                <div
                  key={src}
                  className="flex-shrink-0 px-3"
                  style={{ width: "100%", scrollSnapAlign: "start" }}
                >
                  <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(168,85,247,0.15)" }}>
                    <img
                      src={src}
                      alt={`Depoimento ${i + 1}`}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* O QUE VOCÊ VAI RECEBER */}
      <section className="relative z-10 py-6">
        <div className="max-w-2xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="p-6 rounded-2xl"
            style={{ background: "#0D0D12", border: "1px solid rgba(255,255,255,0.09)" }}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-3 mb-1">
              <h2 className="font-black text-xl" style={{ color: "#F4F4F5" }}>O que você vai receber:</h2>
              <span className="flex-shrink-0 text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: "rgba(168,85,247,0.15)", color: "#A855F7", border: "1px solid rgba(168,85,247,0.3)", letterSpacing: "0.1em" }}>
                INDIVIDUAL
              </span>
            </div>
            <p className="text-xs mb-6" style={{ color: "#9B9BA1" }}>Mentoria 1 a 1 diretamente com Gabriel Maia, do início ao fim.</p>

            {/* CALLS */}
            <div className="mb-5">
              <p className="text-xs font-bold mb-3" style={{ color: "#A855F7", letterSpacing: "0.15em" }}>CALLS INDIVIDUAIS</p>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(168,85,247,0.3)" }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 5L3.8 7.5L8.5 2.5" stroke="#A855F7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span className="text-sm leading-snug" style={{ color: "#F4F4F5" }}>Sem limite de Calls, vamos do básico ao avançado, desde achar uma oferta, modelar, fazer criativos, testar, analisar métricas, descartar ou escalar elas.</span>
              </div>
            </div>

            <div className="mb-5" style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "1.25rem" }}>
              <p className="text-xs font-bold mb-3" style={{ color: "#A855F7", letterSpacing: "0.15em" }}>SUPORTE & ACOMPANHAMENTO</p>
              <div className="flex flex-col gap-3">
                {[
                  "Suporte direto no WhatsApp comigo (Gabriel Maia) durante toda a mentoria",
                  "Acompanhamento individual do zero até a escala",
                  "Revisão de criativos, copy e estrutura em tempo real",
                  "Calls Ilimitadas",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(168,85,247,0.3)" }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 5L3.8 7.5L8.5 2.5" stroke="#A855F7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <span className="text-sm leading-snug" style={{ color: "#F4F4F5" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "1.25rem" }}>
              <p className="text-xs font-bold mb-3" style={{ color: "#A855F7", letterSpacing: "0.15em" }}>FERRAMENTAS & BÔNUS</p>
              <div className="flex flex-col gap-3">
                {[
                  "Conteúdo Gravado",
                  "Biblioteca de ofertas validadas para modelagem",
                  "Funis prontos",
                  "Grupo de Networking privado",
                  "Acesso vitalício ao material da mentoria",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(168,85,247,0.3)" }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 5L3.8 7.5L8.5 2.5" stroke="#A855F7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <span className="text-sm leading-snug" style={{ color: "#F4F4F5" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PAGAMENTO */}
      <section className="relative z-10 pt-4 pb-12">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-2xl"
            style={{ background: "#0D0D12", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <h2 className="font-black text-lg mb-5" style={{ color: "#F4F4F5", letterSpacing: "-0.01em" }}>
              Escolha sua forma de pagamento:
            </h2>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {pagamentos.map((p, i) => (
                <motion.div
                  key={p.tipo}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-4 rounded-xl flex flex-col gap-1"
                  style={{ background: "#13131A", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <span className="text-xs font-semibold" style={{ color: "#9B9BA1", letterSpacing: "0.12em" }}>{p.tipo}</span>
                  <span className="font-bold text-sm" style={{ color: "#F4F4F5" }}>{p.metodo}</span>
                  <span className="font-black text-base" style={{ color: "#A855F7" }}>{p.preco}</span>
                  <span className="text-xs" style={{ color: "#9B9BA1" }}>{p.detalhe}</span>
                </motion.div>
              ))}
            </div>
            <Link href="/aprovado">
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(168,85,247,0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl font-bold text-base"
                style={{
                  background: "linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)",
                  color: "#fff",
                  boxShadow: "0 0 24px rgba(168,85,247,0.28)",
                  letterSpacing: "0.04em",
                }}
              >
                Quero garantir minha vaga
              </motion.button>
            </Link>
            <a
              href="https://area.gabrielmaia.site"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-sm mt-4 cursor-pointer"
              style={{ color: "#9B9BA1", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F4F4F5")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9B9BA1")}
            >
              Não estou com esse valor agora
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 pt-0 pb-10">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-xs font-bold mb-4" style={{ color: "#9B9BA1", letterSpacing: "0.2em" }}>DÚVIDAS FREQUENTES</p>
          <div
            className="p-6 rounded-2xl"
            style={{ background: "#0D0D12", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <p className="font-bold text-sm mb-2" style={{ color: "#F4F4F5" }}>Quanto de caixa preciso além do valor da mentoria?</p>
            <p className="text-sm leading-relaxed" style={{ color: "#9B9BA1" }}>Pelo menos R$1.000 de caixa.</p>
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
