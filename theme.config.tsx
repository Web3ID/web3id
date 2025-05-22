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
  head: (
    <>
      <link rel="shortcut icon" href="/img/logo/logo.png" />
    </>
  ),
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
  useNextSeoProps() {
    const { asPath, route } = useRouter();
    const { frontMatter, title } = useConfig();

    const image = frontMatter.image != null && {
      alt: title,
      url: frontMatter.image,
    };

    const description =
      frontMatter.description ??
      "Advancing blockchain education, research, resources and development Web3 Indonesia";

    return {
      canonical: `https://www.web30.my.id${asPath}`,
      titleTemplate: route === "/" ? "%s" : "%s – Web3IDN",
      twitter: {
        handle: '@Web3IDN',
        site: '@Web3IDN',
        cardType: "summary_large_image",
      },
      description: description,
      openGraph: {
        description: description,
        type: "website",
        images: [
          image || {
            url: "/img/web3idn.png",
            alt: "Web3IDN",
          },
        ],
      },
    };
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
    text: "Edit this page on Github →",
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default text-xl">{title}</span>;
      }
      return <>{title}</>;
    },
    toggleButton: true,
  },
  gitTimestamp: ({ timestamp }) => {
    return (
      <p className="text-lg">last updated on {timestamp.toLocaleDateString()}</p>
    );
  },
};

export default config;
