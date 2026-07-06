---
name: Midnight Gilded Minimalist
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#ffb4a8'
  on-secondary: '#690000'
  secondary-container: '#920703'
  on-secondary-container: '#ff9a8a'
  tertiary: '#d0cdcd'
  on-tertiary: '#313030'
  tertiary-container: '#b4b2b2'
  on-tertiary-container: '#454544'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#ffdad4'
  secondary-fixed-dim: '#ffb4a8'
  on-secondary-fixed: '#410000'
  on-secondary-fixed-variant: '#920703'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
  metallic-gold: '#D4AF37'
  deep-crimson: '#8B0000'
  onyx-black: '#0A0A0A'
  graphite-gray: '#262626'
  ivory-white: '#F5F5F5'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 64px
    fontWeight: '400'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  headline-sm:
    fontFamily: Libre Caslon Text
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 32px
  title-lg:
    fontFamily: Manrope
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0.02em
  body-lg:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1440px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
  section-gap: 120px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The brand personality for this design system is **Aspirational Luxury**. It targets a discerning audience that values the "Old Money" aesthetic—sophistication, heritage, and exclusivity—but expects the seamless performance of a modern digital storefront. The emotional response should be one of quiet confidence and indulgence.

The design style is a hybrid of **Minimalism** and **Glassmorphism**, set against a **Corporate/Modern** dark foundation. By utilizing expansive whitespace (or "dark space"), the interface allows high-fidelity product photography to serve as the primary visual driver. Elements of glassmorphism are used sparingly for overlays and navigation to maintain a sense of depth and modernity without compromising the traditional elegance of the brand.

## Colors

The palette is anchored in a **dark-mode first** philosophy to evoke a premium, evening-boutique atmosphere. 

- **Primary (Metallic Gold):** Used exclusively for high-priority accents, brand marks, and decorative flourishes to signal luxury.
- **Secondary (Deep Crimson):** Reserved for functional highlights such as "Sale" indicators or critical Call-to-Action states, providing a sophisticated alternative to standard notification colors.
- **Neutral (Onyx Black & Graphite Gray):** The primary background layers. Surface tiers use subtle variations in lightness to create structural hierarchy without the need for heavy borders.
- **Text:** Primary headings and body copy utilize Ivory White to ensure maximum legibility against the dark canvas while appearing softer and more refined than pure white.

## Typography

This design system employs a classic high-contrast pairing to balance heritage with utility.

- **Headlines:** `Libre Caslon Text` provides an authoritative, editorial feel. Its elegant serifs are best showcased in large display sizes with slightly tightened letter spacing.
- **Body & UI:** `Manrope` is selected for its clean, geometric construction and exceptional readability at smaller scales. It provides a contemporary counterpoint to the traditional headlines.
- **Styling Note:** Product titles should use `title-lg` for clarity, while category labels and badges (like "Sale" or "Sold Out") use `label-caps` to create a rhythmic, structured appearance across the grid.

## Layout & Spacing

The layout philosophy follows a **fixed-grid** model for desktop to ensure the luxury editorial composition remains intact on ultra-wide displays.

- **Grid:** A 12-column grid with generous 24px gutters. Product cards typically span 3 columns (4 per row) or 4 columns (3 per row) to maintain large, high-impact imagery.
- **Whitespace:** We use an aggressive vertical spacing strategy (`section-gap`) of 120px between major content blocks to prevent the interface from feeling "cluttered" or "discount-oriented."
- **Mobile Adaptivity:** On mobile devices, margins shrink to 20px, and section gaps reduce to 64px. The product grid transitions to a 2-column or single-column stack depending on the visual complexity of the product image.

## Elevation & Depth

This design system rejects heavy, muddy shadows in favor of **Tonal Layering** and **Subtle Glassmorphism**.

- **Surface Tiers:** The base background is `onyx-black`. Interactive containers, such as product cards or modals, use `graphite-gray` or a subtle translucent overlay (10% white opacity with 20px backdrop blur) to sit "above" the base.
- **Outlines:** Instead of shadows, use **Low-Contrast Outlines**. A 1px border of `graphite-gray` or a 5% white stroke provides enough definition for cards against the dark background without adding visual weight.
- **Focus States:** Active elements may feature a faint, diffused gold outer glow (5-10% opacity) to signify interaction without breaking the minimalist aesthetic.

## Shapes

To maintain a "sharp," tailored look reminiscent of luxury watch cases and high-end fragrance bottles, the design system uses a **Soft (0.25rem)** roundedness level.

- **Standard Elements:** Buttons and input fields use a 4px corner radius.
- **Luxury Cards:** Product cards maintain this 4px radius to feel intentional and modern, avoiding the overly-rounded "app" look which can diminish a premium feel.
- **Featured Items:** Exclusive collection banners may occasionally use a fully sharp (0px) corner to lean into a more architectural, brutalist luxury aesthetic.

## Components

- **Buttons:** Primary buttons are solid `metallic-gold` with black text. Secondary buttons are "Ghost" style—transparent with a 1px `metallic-gold` border and ivory text. All buttons use `label-caps` typography.
- **Cards:** Product cards are borderless or have a very faint graphite outline. The focus is entirely on the image. Typography (Title and Price) is center-aligned below the image with generous `stack-md` padding.
- **Chips/Badges:** "Sale" and "Sold Out" badges are small, rectangular, and placed in the top-left of product images. Use `deep-crimson` for Sale and a semi-transparent `graphite-gray` for Sold Out.
- **Inputs:** Form fields are dark-filled (slightly lighter than background) with a bottom-only border in `graphite-gray`. On focus, the border transitions to `metallic-gold`.
- **Lists & Navigation:** Main navigation uses `label-caps` with wide letter spacing. Hover states involve a subtle color shift to gold or a 1px gold underline.
- **Accordions (FAQs):** Use thin graphite dividers. The chevron icon should be a minimal 1px weight stroke.