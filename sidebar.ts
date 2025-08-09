module.exports = {
  GithubProjectPackageSidebar: [
    {
      type: 'doc',
      id: 'introduction',
      label: 'Introduction',
    },
    {
      type: 'category',
      link: {
        type: 'generated-index',
        title: 'Prologue - GitHub Project PHP',
        description: 'This section will give you a brief overview of the project and its features. Let\'s get started with the GitHub Project PHP.',
      },
      label: 'Prologue',
      items: [
        {
          type: 'doc',
          id: 'prologue/releases',
          label: '🚀 Release Notes',
        },
      ],
      collapsed: false,
    },
    {
      type: 'category',
      link: {
        type: 'generated-index',
        title: 'Getting Started - GitHub Project PHP',
        description: 'Let\'s get started with the GitHub Project PHP. You can find installation, configuration, and setup guides here.',
      },
      label: 'Getting Started',
      items: [
        {
          type: 'doc',
          id: 'getting-started/requirements',
          label: '📋 Requirements',
        },
        {
          type: 'doc',
          id: 'getting-started/installation',
          label: '🔧 Installation',
        },
        {
          type: 'doc',
          id: 'getting-started/configuration',
          label: '⚙️ Configuration',
        },
        {
          type: 'doc',
          id: 'getting-started/webhook-setup',
          label: '🔄 Webhook Setup',
        },
      ],
      collapsed: false,
    },
    {
      type: 'category',
      link: {
        type: 'generated-index',
        title: 'Advanced - GitHub Project PHP',
        description: 'Advanced topics for customizing and extending the GitHub Project PHP package. How to customize the templates and use the API reference.',
      },
      label: 'Advanced',
      items: [
        {
          type: 'doc',
          id: 'advanced/templates',
          label: '🎨 Customizing Templates',
        },
        {
          type: 'doc',
          id: 'advanced/api-reference',
          label: '🔌 API Reference',
        },
      ],
      collapsed: false,
    },
    {
      type: 'category',
      link: {
        type: 'generated-index',
        title: 'Examples - GitHub Project PHP',
        description: 'Practical examples and sample configurations for the GitHub Project PHP package.',
      },
      label: 'Examples',
      items: [
        {
          type: 'doc',
          id: 'examples/README',
          label: '📋 Examples Overview',
        },
      ],
      collapsed: false,
    },
    {
      type: 'category',
      link: {
        type: 'generated-index',
        title: 'Support - GitHub Project PHP',
        description: 'Get help with common issues, report bugs, or request new features.',
      },
      label: 'Support',
      items: [
        {
          type: 'doc',
          id: 'support/troubleshooting',
          label: '🐞 Troubleshooting',
        },
        {
          type: 'doc',
          id: 'support/feature-requests',
          label: '💡 Feature Requests',
        },
        {
          type: 'doc',
          id: 'support/issues',
          label: '⚠️ Report Issues',
        },
      ],
      collapsed: false,
    },
    {
      type: 'category',
      link: {
        type: 'generated-index',
        title: 'Resources - GitHub Project PHP',
        description: 'Additional resources and links for the GitHub Project PHP package.',
      },
      label: 'Resources',
      collapsed: false,
      items: [
        {
          type: 'link',
          label: 'GitHub Repository',
          description: 'View the source code on GitHub',
          href: 'https://github.com/cslant/github-project-php',
        },
        {
          type: 'link',
          label: 'Packagist',
          description: 'View on Packagist',
          href: 'https://packagist.org/packages/cslant/github-project-php',
        },
        {
          type: 'link',
          label: 'GitHub Issues',
          description: 'Report issues or bugs',
          href: 'https://github.com/cslant/github-project-php/issues',
        },
      ],
    },
  ],
};
