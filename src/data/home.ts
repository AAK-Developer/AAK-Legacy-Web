import { ca, fr, pt } from "./home-extra";

export type Locale = "es" | "en" | "fr" | "pt" | "ca";

export interface HomeContent {
  locale: Locale;
  canonicalPath: string;
  title: string;
  description: string;
  nav: {
    how: string;
    spaces: string;
    people: string;
    security: string;
    blog: string;
    availability: string;
    menu: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    primary: string;
    secondary: string;
    visualLabel: string;
    visualTitle: string;
    visualNote: string;
  };
  trust: string[];
  purpose: {
    kicker: string;
    title: string;
    text: string;
    quote: string;
  };
  how: {
    kicker: string;
    title: string;
    intro: string;
    steps: Array<{ number: string; title: string; text: string }>;
  };
  spaces: {
    kicker: string;
    title: string;
    intro: string;
    items: Array<{ number: string; title: string; text: string; details?: string[] }>;
  };
  people: {
    kicker: string;
    title: string;
    intro: string;
    guardianTitle: string;
    guardianText: string;
    guardianPoints: string[];
    recipientTitle: string;
    recipientText: string;
    recipientPoints: string[];
    note: string;
  };
  recovery: {
    kicker: string;
    title: string;
    text: string;
    cardTitle: string;
    cardSubtitle: string;
    points: string[];
    warning: string;
  };
  security: {
    kicker: string;
    title: string;
    statement: string;
    text: string;
    items: Array<{ title: string; text: string }>;
  };
  faq: {
    kicker: string;
    title: string;
    items: Array<{ question: string; answer: string }>;
  };
  blog: {
    kicker: string;
    title: string;
    intro: string;
    soon: string;
    posts: Array<{ category: string; title: string; summary: string }>;
  };
  cta: {
    label: string;
    title: string;
    text: string;
    offerKicker: string;
    offerTitle: string;
    offerText: string;
    formTitle: string;
    emailLabel: string;
    emailPlaceholder: string;
    consentPrefix: string;
    privacyLabel: string;
    button: string;
    note: string;
    previewNote: string;
    previewSuccess: string;
    success: string;
    error: string;
  };
  footer: {
    claim: string;
    product: string;
    resources: string;
    legal: string;
    links: string[];
    transition: string;
    rights: string;
  };
}

