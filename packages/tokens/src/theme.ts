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

const colors: ColorPalette = {
  primary: '#a3e635', // lime-400 (text, accent, border)
  secondary: '#365314', // lime-950 (background)
  accent: '#a3e635', // lime-400
  background: '#365314', // lime-950 (button background)
  surface: '#3f6212', // lime-900 (hover background)
  text: {
    primary: '#a3e635', // lime-400
    secondary: '#365314', // lime-950
    disabled: '#3f6212', // lime-900
  },
  error: '#eb9486', // error (unchanged)
  success: '#a3e635', // lime-400
};

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
export { colors, typography, spacing, buttonSizes };

// Export types for type-safe usage
export type { ColorPalette, Typography, Spacing };

// Export Style Dictionary tokens for processing
export default {
  ...tokens,
  buttonSize: buttonSizeTokens,
};
