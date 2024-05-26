/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        'sm': '200px',  // Default small screen breakpoint
        'md': '700px',  // Default medium screen breakpoint
        'lg': '1150px', // Default large screen breakpoint
        'xl': '1380px', // Default extra large screen breakpoint
        '2xl': '1536px', // Default 2xl screen breakpoint
        '3xl': '1600px', // Custom extra extra large screen breakpoint
      },
    },
  },
  plugins: [],
}


