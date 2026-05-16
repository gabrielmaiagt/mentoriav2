"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import BackgroundAtmosphere from "@/components/BackgroundAtmosphere";
import Navbar from "@/components/Navbar";
import ProgressBar from "@/components/ProgressBar";
import { saveLead } from "@/lib/firestore";

const TOTAL_STEPS = 5;

// ────────────────────────── helpers ──────────────────────────

function formatPhone(val: string) {
  const d = val.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 11) return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7, 11)}`;
}

function isValidPhone(val: string) {
  return val.replace(/\D/g, "").length >= 10;
}

// ────────────────────────── Step: Nome ──────────────────────────

function StepNome({ onNext }: { onNext: (nome: string) => void }) {
  const [nome, setNome] = useState("");

  return (
    <StepWrapper>
      <StepLabel>01 / 04</StepLabel>
      <StepTitle>Qual seu nome?</StepTitle>
      <StepSub>Vamos personalizar sua experiência.</StepSub>
      <motion.input
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && nome.trim().length >= 2 && onNext(nome.trim())}
        placeholder="Seu nome"
        autoFocus
        className="w-full max-w-md px-5 py-4 rounded-xl text-base outline-none"
        style={{
          background: "#0D0D12",
          border: "1px solid rgba(255,255,255,0.08)",
          color: "#F4F4F5",
          caretColor: "#A855F7",
        }}
        onFocus={(e) => (e.target.style.boxShadow = "0 0 0 2px rgba(168,85,247,0.35)")}
        onBlur={(e) => (e.target.style.boxShadow = "none")}
      />
      <StepCTA disabled={nome.trim().length < 2} onClick={() => onNext(nome.trim())}>
        Continuar
      </StepCTA>
    </StepWrapper>
  );
}

// ────────────────────────── Step: WhatsApp ──────────────────────────

function StepWhatsApp({ onNext }: { onNext: (phone: string) => void }) {
  const [raw, setRaw] = useState("");
  const formatted = formatPhone(raw);
  const valid = isValidPhone(formatted);

  return (
    <StepWrapper>
      <StepLabel>02 / 04</StepLabel>
      <StepTitle>Qual seu WhatsApp?</StepTitle>
      <StepSub>Seu contato será respondido diretamente por mim.</StepSub>
      <div className="w-full max-w-md relative">
        <motion.input
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          type="tel"
          value={formatted}
          onChange={(e) => setRaw(e.target.value.replace(/\D/g, ""))}
          onKeyDown={(e) => e.key === "Enter" && valid && onNext(formatted)}
          placeholder="(11) 99999-9999"
          autoFocus
          className="w-full px-5 py-4 rounded-xl text-base outline-none pr-12"
          style={{
            background: "#0D0D12",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "#F4F4F5",
            caretColor: "#A855F7",
          }}
          onFocus={(e) => (e.target.style.boxShadow = "0 0 0 2px rgba(168,85,247,0.35)")}
          onBlur={(e) => (e.target.style.boxShadow = "none")}
        />
        {valid && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute right-4 top-1/2 -translate-y-1/2"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="9" fill="rgba(139,92,246,0.15)" />
              <path d="M5 9L8 12L13 6" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        )}
      </div>
      <StepCTA disabled={!valid} onClick={() => onNext(formatted)}>
        Continuar
      </StepCTA>
    </StepWrapper>
  );
}

// ────────────────────────── Step: Mentalidade ──────────────────────────

const checkItems = [
  "Entendo que resultados dependem de execução",
  "Não estou procurando fórmula mágica",
  "Não existe garantia de resultado no digital: existe consistência ou ausência dela",
  "Tenho caixa para a mentoria e para a operação",
];

function StepMentalidade({ onNext }: { onNext: () => void }) {
  const [checked, setChecked] = useState<boolean[]>(new Array(checkItems.length).fill(false));
  const allChecked = checked.every(Boolean);

  const toggle = (i: number) => {
    setChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
  };

  return (
    <StepWrapper>
      <StepLabel>03 / 05</StepLabel>
      <StepTitle>Confirme seu perfil</StepTitle>
      <StepSub>Confirme os pontos abaixo.</StepSub>
      <div className="w-full max-w-md space-y-3">
        {checkItems.map((item, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.08 }}
            onClick={() => toggle(i)}
            className="w-full flex items-center gap-4 px-5 py-4 rounded-xl text-left"
            style={{
              background: checked[i] ? "rgba(139,92,246,0.1)" : "#0D0D12",
              border: `1px solid ${checked[i] ? "rgba(168,85,247,0.35)" : "rgba(255,255,255,0.07)"}`,
              transition: "all 0.2s ease",
            }}
          >
            <div
              className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0"
              style={{
                background: checked[i] ? "linear-gradient(135deg, #8B5CF6, #A855F7)" : "rgba(255,255,255,0.04)",
                border: checked[i] ? "none" : "1px solid rgba(255,255,255,0.12)",
                boxShadow: checked[i] ? "0 0 10px rgba(168,85,247,0.4)" : "none",
                transition: "all 0.2s ease",
              }}
            >
              {checked[i] && (
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                  <path d="M2 5.5L4.5 8L9 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <span className="text-sm font-medium" style={{ color: checked[i] ? "#F4F4F5" : "#9B9BA1" }}>
              {item}
            </span>
          </motion.button>
        ))}
      </div>
      <StepCTA disabled={!allChecked} onClick={onNext}>
        {allChecked ? "Continuar" : "Marque todos para continuar"}
      </StepCTA>
    </StepWrapper>
  );
}

// ────────────────────────── Step: Nível ──────────────────────────

const niveis = [
  { id: "iniciante", label: "Totalmente iniciante" },
  { id: "basico", label: "Sei o básico" },
  { id: "fatura", label: "Já faturo mas não escalo" },
  { id: "escala", label: "Escalo mas tenho gargalos" },
];

function StepNivel({ onNext }: { onNext: (nivel: string) => void }) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <StepWrapper>
      <StepLabel>04 / 05</StepLabel>
      <StepTitle>Qual é o seu nível de experiência no mercado digital?</StepTitle>
      <StepSub>Relaxa, pra você que é topo de funil ainda tem salvação.</StepSub>
      <div className="w-full max-w-md space-y-3">
        {niveis.map((n, i) => (
          <motion.button
            key={n.id}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + i * 0.07 }}
            onClick={() => setSelected(n.id)}
            className="w-full flex items-center gap-4 px-5 py-4 rounded-xl text-left"
            style={{
              background: selected === n.id ? "rgba(139,92,246,0.1)" : "#0D0D12",
              border: `1px solid ${selected === n.id ? "rgba(168,85,247,0.35)" : "rgba(255,255,255,0.07)"}`,
              transition: "all 0.2s ease",
            }}
          >
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
              style={{
                background: selected === n.id ? "linear-gradient(135deg, #8B5CF6, #A855F7)" : "rgba(255,255,255,0.04)",
                border: selected === n.id ? "none" : "1px solid rgba(255,255,255,0.12)",
                boxShadow: selected === n.id ? "0 0 10px rgba(168,85,247,0.4)" : "none",
                transition: "all 0.2s ease",
              }}
            >
              {selected === n.id && (
                <div className="w-2 h-2 rounded-full" style={{ background: "#fff" }} />
              )}
            </div>
            <span className="text-sm font-medium" style={{ color: selected === n.id ? "#F4F4F5" : "#9B9BA1" }}>
              {n.label}
            </span>
          </motion.button>
        ))}
      </div>
      <StepCTA disabled={!selected} onClick={() => selected && onNext(selected)}>
        Continuar
      </StepCTA>
    </StepWrapper>
  );
}

// ────────────────────────── Step: Escolha ──────────────────────────

const mentorias = [
  {
    id: "x1",
    title: "Mentoria X1",
    description: "Aprenda a vender low ticket usando WhatsApp, criativos e estrutura simples.",
    price: "R$1.200",
    tags: ["Conversão", "WhatsApp", "Low Ticket"],
    locked: false,
  },
  {
    id: "tiktok",
    title: "Mentoria TikTok Ads & Tráfego Direto",
    description: "Oferta, criativo, validação e escala usando TikTok Ads.",
    price: "R$1.500",
    tags: ["Escala", "TikTok", "Validação"],
    locked: false,
  },
  {
    id: "scale",
    title: "Scale & Backend",
    description: "Recorrência, backend e operações escaláveis.",
    price: "Em breve",
    tags: ["Recorrência", "Backend", "Escala"],
    locked: true,
  },
];

function StepEscolha({ onNext }: { onNext: (id: string) => void }) {
  return (
    <StepWrapper wide>
      <StepLabel>05 / 05</StepLabel>
      <StepTitle>Escolha seu foco</StepTitle>
      <StepSub>Cada mentoria possui um objetivo específico.</StepSub>
      <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-3 gap-4">
        {mentorias.map((m, i) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            whileHover={!m.locked ? { y: -4, boxShadow: "0 0 30px rgba(168,85,247,0.2)" } : undefined}
            onClick={() => !m.locked && onNext(m.id)}
            className="flex flex-col p-6 rounded-2xl relative overflow-hidden"
            style={{
              background: "#0D0D12",
              border: `1px solid ${m.locked ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.08)"}`,
              cursor: m.locked ? "not-allowed" : "pointer",
              opacity: m.locked ? 0.5 : 1,
              transition: "all 0.25s ease",
            }}
          >
            {m.locked && (
              <div
                className="absolute top-3 right-3 text-xs px-2.5 py-1 rounded-full font-semibold"
                style={{ background: "rgba(255,255,255,0.06)", color: "#9B9BA1", letterSpacing: "0.06em" }}
              >
                Em breve
              </div>
            )}
            <div className="flex-1">
              <h3 className="font-bold text-base mb-2" style={{ color: "#F4F4F5" }}>
                {m.title}
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#9B9BA1" }}>
                {m.description}
              </p>
            </div>
            <div className="flex items-center justify-between mt-auto pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <span className="font-bold text-lg" style={{ color: m.locked ? "#9B9BA1" : "#F4F4F5" }}>
                {m.price}
              </span>
              {!m.locked && (
                <span
                  className="text-sm font-semibold px-4 py-1.5 rounded-lg"
                  style={{ background: "linear-gradient(135deg, #8B5CF6, #A855F7)", color: "#fff" }}
                >
                  Selecionar
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </StepWrapper>
  );
}

