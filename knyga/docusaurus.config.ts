module.exports = {
  title: "Sistema po žmogaus",
  tagline: "Knyga apie sistemų aiškumą ir architektūrą",
  url: "https://admin.lt",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Admin-LT",
  projectName: "clearsystems",

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/Admin-LT/clearsystems/edit/main/knyga",
          routeBasePath: "docs",
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
          breadcrumbs: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Sistema po žmogaus",
      hideOnScroll: false,
      logo: {
        alt: "Knygos logotipas",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "/docs",
          label: "Knyga",
          position: "left",
        },
        {
          href: "https://github.com/Admin-LT/clearsystems",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      links: [],
      copyright: `© ${new Date().getFullYear()} Sistema po žmogaus`,
    },
  },
};
