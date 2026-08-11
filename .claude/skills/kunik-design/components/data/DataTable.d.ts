export interface DataTableColumn { key: string; label: string; }

export interface DataTableProps {
  columns?: DataTableColumn[];
  /** Plain objects keyed by column key. */
  rows?: Array<Record<string, React.ReactNode> & { id?: string | number }>;
  /** Return the trailing action buttons for a row; adds a "פעולות" column. */
  renderActions?: (row: any, index: number) => React.ReactNode;
  style?: React.CSSProperties;
}
export function DataTable(props: DataTableProps): JSX.Element;
