import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1260px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'circle-gradient': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
      colors: {
        'blue-700': '#1e3a8a', // Azul mais escuro
        'blue-800': '#1c2e70', // Azul médio
        'blue-900': '#16224f', // Azul mais claro
        'purple-700': '#4c3cb9', // Tom de roxo azulado
        'purple-100': '#B8A9F5', // Tom de laranja roxeado
      }
    },
  },
  plugins: [],
};
export default config;
