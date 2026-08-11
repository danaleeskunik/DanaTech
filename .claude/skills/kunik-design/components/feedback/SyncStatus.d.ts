export interface SyncStatusProps {
  /** Drives the dot colour and the default label. Default 'idle'. */
  state?: 'idle' | 'syncing' | 'synced' | 'error';
  /** Override the label, e.g. "גובה לפני 3 דקות". */
  label?: string;
  /** Small second line. */
  sub?: string;
  /** True inside the navy header (the usual case). Default true. */
  onNavy?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export function SyncStatus(props: SyncStatusProps): JSX.Element;
