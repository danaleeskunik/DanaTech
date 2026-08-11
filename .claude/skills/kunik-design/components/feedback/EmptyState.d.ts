export interface EmptyStateProps {
  /** 'dashed' = pale blue dashed border, for a list waiting to be filled. 'solid' = plain card, for a filtered result with nothing in it. Default 'dashed'. */
  variant?: 'dashed' | 'solid';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function EmptyState(props: EmptyStateProps): JSX.Element;
