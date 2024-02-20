/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        'in-bounce': 'cubic-bezier(0.68,-0.55,0.27,1.55)',
      },
    },
  },
  plugins: [],
}

