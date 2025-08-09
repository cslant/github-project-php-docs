import React, { CSSProperties, ReactElement } from 'react';

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
    code: 'php artisan vendor:publish --provider="CSlant\\\\GitHubProject\\\\GithubProjectServiceProvider"',
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

const cardStyle: CSSProperties = {
  height: '100%',
  border: '1px solid var(--ifm-color-emphasis-300)',
  borderRadius: '8px',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  backgroundColor: 'var(--ifm-card-background-color)',
  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
};

const cardHeaderStyle: CSSProperties = {
  padding: '1.25rem 1.5rem',
  backgroundColor: 'var(--ifm-color-primary)',
  color: 'white',
};

const cardBodyStyle: CSSProperties = {
  padding: '1.5rem',
};

const codeBlockStyle: CSSProperties = {
  backgroundColor: 'var(--ifm-code-background)',
  borderRadius: '4px',
  padding: '1rem',
  fontSize: '0.85rem',
  overflowX: 'auto',
  whiteSpace: 'pre',
  fontFamily: 'var(--ifm-font-family-monospace)',
  margin: '0',
};

function QuickStartStep({ title, description, code }: QuickStartStepProps): ReactElement {
  return (
    <div className="col col--3" style={{ padding: '1rem' }}>
      <div style={cardStyle}>
        <div style={cardHeaderStyle}>
          <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>{title}</h3>
        </div>
        <div style={cardBodyStyle}>
          <p style={{ marginBottom: '1rem', color: 'var(--ifm-font-color-base)' }}>{description}</p>
          <pre style={codeBlockStyle}>
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

export default function HomepageQuickStart(): ReactElement {
  const sectionStyle: CSSProperties = { 
    padding: '4rem 0', 
    backgroundColor: 'var(--ifm-background-color)' 
  };
  
  const headingStyle: CSSProperties = { 
    fontSize: '2rem', 
    marginBottom: '1rem', 
    color: 'var(--ifm-color-primary)',
    textAlign: 'center'
  };
  
  const paragraphStyle: CSSProperties = {
    textAlign: 'center',
    marginBottom: '2rem',
    color: 'var(--ifm-font-color-base)',
    opacity: 0.9
  };
  
  const rowStyle: CSSProperties = { 
    margin: '0 -1rem' 
  };

  return (
    <section style={sectionStyle}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <h2 style={headingStyle}>
              Get Started in Minutes
            </h2>
            <p style={paragraphStyle}>
              Follow these simple steps to integrate GitHub Project PHP into your workflow
            </p>
          </div>
        </div>
        <div className="row" style={rowStyle}>
          {QuickStartList.map((props, idx) => (
            <QuickStartStep key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
