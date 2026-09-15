import { createBlogFeed } from "@/lib/rss";

export async function GET() {
  return createBlogFeed("es");
}
