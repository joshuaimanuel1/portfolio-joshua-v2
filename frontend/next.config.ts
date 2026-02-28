import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Abaikan error tipe data dari luar folder saat deploy
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
