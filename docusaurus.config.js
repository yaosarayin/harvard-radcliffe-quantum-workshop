/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Harvard Radcliffe Quantum Workshop",
  tagline: "Harvard University & Radcliffe Institute, Juanuary 2021",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/atom.svg",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Harvard Radcliffe Quantum Workshop",
      logo: {
        alt: "Logo",
        src: "img/atom.svg",
      },
      items: [
        {
          to: "workshop/",
          activeBasePath: "workshop",
          label: "Workshop",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://youtube.com",
          label: "Youtube Channel",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Workshop",
          items: [
            {
              label: "Getting Started",
              to: "workshop/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            // {
            //   label: "Stack Overflow",
            //   href: "https://stackoverflow.com/questions/tagged/docusaurus",
            // },
            // {
            //   label: "Discord",
            //   href: "https://discordapp.com/invite/docusaurus",
            // },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Yao Yin.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          path: "workshop",
          routeBasePath: "workshop",
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
