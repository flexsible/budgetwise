/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        coins: 'url(/Coins.png)',
        shape: 'url(/Shape.png)'
      },
      colors: {
        biru: '#0D3B66',
        krem: '#FAF0CA'
      },
      borderColor: {
        borderBlue: '#0D3B66'
      }
    }
  },
  plugins: []
}
