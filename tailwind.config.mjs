/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            colors: {
                rød: "#FF1054",
                grøn: "#008481",
                lysgrå: "#CACDD5",
                grå: "#70727E",
                hvid: "#FFFFFF",
            },

            fontFamily: {
                sigmar: ['"Sigmar"', 'sans-serif'],
                rubik: ['"Rubik"', 'sans-serif'],
              },
              
              animation: {
                'infinite-scroll': 'infinite-scroll 25s linear infinite',
              },
              keyframes: {
                'infinite-scroll': {
                  from: { transform: 'translateX(0)' },
                  to: { transform: 'translateX(-100%)' },
                },
              }
        },
	},
	plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
}
