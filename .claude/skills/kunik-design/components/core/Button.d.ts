/**
 * @startingPoint section="Core" subtitle="Pill buttons: primary, secondary, quiet, WhatsApp" viewport="700x180"
 */
export interface ButtonProps {
  /** primary = filled accent pill; secondary = white with 2px border; quiet = grey fill; whatsapp = #25D366; onNavy = translucent, for navy headers. Default 'primary'. */
  variant?: 'primary' | 'secondary' | 'quiet' | 'whatsapp' | 'onNavy';
  /** sm 9x14 / md 12x22 / lg 17x24. Default 'md'. */
  size?: 'sm' | 'md' | 'lg';
  /** 'pill' (999px, the default) or 'rounded' (10px, used inside dense toolbars). */
  shape?: 'pill' | 'rounded';
  /** Override the primary fill — pass a domain accent so the button matches its section. */
  color?: string;
  /** Icon name rendered before the label. */
  icon?: string;
  /** Icon name rendered after the label. */
  iconAfter?: string;
  disabled?: boolean;
  /** Render as an anchor instead of a button. */
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
