# Design System Documentation

## Overview

This design system provides a comprehensive set of design tokens, utilities, and components following industry best practices. It's built on top of Tailwind CSS and shadcn/ui components with consistent sizing, colors, typography, and spacing.

## Key Features

- **Consistent Typography Scale**: Major third (1.25) ratio for harmonious text hierarchy
- **Semantic Color System**: OKLCH color space for better perceptual uniformity
- **8px Grid System**: Industry-standard spacing based on 8px increments
- **Component Sizing**: Standardized button, input, and component sizes
- **Responsive Design**: Mobile-first approach with consistent breakpoints
- **Dark Mode Support**: Built-in theme switching capabilities
- **TypeScript Support**: Full type safety for all design tokens

## Installation & Setup

The design system is already integrated into your project. Here's how to use it:

```typescript
// Import the design system
import { useDesignSystem } from "@/hooks/use-design-system";
import { cn, ds } from "@/lib/design-system-utils";
import { designSystem } from "@/lib/design-system";
```

## Typography

### Font Sizes

Following a Major Third (1.25) scale for harmonious proportions:

```typescript
// Available font sizes
const sizes = {
  xs: "12px", // Small labels, captions
  sm: "14px", // Secondary text
  base: "16px", // Body text (default)
  lg: "18px", // Emphasized text
  xl: "20px", // Small headings
  "2xl": "24px", // Headings
  "3xl": "30px", // Large headings
  "4xl": "36px", // Page titles
  "5xl": "48px", // Hero text
  // ... up to 9xl
};
```

### Usage Examples

```tsx
// Using typography hooks
const { getHeadingClasses, getTextClasses } = useTypography();

// Headings
<h1 className={getHeadingClasses(1)}>Main Title</h1>
<h2 className={getHeadingClasses(2)}>Section Title</h2>

// Body text
<p className={getTextClasses('p')}>Regular paragraph text</p>
<p className={getTextClasses('lead')}>Lead paragraph text</p>
<p className={getTextClasses('muted')}>Muted text</p>

// Direct utility classes
<h1 className={ds.typography.h1}>Main Title</h1>
<p className={ds.typography.p}>Body text</p>
<code className={ds.typography.code}>Inline code</code>
```

## Colors

### Color Palette

Using OKLCH color space for consistent perceptual lightness:

```typescript
// Primary colors (brand colors)
primary: {
  50: 'oklch(0.98 0.005 66)',   // Lightest
  500: 'oklch(0.55 0.16 66)',   // Default brand color
  900: 'oklch(0.25 0.24 66)',   // Darkest
}

// Secondary colors (accent colors)
secondary: {
  50: 'oklch(0.98 0.005 200)',
  500: 'oklch(0.55 0.16 200)',
  900: 'oklch(0.25 0.24 200)',
}

// Semantic colors
success: { 50, 500, 600 }
warning: { 50, 500, 600 }
error: { 50, 500, 600 }
info: { 50, 500, 600 }
```

### Usage Examples

```tsx
// Using color hooks
const { getColorClasses, getColorValue } = useColors();

// Apply colors
<div className={getColorClasses('primary', 500, 'bg')}>
  <span className={getColorClasses('primary', 50, 'text')}>Text</span>
</div>

// Direct usage
<div className="bg-primary-500 text-primary-50">
  Primary colored section
</div>

// Semantic colors
<div className="bg-success-500 text-white">Success message</div>
<div className="bg-error-500 text-white">Error message</div>
```

## Button Sizes

### Primary Buttons (Default)

```tsx
// Button size specifications
const buttonSizes = {
  xs: { height: "24px", padding: "8px", fontSize: "12px" },
  sm: { height: "32px", padding: "12px", fontSize: "14px" },
  md: { height: "40px", padding: "16px", fontSize: "16px" }, // Default
  lg: { height: "48px", padding: "24px", fontSize: "18px" },
  xl: { height: "56px", padding: "32px", fontSize: "20px" },
};
```

### Usage Examples

```tsx
// Using component size hook
const { getButtonClasses } = useComponentSize();

// Primary buttons
<button className={getButtonClasses('md', 'default')}>
  Primary Button
</button>

<button className={getButtonClasses('lg', 'default')}>
  Large Primary Button
</button>

// Direct utility classes
<button className={cn(ds.variants.button.size.md, ds.variants.button.variant.default)}>
  Primary Button
</button>
```

