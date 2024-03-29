/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Tor3ion",
  tagline: "Open Source Intelligence",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/ninja-turtle.ico",
  organizationName: "Tor3ion",
  projectName: "t3DOC",
  themeConfig: {
    navbar: {
      title: "Tor3ion",
      logo: {
        alt: "Tor3ion Logo",
        src: "img/ninja-turtle.svg",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Tutorial",
        },
        { to: "/blog", label: "Blog", position: "left" },
        { to: "/api", label: "API", position: "left" },
        {
          href: "https://github.com/Tor3ion",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
            {
              label: "Blog",
              to: "/blog",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "#",
            },
            {
              label: "Discord",
              href: "#",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/Tor3ion",
            },
            {
              label: "Twitter",
              href: "#",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tor3ion`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
