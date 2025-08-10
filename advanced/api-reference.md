---
title: API Reference | GitHub Project PHP
description: Complete API reference for extending and customizing GitHub Project PHP. Learn how to extend and customize the GitHub Project PHP package.
tags: ["api", "reference", "extending", "customization", "development"]
---

# 🔧 API Reference

This document provides a comprehensive reference for the GitHub Project PHP package's API, including classes, methods, and events that you can use to extend and customize the package.

## Table of Contents

- [Service Classes](#service-classes)
- [Actions](#actions)
- [Events](#events)
- [Jobs](#jobs)
- [Extending the Package](#extending-the-package)
- [Custom Field Types](#custom-field-types)
- [Helper Functions](#helper-functions)

## Service Classes

### `GithubService`

Handles GitHub API interactions.

**Namespace:** `CSlant\GitHubProject\Services\GithubService`

**Methods:**

```php
/**
 * Post a comment to a GitHub issue or pull request
 *
 * @param string $contentNodeId The node ID of the content to comment on
 * @param string $message The comment message (markdown supported)
 * @return array The API response
 */
public function commentOnNode(string $contentNodeId, string $message): array

/**
 * Handle a webhook payload and post a comment
 *
 * @param array $payload The webhook payload
 * @throws \Throwable
 */
public function handleComment(array $payload): void

/**
 * Generate a comment message from a payload
 *
 * @param array $payload The webhook payload
 * @return string The rendered comment
 * @throws \Throwable
 */
public function generateCommentMessage(array $payload): string
```

### `WebhookService`

Handles webhook validation and processing.

**Namespace:** `CSlant\GitHubProject\Services\WebhookService`

**Methods:**

```php
/**
 * Check if the webhook event is approved
 */
public function eventRequestApproved(Request $request): bool

/**
 * Validate the webhook payload
 *
 * @param array $payload The webhook payload
 * @return JsonResponse|null Returns a response if validation fails, null otherwise
 */
public function validatePayload(array $payload): ?JsonResponse

/**
 * Validate payload specifically for comment generation
 */
public function validatePayloadForComment(array $payload): ?JsonResponse
```

## Actions

### `GenerateCommentAction`

Handles the generation of comments for project item changes.

**Namespace:** `CSlant\GitHubProject\Actions\GenerateCommentAction`

**Methods:**

```php
/**
 * Generate a comment message from the webhook payload
 *
 * @param  Request  $request
 * @param  bool  $validate  Whether to validate the payload (default: true)
 *
 * @return JsonResponse
 * @throws Throwable
 */
public function __invoke(Request $request, bool $validate = true): JsonResponse
```

### `WebhookAction`

Handles incoming webhook requests.

**Namespace:** `CSlant\GitHubProject\Actions\WebhookAction`

**Methods:**

```php
/**
 * Handle an incoming webhook request
 *
 * @return JsonResponse The HTTP response
 */
public function __invoke(): JsonResponse
```

## Jobs

### `ProcessWebhookEvent`

Processes webhook events in the background.

**Namespace:** `CSlant\GitHubProject\Jobs\ProcessWebhookEvent`

**Properties:**

- `public array $payload` - The webhook payload
- `public int $tries = 3` - Number of times to attempt the job
- `public int $maxExceptions = 3` - Maximum number of exceptions before failing

**Methods:**

```php
/**
 * Execute the job
 */
public function handle(): void
```

## Events

The package dispatches several events that you can listen for:

### `CommentGenerated`

Dispatched when a comment is successfully generated and posted to GitHub.

**Properties:**
- `public string $contentNodeId` - The node ID of the content
- `public string $comment` - The comment that was posted
- `public array $payload` - The original webhook payload

### `WebhookReceived`

Dispatched when a webhook is received and validated.

**Properties:**
- `public array $payload` - The webhook payload
- `public string $eventName` - The name of the event

### `WebhookProcessed`

Dispatched after a webhook has been processed.

**Properties:**
- `public array $payload` - The webhook payload
- `public string $eventName` - The name of the event

## Extending the Package

### Creating a Custom Service Provider

You can extend the package by creating a custom service provider:

```php
<?php

namespace App\Providers;

use CSlant\GitHubProject\GithubProjectServiceProvider as BaseServiceProvider;

class GithubProjectServiceProvider extends BaseServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        parent::register();
        
        // Register your custom bindings here
    }
    
    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        parent::boot();
        
        // Add your custom boot logic here
    }
}
```

### Listening to Events

You can listen to the package's events in your `EventServiceProvider`:

```php
// In your EventServiceProvider
protected $listen = [
    \CSlant\GitHubProject\Events\CommentGenerated::class => [
        // Your listeners here
    ],
    \CSlant\GitHubProject\Events\WebhookReceived::class => [
        // Your listeners here
    ],
];
```

## Custom Field Types

To add support for a custom field type:

1. Create a new template in `resources/views/vendor/github-project/md/field_types/`
2. Name it `{field_type}.blade.php`
3. The template will automatically be used when a field of that type is encountered

Example template:

```php
{{-- resources/views/vendor/github-project/md/field_types/custom_field.blade.php --}}
@if($fromValue != null && $toValue != null)
    **`{{ $fieldName }}`** was changed from `{{ $fromValue }}` to `{{ $toValue }}`
@elseif($toValue == null)
    **`{{ $fieldName }}`** was removed
@else
    **`{{ $fieldName }}`** was set to `{{ $toValue }}`
@endif
```

## Helper Functions

The package provides several helper functions:

### `color_value_format($value, $color = null)`

Formats a value with an optional color.

**Parameters:**
- `string $value` - The value to format
- `?string $color` - The color to use (hex, rgb, or color name)

**Returns:** `string` - The formatted value

### `format_date($date, $format = 'Y-m-d H:i:s')`

Formats a date string.

**Parameters:**
- `string $date` - The date string to format
- `string $format` - The date format (default: 'Y-m-d H:i:s')

**Returns:** `string` - The formatted date

### `markdown_to_html($markdown)`

Converts markdown to HTML.

**Parameters:**
- `string $markdown` - The markdown to convert

**Returns:** `string` - The HTML output

## Configuration Reference

All available configuration options with their default values:

```php
return [
    'name' => 'GitHubProject',
    'route_prefix' => env('GITHUB_PROJECT_ROUTE_PREFIX', 'github-project'),
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

## Next Steps

- [Customizing Templates](./templates)
- [Webhook Setup](../getting-started/webhook-setup)
- [Troubleshooting](../support/troubleshooting)
