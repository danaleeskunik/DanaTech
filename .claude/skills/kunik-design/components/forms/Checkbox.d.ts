export interface CheckboxProps {
  checked?: boolean;
  /** Task text. 16px minimum — these are read by students, not operators. */
  label: React.ReactNode;
  /** Tick colour; use the level hue of the sheet it sits in. */
  color?: string;
  /** 'md' = the interactive tappable row; 'print' = bare 19px box with no chrome, for printed sheets. Default 'md'. */
  size?: 'md' | 'print';
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export function Checkbox(props: CheckboxProps): JSX.Element;
