/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f5fa',
          100: '#dfeaF3',
          200: '#c5d8e9',
          300: '#9dbed9',
          400: '#6f9dc6',
          500: '#4d80b0',
          600: '#3c6794',
          700: '#315278',
          800: '#2b4664',
          900: '#0B1B3D', // Base dark navy
          950: '#1a2b41',
        },
        brand: {
          red: '#C8102E', // Chinese/Azerbaijan red
          gold: '#FFC000', // Star gold
          light: '#F8F9FA'
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['"Noto Serif SC"', 'serif'],
        cjk: ['"Noto Sans SC"', 'sans-serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh': 'radial-gradient(at 40% 20%, hsla(220,100%,74%,0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,0.15) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,100%,93%,0.15) 0px, transparent 50%)',
      }
    },
  },
  plugins: [],
}