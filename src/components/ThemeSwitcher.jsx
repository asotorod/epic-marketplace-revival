import { useTheme } from '../context/ThemeContext';
import './ThemeSwitcher.css';

export default function ThemeSwitcher({ mobile = false }) {
  const { themeName, setTheme, themes } = useTheme();

  const dots = Object.entries(themes).map(([key, theme]) => (
    <button
      key={key}
      className={`theme-dot${themeName === key ? ' active' : ''}`}
      style={{
        background: theme.swatch,
        ...(theme.swatchBorder && themeName !== key && { borderColor: theme.swatchBorder }),
      }}
      onClick={() => setTheme(key)}
      aria-label={`Switch to ${theme.name} theme`}
    >
      {!mobile && <span className="theme-dot-tooltip">{theme.name}</span>}
    </button>
  ));

  if (mobile) {
    return (
      <div className="mobile-theme-chooser">
        <span className="mobile-theme-label">Choose Theme</span>
        <div className="mobile-theme-dots">{dots}</div>
      </div>
    );
  }

  return <div className="theme-switcher">{dots}</div>;
}
