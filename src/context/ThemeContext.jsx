import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const themeStyles = {
    light: {
      bg: "bg-gradient-to-br from-white to-blue-50",
      nav: "bg-white/80 backdrop-blur-md border-blue-200",
      text: "text-gray-800",
      textSecondary: "text-[#6a0000]",
      card: "bg-white/70 backdrop-blur-lg border-blue-200",
      cardHover: "bg-white/90",
      buttonPrimary: "bg-gradient-to-r from-blue-500 to-purple-600 text-white",
      buttonSecondary: "border border-blue-500 text-blue-600 bg-white/80",
      accent: "text-blue-600",
      accentGradient: "from-blue-600 to-purple-600",
      sectionAlt: "bg-blue-50/50",
      footer: "bg-white border-blue-200",
      input: "bg-white border-blue-300 focus:ring-blue-400",
    },
    dark: {
      bg: "bg-gradient-to-br from-gray-900 to-blue-900",
      nav: "bg-gray-900/80 backdrop-blur-md border-cyan-500/20",
      text: "text-white",
      textSecondary: "text-gray-300",
      card: "bg-gray-800/50 backdrop-blur-lg border-cyan-500/20",
      cardHover: "bg-gray-800/70",
      buttonPrimary: "bg-gradient-to-r from-cyan-500 to-blue-600 text-white",
      buttonSecondary: "border border-cyan-400 text-cyan-400 bg-gray-800/50",
      accent: "text-cyan-400",
      accentGradient: "from-cyan-400 to-blue-500",
      sectionAlt: "bg-gray-800/30",
      footer: "bg-gray-900 border-cyan-500/20",
      input: "bg-gray-700/50 border-cyan-500/30 focus:ring-cyan-400",
    },
  };
  const [theme, setTheme] = useState(
    localStorage.getItem("conference-theme") || "light"
  );
  const styles = themeStyles[theme];
  return (
    <ThemeContext.Provider value={[theme, setTheme, styles]}>
      {children}
    </ThemeContext.Provider>
  );
}
