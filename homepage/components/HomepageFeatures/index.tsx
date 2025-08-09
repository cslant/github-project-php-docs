import React, { ReactElement } from 'react';
import styles from './styles.module.css';

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
    <section className={styles.features}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Powerful Features</h2>
        <p className={styles.sectionSubtitle}>
          Everything you need to manage your GitHub Projects effectively
        </p>
        <div className={styles.featuresGrid}>
          {FeatureList.map((props, idx) => (
            <div key={idx} className={styles.featureCard}>
              <div className={styles.featureIcon} role="img" aria-label={props.title}>
                {props.emoji}
              </div>
              <h3 className={styles.featureTitle}>{props.title}</h3>
              <p className={styles.featureDescription}>{props.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageFeatures;
