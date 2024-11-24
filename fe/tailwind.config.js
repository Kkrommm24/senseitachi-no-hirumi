/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './view/pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          red: '#fb524f',
        },
      },
    },
  },
  plugins: [
    
  ],
  
}



