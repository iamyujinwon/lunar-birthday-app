module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      'title': '9.5rem',
      'result': '2.5rem',
    },
    fontFamily: {
      'Rowdies': 'Rowdies',
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    extend: {
      colors: {
        'lunar': '#F9CBFF',
        'disabled': '#806084',
        'yellow-highlight': '#FFF9C6',
        'result-background': '#4E4E4E',
        'green-highlight': '#C6FFE4',
      },
      lineHeight: {
        'title': '1.1',
      },
    },
  },
  plugins: [],
}
