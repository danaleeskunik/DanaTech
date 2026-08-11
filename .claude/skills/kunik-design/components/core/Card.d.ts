/**
 * @startingPoint section="Core" subtitle="The white card: 1px border, 2px/8px navy-tinted shadow" viewport="700x220"
 */
export interface CardProps {
  /** Element to render when not a link. Default 'div'. */
  as?: string;
  /** sm 16x18 / r12 (list row) - md 18x20 / r14 (content card) - lg 26x24 / r18 (home card). Default 'md'. */
  size?: 'sm' | 'md' | 'lg';
  /** Adds pointer cursor + the 150ms lift transition. Pair with a hover rule that raises it by 3px. */
  interactive?: boolean;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Card(props: CardProps): JSX.Element;
