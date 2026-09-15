import type { Locale } from "./home";
import { withBase } from "./site";

export const blogUi: Record<Locale, { read: string; back: string; published: string; updated: string; by: string; rss: string; min: string; latest: string }> = {
  es: { read: "Leer artículo", back: "Volver al blog", published: "Publicado", updated: "Actualizado", by: "Por", rss: "Suscribirse por RSS", min: "min de lectura", latest: "Últimos artículos" },
  en: { read: "Read article", back: "Back to the blog", published: "Published", updated: "Updated", by: "By", rss: "Subscribe via RSS", min: "min read", latest: "Latest articles" },
  fr: { read: "Lire l’article", back: "Retour au blog", published: "Publié", updated: "Mis à jour", by: "Par", rss: "S’abonner par RSS", min: "min de lecture", latest: "Derniers articles" },
  pt: { read: "Ler artigo", back: "Voltar ao blog", published: "Publicado", updated: "Atualizado", by: "Por", rss: "Subscrever por RSS", min: "min de leitura", latest: "Artigos mais recentes" },
  ca: { read: "Llegeix l’article", back: "Torna al blog", published: "Publicat", updated: "Actualitzat", by: "Per", rss: "Subscriu-t’hi per RSS", min: "min de lectura", latest: "Últims articles" }
};

export const featuredArticleSlugs: Record<Locale, [string, string, string]> = {
  es: ["que-es-un-legado-digital", "custodios-y-destinatarios", "recovery-kit-privacidad-responsabilidad"],
  en: ["what-is-a-digital-legacy", "guardians-and-recipients", "recovery-kit-privacy-responsibility"],
  fr: ["quest-ce-quun-heritage-numerique", "gardiens-et-destinataires", "recovery-kit-confidentialite-responsabilite"],
  pt: ["o-que-e-um-legado-digital", "guardioes-e-destinatarios", "recovery-kit-privacidade-responsabilidade"],
  ca: ["que-es-un-llegat-digital", "custodis-i-destinataris", "recovery-kit-privacitat-responsabilitat"]
};

export const blogFeedUi: Record<Locale, { title: string; description: string; language: string }> = {
  es: { title: "AAK Legacy — Blog", description: "Ideas y guías para preparar un legado digital privado, claro y humano.", language: "es" },
  en: { title: "AAK Legacy — Blog", description: "Ideas and guides for preparing a private, clear and human digital legacy.", language: "en" },
  fr: { title: "AAK Legacy — Blog", description: "Idées et guides pour préparer un héritage numérique privé, clair et humain.", language: "fr" },
  pt: { title: "AAK Legacy — Blog", description: "Ideias e guias para preparar um legado digital privado, claro e humano.", language: "pt-PT" },
  ca: { title: "AAK Legacy — Blog", description: "Idees i guies per preparar un llegat digital privat, clar i humà.", language: "ca" }
};

export function articlePath(locale: Locale, slug: string): string {
  const prefix = locale === "es" ? "" : `/${locale}`;
  return withBase(`${prefix}/blog/${slug}/`);
}

export function rssPath(locale: Locale): string {
  const prefix = locale === "es" ? "" : `/${locale}`;
  return withBase(`${prefix}/blog/rss.xml`);
}
