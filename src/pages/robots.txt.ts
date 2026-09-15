const isPrivatePreview = import.meta.env.PUBLIC_PREVIEW === "1";
const base = import.meta.env.BASE_URL === "/" ? "" : import.meta.env.BASE_URL.replace(/\/$/, "");

export function GET() {
  const body = isPrivatePreview
    ? `User-agent: *\nDisallow: ${base || "/"}/\n`
    : "User-agent: *\nAllow: /\n\nSitemap: https://aaklegacy.com/sitemap-index.xml\n";

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
