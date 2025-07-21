---
title: Configuration GitHub Project PHP
description: All configuration for GitHub Project PHP to get started with it. Create interactions, set up the environment, and get the package ready for use.
tags: ["Configuration", "Get Started", "GitHub Project PHP Configuration", "Create Interactions", "Environment Setup", "GitHub Project PHP", "GitHub Project PHP Started"]
---

<head>
  <!-- Basic Meta Tags -->
  <meta name="robots" content="index,follow" />
  <meta name="author" content="CSlant" />
  <meta name="generator" content="Docusaurus" />
  <meta name="theme-color" content="#2e8555" />
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://docs.cslant.com/github-project-php/getting-started/configuration" />
  
  <!-- Open Graph Meta Tags -->
  <meta property="og:title" content="Configuration GitHub Project PHP" />
  <meta property="og:description" content="All configuration for GitHub Project PHP to get started with it. Create interactions, set up the environment, and get the package ready for use." />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://docs.cslant.com/github-project-php/getting-started/configuration" />
  <meta property="og:site_name" content="GitHub Project PHP Documentation" />
  <meta property="og:locale" content="en_US" />
  
  <!-- Twitter Card Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Configuration GitHub Project PHP" />
  <meta name="twitter:description" content="All configuration for GitHub Project PHP to get started with it. Create interactions, set up the environment, and get the package ready for use." />
  <meta name="twitter:creator" content="@cslantofficial" />
  <meta name="twitter:site" content="@cslantofficial" />
  
  <!-- Additional Meta Tags -->
  <meta name="format-detection" content="telephone=no" />
  <meta name="mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="default" />
  
  <!-- Article Meta Tags -->
  <meta property="article:published_time" content="2025-07-21T00:00:00Z" />
  <meta property="article:modified_time" content="2025-07-21T00:00:00Z" />
  <meta property="article:author" content="CSlant" />
  <meta property="article:section" content="Documentation" />
  
</head>

# 🛠 Configuration

Here is the default configuration for GitHub Project PHP. You can customize the configuration as per your requirements.

## Configuration file

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

