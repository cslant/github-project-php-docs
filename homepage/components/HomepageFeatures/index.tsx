import React, { ReactElement } from 'react';

// Feature item interface
interface FeatureItemProps {
  title: string;
  description: string;
  emoji: string;
}

// Features list
const FeatureList: FeatureItemProps[] = [
  {
    title: 'Real-time Updates',
    emoji: '⚡',
    description: 'Get instant notifications for all project changes and updates.'
  },
  {
    title: 'Easy Integration',
    emoji: '🔌',
    description: 'Seamlessly integrate with your existing Laravel applications.'
  },
  {
    title: 'Powerful API',
    emoji: '🚀',
    description: 'Access all GitHub Project features through a clean, intuitive API.'
  },
  {
    title: 'Custom Workflows',
    emoji: '🔄',
    description: 'Create and manage custom workflows tailored to your team\'s needs.'
  },
  {
    title: 'Advanced Filtering',
    emoji: '🔍',
    description: 'Quickly find what you need with powerful filtering options.'
  },
  {
    title: 'Secure & Reliable',
    emoji: '🔒',
    description: 'Enterprise-grade security and reliability you can trust.'
  },
];

// Main component
const HomepageFeatures = (): ReactElement => {
  return (
    <section className="features-section">
      <div className="container">
        <h2 className="section-title">Powerful Features</h2>
        <p className="section-subtitle">
          Everything you need to manage your GitHub Projects effectively
        </p>
        <div className="features-grid">
          {FeatureList.map((props, idx) => (
            <div key={idx} className="feature-card">
              <div className="feature-icon" role="img" aria-label={props.title}>
                {props.emoji}
              </div>
              <h3 className="feature-title">{props.title}</h3>
              <p className="feature-description">{props.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageFeatures;
