"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import BackgroundAtmosphere from "@/components/BackgroundAtmosphere";
import Navbar from "@/components/Navbar";

const WA_NUMBER = "5571991511702";

export default function AprovadoPage() {
  const router = useRouter();
  const [primeiroNome, setPrimeiroNome] = useState("");

  useEffect(() => {
    const nome = sessionStorage.getItem("lead_nome") || "";
    setPrimeiroNome(nome.trim().split(" ")[0]);
  }, []);

  const handleWhatsApp = () => {
    const msg = primeiroNome
      ? `Fala+Gabriel%2C+sou+${encodeURIComponent(primeiroNome)}+e+acabei+de+preencher+a+aplica%C3%A7%C3%A3o+da+mentoria.`
      : "Fala+Gabriel%2C+acabei+de+preencher+a+aplica%C3%A7%C3%A3o+da+mentoria.";
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden" style={{ backgroundColor: "#050507" }}>
      <BackgroundAtmosphere />
      <Navbar showEnter={false} />

      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-2 pb-16 min-h-screen">
        <div className="w-full max-w-lg mb-6">
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
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-lg"
        >
          {/* Approved badge */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-8"
          >
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{
                background: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(34,197,94,0.05) 100%)",
                border: "1px solid rgba(34,197,94,0.3)",
                boxShadow: "0 0 40px rgba(34,197,94,0.2)",
              }}
            >
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M7 18L14.5 25.5L29 10.5" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span
              className="inline-block text-xs font-bold px-4 py-1.5 rounded-full"
              style={{
                color: "#22C55E",
                border: "1px solid rgba(34,197,94,0.25)",
                background: "rgba(34,197,94,0.08)",
                letterSpacing: "0.2em",
              }}
            >
              PERFIL APROVADO
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="font-black mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "#F4F4F5", letterSpacing: "-0.02em" }}
          >
            {primeiroNome ? `${primeiroNome}, sua aplicação foi aprovada.` : "Sua aplicação foi aprovada."}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mb-10 leading-relaxed"
            style={{ color: "#9B9BA1", fontSize: "1rem" }}
          >
            Agora é só me chamar no WhatsApp para conversarmos sobre sua operação.
          </motion.p>

          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="w-full p-6 rounded-2xl mb-8"
            style={{
              background: "#0D0D12",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 0 40px rgba(139,92,246,0.08)",
            }}
          >
            <div className="flex items-center gap-4 mb-6">
              {/* Avatar */}
              <div
                className="w-14 h-14 rounded-full flex-shrink-0 overflow-hidden"
                style={{
                  boxShadow: "0 0 20px rgba(168,85,247,0.35)",
                  border: "2px solid rgba(168,85,247,0.3)",
                }}
              >
                <img src="https://i.ibb.co/JFRGZKPw/eu.png" alt="Gabriel Maia" className="w-full h-full object-cover" />
              </div>
              <div className="text-left">
                <div className="font-bold text-base" style={{ color: "#F4F4F5" }}>Gabriel Maia</div>
                <div className="text-xs mt-0.5" style={{ color: "#9B9BA1" }}>X1 · TikTok Ads · Tráfego Direto</div>
              </div>
            </div>

            <div className="space-y-3">
              {[
                "Resposta direta comigo",
                "Acompanhamento individual",
                "Sem intermediários",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7L5.5 10.5L12 3.5" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-sm" style={{ color: "#9B9BA1" }}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* WhatsApp Button */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7 }}
            className="w-full"
          >
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(37,211,102,0.35)" }}
              whileTap={{ scale: 0.97 }}
              onClick={handleWhatsApp}
              className="w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-3"
              style={{
                background: "linear-gradient(135deg, #128C7E 0%, #25D366 100%)",
                color: "#fff",
                boxShadow: "0 0 24px rgba(37,211,102,0.2)",
                letterSpacing: "0.04em",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Conversar no WhatsApp
            </motion.button>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
