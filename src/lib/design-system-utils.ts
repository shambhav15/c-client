/**
 * Design System Utilities
 *
 * Helper functions and utilities to make using the design system easier
 */

import { designSystem, componentSizes } from "./design-system";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Enhanced cn function for className merging
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Typography utilities
export const typography = {
  // Heading styles with semantic hierarchy
  h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
  h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
  h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  h4: "scroll-m-20 text-xl font-semibold tracking-tight",
  h5: "scroll-m-20 text-lg font-semibold tracking-tight",
  h6: "scroll-m-20 text-base font-semibold tracking-tight",

  // Body text styles
  p: "leading-7 [&:not(:first-child)]:mt-6",
  lead: "text-xl text-muted-foreground",
  large: "text-lg font-semibold",
  small: "text-sm font-medium leading-none",
  muted: "text-sm text-muted-foreground",

  // Code styles
  code: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
  pre: "mb-4 mt-6 overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900",

  // List styles
  ul: "my-6 ml-6 list-disc [&>li]:mt-2",
  ol: "my-6 ml-6 list-decimal [&>li]:mt-2",

  // Quote styles
  blockquote: "mt-6 border-l-2 pl-6 italic",
} as const;

// Component variant utilities
export const variants = {
  // Button variants
  button: {
    // Variant styles
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline:
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    },

    // Size styles
    size: {
      xs: "h-6 px-2 text-xs",
      sm: "h-8 px-3 text-sm",
      md: "h-10 px-4 py-2", // Default size
      lg: "h-12 px-6 text-lg",
      xl: "h-14 px-8 text-xl",
      icon: "h-10 w-10",
    },
  },

  // Input variants
  input: {
    size: {
      sm: "h-8 px-3 text-sm",
      md: "h-10 px-4", // Default size
      lg: "h-12 px-5 text-lg",
    },
  },

  // Badge variants
  badge: {
    variant: {
      default:
        "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
      secondary:
        "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
      destructive:
        "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
      outline: "text-foreground border-border",
      success: "border-transparent bg-green-500 text-white hover:bg-green-600",
      warning:
        "border-transparent bg-yellow-500 text-white hover:bg-yellow-600",
      info: "border-transparent bg-blue-500 text-white hover:bg-blue-600",
    },
  },

  // Card variants
  card: {
    variant: {
      default: "border bg-card text-card-foreground shadow-sm",
      elevated: "border bg-card text-card-foreground shadow-md",
      outlined: "border-2 bg-card text-card-foreground",
      ghost: "bg-card/50 text-card-foreground",
    },
  },
} as const;

// Layout utilities
export const layout = {
  // Container styles
  container: "container mx-auto px-4 sm:px-6 lg:px-8",

  // Flexbox utilities
  flex: {
    center: "flex items-center justify-center",
    between: "flex items-center justify-between",
    start: "flex items-center justify-start",
    end: "flex items-center justify-end",
    col: "flex flex-col",
    colCenter: "flex flex-col items-center justify-center",
  },

  // Grid utilities
  grid: {
    cols1: "grid grid-cols-1",
    cols2: "grid grid-cols-1 md:grid-cols-2",
    cols3: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    cols4: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    responsive: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  },

  // Spacing utilities
  section: "py-12 md:py-16 lg:py-20",
  card: "p-4 md:p-6",
  modal: "p-6 md:p-8",
} as const;

// Animation utilities
export const animations = {
  // Fade animations
  fadeIn: "animate-in fade-in duration-300",
  fadeOut: "animate-out fade-out duration-200",

  // Slide animations
  slideInFromTop: "animate-in slide-in-from-top-2 fade-in duration-300",
  slideInFromBottom: "animate-in slide-in-from-bottom-2 fade-in duration-300",
  slideInFromLeft: "animate-in slide-in-from-left-2 fade-in duration-300",
  slideInFromRight: "animate-in slide-in-from-right-2 fade-in duration-300",

  // Scale animations
  scaleIn: "animate-in zoom-in-95 fade-in duration-300",
  scaleOut: "animate-out zoom-out-95 fade-out duration-200",

  // Bounce animation
  bounce: "animate-bounce",

  // Pulse animation
  pulse: "animate-pulse",

  // Spin animation
  spin: "animate-spin",
} as const;

// State utilities
export const states = {
  // Focus states
  focus: "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  focusVisible:
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",

  // Hover states
  hover: "hover:opacity-80 transition-opacity",
  hoverScale: "hover:scale-105 transition-transform",

  // Active states
  active: "active:scale-95 transition-transform",

  // Disabled states
  disabled: "disabled:pointer-events-none disabled:opacity-50",

  // Loading states
  loading: "pointer-events-none opacity-70",
} as const;

// Responsive utilities
export const responsive = {
  // Show/hide on different screens
  showOnMobile: "block md:hidden",
  hideOnMobile: "hidden md:block",
  showOnTablet: "hidden md:block lg:hidden",
  showOnDesktop: "hidden lg:block",

  // Text sizes
  textResponsive: "text-sm md:text-base lg:text-lg",
  headingResponsive: "text-2xl md:text-3xl lg:text-4xl",

  // Spacing
  paddingResponsive: "p-4 md:p-6 lg:p-8",
  marginResponsive: "m-4 md:m-6 lg:m-8",
} as const;

// Color utilities (for dynamic color application)
export const colorUtils = {
  // Get color by name and shade
  getColor: (
    colorName: keyof typeof designSystem.colors,
    shade: number = 500
  ) => {
    const colorScale = designSystem.colors[colorName];
    if (typeof colorScale === "object" && shade in colorScale) {
      return colorScale[shade as keyof typeof colorScale];
    }
    return colorScale;
  },

  // Generate Tailwind classes for colors
  bg: (colorName: string, shade?: number) =>
    shade ? `bg-${colorName}-${shade}` : `bg-${colorName}`,
  text: (colorName: string, shade?: number) =>
    shade ? `text-${colorName}-${shade}` : `text-${colorName}`,
  border: (colorName: string, shade?: number) =>
    shade ? `border-${colorName}-${shade}` : `border-${colorName}`,
} as const;

// Component size utilities
export const sizeUtils = {
  // Get button size classes
  getButtonSize: (size: keyof typeof componentSizes.button = "md") => {
    const sizeConfig = componentSizes.button[size];
    return {
      height: sizeConfig.height,
      paddingX: sizeConfig.paddingX,
      paddingY: sizeConfig.paddingY,
      fontSize: sizeConfig.fontSize,
      iconSize: sizeConfig.iconSize,
    };
  },

  // Get input size classes
  getInputSize: (size: keyof typeof componentSizes.input = "md") => {
    const sizeConfig = componentSizes.input[size];
    return {
      height: sizeConfig.height,
      paddingX: sizeConfig.paddingX,
      fontSize: sizeConfig.fontSize,
    };
  },
} as const;

// Validation utilities
export const validation = {
  // Form validation states
  error:
    "border-destructive text-destructive focus:border-destructive focus:ring-destructive",
  success:
    "border-green-500 text-green-600 focus:border-green-500 focus:ring-green-500",
  warning:
    "border-yellow-500 text-yellow-600 focus:border-yellow-500 focus:ring-yellow-500",
} as const;

// Export all utilities
export const ds = {
  typography,
  variants,
  layout,
  animations,
  states,
  responsive,
  colorUtils,
  sizeUtils,
  validation,
} as const;

// Default export for convenience
export default ds;
