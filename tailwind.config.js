import flowbite from 'flowbite/plugin';
import daisyui from 'daisyui';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
		'./src/components/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {
			keyframes: {
              'marquee-left': {
                  from: { transform: 'translateX(0)' },
                  to: { transform: 'translateX(calc(-100% - var(--gap)))' }
              },
              'marquee-up': {
                  from: { transform: 'translateY(0)' },
                  to: { transform: 'translateY(calc(-100% - var(--gap)))' }
              }
          },
          animation: {
              'marquee-left': 'marquee-left var(--duration, 40s) linear infinite',
              'marquee-up': 'marquee-up var(--duration, 40s) linear infinite'
          }
		}
	},
	plugins: [
		flowbite,
		daisyui,
		animate
		// require("flowbite-typography")
	]
};