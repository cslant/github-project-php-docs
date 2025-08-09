# 📋 Examples

This directory contains practical examples and sample configurations to help you get started with GitHub Project PHP.

## Table of Contents

- [Sample Webhook Payloads](#sample-webhook-payloads)
- [Example Configurations](#example-configurations)
- [Custom Template Examples](#custom-template-examples)
- [Event Listeners](#event-listeners)
- [Testing with cURL](#testing-with-curl)

## Sample Webhook Payloads

### Project Item Field Update

```json
{
  "action": "edited",
  "projects_v2_item": {
    "id": 12345678,
    "node_id": "PVTI_lAHOABXb7s4AX5Jezg",
    "project_node_id": "PVT_kwHOAABXb84AE1U-",
    "content_node_id": "I_kwDOG6f9z85vDz4h",
    "content_type": "Issue",
    "content_url": "https://api.github.com/repos/octocat/hello-world/issues/1",
    "content_title": "Fix the bug",
    "project_title": "My Project",
    "project_url": "https://github.com/orgs/octocat/projects/1"
  },
  "changes": {
    "field_value": {
      "field_type": "single_select",
      "field_node_id": "PVTSSF_lAHOABXb7s4AX5Jezg",
      "from": "In Progress",
      "to": "Done"
    },
    "updated_at": "2023-01-01T12:00:00Z"
  },
  "sender": {
    "login": "octocat",
    "html_url": "https://github.com/octocat",
    "avatar_url": "https://avatars.githubusercontent.com/u/583231?v=4"
  }
}
```

## Example Configurations

### Basic Configuration

```php
// config/github-project.php
return [
    'name' => 'My Project',
    'route_prefix' => 'github-project',
    'github' => [
        'access_token' => env('GITHUB_ACCESS_TOKEN'),
        'graphql_url' => 'https://api.github.com/graphql',
    ],
    'enable_status_comment' => true,
    'is_queue_enabled' => false,
];
```

### Advanced Configuration with Queue

```php
// config/github-project.php
return [
    'name' => 'My Project',
    'route_prefix' => 'github-project',
    'github' => [
        'access_token' => env('GITHUB_ACCESS_TOKEN'),
        'graphql_url' => 'https://api.github.com/graphql',
    ],
    'enable_status_comment' => true,
    'is_queue_enabled' => true,
    'comment_aggregation_cache_key' => 'my-project-comment-aggregation',
    'comment_aggregation_time' => 30, // seconds
];
```

## Custom Template Examples

### Custom Text Field Template

```php
{{-- resources/views/vendor/github-project/md/field_types/text.blade.php --}}
@if($fromValue != null && $toValue != null)
    🎯 **{{ $fieldName }}** was updated from `{{ $fromValue }}` to `{{ $toValue }}`
@elseif($toValue == null)
    🗑️ **{{ $fieldName }}** was removed
@else
    ✨ **{{ $fieldName }}** was set to `{{ $toValue }}`
@endif
```

### Custom Single Select Template with Emoji

```php
{{-- resources/views/vendor/github-project/md/field_types/single_select.blade.php --}}
@php
    $fromColor = $fieldData['from']['color'] ?? null;
    $toColor = $fieldData['to']['color'] ?? null;
    
    $statusIcons = [
        'To Do' => '📋',
        'In Progress' => '🚧',
        'In Review' => '👀',
        'Done' => '✅',
        'Blocked' => '🚫',
    ];
    
    $fromIcon = $statusIcons[$fromValue] ?? '';
    $toIcon = $statusIcons[$toValue] ?? '';
@endphp

@if($fromValue != null && $toValue != null)
    🔄 **{{ $fieldName }}** changed from {{ $fromIcon }} `{{ $fromValue }}` to {{ $toIcon }} `{{ $toValue }}`
@elseif($toValue == null)
    🗑️ **{{ $fieldName }}** was removed (was: `{{ $fromValue }}`)
@else
    ✨ **{{ $fieldName }}** was set to {{ $toIcon }} `{{ $toValue }}`
@endif
```

## Event Listeners

### Logging Webhook Events

```php
// app/Listeners/LogWebhookEvent.php

namespace App\Listeners;

use CSlant\GitHubProject\Events\WebhookReceived;
use Illuminate\Support\Facades\Log;

class LogWebhookEvent
{
    public function handle(WebhookReceived $event): void
    {
        Log::info('Webhook received', [
            'event' => $event->eventName,
            'project' => $event->payload['projects_v2_item']['project_title'] ?? null,
            'content_type' => $event->payload['projects_v2_item']['content_type'] ?? null,
            'content_title' => $event->payload['projects_v2_item']['content_title'] ?? null,
            'action' => $event->payload['action'] ?? null,
        ]);
    }
}
```

## Testing with cURL

You can test your webhook endpoint using cURL:

```bash
curl -X POST \
  http://your-app.com/github-project/webhook \
  -H 'Content-Type: application/json' \
  -H 'X-GitHub-Event: projects_v2_item' \
  -H 'X-Hub-Signature-256: sha256=...' \
  -d '{
    "action": "edited",
    "projects_v2_item": {
      "content_node_id": "I_kwDOG6f9z85vDz4h",
      "content_type": "Issue",
      "content_title": "Test Issue",
      "content_url": "https://api.github.com/repos/octocat/hello-world/issues/1",
      "project_title": "Test Project"
    },
    "changes": {
      "field_value": {
        "field_type": "single_select",
        "from": "To Do",
        "to": "In Progress"
      }
    },
    "sender": {
      "login": "testuser"
    }
  }'
```

## Next Steps

- [Webhook Setup](../getting-started/webhook-setup)
- [Customizing Templates](../advanced/templates)
- [API Reference](../advanced/api-reference)
