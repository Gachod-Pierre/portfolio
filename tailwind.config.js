/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        coco: ['CocoSharp', 'sans-serif'], // Utilisez votre police personnalisée
      }
    }
  },
  plugins: []
}
