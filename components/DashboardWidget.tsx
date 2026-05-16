"use client";

import { motion } from "framer-motion";

// ─── Circular Gauge ───────────────────────────────────────────
interface GaugeProps {
  value: number; // 0-100
  label: string;
  sub?: string;
}

export function CircularGauge({ value, label, sub }: GaugeProps) {
  const r = 52;
  const circ = 2 * Math.PI * r;
  const dash = (value / 100) * circ;
  const gap = circ - dash;

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="relative">
        <svg width="140" height="140" viewBox="0 0 140 140" style={{ transform: "rotate(-90deg)" }}>
          {/* Track */}
          <circle cx="70" cy="70" r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="10" />
          {/* Progress */}
          <circle
            cx="70"
            cy="70"
            r={r}
            fill="none"
            stroke="url(#gaugeGrad)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={`${dash} ${gap}`}
          />
          <defs>
            <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>
          </defs>
        </svg>
        <div
          className="absolute inset-0 flex flex-col items-center justify-center"
          style={{ transform: "none" }}
        >
          <span className="font-black text-2xl" style={{ color: "#F4F4F5" }}>
            {value.toFixed(2)}%
          </span>
        </div>
      </div>
      {sub && (
        <span className="text-xs mt-2 text-center" style={{ color: "#9B9BA1" }}>
          {sub}
        </span>
      )}
    </div>
  );
}

// ─── Progress Bar ─────────────────────────────────────────────
interface ProgressProps {
  label: string;
  value: number;
  total: number;
  suffix?: string;
}

export function ProgressRow({ label, value, total, suffix = "" }: ProgressProps) {
  const pct = total > 0 ? (value / total) * 100 : 0;
  return (
    <div>
      <div className="flex justify-between text-xs mb-1.5">
        <span style={{ color: "#9B9BA1" }}>{label}</span>
        <span className="font-semibold" style={{ color: "#F4F4F5" }}>
          {value}
          {suffix}
        </span>
      </div>
      <div className="h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ background: "linear-gradient(90deg, #8B5CF6, #A855F7)" }}
        />
      </div>
      <div className="text-right text-xs mt-1" style={{ color: "rgba(155,155,161,0.45)" }}>
        de {total} {suffix && suffix + " "}gerados
      </div>
    </div>
  );
}

// ─── Area Chart ───────────────────────────────────────────────
const DAYS = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

interface AreaChartProps {
  data?: number[];
  title?: string;
  subtitle?: string;
}

export function AreaChart({ data = [10, 18, 22, 30, 48, 55, 38], title = "Seu Desempenho", subtitle = "ÚLTIMOS 7 DIAS" }: AreaChartProps) {
  const w = 360;
  const h = 110;
  const pad = { t: 8, r: 8, b: 24, l: 8 };
  const iw = w - pad.l - pad.r;
  const ih = h - pad.t - pad.b;

  const max = Math.max(...data, 1);
  const pts = data.map((v, i) => ({
    x: pad.l + (i / (data.length - 1)) * iw,
    y: pad.t + ih - (v / max) * ih,
  }));

  // Smooth bezier
  const pathD = pts.reduce((d, p, i) => {
    if (i === 0) return `M ${p.x},${p.y}`;
    const prev = pts[i - 1];
    const cx = (prev.x + p.x) / 2;
    return `${d} C ${cx},${prev.y} ${cx},${p.y} ${p.x},${p.y}`;
  }, "");

  const areaD = `${pathD} L ${pts[pts.length - 1].x},${h - pad.b} L ${pts[0].x},${h - pad.b} Z`;

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="font-bold text-sm" style={{ color: "#F4F4F5" }}>{title}</div>
          <div className="text-xs" style={{ color: "#9B9BA1", letterSpacing: "0.1em" }}>{subtitle}</div>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full" style={{ background: "#8B5CF6" }} />
          <span className="text-xs" style={{ color: "#9B9BA1" }}>Receita</span>
        </div>
      </div>

      <div className="flex-1 relative">
        <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          {/* Area fill */}
          <path d={areaD} fill="url(#areaGrad)" />
          {/* Line */}
          <path d={pathD} fill="none" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" />
          {/* Last dot */}
          <circle cx={pts[pts.length - 1].x} cy={pts[pts.length - 1].y} r="3.5" fill="#A855F7" />
        </svg>

        {/* Day labels */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between px-1">
          {DAYS.map((d) => (
            <span key={d} className="text-[9px]" style={{ color: "rgba(155,155,161,0.5)" }}>
              {d}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Mini Bar Chart ───────────────────────────────────────────
interface MiniBarProps {
  data?: number[];
}

export function MiniBarChart({ data = [30, 55, 80] }: MiniBarProps) {
  const max = Math.max(...data, 1);
  return (
    <div className="flex items-end gap-1 h-10 mt-2">
      {data.map((v, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm"
          style={{
            height: `${(v / max) * 100}%`,
            background:
              i === data.length - 1
                ? "linear-gradient(180deg, #8B5CF6, #A855F7)"
                : "rgba(139,92,246,0.25)",
          }}
        />
      ))}
    </div>
  );
}

// ─── Icon Box ────────────────────────────────────────────────
interface IconBoxProps {
  icon: React.ReactNode;
}

export function IconBox({ icon }: IconBoxProps) {
  return (
    <div
      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
      style={{
        background: "rgba(139,92,246,0.15)",
        border: "1px solid rgba(168,85,247,0.2)",
      }}
    >
      {icon}
    </div>
  );
}

// ─── Stat Card ────────────────────────────────────────────────
interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  sub?: string;
  sub2?: string;
  progressPct?: number;
  progressLabel?: string;
  children?: React.ReactNode;
  delay?: number;
}

export function StatCard({ icon, title, value, sub, sub2, progressPct, progressLabel, children, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="p-5 rounded-2xl flex flex-col gap-3 h-full"
      style={{ background: "#0D0D12", border: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="flex items-center gap-3">
        <IconBox icon={icon} />
        <span className="text-sm font-semibold" style={{ color: "#F4F4F5" }}>{title}</span>
      </div>

      <div className="font-black text-3xl tracking-tight" style={{ color: "#F4F4F5" }}>
        {value}
      </div>

      {progressPct !== undefined && (
        <div>
          <div className="h-1 rounded-full mb-1.5" style={{ background: "rgba(255,255,255,0.06)" }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPct}%` }}
              transition={{ duration: 1, ease: "easeOut", delay: delay + 0.3 }}
              className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg, #8B5CF6, #A855F7)" }}
            />
          </div>
          {progressLabel && (
            <span className="text-xs" style={{ color: "#9B9BA1" }}>{progressLabel}</span>
          )}
        </div>
      )}

      {sub && <p className="text-xs" style={{ color: "#9B9BA1" }}>{sub}</p>}
      {sub2 && <p className="text-xs" style={{ color: "#9B9BA1" }}>{sub2}</p>}
      {children}
    </motion.div>
  );
}
