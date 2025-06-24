/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './templates/**/*.twig',
    './templates/**/*.svg',
  ],
  theme: {
    extend: {
      screens: {
        xl: '1200px',
      },


      // make the list bullets a bit more visible
      // https://tailwindcss.com/docs/typography-plugin#adding-custom-color-themes

    },
    transitionDuration: {
      DEFAULT: '400ms',
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],

  safelist: [
    {
      pattern: /col-span-(1|2|3|4|5|6|7|8|9|10|11|12)/,
      variants: ['lg'],
    },
    'bg-layout-light',
    'bg-layout-dark',
  ]
}

