import { createContext, useContext, useState, useEffect } from 'react';

const themes = {
  blackTie: {
    name: 'Black Tie',
    swatch: '#0B0B0B',
    vars: {
      '--primary-dark': '#0B0B0B',
      '--primary-mid': '#1C1917',
      '--primary-soft': '#2A2520',
      '--accent': '#C8A24D',
      '--accent-light': '#DFBE6F',
      '--accent-dark': '#A8873A',
      '--accent-muted': 'rgba(200, 162, 77, 0.12)',
      '--cream': '#FAF6EE',
      '--warm-white': '#F5F0E8',
      '--off-white': '#FFFEFA',
      '--text': '#1A1A1A',
      '--text-light': '#6B6560',
      '--text-muted': '#9A9490',
      '--border': '#E5DFD4',
      '--glass': 'rgba(11, 11, 11, 0.85)',
      '--glass-border': 'rgba(200, 162, 77, 0.08)',
      '--footer-bg': '#060606',
      '--hero-gradient': 'linear-gradient(135deg, #0B0B0B 0%, #1C1917 40%, #2A2520 100%)',
      '--hero-glow': 'radial-gradient(ellipse at 70% 30%, rgba(200,162,77,0.06) 0%, transparent 60%)',
      '--card-overlay': 'linear-gradient(to top, rgba(11,11,11,0.92) 0%, rgba(11,11,11,0.25) 55%, transparent 100%)',
      '--card-bg': 'rgba(255,255,255,0.025)',
      '--card-border': 'rgba(200, 162, 77, 0.07)',
      '--card-hover-border': 'rgba(200, 162, 77, 0.2)',
      '--card-hover-bg': 'rgba(255,255,255,0.04)',
      '--quote-mark': 'rgba(200, 162, 77, 0.1)',
      '--quote-text': 'rgba(255,255,255,0.6)',
      '--input-bg': 'rgba(255,255,255,0.04)',
      '--input-border': 'rgba(200, 162, 77, 0.12)',
      '--nav-link': 'rgba(255,255,255,0.7)',
      '--utility-link': 'rgba(255,255,255,0.35)',
      '--footer-text': 'rgba(255,255,255,0.3)',
      '--footer-link': 'rgba(255,255,255,0.35)',
      '--footer-divider': 'rgba(255,255,255,0.04)',
      '--social-border': 'rgba(255,255,255,0.08)',
      '--role-text': 'rgba(255,255,255,0.3)',
    },
  },

  heritageClub: {
    name: 'Heritage Club',
    swatch: '#3D1525',
    vars: {
      '--primary-dark': '#1E0A10',
      '--primary-mid': '#3D1525',
      '--primary-soft': '#5A2035',
      '--accent': '#C49A6C',
      '--accent-light': '#DBBFA0',
      '--accent-dark': '#A37D52',
      '--accent-muted': 'rgba(196, 154, 108, 0.12)',
      '--cream': '#FBF5F0',
      '--warm-white': '#F7F1EB',
      '--off-white': '#FFFBF7',
      '--text': '#2A1A1E',
      '--text-light': '#7A6068',
      '--text-muted': '#9A8890',
      '--border': '#E8DED6',
      '--glass': 'rgba(30, 10, 16, 0.85)',
      '--glass-border': 'rgba(196, 154, 108, 0.08)',
      '--footer-bg': '#120610',
      '--hero-gradient': 'linear-gradient(135deg, #1E0A10 0%, #3D1525 40%, #5A2035 100%)',
      '--hero-glow': 'radial-gradient(ellipse at 70% 30%, rgba(196,154,108,0.07) 0%, transparent 60%)',
      '--card-overlay': 'linear-gradient(to top, rgba(30,10,16,0.92) 0%, rgba(30,10,16,0.25) 55%, transparent 100%)',
      '--card-bg': 'rgba(255,255,255,0.03)',
      '--card-border': 'rgba(196, 154, 108, 0.08)',
      '--card-hover-border': 'rgba(196, 154, 108, 0.22)',
      '--card-hover-bg': 'rgba(255,255,255,0.045)',
      '--quote-mark': 'rgba(196, 154, 108, 0.12)',
      '--quote-text': 'rgba(255,255,255,0.6)',
      '--input-bg': 'rgba(255,255,255,0.04)',
      '--input-border': 'rgba(196, 154, 108, 0.15)',
      '--nav-link': 'rgba(255,255,255,0.7)',
      '--utility-link': 'rgba(255,255,255,0.35)',
      '--footer-text': 'rgba(255,255,255,0.3)',
      '--footer-link': 'rgba(255,255,255,0.35)',
      '--footer-divider': 'rgba(255,255,255,0.04)',
      '--social-border': 'rgba(255,255,255,0.08)',
      '--role-text': 'rgba(255,255,255,0.3)',
    },
  },

  royalReserve: {
    name: 'Royal Reserve',
    swatch: '#0E3527',
    vars: {
      '--primary-dark': '#071F17',
      '--primary-mid': '#0E3527',
      '--primary-soft': '#184A38',
      '--accent': '#D4A843',
      '--accent-light': '#E8C975',
      '--accent-dark': '#B08C32',
      '--accent-muted': 'rgba(212, 168, 67, 0.12)',
      '--cream': '#F8F6F0',
      '--warm-white': '#F2EFE8',
      '--off-white': '#FEFDF9',
      '--text': '#1A2A22',
      '--text-light': '#5A6E62',
      '--text-muted': '#8A9A90',
      '--border': '#DFE0D6',
      '--glass': 'rgba(7, 31, 23, 0.85)',
      '--glass-border': 'rgba(212, 168, 67, 0.08)',
      '--footer-bg': '#041510',
      '--hero-gradient': 'linear-gradient(135deg, #071F17 0%, #0E3527 40%, #184A38 100%)',
      '--hero-glow': 'radial-gradient(ellipse at 70% 30%, rgba(212,168,67,0.06) 0%, transparent 60%)',
      '--card-overlay': 'linear-gradient(to top, rgba(7,31,23,0.92) 0%, rgba(7,31,23,0.25) 55%, transparent 100%)',
      '--card-bg': 'rgba(255,255,255,0.03)',
      '--card-border': 'rgba(212, 168, 67, 0.08)',
      '--card-hover-border': 'rgba(212, 168, 67, 0.22)',
      '--card-hover-bg': 'rgba(255,255,255,0.045)',
      '--quote-mark': 'rgba(212, 168, 67, 0.12)',
      '--quote-text': 'rgba(255,255,255,0.6)',
      '--input-bg': 'rgba(255,255,255,0.04)',
      '--input-border': 'rgba(212, 168, 67, 0.15)',
      '--nav-link': 'rgba(255,255,255,0.7)',
      '--utility-link': 'rgba(255,255,255,0.35)',
      '--footer-text': 'rgba(255,255,255,0.3)',
      '--footer-link': 'rgba(255,255,255,0.35)',
      '--footer-divider': 'rgba(255,255,255,0.04)',
      '--social-border': 'rgba(255,255,255,0.08)',
      '--role-text': 'rgba(255,255,255,0.3)',
    },
  },
};

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState(() => {
    try {
      return localStorage.getItem('emr-theme') || 'blackTie';
    } catch {
      return 'blackTie';
    }
  });

  useEffect(() => {
    const theme = themes[themeName];
    if (!theme) return;
    const root = document.documentElement;
    Object.entries(theme.vars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
    try {
      localStorage.setItem('emr-theme', themeName);
    } catch {}
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, setTheme: setThemeName, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider');
  return ctx;
}
