export const content = [
  './index.html',
  './src/**/*.{js,jsx,ts,tsx}',
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./app/**/*.{js,ts,jsx,tsx}",
];

export const darkMode = "class";

export const theme = {
  extend: {
    keyframes: {
      marquee1: {
        "0%": { transform: "translateX(0%)" },
        "100%": { transform: "translateX(-100%)" },
      },
      marquee2: {
        "0%": { transform: "translateX(100%)" },
        "100%": { transform: "translateX(0%)" },
      },
      fadeInLeft: {
        '0%': { opacity: 0, transform: 'translateX(-100px)' },
        '100%': { opacity: 1, transform: 'translateX(0)' },
      },
      fadeInRight: {
        '0%': { opacity: 0, transform: 'translateX(100px)' },
        '100%': { opacity: 1, transform: 'translateX(0)' },
      },
      fadeOut: {
        '0%': { opacity: 1, transform: 'translateY(0)' },
        '100%': { opacity: 0, transform: 'translateY(-20px)' },
      },
      fadeInSlow: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
      slideInLeft: {
        '0%': { opacity: 0, transform: 'translateX(-200%)' },
        '100%': { opacity: 1, transform: 'translateX(0)' },
      },
      slideOutLeft: {
        '0%': { opacity: 1, transform: 'translateX(0)' },
        '100%': { opacity: 0, transform: 'translateX(-100%)' },
      },
      slideInRight: {
        '0%': { opacity: 0, transform: 'translateX(50%)' },
        '100%': { opacity: 1, transform: 'translateX(0)' },
      },
      slideOutRight: {
        '0%': { opacity: 1, transform: 'translateX(0)' },
        '100%': { opacity: 0, transform: 'translateX(50%)' },
      },
      bounceIn: {
        '0%, 20%, 40%, 60%, 80%, 100%': { animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)' },
        '0%': { opacity: 0, transform: 'translate3d(0, -3000px, 0)' },
        '60%': { opacity: 1, transform: 'translate3d(0, 25px, 0)' },
        '75%': { transform: 'translate3d(0, -10px, 0)' },
        '90%': { transform: 'translate3d(0, 5px, 0)' },
        '100%': { transform: 'none' },
      },
      bounceOut: {
        '20%': { transform: 'translate3d(0, -10px, 0)' },
        '40%, 45%': { opacity: 1, transform: 'translate3d(0, 20px, 0)' },
        '100%': { opacity: 0, transform: 'translate3d(0, -2000px, 0)' },
      },
      pulse: {
        '0%, 100%': { opacity: 1 },
        '50%': { opacity: 0.5 },
      },
      flip: {
        '0%': { transform: 'rotateY(0)' },
        '50%': { transform: 'rotateY(180deg)' },
        '100%': { transform: 'rotateY(360deg)' },
      },
      rotateIn: {
        '0%': { transform: 'rotate(-200deg)', opacity: 0 },
        '100%': { transform: 'rotate(0)', opacity: 1 },
      },
      rotateOut: {
        '10%': { transform: 'rotate(0)', opacity: 1 },
        '100%': { transform: 'rotate(200deg)', opacity: 0 },
      },
      zoomIn: {
        '0%': { transform: 'scale(0.5)', opacity: 0 },
        '100%': { transform: 'scale(1)', opacity: 1 },
      },
      zoomOut: {
        '0%': { transform: 'scale(1)', opacity: 1 },
        '100%': { transform: 'scale(0.5)', opacity: 0 },
      },
      fadeInUp: {
        '0%': { opacity: 0, transform: 'translateY(50px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
      },
    },
    animation: {
      marquee1: "marquee1 40s linear infinite",
      marquee2: "marquee2 40s linear infinite",
      fadeInLeft: 'fadeInLeft 1s ease-out',
      fadeInRight: 'fadeInRight 2s ease-out',
      fadeOut: 'fadeOut 1s ease-in',
      fadeInSlow: 'fadeInSlow 1.5s ease-in-out',
      slideInLeft: 'slideInLeft 1.5s ease-out',
      slideOutLeft: 'slideOutLeft 0.5s ease-in',
      slideInRight: 'slideInRight 1.5s ease-out',
      slideOutRight: 'slideOutRight 0.5s ease-in',
      bounceIn: 'bounceIn 1s ease-out',
      bounceOut: 'bounceOut 1s ease-in',
      pulse: 'pulse 2s infinite',
      flip: 'flip 1s ease-in-out',
      rotateIn: 'rotateIn 1s ease-out',
      rotateOut: 'rotateOut 1s ease-in',
      zoomIn: 'zoomIn 1s ease-out',
      zoomOut: 'zoomOut 0.5s ease-in',
      fadeInUp: 'fadeInUp 1s ease-out',
    },
    transitionDelay: {
      '0': '0ms',
      '200': '200ms',
      '400': '400ms',
      '600': '600ms',
      '800': '800ms',
      '1000': '1000ms',
    },
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
    fontFamily: {
      'inknut': ['"Inknut Antiqua"', 'serif'],
      'great-vibes': ['"Great Vibes"', 'cursive'],
      'raleway': ['"Raleway"', 'sans-serif'],
      'kanit': ['"Kanit"', 'sans-serif'],
    },
  },
};

export const variants = {
  extend: {},
};

export const plugins = [
  function ({ addBase, theme }) {
    addBase({
      h1: { fontSize: theme("fontSize.2xl") },
      h2: { fontSize: theme("fontSize.xl") },
      h3: { fontSize: theme("fontSize.lg") },
    });
  },
];
