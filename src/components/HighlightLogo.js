import React from 'react';

export default function HighlightLogo({ children, color, alt }) {
  return (
    <p
      style={{
        backgroundColor: color,
        borderRadius: '2px',
        color: '#fff',
        padding: '0.2rem',
      }}
    >
      <img alt={alt} src={children} />
    </p>
  );
}
