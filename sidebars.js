// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/publishers',
        'getting-started/advertisers',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/best-practices',
        // 'guides/use-cases',
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Technical Documentation',
    //   items: [
    //     // 'technical/integration-guide',
    //   ],
    // },
    {
      type: 'category',
      label: 'Help & Support',
      items: [
        'help/troubleshooting',
        'help/common-questions',
      ],
    },
    {
      type: 'category',
      label: 'FAQ',
      items: [
        'Faq/publishers',
        'Faq/advertisers',
      ],
    },
  ],
};

module.exports = sidebars;
