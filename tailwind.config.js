/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'strong-cyan': 'hsl(171, 66%, 44%)',
        'light-blue': 'hsl(233, 100%, 69%)',
        'dark-grayish-blue': 'hsl(210, 10%, 33%)',
        'grayish-blue': 'hsl(201, 11%, 66%)',
        'cyan-hover': 'hsl(171, 52%, 58%)',
        'light-blue-hover': 'hsl(233, 100%, 77%)',
        'gray-footer': 'hsl(210, 11%, 96%)'
      }
    },
    fontFamily: {
      sans: ['Bai Jamjuree', 'sans-serif']
    },
    fontSize: {
      h1: '2.875rem', // 46px
      h2: '2.25rem', // 36px
      h3: '2rem', // 32px
      h4: '1.75rem', // 28px
      h5: '1.5rem', // 24px
      body: '1.125rem', // 18px
      default: '1rem' // 16px
    },
    lineHeight: {
      h1: '3.625rem', // 58px
      h2: '2.8125rem', // 45px
      h3: '2.5rem', // 40px
      h4: '2.1875rem', // 35px
      h5: '1.875rem', // 30px
      body: '1.875rem', // 30px
      default: '1.625rem' // 26px
    },
    letterSpacing: {
      h1: '-0.75px',
      h2: '-0.59px',
      h3: '-0.52px',
      h4: '-0.46px',
      h5: '-0.39px',
      body: '0.14px',
      default: '0.12px'
    },
    backgroundImage: {
      'header-mobile': 'url("/bg-header-mobile.png")',
      'header-desktop': 'url("/bg-header-desktop.png")'
    },
    borderRadius: {
      btn: '28px'
    },
    boxShadow: {
      cyan: '0px 10px 20px rgba(137, 229, 199, 0.503305), inset 0px -3px 0px rgba(0, 0, 0, 0.151333)',
      blue: '0px 10px 20px rgba(0, 0, 0, 0.0988035), inset 0px -3px 0px rgba(0, 0, 0, 0.151333)'
    },
    maxWidth: {
      sm: '730px',
      container: '1110px'
    },
    screens: {
      xl: '1110px'
    }
  },
  plugins: []
}
