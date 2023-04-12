/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

    // Path to the tremor module
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'body': '#0E8388',
        'component': '#2C3333',
        'item': '#2E4F4F',
        'light': '#CBE4DE'
      },
      textColor: {
        'body': '#CBE4DE',
        'darkBody': '#2C3333',
      },
      colors: {
        'lightColor': '#CBE4DE',
      },
    },
  },
  plugins: [],
}
