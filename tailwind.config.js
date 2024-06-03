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
    },
    animation: {
      marquee1: "marquee1 40s linear infinite",
      marquee2: "marquee2 40s linear infinite",
    },
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
    fontFamily: {
      'inknut': ['"Inknut Antiqua"', 'serif'],
      'great-vibes': ['"Great Vibes"', 'cursive'],
      'raleway': ['"Raleway"', 'sans-serif'],
      'kanit': ['"Kanit"', 'sans-serif'],
    }
  },
};

export const variants = {
  extend: {},
};

export const plugins = [
  function({ addBase, theme }) {
    addBase({
      h1: { fontSize: theme("fontSize.2xl") },
      h2: { fontSize: theme("fontSize.xl") },
      h3: { fontSize: theme("fontSize.lg") },
    });
  },
];