const es: HomeContent = {
  locale: "es",
  canonicalPath: "/",
  title: "AAK Legacy — Protege y prepara lo que importa",
  description:
    "Organiza documentos, instrucciones, recuerdos y decisiones en un Legacy cifrado, preparado para las personas que tú elijas.",
  nav: {
    how: "Cómo funciona",
    spaces: "Los 5 espacios",
    people: "Personas",
    security: "Seguridad",
    blog: "Blog",
    availability: "Disponibilidad",
    menu: "Abrir navegación"
  },
  hero: {
    eyebrow: "Tu legado, preparado con calma",
    title: "Lo importante no debería quedarse sin explicación.",
    lead:
      "AAK Legacy te ayuda a organizar documentos, instrucciones, recuerdos y decisiones; protegerlos con cifrado en tu dispositivo y dejarlos preparados para las personas que tú elijas.",
    primary: "Descubrir cómo funciona",
    secondary: "Explorar los 5 espacios",
    visualLabel: "Un lugar para cada cosa",
    visualTitle: "Tu Legacy",
    visualNote: "Cinco espacios. Una sola visión. Todo bajo tu control."
  },
  trust: [
    "El contenido nace cifrado",
    "AAK no puede leer tu Legacy",
    "Ningún custodio decide solo",
    "Tú eliges cada destinatario"
  ],
  purpose: {
    kicker: "Mucho más que guardar archivos",
    title: "Dejar orden también es cuidar.",
    text:
      "Hay cosas que solo tú sabes dónde están, por qué importan y qué debería hacerse con ellas. AAK Legacy reúne ese contexto para que no dependa de una conversación pendiente o de una carpeta imposible de entender.",
    quote: "Prepararlo hoy es dar claridad mañana."
  },
  how: {
    kicker: "Cómo funciona",
    title: "Diseñado para avanzar paso a paso.",
    intro:
      "La seguridad forma parte del recorrido desde el primer contenido, sin obligarte a entender la tecnología que lo protege.",
    steps: [
      {
        number: "01",
        title: "Accede con Apple",
        text: "Tu identidad de cuenta permanece separada de aquello que decides guardar."
      },
      {
        number: "02",
        title: "Prepara tu Recovery Kit",
        text: "Antes de guardar el primer contenido real, la app te guía para crear tu vía personal de recuperación."
      },
      {
        number: "03",
        title: "Organiza tu Legacy",
        text: "Añade cada documento, instrucción o recuerdo al espacio que le corresponde."
      },
      {
        number: "04",
        title: "Decide quién participa",
        text: "Elige custodios para verificar y destinatarios para recibir únicamente lo que les hayas asignado."
      }
    ]
  },
  spaces: {
    kicker: "Los 5 espacios",
    title: "Cada cosa en su sitio.",
    intro:
      "Una estructura sencilla para ordenar lo práctico, lo digital, lo patrimonial, lo emocional y aquello que debe permanecer especialmente reservado.",
    items: [
      {
        number: "01",
        title: "Familiar",
        text: "La información que ayuda a tu familia a entender qué hacer y con quién hablar.",
        details: [
          "Instrucciones esenciales",
          "Documentos importantes",
          "Contactos clave",
          "Mensajes y avisos"
        ]
      },
      {
        number: "02",
        title: "Vida Digital",
        text: "Cuentas, servicios, suscripciones y contexto sobre la vida que también existe online."
      },
      {
        number: "03",
        title: "Patrimonio",
        text: "Referencias sobre bienes, seguros, contratos y decisiones que conviene dejar localizadas."
      },
      {
        number: "04",
        title: "Legado Emocional",
        text: "Mensajes, fotografías, audio y vídeo para conservar algo más que información."
      },
      {
        number: "05",
        title: "Privado",
        text: "Contenido especialmente sensible, reservado solo para las personas que tú determines."
      }
    ]
  },
  people: {
    kicker: "Personas y decisiones",
    title: "Custodiar no es recibir.",
    intro:
      "AAK Legacy separa dos responsabilidades que a menudo se confunden. Así, verificar un proceso no da acceso al contenido.",
    guardianTitle: "Custodios",
    guardianText: "Personas de confianza que ayudan a verificar cuándo el proceso debe continuar.",
    guardianPoints: [
      "No pueden leer tu Legacy",
      "Ninguno puede decidir por sí solo",
      "Pueden completar su función desde la web segura"
    ],
    recipientTitle: "Destinatarios",
    recipientText: "Personas que recibirán únicamente aquello que tú les hayas asignado.",
    recipientPoints: [
      "Cada contenido tiene su destinatario",
      "No reciben el resto de tu Legacy",
      "En el modo estándar no necesitan saberlo mientras estás en vida"
    ],
    note: "La verificación y la entrega permanecen separadas por diseño."
  },
  recovery: {
    kicker: "Recovery Kit",
    title: "Tu privacidad también exige una salida segura.",
    text:
      "El Recovery Kit es la vía externa que te permite recuperar tu Legacy si cambias o pierdes tus dispositivos. Se crea en tu dispositivo y debe conservarse fuera de AAK Legacy.",
    cardTitle: "Recovery Kit",
    cardSubtitle: "Personal · Externo · Imprescindible",
    points: [
      "Secreto aleatorio de 256 bits",
      "QR principal y texto de respaldo",
      "Preparado para recuperación completamente offline",
      "AAK Legacy no conserva una copia utilizable"
    ],
    warning:
      "Si pierdes todos tus dispositivos autorizados y también el Recovery Kit, ni AAK, ni Apple ni soporte pueden recuperar el contenido."
  },
  security: {
    kicker: "Seguridad desde el diseño",
    title: "Tu privacidad no depende de una promesa.",
    statement:
      "Zero Knowledge. Cifrado en tu dispositivo. AAK Legacy no puede leer tu Legacy mientras lo custodia.",
    text:
      "El contenido se protege antes de almacenarse. La identidad, el contenido y las decisiones de entrega se mantienen separados para reducir lo que cada parte puede conocer o controlar.",
    items: [
      {
        title: "Cifrado desde el origen",
        text: "El primer dato persistido ya nace cifrado en el dispositivo."
      },
      {
        title: "Claves bajo control del dispositivo",
        text: "El material sensible se protege mediante las capacidades de seguridad de iOS y no se envía junto al contenido cifrado."
      },
      {
        title: "Infraestructura sin el original legible",
        text: "CloudKit y los servicios AAK conservan copias y paquetes ya cifrados; la protección no depende únicamente del servidor."
      },
      {
        title: "Decisión distribuida",
        text: "La activación no depende de una sola persona y un custodio aislado no puede forzarla."
      }
    ]
  },
  faq: {
    kicker: "Preguntas frecuentes",
    title: "Lo esencial, explicado con claridad.",
    items: [
      {
        question: "¿AAK Legacy puede leer lo que guardo?",
        answer:
          "No. El contenido se cifra en tu dispositivo antes de almacenarse. AAK Legacy puede gestionar la identidad de tu cuenta, pero no leer el contenido de tu Legacy mientras lo custodia."
      },
      {
        question: "¿Un custodio puede acceder a mis documentos?",
        answer:
          "No. Su función es participar en la verificación. No recibe acceso al contenido y tampoco puede decidir por sí solo."
      },
      {
        question: "¿Mis destinatarios tienen que instalar la app?",
        answer:
          "En el modo estándar, no necesitan instalar la app, crear una cuenta ni conocer su designación mientras estás en vida."
      },
      {
        question: "¿Qué ocurre si pierdo el Recovery Kit?",
        answer:
          "Tus dispositivos autorizados pueden seguir dando acceso. Pero si pierdes todos esos dispositivos y también el kit, el contenido será criptográficamente irrecuperable."
      },
      {
        question: "¿Sustituye a un testamento?",
        answer:
          "No. AAK Legacy ayuda a organizar información, instrucciones y recuerdos, pero no sustituye un testamento, un documento notarial ni asesoramiento jurídico."
      }
    ]
  },
  blog: {
    kicker: "Guías y conocimiento",
    title: "El blog de AAK Legacy",
    intro:
      "Contenido práctico para ordenar tu legado digital, comprender la seguridad y tomar decisiones con tiempo.",
    soon: "Próximamente",
    posts: [
      {
        category: "Organización y legado",
        title: "Qué es un legado digital y por qué conviene prepararlo",
        summary: "Una forma clara de entender qué información merece contexto y continuidad."
      },
      {
        category: "Guías",
        title: "Custodios y destinatarios: dos funciones diferentes",
        summary: "Quién verifica, quién recibe y por qué ambas responsabilidades están separadas."
      },
      {
        category: "Seguridad y privacidad",
        title: "Recovery Kit: privacidad también significa responsabilidad",
        summary: "Qué protege, por qué AAK no guarda una copia y cómo debe conservarse."
      }
    ]
  },
  cta: {
    label: "Lista privada",
    title: "Llega antes. Conserva la ventaja para siempre.",
    text: "Reserva tu plaza en AAK Legacy y sé de los primeros en conocer el lanzamiento para iPhone.",
    offerKicker: "FOUNDING 100",
    offerTitle: "25 % de descuento de por vida",
    offerText: "Para los 100 primeros miembros que activen AAK Legacy.",
    formTitle: "Reserva tu plaza",
    emailLabel: "Correo electrónico",
    emailPlaceholder: "tu@email.com",
    consentPrefix: "Acepto recibir comunicaciones sobre AAK Legacy y he leído la",
    privacyLabel: "política de privacidad",
    button: "Reservar mi plaza",
    note: "Sin tarjeta. Sin spam. Baja cuando quieras.",
    previewNote: "Vista previa: todavía no se guardará tu email.",
    previewSuccess: "La experiencia funciona. En esta preview no hemos guardado tu email.",
    success: "Tu plaza está reservada. Te avisaremos cuando AAK Legacy esté listo.",
    error: "No hemos podido reservar tu plaza. Inténtalo de nuevo en unos minutos."
  },
  footer: {
    claim: "Protege lo que importa. Déjalo preparado.",
    product: "Producto",
    resources: "Recursos",
    legal: "Legal",
    links: ["Cómo funciona", "Los 5 espacios", "Seguridad", "Blog", "Privacidad", "Términos", "Soporte"],
    transition: "Serenia Legacy ahora es AAK Legacy.",
    rights: "AAK Developer · Todos los derechos reservados."
  }
};

