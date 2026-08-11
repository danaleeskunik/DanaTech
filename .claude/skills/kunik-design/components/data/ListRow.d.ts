export interface ListRowProps {
  /** Leading block — a DateChip, an initial circle, or a status dot. */
  leading?: React.ReactNode;
  title: React.ReactNode;
  /** Second line: time, domain, price. */
  meta?: React.ReactNode;
  /** A Badge, placed under the meta line. */
  badge?: React.ReactNode;
  /** Trailing buttons — a WhatsApp Button plus 44px IconButtons. */
  actions?: React.ReactNode;
  titleColor?: string;
  /** Strike the title, for a cancelled lesson. */
  struck?: boolean;
  style?: React.CSSProperties;
}
export function ListRow(props: ListRowProps): JSX.Element;
