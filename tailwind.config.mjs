/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#1C2B62',
				'secondary': '#9D3BE4',
				'accent': '#0E0E11',
				'semi-dark': '#17171B',
				'background': '#0E0E11',
				'border-dark': '#252525',
				'semi-white': '#8F8F8F',
				'brown': '#3c3633',
				'purple': '#6e51f0',
			},

			fontFamily: {
				'saira': ['Saira Extra Condensed', 'sans-serif'],
				'lobster': ['Lobster', 'sans-serif'],
				'mplus': ['"M PLUS Rounded 1c"', 'sans-serif'],
				'dafoe': ['Mr Dafoe', 'sans-serif'],
			},

			fontWeight: {
				'black': 900,
				'regular': 400,
			},

			fontSize: {
				'12xl': '15rem',
				'11xl': '11rem',
				'10xl': '10rem',
				'9xl': '9rem',
				'8xl': '8rem',
				'7xl': '7rem',
				'6xl': '6rem',
				'5xl': '5rem',
				'4xl': '4rem',
				'3xl': '3rem',
				'2xl': '2rem',
				'xl': '1rem',
			},

			animation: {
				'up-down': 'upDown 3s ease-in-out infinite',
			},

			keyframes: {
				upDown: {
					'0%, 100%': { transform: 'translateY(-5px)' },
					'50%': { transform: 'translateY(-20px)' },
				},
			},
		},
	},
	plugins: [],
}
