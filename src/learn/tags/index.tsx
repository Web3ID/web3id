import { GetStaticPaths, GetStaticProps } from "next";
import { getStaticTags, getTags } from "../utils/tags";
import { getLearnPageMap } from "../utils/get-page-map";
import { PageMapItem } from "nextra";
import { LearnItem } from "../components/LearnItem";
import { LinkButton } from "@components/mdx";
import { LearnPage, LearnPageSchema } from "../../schema/learn";

//Important: upper case urls are invalid
//We will convert the tag name into lower case to avoid the issue
type Props = {
  pages: LearnPage[];
  tag: string;
};
export default function TagPage({ pages, tag }: Props) {
  return (
    <div className="mx-auto my-16 flex max-w-[1300px] flex-col gap-5">
      <div className="mb-5 flex flex-col gap-5">
        <h1 className="text-center text-3xl font-bold md:text-4xl">{`with「${tag}」tagged path`}</h1>

        <LinkButton href="/learn/tags" link={{ className: "mx-auto" }}>
          All Tags
        </LinkButton>
      </div>
      <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2 lg:grid-cols-3">
        {pages.map((page) => (
          <LearnItem key={page.route} page={page} />
        ))}
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  const tags = getStaticTags(getLearnPageMap());

  return {
    paths: tags.map((v) => ({ params: { tag: v } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = ({ params }) => {
  const tag = params?.tag as string;
  if (tag == null) return { notFound: true };

  const flattenPages = (page: PageMapItem): LearnPage[] => {
    if (page.kind === "Meta") return [];

    if (page.kind === "Folder") {
      return page.children.flatMap(flattenPages);
    }
    const result = LearnPageSchema.safeParse(page);

    if (!result.success) {
      console.error(page.route, result.error.issues);
      return [];
    }

    if (getTags(page).includes(tag)) return [result.data];

    return [];
  };

  return {
    props: {
      tag,
      pages: getLearnPageMap().flatMap(flattenPages),
    },
  };
};
