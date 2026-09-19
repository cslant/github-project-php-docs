import React, { ReactElement } from 'react';
import StepCard from '@site/src/components/softui/StepCard';
import SectionHeader from '@site/src/components/softui/SectionHeader';
import softui from '@site/src/components/softui/softui.module.css';

interface QuickStartStepProps {
  step: number;
  title: string;
  description: string;
  code?: string;
}

const QuickStartList: QuickStartStepProps[] = [
  {
    step: 1,
    title: 'Install Package',
    description: 'Add the package to your Laravel project using Composer',
    code: 'composer require cslant/github-project-php',
  },
  {
    step: 2,
    title: 'Publish Config',
    description: 'Publish the configuration file',
    code: 'php artisan vendor:publish --provider="CSlant\\\\GitHubProject\\\\GithubProjectServiceProvider --tag="config"',
  },
  {
    step: 3,
    title: 'Configure Environment',
    description: 'Add your GitHub credentials to .env',
    code: 'GITHUB_ACCESS_TOKEN=your_github_token\nGITHUB_WEBHOOK_SECRET=your_webhook_secret',
  },
  {
    step: 4,
    title: 'Set Up Webhook',
    description: 'Configure the GitHub webhook in your repository or organization settings',
    code: 'Payload URL: https://your-domain.com/github-project/webhook\nSecret: your_webhook_secret',
  },
];

const HomepageQuickStart = (): ReactElement => {
  return (
    <section className="quickStart">
      <div className="container">
        <SectionHeader
          title="Quick Start"
          subtitle="Get started with GitHub Project PHP in just a few simple steps"
          accent="linear-gradient(135deg, #2ea043, #58a6ff)"
        />
        <div className={softui.grid4}>
          {QuickStartList.map((step, idx) => (
            <StepCard
              key={idx}
              step={step.step}
              title={step.title}
              description={step.description}
              code={step.code}
              delay={idx * 0.12}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageQuickStart;