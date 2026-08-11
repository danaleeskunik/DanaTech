export interface SectionLabelProps {
  /** Draw the hairline that runs from the label to the end of the row. Default true. */
  rule?: boolean;
  /** Colour of a short 26x2 bar before the label, e.g. var(--blue-500). Omit for the plain variant. */
  accent?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function SectionLabel(props: SectionLabelProps): JSX.Element;
