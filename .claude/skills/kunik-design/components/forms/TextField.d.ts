export interface TextFieldProps {
  /** Label above the field — 13.5px, 700, grey. */
  label?: string;
  /** Helper line below. */
  hint?: string;
  type?: string;
  /** Render a textarea. */
  multiline?: boolean;
  rows?: number;
  /** 'rounded' (10px, forms) or 'pill' (search fields). Default 'rounded'. */
  shape?: 'rounded' | 'pill';
  /** Set 'ltr' for phone numbers and emails inside the RTL layout. */
  dir?: 'rtl' | 'ltr';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
  wrapStyle?: React.CSSProperties;
}
export function TextField(props: TextFieldProps): JSX.Element;
