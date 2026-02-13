/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aicons: {
          // primary: '#6878FF',
          primary: '#037be1',
          secondary: '#8B5CF6',
          dark: '#0A1623',
          navy: '#1E293B',
          light: '#F8FAFC',
          accent: '#3B82F6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans KR', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
