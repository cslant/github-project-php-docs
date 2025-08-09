---
title: Webhook Setup | GitHub Project PHP
description: Learn how to set up GitHub webhooks for your project to enable automatic comments on project item changes.
tags: ["webhook", "setup", "github", "configuration", "automation"]
---

# 🔄 Webhook Setup Guide

This guide will walk you through setting up GitHub webhooks to work with the GitHub Project PHP package.

## Prerequisites

- A GitHub repository with Projects (classic) or Projects (beta) enabled
- A publicly accessible URL for the webhook endpoint
- Admin access to the repository or organization
- [GitHub Project PHP installed and configured](./installation)

### Step 1: Configure the Webhook in GitHub

#### For Repository Webhooks

1. Go to your GitHub repository
2. Click on "Settings" > "Webhooks" > "Add webhook"
3. Configure the webhook with these settings:

   - **Payload URL**: `https://your-domain.com/{route-prefix}/webhook`
     - Replace `{route-prefix}` with your configured route prefix (default: `github-project`)
     - Example: `https://api.yourdomain.com/github-project/webhook`
   - **Content type**: `application/json`
   - **Secret**: Generate a strong secret (e.g., using `openssl rand -hex 20`)
     - Add this to your `.env` file: `GITHUB_WEBHOOK_SECRET=your_generated_secret`
   - **SSL Verification**: Enable "Enable SSL verification" for production
   - **Active**: Ensure the webhook is active

4. Under "Which events would you like to trigger this webhook?", select:
   - **Let me select individual events**
   - Then check these events:
     - `Project`
     - `Project card`
     - `Project column`
     - `Projects V2`
     - `Projects V2 item`

5. Click "Add webhook" to save

#### For Organization Webhooks

1. Go to your GitHub organization
2. Click on "Settings" > "Webhooks" > "Add webhook"
3. Follow the same configuration as above
4. Note: Organization webhooks require admin permissions

### Step 2: Verify Webhook Configuration

After saving the webhook, GitHub will send a "ping" event to your endpoint. You can verify this by:

1. Going to the webhook settings
2. Clicking on the webhook you just created
3. Scrolling down to "Recent Deliveries"
4. Looking for a successful (200) response to the ping event

If you see a green checkmark (✓), your webhook is properly configured. If not, check the error message and your server logs.

### Step 3: Test with a Real Event

1. Go to your GitHub project
2. Make a change to a project item (e.g., change a status field)
3. Check the webhook deliveries for a new event
4. Verify that a comment was added to the related issue/PR

## Troubleshooting Webhook Issues

### Common Issues

1. **404 Not Found**
   - Verify the webhook URL is correct
   - Ensure your application is running and accessible
   - Check your web server configuration

2. **403 Forbidden**
   - Verify your GitHub token has the correct permissions
   - Check if the webhook secret matches

3. **No Events Received**
   - Verify the webhook is active
   - Check that the correct events are selected
   - Look for errors in your application logs

### Viewing Webhook Logs

You can view detailed logs for webhook deliveries in the GitHub UI:

1. Go to your webhook settings
2. Click on the webhook
3. Scroll down to "Recent Deliveries"
4. Click on a delivery to see the request and response

## Security Considerations

1. **Use HTTPS**: Always use HTTPS for your webhook URL
2. **Webhook Secret**: Always set and use a webhook secret
3. **IP Whitelisting**: If possible, whitelist GitHub's IP addresses
4. **Rate Limiting**: Implement rate limiting to prevent abuse
5. **Input Validation**: Always validate incoming webhook data

## Advanced Configuration

### Customizing the Webhook Endpoint

You can customize the webhook endpoint by modifying the route prefix in your `.env` file:

```env
GITHUB_PROJECT_ROUTE_PREFIX=my-custom-prefix
```

This will change the webhook URL to: `https://your-domain.com/my-custom-prefix/webhook`

### Handling Webhook Failures

If a webhook delivery fails, GitHub will automatically retry. You can configure the retry behavior in the webhook settings.

## Next Steps

- [Customize comment templates](../advanced/templates) to change how updates are displayed
- [Set up queue processing](../configuration#queue-configuration) for better performance
- [Explore the API reference](../advanced/api-reference) for advanced use cases

## Step 2: Configure Your Environment

Make sure your `.env` file contains the following variables:

```env
# Required
GITHUB_ACCESS_TOKEN=your-github-access-token

# Optional - Webhook Secret (must match the one in GitHub)
GITHUB_WEBHOOK_SECRET=your-webhook-secret

# Optional - Route prefix (default: github-project)
GITHUB_PROJECT_ROUTE_PREFIX=github-project

# Optional - Enable/disable status comments (default: false)
GITHUB_PROJECT_ENABLE_STATUS_COMMENT=true

# Optional - Enable/disable queue processing (default: false)
GITHUB_PROJECT_QUEUE_ENABLED=false
```

## Step 3: Verify Webhook Delivery

After saving the webhook, GitHub will send a ping event to your endpoint. You can check the webhook delivery status in the GitHub webhook settings under "Recent Deliveries".

## Troubleshooting

### Webhook Not Delivering
- Verify that your server is accessible from the internet
- Check your server logs for any errors
- Ensure the webhook URL is correct and includes the proper route prefix

### 401 Unauthorized
- Verify that your GitHub access token has the required scopes:
  - `repo` (for repository projects)
  - `project` (for organization projects)
  - `projects_v2' (for organization projects)
  - `projects_v2_items' (for organization projects)
  - `write:discussion` (if using discussions)

### 403 Forbidden
- Check if your GitHub token has sufficient permissions
- Verify that the webhook secret matches in both GitHub and your `.env` file

## Security Considerations

1. Always use HTTPS for your webhook URL
2. Use a strong, unique webhook secret
3. Regularly rotate your GitHub access tokens
4. Implement rate limiting on your webhook endpoint
5. Validate the webhook signature in your application

## Next Steps

- [Customizing Comment Templates](./../advanced/templates)
- [Configuration Options](./configuration)
- [Troubleshooting Common Issues](./../support/troubleshooting)
