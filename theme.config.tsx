import Footer from "@components/Footer";
import LoginButton from "@components/LoginButton";
import Image from "next/image";
import Link from "next/link";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { footer } from "./config";
import { useRouter } from "next/router";
import { ThemeToggle } from "@components/ThemeToggle";
import { SafeLink } from "@components/SafeLink";

const config: Partial<DocsThemeConfig> = {
  components: {
    a: (props) => (
      <SafeLink
        {...props}
        className="text-link underline decoration-from-font [text-underline-position:from-font]"
      />
    ),
  },
  head: () => {
    const { asPath, route } = useRouter();
    const { frontMatter, title } = useConfig();

    const image = frontMatter.image ?? "/img/web3idn.png";
    const description =
      frontMatter.description ??
      "Advancing blockchain education, research, resources and development Web3 Indonesia";
    
    const titleTemplate = route === "/" ? title : `${title} – Web3IDN`;

    return (
      <>
        <link rel="shortcut icon" href="/img/logo/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <meta name="description" content={description} />
        <meta property="og:title" content={titleTemplate} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://w3idn.xyz${asPath}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Web3IDN" />
        <meta name="twitter:creator" content="@Web3IDN" />
        <meta name="twitter:title" content={titleTemplate} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <link rel="canonical" href={`https://w3idn.xyz${asPath}`} />
        <title>{titleTemplate}</title>
      </>
    );
  },
  logo: (
    <div className="flex flex-row items-center justify-center gap-2">
      <Image
        alt="Web3IDN"
        src="/img/logo/logo.png"
        width={32}
        height={32}
        style={{
          borderRadius: "50%",
        }}
      />
      <p className="text-xl tracking-wider">W3IDN</p>
    </div>
  ),
  search: {
    placeholder: "Search",
  },
  docsRepositoryBase: "https://github.com/Web3ID/web3id/blob/master",
  navbar: {
    extraContent: (
      <div className="flex flex-row gap-3">
        <ThemeToggle />
        <Link href="https://w3idn.xyz/" className="hidden md:block">
          <LoginButton />
        </Link>
      </div>
    ),
  },
  footer: {
    component: <Footer categories={footer} />,
  },
  project: {
    link: "https://github.com/Web3ID",
  },
  feedback: {
    content: "have a question? give us feedback →",
  },
  toc: {
    title: "Table of contents",
    extraContent: <></>,
  },
  editLink: {
    content: "Edit this page on Github →",
  },
  sidebar: {
    toggleButton: true,
  },
  gitTimestamp: ({ timestamp }) => {
    return (
      <p className="text-lg">last updated on {timestamp.toLocaleDateString()}</p>
    );
  },
};

export default config;
