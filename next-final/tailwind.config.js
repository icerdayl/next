module.exports = {
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        'slide-in-left': 'slideIn 0.7s ease-out forwards', // Adjust duration and easing as needed
      },
    },
  },
  plugins: [],
};