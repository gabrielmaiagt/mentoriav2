"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import BackgroundAtmosphere from "@/components/BackgroundAtmosphere";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const credential = await signInWithEmailAndPassword(auth, email, password);
      // Troca o idToken por um cookie de sessão httpOnly gerenciado pelo servidor
      const idToken = await credential.user.getIdToken();
      const res = await fetch("/api/auth/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken }),
      });
      if (!res.ok) throw new Error("session");
      router.push("/admin/dashboard");
    } catch {
      setError("Credenciais inválidas. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    background: "#0D0D12",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "#F4F4F5",
    caretColor: "#A855F7",
    outline: "none",
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center" style={{ backgroundColor: "#050507" }}>
      <BackgroundAtmosphere />
      <motion.div
        initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-sm px-4"
      >
        {/* Logo */}
        <div className="flex items-center gap-3 justify-center mb-10">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #8B5CF6, #A855F7)", boxShadow: "0 0 16px rgba(168,85,247,0.4)" }}
          >
            <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
              <path d="M2 2L7 7L12 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M2 7L7 12L12 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
            </svg>
          </div>
          <span className="font-bold tracking-widest text-sm" style={{ color: "#F4F4F5", letterSpacing: "0.18em" }}>ANTI-FLUXO</span>
        </div>

        {/* Card */}
        <div className="p-8 rounded-2xl" style={{ background: "#0D0D12", border: "1px solid rgba(255,255,255,0.07)" }}>
          <div className="mb-8">
            <h1 className="font-black text-2xl mb-1" style={{ color: "#F4F4F5", letterSpacing: "-0.01em" }}>Admin</h1>
            <p className="text-sm" style={{ color: "#9B9BA1" }}>Acesso restrito ao painel de operação.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-xs font-medium block mb-2" style={{ color: "#9B9BA1", letterSpacing: "0.06em" }}>EMAIL</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@antifluxo.com"
                required
                className="w-full px-4 py-3.5 rounded-xl text-sm"
                style={inputStyle}
                onFocus={(e) => (e.target.style.boxShadow = "0 0 0 2px rgba(168,85,247,0.35)")}
                onBlur={(e) => (e.target.style.boxShadow = "none")}
              />
            </div>
            <div>
              <label className="text-xs font-medium block mb-2" style={{ color: "#9B9BA1", letterSpacing: "0.06em" }}>SENHA</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full px-4 py-3.5 rounded-xl text-sm"
                style={inputStyle}
                onFocus={(e) => (e.target.style.boxShadow = "0 0 0 2px rgba(168,85,247,0.35)")}
                onBlur={(e) => (e.target.style.boxShadow = "none")}
              />
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xs text-center py-2 px-3 rounded-lg"
                style={{ color: "#EF4444", background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)" }}
              >
                {error}
              </motion.p>
            )}

            <motion.button
              whileHover={!loading ? { scale: 1.02, boxShadow: "0 0 30px rgba(168,85,247,0.35)" } : undefined}
              whileTap={!loading ? { scale: 0.98 } : undefined}
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl font-bold text-sm mt-2"
              style={{
                background: loading ? "rgba(139,92,246,0.3)" : "linear-gradient(135deg, #8B5CF6, #A855F7)",
                color: loading ? "rgba(255,255,255,0.5)" : "#fff",
                cursor: loading ? "not-allowed" : "pointer",
                letterSpacing: "0.04em",
              }}
            >
              {loading ? "Autenticando..." : "Entrar"}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
