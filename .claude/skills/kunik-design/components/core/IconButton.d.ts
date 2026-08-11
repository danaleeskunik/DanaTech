export interface IconButtonProps {
  /** Icon name from the Kunik set. */
  icon: string;
  /** sm 30px (dense table rows only) / md 44px (the senior-safe tap target) / lg 52px (floating home pill). Default 'md'. */
  size?: 'sm' | 'md' | 'lg';
  /** neutral = white + 1.5px border; sunken = grey fill; danger = red ink + pink border; success = pale green; navy = solid circle with shadow. Default 'neutral'. */
  tone?: 'neutral' | 'sunken' | 'danger' | 'success' | 'navy';
  /** Tooltip / accessible label — always set one, these buttons have no text. */
  title?: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

export function IconButton(props: IconButtonProps): JSX.Element;
