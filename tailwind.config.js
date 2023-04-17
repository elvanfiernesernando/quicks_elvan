/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#333333',
        'primary-blue': '#2F80ED',
        'primary-dark': '#4F4F4F',
        'primary-grey': '#828282',
        'primary-white': '#E0E0E0',
        'indicator-orange': '#F8B76B',
        'indicator-purple': '#8785FF',
        'indicator-red': '#EB5757',
        'indicator-yellow': '#F2C94C',

      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif']
      },
      keyframes: {
        'trigger-disabled': {
          '0%': { 
            backgroundColor: '#2F80ED',
            marginRight: '0px'
           },
          '100%': { 
            backgroundColor: '#4F4F4F',
            marginRight: '15px'
           },
        },
        'trigger-enabled': {
          '0%': { 
            backgroundColor: '#4F4F4F',
            marginRight: '15px'
           },
          '100%': { 
            backgroundColor: '#2F80ED',
            marginRight: '0px'
           }
        },
        'button-active-1': {
          '0%': { 
            width: '60px',
            height: '60px',
            backgroundColor: '#FFFFFF'
          },
          '100%': { 
            width: '68px',
            height: '68px',
            backgroundColor: '#8785FF'
          },
        },
        'button-active-1-color': {
          '0%': { 
            fill: '#8785FF'
          },
          '100%': { 
            fill: '#FFFFFF'
          }
        },
        'button-non-active-1': {
          '0%': { 
            width: '68px',
            height: '68px',
            backgroundColor: '#8785FF'
          },
          '100%': { 
            width: '60px',
            height: '60px',
            backgroundColor: '#FFFFFF'
           }
        },
        'button-non-active-1-color': {
          '0%': { 
            fill: '#FFFFFF'
          },
          '100%': { 
            fill: '#8785FF'
          }
        },
        'button-active-2': {
          '0%': { 
            width: '60px',
            height: '60px',
            backgroundColor: '#FFFFFF'
          },
          '100%': { 
            width: '68px',
            height: '68px',
            backgroundColor: '#F8B76B'
          },
        },
        'button-active-2-color': {
          '0%': { 
            fill: '#F8B76B'
          },
          '100%': { 
            fill: '#FFFFFF'
          }
        },
        'button-non-active-2': {
          '0%': { 
            width: '68px',
            height: '68px',
            backgroundColor: '#F8B76B'
          },
          '100%': { 
            width: '60px',
            height: '60px',
            backgroundColor: '#FFFFFF'
           }
        },
        'button-non-active-2-color': {
          '0%': { 
            fill: '#FFFFFF'
          },
          '100%': { 
            fill: '#F8B76B'
          }
        },
      },
      animation: {
        'trigger-disabled': 'trigger-disabled 1s forwards',
        'trigger-enabled': 'trigger-enabled 1s forwards',
        'button-active-1': 'button-active-1 1s forwards',
        'button-active-1-color': 'button-active-1-color 1s forwards',
        'button-non-active-1': 'button-non-active-1 1s forwards',
        'button-non-active-1-color': 'button-non-active-1-color 1s forwards',
        'button-active-2': 'button-active-2 1s forwards',
        'button-active-2-color': 'button-active-2-color 1s forwards',
        'button-non-active-2': 'button-non-active-2 1s forwards',
        'button-non-active-2-color': 'button-non-active-2-color 1s forwards',
      }
    },
  },
  plugins: [],
}