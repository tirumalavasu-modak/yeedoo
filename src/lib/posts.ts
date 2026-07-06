import fs from "fs";
import matter from "gray-matter";
import path from "path";
import yaml from "js-yaml";

export type PostContent = {
  readonly date: string;
  readonly title: string;
  readonly slug: string;
  readonly tags?: string[];
  readonly fullPath: string;
  readonly thumbnail?: string;
  readonly thumbnail_alt?: string;
  readonly author?: string;
};

// Generic content fetcher
export function fetchContent(dirName: string): PostContent[] {
  const contentDirectory = path.join(process.cwd(), `content/${dirName}`);
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(contentDirectory);
  const allPostsData = fileNames
    .filter((it) => it.endsWith(".mdx"))
    .map((fileName) => {
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const matterResult = matter(fileContents, {
        engines: {
          yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
        },
      });
      const matterData = matterResult.data as {
        date: string;
        title: string;
        tags: string[];
        slug: string;
        fullPath: string;
        thumbnail?: string;
        thumbnail_alt?: string;
        author?: string;
      };
      matterData.fullPath = fullPath;

      const slug = fileName.replace(/\.mdx$/, "");

      if (matterData.slug !== slug) {
        throw new Error(
          `slug field not match with the path of its content source: ${slug} vs ${matterData.slug}`
        );
      }

      return matterData;
    });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function countContent(dirName: string, tag?: string): number {
  return fetchContent(dirName).filter(
    (it) => !tag || (it.tags && it.tags.includes(tag))
  ).length;
}

export function listContent(
  dirName: string,
  page: number,
  limit: number,
  tag?: string
): PostContent[] {
  return fetchContent(dirName)
    .filter((it) => !tag || (it.tags && it.tags.includes(tag)))
    .slice((page - 1) * limit, page * limit);
}

// Legacy wrappers for posts
export function fetchPostContent(): PostContent[] {
  return fetchContent("posts");
}

export function countPosts(tag?: string): number {
  return countContent("posts", tag);
}

export function listPostContent(
  page: number,
  limit: number,
  tag?: string
): PostContent[] {
  return listContent("posts", page, limit, tag);
}

