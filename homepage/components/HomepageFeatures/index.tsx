import React, { ReactElement, useEffect, useRef, useState } from 'react';

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

// Feature card with scroll animation
const FeatureCard = ({ title, emoji, description, index }: FeatureItemProps & { index: number }): ReactElement => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  return (
    <div
      ref={ref}
      className="feature-card"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`,
      }}
    >
      <div className="feature-icon" role="img" aria-label={title}>
        {emoji}
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
};

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
            <FeatureCard key={idx} index={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageFeatures;
