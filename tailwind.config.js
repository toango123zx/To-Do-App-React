export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: ['class', '[data-theme="dark"]'],
	theme: {
		screens: {
			sm: '375px',
			md: '834px',
			lg: '1280px',
			xl: '1440px',
		},
		fontFamily: {
			borel: ['Borel', 'cursive'],
		},
		extend: {
			colors: {
				'button-amber': 'var(--button-amber)',
				'button-gray': 'var(--button-gray)',
				'text-amber': 'var(--text-amber)',
				bg: 'var(--sys-color-bg)',
				surface: 'var(--sys-color-surface)',
				'surface-2': 'var(--sys-color-surface-2)',
				'surface-3': 'var(--sys-color-surface-3)',

				fg: 'var(--sys-color-fg)',
				'fg-muted': 'var(--sys-color-fg-muted)',
				'fg-subtle': 'var(--sys-color-fg-subtle)',

				border: 'var(--sys-color-border)',
				'border-hover': 'var(--sys-color-border-hover)',

				input: 'var(--sys-color-input)',
				'input-border': 'var(--sys-color-input-border)',

				primary: 'var(--sys-color-primary)',
				'primary-hover': 'var(--sys-color-primary-hover)',
				'primary-pressed': 'var(--sys-color-primary-pressed)',
				'primary-disabled': 'var(--sys-color-primary-disabled)',
				'on-primary': 'var(--sys-color-on-primary)',

				ring: 'var(--sys-color-ring)',

				success: 'var(--sys-color-success)',
				warning: 'var(--sys-color-warning)',
				danger: 'var(--sys-color-danger)',
				info: 'var(--sys-color-info)',
			},
			fontFamily: {
				sans: 'var(--sys-font-sans)',
			},

			// borderRadius: {
			//     sm: "var(--sys-radius-sm)",
			//     md: "var(--sys-radius-md)",
			//     lg: "var(--sys-radius-lg)",
			//     full: "var(--sys-radius-full)",
			// },
			// borderRadius: {
			// 	sm: 'var(--sys-radius-sm)',
			// 	md: 'var(--sys-radius-md)',
			// 	lg: 'var(--sys-radius-lg)',
			// 	full: 'var(--sys-radius-full)',
			// },

			boxShadow: {
				sm: 'var(--sys-shadow-sm)',
				md: 'var(--sys-shadow-md)',
			},

			transitionDuration: {
				fast: 'var(--sys-motion-fast)',
				normal: 'var(--sys-motion-normal)',
			},

			transitionTimingFunction: {
				sys: 'var(--sys-motion-ease)',
			},

			spacing: {
				2.75: '0.6875rem', // 11px
			},
		},
	},
	// variants: {
	//     extend: {
	//         borderColor: ['focus-visible'],
	//         opacity: ['disabled'],
	//     },
	//     extend: {
	//         colors: {
	//             amber: colors.amber[300]
	//         }
	//     }
	// }
};
