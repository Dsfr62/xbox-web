/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./src/*.tsx",
    "./src/pages/*.tsx",
    "./src/components/**/*.tsx",
    "./src/components/**/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#107B10",
        "primary-default": "#00984A",
        "primary-light": "#9DFA9D",
        "secondary-dark": "#222422",
        "secondary-default": "#A2A6A2",
        "secondary-light": "#F5FAF5"
      },
      fontFamily: {
        "primary": ["Segoe UI", "system-ui", "-apple-system", "BlinkMacSystemFont", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

