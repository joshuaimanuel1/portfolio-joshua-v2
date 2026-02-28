import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Abaikan error ESLint saat deploy
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Abaikan error tipe data dari luar folder saat deploy
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
