import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#FF006B",
        secondary: "#7F04E3",
        text: "#E1E1E1",
        textd: "#99A2AF",
        dgray: "#0F0F0F",
        gray: "#171717",
        mgray: "#1B1B1B",
        lgray: "#232323",
      },
      screens: {
        '3xl': {'min': '2048px'},
      },
    },
  },
  plugins: [],
};
export default config;
