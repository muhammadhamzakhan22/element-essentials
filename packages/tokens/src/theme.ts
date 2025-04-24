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
  primary: '#0052cc',
  secondary: '#6b7280',
  accent: '#ff6200',
  background: '#f8fafc',
  surface: '#ffffff',
  text: {
    primary: '#1f2937',
    secondary: '#6b7280',
    disabled: '#d1d5db',
  },
  error: '#dc2626',
  success: '#16a34a',
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

// === Style Dictionary-Compatible Tokens ===
// Structure tokens in a format that Style Dictionary can process
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

// === Exports ===
// Export individual token sets for use in components
export { colors, typography, spacing };

// Export types for type-safe usage
export type { ColorPalette, Typography, Spacing };

// Export Style Dictionary tokens for processing
export default tokens;