### Secondary Buttons

```tsx
// Secondary button variants
<button className={getButtonClasses('md', 'secondary')}>
  Secondary Button
</button>

<button className={getButtonClasses('md', 'outline')}>
  Outline Button
</button>

<button className={getButtonClasses('md', 'ghost')}>
  Ghost Button
</button>
```

## Component Examples

### Complete Button Component

```tsx
import { useComponentSize } from '@/hooks/use-design-system';
import { cn } from '@/lib/design-system-utils';

interface ButtonProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export function Button({
  size = 'md',
  variant = 'default',
  children,
  onClick,
  disabled,
  className
}: ButtonProps) {
  const { getButtonClasses } = useComponentSize();

  return (
    <button
      className={cn(getButtonClasses(size, variant), className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

// Usage
<Button size="lg" variant="default">Primary Action</Button>
<Button size="md" variant="secondary">Secondary Action</Button>
<Button size="sm" variant="outline">Tertiary Action</Button>
```

### Input Component

```tsx
import { useComponentSize } from '@/hooks/use-design-system';

interface InputProps {
  size?: 'sm' | 'md' | 'lg';
  hasError?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export function Input({
  size = 'md',
  hasError,
  placeholder,
  value,
  onChange,
  className
}: InputProps) {
  const { getInputClasses } = useComponentSize();

  return (
    <input
      className={cn(getInputClasses(size, hasError), className)}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
    />
  );
}

// Usage
<Input size="lg" placeholder="Enter your name" />
<Input size="md" hasError placeholder="Email address" />
```

### Card Component

```tsx
import { useComponentSize } from "@/hooks/use-design-system";
import { ds } from "@/lib/design-system-utils";

interface CardProps {
  variant?: "default" | "elevated" | "outlined" | "ghost";
  children: React.ReactNode;
  className?: string;
}

export function Card({ variant = "default", children, className }: CardProps) {
  const { getCardClasses } = useComponentSize();

  return (
    <div className={cn(getCardClasses(variant), ds.layout.card, className)}>
      {children}
    </div>
  );
}

// Usage
<Card variant="elevated">
  <h3 className={ds.typography.h3}>Card Title</h3>
  <p className={ds.typography.p}>Card content goes here</p>
</Card>;
```

## Layout System

### Container and Spacing

```tsx
import { ds } from '@/lib/design-system-utils';

// Container
<div className={ds.layout.container}>
  Content with responsive padding
</div>

// Flexbox layouts
<div className={ds.layout.flex.between}>
  <span>Left content</span>
  <span>Right content</span>
</div>

<div className={ds.layout.flex.center}>
  Centered content
</div>

// Grid layouts
<div className={ds.layout.grid.cols3}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

// Section spacing
<section className={ds.layout.section}>
  Section with consistent vertical spacing
</section>
```

### Responsive Design

```tsx
import { useBreakpoint } from "@/hooks/use-design-system";
import { ds } from "@/lib/design-system-utils";

function ResponsiveComponent() {
  const { isMobile, isTablet, isDesktop } = useBreakpoint();

  return (
    <div>
      {/* Responsive visibility */}
      <div className={ds.responsive.showOnMobile}>Mobile only</div>
      <div className={ds.responsive.hideOnMobile}>Desktop and tablet</div>

      {/* Responsive text */}
      <h1 className={ds.responsive.headingResponsive}>Responsive heading</h1>

      {/* Responsive spacing */}
      <div className={ds.responsive.paddingResponsive}>Responsive padding</div>
    </div>
  );
}
```

## Theme System

### Dark Mode Support

```tsx
import { useTheme } from "@/hooks/use-design-system";

function ThemeToggle() {
  const { theme, toggleTheme, setTheme } = useTheme();

  return (
    <div>
      <button onClick={toggleTheme}>Current theme: {theme}</button>

      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
      <button onClick={() => setTheme("system")}>System</button>
    </div>
  );
}
```

## Animation System

### Built-in Animations

```tsx
import { ds } from '@/lib/design-system-utils';

// Fade animations
<div className={ds.animations.fadeIn}>Fade in content</div>

// Slide animations
<div className={ds.animations.slideInFromLeft}>Slide in from left</div>

// Scale animations
<div className={ds.animations.scaleIn}>Scale in content</div>

// State animations
<button className={cn(
  ds.states.hover,
  ds.states.active,
  ds.states.focus
)}>
  Interactive button
</button>
```

