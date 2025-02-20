---
title: Configuration GitHub Project PHP
description: All configuration for GitHub Project PHP to get started with it. Create interactions, set up the environment, and get the package ready for use.
keywords: ["GitHub Project PHP", "configuration", "GitHub Project PHP configuration", 'get started', 'github project php started']
tags: ["Configuration", "Get Started", "GitHub Project PHP Configuration", "Create Interactions", "Environment Setup", "GitHub Project PHP", "GitHub Project PHP Started"]
---

<head>
  <meta name="robots" content="index,follow" />
  <meta name="author" content="CSlant" />
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

