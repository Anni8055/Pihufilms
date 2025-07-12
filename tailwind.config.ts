import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			contrast: {
				'110': '1.1',
			},
			colors: {
				border: '#e2e2e2',
				input: '#e2e2e2',
				ring: '#000000',
				background: '#ffffff',
				foreground: '#000000',
				primary: {
					DEFAULT: '#000000',
					foreground: '#ffffff'
				},
				secondary: {
					DEFAULT: '#f8f7f4',
					foreground: '#000000'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: '#f8f7f4',
					foreground: '#6b6b6b'
				},
				accent: {
					DEFAULT: '#C3A68B',
					foreground: '#ffffff'
				},
				popover: {
					DEFAULT: '#ffffff',
					foreground: '#000000'
				},
				card: {
					DEFAULT: '#ffffff',
					foreground: '#000000'
				},
			},
			fontFamily: {
				sans: ['Montserrat', 'sans-serif'],
				heading: ['Cormorant Garamond', 'serif'],
				serif: ['Cormorant Garamond', 'serif'],
				script: ['Parisienne', 'cursive'],
				drip: ['Drip October', 'cursive'],
			},
			borderRadius: {
				lg: '0.25rem',
				md: '0.125rem',
				sm: '0.125rem'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fade-out': {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'marquee': {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-out': 'fade-out 0.5s ease-out',
				'slide-up': 'slide-up 0.5s ease-out',
				'marquee': 'marquee 60s linear infinite',
			},
			backgroundImage: {
				'texture-light': "url('/texture-light.png')",
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
