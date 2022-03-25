// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Betty Cracker Recipes', //site title
  tagline: 'Recipes for Breakfast, Lunch, Dinner, & Dessert', //tagline on homepage
  url: 'https:/betty-cracker-recipes.github.io',
  baseUrl: '/BC-Recipes/',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico', // tab image
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
          editUrl: 'https://github.com/betty-cracker-recipes/BC-Recipes',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/betty-cracker-recipes/BC-Recipes',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    (
      {
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
      // Makes the Algolia Docsearch bar appear
      // apiKey, indexName and appId are all created within Algolia account
      algolia: {
          apiKey:'095d0154d0a88751c86fdf134f5f5775',
          indexName:'bc',
          appId:'33MRM77352',
      },

      // Footer: can add or remove links and/ or copyright stamp
      footer: {
        style: 'dark',
        links: [
      
       
          {
          //title: 'Documentation',
            items: [
             
              {
                label: 'GitHub',
                href: 'https://github.com/betty-cracker-recipes/BC-Recipes',
            
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