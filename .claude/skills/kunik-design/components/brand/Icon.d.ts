export type KunikIconName =
  | 'home' | 'export' | 'import' | 'plus' | 'edit' | 'trash' | 'message' | 'close'
  | 'check' | 'check-bold' | 'chevron-left' | 'chevron-right' | 'chevron-down' | 'arrow-left'
  | 'shield' | 'bars' | 'heart' | 'car' | 'document' | 'bell' | 'trending-up'
  | 'smartphone' | 'computer' | 'video' | 'image' | 'eye' | 'materials'
  | 'lightbulb' | 'warning' | 'book' | 'toolkit' | 'printer'
  | 'calendar' | 'flier' | 'slides' | 'sparkles' | 'target' | 'whatsapp';

export interface IconProps {
  /** Icon name from the Kunik set. */
  name: KunikIconName;
  /** Rendered square size in px. Default 20. */
  size?: number;
  /** Override the per-icon stroke weight (1.6-2.2 in the source). */
  strokeWidth?: number;
  style?: React.CSSProperties;
}

export function Icon(props: IconProps): JSX.Element | null;
