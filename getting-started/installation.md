---
title: Installation | GitHub Project PHP
description: Installation instructions for GitHub Project PHP. Install the package via composer, publish the config file, and migrate the database. Get started with GitHub Project PHP.
tags: ["Installation", "Get Started", "Composer", "Publish Config", "GitHub Project PHP", "Migrate Database", "GitHub Project PHP Installation", "Interactions", "GitHub Project PHP Package", "Import Trait"]
---

<head>
  <meta name="robots" content="index,follow" />
  <meta name="author" content="CSlant" />
  <link rel="canonical" href="https://docs.cslant.com/github-project-php/getting-started/installation" />
  
  {/* Open Graph tags */}
  <meta property="og:title" content="Installation | GitHub Project PHP" />
  <meta property="og:description" content="Installation instructions for GitHub Project PHP. Install the package via composer, publish the config file, and migrate the database. Get started with GitHu..." />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://docs.cslant.com/github-project-php/getting-started/installation" />
  
  {/* Twitter Card tags */}
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Installation | GitHub Project PHP" />
  <meta name="twitter:description" content="Installation instructions for GitHub Project PHP. Install the package via composer, publish the config file, and migrate the database. Get started with GitHu..." />
</head>

# 🔧 Installation

Please read carefully the instructions below and follow them step by step.

## Install the package

You can **install the package via composer**:

```bash
composer require cslant/github-project-php
```

The package will automatically register its service provider.

## Publish configuration file

:::info[optional]

This is an optional step. If you don't publish the config file, the package will use the default configuration.

:::

The config file contains the default configuration for the package. If you want to change the default configuration.

You can publish the configuration file with:

```shell
php artisan vendor:publish --provider="CSlant\GitHubProject\GithubProjectServiceProvider" --tag="config"
```

This is the default content of the config file for GitHub Project PHP:

```php title="config/github-project.php"
$routePrefix = env('GITHUB_PROJECT_ROUTE_PREFIX', 'github-project');

return [
    'name' => 'GitHubProject',

    'route_prefix' => $routePrefix,

    'github' => [
        'access_token' => env('GITHUB_ACCESS_TOKEN', ''),
        'graphql_url' => env('GITHUB_GRAPHQL_URL', 'https://api.github.com/graphql'),
    ],

    'enable_status_comment' => env('GITHUB_PROJECT_ENABLE_STATUS_COMMENT', false),

    'is_queue_enabled' => env('GITHUB_PROJECT_QUEUE_ENABLED', false),
    'comment_aggregation_cache_key' => env('GITHUB_PROJECT_COMMENT_AGGREGATION_CACHE_KEY', 'github-project-comment-aggregation'),
    'comment_aggregation_time' => env('GITHUB_PROJECT_COMMENT_AGGREGATION_TIME', 20),
];
```
