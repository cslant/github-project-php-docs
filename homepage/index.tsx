import Link from '@docusaurus/Link';
import SvgBackground
  from '@site/repos/telegram-git-notifier-docs/assets/public/images/telegram-git-notifier-background.svg';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import clsx from 'clsx';

import Head from '@docusaurus/core/lib/client/exports/Head';
import { JSX } from 'react';

const HeaderData = {
  title: "Documentation For Telegram Git Notifier",
  Svg: SvgBackground,
  description:
    "With this package, you can create a Telegram bot to receive notifications from GitHub or GitLab events. You can use this package with Laravel or any PHP application.",
  tags: ["telegram", "git", "notifier", "bot", "github", "gitlab"],
  startButtonLink: "/telegram-git-notifier/introduction",
  startButtonLabel: "Get Started",
};

function HomepageHeader() {
  const {Svg, title, description, startButtonLink, startButtonLabel} = HeaderData;

  return (
    <>
      <Head>
        <title>Homepage | GitHub Project PHP | CSlant Documentation</title>
        <link rel="canonical" href="https://docs.cslant.com/github-project-php" data-rh="true" />
        <meta name="description"
              content="GitHub Project PHP is a package that helps you manage your GitHub projects efficiently. Learn about GitHub Project PHP, its features, and how it can help you manage your GitHub projects."
              data-rh="true" />
        <meta name="author" content="CSlant" data-rh="true" />
        <meta name="robots" content="index, follow" data-rh="true" />
        <meta property="og:site_name" content="GitHub Project PHP Documentation" data-rh="true" />
        <meta property="og:type" content="website" data-rh="true" />
        <meta property="og:title" content="GitHub Project PHP Documentation" data-rh="true" />
        <meta property="og:description"
              content="GitHub Project PHP is a package that helps you manage your GitHub projects efficiently. Learn about GitHub Project PHP, its features, and how it can help you manage your GitHub projects."
              data-rh="true" />
        <meta property="og:url" content="https://docs.cslant.com/github-project-php" data-rh="true" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" data-rh="true" />
        <meta name="twitter:title" content="GitHub Project PHP Documentation" data-rh="true" />
        <meta name="twitter:description" content="GitHub Project PHP is a package that helps you manage your GitHub projects efficiently. Learn about GitHub Project PHP, its features, and how it can help you manage your GitHub projects." data-rh="true" />
      </Head>
      <header className="main_header">
        <div className="container">
          <div className="row">
            <div className="col col--5 left_header">
              <Heading as="h1" className="hero__title main_title">
              {title}
              </Heading>
              <p className="hero__subtitle">{description}</p>
              <div className="buttons">
                <Link className="button button--info button--lg" to={startButtonLink}>
                  {startButtonLabel}
                </Link>
              </div>
            </div>
            <div className={clsx("col col--7")}>
              <Svg />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default function GithubProjectHome(): JSX.Element {
  return (
    <Layout title="Home Page" description="github-project-php-docs">
      <HomepageHeader/>
      <main>
       test
      </main>
    </Layout>
  );
}
