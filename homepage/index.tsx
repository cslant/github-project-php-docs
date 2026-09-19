import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Head from '@docusaurus/Head';
import HomepageHeader from './components/HomepageHeader';
import HomepageFeatures from './components/HomepageFeatures';
import HomepageQuickStart from './components/HomepageQuickStart';
import SoftCard from '@site/src/components/softui/SoftCard';
import StatCounter from '@site/src/components/softui/StatCounter';
import SectionHeader from '@site/src/components/softui/SectionHeader';
import CtaBanner from '@site/src/components/softui/CtaBanner';
import FaqAccordion from '@site/src/components/softui/FaqAccordion';
import QuoteBlock from '@site/src/components/softui/QuoteBlock';
import softui from '@site/src/components/softui/softui.module.css';
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

const stats = [
  { value: 14, emoji: "📄", label: "Doc pages" },
  { value: 6, emoji: "⚡", label: "Key features" },
  { value: 4, emoji: "🚀", label: "Quick-start steps" },
  { value: 100, suffix: "%", emoji: "💚", label: "Open source" },
];

const faqs = [
  {
    question: "What does GitHub Project PHP do?",
    answer:
      "It automates GitHub Project workflows from your Laravel application — watching webhooks, tracking issues and project changes with real-time updates.",
  },
  {
    question: "Which environment does it require?",
    answer:
      "PHP ^8.1 with Composer. Dependencies (knplabs/github-api, nyholm/psr7, symfony/http-client) are installed automatically.",
  },
  {
    question: "How do webhooks get secured?",
    answer:
      "You set a webhook secret in the GitHub dashboard and the matching GITHUB_WEBHOOK_SECRET in your .env. The package verifies signatures before processing payloads.",
  },
  {
    question: "Where can I get support?",
    answer:
      "Open an issue on the GitHub Project PHP repository, or follow the support section of this documentation for community channels.",
  },
];

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
          <section className="features-section">
            <div className="container">
              <div className={softui.grid4}>
                {stats.map((stat, idx) => (
                  <SoftCard key={idx} delay={idx * 0.1}>
                    <StatCounter {...stat} delay={idx * 0.1} />
                  </SoftCard>
                ))}
              </div>
            </div>
          </section>
          <HomepageFeatures />
          <HomepageQuickStart />
          <section className="features-section">
            <div className="container">
              <SectionHeader
                title="Loved by Developers"
                subtitle="Why teams choose GitHub Project PHP for their workflows"
                accent="linear-gradient(135deg, #2ea043, #58a6ff)"
              />
              <QuoteBlock
                quote="The ultimate PHP package for seamless GitHub Project management. Track issues, automate tasks and stay in sync with real-time updates — all within your Laravel application."
                author="CSlant Team"
                role="Open Source Maintainers"
              />
            </div>
          </section>
          <section className="features-section">
            <div className="container">
              <SectionHeader
                title="Frequently Asked Questions"
                subtitle="Answers to the most common questions about GitHub Project PHP"
                accent="linear-gradient(135deg, #2ea043, #58a6ff)"
              />
              <FaqAccordion items={faqs} />
            </div>
          </section>
          <section className="features-section">
            <div className="container">
              <CtaBanner
                title="Automate your GitHub Project workflows"
                subtitle="Install the package, configure your webhook and track issues in real time."
                accent="#2ea043"
                primary={{ label: "🚀 Get Started", href: "/github-project-php/introduction" }}
                secondary={{ label: "⭐ GitHub Repository", href: "https://github.com/cslant/github-project-php", external: true }}
              />
            </div>
          </section>
        </main>
      </>
    )
  };
  
  return <Layout {...layoutProps} />;
}