import React from 'react';
/**
 * Props for the MATCH / IGNORE verdict card.
 * @startingPoint section="Brand" subtitle="MATCH / IGNORE query verdict card" viewport="700x260"
 */
export interface QueryVerdictProps {
  /** 'match' = AI cites this business; 'ignore' = invisible. */
  verdict?: 'match' | 'ignore';
  title?: string;
  reasons?: string[];
  style?: React.CSSProperties;
}
/**
 * MATCH / IGNORE verdict card — visualizes whether an AI engine selects
 * a business for a query, with supporting reasons.
 */
export function QueryVerdict(props: QueryVerdictProps): JSX.Element;
