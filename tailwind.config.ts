export const content = [
  './pages/**/*.{vue,js}',
  './layouts/**/*.{vue,js}',
  './components/**/*.{vue,js}'
]

export const theme = {
  extend: {
    fontFamily: {
      title: ['Lato', 'sans-serif'],
      text: ['Inter', 'sans-serif']
    },
    colors: {
      background: '#EEFFF0'
    }
  },
  container: {
    center: true,
    padding: {
      DEFAULT: '1rem',
      sm: '2rem',
      lg: '4rem',
      xl: '5rem',
      '2xl': '6rem'
    }
  }
}

export const plugins = []
