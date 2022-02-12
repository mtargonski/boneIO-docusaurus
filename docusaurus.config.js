// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'boneIO',
  tagline: 'Open Source Smart Home Automation project.',
  url: 'https://boneio.eu',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'boneio-eu', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  plugins: [
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'hardware',
        path: 'hardware',
        routeBasePath: 'hardware',
        editCurrentVersion: true,
        sidebarPath: require.resolve('./sidebars.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }),
    ],
    // [
    //   'content-docs',
    //   /** @type {import('@docusaurus/plugin-content-docs').Options} */
    //   ({
    //     id: 'case',
    //     path: 'case',
    //     routeBasePath: 'case',
    //     editCurrentVersion: true,
    //     sidebarPath: require.resolve('./sidebars.js'),
    //     showLastUpdateAuthor: false,
    //     showLastUpdateTime: false,
    //   }),
    // ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          lastVersion: 'current',
        },
        blog: {
          showReadingTime: true,
          path: 'blog',
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        // title: 'boneIO',
        logo: {
          alt: 'boneIO',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'App for BBB',
          },
          {
            type: 'docsVersionDropdown',
          },
          {
            to: '/hardware',
            label: 'Hardware',
            position: 'left',
            activeBaseRegex: `/hardware/`,
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/boneio-eu/boneIO',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Start',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Facebook Group',
                href: 'https://facebook.com/groups/boneio',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/PsrXEz9CBp',
              },
              {
                label: 'Youtube playlist',
                href: 'https://www.youtube.com/playlist?list=PLjW3u5l4eAd2qtv4A4kIWntlwjxupNBip',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} boneIO.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
