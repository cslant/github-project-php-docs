# GitHub Project PHP Documentation

Welcome to the official documentation for GitHub Project PHP, a powerful Laravel package that helps you automate your GitHub Project workflow with real-time updates and notifications.

## Features

- **Real-time Updates**: Get instant notifications for all project changes
- **Customizable Templates**: Tailor comments to match your team's workflow
- **Easy Integration**: Simple setup with GitHub webhooks
- **Flexible Deployment**: Works with any PHP application

## Getting Started

1. **Install the package**
   ```bash
   composer require cslant/github-project-php
   ```

2. **Publish the configuration**
    
   :::info[optional]
   This is an optional step. If you don't publish the config file, the package will use the default configuration.
   :::

   ```bash
   php artisan vendor:publish --provider="CSlant\GitHubProject\GithubProjectServiceProvider" --tag="config"
   ```

3. **Configure your environment**
   Add these to your `.env` file:
   ```
   GITHUB_ACCESS_TOKEN=your_github_token
   GITHUB_WEBHOOK_SECRET=your_webhook_secret
   ```

4. **Set up a GitHub webhook**
   - Go to your repository/organization settings
   - Add a new webhook with the following settings:
     - Payload URL: `https://your-domain.com/github-project/webhook`
     - Content type: `application/json`
     - Secret: Your webhook secret from `.env`
     - Events: Select the events you want to track

## Documentation Official Links

**Documentation is available at [https://docs.cslant.com/github-project-php](https://docs.cslant.com/github-project-php).**


## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

## 📢 Issues

If you find yourself stuck using this package, find a bug, or have a feature request, Please open an issue on [GitHub](https://github.com/cslant/github-project-php/issues).

We appreciate detailed, accurate reports that help us identify and replicate the issue.

## 🔥 Feature Requests

If you have any feature requests, please open an issue with the `feature request` label on the [GitHub repository](https://github.com/cslant/github-project-php/issues/new?assignees=&labels=&projects=&template=feature_request.md&title=).
