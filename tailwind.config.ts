import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      screens: {
        xs: { max: '380px' },
      },
      fontSize: {
        '2xs': '0.7rem',
        '3xs': '0.5rem',
      },
      colors: {
        // primary: '#19B562',
        // lightPrimary: '#00B572',
      },
      padding: {
        '0.5': '2px',
        '0.2': '1px',
      },
    },
  },
}
