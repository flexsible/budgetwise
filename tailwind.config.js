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
        shape: 'url(/Shape.png)',
        line: 'url(/Line.png)',
        star: 'url(Star.png)',
        aboutUs: 'url(/bg-aboutUs.png)'
      },
      colors: {
        biru: '#515F96',
        krem: '#FAF0CA'
      },
      borderColor: {
        borderBlue: '#0D3B66'
      }
    }
  },
  plugins: []
}
