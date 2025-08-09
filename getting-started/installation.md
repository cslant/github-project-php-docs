---
title: Installation | GitHub Project PHP
description: Installation instructions for GitHub Project PHP. Install the package via composer, publish the config file, and migrate the database. Get started with GitHub Project PHP.
keywords: ["GitHub Project PHP", "installation", "install GitHub Project PHP", 'get started', 'github project php get started', 'composer', 'publish config', 'migrate database']
tags: ["Installation", "Get Started", "Composer", "Publish Config", "GitHub Project PHP", "Migrate Database", "GitHub Project PHP Installation", "Interactions", "GitHub Project PHP Package", "Import Trait"]
---

<head>
  <meta name="robots" content="index,follow" />
  <meta name="author" content="CSlant" />
  <meta name="generator" content="Docusaurus" />
  <meta name="theme-color" content="#2e8555" />
  
  <link rel="canonical" href="https://docs.cslant.com/github-project-php/getting-started/installation" />
  
  <meta property="og:title" content="Installation | GitHub Project PHP" />
  <meta property="og:description" content="Installation instructions for GitHub Project PHP. Install the package via composer, publish the config file, and migrate the database. Get started with GitHu..." />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://docs.cslant.com/github-project-php/getting-started/installation" />
  <meta property="og:site_name" content="GitHub Project PHP Documentation" />
  <meta property="og:locale" content="en_US" />
  
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Installation | GitHub Project PHP" />
  <meta name="twitter:description" content="Installation instructions for GitHub Project PHP. Install the package via composer, publish the config file, and migrate the database. Get started with GitHu..." />
  <meta name="twitter:creator" content="@cslantofficial" />
  <meta name="twitter:site" content="@cslantofficial" />
  
  <meta name="format-detection" content="telephone=no" />
  <meta name="mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="default" />
  
  <meta property="article:published_time" content="2025-07-21T00:00:00Z" />
  <meta property="article:modified_time" content="2025-07-21T00:00:00Z" />
  <meta property="article:author" content="CSlant" />
  <meta property="article:section" content="Documentation" />
  
  </head>

# 🔧 Installation

Please read carefully the instructions below and follow them step by step.

## Install the package

You can **install the package via composer**:

```bash
composer require cslant/github-project-php
```

This will install the latest stable version of the package. The package will automatically register its service provider.

## Verify Installation

After installation, you can verify that the package was installed correctly by running:

```bash
composer show cslant/github-project-php
```

You should see output similar to:

```
name     : cslant/github-project-php
descrip. : A Laravel package for managing GitHub projects
keywords : github, project, laravel, webhook
versions : * v1.0.0
type     : library
license  : MIT License
...
```

## Service Provider

The package will automatically register its service provider. So you don't need to manually add it to your `config/app.php`.

## Facade (Optional)

If you want to use the facade, add it to your `config/app.php`:

```php
'aliases' => [
    // Other aliases...
    'GitHubProject' => CSlant\GitHubProject\Facades\GitHubProjectFacade::class,
],
```

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
