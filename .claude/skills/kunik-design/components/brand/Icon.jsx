import React from 'react';

// Exact path data from the source project's inline SVGs (24x24, round caps/joins).
export const ICON_PATHS = {
  home: ['M4 11l8-6.5 8 6.5V20H4z', 2],
  export: ['M12 3v12M7.5 10.5L12 15l4.5-4.5M4 19h16', 1.8],
  import: ['M12 16V4M7.5 8.5L12 4l4.5 4.5M4 19h16', 1.8],
  plus: ['M12 5v14M5 12h14', 2.2],
  edit: ['M4 20l.8-3.6L15.6 5.6a1.5 1.5 0 0 1 2.1 0l.7.7a1.5 1.5 0 0 1 0 2.1L7.6 19.2 4 20z', 1.8],
  trash: ['M4 7h16M9 7V4.5A1.5 1.5 0 0 1 10.5 3h3A1.5 1.5 0 0 1 15 4.5V7M6 7l1 13h10l1-13', 1.8],
  message: ['M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z', 1.9],
  close: ['M6 6l12 12M18 6L6 18', 2],
  check: ['M4 12.5l5 5L20 6.5', 2.2],
  'check-bold': ['M20 6L9 17l-5-5', 2.2],
  'chevron-left': ['M14 6l-6 6 6 6', 2.2],
  'chevron-right': ['M10 6l6 6-6 6', 2.1],
  'chevron-down': ['M6 9.5l6 6 6-6', 2.2],
  'arrow-left': ['M5 12h14M13 6l6 6-6 6', 2.2],
  shield: ['M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z', 1.8],
  bars: ['M4 20V10M10 20V4M16 20v-7M3 20h18', 1.8],
  heart: ['M12 21s-7.5-4.6-10-9C.3 8 2 4 6 4c2.2 0 3.7 1.3 6 3.7C14.3 5.3 15.8 4 18 4c4 0 5.7 4 4 8-2.5 4.4-10 9-10 9z', 1.8],
  car: ['M5 16v-3.2L6.6 8A2 2 0 0 1 8.5 6.7h7A2 2 0 0 1 17.4 8L19 12.8V16M5 16h14M5 16v2H7v-2M17 16v2h2v-2M8 12.5h8', 1.8],
  document: ['M6 3h7l5 5v13H6zM13 3v5h5', 1.8],
  bell: ['M12 3a5 5 0 0 0-5 5v3c0 1.2-.5 2.3-1.4 3.1L4 16h16l-1.6-1.9C17.5 13.3 17 12.2 17 11V8a5 5 0 0 0-5-5zM9.5 19a2.5 2.5 0 0 0 5 0', 1.8],
  'trending-up': ['M3 16l6-6 4 4 8-8M15 6h6v6', 1.8],
  smartphone: ['M11 18.5h2', 1.6],
  computer: ['M2 19.5h20', 1.6],
  video: ['M16.5 11l5-3v8l-5-3z', 1.6],
  image: ['M3 5h18v14H3zM7 13l3-3 4 4 3-2', 1.9],
  eye: ['M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z', 1.9],
  materials: ['M9 6V4.5h6V6', 1.9],
  lightbulb: ['M9 18h6M10 21h4M12 3a6 6 0 013.5 10.9V16h-7v-2.1A6 6 0 0112 3z', 1.8],
  warning: ['M12 4l9 16H3zM12 10v4M12 17h.01', 1.9],
  book: ['M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z', 1.9],
  toolkit: ['M4 4h7v16H4zM13 4h7v16h-7z', 1.9],
  printer: ['M7 8V3h10v5M7 18H4v-6h16v6h-3M7 14h10v7H7z', 1.9],
  calendar: ['M4 5h16v15H4zM4 10h16M8 3v4M16 3v4', 1.9],
  flier: ['M4 3h16v18H4zM8 8h8M8 13h8M8 17h5', 1.9],
  slides: ['M12 16v4M9 20h6', 1.9],
  sparkles: ['M12 3l1.7 4.8L18.5 9.5l-4.8 1.7L12 16l-1.7-4.8L5.5 9.5l4.8-1.7zM18 16.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z', 1.6],
  target: ['', 1.9],
};

const EXTRA = {
  smartphone: <rect x="7" y="2.5" width="10" height="19" rx="2.5" />,
  computer: <rect x="3" y="4.5" width="18" height="12" rx="1.5" />,
  video: <rect x="2.5" y="6.5" width="12" height="11" rx="2" />,
  image: <circle cx="8.5" cy="8.5" r="1.2" />,
  eye: <circle cx="12" cy="12" r="3" />,
  materials: <rect x="3" y="6" width="18" height="13" rx="2" />,
  target: <><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="3.5" /></>,
  slides: <rect x="3" y="4" width="18" height="12" rx="1.5" />,
};

const WHATSAPP = 'M12 2a10 10 0 00-8.7 15L2 22l5.2-1.3A10 10 0 1012 2zm0 2a8 8 0 11-4.2 14.8l-.4-.2-2.6.7.7-2.5-.2-.4A8 8 0 0112 4zm-3.3 4c-.2 0-.5.1-.7.4-.3.3-.8.9-.8 1.9s.8 2.1 1 2.3c.2.3 1.6 2.5 4 3.4 2 .8 2.4.7 2.8.6.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2l-.4-.3-1.6-.7c-.2-.1-.4-.1-.6.1l-.7.9c-.1.2-.3.2-.5.1a6.5 6.5 0 01-1.9-1.2 7 7 0 01-1.3-1.7c-.1-.2 0-.3.1-.4l.6-.7.1-.5-.7-1.6c-.2-.4-.4-.4-.5-.4z';

export function Icon({ name, size = 20, strokeWidth, style, ...rest }) {
  if (name === 'whatsapp') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={{ flex: 'none', display: 'block', ...style }} {...rest}>
        <path d={WHATSAPP} />
      </svg>
    );
  }
  const entry = ICON_PATHS[name];
  if (!entry) return null;
  const [d, sw] = entry;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth ?? sw} strokeLinecap="round" strokeLinejoin="round"
      style={{ flex: 'none', display: 'block', ...style }} {...rest}>
      {EXTRA[name] || null}
      {d ? <path d={d} /> : null}
    </svg>
  );
}
