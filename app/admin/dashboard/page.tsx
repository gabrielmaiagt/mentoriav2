"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getLeads, updateLeadStatus, deleteAllLeads, deleteLead, Lead, LeadStatus } from "@/lib/firestore";
import BackgroundAtmosphere from "@/components/BackgroundAtmosphere";
import { CircularGauge, AreaChart } from "@/components/DashboardWidget";

const STATUS_COLORS: Record<LeadStatus, { bg: string; color: string }> = {
  Novo: { bg: "rgba(139,92,246,0.12)", color: "#A855F7" },
  "Em conversa": { bg: "rgba(234,179,8,0.12)", color: "#EAB308" },
  Fechado: { bg: "rgba(34,197,94,0.12)", color: "#22C55E" },
  Perdido: { bg: "rgba(239,68,68,0.1)", color: "#EF4444" },
};

const ALL_STATUSES: LeadStatus[] = ["Novo", "Em conversa", "Fechado", "Perdido"];

function formatDate(ts: { seconds: number } | undefined) {
  if (!ts) return "—";
  const d = new Date(ts.seconds * 1000);
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "2-digit" });
}

export default function AdminDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<LeadStatus | "Todos">("Todos");
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [clearing, setClearing] = useState(false);

  useEffect(() => {
    loadLeads();
  }, []);

  const loadLeads = async () => {
    setLoading(true);
    try {
      const data = await getLeads();
      setLeads(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleStatus = async (id: string, status: LeadStatus) => {
    if (!id) return;
    setUpdatingId(id);
    await updateLeadStatus(id, status);
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status } : l)));
    setUpdatingId(null);
  };


  const handleDeleteLead = async (id: string) => {
    await deleteLead(id);
    setLeads((prev) => prev.filter((l) => l.id !== id));
  };

  const handleClear = async () => {
    if (!confirm("Tem certeza? Isso vai apagar todos os leads permanentemente.")) return;
    setClearing(true);
    await deleteAllLeads();
    setLeads([]);
    setClearing(false);
  };

  const openWhatsApp = (telefone: string, nome: string) => {
    const msg = encodeURIComponent(`Fala ${nome}, tudo bem? Sou o Gabriel. Vi sua aplicação e quero conversar sobre sua operação.`);
    const num = telefone.replace(/\D/g, "");
    const full = num.startsWith("55") ? num : `55${num}`;
    window.open(`https://wa.me/${full}?text=${msg}`, "_blank");
  };

  const filtered = filter === "Todos" ? leads : leads.filter((l) => l.status === filter);

  // Stats
  const total = leads.length;
  const today = leads.filter((l) => {
    if (!l.createdAt) return false;
    const d = new Date(l.createdAt.seconds * 1000);
    const now = new Date();
    return d.toDateString() === now.toDateString();
  }).length;
  const byMentoria = leads.reduce<Record<string, number>>((acc, l) => {
    acc[l.mentoria] = (acc[l.mentoria] || 0) + 1;
    return acc;
  }, {});
  const fechados = leads.filter((l) => l.status === "Fechado").length;
  const taxa = total > 0 ? Math.round((fechados / total) * 100) : 0;

  const last7 = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    d.setHours(0, 0, 0, 0);
    return leads.filter((l) => {
      if (!l.createdAt) return false;
      const ld = new Date(l.createdAt.seconds * 1000);
      ld.setHours(0, 0, 0, 0);
      return ld.getTime() === d.getTime();
    }).length;
  });

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: "#050507" }}>
      <BackgroundAtmosphere />

      {/* Topbar */}
      <div
        className="relative z-40 flex items-center justify-between px-8 py-4"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(5,5,7,0.9)", backdropFilter: "blur(10px)" }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-7 h-7 rounded-md flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #8B5CF6, #A855F7)", boxShadow: "0 0 12px rgba(168,85,247,0.35)" }}
          >
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M2 2L7 7L12 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M2 7L7 12L12 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
            </svg>
          </div>
          <span className="font-bold text-sm tracking-widest" style={{ letterSpacing: "0.18em", color: "#F4F4F5" }}>ANTI-FLUXO</span>
          <span className="text-xs px-2 py-0.5 rounded" style={{ color: "#9B9BA1", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
            Admin
          </span>
        </div>
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            onClick={loadLeads}
            className="text-xs px-3 py-1.5 rounded-lg"
            style={{ color: "#9B9BA1", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}
          >
            Atualizar
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            onClick={handleClear}
            disabled={clearing}
            className="text-xs px-3 py-1.5 rounded-lg"
            style={{ color: clearing ? "rgba(239,68,68,0.4)" : "#EF4444", border: "1px solid rgba(239,68,68,0.2)", background: "rgba(239,68,68,0.05)", cursor: clearing ? "not-allowed" : "pointer" }}
          >
            {clearing ? "Limpando..." : "Limpar dados"}
          </motion.button>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10">
        {/* Stats — estilo gateway */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4"
        >
          {/* Vendas Aprovadas */}
          <div className="p-5 rounded-2xl" style={{ background: "#0D0D12", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(168,85,247,0.2)" }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2v12M4 6l4-4 4 4" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </div>
              <span className="text-sm font-semibold" style={{ color: "#F4F4F5" }}>Leads Aprovados</span>
            </div>
            <div className="font-black text-3xl mb-3" style={{ color: "#F4F4F5" }}>{total}</div>
            <div className="h-1 rounded-full mb-1.5" style={{ background: "rgba(255,255,255,0.06)" }}>
              <div className="h-full rounded-full" style={{ width: `${Math.min(taxa, 100)}%`, background: "linear-gradient(90deg,#8B5CF6,#A855F7)", transition: "width 1s ease" }} />
            </div>
            <span className="text-xs" style={{ color: "#9B9BA1" }}>{taxa}% Taxa de fechamento</span>
          </div>

          {/* Taxa de Conversão — gauge */}
          <div className="p-5 rounded-2xl flex flex-col" style={{ background: "#0D0D12", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(168,85,247,0.2)" }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 11l4-4 2 2 6-7" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </div>
              <span className="text-sm font-semibold" style={{ color: "#F4F4F5" }}>Taxa de Conversão</span>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <CircularGauge value={taxa} label="Conversão" sub={`${leads.filter(l => l.status === "Fechado").length} fechados de ${total}`} />
            </div>
          </div>

          {/* Desempenho por mentoria */}
          <div className="p-5 rounded-2xl" style={{ background: "#0D0D12", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(168,85,247,0.2)" }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2l1.5 4H14l-3.5 2.5 1.3 4L8 10l-3.8 2.5 1.3-4L2 6h4.5L8 2z" stroke="#8B5CF6" strokeWidth="1.2" fill="none"/></svg>
              </div>
              <span className="text-sm font-semibold" style={{ color: "#F4F4F5" }}>Por Mentoria</span>
            </div>
            <div className="space-y-3">
              {[
                { label: "X1", key: "x1" },
                { label: "Tráfego Direto", key: "trafego" },
                { label: "TikTok Ads", key: "tiktok" },
              ].map(({ label, key }) => {
                const count = byMentoria[key] || 0;
                const pct = total > 0 ? (count / total) * 100 : 0;
                return (
                  <div key={key}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span style={{ color: "#9B9BA1" }}>{label}</span>
                      <span className="font-semibold" style={{ color: "#F4F4F5" }}>{count}</span>
                    </div>
                    <div className="h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
                      <div className="h-full rounded-full" style={{ width: `${pct}%`, background: "linear-gradient(90deg,#8B5CF6,#A855F7)", transition: "width 1s ease" }} />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="flex justify-between text-xs">
                <span style={{ color: "#9B9BA1" }}>Leads hoje</span>
                <span className="font-bold" style={{ color: "#A855F7" }}>{today}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mini area chart */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="p-5 rounded-2xl mb-6"
          style={{ background: "#0D0D12", border: "1px solid rgba(255,255,255,0.07)", height: "170px" }}
        >
          <AreaChart
            data={last7}
            title="Leads por Dia"
            subtitle="ÚLTIMOS 7 DIAS"
          />
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex gap-2 flex-wrap mb-6"
        >
          {(["Todos", ...ALL_STATUSES] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="text-xs px-4 py-2 rounded-lg font-medium"
              style={{
                background: filter === f ? "linear-gradient(135deg, #8B5CF6, #A855F7)" : "rgba(255,255,255,0.03)",
                border: filter === f ? "none" : "1px solid rgba(255,255,255,0.07)",
                color: filter === f ? "#fff" : "#9B9BA1",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.07)" }}
        >
          {/* Header */}
          <div
            className="grid grid-cols-12 gap-4 px-6 py-3 text-xs font-semibold"
            style={{ background: "#0D0D12", color: "#9B9BA1", letterSpacing: "0.08em", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="col-span-3">NOME</div>
            <div className="col-span-3">TELEFONE</div>
            <div className="col-span-2">MENTORIA</div>
            <div className="col-span-2">STATUS</div>
            <div className="col-span-1">DATA</div>
            <div className="col-span-1 flex gap-1">AÇÃO</div>
          </div>

          {/* Rows */}
          {loading ? (
            <div className="flex items-center justify-center py-20" style={{ background: "#0D0D12" }}>
              <div
                className="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin"
                style={{ borderColor: "rgba(168,85,247,0.3)", borderTopColor: "#A855F7" }}
              />
            </div>
          ) : filtered.length === 0 ? (
            <div className="flex items-center justify-center py-16" style={{ background: "#0D0D12" }}>
              <span className="text-sm" style={{ color: "#9B9BA1" }}>Nenhum lead encontrado.</span>
            </div>
          ) : (
            <AnimatePresence>
              {filtered.map((lead, i) => (
                <motion.div
                  key={lead.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.03 }}
                  className="grid grid-cols-12 gap-4 px-6 py-4 items-center text-sm"
                  style={{
                    background: i % 2 === 0 ? "#0D0D12" : "#0A0A0F",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#12121A")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = i % 2 === 0 ? "#0D0D12" : "#0A0A0F")}
                >
                  <div className="col-span-3 font-medium truncate" style={{ color: "#F4F4F5" }}>{lead.nome}</div>
                  <div className="col-span-3 font-mono text-xs truncate" style={{ color: "#9B9BA1" }}>{lead.telefone}</div>
                  <div className="col-span-2">
                    <span
                      className="text-xs px-2.5 py-1 rounded-md font-medium capitalize"
                      style={{ background: "rgba(139,92,246,0.1)", color: "#A855F7" }}
                    >
                      {lead.mentoria}
                    </span>
                  </div>
                  <div className="col-span-2">
                    <select
                      value={lead.status}
                      disabled={updatingId === lead.id}
                      onChange={(e) => lead.id && handleStatus(lead.id, e.target.value as LeadStatus)}
                      className="text-xs px-2.5 py-1 rounded-md font-medium outline-none cursor-pointer"
                      style={{
                        background: STATUS_COLORS[lead.status].bg,
                        color: STATUS_COLORS[lead.status].color,
                        border: "none",
                        appearance: "none",
                        WebkitAppearance: "none",
                      }}
                    >
                      {ALL_STATUSES.map((s) => (
                        <option key={s} value={s} style={{ background: "#0D0D12", color: "#F4F4F5" }}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-span-1 text-xs" style={{ color: "rgba(155,155,161,0.6)" }}>
                    {formatDate(lead.createdAt as { seconds: number } | undefined)}
                  </div>
                  <div className="col-span-1 flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => openWhatsApp(lead.telefone, lead.nome)}
                      title="Chamar no WhatsApp"
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.2)" }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => lead.id && handleDeleteLead(lead.id)}
                      title="Excluir lead"
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)" }}
                    >
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                        <path d="M2 3.5h10M5.5 3.5V2.5h3v1M6 6v4M8 6v4M3 3.5l.7 7.5a1 1 0 001 .9h4.6a1 1 0 001-.9l.7-7.5" stroke="#EF4444" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </motion.div>
      </div>
    </div>
  );
}
