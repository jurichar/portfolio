/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.85, 0.3, 0.3, 0.9)',
        'out-expo': 'cubic-bezier(0.2, 0.8, 0.8, 1)',
      },
    },
    plugins: [],
  }
}
