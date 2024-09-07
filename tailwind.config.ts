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
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'algo-yellow': '#ee9b01',  
        'algo-brown' : '#775F48',
        'algo-disabled' : '#989898',
        'algo-gray' : '#333333',
        'algo-black' : '#0d0d0d',

        'algo-gradient-yellow-1': '#bb6800', 
        'algo-gradient-yellow-2': '#d58600', 
    
        
        'algo-yellow-dark': '#ee9b01',  
        'algo-brown-dark' : '#775F48',
        'algo-brown-darker' : '#825534',
        'algo-disabled-dark' : '#989898',
        'algo-gray-dark' : '#333333',
        'algo-black-dark' : '#0d0d0d',

        'algo-gradient-yellow-1-dark': '#ee9b01', 
        'algo-gradient-yellow-2-dark': '#f7b801', 
      },
      textColor: {
        'heading': '#333333',
        'subheading': '#666666',
        'label': '#888888',

        'heading-dark': '#FFFFFF',
        'subheading-dark': '#CCCCCC',
        'label-dark': '#AAAAAA',
      },
      backgroundColor: {
        'algo-beige-primary': '#f0e5d6',
        'algo-beige-secondary': '#fffbf5',
        'hover-algo-yellow': '#ee9b01',
      },
      transitionDuration: {
        '300': '300ms',  // Added this transition duration
      },
    },
  },
  plugins: [nextui({
    themes: {
      "dark": {
        extend: "dark", // inherit default values from dark theme
        colors: {
          background: "#989898",
          foreground: "#ffffff",
          primary: {
            DEFAULT:"#ffffff",
            foreground: "#2b2117",
            hover: "#bb6800",
          },
        }
  
      },
      "light": {
        layout: {
          /* For later if we want to further customize anything */
        },
        colors: {
          background: "#fffbf5",
          foreground: "#000000",
          primary: {
            DEFAULT:"#fffbf5",
            foreground: "#fffbf5",
            // hover: "#d58600",
          },
        },
      },
    },
  })
]};

