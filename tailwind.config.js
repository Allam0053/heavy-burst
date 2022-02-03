module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
      },
      colors: {
        cyan1: '#EDF9FF',
        cyan2: '#41EAD4',
        cyan3: '#00C9E0',
        back: '#011627'
      },
      fontFamily: {
        nunito: ['Nunito'],
        dmserif: ['DM Serif Display', 'serif']
      }
    },
  },
  plugins: [],
}
/**
theme 1 (blue):
  cyan1: '#EDF9FF',
  cyan2: '#41EAD4',
  cyan3: '#00C9E0',
  back: '#011627'
theme 1 (red):
  cyan1: '#FFFAFA',
  cyan2: '#F8AAA0',
  cyan3: '#F36C9D'

 */