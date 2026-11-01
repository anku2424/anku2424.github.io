/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Sora", "Outfit", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        paper: "#ececec",
        shell: "#efefc8",
        ink: {
          500: "#1b2f93",
          600: "#11227f",
          700: "#0b1a70"
        },
        accent: {
          500: "#1b2f93",
          600: "#0b1a70"
        }
      }
    }
  },
  plugins: []
};
