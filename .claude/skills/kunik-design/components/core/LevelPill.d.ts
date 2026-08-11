export interface LevelPillProps {
  label: string;
  /** The level's hue: level 1 var(--blue-500), level 2 var(--green-500), level 3 var(--orange-500). */
  color?: string;
  selected?: boolean;
  /** Leading status dot. Default true. */
  dot?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

export function LevelPill(props: LevelPillProps): JSX.Element;
