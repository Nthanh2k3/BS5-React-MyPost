// /** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: ["./src/**/*.{html,js}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js"
],
    theme: {
        extend: {},
        fontFamily: {
            quick: "Quicksand, sans-serif",
        },
    },
    plugins: [],
});
