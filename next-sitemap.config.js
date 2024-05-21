/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://w3idn.xyz",
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: ["/blog/tags/*"],
  additionalSitemaps: [
    'https://w3idn.xyz/sitemap.xml',
    'https://w3idn.xyz/sitemap-0.xml',
  ],
};
