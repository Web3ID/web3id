import { NextraThemeLayoutProps } from "nextra";
import { PageOptsWithRoute } from "@schema/blog";
import BaseLayout from "nextra-theme-docs";
import { ReactNode } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const BlogLayout = dynamic(() => import("./blog").then((mod) => mod.default), {
  ssr: true,
});
const DocsLayout = dynamic(() => import("./docs").then((mod) => mod.default), {
  ssr: true,
});

export default function Layout({
  children,
  ...context
}: NextraThemeLayoutProps) {
  return (
    <BaseLayout {...context}>
      <Main page={context.pageOpts as PageOptsWithRoute}>{children}</Main>
    </BaseLayout>
  );
}

function Main({ page, children }: { page: PageOptsWithRoute; children: ReactNode }) {
  const router = useRouter();
  // Use pathname for route detection since page.route is not available in Nextra 3 PageOpts
  const route = router.pathname;
  
  if (route.startsWith("/blog/tags")) return <>{children}</>;

  if (route.startsWith("/blog/")) {
    return <BlogLayout page={page}>{children}</BlogLayout>;
  }

  if (route.startsWith("/docs")) {
    return <DocsLayout page={page}>{children}</DocsLayout>;
  }

  return <>{children}</>;
}
