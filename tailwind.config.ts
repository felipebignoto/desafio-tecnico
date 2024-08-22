import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          light: '#ABB491',
          main: '#588157',
          dark: '#3A5A40',
        },
        secondary: {
          main: '#CCD9CC',
        },
        white: '#f7fafc',
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /text-(red|blue|green|yellow|purple|pink)-600/,
      variants: ['hover'],
    },
  ],
}
export default config
