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
        'bgBody': '#0F833D',
        'bgComponent': '#2C3333',
        'bgElement': '#2E4F4F'
      },
      textColor: {
        'textBody': '#CBE4DE',
      },
    },
  },
  plugins: [],
}
