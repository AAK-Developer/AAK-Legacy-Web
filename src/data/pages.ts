import { homeContent, type Locale } from "./home";
import { alternatesFor, pathFor, type PageKey } from "./site";

export interface PageSection { title: string; text: string; }
export interface ContentPage {
  key: PageKey;
  locale: Locale;
  path: string;
  alternatePaths: Record<Locale, string>;
  title: string;
  description: string;
  eyebrow: string;
  lead: string;
  statement?: string;
  sections: PageSection[];
  tone: "blue" | "cyan" | "green" | "purple" | "pink" | "neutral";
  mode?: "cards" | "faq" | "legal";
}

export const contentPageKeys: PageKey[] = [
  "how", "familiar", "digital", "assets", "emotional", "private",
  "custodians", "recipients", "recovery", "security", "faq",
  "privacy", "terms", "support"
];

const spaceKeyIndex = { familiar: 0, digital: 1, assets: 2, emotional: 3, private: 4 } as const;
const spaceTones = { familiar: "blue", digital: "cyan", assets: "green", emotional: "purple", private: "pink" } as const;

const copy = {
  es: {
    spaceEyebrow: "Un espacio con propósito", featureText: "Pensado para añadir información y contexto con claridad, manteniendo siempre el control sobre quién podrá recibirlo.",
    titles: { custodians: "Confianza para verificar. Nunca para leer.", recipients: "Cada persona recibe solo lo que tú decides.", privacy: "Privacidad comprensible desde el primer día.", terms: "Un marco claro para utilizar AAK Legacy.", support: "Ayuda cuando la necesites." },
    leads: { custodians: "Los custodios ayudan a confirmar cuándo debe continuar el proceso, pero no acceden a tu contenido ni pueden actuar individualmente.", recipients: "Los destinatarios permanecen separados de la verificación y reciben únicamente el contenido que les hayas asignado.", privacy: "Esta página resume cómo AAK Legacy separa identidad, contenido cifrado y decisiones de entrega. El texto legal definitivo se validará antes del lanzamiento.", terms: "Principios esenciales de uso responsable, disponibilidad y límites del servicio. El documento contractual definitivo se validará antes del lanzamiento.", support: "Respuestas claras para el acceso, el Recovery Kit, los custodios y el funcionamiento de AAK Legacy." },
    legalEyebrow: "Información y transparencia",
    privacy: [["Contenido cifrado", "Tu contenido se cifra en el dispositivo antes de almacenarse. AAK Legacy no puede leer tu Legacy mientras lo custodia."], ["Identidad separada", "El acceso con Apple y la identidad interna de AAK se gestionan separadamente del contenido cifrado."], ["Conocimiento mínimo", "El servicio utiliza únicamente la información necesaria para operar la cuenta, la sincronización y los procesos que configures."], ["Tus decisiones", "Tú decides qué guardar, quién participa como custodio y qué recibe cada destinatario."]],
    terms: [["Finalidad del servicio", "AAK Legacy ayuda a organizar y preparar información, instrucciones y recuerdos personales."], ["Responsabilidad de recuperación", "Debes conservar el Recovery Kit fuera de AAK Legacy. Su pérdida junto con la de todos los dispositivos autorizados hace imposible recuperar el contenido."], ["No sustituye documentos legales", "AAK Legacy no sustituye un testamento, un documento notarial ni asesoramiento jurídico profesional."], ["Disponibilidad", "La aplicación se encuentra en desarrollo. Las condiciones definitivas entrarán en vigor con su lanzamiento oficial."]],
    support: [["Acceso y dispositivos", "Ayuda para Sign in with Apple, cambio de dispositivo y acceso a tu cuenta."], ["Recovery Kit", "Orientación para crear, conservar y utilizar de forma segura tu vía externa de recuperación."], ["Custodios y destinatarios", "Explicaciones sobre cada función, la verificación distribuida y la entrega separada."], ["Incidencias", "Antes del lanzamiento se habilitará el canal oficial de soporte de AAK Developer."]]
  },
  en: {
    spaceEyebrow: "A space with purpose", featureText: "Designed to add information and context clearly, while keeping control over who may eventually receive it.",
    titles: { custodians: "Trust to verify. Never to read.", recipients: "Each person receives only what you decide.", privacy: "Privacy you can understand from day one.", terms: "A clear framework for using AAK Legacy.", support: "Help when you need it." },
    leads: { custodians: "Guardians help confirm when the process should continue, but they cannot access your content or act individually.", recipients: "Recipients remain separate from verification and receive only the content you assigned to them.", privacy: "This page summarizes how AAK Legacy separates identity, encrypted content, and delivery decisions. Final legal wording will be validated before launch.", terms: "Essential principles for responsible use, availability, and service limits. The final contractual document will be validated before launch.", support: "Clear answers about access, the Recovery Kit, guardians, and how AAK Legacy works." },
    legalEyebrow: "Information and transparency",
    privacy: [["Encrypted content", "Your content is encrypted on the device before it is stored. AAK Legacy cannot read your Legacy while safeguarding it."], ["Separate identity", "Sign in with Apple and AAK's internal identity are managed separately from encrypted content."], ["Minimum knowledge", "The service uses only the information required to operate the account, synchronization, and processes you configure."], ["Your decisions", "You decide what to keep, who takes part as a guardian, and what each recipient receives."]],
    terms: [["Purpose of the service", "AAK Legacy helps organize and prepare personal information, instructions, and memories."], ["Recovery responsibility", "You must keep the Recovery Kit outside AAK Legacy. Losing it together with every authorized device makes content recovery impossible."], ["Not a legal-document replacement", "AAK Legacy does not replace a will, notarized instrument, or professional legal advice."], ["Availability", "The application is in development. Final terms will take effect upon its official release."]],
    support: [["Access and devices", "Help with Sign in with Apple, changing devices, and accessing your account."], ["Recovery Kit", "Guidance for creating, keeping, and safely using your external recovery path."], ["Guardians and recipients", "Explanations of each role, distributed verification, and separate delivery."], ["Issues", "AAK Developer's official support channel will be enabled before launch."]]
  },
  fr: {
    spaceEyebrow: "Un espace qui a du sens", featureText: "Conçu pour ajouter clairement informations et contexte, tout en gardant le contrôle sur les personnes qui pourront les recevoir.",
    titles: { custodians: "La confiance pour vérifier. Jamais pour lire.", recipients: "Chaque personne ne reçoit que ce que vous décidez.", privacy: "Une confidentialité compréhensible dès le premier jour.", terms: "Un cadre clair pour utiliser AAK Legacy.", support: "De l’aide quand vous en avez besoin." },
    leads: { custodians: "Les gardiens aident à confirmer quand le processus doit continuer, mais ils n’accèdent pas à votre contenu et ne peuvent pas agir seuls.", recipients: "Les destinataires restent séparés de la vérification et ne reçoivent que le contenu que vous leur avez attribué.", privacy: "Cette page résume la séparation entre identité, contenu chiffré et décisions de remise. Le texte juridique définitif sera validé avant le lancement.", terms: "Principes essentiels d’utilisation responsable, de disponibilité et de limites du service. Le document contractuel définitif sera validé avant le lancement.", support: "Des réponses claires sur l’accès, le Recovery Kit, les gardiens et le fonctionnement d’AAK Legacy." },
    legalEyebrow: "Information et transparence",
    privacy: [["Contenu chiffré", "Votre contenu est chiffré sur l’appareil avant son stockage. AAK Legacy ne peut pas lire votre Legacy lorsqu’il le conserve."], ["Identité séparée", "Sign in with Apple et l’identité interne d’AAK sont gérés séparément du contenu chiffré."], ["Connaissance minimale", "Le service n’utilise que les informations nécessaires au compte, à la synchronisation et aux processus configurés."], ["Vos décisions", "Vous décidez quoi conserver, qui participe comme gardien et ce que reçoit chaque destinataire."]],
    terms: [["Finalité du service", "AAK Legacy aide à organiser et préparer informations, instructions et souvenirs personnels."], ["Responsabilité de récupération", "Vous devez conserver le Recovery Kit hors d’AAK Legacy. Sa perte avec tous les appareils autorisés rend la récupération impossible."], ["Ne remplace pas les actes juridiques", "AAK Legacy ne remplace ni testament, ni acte notarié, ni conseil juridique professionnel."], ["Disponibilité", "L’application est en développement. Les conditions définitives prendront effet lors de son lancement officiel."]],
    support: [["Accès et appareils", "Aide pour Sign in with Apple, le changement d’appareil et l’accès au compte."], ["Recovery Kit", "Conseils pour créer, conserver et utiliser en sécurité votre voie externe de récupération."], ["Gardiens et destinataires", "Explications sur chaque rôle, la vérification distribuée et la remise séparée."], ["Incidents", "Le canal officiel d’assistance d’AAK Developer sera activé avant le lancement."]]
  },
  pt: {
    spaceEyebrow: "Um espaço com propósito", featureText: "Concebido para adicionar informação e contexto com clareza, mantendo sempre o controlo sobre quem poderá recebê-los.",
    titles: { custodians: "Confiança para verificar. Nunca para ler.", recipients: "Cada pessoa recebe apenas aquilo que decidir.", privacy: "Privacidade compreensível desde o primeiro dia.", terms: "Um enquadramento claro para utilizar o AAK Legacy.", support: "Ajuda quando precisar." },
    leads: { custodians: "Os guardiões ajudam a confirmar quando o processo deve prosseguir, mas não acedem ao conteúdo nem podem atuar individualmente.", recipients: "Os destinatários permanecem separados da verificação e recebem apenas o conteúdo que lhes atribuiu.", privacy: "Esta página resume como o AAK Legacy separa identidade, conteúdo cifrado e decisões de entrega. O texto jurídico definitivo será validado antes do lançamento.", terms: "Princípios essenciais de utilização responsável, disponibilidade e limites do serviço. O documento contratual definitivo será validado antes do lançamento.", support: "Respostas claras sobre acesso, Recovery Kit, guardiões e funcionamento do AAK Legacy." },
    legalEyebrow: "Informação e transparência",
    privacy: [["Conteúdo cifrado", "O conteúdo é cifrado no dispositivo antes de ser armazenado. O AAK Legacy não pode ler o seu Legacy enquanto o guarda."], ["Identidade separada", "O Sign in with Apple e a identidade interna da AAK são geridos separadamente do conteúdo cifrado."], ["Conhecimento mínimo", "O serviço utiliza apenas a informação necessária para operar a conta, a sincronização e os processos configurados."], ["As suas decisões", "Decide o que guardar, quem participa como guardião e o que recebe cada destinatário."]],
    terms: [["Finalidade do serviço", "O AAK Legacy ajuda a organizar e preparar informação, instruções e memórias pessoais."], ["Responsabilidade de recuperação", "Deve guardar o Recovery Kit fora do AAK Legacy. Perdê-lo juntamente com todos os dispositivos autorizados torna impossível recuperar o conteúdo."], ["Não substitui documentos legais", "O AAK Legacy não substitui um testamento, documento notarial ou aconselhamento jurídico profissional."], ["Disponibilidade", "A aplicação está em desenvolvimento. Os termos definitivos entrarão em vigor com o lançamento oficial."]],
    support: [["Acesso e dispositivos", "Ajuda com Sign in with Apple, mudança de dispositivo e acesso à conta."], ["Recovery Kit", "Orientação para criar, guardar e utilizar com segurança a via externa de recuperação."], ["Guardiões e destinatários", "Explicações sobre cada função, verificação distribuída e entrega separada."], ["Incidentes", "O canal oficial de suporte da AAK Developer será ativado antes do lançamento."]]
  },
  ca: {
    spaceEyebrow: "Un espai amb propòsit", featureText: "Pensat per afegir informació i context amb claredat, mantenint sempre el control sobre qui ho podrà rebre.",
    titles: { custodians: "Confiança per verificar. Mai per llegir.", recipients: "Cada persona rep només allò que tu decideixes.", privacy: "Privacitat comprensible des del primer dia.", terms: "Un marc clar per utilitzar AAK Legacy.", support: "Ajuda quan la necessitis." },
    leads: { custodians: "Els custodis ajuden a confirmar quan el procés ha de continuar, però no accedeixen al contingut ni poden actuar individualment.", recipients: "Els destinataris es mantenen separats de la verificació i reben únicament el contingut que els hagis assignat.", privacy: "Aquesta pàgina resumeix com AAK Legacy separa identitat, contingut xifrat i decisions de lliurament. El text jurídic definitiu es validarà abans del llançament.", terms: "Principis essencials d’ús responsable, disponibilitat i límits del servei. El document contractual definitiu es validarà abans del llançament.", support: "Respostes clares sobre l’accés, el Recovery Kit, els custodis i el funcionament d’AAK Legacy." },
    legalEyebrow: "Informació i transparència",
    privacy: [["Contingut xifrat", "El contingut es xifra al dispositiu abans d’emmagatzemar-se. AAK Legacy no pot llegir el teu Legacy mentre el custodia."], ["Identitat separada", "Sign in with Apple i la identitat interna d’AAK es gestionen separadament del contingut xifrat."], ["Coneixement mínim", "El servei utilitza només la informació necessària per operar el compte, la sincronització i els processos configurats."], ["Les teves decisions", "Tu decideixes què desar, qui participa com a custodi i què rep cada destinatari."]],
    terms: [["Finalitat del servei", "AAK Legacy ajuda a organitzar i preparar informació, instruccions i records personals."], ["Responsabilitat de recuperació", "Has de conservar el Recovery Kit fora d’AAK Legacy. Perdre’l juntament amb tots els dispositius autoritzats fa impossible recuperar el contingut."], ["No substitueix documents legals", "AAK Legacy no substitueix un testament, un document notarial ni assessorament jurídic professional."], ["Disponibilitat", "L’aplicació està en desenvolupament. Les condicions definitives entraran en vigor amb el llançament oficial."]],
    support: [["Accés i dispositius", "Ajuda per a Sign in with Apple, canvi de dispositiu i accés al compte."], ["Recovery Kit", "Orientació per crear, conservar i utilitzar de manera segura la via externa de recuperació."], ["Custodis i destinataris", "Explicacions sobre cada funció, la verificació distribuïda i el lliurament separat."], ["Incidències", "El canal oficial de suport d’AAK Developer s’habilitarà abans del llançament."]]
  }
} as const;

