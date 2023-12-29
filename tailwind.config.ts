import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ae9560",
        secondary: "#242d3d"
      },
      fontFamily: {
        'fancy': ['Dancing Script', 'sans-serif'],
        'mcLaren': ['McLaren', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        Card: "0px 0px 30px rgba(174, 149, 96, 0.15);",
        CardExtra: "0px 0px 30px rgba(174, 149, 96, 0.65);",
      },
    },
  },
  plugins: [],
}
export default config
