/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        'in-bounce': 'cubic-bezier(0.68,-0.55,0.27,1.55)',
        'in-out-expo': 'cubic-bezier(0.87, 0, 0.13, 1)',
      },
      textColor: {
        'white': 'rgb(255 255 228)',
      },
      borderColor: {
        'white': 'rgb(255 255 228)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(ellipse at center, #f3f4f6 0%, #f3f4f6 100%)',
      },
    },
  },
  plugins: [],
};

