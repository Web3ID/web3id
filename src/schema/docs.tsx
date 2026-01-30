import { PageOpts, FrontMatter } from "nextra";

// Augment PageOpts with route property that exists at runtime
export type PageOptsWithRoute = PageOpts & {
  route: string;
};

export type DocsPageOpts = Omit<PageOptsWithRoute, "frontMatter"> & {
  frontMatter: DocsFrontMatter;
};

export type DocsFrontMatter = FrontMatter & {
  title: string;
  description?: string;
};
