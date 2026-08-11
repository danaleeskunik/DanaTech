/**
 * @startingPoint section="Data" subtitle="Domain entry card with tinted icon tile" viewport="700x220"
 */
export interface DomainCardProps {
  /** Icon name — shield, bars, heart, car, document, bell, trending-up. */
  icon: string;
  label: string;
  /** Count line, e.g. "4 רשומות". */
  count?: string;
  /** Icon ink, e.g. var(--domain-health). */
  color: string;
  /** Icon tile fill, e.g. var(--domain-health-bg). */
  background: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export function DomainCard(props: DomainCardProps): JSX.Element;
