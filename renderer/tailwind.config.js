import { white, gray, blue } from 'tailwindcss/colors'

export const darkMode = ['class']
export const content = [
  './renderer/app/**/*.{js,ts,jsx,tsx}',
  './renderer/components/**/*.{js,ts,jsx,tsx}'
]
export const theme = {
  colors: { white, gray, blue },
  extend: {}
}
export const plugins = []
