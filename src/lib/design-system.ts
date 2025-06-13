/**
 * Design System Tokens
 *
 * This file contains all design tokens following industry best practices
 * Based on Material Design, Human Interface Guidelines, and modern web standards
 */

// Typography Scale (Major Third - 1.25 ratio)
export const typography = {
  // Font Sizes
  fontSize: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px - Base font size
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
    "6xl": "3.75rem", // 60px
    "7xl": "4.5rem", // 72px
    "8xl": "6rem", // 96px
    "9xl": "8rem", // 128px
  },

  // Line Heights
  lineHeight: {
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2",
  },

  // Font Weights
  fontWeight: {
    thin: "100",
    extralight: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900",
  },

  // Letter Spacing
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0em",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
} as const;

// Semantic Colors - Using OKLCH for better color consistency
export const colors = {
  // Primary Colors - Brand colors
  primary: {
    50: "oklch(0.98 0.005 66)",
    100: "oklch(0.95 0.02 66)",
    200: "oklch(0.88 0.04 66)",
    300: "oklch(0.78 0.08 66)",
    400: "oklch(0.65 0.12 66)",
    500: "oklch(0.55 0.16 66)", // Primary brand color
    600: "oklch(0.48 0.18 66)",
    700: "oklch(0.40 0.20 66)",
    800: "oklch(0.32 0.22 66)",
    900: "oklch(0.25 0.24 66)",
    950: "oklch(0.15 0.26 66)",
  },

  // Secondary Colors - Accent colors
  secondary: {
    50: "oklch(0.98 0.005 200)",
    100: "oklch(0.95 0.02 200)",
    200: "oklch(0.88 0.04 200)",
    300: "oklch(0.78 0.08 200)",
    400: "oklch(0.65 0.12 200)",
    500: "oklch(0.55 0.16 200)",
    600: "oklch(0.48 0.18 200)",
    700: "oklch(0.40 0.20 200)",
    800: "oklch(0.32 0.22 200)",
    900: "oklch(0.25 0.24 200)",
    950: "oklch(0.15 0.26 200)",
  },

  // Neutral Colors - Text and backgrounds
  neutral: {
    50: "oklch(0.98 0 0)",
    100: "oklch(0.96 0 0)",
    200: "oklch(0.92 0 0)",
    300: "oklch(0.88 0 0)",
    400: "oklch(0.72 0 0)",
    500: "oklch(0.56 0 0)",
    600: "oklch(0.44 0 0)",
    700: "oklch(0.36 0 0)",
    800: "oklch(0.24 0 0)",
    900: "oklch(0.16 0 0)",
    950: "oklch(0.08 0 0)",
  },

  // Semantic Colors
  success: {
    50: "oklch(0.96 0.02 145)",
    500: "oklch(0.55 0.15 145)",
    600: "oklch(0.45 0.18 145)",
  },

  warning: {
    50: "oklch(0.96 0.02 65)",
    500: "oklch(0.70 0.15 65)",
    600: "oklch(0.60 0.18 65)",
  },

  error: {
    50: "oklch(0.96 0.02 25)",
    500: "oklch(0.60 0.20 25)",
    600: "oklch(0.50 0.22 25)",
  },

  info: {
    50: "oklch(0.96 0.02 220)",
    500: "oklch(0.55 0.15 220)",
    600: "oklch(0.45 0.18 220)",
  },
} as const;

// Spacing Scale (8px base unit - Industry standard)
export const spacing = {
  px: "1px",
  "0.5": "0.125rem", // 2px
  "1": "0.25rem", // 4px
  "1.5": "0.375rem", // 6px
  "2": "0.5rem", // 8px - Base unit
  "2.5": "0.625rem", // 10px
  "3": "0.75rem", // 12px
  "3.5": "0.875rem", // 14px
  "4": "1rem", // 16px
  "5": "1.25rem", // 20px
  "6": "1.5rem", // 24px
  "7": "1.75rem", // 28px
  "8": "2rem", // 32px
  "9": "2.25rem", // 36px
  "10": "2.5rem", // 40px
  "11": "2.75rem", // 44px
  "12": "3rem", // 48px
  "14": "3.5rem", // 56px
  "16": "4rem", // 64px
  "20": "5rem", // 80px
  "24": "6rem", // 96px
  "28": "7rem", // 112px
  "32": "8rem", // 128px
  "36": "9rem", // 144px
  "40": "10rem", // 160px
  "44": "11rem", // 176px
  "48": "12rem", // 192px
  "52": "13rem", // 208px
  "56": "14rem", // 224px
  "60": "15rem", // 240px
  "64": "16rem", // 256px
  "72": "18rem", // 288px
  "80": "20rem", // 320px
  "96": "24rem", // 384px
} as const;

