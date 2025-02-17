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
        title: 'Prologue - Github Project PHP',
        description: 'This section will give you a brief overview of the project and its features. Let\'s get started with the Github Project PHP.',
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
        title: 'Getting Started - Github Project PHP',
        description: 'Let\'s get started with the Github Project PHP ' +
          'You can also find the installation guide and the configuration guide here.',
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
          label: '🛠 Configuration',
        },
      ],
      collapsed: false,
    },
    {
      type: 'category',
      link: {
        title: 'Support -Github Project PHP',
        type: 'generated-index',
        description: 'Please check this section if you have any problems with the bot or you want to request a new feature. We will be happy to help you!',
      },
      label: 'Support',
      items: [
        {
          type: 'doc',
          id: 'support/feature-requests',
          label: '🚀 Feature Requests',
        },
        {
          type: 'doc',
          id: 'support/issues',
          label: '🐛 Issues',
        },
      ],
      collapsed: false,
    },
    {
      type: 'category',
      link: {
        type: 'generated-index',
        title: 'GitHub Source - Github Project PHP',
        description: 'Please check this section if you want to contribute to the Github Project PHP project. We will be happy to accept your contributions. Let\'s make the package better together!',
      },
      label: 'GitHub Source',
      collapsed: false,
      items: [
        {
          type: 'link',
          label: 'Github Project PHP',
          description: 'Check the source code of Github Project PHP on GitHub.',
          href: 'https://github.com/cslant/github-project-php-docs',
        },
      ],
    },
  ],
};
