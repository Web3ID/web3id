/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.web30.my.id",
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: ["/blog/tags/*"],
  additionalSitemaps: [
    'https://www.web30.my.id/sitemap.xml',
    'https://www.web30.my.id/sitemap-0.xml',
  ],
};
