import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern:
        /(text|border|bg)-(yellow|orange|blue|purple|green|cyan|indigo|red|pink|gray|teal|white)(-\d+)?(\/\d+)?/,
      variants: ["hover", "group-hover"],
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
