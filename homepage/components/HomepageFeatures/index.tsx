import React, { ReactElement } from 'react';
import SoftCard from '@site/src/components/softui/SoftCard';
import SectionHeader from '@site/src/components/softui/SectionHeader';
import softui from '@site/src/components/softui/softui.module.css';

interface FeatureItemProps {
  title: string;
  description: string;
  emoji: string;
}

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

const HomepageFeatures = (): ReactElement => {
  return (
    <section className="features-section">
      <div className="container">
        <SectionHeader
          title="Powerful Features"
          subtitle="Everything you need to manage your GitHub Projects effectively"
          accent="linear-gradient(135deg, #2ea043, #58a6ff)"
        />
        <div className={softui.grid3}>
          {FeatureList.map((feature, idx) => (
            <SoftCard key={idx} delay={idx * 0.1}>
              <div style={{ fontSize: '2.2rem', marginBottom: '0.6rem' }}>{feature.emoji}</div>
              <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.4rem' }}>
                {feature.title}
              </h3>
              <p className="m-0">{feature.description}</p>
            </SoftCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageFeatures;