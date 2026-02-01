
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00754A", // Starbucks green
        dark: "#1E3932",
        light: "#F1F8F5",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;


// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./app/**/*.{ts,tsx}",
//     "./components/**/*.{ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         sora: ["Sora", "sans-serif"],
//       },
//       colors: {
//         primary: "#111111",
//         muted: "#6B7280",
//         soft: "#F5F6F8",
//       },
//       borderRadius: {
//         xl: "1rem",
//         "2xl": "1.25rem",
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;
