const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}', 
    './app/**/*.{js,ts,jsx,tsx}',   
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",  
  ],
  theme: {
    extend: {
      colors: {
        'algo-yellow': '#ee9b01',  
        'algo-brown' : '#775F48',
      },
      backgroundColor: {
        'hover-algo-yellow': '#ee9b01',
      },
      transitionDuration: {
        '300': '300ms',  // Added this transition duration
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      "algoarchive": {
        extend: "dark", // inherit default values from dark theme
        layout: {
          /* For later if we want to further customize anything */
        },
        colors: {
          background: "#989898",
          foreground: "#ffffff",
          primary: {
            DEFAULT:"#ffffff",
            foreground: "#2b2117",
            hover: "#ee9b01",
          },
        },
        },
      },
    },
  )],
};

