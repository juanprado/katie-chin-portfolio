import React from 'react';

const BehindTheScenes = ({ title, subtitle, children }) => (
  <article className="bts-article">
    <div className="bts-content">
      <h2 className="bts-subtitle">{title}</h2>
      <h1 className="bts-title">{subtitle}</h1>
      <p className="bts-text">
        blah blah blah
      </p>
    </div>
    <div className="bts-imagery">
      {children}
    </div>
  </article>
);

export default BehindTheScenes;
