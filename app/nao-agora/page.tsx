"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import BackgroundAtmosphere from "@/components/BackgroundAtmosphere";
import Navbar from "@/components/Navbar";

const beneficios = [
  "Sem limite de Calls, do básico ao avançado",
  "Processo completo: espionagem, oferta, criativo e X1 automático",
  "Suporte direto no WhatsApp comigo, sem intermediários",
  "Acompanhamento individual do zero até a escala",
];

export default function NaoAgoraPage() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden" style={{ backgroundColor: "#050507" }}>
      <BackgroundAtmosphere />
      <Navbar showEnter={false} />

      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-2 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full max-w-lg"
        >
          {/* Botão voltar */}
          <div className="mb-8">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium"
              style={{
                color: "#9B9BA1",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#F4F4F5";
                e.currentTarget.style.borderColor = "rgba(168,85,247,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#9B9BA1";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Voltar
            </button>
          </div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-center mb-10"
          >
            <span
              className="text-xs font-bold tracking-widest mb-4 block"
              style={{ color: "#9B9BA1", letterSpacing: "0.2em" }}
            >
              SEM PROBLEMA
            </span>
            <h1
              className="font-black leading-[1.05] mb-5"
              style={{ fontSize: "clamp(2.2rem, 6vw, 3.4rem)", color: "#F4F4F5", letterSpacing: "-0.02em" }}
            >
              Comece pelo{" "}
              <span style={{ color: "#A855F7", textShadow: "0 0 30px rgba(168,85,247,0.4)" }}>
                X1.
              </span>
            </h1>
            <p className="leading-relaxed" style={{ color: "#9B9BA1", fontSize: "1rem" }}>
              Menor investimento, mesmo acompanhamento individual. Você aprende o processo que uso para encontrar, montar e escalar ofertas de X1 — do zero ao automático.
            </p>
          </motion.div>

          {/* Card X1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="p-6 rounded-2xl"
            style={{
              background: "#0D0D12",
              border: "1px solid rgba(168,85,247,0.2)",
              boxShadow: "0 0 40px rgba(139,92,246,0.08)",
            }}
          >
            {/* Badge */}
            <span
              className="inline-block text-xs font-bold px-3 py-1.5 rounded-full mb-5"
              style={{
                color: "#A855F7",
                border: "1px solid rgba(168,85,247,0.3)",
                background: "rgba(168,85,247,0.08)",
                letterSpacing: "0.15em",
              }}
            >
              PORTA DE ENTRADA
            </span>

            {/* Title + price */}
            <div className="flex items-start justify-between gap-4 mb-3">
              <h2 className="font-black text-2xl leading-tight" style={{ color: "#F4F4F5", letterSpacing: "-0.01em" }}>
                MENTORIA X1
              </h2>
              <span className="font-black text-lg flex-shrink-0" style={{ color: "#A855F7" }}>
                R$ 1.200
              </span>
            </div>

            <p className="text-sm leading-relaxed mb-6" style={{ color: "#9B9BA1" }}>
              Não é tutorial de ferramenta. É o processo estruturado que uso para identificar o que está vendendo, montar estruturas de X1 e escalar operações do zero, mesmo sem saber de nada.
            </p>

            {/* Benefícios */}
            <ul className="space-y-3 mb-8">
              {beneficios.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(168,85,247,0.25)" }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M1.5 5L3.8 7.5L8.5 2.5" stroke="#A855F7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-sm leading-relaxed" style={{ color: "#9B9BA1" }}>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link href="/mentoria/x1">
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(168,85,247,0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2"
                style={{
                  background: "linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)",
                  color: "#fff",
                  boxShadow: "0 0 24px rgba(168,85,247,0.28)",
                  letterSpacing: "0.04em",
                }}
              >
                Ver Mentoria X1
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
