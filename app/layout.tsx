import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ANTI-FLUXO — Estrutura Operacional",
  description: "Aprenda a estruturar operações reais usando X1, TikTok Ads e tráfego direto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body
        className="min-h-full flex flex-col"
        style={{ backgroundColor: "#050507", color: "#F4F4F5", fontFamily: "var(--font-inter), Inter, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
