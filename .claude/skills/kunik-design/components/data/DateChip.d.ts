export interface DateChipProps {
  /** Small top line, e.g. "14.8". */
  date: string;
  /** Bold bottom line, e.g. "שני". */
  day: string;
  /** Fill. Navy by default; a domain accent when the row belongs to a domain. */
  background?: string;
  style?: React.CSSProperties;
}
export function DateChip(props: DateChipProps): JSX.Element;
