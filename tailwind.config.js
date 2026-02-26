/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Noto Sans KR', 'system-ui', 'sans-serif'],
      },
      colors: {
        aicons: {
          primary: '#037be1',
          secondary: '#8B5CF6',
          dark: '#0A1623',
          navy: '#1E293B',
          light: '#F8FAFC',
          accent: '#3B82F6',
        },
        primary: {
          300: '#40a7ff',
          400: '#1794ff',
          500: '#037be1', // 디폴트
          600: '#0358e1',
          700: '#0b4eba',
          // lighter: '#40a7ff',
          // light: '#1794ff',
          // primary: '#037be1',
          // dark: '#0358e1',
          // darker: '#0b4eba',
        },
        neutral: {
          50: '#f6f6f9',
          200: '#f0f1f5',
          300: '#e5e7ef',
          400: '#cdd0da',
          500: '#abafba',
          600: '#7b849e',
          700: '#666e88',
          800: '#3d445a',
          900: '#1f263e',
          950: '#030a1c',
          // 100: '#ffffff',
          // 500: '#9ea2af',
          // 600: '#666e88',
          // 700: '#3d445a',
          // 800: '#1f263e',
          // 900: '#081028',
          // 1000: '#030918',
        }
      },
    },
  },
  plugins: [],
}
