const { readFileSync } = require("fs");

const redirectsFile = readFileSync("redirects.txt", "utf-8")
  .toString()
  .trim()
  .split("\n");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects() {
    const redirects = redirectsFile.map((args) => {
      const [source, destination, permanent] = args.split(" ");

      return {
        source,
        destination,
        permanent: Boolean(permanent),
      };
    });

    for (const redirect of redirects) {
      if (!redirect.source.endsWith("/") && redirect.source.startsWith("/"))
        redirects.push({
          ...redirect,
          source: `${redirect.source}/`,
        });
    }

    return redirects;
  },
};

const withNextra = require("nextra").default({
  theme: "@components/layout",
  themeConfig: "./theme.config.tsx",
  defaultShowCopyCode: true,
});

module.exports = withNextra(nextConfig);
