/**
 * Design System Hooks
 *
 * React hooks for using the design system in a type-safe and convenient way
 */

import { useMemo, useState, useCallback } from "react";
import { designSystem, componentSizes, colors } from "@/lib/design-system";
import { ds, cn } from "@/lib/design-system-utils";

// Hook for theme management
export function useTheme() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  const toggleTheme = useCallback(() => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (typeof window !== "undefined") {
      if (newTheme) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }
  }, [isDark]);

  const setTheme = useCallback((theme: "light" | "dark" | "system") => {
    if (typeof window !== "undefined") {
      if (theme === "system") {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
          .matches
          ? "dark"
          : "light";
        setIsDark(systemTheme === "dark");
        document.documentElement.classList.toggle(
          "dark",
          systemTheme === "dark"
        );
        localStorage.removeItem("theme");
      } else {
        setIsDark(theme === "dark");
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
      }
    }
  }, []);

  return {
    isDark,
    theme: isDark ? "dark" : ("light" as const),
    toggleTheme,
    setTheme,
  };
}

// Hook for responsive breakpoints
export function useBreakpoint() {
  const [breakpoint, setBreakpoint] =
    useState<keyof typeof designSystem.breakpoints>("sm");

  const checkBreakpoint = useCallback(() => {
    if (typeof window === "undefined") return;

    const width = window.innerWidth;

    if (width >= 1536) setBreakpoint("2xl");
    else if (width >= 1280) setBreakpoint("xl");
    else if (width >= 1024) setBreakpoint("lg");
    else if (width >= 768) setBreakpoint("md");
    else setBreakpoint("sm");
  }, []);

  // Check on mount and window resize
  if (typeof window !== "undefined") {
    window.addEventListener("resize", checkBreakpoint);
    checkBreakpoint();
  }

  const isAbove = useCallback(
    (bp: keyof typeof designSystem.breakpoints) => {
      const breakpoints = ["sm", "md", "lg", "xl", "2xl"];
      const currentIndex = breakpoints.indexOf(breakpoint);
      const targetIndex = breakpoints.indexOf(bp);
      return currentIndex >= targetIndex;
    },
    [breakpoint]
  );

  const isBelow = useCallback(
    (bp: keyof typeof designSystem.breakpoints) => {
      const breakpoints = ["sm", "md", "lg", "xl", "2xl"];
      const currentIndex = breakpoints.indexOf(breakpoint);
      const targetIndex = breakpoints.indexOf(bp);
      return currentIndex < targetIndex;
    },
    [breakpoint]
  );

  return {
    breakpoint,
    isAbove,
    isBelow,
    isMobile: breakpoint === "sm",
    isTablet: breakpoint === "md",
    isDesktop: isAbove("lg"),
  };
}

// Hook for component sizing
export function useComponentSize() {
  const getButtonClasses = useCallback(
    (
      size: keyof typeof componentSizes.button = "md",
      variant: keyof typeof ds.variants.button.variant = "default"
    ) => {
      return cn(
        // Base button styles
        "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        // Size styles
        ds.variants.button.size[size],
        // Variant styles
        ds.variants.button.variant[variant]
      );
    },
    []
  );

  const getInputClasses = useCallback(
    (size: keyof typeof componentSizes.input = "md", hasError?: boolean) => {
      return cn(
        // Base input styles
        "flex rounded-md border border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium",
        "placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        // Size styles
        ds.variants.input.size[size],
        // Error styles
        hasError && ds.validation.error
      );
    },
    []
  );

  const getBadgeClasses = useCallback(
    (variant: keyof typeof ds.variants.badge.variant = "default") => {
      return cn(
        // Base badge styles
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        // Variant styles
        ds.variants.badge.variant[variant]
      );
    },
    []
  );

  const getCardClasses = useCallback(
    (variant: keyof typeof ds.variants.card.variant = "default") => {
      return cn(
        // Base card styles
        "rounded-lg",
        // Variant styles
        ds.variants.card.variant[variant]
      );
    },
    []
  );

  return {
    getButtonClasses,
    getInputClasses,
    getBadgeClasses,
    getCardClasses,
  };
}

// Hook for typography
export function useTypography() {
  const getHeadingClasses = useCallback((level: 1 | 2 | 3 | 4 | 5 | 6) => {
    const headingMap = {
      1: ds.typography.h1,
      2: ds.typography.h2,
      3: ds.typography.h3,
      4: ds.typography.h4,
      5: ds.typography.h5,
      6: ds.typography.h6,
    };
    return headingMap[level];
  }, []);

  const getTextClasses = useCallback(
    (variant: "p" | "lead" | "large" | "small" | "muted" = "p") => {
      return ds.typography[variant];
    },
    []
  );

  const getCodeClasses = useCallback((block?: boolean) => {
    return block ? ds.typography.pre : ds.typography.code;
  }, []);

  const getListClasses = useCallback((ordered?: boolean) => {
    return ordered ? ds.typography.ol : ds.typography.ul;
  }, []);

  return {
    getHeadingClasses,
    getTextClasses,
    getCodeClasses,
    getListClasses,
    typography: ds.typography,
  };
}

// Hook for color utilities
export function useColors() {
  const getColorValue = useCallback(
    (colorName: keyof typeof colors, shade: number = 500) => {
      const colorScale = colors[colorName];
      if (typeof colorScale === "object" && shade in colorScale) {
        return colorScale[shade as keyof typeof colorScale];
      }
      return colorScale;
    },
    []
  );

  const getColorClasses = useCallback(
    (
      colorName: string,
      shade?: number,
      type: "bg" | "text" | "border" = "bg"
    ) => {
      const colorClass = shade ? `${colorName}-${shade}` : colorName;
      return `${type}-${colorClass}`;
    },
    []
  );

  return {
    getColorValue,
    getColorClasses,
    colors,
  };
}

// Hook for animations
export function useAnimations() {
  const [isAnimating, setIsAnimating] = useState(false);

  const animate = useCallback((duration: number = 300) => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), duration);
  }, []);

  const getAnimationClasses = useCallback(
    (animationType: keyof typeof ds.animations) => {
      return ds.animations[animationType];
    },
    []
  );

  return {
    isAnimating,
    animate,
    getAnimationClasses,
    animations: ds.animations,
  };
}

// Hook for layout utilities
export function useLayout() {
  const getLayoutClasses = useCallback((layoutType: keyof typeof ds.layout) => {
    return ds.layout[layoutType];
  }, []);

  const getFlexClasses = useCallback(
    (flexType: keyof typeof ds.layout.flex) => {
      return ds.layout.flex[flexType];
    },
    []
  );

  const getGridClasses = useCallback(
    (gridType: keyof typeof ds.layout.grid) => {
      return ds.layout.grid[gridType];
    },
    []
  );

  return {
    getLayoutClasses,
    getFlexClasses,
    getGridClasses,
    layout: ds.layout,
  };
}

// Main design system hook that combines all utilities
export function useDesignSystem() {
  const theme = useTheme();
  const breakpoint = useBreakpoint();
  const componentSize = useComponentSize();
  const typography = useTypography();
  const colors = useColors();
  const animations = useAnimations();
  const layout = useLayout();

  return {
    theme,
    breakpoint,
    componentSize,
    typography,
    colors,
    animations,
    layout,
    // Direct access to design system
    designSystem,
    // Utility functions
    cn,
    ds,
  };
}
