import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'radial': 'radial-gradient(var(--tw-gradient-stops))',
    },
    fontFamily: {
      'great-vibes': ['Great Vibes', 'cursive'],
      'helvetica': ['Helvetica', 'Arial', 'sans-serif'],
      'inter': ['Inter', 'sans-serif'],
    },
    
    },
  },
  plugins: [],
} satisfies Config;