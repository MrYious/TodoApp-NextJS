import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        // text-[color:hsl(0,0%,98%)]
      },
      backgroundImage: {
        'bg-desktop-dark': "url('/bg-desktop-dark.jpg')",
        'bg-desktop-light': "url('/bg-desktop-light.jpg')",
        'bg-mobile-dark': "url('/bg-mobile-dark.jpg')",
        'bg-mobile-light': "url('/bg-mobile-light.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
