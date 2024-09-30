/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'jaune': '#fbffa7',
      'rouge': 'rgb(253, 89, 72)',
      'bleu-clair': '#b1c5ff',
      'violet': '#d5b3ff',
      'vert': '#b6ffc0',
      'bleu-fonce': '#0000ff'
    }
  },
  plugins: [],
}

