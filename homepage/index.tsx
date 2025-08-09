import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Head from '@docusaurus/Head';
import HomepageHeader from './components/HomepageHeader';
import HomepageFeatures from './components/HomepageFeatures';
import HomepageQuickStart from './components/HomepageQuickStart';
import '../assets/styles/custom.scss';

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
