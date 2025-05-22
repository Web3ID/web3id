import { FooterCategory } from "@components/Footer";
import type { AuthorData } from "@schema/blog";
import type { AuthorLearnData } from "@schema/learn";

export const isProduction = process.env.NODE_ENV === "production";
export const API_ENDPOINT = isProduction
  ? "https://www.web30.my.id"
  : "http://127.0.0.1:3001";
export const CDN_ENDPOINT = "https://cdn.discordapp.com";

export const footer: FooterCategory[] = [
  {
    title: "Product",
    items: [
      {
        label: "Blog",
        href: "/blog/",
      },
      {
        label: "Docs",
        href: "/docs/",
      },
      {
        label: "Learn",
        href: "/learn/",
      },
    ],
  },
  {
    title: "Support",
    items: [
      {
        label: "GitHub",
        href: "https://github.com/Web3ID",
        newWindow: true,
      },
      {
        label: "Twitter",
        href: "https://twitter.com/Web3IDN",
        newWindow: true,
      },
      {
        label: "Patreon",
        href: "https://www.patreon.com/Web3ID",
        newWindow: true,
      },
    ],
  },
  {
    title: "Community",
    items: [
      {
        label: "BlockdevID",
        href: "https://blockdev.id/",
        newWindow: true,
      },
      {
        label: "CoindeskID",
        href: "https://www.coindesk.id/",
        newWindow: true,
      },
      {
        label: "Coinvestasi",
        href: "https://coinvestasi.com/",
        newWindow: true,
      },
      {
        label: "AirdropFinder",
        href: "https://www.airdropfinder.com/",
        newWindow: true,
      },
      {
        label: "Cryptoiz",
        href: "https://cryptoizresearch.com/",
        newWindow: true,
      },
    ],
  },
  {
    title: "Others",
    items: [
      {
        label: "About",
        href: "/about/",
      },
      {
        label: "Privacy",
        href: "/privacy/",
      },
      {
        label: "Terms",
        href: "/terms/",
      },
    ],
  },
];

/**
 * a list of blog file names
 */
export const blogRecommendations = [
  "welcome-to-web3id",
  "apa-itu-web3",
  "apa-itu-nft",
  "apa-itu-metaverse",
];

/**
 * a list of learning path file names
 */
export const learnRecommendations = [
  "freshman",
];

export const blogAuthors: Record<string, AuthorData> = {
  abrahamyusuf: {
    name: "Abraham Yusuf",
    title: "Web3 Dev and Blockchain Research @Web3IDN",
    url: "https://github.com/abraham-yusuf",
    image_url: "/blog/abraham-yusuf.png",
  },
  yourname: {
    name: "your name",
    title: "your title",
    url: "https://github.com/your-git",
    image_url: "/blog/your-pics.png",
  },
  others: {
    name: "Others contributors",
    title: "This title",
    url: "https://github.com/this-git",
    image_url: "/blog/this-image.jpg",
  },
};

export const learnAuthors: Record<string, AuthorLearnData> = {
  abrahamyusuf: {
    name: "Abraham Yusuf",
    title: "Web3 Dev and Blockchain Research @Web3IDN",
    url: "https://github.com/abraham-yusuf",
    image_url: "/blog/abraham-yusuf.png",
  },
};
