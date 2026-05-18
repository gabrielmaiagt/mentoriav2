"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useEffect } from "react";
import BackgroundAtmosphere from "@/components/BackgroundAtmosphere";
import Navbar from "@/components/Navbar";

const testimonialImages = [
  "https://i.ibb.co/rKBVR65Y/Save-Clip-App-658843720-17916309438340101-3104349415305175320-n.jpg",
  "https://i.ibb.co/h1164MG6/Save-Clip-App-658686897-17915940567340101-623432833824997573-n.jpg",
  "https://i.ibb.co/qYz1F8QF/Save-Clip-App-670880291-17916917487340101-2243092010908097548-n.jpg",
  "https://i.ibb.co/XkLY18JR/Save-Clip-App-674430304-17918142069340101-4152913410559866342-n.jpg",
];

export default function MentoriaTrafego() {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    if (dir === 1 && atEnd) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
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
      <section className="relative z-10 px-4 pt-1 pb-6">
        <div className="max-w-2xl mx-auto">
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
              Tráfego Direto com Facebook Ads do jeito certo.
            </h1>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1rem", lineHeight: "1.6" }}>
              Oferta, criativo, validação e escala usando Facebook Ads rodando tráfego direto.
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
            <div className="text-xs font-semibold mb-4" style={{ color: "#A855F7", letterSpacing: "0.15em" }}>OBJETIVO DA MENTORIA</div>
            <p className="leading-relaxed text-lg" style={{ color: "#F4F4F5" }}>
              Dominar as estruturas de tráfego direto no Facebook Ads — criar criativos que convertem, validar ofertas com investimento mínimo e escalar de forma previsível.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="relative z-10 py-6">
        <div className="max-w-2xl mx-auto px-4 flex flex-col gap-4">

          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ color: "#9B9BA1", fontSize: "1rem", lineHeight: "1.75" }}
          >
            Tráfego direto é a estrutura que mais gera escala no digital. Você encontra oferta, modela o criativo, e testa, validou? escala. Sem rodeios. Quem domina criativo e oferta, domina a operação.
          </motion.p>

          {/* Depoimentos */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}
          >
            <div className="flex items-center justify-between mb-4">
              <p className="font-black text-base" style={{ color: "#F4F4F5" }}>Resultados próprios:</p>
              <div className="flex gap-2">
                <button onClick={() => scrollBy(-1)} className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(168,85,247,0.3)" }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 2L4 7L9 12" stroke="#A855F7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <button onClick={() => scrollBy(1)} className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(168,85,247,0.3)" }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 2L10 7L5 12" stroke="#A855F7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
              </div>
            </div>
            <div ref={scrollRef} className="flex overflow-x-hidden" style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}>
              {testimonialImages.map((src, i) => (
                <div key={src} className="flex-shrink-0 px-3" style={{ width: "100%", scrollSnapAlign: "start" }}>
                  <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(168,85,247,0.15)" }}>
                    <img src={src} alt={`Resultado ${i + 1}`} className="w-full h-auto object-cover" loading="lazy" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bold statement */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="p-6 rounded-2xl"
            style={{ background: "#0D0D12", border: "1px solid rgba(255,255,255,0.09)" }}
          >
            <p className="font-black text-xl leading-tight mb-3" style={{ color: "#F4F4F5" }}>
              Você vai aprender a rodar tráfego que paga por si mesmo desde a primeira semana.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#9B9BA1" }}>
              Não é sobre gastar mais. É sobre entender qual criativo converte, qual oferta vende e quanto você pode escalar antes de queimar verba — e eu vou te ensinar a ler esses sinais.
            </p>
          </motion.div>

          {/* Numbered steps */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="p-6 rounded-2xl"
            style={{ background: "#0D0D12", border: "1px solid rgba(168,85,247,0.15)" }}
          >
            <p className="font-bold text-sm mb-4" style={{ color: "#A855F7", letterSpacing: "0.05em" }}>O processo completo em 5 etapas:</p>
            <ol className="flex flex-col gap-3">
              {[
                { n: "1", t: "Estrutura da conta", d: "configurar a conta de anúncios do zero para performance máxima desde o início" },
                { n: "2", t: "Criativo de DR", d: "como produzir criativos que escalam" },
                { n: "3", t: "Construção da oferta", d: "como escolher e montar ofertas vencedoras" },
                { n: "4", t: "Validação com pouco", d: "protocolo de teste de oferta com investimento mínimo antes de escalar" },
                { n: "5", t: "Escala da operação", d: "como escalar de forma simples" },
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

          {/* Destaque */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }}
            className="p-6 rounded-2xl text-sm leading-relaxed"
            style={{ background: "#0D0D12", border: "1px solid rgba(255,255,255,0.07)", color: "#9B9BA1" }}
          >
            Você vai sair sabendo usar o{" "}
            <span className="font-bold" style={{ color: "#F4F4F5" }}>Modelo de Tráfego Direto</span>
            , o critério que uso para decidir se uma oferta tem potencial: criativo validado + funil convertendo + margem para escala. Sem os três, não escalo prejuízo.
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
            <div className="flex items-start justify-between gap-3 mb-1">
              <h2 className="font-black text-xl" style={{ color: "#F4F4F5" }}>O que você vai receber:</h2>
              <span className="flex-shrink-0 text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: "rgba(168,85,247,0.15)", color: "#A855F7", border: "1px solid rgba(168,85,247,0.3)", letterSpacing: "0.1em" }}>INDIVIDUAL</span>
            </div>
            <p className="text-xs mb-6" style={{ color: "#9B9BA1" }}>Mentoria 1 a 1 diretamente com Gabriel Maia, do início ao fim.</p>

            <div className="mb-5">
              <p className="text-xs font-bold mb-3" style={{ color: "#A855F7", letterSpacing: "0.15em" }}>CALLS INDIVIDUAIS</p>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(168,85,247,0.3)" }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 5L3.8 7.5L8.5 2.5" stroke="#A855F7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span className="text-sm leading-snug" style={{ color: "#F4F4F5" }}>Sem limite de Calls, vamos do básico ao avançado, desde estruturar a conta, criar criativos, testar ofertas, analisar métricas, descartar ou escalar.</span>
              </div>
            </div>

            <div className="mb-5" style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "1.25rem" }}>
              <p className="text-xs font-bold mb-3" style={{ color: "#A855F7", letterSpacing: "0.15em" }}>SUPORTE & ACOMPANHAMENTO</p>
              <div className="flex flex-col gap-3">
                {["Suporte direto no WhatsApp comigo (Gabriel Maia) durante toda a mentoria", "Acompanhamento individual do zero até a escala", "Revisão de criativos, copy e estrutura em tempo real", "Calls Ilimitadas"].map((item) => (
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
                {["Conteúdo Gravado", "Biblioteca de criativos e ofertas validadas", "Funis prontos", "Contato de donos de gateway", "Descontos em BC e BM (ativos)", "Grupo de Networking privado", "Acesso vitalício ao material da mentoria"].map((item) => (
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
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="p-6 rounded-2xl"
            style={{ background: "#0D0D12", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <h2 className="font-black text-lg mb-5" style={{ color: "#F4F4F5", letterSpacing: "-0.01em" }}>Escolha sua forma de pagamento:</h2>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { tipo: "À VISTA", metodo: "Via PIX", preco: "R$ 1.500,00", detalhe: "sem juros" },
                { tipo: "PARCELADO", metodo: "Cartão", preco: "R$ 1.500,00", detalhe: "até 12x + juros" },
              ].map((p, i) => (
                <motion.div key={p.tipo} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="p-4 rounded-xl flex flex-col gap-1" style={{ background: "#13131A", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <span className="text-xs font-semibold" style={{ color: "#9B9BA1", letterSpacing: "0.12em" }}>{p.tipo}</span>
                  <span className="font-bold text-sm" style={{ color: "#F4F4F5" }}>{p.metodo}</span>
                  <span className="font-black text-base" style={{ color: "#A855F7" }}>{p.preco}</span>
                  <span className="text-xs" style={{ color: "#9B9BA1" }}>{p.detalhe}</span>
                </motion.div>
              ))}
            </div>
            <Link href="/aprovado">
              <motion.button whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(168,85,247,0.4)" }} whileTap={{ scale: 0.98 }} className="w-full py-4 rounded-xl font-bold text-base" style={{ background: "linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)", color: "#fff", boxShadow: "0 0 24px rgba(168,85,247,0.28)", letterSpacing: "0.04em" }}>
                Quero garantir minha vaga
              </motion.button>
            </Link>
            <Link href="/nao-agora">
              <p className="text-center text-sm mt-4 cursor-pointer" style={{ color: "#9B9BA1", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#F4F4F5")} onMouseLeave={(e) => (e.currentTarget.style.color = "#9B9BA1")}>
                Não estou com esse valor agora
              </p>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 pt-0 pb-10">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-xs font-bold mb-4" style={{ color: "#9B9BA1", letterSpacing: "0.2em" }}>DÚVIDAS FREQUENTES</p>
          <div className="p-6 rounded-2xl" style={{ background: "#0D0D12", border: "1px solid rgba(255,255,255,0.07)" }}>
            <p className="font-bold text-sm mb-2" style={{ color: "#F4F4F5" }}>Quanto de caixa preciso além do valor da mentoria?</p>
            <p className="text-sm leading-relaxed" style={{ color: "#9B9BA1" }}>Pelo menos R$1.000 de caixa.</p>
          </div>
        </div>
      </section>

      <div className="relative z-10 pb-8 flex justify-center">
        <span className="text-xs" style={{ color: "rgba(155,155,161,0.25)", letterSpacing: "0.1em" }}>ANTI-FLUXO © 2025 — ESTRUTURA PRIVADA</span>
      </div>
    </div>
  );
}