const en: HomeContent = {
  locale: "en",
  canonicalPath: "/en/",
  title: "AAK Legacy — Protect and prepare what matters",
  description:
    "Organize documents, instructions, memories, and decisions in an encrypted Legacy, ready for the people you choose.",
  nav: {
    how: "How it works",
    spaces: "The 5 spaces",
    people: "People",
    security: "Security",
    blog: "Blog",
    availability: "Availability",
    menu: "Open navigation"
  },
  hero: {
    eyebrow: "Your legacy, calmly prepared",
    title: "What matters should never be left unexplained.",
    lead:
      "AAK Legacy helps you organize documents, instructions, memories, and decisions; protect them with encryption on your device, and keep them ready for the people you choose.",
    primary: "See how it works",
    secondary: "Explore the 5 spaces",
    visualLabel: "A place for everything",
    visualTitle: "Your Legacy",
    visualNote: "Five spaces. One clear view. Everything under your control."
  },
  trust: [
    "Content is encrypted from the start",
    "AAK cannot read your Legacy",
    "No guardian decides alone",
    "You choose every recipient"
  ],
  purpose: {
    kicker: "More than storing files",
    title: "Leaving things in order is also a way of caring.",
    text:
      "Some things only you know: where they are, why they matter, and what should happen to them. AAK Legacy brings that context together so it does not depend on an unfinished conversation or an impossible folder to understand.",
    quote: "Preparing it today means giving clarity tomorrow."
  },
  how: {
    kicker: "How it works",
    title: "Designed to move one clear step at a time.",
    intro:
      "Security is part of the journey from the first item, without requiring you to understand the technology protecting it.",
    steps: [
      {
        number: "01",
        title: "Sign in with Apple",
        text: "Your account identity remains separate from what you choose to keep."
      },
      {
        number: "02",
        title: "Prepare your Recovery Kit",
        text: "Before the first real item is saved, the app guides you through creating your personal recovery path."
      },
      {
        number: "03",
        title: "Organize your Legacy",
        text: "Place every document, instruction, or memory in the space where it belongs."
      },
      {
        number: "04",
        title: "Choose who takes part",
        text: "Select guardians to verify and recipients to receive only what you have assigned to them."
      }
    ]
  },
  spaces: {
    kicker: "The 5 spaces",
    title: "Everything in its place.",
    intro:
      "A simple structure for practical, digital, financial, emotional, and especially private parts of your life.",
    items: [
      {
        number: "01",
        title: "Family",
        text: "The information that helps your family understand what to do and who to contact.",
        details: ["Essential instructions", "Important documents", "Key contacts", "Messages and notices"]
      },
      {
        number: "02",
        title: "Digital Life",
        text: "Accounts, services, subscriptions, and context about the life that also exists online."
      },
      {
        number: "03",
        title: "Assets",
        text: "References to property, insurance, contracts, and decisions worth leaving easy to locate."
      },
      {
        number: "04",
        title: "Emotional Legacy",
        text: "Messages, photographs, audio, and video that preserve more than information."
      },
      {
        number: "05",
        title: "Private",
        text: "Especially sensitive content, reserved only for the people you decide."
      }
    ]
  },
  people: {
    kicker: "People and decisions",
    title: "Guarding is not receiving.",
    intro:
      "AAK Legacy separates two responsibilities that are often confused. Verifying a process never grants access to the content.",
    guardianTitle: "Guardians",
    guardianText: "Trusted people who help verify when the process should continue.",
    guardianPoints: [
      "They cannot read your Legacy",
      "No one can decide on their own",
      "They can complete their role through the secure web"
    ],
    recipientTitle: "Recipients",
    recipientText: "People who will receive only what you have assigned to them.",
    recipientPoints: [
      "Each item has its recipient",
      "They do not receive the rest of your Legacy",
      "In standard mode, they do not need to know during your lifetime"
    ],
    note: "Verification and delivery remain separate by design."
  },
  recovery: {
    kicker: "Recovery Kit",
    title: "Privacy also needs a safe way back in.",
    text:
      "The Recovery Kit is the external path that lets you recover your Legacy if your devices change or are lost. It is created on your device and must be kept outside AAK Legacy.",
    cardTitle: "Recovery Kit",
    cardSubtitle: "Personal · External · Essential",
    points: [
      "Random 256-bit secret",
      "Primary QR and text fallback",
      "Prepared for fully offline recovery",
      "AAK Legacy does not keep a usable copy"
    ],
    warning:
      "If you lose every authorized device and the Recovery Kit, neither AAK, Apple, nor support can recover the content."
  },
  security: {
    kicker: "Security by design",
    title: "Your privacy does not depend on a promise.",
    statement:
      "Zero Knowledge. Encrypted on your device. AAK Legacy cannot read your Legacy while it safeguards it.",
    text:
      "Content is protected before it is stored. Identity, content, and delivery decisions stay separate to reduce what any party can know or control.",
    items: [
      {
        title: "Encrypted at the source",
        text: "The first persisted data is already encrypted on the device."
      },
      {
        title: "Keys remain under device control",
        text: "Sensitive material is protected using iOS security capabilities and is not sent alongside encrypted content."
      },
      {
        title: "Infrastructure without the readable original",
        text: "CloudKit and AAK services keep already-encrypted copies and packages; protection does not depend on the server alone."
      },
      {
        title: "Distributed decisions",
        text: "Activation does not depend on one person, and an individual guardian cannot force it."
      }
    ]
  },
  faq: {
    kicker: "Frequently asked questions",
    title: "The essentials, clearly explained.",
    items: [
      {
        question: "Can AAK Legacy read what I store?",
        answer:
          "No. Content is encrypted on your device before it is stored. AAK Legacy can manage your account identity, but cannot read the content of your Legacy while safeguarding it."
      },
      {
        question: "Can a guardian access my documents?",
        answer:
          "No. Their role is to take part in verification. They do not receive access to the content and cannot decide alone."
      },
      {
        question: "Do recipients need to install the app?",
        answer:
          "In standard mode, they do not need to install the app, create an account, or know they have been selected during your lifetime."
      },
      {
        question: "What happens if I lose my Recovery Kit?",
        answer:
          "Your authorized devices can still provide access. But if you lose every authorized device and the kit, the content becomes cryptographically unrecoverable."
      },
      {
        question: "Does it replace a will?",
        answer:
          "No. AAK Legacy helps organize information, instructions, and memories, but does not replace a will, a notarized document, or legal advice."
      }
    ]
  },
  blog: {
    kicker: "Guides and knowledge",
    title: "The AAK Legacy blog",
    intro:
      "Practical content to organize your digital legacy, understand its security, and make decisions in good time.",
    soon: "Coming soon",
    posts: [
      {
        category: "Organization and legacy",
        title: "What a digital legacy is — and why it is worth preparing",
        summary: "A clear way to understand which information deserves context and continuity."
      },
      {
        category: "Guides",
        title: "Guardians and recipients: two different roles",
        summary: "Who verifies, who receives, and why those responsibilities remain separate."
      },
      {
        category: "Security and privacy",
        title: "Recovery Kit: privacy also means responsibility",
        summary: "What it protects, why AAK keeps no copy, and how it should be stored."
      }
    ]
  },
  cta: {
    label: "Private list",
    title: "Join early. Keep the advantage for life.",
    text: "Reserve your place in AAK Legacy and be among the first to hear about the iPhone launch.",
    offerKicker: "FOUNDING 100",
    offerTitle: "25% off for life",
    offerText: "For the first 100 members who activate AAK Legacy.",
    formTitle: "Reserve your place",
    emailLabel: "Email address",
    emailPlaceholder: "you@email.com",
    consentPrefix: "I agree to receive communications about AAK Legacy and have read the",
    privacyLabel: "privacy policy",
    button: "Reserve my place",
    note: "No card. No spam. Unsubscribe whenever you wish.",
    previewNote: "Preview: your email will not be stored yet.",
    previewSuccess: "The experience works. Your email was not stored in this preview.",
    success: "Your place is reserved. We will let you know when AAK Legacy is ready.",
    error: "We could not reserve your place. Please try again in a few minutes."
  },
  footer: {
    claim: "Protect what matters. Leave it prepared.",
    product: "Product",
    resources: "Resources",
    legal: "Legal",
    links: ["How it works", "The 5 spaces", "Security", "Blog", "Privacy", "Terms", "Support"],
    transition: "Serenia Legacy is now AAK Legacy.",
    rights: "AAK Developer · All rights reserved."
  }
};

export const homeContent = { es, en, fr, pt, ca } as const;