// Border Radius Scale
export const borderRadius = {
  none: "0px",
  sm: "0.125rem", // 2px
  default: "0.25rem", // 4px
  md: "0.375rem", // 6px
  lg: "0.5rem", // 8px
  xl: "0.75rem", // 12px
  "2xl": "1rem", // 16px
  "3xl": "1.5rem", // 24px
  full: "9999px",
} as const;

// Shadow System
export const shadows = {
  xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  sm: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
  inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
  none: "0 0 #0000",
} as const;

// Component Sizes
export const componentSizes = {
  // Button Sizes
  button: {
    xs: {
      height: "1.5rem", // 24px
      paddingX: "0.5rem", // 8px
      paddingY: "0.125rem", // 2px
      fontSize: typography.fontSize.xs,
      iconSize: "0.75rem", // 12px
    },
    sm: {
      height: "2rem", // 32px
      paddingX: "0.75rem", // 12px
      paddingY: "0.25rem", // 4px
      fontSize: typography.fontSize.sm,
      iconSize: "1rem", // 16px
    },
    md: {
      height: "2.5rem", // 40px - Primary button default
      paddingX: "1rem", // 16px
      paddingY: "0.5rem", // 8px
      fontSize: typography.fontSize.base,
      iconSize: "1.25rem", // 20px
    },
    lg: {
      height: "3rem", // 48px
      paddingX: "1.5rem", // 24px
      paddingY: "0.75rem", // 12px
      fontSize: typography.fontSize.lg,
      iconSize: "1.5rem", // 24px
    },
    xl: {
      height: "3.5rem", // 56px
      paddingX: "2rem", // 32px
      paddingY: "1rem", // 16px
      fontSize: typography.fontSize.xl,
      iconSize: "1.75rem", // 28px
    },
  },

  // Input Sizes
  input: {
    sm: {
      height: "2rem", // 32px
      paddingX: "0.75rem", // 12px
      fontSize: typography.fontSize.sm,
    },
    md: {
      height: "2.5rem", // 40px
      paddingX: "1rem", // 16px
      fontSize: typography.fontSize.base,
    },
    lg: {
      height: "3rem", // 48px
      paddingX: "1.25rem", // 20px
      fontSize: typography.fontSize.lg,
    },
  },

  // Avatar Sizes
  avatar: {
    xs: "1.5rem", // 24px
    sm: "2rem", // 32px
    md: "2.5rem", // 40px
    lg: "3rem", // 48px
    xl: "4rem", // 64px
    "2xl": "5rem", // 80px
  },

  // Icon Sizes
  icon: {
    xs: "0.75rem", // 12px
    sm: "1rem", // 16px
    md: "1.25rem", // 20px
    lg: "1.5rem", // 24px
    xl: "2rem", // 32px
    "2xl": "2.5rem", // 40px
  },
} as const;

// Z-Index Scale
export const zIndex = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
} as const;

// Animation & Transitions
export const animation = {
  // Duration
  duration: {
    fast: "150ms",
    normal: "200ms",
    slow: "300ms",
    slower: "500ms",
  },

  // Easing
  easing: {
    "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
    "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
    "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
    bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  },
} as const;

// Breakpoints (Mobile-first approach)
export const breakpoints = {
  sm: "640px", // Mobile landscape
  md: "768px", // Tablet
  lg: "1024px", // Desktop
  xl: "1280px", // Large desktop
  "2xl": "1536px", // Extra large desktop
} as const;

// Export all design tokens
export const designSystem = {
  typography,
  colors,
  spacing,
  borderRadius,
  shadows,
  componentSizes,
  zIndex,
  animation,
  breakpoints,
} as const;

// Type exports for TypeScript
export type DesignSystem = typeof designSystem;
export type TypographyScale = typeof typography;
export type ColorScale = typeof colors;
export type SpacingScale = typeof spacing;
