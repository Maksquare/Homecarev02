/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: ["var(--font-nunito)"],
      secondary: ["var(--font-lora)"],
    },
    container: {
      center: true,
      padding: "15px",
    },
    extend: {
      colors: {
        primary:   "#1c3829",
        secondary: "#6b8070",
        accent:    "#f0a500",
        border:    "#d8e4d8",
        surface:   "#f6f9f4",
        muted:     "#274d3a",
      },
      boxShadow: {
        custom: "0 4px 54px rgba(28, 56, 41, 0.08)",
      },
      backgroundImage: {
        hero: "url('/assets/img/hero/bg.jpg')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};