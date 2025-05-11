/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#007FFF', // Adjust with the exact blue from the image
                'secondary': '#F0F4F8', // Adjust with the exact light gray/blue from the image
                'text-primary': '#1E293B', // Adjust with the exact dark text color
                'text-secondary': '#64748B', // Adjust with the exact lighter text color
                'border-color': '#E2E8F0', // Adjust with the exact border color
                'accent': '#4ADE80', // Green checkmark, adjust as needed
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'], // Assuming Inter, adjust if different
            },
        },
    },
    plugins: [],
} 