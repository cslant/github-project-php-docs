import React, { ReactElement, useState } from 'react';

interface QuickStartStepProps {
  title: string;
  description: string;
  code: string;
}

const QuickStartList: QuickStartStepProps[] = [
  {
    title: '1. Install Package',
    description: 'Add the package to your Laravel project using Composer',
    code: 'composer require cslant/github-project-php',
  },
  {
    title: '2. Publish Config',
    description: 'Publish the configuration file',
    code: 'php artisan vendor:publish --provider="CSlant\\\\GitHubProject\\\\GithubProjectServiceProvider --tag="config"',
  },
  {
    title: '3. Configure Environment',
    description: 'Add your GitHub credentials to .env',
    code: 'GITHUB_ACCESS_TOKEN=your_github_token\nGITHUB_WEBHOOK_SECRET=your_webhook_secret',
  },
  {
    title: '4. Set Up Webhook',
    description: 'Configure GitHub webhook in your repository/organization settings',
    code: 'Payload URL: https://your-domain.com/github-project/webhook\nContent type: application/json\nSecret: your_webhook_secret',
  },
];

const QuickStartStep = ({ title, description, code }: QuickStartStepProps): ReactElement => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="card">
      <div className="cardHeader">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="cardBody">
        <div style={{ position: 'relative' }}>
          <button onClick={copyToClipboard} className="copyButton">
            {copied ? 'Copied!' : 'Copy'}
          </button>
          <pre className="codeBlock">
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

const HomepageQuickStart = (): ReactElement => {
  return (
    <section className="quickStart">
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <h2>Quick Start</h2>
            <p>Get started with GitHub Project PHP in just a few simple steps</p>
          </div>
        </div>
        <div className="row">
          {QuickStartList.map((step, idx) => (
            <div key={idx} className="col col--12 col-md-4">
              <QuickStartStep
                title={step.title}
                description={step.description}
                code={step.code}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageQuickStart;
