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
  var learnPagesMap: MdxFile[] | null;
}

export function getLearnPageMap(): MdxFile[] {
  if (globalThis.learnPagesMap != null) return globalThis.learnPagesMap;

  const internal = (globalThis as any)[NEXTRA_INTERNAL] as NextraInternal;

  const learn = internal.pageMap.find(
    (item) => item.kind === "Folder" && item.route === "/learn"
  );

  const files = (learn as Folder)?.children || [];

  const pageMap = files.filter(
    (item) => item.kind === "MdxPage" && !item.route.startsWith("/learn/tags")
  ) as MdxFile[];

  return (globalThis.learnPagesMap = pageMap);
}
