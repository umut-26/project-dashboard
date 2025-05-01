// Renk paleti tanımları
export const colors = {
  // Ana renkler
  lightBlue: "#B3D6E7",   // Açık mavi
  blue: "#219EBC",        // Mavi
  transparentWhite: "rgba(255, 255, 255, 0.34)", // Yarı saydam beyaz
  darkBlue: "#023047",    // Lacivert
  orange: "#FB8500",      // Turuncu
  
  // Farklı kullanımlar için türetilmiş renkler
  primary: "#219EBC",     // Ana renk (mavi) 
  secondary: "#FB8500",   // İkincil renk (turuncu)
  background: "#B3D6E7",  // Arka plan rengi (açık mavi)
  text: "#023047",        // Metin rengi (lacivert)
  accent: "#FB8500",      // Vurgu rengi (turuncu)
  overlay: "rgba(255, 255, 255, 0.34)", // Overlay rengi (yarı saydam beyaz)
};

// Tema modları
export const themes = {
  light: {
    background: colors.lightBlue,
    foreground: colors.darkBlue,
    primary: colors.blue,
    secondary: colors.orange,
    accent: colors.orange,
    muted: colors.transparentWhite,
    border: "rgba(2, 48, 71, 0.1)", // Lacivert temelli border rengi
  },
  dark: {
    background: colors.darkBlue,
    foreground: colors.lightBlue,
    primary: colors.blue,
    secondary: colors.orange,
    accent: colors.orange,
    muted: "rgba(179, 214, 231, 0.1)", // Açık mavi temelli muted renk
    border: "rgba(179, 214, 231, 0.2)", // Açık mavi temelli border rengi
  },
};

// Renk ile ilgili yardımcı işlevler
export const getTheme = (mode: 'light' | 'dark') => {
  return themes[mode];
};

// CSS variables için bir helper
export const cssVariables = (mode: 'light' | 'dark') => {
  const theme = themes[mode];
  
  return {
    '--color-background': theme.background,
    '--color-foreground': theme.foreground,
    '--color-primary': theme.primary,
    '--color-secondary': theme.secondary,
    '--color-accent': theme.accent,
    '--color-muted': theme.muted,
    '--color-border': theme.border,
  };
};

export default colors;