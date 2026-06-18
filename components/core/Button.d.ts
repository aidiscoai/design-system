import React from 'react';

export type ButtonVariant = 'primary' | 'accent' | 'expression' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Props for the primary call-to-action button.
 * @startingPoint section="Core" subtitle="CTA button — 5 variants, 3 sizes, optional glow" viewport="700x180"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. `expression` (magenta) is for campaigns/hero CTAs only. */
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Add the signature neon glow (use sparingly — hero CTAs). */
  glow?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * Primary call-to-action button. The main identity anchor across surfaces.
 */
export function Button(props: ButtonProps): JSX.Element;
