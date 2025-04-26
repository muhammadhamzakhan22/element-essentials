// theme.ts
// Design tokens for colors, typography, and spacing
// Compatible with Style Dictionary for generating CSS/JSON outputs

// === Colors ===
interface ColorPalette {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: {
    primary: string;
    secondary: string;
    disabled: string;
  };
  error: string;
  success: string;
}

interface Theme {
  name: string;
  colors: ColorPalette;
}

// Base color palette including all colors from the screenshot
const baseColors = {
  orange1: '#FA9F1C',
  orange2: '#F58D19',
  orange3: '#E47513',
  orange4: '#D0630E',
  orange5: '#BB5008',
  brown1: '#A54708',
  brown2: '#833907',
  brown3: '#612B05',
  brown4: '#391A04',
  brown5: '#231205',
};

// Define themes
const lightTheme: Theme = {
  name: 'light',
  colors: {
    primary: baseColors.orange1, // FA9F1C
    secondary: baseColors.brown1, // A54708
    accent: baseColors.orange1, // FA9F1C
    background: baseColors.brown1, // A54708
    surface: baseColors.brown2, // 833907
    text: {
      primary: baseColors.orange1, // FA9F1C
      secondary: baseColors.brown1, // A54708
      disabled: baseColors.brown2, // 833907
    },
    error: '#eb9486', // unchanged
    success: baseColors.orange1, // FA9F1C
  },
};

const mediumTheme: Theme = {
  name: 'medium',
  colors: {
    primary: baseColors.orange3, // E47513
    secondary: baseColors.brown3, // 612B05
    accent: baseColors.orange3, // E47513
    background: baseColors.brown3, // 612B05
    surface: baseColors.brown4, // 391A04
    text: {
      primary: baseColors.orange3, // E47513
      secondary: baseColors.brown3, // 612B05
      disabled: baseColors.brown4, // 391A04
    },
    error: '#eb9486', // unchanged
    success: baseColors.orange3, // E47513
  },
};

const darkTheme: Theme = {
  name: 'dark',
  colors: {
    primary: baseColors.orange5, // BB5008
    secondary: baseColors.brown5, // 231205
    accent: baseColors.orange5, // BB5008
    background: baseColors.brown5, // 231205
    surface: baseColors.brown4, // 391A04
    text: {
      primary: baseColors.orange5, // BB5008
      secondary: baseColors.brown5, // 231205
      disabled: baseColors.brown4, // 391A04
    },
    error: '#eb9486', // unchanged
    success: baseColors.orange5, // BB5008
  },
};

// Default theme (using light theme as default)
const colors: ColorPalette = lightTheme.colors;

// === Typography ===
interface FontWeight {
  regular: number;
  medium: number;
  bold: number;
}

interface Typography {
  fontFamily: {
    primary: string;
    secondary: string;
  };
  fontWeight: FontWeight;
  fontSize: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
  };
  lineHeight: {
    tight: string;
    normal: string;
    relaxed: string;
  };
}

const typography: Typography = {
  fontFamily: {
    primary: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    secondary: '"Roboto Mono", monospace',
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
  fontSize: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem', // 24px
  },
  lineHeight: {
    tight: '1.2',
    normal: '1.5',
    relaxed: '1.75',
  },
};

// === Spacing ===
interface Spacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
}

const spacing: Spacing = {
  xs: '0.25rem', // 4px
  sm: '0.5rem', // 8px
  md: '1rem', // 16px
  lg: '1.5rem', // 24px
  xl: '2rem', // 32px
  '2xl': '3rem', // 48px
};

// Style Dictionary-compatible tokens for the default theme
const tokens = {
  color: {
    brand: {
      primary: { value: colors.primary },
      secondary: { value: colors.secondary },
      accent: { value: colors.accent },
    },
    background: {
      default: { value: colors.background },
      surface: { value: colors.surface },
    },
    text: {
      primary: { value: colors.text.primary },
      secondary: { value: colors.text.secondary },
      disabled: { value: colors.text.disabled },
    },
    status: {
      error: { value: colors.error },
      success: { value: colors.success },
    },
    palette: {
      orange1: { value: baseColors.orange1 },
      orange2: { value: baseColors.orange2 },
      orange3: { value: baseColors.orange3 },
      orange4: { value: baseColors.orange4 },
      orange5: { value: baseColors.orange5 },
      brown1: { value: baseColors.brown1 },
      brown2: { value: baseColors.brown2 },
      brown3: { value: baseColors.brown3 },
      brown4: { value: baseColors.brown4 },
      brown5: { value: baseColors.brown5 },
    },
  },
  typography: {
    fontFamily: {
      primary: { value: typography.fontFamily.primary },
      secondary: { value: typography.fontFamily.secondary },
    },
    fontWeight: {
      regular: { value: typography.fontWeight.regular },
      medium: { value: typography.fontWeight.medium },
      bold: { value: typography.fontWeight.bold },
    },
    fontSize: {
      xs: { value: typography.fontSize.xs },
      sm: { value: typography.fontSize.sm },
      base: { value: typography.fontSize.base },
      lg: { value: typography.fontSize.lg },
      xl: { value: typography.fontSize.xl },
      '2xl': { value: typography.fontSize['2xl'] },
    },
    lineHeight: {
      tight: { value: typography.lineHeight.tight },
      normal: { value: typography.lineHeight.normal },
      relaxed: { value: typography.lineHeight.relaxed },
    },
  },
  spacing: {
    xs: { value: spacing.xs },
    sm: { value: spacing.sm },
    md: { value: spacing.md },
    lg: { value: spacing.lg },
    xl: { value: spacing.xl },
    '2xl': { value: spacing['2xl'] },
  },
};

// === Button Sizes ===
interface ButtonSize {
  height: string;
  fontSize: string;
  paddingX: string;
}

const buttonSizes = {
  sm: {
    height: '2rem', // 32px
    fontSize: typography.fontSize.sm, // 0.875rem
    paddingX: spacing.sm, // 0.5rem
  },
  md: {
    height: '2.5rem', // 40px (current icon button)
    fontSize: typography.fontSize.base, // 1rem
    paddingX: spacing.md, // 1rem
  },
  lg: {
    height: '3rem', // 48px
    fontSize: typography.fontSize.lg, // 1.125rem
    paddingX: spacing.lg, // 1.5rem
  },
};

// === Style Dictionary-Compatible Tokens ===
// Structure tokens in a format that Style Dictionary can process
const buttonSizeTokens = {
  sm: {
    height: { value: buttonSizes.sm.height },
    fontSize: { value: buttonSizes.sm.fontSize },
    paddingX: { value: buttonSizes.sm.paddingX },
  },
  md: {
    height: { value: buttonSizes.md.height },
    fontSize: { value: buttonSizes.md.fontSize },
    paddingX: { value: buttonSizes.md.paddingX },
  },
  lg: {
    height: { value: buttonSizes.lg.height },
    fontSize: { value: buttonSizes.lg.fontSize },
    paddingX: { value: buttonSizes.lg.paddingX },
  },
};

// === Exports ===
// Export individual token sets for use in components
export { colors, typography, spacing, buttonSizes, baseColors, lightTheme, mediumTheme, darkTheme };

// Export types for type-safe usage
export type { ColorPalette, Typography, Spacing, Theme };

// Export Style Dictionary tokens for processing
export default {
  ...tokens,
  buttonSize: buttonSizeTokens,
};