export interface SidebarNavItem { id: string; label: string; icon: string; }

export interface SidebarNavProps {
  /** App name shown under the mark. */
  title: string;
  subtitle?: string;
  items?: SidebarNavItem[];
  activeId?: string;
  onSelect?: (id: string) => void;
  /** Pinned to the bottom above a hairline — export/import, sync status. */
  footer?: React.ReactNode;
  style?: React.CSSProperties;
}
export function SidebarNav(props: SidebarNavProps): JSX.Element;