const spaceFeatureTitles: Record<Locale, Record<keyof typeof spaceKeyIndex, string[]>> = {
  es: { familiar: ["Instrucciones esenciales", "Documentos importantes", "Contactos clave", "Mensajes y avisos"], digital: ["Cuentas y servicios", "Suscripciones", "Presencia online", "Contexto para actuar"], assets: ["Bienes y referencias", "Seguros", "Contratos", "Decisiones patrimoniales"], emotional: ["Mensajes", "Fotografías", "Audio", "Vídeo"], private: ["Contenido sensible", "Asignación individual", "Acceso restringido", "Máxima discreción"] },
  en: { familiar: ["Essential instructions", "Important documents", "Key contacts", "Messages and notices"], digital: ["Accounts and services", "Subscriptions", "Online presence", "Context for action"], assets: ["Assets and references", "Insurance", "Contracts", "Financial decisions"], emotional: ["Messages", "Photographs", "Audio", "Video"], private: ["Sensitive content", "Individual assignment", "Restricted access", "Maximum discretion"] },
  fr: { familiar: ["Instructions essentielles", "Documents importants", "Contacts clés", "Messages et avis"], digital: ["Comptes et services", "Abonnements", "Présence en ligne", "Contexte pour agir"], assets: ["Biens et références", "Assurances", "Contrats", "Décisions patrimoniales"], emotional: ["Messages", "Photographies", "Audio", "Vidéo"], private: ["Contenu sensible", "Attribution individuelle", "Accès restreint", "Discrétion maximale"] },
  pt: { familiar: ["Instruções essenciais", "Documentos importantes", "Contactos-chave", "Mensagens e avisos"], digital: ["Contas e serviços", "Subscrições", "Presença online", "Contexto para agir"], assets: ["Bens e referências", "Seguros", "Contratos", "Decisões patrimoniais"], emotional: ["Mensagens", "Fotografias", "Áudio", "Vídeo"], private: ["Conteúdo sensível", "Atribuição individual", "Acesso restrito", "Máxima discrição"] },
  ca: { familiar: ["Instruccions essencials", "Documents importants", "Contactes clau", "Missatges i avisos"], digital: ["Comptes i serveis", "Subscripcions", "Presència en línia", "Context per actuar"], assets: ["Béns i referències", "Assegurances", "Contractes", "Decisions patrimonials"], emotional: ["Missatges", "Fotografies", "Àudio", "Vídeo"], private: ["Contingut sensible", "Assignació individual", "Accés restringit", "Màxima discreció"] }
};

