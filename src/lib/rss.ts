import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { articlePath, blogFeedUi } from "@/data/blog";
import { pathFor } from "@/data/site";
import type { Locale } from "@/data/home";

export async function createBlogFeed(locale: Locale) {
  const feed = blogFeedUi[locale];
  const articles = (await getCollection("blog", ({ data }) => data.locale === locale))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: feed.title,
    description: feed.description,
    site: "https://aaklegacy.com",
    trailingSlash: true,
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.pubDate,
      link: articlePath(locale, article.data.slug),
      categories: article.data.tags,
      author: article.data.author
    })),
    customData: `<language>${feed.language}</language><atom:link href="https://aaklegacy.com${pathFor(locale, "blog")}rss.xml" rel="self" type="application/rss+xml" xmlns:atom="http://www.w3.org/2005/Atom" />`
  });
}
