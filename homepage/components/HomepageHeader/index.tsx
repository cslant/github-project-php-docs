import React, { ReactElement, CSSProperties } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const headerStyle: CSSProperties = {
  padding: '4rem 0',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  background: 'linear-gradient(135deg, #2b3137 0%, #1a1f24 100%)',
  color: 'white',
};

const titleStyle: CSSProperties = {
  fontSize: '3rem',
  fontWeight: 700,
  marginBottom: '1rem',
  lineHeight: 1.2,
  maxWidth: '800px',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const taglineStyle: CSSProperties = {
  fontSize: '1.5rem',
  maxWidth: '700px',
  margin: '0 auto 2rem',
  opacity: 0.9,
  lineHeight: 1.5,
};

const buttonContainerStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  flexWrap: 'wrap',
};

const buttonStyle: CSSProperties = {
  display: 'inline-block',
  padding: '0.8rem 1.6rem',
  fontSize: '1.1rem',
  fontWeight: 600,
  borderRadius: '6px',
  transition: 'all 0.2s ease',
  textDecoration: 'none',
};

const primaryButtonStyle: CSSProperties = {
  ...buttonStyle,
  backgroundColor: '#2188ff',
  color: 'white',
  border: '1px solid #2188ff',
};

const secondaryButtonStyle: CSSProperties = {
  ...buttonStyle,
  backgroundColor: 'transparent',
  color: 'white',
  border: '1px solid rgba(255, 255, 255, 0.3)',
};

export default function HomepageHeader(): ReactElement {
  const { siteConfig } = useDocusaurusContext();
  
  return (
    <header style={headerStyle}>
      <div className="container">
        <h1 style={titleStyle}>
          {siteConfig.title}
        </h1>
        <p style={taglineStyle}>
          {siteConfig.tagline}
        </p>
        <div style={buttonContainerStyle}>
          <Link
            className="button button--primary button--lg"
            to="/docs/introduction"
            style={primaryButtonStyle}
          >
            Get Started
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://github.com/cslant/github-project-php"
            style={secondaryButtonStyle}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}
