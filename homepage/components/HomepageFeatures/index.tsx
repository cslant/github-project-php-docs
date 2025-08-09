import React, { ReactElement } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

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

function Feature({ title, description, emoji }: FeatureItemProps): ReactElement {
  return (
    <div className={clsx(styles.featureCard)}>
      <div className={clsx(styles.featureIcon)} role="img" aria-label={title}>
        {emoji}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function HomepageFeatures(): ReactElement {
  return (
    <section className={clsx(styles.features)}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <h2 className="text--center">Why Choose GitHub Project PHP?</h2>
            <p className="text--center">
              Streamline your project management with these powerful features
            </p>
          </div>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <div key={idx} className="col col--4">
              <Feature {...props} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
