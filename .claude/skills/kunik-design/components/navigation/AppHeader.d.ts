/**
 * @startingPoint section="Navigation" subtitle="Sticky navy header with logo lockup and tabs" viewport="700x150"
 */
export interface AppHeaderTab { id: string; label: string; }

export interface AppHeaderProps {
  /** Product name, e.g. "ניהול העסק". */
  title: string;
  /** Line beneath, e.g. "טק בגובה העיניים · דנה קוניק". */
  subtitle?: string;
  tabs?: AppHeaderTab[];
  activeTab?: string;
  onTabChange?: (id: string) => void;
  /** Right-hand controls — SyncStatus, buttons. */
  actions?: React.ReactNode;
  /** Content width. var(--page-max-wide) for the business app, var(--page-max) for the toolkit. */
  maxWidth?: string;
  style?: React.CSSProperties;
}
export function AppHeader(props: AppHeaderProps): JSX.Element;
