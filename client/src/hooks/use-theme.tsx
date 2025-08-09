import { useState, useEffect, createContext, useContext } from "react";

interface ThemeContextType {
  highContrast: boolean;
  toggleHighContrast: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('highContrast');
    if (stored === 'enabled') {
      setHighContrast(true);
    }
  }, []);

  useEffect(() => {
    if (highContrast) {
      document.body.style.filter = 'contrast(150%) brightness(120%)';
      localStorage.setItem('highContrast', 'enabled');
    } else {
      document.body.style.filter = '';
      localStorage.setItem('highContrast', 'disabled');
    }
  }, [highContrast]);

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
  };

  return (
    <ThemeContext.Provider value={{ highContrast, toggleHighContrast }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export function HighContrastToggle() {
  const { highContrast, toggleHighContrast } = useTheme();

  return (
    <button
      onClick={toggleHighContrast}
      className="fixed top-4 right-4 bg-gray-800 text-white p-2 rounded-lg hover:bg-gray-700 transition-colors z-50 hidden lg:block"
      aria-label="Toggle high contrast mode"
    >
      <i className="fas fa-adjust"></i>
    </button>
  );
}
