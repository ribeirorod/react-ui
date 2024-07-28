import React from 'react';
import './StyleGuide.css'; // Assuming you have a CSS file for the styles

const StyleGuide = () => {
  return (
    <div className="style-guide">
      <h1>Design System Style Guide</h1>

      <section>
        <h2>Colors</h2>
        <div className="color-swatch" style={{ backgroundColor: 'var(--color-primary)' }}>Primary Color</div>
        <div className="color-swatch" style={{ backgroundColor: 'var(--color-secondary)' }}>Secondary Color</div>
        <div className="color-swatch" style={{ backgroundColor: 'var(--color-accent)' }}>Accent Color</div>
        <div className="color-swatch" style={{ backgroundColor: 'var(--color-background)' }}>Background Color</div>
        <div className="color-swatch" style={{ backgroundColor: 'var(--color-border)' }}>Border Color</div>
        <div className="color-swatch" style={{ backgroundColor: 'var(--color-success)' }}>Success Color</div>
        <div className="color-swatch" style={{ backgroundColor: 'var(--color-danger)' }}>Danger Color</div>
      </section>

      <section>
        <h2>Fonts</h2>
        <p style={{ fontFamily: 'var(--font-family)', fontSize: 'var(--font-size-large)', fontWeight: 'var(--font-weight-bold)' }}>Large Bold Text</p>
        <p style={{ fontFamily: 'var(--font-family)', fontSize: 'var(--font-size-medium)', fontWeight: 'var(--font-weight-normal)' }}>Medium Normal Text</p>
        <p style={{ fontFamily: 'var(--font-family)', fontSize: 'var(--font-size-small)', fontWeight: 'var(--font-weight-normal)' }}>Small Normal Text</p>
      </section>

      <section>
        <h2>Spacing</h2>
        <div className="spacing-box" style={{ padding: 'var(--spacing-small)' }}>Small Spacing</div>
        <div className="spacing-box" style={{ padding: 'var(--spacing-medium)' }}>Medium Spacing</div>
        <div className="spacing-box" style={{ padding: 'var(--spacing-large)' }}>Large Spacing</div>
      </section>

      <section>
        <h2>Rounding</h2>
        <div className="rounding-box" style={{ borderRadius: 'var(--border-radius-small)' }}>Small Border Radius</div>
        <div className="rounding-box" style={{ borderRadius: 'var(--border-radius-medium)' }}>Medium Border Radius</div>
        <div className="rounding-box" style={{ borderRadius: 'var(--border-radius-large)' }}>Large Border Radius</div>
      </section>
    </div>
  );
};

export default StyleGuide;