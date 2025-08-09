import React, { ReactElement, CSSProperties } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';

// Styling
const styles = {
  // Main header container
  header: {
    background: 'radial-gradient(ellipse at top right, #0d1117 0%, #161b22 100%)',
    color: '#f0f6fc',
    padding: '7rem 2rem 6rem',
    position: 'relative',
    overflow: 'hidden',
    borderBottom: '1px solid #30363d',
    '@media (max-width: 1200px)': {
      padding: '6rem 1.5rem 5rem',
    },
    '@media (max-width: 768px)': {
      padding: '5rem 1.25rem 4rem',
    },
    '@media (max-width: 480px)': {
      padding: '4rem 1rem 3.5rem',
    },
  } as any,
  
  // Content container
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
    padding: '0 1.5rem',
    '@media (max-width: 768px)': {
      padding: '0 1rem',
    },
    '@media (max-width: 480px)': {
      padding: '0 0.75rem',
    },
  } as any,
  
  // Title styles
  title: {
    fontSize: '3.75rem',
    fontWeight: 800,
    margin: '0 0 1.5rem',
    lineHeight: 1.15,
    background: 'linear-gradient(90deg, #58a6ff, #79c0ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    letterSpacing: '-0.02em',
    maxWidth: '1000px',
    marginLeft: 'auto',
    marginRight: 'auto',
    textShadow: '0 2px 10px rgba(88, 166, 255, 0.1)',
    '@media (max-width: 1200px)': {
      fontSize: '3.25rem',
      maxWidth: '900px',
    },
    '@media (max-width: 992px)': {
      fontSize: '2.75rem',
      maxWidth: '800px',
    },
    '@media (max-width: 768px)': {
      fontSize: '2.5rem',
      marginBottom: '1.25rem',
      lineHeight: 1.2,
    },
    '@media (max-width: 576px)': {
      fontSize: '2.25rem',
      lineHeight: 1.25,
      marginBottom: '1rem',
    },
    '@media (max-width: 400px)': {
      fontSize: '2rem',
    },
  } as any,
  
  // Tagline styles
  tagline: {
    fontSize: '1.5rem',
    maxWidth: '800px',
    margin: '0 auto 3rem',
    lineHeight: 1.7,
    color: '#c9d1d9',
    fontWeight: 400,
    opacity: 0.9,
    '@media (max-width: 1200px)': {
      fontSize: '1.375rem',
      maxWidth: '85%',
      lineHeight: 1.65,
    },
    '@media (max-width: 992px)': {
      fontSize: '1.25rem',
      lineHeight: 1.6,
      marginBottom: '2.5rem',
    },
    '@media (max-width: 768px)': {
      fontSize: '1.125rem',
      maxWidth: '90%',
      padding: '0',
      lineHeight: 1.55,
    },
    '@media (max-width: 576px)': {
      fontSize: '1.1rem',
      lineHeight: 1.5,
      marginBottom: '2.25rem',
      maxWidth: '100%',
      padding: '0 0.5rem',
    },
    '@media (max-width: 400px)': {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
  } as any,
  
  // Button container
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.25rem',
    flexWrap: 'wrap',
    marginTop: '2.5rem',
    '@media (max-width: 1200px)': {
      gap: '1.1rem',
    },
    '@media (max-width: 992px)': {
      marginTop: '2.25rem',
    },
    '@media (max-width: 768px)': {
      gap: '1rem',
      marginTop: '2rem',
    },
    '@media (max-width: 576px)': {
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.875rem',
      marginTop: '1.75rem',
      width: '100%',
      maxWidth: '320px',
    },
    '@media (max-width: 400px)': {
      maxWidth: '100%',
      padding: '0 0.5rem',
      gap: '0.75rem',
    },
  } as any,
  
  // Base button styles
  button: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.9rem 2rem',
    fontSize: '1.1rem',
    fontWeight: 600,
    borderRadius: '8px',
    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
    textDecoration: 'none',
    cursor: 'pointer',
    border: '2px solid transparent',
    transform: 'translateY(0)',
    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)',
    ':hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
    },
    '@media (max-width: 1200px)': {
      padding: '0.8rem 1.75rem',
      fontSize: '1.05rem',
    },
    '@media (max-width: 992px)': {
      padding: '0.75rem 1.5rem',
      fontSize: '1rem',
    },
    '@media (max-width: 768px)': {
      padding: '0.7rem 1.4rem',
    },
    '@media (max-width: 576px)': {
      width: '100%',
      maxWidth: '280px',
      padding: '0.8rem 1.5rem',
      fontSize: '1rem',
    },
    '@media (max-width: 400px)': {
      padding: '0.75rem 1.25rem',
      fontSize: '0.95rem',
    },
  } as any,
  
  // Primary button
  primaryButton: {
    backgroundColor: '#238636',
    color: 'white',
    borderColor: 'rgba(240, 246, 252, 0.1)',
    ':hover': {
      backgroundColor: '#2ea043',
      borderColor: 'rgba(240, 246, 252, 0.2)',
    },
  } as any,
  
  // Secondary button
  secondaryButton: {
    backgroundColor: 'rgba(240, 246, 252, 0.08)',
    color: '#c9d1d9',
    borderColor: 'rgba(240, 246, 252, 0.15)',
    ':hover': {
      backgroundColor: 'rgba(240, 246, 252, 0.15)',
      borderColor: 'rgba(240, 246, 252, 0.25)',
    },
  } as any,
  
  // GitHub icon
  githubIcon: {
    marginRight: '0.5rem',
    width: '18px',
    height: '18px',
  } as CSSProperties,
};

// GitHub icon component
const GitHubIcon = () => (
  <svg 
    style={styles.githubIcon} 
    viewBox="0 0 16 16" 
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
  </svg>
);

export default function HomepageHeader(): ReactElement {
  const { siteConfig } = useDocusaurusContext();
  
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <h1 style={styles.title}>
          Automate Your GitHub Project Workflow
        </h1>
        
        <p style={styles.tagline}>
          The ultimate PHP package for seamless GitHub Project management. 
          Track issues, automate tasks, and stay in sync with real-time updates - 
          all within your Laravel application.
        </p>
        
        <div style={styles.buttonContainer}>
          <Link
            to="/github-project-php/introduction"
            style={{
              ...styles.button,
              ...styles.primaryButton,
              '--hover-transform': 'translateY(-2px)',
            } as React.CSSProperties}
          >
            Get Started
          </Link>
          
          <a
            href="https://github.com/cslant/github-project-php"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...styles.button,
              ...styles.secondaryButton,
              '--hover-transform': 'translateY(-2px)',
            } as React.CSSProperties}
          >
            <GitHubIcon />
            GitHub Repository
          </a>
        </div>
      </div>
    </header>
  );
}
