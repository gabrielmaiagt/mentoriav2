import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keeps firebase-admin and its native deps out of the webpack/turbopack bundle
  serverExternalPackages: ["firebase-admin", "@google-cloud/firestore", "@opentelemetry/api"],
};

export default nextConfig;
