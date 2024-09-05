module.exports = {
  darkMode: 'class',  
  content: ["./src/**/*.{js,jsx,ts,tsx}"],  
  safelist: [
    'bg-red-500',  
    'text-center',
    {
      pattern: /bg-(red|green|blue)-(400|500)/,  
    },
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: '#1DA1F2',  
        brandGray: '#657786',  
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],  
      },
      spacing: {
        '128': '32rem',  
        '144': '36rem',  
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),  
    require('@tailwindcss/typography'),  
    require('@tailwindcss/aspect-ratio'),  
  ],
}


