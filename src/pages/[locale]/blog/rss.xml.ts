import { createBlogFeed } from "@/lib/rss";
import type { Locale } from "@/data/home";

export function getStaticPaths() {
  return ["en", "fr", "pt", "ca"].map((locale) => ({ params: { locale }, props: { locale } }));
}

export async function GET({ props }: { props: { locale: Locale } }) {
  return createBlogFeed(props.locale);
}
