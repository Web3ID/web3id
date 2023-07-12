/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://w3b.my.id",
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: ["/blog/tags/*"],
  additionalSitemaps: [
    'https://w3b.my.id/sitemap.xml',
    'https://w3b.my.id/sitemap-0.xml',
  ],
};
