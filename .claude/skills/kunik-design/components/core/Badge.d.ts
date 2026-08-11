export interface BadgeProps {
  /** Pale surface + saturated ink of the matching hue. Default 'blue'. */
  tone?: 'blue' | 'green' | 'orange' | 'red' | 'neutral' | 'navy';
  /** sm 4x10 / md 5x11. Default 'md'. */
  size?: 'sm' | 'md';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