// ────────────────────────── Shared UI ──────────────────────────

function StepWrapper({ children, wide }: { children: React.ReactNode; wide?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      exit={{ opacity: 0, filter: "blur(8px)", y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`flex flex-col items-center text-center gap-6 ${wide ? "max-w-3xl" : "max-w-md"} w-full`}
    >
      {children}
    </motion.div>
  );
}

function StepLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs font-mono" style={{ color: "rgba(168,85,247,0.6)", letterSpacing: "0.15em" }}>
      {children}
    </span>
  );
}

function StepTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="font-black leading-tight"
      style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "#F4F4F5", letterSpacing: "-0.02em" }}
    >
      {children}
    </h2>
  );
}

function StepSub({ children }: { children: React.ReactNode }) {
  return (
    <p className="-mt-2" style={{ color: "#9B9BA1", fontSize: "1rem" }}>
      {children}
    </p>
  );
}

function StepCTA({ children, disabled, onClick }: { children: React.ReactNode; disabled?: boolean; onClick: () => void }) {
  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.02, boxShadow: "0 0 30px rgba(168,85,247,0.35)" } : undefined}
      whileTap={!disabled ? { scale: 0.98 } : undefined}
      onClick={onClick}
      disabled={disabled}
      className="px-10 py-4 rounded-xl font-bold text-base mt-2"
      style={{
        background: disabled
          ? "rgba(139,92,246,0.15)"
          : "linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)",
        color: disabled ? "rgba(255,255,255,0.3)" : "#fff",
        cursor: disabled ? "not-allowed" : "pointer",
        boxShadow: disabled ? "none" : "0 0 20px rgba(168,85,247,0.2)",
        letterSpacing: "0.04em",
        transition: "all 0.2s ease",
      }}
    >
      {children}
    </motion.button>
  );
}