## Complete Example

Here's a complete example showing how to use the design system:

```tsx
import { useDesignSystem } from "@/hooks/use-design-system";
import { cn, ds } from "@/lib/design-system-utils";

function ExamplePage() {
  const { componentSize, theme, breakpoint } = useDesignSystem();

  return (
    <div className={ds.layout.container}>
      {/* Header */}
      <header className={cn(ds.layout.flex.between, ds.layout.section)}>
        <h1 className={ds.typography.h1}>Design System Example</h1>
        <button onClick={theme.toggleTheme}>Toggle Theme</button>
      </header>

      {/* Main content */}
      <main className={ds.layout.section}>
        <div className={ds.layout.grid.cols2}>
          {/* Card 1 */}
          <div className={componentSize.getCardClasses("elevated")}>
            <h2 className={ds.typography.h2}>Primary Actions</h2>
            <div className="space-y-4">
              <button
                className={componentSize.getButtonClasses("lg", "default")}
              >
                Large Primary Button
              </button>
              <button
                className={componentSize.getButtonClasses("md", "default")}
              >
                Medium Primary Button
              </button>
              <button
                className={componentSize.getButtonClasses("sm", "default")}
              >
                Small Primary Button
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className={componentSize.getCardClasses("outlined")}>
            <h2 className={ds.typography.h2}>Secondary Actions</h2>
            <div className="space-y-4">
              <button
                className={componentSize.getButtonClasses("lg", "secondary")}
              >
                Large Secondary Button
              </button>
              <button
                className={componentSize.getButtonClasses("md", "outline")}
              >
                Medium Outline Button
              </button>
              <button className={componentSize.getButtonClasses("sm", "ghost")}>
                Small Ghost Button
              </button>
            </div>
          </div>
        </div>

        {/* Form example */}
        <div className={cn(ds.layout.card, "mt-8")}>
          <h2 className={ds.typography.h2}>Form Elements</h2>
          <div className="space-y-4">
            <input
              className={componentSize.getInputClasses("lg")}
              placeholder="Large input"
            />
            <input
              className={componentSize.getInputClasses("md")}
              placeholder="Medium input"
            />
            <input
              className={componentSize.getInputClasses("sm")}
              placeholder="Small input"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
```

## Best Practices

### 1. Use Semantic Sizing

- Use `md` as the default size for most components
- Use `lg` for prominent actions (CTAs)
- Use `sm` for secondary actions in compact spaces
- Use `xs` only for very constrained spaces

### 2. Color Usage

- Use `primary` for main brand actions
- Use `secondary` for supporting actions
- Use semantic colors (`success`, `error`, `warning`) for status indicators
- Maintain sufficient contrast ratios (4.5:1 for normal text, 3:1 for large text)

### 3. Typography Hierarchy

- Use heading levels semantically (h1 for page titles, h2 for sections, etc.)
- Maintain consistent line heights and spacing
- Use `lead` for important introductory text
- Use `muted` for less important information

### 4. Responsive Design

- Design mobile-first
- Use the breakpoint hooks for conditional rendering
- Ensure touch targets are at least 44px on mobile
- Test across all breakpoints

### 5. Accessibility

- Use semantic HTML elements
- Ensure proper focus management
- Maintain color contrast ratios
- Provide alternative text for images
- Use proper ARIA attributes

## Customization

### Extending Colors

```typescript
// In your design-system.ts file
export const colors = {
  ...existing colors,
  brand: {
    50: 'oklch(0.98 0.005 120)',
    500: 'oklch(0.55 0.16 120)',
    900: 'oklch(0.25 0.24 120)',
  }
};
```

### Adding Custom Components

```typescript
// In your design-system-utils.ts file
export const variants = {
  ...existing variants,
  customComponent: {
    variant: {
      default: 'custom-default-styles',
      special: 'custom-special-styles',
    },
    size: {
      sm: 'custom-small-styles',
      md: 'custom-medium-styles',
      lg: 'custom-large-styles',
    },
  },
};
```

This design system provides a solid foundation for building consistent, accessible, and maintainable user interfaces. Use the provided hooks and utilities to ensure consistency across your application.
