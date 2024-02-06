/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        transparent: 'transparent',
        white: '#FEFEFE',
        brand: '#009688',
        'carbon-green': '#0F363C',
        'supermid-blue': '#626A77',
        'mid-blue': '#89919D',
        'very-light-blue': '#F3F3F5',
        blue: '#CED2D6',
        info: '#8944AB',
        accent: '#F2A71B',
        success: '#248A3D',
        error: '#D70015',
        'grey-900': '#0A0B12',
        'jet-blue': '#F8F9FB',
        'neutral-04': '#D3D3D3'
      },
      height: {
        'screen-dvh': '100dvh'
      },
      boxShadow: {
        selector:
          '0px 0px 0px 1px #012E40, 0px 0px 0px 4px rgba(103, 110, 118, 0.16)',
        checkbox:
          '0px 0px 0px 1px #012E40, 0px 0px 0px 4px rgba(103, 110, 118, 0.16)',
        input:
          '0px 0px 0px 1px #012E40, 0px 0px 0px 4px rgba(103, 110, 118, 0.16)',
        'input-error':
          '0px 0px 0px 1px #D70015, 0px 0px 0px 4px rgba(215, 0, 21, 0.16)',
        'input-info':
          '0px 0px 0px 1px #8944AB, 0px 0px 0px 4px rgba(137, 68, 171, 0.16)',
        'button-shadow':
          '0px 0px 0px 2px #012E40, 0px 0px 0px 2px rgba(103, 110, 118, 0.16)'
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif']
      },
      fontSize: {
        h1: ['42px', '56px'],
        h2: ['32px', '42px'],
        h3: ['24px', '32px'],
        h4: ['20px', '28px'],
        h5: ['16px', '20px'],
        h6: ['14px', '20px']
      },
      letterSpacing: {
        content: '0.14px'
      },
      maxWidth: {
        desktop: '976px'
      }
    }
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, theme }) {
      addComponents({
        '.scrollbar': {
          '&::-webkit-scrollbar': {
            width: '7px'
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent'
          },

          /* Handle */
          '&::-webkit-scrollbar-thumb': {
            background: theme('colors.blue'),
            'border-radius': '6px'
          },

          /* Handle on hover */
          '&::-webkit-scrollbar-thumb:hover': {
            background: theme('colors.supermid-blue')
          }
        }
      }),
        addUtilities({
          '.webkit-input-shadow-white': {
            '-webkit-box-shadow': '0 0 0 30px #FEFEFE inset'
          },
          '.input-number-hide-controls': {
            '-moz-appearance': 'textfield',
            appearance: 'textfield'
          }
        })
    })
  ]
}
export default config
