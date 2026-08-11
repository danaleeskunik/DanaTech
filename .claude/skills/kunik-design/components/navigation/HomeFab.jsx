import React from 'react';
import { IconButton } from '../core/IconButton.jsx';

export function HomeFab({ href = 'home.html', title = 'בית', style, ...rest }) {
  return (
    <IconButton icon="home" size="lg" tone="navy" href={href} title={title}
      style={{ position: 'fixed', top: 14, insetInlineEnd: 'auto', insetInlineStart: 14, zIndex: 99, ...style }} {...rest} />
  );
}
