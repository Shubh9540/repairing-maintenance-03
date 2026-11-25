import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      colors: {
        primary: "var(--color-primary)",
        "primary-dark": "var(--color-primary-dark)",
        "primary-deep": "var(--color-primary-deep)",
        "primary-hover": "var(--color-primary-hover)",
        "primary-soft": "var(--color-primary-soft)",
        "primary-border": "var(--color-primary-border)",
        accent: "var(--color-accent)",
        "accent-dark": "var(--color-accent-dark)",
        "accent-soft": "var(--color-accent-soft)",
        "accent-border": "var(--color-accent-border)",
        heading: "var(--color-heading)",
        text: "var(--color-text)",
        "text-muted": "var(--color-text-muted)",
        "bg-main": "var(--color-bg-main)",
        "bg-soft": "var(--color-bg-soft)",
        "bg-card": "var(--color-card)",
        border: "var(--color-border)",
      },
    },
  },
  plugins: [],
};
export default config;
