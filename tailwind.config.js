/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#2563eb',
                'secondary': '#f8fafc',
                'text-primary': '#1e293b',
                'text-secondary': '#64748b',
                'border-color': '#e2e8f0',
                'accent': '#10b981',
                'accent-light': '#d1fae5',
                'blue-light': '#eff6ff',
                cyan: {
                    50: '#ecfeff',
                    100: '#cffafe',
                    200: '#a5f3fc',
                    300: '#67e8f9',
                    400: '#22d3ee',
                    500: '#06b6d4',
                    600: '#0891b2',
                    700: '#0e7490',
                    800: '#155e75',
                    900: '#164e63',
                    950: '#083344'
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            borderRadius: {
                'xl': '1rem',
            },
            boxShadow: {
                'custom': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
            },
        },
    },
    plugins: [],
}