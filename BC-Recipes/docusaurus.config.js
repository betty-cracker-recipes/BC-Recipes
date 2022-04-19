// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

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
  projectName: 'BC-Recipes', //Repo name.
  
  
  presets: [
    [
      'classic',
      ({
        docs: {sidebarPath: require.resolve('./sidebars.js'), editUrl: 'https://github.com/betty-cracker-recipes/BC-Recipes'}, // links side bar to docs (aka recipes) tab
        blog: {showReadingTime: true, editUrl: 'https://github.com/betty-cracker-recipes/BC-Recipes'},  
        theme: {customCss: require.resolve('./src/css/custom.css')}, // applies custom css to entire site
      }),
    ],
  ],

  themeConfig:
    (
      {
      navbar: {
        title: 'Home', // Home Tab Label
        logo: {alt: 'My Site Logo', src: 'img/chef-2.png'}, // Home Tab Icon
        // NAV BAR ITEMS
        items: [
          // Recipes Tab
          {type: 'doc', docId: 'intro', position: 'left', label: 'Recipes'},

          // Gallery Tab
          {to: '/gallery', label: 'Gallery', position: 'left'},

          // Blog Tab (if the line below is uncommented then it'll display the content from the blog md section)
          //{to: '/blog', label: 'Blog', position: 'left'},

          //Git Repo
          {href: 'https://github.com/betty-cracker-recipes/BC-Recipes', label: 'GitHub', position: 'left'},
        ],
      },

      // SEARCH BAR - NAV BAR
      // search only api key, different from one used in .env
      // configuration for the nav bar is in the config.json file in the general BC Recipes folder
      algolia: {
          apiKey:'095d0154d0a88751c86fdf134f5f5775', indexName:'bc', appId:'33MRM77352', 
      },

      // FOOTER ITEMS: I removed the footer links to make it look cleaner but they can be uncommented here.
      footer: {
        style: 'dark', 
     /* links: [
       
          {
            title: 'Documentation',
            items: [
              {label: 'GitHub', href: 'https://github.com/betty-cracker-recipes/BC-Recipes', display:'flex'},
            ],
          },
           {
            title: 'Communications',
            items: [
              {label: 'Contact Us', to: 'mailto:Betty.Cracker.Recipes@gmail.com', position: 'flex'},
              {label: 'Subscribe', to: 'https://github.us14.list-manage.com/subscribe/post?u=1b3debc5f2913fafd34b5b7df&id=9f9be4559b', display:'flex'},            
            ],
          },
        ], */
        copyright: `Copyright © ${new Date().getFullYear()} Betty Cracker Recipes.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
