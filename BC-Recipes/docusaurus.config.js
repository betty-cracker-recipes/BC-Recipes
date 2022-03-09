// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Betty Cracker Recipes',
  tagline: 'Recipes for Breakfast, Lunch, Dinner, & Dessert',
  url: 'https:/betty-cracker-recipes.github.io',
  baseUrl: '/BC-Recipes/',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'betty-cracker-recipes', //  GitHub org/user name.
  projectName: 'BC-Recipes', //Reepo name.
  
  
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/betty-cracker-recipes/betty-cracker-recipes.github.io/tree/main/betty-cracker-recipes.github.io',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/betty-cracker-recipes/betty-cracker-recipes.github.io/tree/main/betty-cracker-recipes.github.io',
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
        title: 'Home',
        logo: {
          alt: 'My Site Logo',
          src: 'img/chef-2.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Recipes',
          },
          {to: '/gallery', label: 'Gallery', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          /* {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          }, */
        ],
      },
      footer: {
        style: 'dark',
        
        links: [
      
       
          {
          //title: 'Documentation',
            items: [
             
              {
                label: 'GitHub',
                href: 'https://github.com/betty-cracker-recipes/betty-cracker-recipes.github.io/tree/main/betty-cracker-recipes.github.io',
                // to:
                // or href: '/docs/intro', is navigating example

              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Betty Cracker Recipes.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
