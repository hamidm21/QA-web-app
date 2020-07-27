/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  prefix: '',
  important: true,
  separator: ':',
  theme: {
    extend: {
      fontSize: {
        'xxs': '0.6rem'
      },
      minWidth: {
        '32': '10rem'
      },
      maxHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      },
      inset: {
        '1-5': '1.5rem',
        '2':'2rem',
        '4': '4rem',
        '5': '5rem',
        '8': '8rem',
        '60': '60px',
        '18': '18px',
        '30': '30%',
        '30n': '-30%'
      },
      padding: {
        '250': '250px'
      },
      height: {
        fit: 'fit-content',
        dash: '91vh',
        '128': '32rem'
      },
      width: {
        fit: 'fit-content',
        r35: '35rem',
        50: '13rem'
      },
      colors: {
        primary: '#1251a4',
        secondary: '#4ca0d8',
        primedark: '#0b2c57',
        graybg: '#525f7f',
        bluebg: '#e7ebee',
        green: '#17c698',
        orange: '#cf8908',
        red: '#ed1c24'
      }
    }
  },
  variants: {},
  plugins: [],
}
