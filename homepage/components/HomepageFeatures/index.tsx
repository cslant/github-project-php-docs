import React, { ReactElement, CSSProperties } from 'react';

// Styling
const styles = {
  // Features section
  features: {
    padding: '5rem 2rem',
    backgroundColor: '#f6f8fa',
    '@media (max-width: 1200px)': {
      padding: '4.5rem 1.5rem',
    },
    '@media (max-width: 768px)': {
      padding: '4rem 1rem',
    },
    '@media (max-width: 576px)': {
      padding: '3.5rem 0.75rem',
    },
  } as any,
  
  // Section header
  sectionHeader: {
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto 3.5rem',
    '@media (max-width: 992px)': {
      marginBottom: '3rem',
    },
    '@media (max-width: 768px)': {
      marginBottom: '2.5rem',
      padding: '0 1rem',
    },
  } as any,
  
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: 700,
    marginBottom: '1rem',
    color: '#24292f',
    lineHeight: 1.2,
    '@media (max-width: 1200px)': {
      fontSize: '2.25rem',
    },
    '@media (max-width: 768px)': {
      fontSize: '2rem',
    },
    '@media (max-width: 576px)': {
      fontSize: '1.75rem',
    },
  } as any,
  
  sectionSubtitle: {
    fontSize: '1.25rem',
    color: '#57606a',
    lineHeight: 1.6,
    margin: '0 auto',
    maxWidth: '600px',
    '@media (max-width: 768px)': {
      fontSize: '1.125rem',
    },
    '@media (max-width: 576px)': {
      fontSize: '1.05rem',
    },
  } as any,
  
  // Features grid
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
    '@media (max-width: 992px)': {
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '1.75rem',
    },
    '@media (max-width: 768px)': {
      gap: '1.5rem',
      padding: '0 0.75rem',
    },
    '@media (max-width: 576px)': {
      gridTemplateColumns: '1fr',
      gap: '1.25rem',
      padding: '0 1rem',
    },
  } as any,
  
  // Feature card
  featureCard: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #e1e4e8',
    ':hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.06)',
      borderColor: 'rgba(3, 102, 214, 0.2)',
    },
    '@media (max-width: 768px)': {
      padding: '1.75rem',
    },
    '@media (max-width: 576px)': {
      padding: '1.5rem',
    },
  } as any,
  
  // Feature icon
  featureIcon: {
    fontSize: '2.5rem',
    marginBottom: '1.25rem',
    display: 'inline-block',
    lineHeight: 1,
    '@media (max-width: 768px)': {
      fontSize: '2.25rem',
      marginBottom: '1rem',
    },
  } as any,
  
  // Feature title
  featureTitle: {
    fontSize: '1.25rem',
    fontWeight: 600,
    margin: '0 0 0.75rem',
    color: '#24292f',
    lineHeight: 1.3,
    '@media (max-width: 768px)': {
      fontSize: '1.15rem',
    },
  } as any,
  
  // Feature description
  featureDescription: {
    fontSize: '1rem',
    color: '#57606a',
    lineHeight: 1.6,
    margin: 0,
    '@media (max-width: 768px)': {
      fontSize: '0.95rem',
    },
  } as any,
};

// Feature item component
const FeatureItem = ({ title, description, emoji }: FeatureItemProps) => {
  return (
    <div style={styles.featureCard}>
      <div style={styles.featureIcon} role="img" aria-label={title}>
        {emoji}
      </div>
      <h3 style={styles.featureTitle}>{title}</h3>
      <p style={styles.featureDescription}>{description}</p>
    </div>
  );
};

interface FeatureItemProps {
  title: string;
  description: string;
  emoji: string;
}

const FeatureList: readonly FeatureItemProps[] = [
  {
    title: 'Real-time Updates',
    emoji: '⚡',
    description: 'Get instant notifications for all project changes and updates.',
  },
  {
    title: 'Easy Integration',
    emoji: '🔌',
    description: 'Seamlessly integrate with your Laravel application in minutes.',
  },
  {
    title: 'Comprehensive Logs',
    emoji: '📊',
    description: 'Track all project activities with detailed logging.',
  },
  {
    title: 'Webhook Support',
    emoji: '🔄',
    description: 'Automatically sync with GitHub using webhooks.',
  },
  {
    title: 'Customizable',
    emoji: '🎨',
    description: 'Tailor the behavior to fit your workflow needs.',
  },
  {
    title: 'Open Source',
    emoji: '🤝',
    description: 'Free to use and open source under the MIT license.',
  },
] as const;



const HomepageFeatures = (): ReactElement => {
  return (
    <section style={styles.features}>
      <div style={styles.sectionHeader}>
        <h2 style={styles.sectionTitle}>Why Choose GitHub Project PHP?</h2>
        <p style={styles.sectionSubtitle}>
          Streamline your development workflow with these powerful features
        </p>
      </div>
      
      <div style={styles.featuresGrid}>
        {FeatureList.map((props, idx) => (
          <FeatureItem key={idx} {...props} />
        ))}
      </div>
    </section>
  );
};

export default HomepageFeatures;
