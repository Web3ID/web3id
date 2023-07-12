import { NEXTRA_INTERNAL } from "@utils/mdx";
import { Folder, MdxFile, PageMapItem, PageOpts } from "nextra";

// copied from NextraInternalGlobal
export type NextraInternal = {
  pageMap: PageMapItem[];
  route: string;
  context: Record<
    string,
    {
      Content: React.FC;
      pageOpts: PageOpts;
      themeConfig: any | null;
    }
  >;
  refreshListeners: Record<string, (() => void)[]>;
  Layout: React.FC<any>;
};

declare global {
  var blogPagesMap: MdxFile[] | null;
}

export function getBlogPageMap(): MdxFile[] {
  if (globalThis.blogPagesMap != null) return globalThis.blogPagesMap;

  const internal = (globalThis as any)[NEXTRA_INTERNAL] as NextraInternal;

  const blog = internal.pageMap.find(
    (item) => item.kind === "Folder" && item.route === "/blog"
  );

  const files = (blog as Folder)?.children || [];

  const pageMap = files.filter(
    (item) => item.kind === "MdxPage" && !item.route.startsWith("/blog/tags")
  ) as MdxFile[];

  return (globalThis.blogPagesMap = pageMap);
}
