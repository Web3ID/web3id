import { PageOpts } from "nextra";
import { z } from "zod";
import { learnAuthors } from "../../config";

const authors = Object.keys(learnAuthors) as [string, ...string[]];

export type AuthorLearnData = {
  name: string;
  url?: string;
  title?: string;
  image_url?: string;
};

export type LearnPageOpts = Omit<PageOpts, "frontMatter"> & {
  frontMatter: LearnFrontMatter;
};

export const AuthorEnum = z.enum(authors);

/**
 * Must be able to serizalize
 */
export const LearnFrontMatterSchema = z.object({
  title: z.string({ description: "The title of Learning Courses" }).min(1).max(100),
  description: z
    .string({ description: "Learning Courses" })
    .max(1000)
    .optional(),
  date: z.string({ description: "Release date of the Learning Courses" }).refine(
    (s) => !Number.isNaN(Date.parse(s)),
    (v) => ({ message: `Invalid date time ${v}` })
  ),
  image: z.string({ description: "Learning Courses image" }).optional(),
  tags: z.array(z.string()),
  authors: z
    .union([AuthorEnum, z.array(AuthorEnum)])
    .transform<AuthorLearnData[]>((rel) => {
      return (Array.isArray(rel) ? rel : [rel]).map(
        (author) => learnAuthors[author]
      );
    }),
  theme: z
    .enum(["raw", "default"], {
      description: "Use raw theme to disable layout injection",
    })
    .optional(),
});

export type LearnFrontMatter = z.infer<typeof LearnFrontMatterSchema>;

/**
 * Must be able to serizalize
 */
export const LearnPageSchema = z.object({
  frontMatter: LearnFrontMatterSchema,
  name: z.string(),
  route: z.string(),
  kind: z.literal("MdxPage"),
  meta: z.any().optional(),
  locale: z.string().optional(),
});

export type LearnPage = z.infer<typeof LearnPageSchema>;
