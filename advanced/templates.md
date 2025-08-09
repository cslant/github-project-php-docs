---
title: Customizing Templates | GitHub Project PHP
description: Learn how to customize the comment templates for different field types in GitHub Project PHP.
tags: ["templates", "customization", "field types", "styling", "markdown"]
---

# 🎨 Customizing Templates

GitHub Project PHP uses Blade templates to generate comments for different field types. This guide explains how to customize these templates to match your needs.

## Template Locations

All templates are located in the `resources/views/vendor/github-project/md/` directory after publishing:

```
resources/views/vendor/github-project/md/
├── comment.blade.php      # Main comment template
├── shared/
│   ├── author.blade.php   # Author information
│   └── content.blade.php  # Content rendering
└── field_types/          # Field type specific templates
    ├── text.blade.php
    ├── number.blade.php
    ├── date.blade.php
    └── ...
```

## Publishing Templates

To customize the templates, publish them to your application:

```bash
php artisan vendor:publish --provider="CSlant\GitHubProject\GithubProjectServiceProvider" --tag="views"
```

This will copy the templates to your `resources/views/vendor/github-project/md/` directory.

## Available Templates

### Main Comment Template (`comment.blade.php`)

The main template that wraps all comments. It includes:

- Project information
- Action type (created, updated, deleted)
- Content section for field changes
- Author information

### Field Type Templates

Each field type has its own template in the `field_types` directory. The following field types are supported:

- `text.blade.php` - Simple text fields
- `number.blade.php` - Numeric fields
- `date.blade.php` - Date fields
- `single_select.blade.php` - Single-select dropdowns
- `multi_select.blade.php` - Multi-select fields
- `checkbox.blade.php` - Boolean/toggle fields
- `textarea.blade.php` - Long text content
- `iteration.blade.php` - Iteration/sprint fields
- `milestone.blade.php` - Milestone fields
- `unsupported.blade.php` - Fallback for unsupported field types

## Template Variables

### Available in All Templates

```php
[
    'payload' => [
        'action' => 'created|edited|deleted',
        'projects_v2_item' => [
            'content_type' => 'Issue|PullRequest',
            'content_node_id' => 'string',
            'content_title' => 'string',
            'content_url' => 'string',
            'project_title' => 'string',
            'project_url' => 'string',
        ],
        'sender' => [
            'login' => 'string',
            'html_url' => 'string',
            'avatar_url' => 'string',
        ],
        'changes' => [
            'field_value' => [
                'field_type' => 'text|number|date|...',
                'from' => 'mixed',
                'to' => 'mixed',
            ],
            'updated_at' => 'datetime',
        ],
    ],
    'fieldName' => 'string',  // Current field name
    'fieldType' => 'string',  // Current field type
    'fromValue' => 'mixed',   // Previous value
    'toValue' => 'mixed',     // New value
    'fieldData' => [          // Raw field data
        'from' => 'mixed',
        'to' => 'mixed',
        'field' => [
            'name' => 'string',
            'type' => 'string',
        ],
    ],
]
```

## Customizing a Field Type Template

To customize a field type template, copy it from the package to your application and modify it. For example, to customize the text field template:

1. Publish the templates (if not already done):
   ```bash
   php artisan vendor:publish --provider="CSlant\GitHubProject\GithubProjectServiceProvider" --tag="views"
   ```

2. Edit the template at `resources/views/vendor/github-project/md/field_types/text.blade.php`

## Adding a New Field Type

To add support for a new field type:

1. Create a new template file in `resources/views/vendor/github-project/md/field_types/`
2. Name it `{field_type}.blade.php` (e.g., `custom_field.blade.php`)
3. The template will automatically be used when a field of that type is encountered

## Helper Functions

The following helper functions are available in templates:

- `color_value_format($value, $color = null)` - Formats a value with an optional color
- `format_date($date, $format = 'Y-m-d H:i:s')` - Formats a date string
- `markdown_to_html($markdown)` - Converts markdown to HTML (if needed)

## Example: Custom Text Field Template

```php
{{-- resources/views/vendor/github-project/md/field_types/text.blade.php --}}
@if($fromValue != null && $toValue != null)
    **`{{ $fieldName }}`** was changed from `{{ $fromValue }}` to `{{ $toValue }}`
@elseif($toValue == null)
    **`{{ $fieldName }}`** was removed
@else
    **`{{ $fieldName }}`** was set to `{{ $toValue }}`
@endif
```

## Best Practices

1. Keep templates simple and focused on a single responsibility
2. Use GitHub Flavored Markdown for formatting
3. Handle null/empty values gracefully
4. Keep the output concise but informative
5. Test your templates with different field values

## Testing Your Templates

To test your templates, you can:

1. Make changes to a project item in GitHub and check the generated comment
2. Use the `tinker` console to manually trigger comment generation
3. Write tests that verify the template output

## Next Steps

- [Webhook Setup](../getting-started/webhook-setup)
- [Configuration Options](../getting-started/configuration)
- [Troubleshooting](../support/troubleshooting)
