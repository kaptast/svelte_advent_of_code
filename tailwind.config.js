/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,svelte}'],
  theme: {
    extend: {},
    colors: {
      text: '#f0f0f0',
      background: '#000000',
      primary: '#a9eac4',
      secondary: '#1b2720',
      accent: '#ff3d40'
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif']
    }
  },
  plugins: []
}