export function getContentPage(locale: Locale, key: PageKey): ContentPage {
  const home = homeContent[locale];
  const local = copy[locale];
  let title = "";
  let lead = "";
  let eyebrow = home.nav.how;
  let statement: string | undefined;
  let sections: PageSection[] = [];
  let tone: ContentPage["tone"] = "blue";
  let mode: ContentPage["mode"] = "cards";

  if (key === "how") {
    title = home.how.title; lead = home.how.intro; eyebrow = home.how.kicker;
    sections = home.how.steps.map((item) => ({ title: item.title, text: item.text }));
  } else if (key in spaceKeyIndex) {
    const spaceKey = key as keyof typeof spaceKeyIndex;
    const item = home.spaces.items[spaceKeyIndex[spaceKey]];
    title = item.title; lead = item.text; eyebrow = local.spaceEyebrow; tone = spaceTones[spaceKey];
    sections = spaceFeatureTitles[locale][spaceKey].map((feature) => ({ title: feature, text: local.featureText }));
  } else if (key === "custodians") {
    title = local.titles.custodians; lead = local.leads.custodians; eyebrow = home.people.guardianTitle;
    sections = home.people.guardianPoints.map((point) => ({ title: point, text: home.people.guardianText }));
    statement = home.people.note;
  } else if (key === "recipients") {
    title = local.titles.recipients; lead = local.leads.recipients; eyebrow = home.people.recipientTitle; tone = "cyan";
    sections = home.people.recipientPoints.map((point) => ({ title: point, text: home.people.recipientText }));
    statement = home.people.note;
  } else if (key === "recovery") {
    title = home.recovery.title; lead = home.recovery.text; eyebrow = home.recovery.kicker; tone = "green";
    sections = home.recovery.points.map((point) => ({ title: point, text: home.recovery.cardSubtitle }));
    statement = home.recovery.warning;
  } else if (key === "security") {
    title = home.security.title; lead = home.security.text; eyebrow = home.security.kicker;
    sections = home.security.items; statement = home.security.statement;
  } else if (key === "faq") {
    title = home.faq.title; lead = home.description; eyebrow = home.faq.kicker; mode = "faq";
    sections = home.faq.items.map((item) => ({ title: item.question, text: item.answer }));
  } else if (key === "privacy" || key === "terms" || key === "support") {
    title = local.titles[key]; lead = local.leads[key]; eyebrow = local.legalEyebrow; tone = "neutral"; mode = "legal";
    sections = local[key].map(([sectionTitle, text]) => ({ title: sectionTitle, text }));
  } else {
    throw new Error(`Unsupported content page: ${key}`);
  }

  return {
    key, locale, path: pathFor(locale, key), alternatePaths: alternatesFor(key),
    title, description: `${title} — AAK Legacy`, eyebrow, lead, statement, sections, tone, mode
  };
}
