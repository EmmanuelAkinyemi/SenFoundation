import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        'node_modules/preline/dist/*.js',
    ],

    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#2563EB', // Light Blue
                    DEFAULT: '#1E3A8A', // Dark Blue
                    dark: '#0F172A', // Navy Blue
                },
                secondary: {
                    light: '#34D399', // Light Green
                    DEFAULT: '#10B981', // Dark Green
                    accent: '#F59E0B', // Yellow Accent
                },
            },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                heading: ['Poppins', 'sans-serif'], // For headings
                body: ['Inter', 'sans-serif'], // For body text
            },
        },
    },

    plugins: [
        forms,
        require('preline/plugin'),

    ],
};
