import React from 'react';
/**
 * Props for the AI Discoverability Score gauge.
 * @startingPoint section="Brand" subtitle="AI Discoverability Score ring" viewport="700x300"
 */
export interface ScoreGaugeProps {
  /** Current score. */
  value?: number;
  max?: number;
  label?: string;
  size?: number;
}
/**
 * The signature AI Discoverability Score gauge — a violet→cyan conic ring
 * with an animated mono number. The hero of every audit.
 */
export function ScoreGauge(props: ScoreGaugeProps): JSX.Element;
