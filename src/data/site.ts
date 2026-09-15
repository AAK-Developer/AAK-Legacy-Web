import type { Locale } from "./home";

export const locales: Locale[] = ["es", "en", "fr", "pt", "ca"];

const buildBase = import.meta.env.BASE_URL === "/" ? "" : import.meta.env.BASE_URL.replace(/\/$/, "");

export function withBase(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (!buildBase || normalized === buildBase || normalized.startsWith(`${buildBase}/`)) return normalized;
  return `${buildBase}${normalized}`;
}

export function assetPath(path: string): string {
  return withBase(path);
}

export type PageKey =
  | "home"
  | "how"
  | "familiar"
  | "digital"
  | "assets"
  | "emotional"
  | "private"
  | "custodians"
  | "recipients"
  | "recovery"
  | "security"
  | "faq"
  | "blog"
  | "privacy"
  | "terms"
  | "support";

export const pagePaths: Record<Locale, Record<PageKey, string>> = {
  es: {
    home: "/", how: "/como-funciona/", familiar: "/espacios/familiar/", digital: "/espacios/vida-digital/", assets: "/espacios/patrimonio/", emotional: "/espacios/legado-emocional/", private: "/espacios/privado/", custodians: "/custodios/", recipients: "/destinatarios/", recovery: "/recovery-kit/", security: "/seguridad/", faq: "/preguntas-frecuentes/", blog: "/blog/", privacy: "/privacidad/", terms: "/terminos/", support: "/soporte/"
  },
  en: {
    home: "/en/", how: "/en/how-it-works/", familiar: "/en/spaces/family/", digital: "/en/spaces/digital-life/", assets: "/en/spaces/assets/", emotional: "/en/spaces/emotional-legacy/", private: "/en/spaces/private/", custodians: "/en/guardians/", recipients: "/en/recipients/", recovery: "/en/recovery-kit/", security: "/en/security/", faq: "/en/frequently-asked-questions/", blog: "/en/blog/", privacy: "/en/privacy/", terms: "/en/terms/", support: "/en/support/"
  },
  fr: {
    home: "/fr/", how: "/fr/comment-ca-marche/", familiar: "/fr/espaces/famille/", digital: "/fr/espaces/vie-numerique/", assets: "/fr/espaces/patrimoine/", emotional: "/fr/espaces/heritage-emotionnel/", private: "/fr/espaces/prive/", custodians: "/fr/gardiens/", recipients: "/fr/destinataires/", recovery: "/fr/recovery-kit/", security: "/fr/securite/", faq: "/fr/questions-frequentes/", blog: "/fr/blog/", privacy: "/fr/confidentialite/", terms: "/fr/conditions/", support: "/fr/assistance/"
  },
  pt: {
    home: "/pt/", how: "/pt/como-funciona/", familiar: "/pt/espacos/familiar/", digital: "/pt/espacos/vida-digital/", assets: "/pt/espacos/patrimonio/", emotional: "/pt/espacos/legado-emocional/", private: "/pt/espacos/privado/", custodians: "/pt/guardioes/", recipients: "/pt/destinatarios/", recovery: "/pt/recovery-kit/", security: "/pt/seguranca/", faq: "/pt/perguntas-frequentes/", blog: "/pt/blog/", privacy: "/pt/privacidade/", terms: "/pt/termos/", support: "/pt/suporte/"
  },
  ca: {
    home: "/ca/", how: "/ca/com-funciona/", familiar: "/ca/espais/familiar/", digital: "/ca/espais/vida-digital/", assets: "/ca/espais/patrimoni/", emotional: "/ca/espais/llegat-emocional/", private: "/ca/espais/privat/", custodians: "/ca/custodis/", recipients: "/ca/destinataris/", recovery: "/ca/recovery-kit/", security: "/ca/seguretat/", faq: "/ca/preguntes-frequents/", blog: "/ca/blog/", privacy: "/ca/privacitat/", terms: "/ca/termes/", support: "/ca/suport/"
  }
};

export const localeCodes: Record<Locale, { short: string; hreflang: string }> = {
  es: { short: "ES", hreflang: "es" },
  en: { short: "EN", hreflang: "en" },
  fr: { short: "FR", hreflang: "fr" },
  pt: { short: "PT", hreflang: "pt-PT" },
  ca: { short: "CA", hreflang: "ca" }
};

export const chromeUi: Record<Locale, { skip: string; home: string; nav: string; mobile: string }> = {
  es: { skip: "Saltar al contenido", home: "AAK Legacy, inicio", nav: "Navegación principal", mobile: "Navegación móvil" },
  en: { skip: "Skip to content", home: "AAK Legacy, home", nav: "Main navigation", mobile: "Mobile navigation" },
  fr: { skip: "Aller au contenu", home: "AAK Legacy, accueil", nav: "Navigation principale", mobile: "Navigation mobile" },
  pt: { skip: "Saltar para o conteúdo", home: "AAK Legacy, início", nav: "Navegação principal", mobile: "Navegação móvel" },
  ca: { skip: "Ves al contingut", home: "AAK Legacy, inici", nav: "Navegació principal", mobile: "Navegació mòbil" }
};

export function pathFor(locale: Locale, key: PageKey): string {
  return withBase(pagePaths[locale][key]);
}

export function alternatesFor(key: PageKey): Record<Locale, string> {
  return Object.fromEntries(locales.map((locale) => [locale, pathFor(locale, key)])) as Record<Locale, string>;
}
