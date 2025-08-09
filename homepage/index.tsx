import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from './components/HomepageFeatures';
import HomepageQuickStart from './components/HomepageQuickStart';
import Head from '@docusaurus/Head';
import styles from '../assets/styles/index.module.css';

function HomepageHeader(): React.ReactElement {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started
          </Link>
          <Link
            className="button button--outline button--secondary button--lg margin-left--md"
            href="https://github.com/cslant/github-project-php"
            target="_blank"
            rel="noopener noreferrer">
            GitHub Repository
          </Link>
        </div>
      </div>
    </header>
  );
}

interface HomeProps {
  // Add any props if needed
}

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  image?: string;
  keywords?: string;
  wrapperClassName?: string;
  noFooter?: boolean;
  permalink?: string;
  searchMetadatas?: {
    version?: string;
    tag?: string;
  };
}

export default function Home(_props: HomeProps): React.ReactElement {
  const { siteConfig } = useDocusaurusContext();
  
  // Set meta tags for SEO
  const metaTitle = `${siteConfig.title} - ${siteConfig.tagline}`;
  const metaDescription = "A powerful PHP package for managing GitHub Projects with webhooks. Automate project management, track issues, and streamline your workflow with real-time updates.";
  
  const layoutProps: LayoutProps = {
    title: metaTitle,
    description: metaDescription,
    children: (
      <>
        <Head>
          <title>GitHub Project PHP | Automate Your GitHub Project Workflow</title>
          <meta name="description" content="Automate GitHub Project tracking and notifications with this powerful Laravel package. Get real-time updates and comprehensive activity logs." />
          <meta name="keywords" content="github, project, php, laravel, automation, webhook, notifications, workflow" />
          <meta name="author" content="CSlant" />
          <meta name="robots" content="index, follow" />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://docs.cslant.com/github-project-php/" />
          <meta property="og:title" content="GitHub Project PHP | Automate Your GitHub Project Workflow" />
          <meta property="og:description" content="Automate GitHub Project tracking and notifications with this powerful Laravel package." />
          <meta property="og:image" content="https://docs.cslant.com/img/github-project-og.png" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://docs.cslant.com/github-project-php/" />
          <meta name="twitter:title" content="GitHub Project PHP | Automate Your GitHub Project Workflow" />
          <meta name="twitter:description" content="Automate GitHub Project tracking and notifications with this powerful Laravel package." />
          <meta name="twitter:image" content="https://docs.cslant.com/img/github-project-twitter.png" />
        </Head>
        
        <HomepageHeader />
        <main>
          <HomepageFeatures />
          <HomepageQuickStart />
        </main>
      </>
    )
  };
  
  return <Layout {...layoutProps} />;
}
