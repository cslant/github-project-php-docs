---
title: Troubleshooting | GitHub Project PHP
description: Solutions to common issues you might encounter when using GitHub Project PHP.
tags: ["troubleshooting", "debugging", "faq", "errors", "support"]
---

# 🐞 Troubleshooting Guide

This guide helps you resolve common issues you might encounter when using GitHub Project PHP.

## Table of Contents

- [Webhook Issues](#webhook-issues)
- [Authentication Problems](#authentication-problems)
- [Template Errors](#template-errors)
- [Common Error Messages](#common-error-messages)
- [Debugging Tips](#debugging-tips)
- [Getting Help](#getting-help)

## Webhook Issues

### Webhook Not Triggering

**Symptoms:**
- No comments are being created when project items are updated
- No webhook deliveries in GitHub's webhook settings

**Solutions:**
1. Check if the webhook is active in GitHub settings
2. Verify the webhook URL is correct and accessible from the internet
3. Check your server's error logs for any issues
4. Ensure the webhook secret matches in both GitHub and your `.env` file

### 404 Not Found on Webhook Endpoint

**Symptoms:**
- GitHub reports 404 errors when delivering webhook events

**Solutions:**
1. Verify the webhook URL is correct (check for typos)
2. Ensure your application is running and accessible
3. Check your web server configuration (Apache/Nginx) for proper routing
4. Verify the route prefix in your config matches the URL

## Authentication Problems

### 401 Unauthorized Errors

**Symptoms:**
- API requests to GitHub are failing with 401 errors
- Comments are not being posted

**Solutions:**
1. Verify your GitHub access token is valid and has the required scopes:
   - `repo` for repository projects
   - `project` for organization projects
   - `write:discussion` for discussions
2. Check if the token has expired (they typically expire after a year)
3. Regenerate the token if needed

### 403 Forbidden Errors

**Symptoms:**
- API requests return 403 Forbidden
- Webhook deliveries fail with 403

**Solutions:**
1. Check if your GitHub token has sufficient permissions
2. Verify the repository/org settings allow the token's access level
3. For organization projects, ensure the token has organization access

## Template Errors

### Template Not Found

**Symptoms:**
- Errors about missing template files
- Comments not being generated for certain field types

**Solutions:**
1. Verify the template files exist in `resources/views/vendor/github-project/md/field_types/`
2. Run `php artisan vendor:publish --provider="CSlant\GitHubProject\GithubProjectServiceProvider" --tag="views"` to publish templates
3. Check for typos in template filenames

### Template Syntax Errors

**Symptoms:**
- Errors when rendering comments
- Malformed comment output

**Solutions:**
1. Check your template files for syntax errors
2. Ensure all Blade directives are properly closed
3. Verify all variables used in templates exist in the template data

## Common Error Messages

### "Missing required field in payload"

**Cause:** The webhook payload is missing required fields.

**Solution:** Check that you've subscribed to the correct events in GitHub webhook settings.

### "Field type not supported"

**Cause:** The package encountered a field type it doesn't have a template for.

**Solution:** Create a custom template for the field type in `resources/views/vendor/github-project/md/field_types/`.

## Debugging Tips

### Enable Debug Mode

Add these to your `.env` file for more detailed error messages:

```env
APP_DEBUG=true
APP_ENV=local
```

### Check Laravel Logs

View the Laravel logs for detailed error information:

```bash
tail -f storage/logs/laravel.log
```

### Test Webhook Locally

Use a tool like [ngrok](https://ngrok.com/) to test webhooks on your local development environment:

```bash
ngrok http 8000
```

Then update your GitHub webhook URL to point to your ngrok URL.

## Getting Help

If you're still experiencing issues:

1. Check the [GitHub Issues](https://github.com/cslant/github-project-php/issues) for similar problems
2. Open a new issue with:
   - A clear description of the problem
   - Steps to reproduce
   - Error messages from logs
   - Your configuration (without sensitive information)

## Common Questions

### How do I know if my webhook is working?

1. Go to your repository/organization settings
2. Navigate to "Webhooks"
3. Find your webhook and click on it
4. Check the "Recent Deliveries" section for recent events

### How can I test my templates without triggering GitHub events?

You can use the `tinker` console to manually test template rendering:

```php
// In tinker
$payload = [/* your test payload */];
app(\CSlant\GitHubProject\Services\GithubService::class)->generateCommentMessage($payload);
```

### How do I update the package?

```bash
composer update cslant/github-project-php
php artisan vendor:publish --provider="CSlant\GitHubProject\GithubProjectServiceProvider" --tag="views" --force
```

## Next Steps

- [Webhook Setup](../getting-started/webhook-setup)
- [Customizing Templates](../advanced/templates)
- [Configuration Options](../getting-started/configuration)
