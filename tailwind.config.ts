import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        'dark-blue': {
          '50': '#f2f4ff',
          '100': '#e7eaff',
          '200': '#d1d5ff',
          '300': '#adb1ff',
          '400': '#7e7eff',
          '500': '#534aff',
          '600': '#3b25ff',
          '700': '#2c13ee',
          '800': '#240fc2',
          '900': '#210fa3',
          '950': '#0e066f',
        },
        'black-rock': {
          '50': '#e9efff',
          '100': '#d6e2ff',
          '200': '#b5c6ff',
          '300': '#89a1ff',
          '400': '#5b6bff',
          '500': '#3538ff',
          '600': '#2513ff',
          '700': '#1e09f9',
          '800': '#180bc8',
          '900': '#19139c',
          '950': '#09062f',
        },
      }
    },
    fontFamily: {
      sans: ['Inter', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      secondary: ['Josefin Sans', 'san-serif']
    },
  }
}
