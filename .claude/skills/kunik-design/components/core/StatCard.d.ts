export interface StatCardProps {
  /** Small letter-spaced caption above the figure. */
  label: string;
  /** The figure itself — set in Heebo 900. */
  value: React.ReactNode;
  /** Supporting line under the figure. */
  sub?: string;
  /** Figure colour. Default var(--navy-800); use a semantic hue for money in/out. */
  color?: string;
  style?: React.CSSProperties;
}

export function StatCard(props: StatCardProps): JSX.Element;
