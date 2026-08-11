/**
 * @startingPoint section="Brand" subtitle="The three-bar mark, alone or in a lockup" viewport="700x150"
 */
export interface LogoProps {
  /** Height of the tallest bar in px. Default 24. */
  height?: number;
  /** True on navy surfaces (tallest bar white), false on light (tallest bar navy). Default true. */
  onNavy?: boolean;
  /** Render the mark with a title/subtitle block beside it. */
  lockup?: boolean;
  /** Product name, e.g. "ניהול העסק". Lockup only. */
  title?: string;
  /** Line beneath, e.g. "טק בגובה העיניים · דנה קוניק". Lockup only. */
  subtitle?: string;
  style?: React.CSSProperties;
}

export function Logo(props: LogoProps): JSX.Element;
