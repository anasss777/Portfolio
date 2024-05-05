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
        'tajawal': ['Tajawal', 'sans-serif'],
        'gulzar': ['Gulzar', 'sans-serif'],
        'ruqaa': ['Aref Ruqaa', 'sans-serif'],
      },
      boxShadow: {
        CardMin: "0px 0px 15px rgba(174, 149, 96, 0.15);", 
        CardSmall: "0px 0px 12px rgba(174, 149, 96, 0.01);", 
        Card: "0px 0px 30px rgba(174, 149, 96, 0.15);",
        CardExtra: "0px 0px 30px rgba(174, 149, 96, 0.65);",
      },
    },
  },
  plugins: [],
}
export default config
