/** @type {import('tailwindcss').Config} */ module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", // Path to the tremor module
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend:
    {
      backgroundColor: {
        'body':
          '#1c1917',
        'component':
          '#292524',
        'item': '#2E4F4F',
        'light': '#d6d3d1'
      },
      textColor: {
        'body': '#e7e5e4',
        'darkBody': '#2C3333',
      },
      colors: {
        'lightColor': '#e7e5e4',
      },
    },
  }, plugins: [],
}