// ────────────────────────── Main Page ──────────────────────────

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [nivel, setNivel] = useState("");

  const handleNome = useCallback((n: string) => {
    setNome(n);
    setStep(2);
  }, []);

  const handlePhone = useCallback((p: string) => {
    setTelefone(p);
    setStep(3);
  }, []);

  const handleMentalidade = useCallback(() => {
    setStep(4);
  }, []);

  const handleNivel = useCallback((n: string) => {
    setNivel(n);
    setStep(5);
  }, []);

  const handleMentoria = useCallback(
    async (id: string) => {
      try {
        await saveLead({
          nome,
          telefone,
          mentoria: id,
          status: "Novo",
          etapaAtual: "escolha",
        });
      } catch (e) {
        console.error("Firestore error:", e);
      }
      router.push(`/mentoria/${id}`);
    },
    [nome, telefone, router]
  );

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden" style={{ backgroundColor: "#050507" }}>
      <BackgroundAtmosphere />
      <ProgressBar current={step} total={TOTAL_STEPS} />
      <Navbar showEnter={false} />

      {/* Botão voltar */}
      {step > 1 && (
        <motion.button
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setStep((s) => s - 1)}
          className="fixed top-16 left-6 z-40 flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium"
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
        </motion.button>
      )}

      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-20 pb-16 min-h-screen">
        <AnimatePresence mode="wait">
          {step === 1 && <StepNome key="nome" onNext={handleNome} />}
          {step === 2 && <StepWhatsApp key="phone" onNext={handlePhone} />}
          {step === 3 && <StepMentalidade key="mental" onNext={handleMentalidade} />}
          {step === 4 && <StepNivel key="nivel" onNext={handleNivel} />}
          {step === 5 && <StepEscolha key="escolha" onNext={handleMentoria} />}
        </AnimatePresence>
      </main>
    </div>
  );
}
