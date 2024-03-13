/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        clementine: {
          50: '#fdf7ef',
          100: '#fbecd9',
          200: '#f5d6b3',
          300: '#efba82',
          400: '#e8934f',
          500: '#e17226',
          600: '#d35e23',
          700: '#b0491e',
          800: '#8c3b20',
          900: '#71321d',
          950: '#3d170d'
        },
        alto: {
          50: '#f7f7f7',
          100: '#ededed',
          200: '#d9d9d9',
          300: '#c8c8c8',
          400: '#adadad',
          500: '#999999',
          600: '#888888',
          700: '#7b7b7b',
          800: '#676767',
          900: '#545454',
          950: '#363636'
        }
      }
    }
  },
  plugins: [require('tailwindcss-animated'), require('flowbite/plugin')]
}
