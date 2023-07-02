/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {colors: {
    "color-alpha": "var(--color-alpha)",
    "color-beta": "var(--color-beta)",
    "color-gamma": "var(--color-gamma)",
    "color-omega": "var(--color-omega)",
    "color-mu": "var(--color-mu)",
    "color-delta": "var(--color-delta)",
  },
    extend: {width: {
      '97': '97%',
    },
    fontFamily: {
      sans: ['Inter', 'Arial', 'sans-serif'],
    },},
  },
  plugins: [],
}
