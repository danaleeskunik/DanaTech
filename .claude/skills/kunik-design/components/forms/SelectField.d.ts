export interface SelectFieldProps {
  label?: string;
  /** Option labels. The value is the label — the source stores free text, not ids. */
  options?: string[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  /** Show the square "+" button that lets the user add a new option inline. */
  onAdd?: () => void;
  style?: React.CSSProperties;
  wrapStyle?: React.CSSProperties;
}
export function SelectField(props: SelectFieldProps): JSX.Element;
