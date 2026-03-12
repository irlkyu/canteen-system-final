/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
    extend: {
    colors: {
    canteen: {
    bg: "#FFFFF5",
    card: "#FFF7D7",
    primary: "#E49B56",
    success: "#9AAB63",
    warning: "#F5D867",
    error: "#E4809A",
    }
    },
    fontFamily: {
    poppins: ["Poppins", "sans-serif"],
    }
    }
    },
    plugins: [],
};