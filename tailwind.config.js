/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xsm: "400px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
      "3xl": "1500px",
      "4xl": "1600px",
      "mxl": "1800px",
    },
    extend: {
      colors: {
        p1: "",
        p2: "",
        p3: "",
        s1: "",
        s2: "",
        s3: "",
        n0: "#ffffff",
        n1: "#000000",
        n2: "#333333",
        n3: "#666666",
        n4: "#999999",
        n5: "#cccccc",
        n6: "#eeeeee",
        n7: "#f5f5f5",
        n8: "#f0f0f0",
        n9: "#f8f8f8",
        n10: "#f2f2f2",
        n11: "#fafafa",
        n12: "#f9f9f9",
        n13: "#f3f3f3",
        n14: "#f1f1f1",
        n15: "#f7f7f7",
        n16: "#f6f6f6",
        n17: "#f4f4f4",
        n18: "#f8f8f8",
        n19: "#f5f5f5",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Poppins", "serif"],
        mono: ["Poppins", "monospace"],
      },
      fontSize: {
      },
      spacing: {
      },
      borderRadius: {

      },
      boxShadow: {

      },
      keyframes: {

      },
      animation: {

      },
    },
  },
  plugins: [],
}

