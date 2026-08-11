export interface CalloutProps {
  /** tip = amber (a shortcut worth knowing) - warn = deeper amber (something that can go wrong) - info = blue (context). Default 'tip'. */
  tone?: 'tip' | 'warn' | 'info';
  /** Short word instead of the icon, e.g. "טיפ" — used on printed sheets where icons are noise. */
  label?: string;
  /** Show the leading icon. Default true. */
  icon?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Callout(props: CalloutProps): JSX.Element;
