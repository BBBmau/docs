// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The Internet Rebuilt for you',
  staticDirectories: ['public', 'static'],
  tagline: 'Official documentation for the Sonr Platform',
  url: 'https://sonr.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    "posthog-docusaurus",
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        docsRouteBasePath: ['docs', 'protodocs'],
        docsDir: ['docs', 'protodocs'],
        indexBlog: false,
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          // Registry redirects
          { to: '/protodocs/registry/tx.proto', from: '/api/registry' },
          { to: '/protodocs/registry/tx.proto', from: '/api/registry/tx' },
          { to: '/protodocs/registry/query.proto', from: '/api/registry/query' },
          { to: '/protodocs/registry/genesis.proto', from: '/api/registry/genesis' },
          { to: '/protodocs/registry/params.proto', from: '/api/registry/params' },
          { to: '/protodocs/registry/who_is.proto', from: '/api/registry/who_is' },
          { to: '/protodocs/registry/did.proto', from: '/api/registry/did' },

          // Schema redirects
          { to: '/protodocs/schema/v1/schema.proto', from: '/api/schema' },
          { to: '/protodocs/schema/v1/tx.proto', from: '/api/schema/tx' },
          { to: '/protodocs/schema/v1/query.proto', from: '/api/schema/query' },
          { to: '/protodocs/schema/v1/genesis.proto', from: '/api/schema/genesis' },
          { to: '/protodocs/schema/v1/params.proto', from: '/api/schema/params' },
          { to: '/protodocs/schema/v1/what_is.proto', from: '/api/schema/what_is' },

          // Bucket redirects
          { to: '/protodocs/bucket/tx.proto', from: '/api/bucket' },
          { to: '/protodocs/bucket/tx.proto', from: '/api/bucket/tx' },
          { to: '/protodocs/bucket/query.proto', from: '/api/bucket/query' },
          { to: '/protodocs/bucket/genesis.proto', from: '/api/bucket/genesis' },
          { to: '/protodocs/bucket/params.proto', from: '/api/bucket/params' },
          { to: '/protodocs/bucket/where_is.proto', from: '/api/bucket/where_is' },

          // Service redirects
          { to: '/protodocs/service/v1/discover.proto', from: '/api/service' },
          { to: '/protodocs/service/v1/discover.proto', from: '/api/service/discover' },
          { to: '/protodocs/service/v1/exchange.proto', from: '/api/service/exchange' },
          { to: '/protodocs/service/v1/transmit.proto', from: '/api/service/transmit' },

          // Motor redirects
          { to: '/protodocs/motor/v1/request.proto', from: '/api/motor' },
          { to: '/protodocs/motor/v1/request.proto', from: '/api/motor/request' },
          { to: '/protodocs/motor/v1/response.proto', from: '/api/motor/response' },

          // Common redirects
          { to: '/protodocs/common/v1/info.proto', from: '/api/common' },
          { to: '/protodocs/common/v1/info.proto', from: '/api/common/info' },
          { to: '/protodocs/common/v1/ipns.proto', from: '/api/common/ipns' },
        ],
      },
    ],
  ],
  themes: [],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/sonr-io/docs/tree/main/',
          docLayoutComponent: '@theme/DocPage',
          docItemComponent: '@theme/DocItem',
          showLastUpdateTime: true,
          sidebarCollapsed: false,
          async sidebarItemsGenerator({
            defaultSidebarItemsGenerator,
            numberPrefixParser,
            item,
            version,
            docs,
            isCategoryIndex,
          }) {
            // Use the provided data to generate a custom sidebar slice
            return [
              { type: 'doc', id: 'intro' },
              {
                type: 'category',
                label: 'Tutorials',
                items: [
                  { type: 'doc', id: 'tutorial1' },
                  { type: 'doc', id: 'tutorial2' },
                ],
              },
            ];
          },
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/sonr-io/docs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    [
      'docusaurus-protobuffet',
      {
        protobuffet: {
          fileDescriptorsPath: './fixtures/proto_workspace.json',
          protoDocsPath: './protodocs',
          sidebarPath: './genSidebarsProtodocs.js',
        },
        docs: {
          sidebarPath: './sidebarsProtodocs.js',
        },
      }
    ]
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      posthog: {
        apiKey: process.env.POSTHOG_KEY || 'posthog-key',
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: 'Sonr Docs Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg',
          className: 'navbar-logo',
        },
        items: [
          {
            type: 'doc',
            position: 'left',
            docId: 'main',
            label: 'Docs',
          },
          {
            to: 'protodocs/registry/tx.proto',
            activeBasePath: 'protodocs',
            position: 'left',
            label: 'API',
          },
          { to: '/blog', label: 'Guides', position: 'left' },
          {
            href: 'https://github.com/sonr-io/sonr',
            position: 'right',
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/6Z3RmWs257',
              },
              {
                label: 'Portal',
                href: 'https://community.sonr.io',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/sonr_io',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Architecture',
                href: 'https://github.com/sonr-io/sonr/blob/dev/docs/architecture/GUIDE.md',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/sonr',
              },
              {
                label: 'Tokenomics',
                href: 'https://sonr.money',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Homepage',
                href: 'https://www.sonr.io',
              },
              {
                label: 'Contact Us',
                href: 'mailto:team@sonr.io',
              }
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["java", "scala", "dart", "protobuf", "swift", "ruby"],
      },
    }),
};

module.exports = config;
