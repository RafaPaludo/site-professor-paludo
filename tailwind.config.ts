import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

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
        }
      }
    },
    fontFamily: {
      sans: ['Inter', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      secondary: ['Josefin Sans', 'san-serif']
    },
  }
}
