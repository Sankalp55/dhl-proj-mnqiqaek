import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: false,
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './lib/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-foreground': 'var(--color-primary-foreground)',
        secondary: 'var(--color-secondary)',
        'secondary-foreground': 'var(--color-secondary-foreground)',
        accent: 'var(--color-accent)',
        'accent-foreground': 'var(--color-accent-foreground)',
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        muted: 'var(--color-muted)',
        'muted-foreground': 'var(--color-muted-foreground)',
        border: 'var(--color-border)',
        ring: 'var(--color-ring)',
        destructive: 'var(--color-destructive)',
        card: 'var(--color-card)',
        'card-foreground': 'var(--color-card-foreground)'
      },
      borderRadius: {
        xl: '0.75rem'
      },
      fontFamily: {
        heading: ['"Arial Black"', 'Arial', 'sans-serif'],
        body: ['Arial', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
