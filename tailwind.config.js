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
                    light: '#F87171', // Light Red
                    DEFAULT: '#DC2626', // Dark Red
                    dark: '#991B1B', // Deep Red
                },
                secondary: {
                    light: '#6EE7B7', // Light Green
                    DEFAULT: '#10B981', // Dark Green
                    accent: '#FBBF24', // Yellow Accent
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
