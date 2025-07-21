---
title: Configuration GitHub Project PHP
description: All configuration for GitHub Project PHP to get started with it. Create interactions, set up the environment, and get the package ready for use.
tags: ["Configuration", "Get Started", "GitHub Project PHP Configuration", "Create Interactions", "Environment Setup", "GitHub Project PHP", "GitHub Project PHP Started"]
---

<head>
  <meta name="robots" content="index,follow" />
  <meta name="author" content="CSlant" />
  <link rel="canonical" href="https://docs.cslant.com/github-project-php/getting-started/configuration" />
  
  {/* Open Graph tags */}
  <meta property="og:title" content="Configuration GitHub Project PHP" />
  <meta property="og:description" content="All configuration for GitHub Project PHP to get started with it. Create interactions, set up the environment, and get the package ready for use." />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://docs.cslant.com/github-project-php/getting-started/configuration" />
  
  {/* Twitter Card tags */}
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Configuration GitHub Project PHP" />
  <meta name="twitter:description" content="All configuration for GitHub Project PHP to get started with it. Create interactions, set up the environment, and get the package ready for use." />
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

