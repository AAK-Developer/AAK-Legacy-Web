import type { Locale } from "./home";

export interface SecurityDetail {
  title: string;
  text: string;
}

export interface SecurityAssurance {
  eyebrow: string;
  title: string;
  text: string;
  points: string[];
  linkLabel: string;
}

export interface SecuritySource {
  label: string;
  url: string;
}

export interface SecurityPageCopy {
  title: string;
  lead: string;
  statement: string;
  sections: SecurityDetail[];
  assurance: SecurityAssurance;
  sourcesTitle: string;
  sourcesIntro: string;
  sources: SecuritySource[];
}

const sourceUrls = {
  keychain: "https://support.apple.com/guide/security/keychain-data-protection-secb0694df1a/web",
  dataProtection: "https://support.apple.com/guide/security/data-protection-overview-secf6276da8a/web",
  signIn: "https://support.apple.com/guide/security/sign-in-with-apple-security-secda721bdd7/web",
  cloudKit: "https://developer.apple.com/icloud/cloudkit/",
  d1Security: "https://developers.cloudflare.com/d1/reference/data-security/",
  d1Location: "https://developers.cloudflare.com/d1/configuration/data-location/",
  gdpr: "https://commission.europa.eu/law/law-topic/data-protection/legal-framework-eu-data-protection_en",
} as const;

export const securityPageCopy: Record<Locale, SecurityPageCopy> = {
  es: {
    title: "Tu privacidad no depende de una promesa.",
    lead: "AAK Legacy combina cifrado en el dispositivo, protecciones nativas de Apple, copias cifradas en la nube, infraestructura con conocimiento mínimo y un proceso de entrega distribuido. Cada capa limita lo que la siguiente puede ver o hacer.",
    statement: "Tu Legacy sale del iPhone ya cifrado. AAK, los custodios y la infraestructura que lo conserva no disponen de una llave maestra para leerlo.",
    sections: [
      {
        title: "Cifrado antes de salir del dispositivo",
        text: "Textos, metadatos y adjuntos se protegen localmente antes de persistirse o sincronizarse. CloudKit y la infraestructura AAK reciben contenido cifrado, no el original legible.",
      },
      {
        title: "Claves separadas por espacio y contenido",
        text: "La jerarquía Root Key → Space KEK → Item Key → DEK compartimenta el Legacy. Cada uno de los cinco espacios tiene material criptográfico propio y cada contenido se protege con su clave, reduciendo el impacto de cualquier fallo aislado.",
      },
      {
        title: "Keychain, Secure Enclave y Face ID",
        text: "El material sensible del dispositivo se conserva mediante Keychain de iOS. Apple documenta que los secretos de Keychain usan AES-256-GCM y acceso mediado por Secure Enclave. Face ID o el código autorizan localmente: AAK no recibe ni almacena datos biométricos.",
      },
      {
        title: "Apple separa identidad y sincronización",
        text: "Sign in with Apple autentica la cuenta, pero el identificador interno de AAK permanece separado de las claves del Legacy. La copia cifrada del propietario se sincroniza en su CloudKit privado, dentro de un contenedor aislado para la app.",
      },
      {
        title: "Infraestructura AAK y Cloudflare",
        text: "El backend gestiona únicamente los datos operativos necesarios, las verificaciones y paquetes de entrega ya cifrados. Cloudflare D1 añade cifrado AES-256-GCM en reposo y TLS en tránsito. Es una protección adicional; el Zero Knowledge no depende de ella.",
      },
      {
        title: "Custodios sin acceso, destinatarios limitados",
        text: "La activación requiere verificación distribuida: ningún custodio puede decidir ni leer por sí solo. Tras cumplirse el proceso, cada destinatario puede recibir únicamente el paquete cifrado que el propietario le asignó.",
      },
      {
        title: "Recuperación sin puerta trasera",
        text: "El Recovery Kit contiene un secreto aleatorio de 256 bits creado en el dispositivo. AAK no conserva una copia utilizable. Por eso puede recuperar el propietario, pero ni AAK, ni Apple ni soporte pueden saltarse su protección.",
      },
      {
        title: "Marco europeo, con afirmaciones verificables",
        text: "AAK Legacy se diseña y gestiona desde España bajo los principios del RGPD. Antes del lanzamiento público se documentarán los encargados, transferencias y residencia efectiva. No afirmaremos alojamiento exclusivamente europeo sin auditar la configuración real de producción.",
      },
    ],
    assurance: {
      eyebrow: "Privacidad por diseño",
      title: "Tu información no es nuestro producto.",
      text: "La política de AAK Legacy parte de una regla sencilla: recopilar lo mínimo, separar identidad y contenido, y no crear un modelo comercial alrededor de la vida privada del usuario.",
      points: [
        "Sin publicidad, venta de datos ni perfilado comercial",
        "Solo los metadatos imprescindibles para operar el servicio",
        "Sin acceso humano ordinario al contenido del Legacy",
        "Derechos de acceso, rectificación, supresión y portabilidad",
      ],
      linkLabel: "Leer la política de privacidad",
    },
    sourcesTitle: "Documentación técnica oficial",
    sourcesIntro: "Estas referencias externas explican las protecciones de plataforma e infraestructura sobre las que se apoya AAK Legacy. El diseño criptográfico propio añade una capa previa e independiente.",
    sources: [
      { label: "Apple Platform Security · Protección de Keychain", url: sourceUrls.keychain },
      { label: "Apple Platform Security · Data Protection", url: sourceUrls.dataProtection },
      { label: "Apple Platform Security · Sign in with Apple", url: sourceUrls.signIn },
      { label: "Apple Developer · CloudKit", url: sourceUrls.cloudKit },
      { label: "Cloudflare Docs · Seguridad de D1", url: sourceUrls.d1Security },
      { label: "Cloudflare Docs · Jurisdicción y ubicación de D1", url: sourceUrls.d1Location },
      { label: "Comisión Europea · Marco de protección de datos", url: sourceUrls.gdpr },
    ],
  },
  en: {
    title: "Your privacy does not depend on a promise.",
    lead: "AAK Legacy combines on-device encryption, native Apple protections, encrypted cloud copies, minimum-knowledge infrastructure, and a distributed delivery process. Each layer limits what the next one can see or do.",
    statement: "Your Legacy leaves the iPhone already encrypted. AAK, guardians, and the infrastructure that stores it have no master key capable of reading it.",
    sections: [
      { title: "Encrypted before leaving the device", text: "Text, metadata, and attachments are protected locally before they are persisted or synchronized. CloudKit and AAK infrastructure receive encrypted content, not the readable original." },
      { title: "Separate keys for each space and item", text: "The Root Key → Space KEK → Item Key → DEK hierarchy compartmentalizes the Legacy. Each of the five spaces has its own cryptographic material and each item is protected with its own key, limiting the impact of an isolated failure." },
      { title: "Keychain, Secure Enclave, and Face ID", text: "Sensitive device material is kept through iOS Keychain. Apple documents AES-256-GCM protection and Secure Enclave-mediated access for Keychain secrets. Face ID or the device passcode authorizes locally: AAK never receives or stores biometric data." },
      { title: "Apple keeps identity and sync separate", text: "Sign in with Apple authenticates the account, while AAK's internal identifier remains separate from Legacy keys. The owner's encrypted copy synchronizes through their private CloudKit database, inside an app-isolated container." },
      { title: "AAK and Cloudflare infrastructure", text: "The backend handles only necessary operational data, verifications, and already-encrypted delivery packages. Cloudflare D1 adds AES-256-GCM encryption at rest and TLS in transit. This is an extra layer; Zero Knowledge does not depend on it." },
      { title: "Guardians cannot read; recipients are limited", text: "Activation requires distributed verification: no guardian can decide or read alone. Once the process is satisfied, each recipient can receive only the encrypted package assigned by the owner." },
      { title: "Recovery without a back door", text: "The Recovery Kit contains a random 256-bit secret created on the device. AAK keeps no usable copy. It can therefore restore the owner's access, but AAK, Apple, and support cannot bypass its protection." },
      { title: "European framework, verifiable claims", text: "AAK Legacy is designed and managed from Spain under GDPR principles. Processors, transfers, and effective data residency will be documented before public launch. We will not claim EU-only hosting without auditing the real production configuration." },
    ],
    assurance: {
      eyebrow: "Privacy by design", title: "Your information is not our product.",
      text: "AAK Legacy's policy starts with one simple rule: collect as little as possible, separate identity from content, and never build a business model around the user's private life.",
      points: ["No advertising, data sales, or commercial profiling", "Only the metadata required to operate the service", "No ordinary human access to Legacy content", "Rights of access, correction, deletion, and portability"],
      linkLabel: "Read the privacy policy",
    },
    sourcesTitle: "Official technical documentation",
    sourcesIntro: "These external references describe the platform and infrastructure protections AAK Legacy relies on. Its own cryptographic design adds an earlier, independent layer.",
    sources: [
      { label: "Apple Platform Security · Keychain protection", url: sourceUrls.keychain }, { label: "Apple Platform Security · Data Protection", url: sourceUrls.dataProtection }, { label: "Apple Platform Security · Sign in with Apple", url: sourceUrls.signIn }, { label: "Apple Developer · CloudKit", url: sourceUrls.cloudKit }, { label: "Cloudflare Docs · D1 data security", url: sourceUrls.d1Security }, { label: "Cloudflare Docs · D1 jurisdiction and location", url: sourceUrls.d1Location }, { label: "European Commission · Data protection framework", url: sourceUrls.gdpr },
    ],
  },
  fr: {
    title: "Votre confidentialité ne dépend pas d’une promesse.",
    lead: "AAK Legacy associe chiffrement sur l’appareil, protections natives d’Apple, copies cloud chiffrées, infrastructure à connaissance minimale et processus de remise distribué. Chaque couche limite ce que la suivante peut voir ou faire.",
    statement: "Votre Legacy quitte l’iPhone déjà chiffré. AAK, les gardiens et l’infrastructure qui le conserve ne disposent d’aucune clé maîtresse permettant de le lire.",
    sections: [
      { title: "Chiffré avant de quitter l’appareil", text: "Textes, métadonnées et pièces jointes sont protégés localement avant leur enregistrement ou synchronisation. CloudKit et l’infrastructure AAK reçoivent du contenu chiffré, pas l’original lisible." },
      { title: "Des clés distinctes par espace et contenu", text: "La hiérarchie Root Key → Space KEK → Item Key → DEK compartimente le Legacy. Chacun des cinq espaces possède son propre matériel cryptographique et chaque élément sa propre clé, limitant l’impact d’une défaillance isolée." },
      { title: "Keychain, Secure Enclave et Face ID", text: "Le matériel sensible de l’appareil est conservé via le trousseau iOS. Apple documente la protection AES-256-GCM et l’accès médié par la Secure Enclave pour les secrets du trousseau. Face ID ou le code autorise localement : AAK ne reçoit ni ne stocke de données biométriques." },
      { title: "Apple sépare identité et synchronisation", text: "Sign in with Apple authentifie le compte, tandis que l’identifiant interne AAK reste séparé des clés du Legacy. La copie chiffrée du propriétaire se synchronise dans sa base CloudKit privée, au sein d’un conteneur isolé pour l’app." },
      { title: "Infrastructure AAK et Cloudflare", text: "Le backend ne traite que les données opérationnelles nécessaires, les vérifications et les paquets de remise déjà chiffrés. Cloudflare D1 ajoute AES-256-GCM au repos et TLS en transit. C’est une couche supplémentaire ; le Zero Knowledge n’en dépend pas." },
      { title: "Gardiens sans accès, destinataires limités", text: "L’activation exige une vérification distribuée : aucun gardien ne peut décider ni lire seul. Une fois le processus satisfait, chaque destinataire ne peut recevoir que le paquet chiffré que le propriétaire lui a attribué." },
      { title: "Récupération sans porte dérobée", text: "Le Recovery Kit contient un secret aléatoire de 256 bits créé sur l’appareil. AAK n’en conserve aucune copie utilisable. Il permet donc au propriétaire de récupérer l’accès, sans qu’AAK, Apple ou l’assistance puissent contourner sa protection." },
      { title: "Cadre européen, affirmations vérifiables", text: "AAK Legacy est conçu et géré depuis l’Espagne selon les principes du RGPD. Sous-traitants, transferts et résidence effective seront documentés avant le lancement public. Nous n’affirmerons pas un hébergement exclusivement européen sans audit de la configuration réelle de production." },
    ],
    assurance: {
      eyebrow: "Confidentialité dès la conception", title: "Vos informations ne sont pas notre produit.",
      text: "La politique d’AAK Legacy repose sur une règle simple : collecter le minimum, séparer identité et contenu et ne jamais bâtir un modèle commercial autour de la vie privée de l’utilisateur.",
      points: ["Aucune publicité, vente de données ou profilage commercial", "Uniquement les métadonnées indispensables au service", "Aucun accès humain ordinaire au contenu du Legacy", "Droits d’accès, de rectification, d’effacement et de portabilité"],
      linkLabel: "Lire la politique de confidentialité",
    },
    sourcesTitle: "Documentation technique officielle",
    sourcesIntro: "Ces références externes décrivent les protections de plateforme et d’infrastructure utilisées par AAK Legacy. Sa conception cryptographique ajoute une couche préalable et indépendante.",
    sources: [
      { label: "Apple Platform Security · Protection du trousseau", url: sourceUrls.keychain }, { label: "Apple Platform Security · Data Protection", url: sourceUrls.dataProtection }, { label: "Apple Platform Security · Sign in with Apple", url: sourceUrls.signIn }, { label: "Apple Developer · CloudKit", url: sourceUrls.cloudKit }, { label: "Cloudflare Docs · Sécurité des données D1", url: sourceUrls.d1Security }, { label: "Cloudflare Docs · Juridiction et localisation D1", url: sourceUrls.d1Location }, { label: "Commission européenne · Cadre de protection des données", url: sourceUrls.gdpr },
    ],
  },
  pt: {
    title: "A sua privacidade não depende de uma promessa.",
    lead: "O AAK Legacy combina cifragem no dispositivo, proteções nativas da Apple, cópias cifradas na cloud, infraestrutura de conhecimento mínimo e um processo de entrega distribuído. Cada camada limita o que a seguinte pode ver ou fazer.",
    statement: "O seu Legacy sai do iPhone já cifrado. A AAK, os guardiões e a infraestrutura que o guarda não dispõem de uma chave-mestra capaz de o ler.",
    sections: [
      { title: "Cifrado antes de sair do dispositivo", text: "Textos, metadados e anexos são protegidos localmente antes de serem guardados ou sincronizados. O CloudKit e a infraestrutura AAK recebem conteúdo cifrado, não o original legível." },
      { title: "Chaves separadas por espaço e conteúdo", text: "A hierarquia Root Key → Space KEK → Item Key → DEK compartimenta o Legacy. Cada um dos cinco espaços tem material criptográfico próprio e cada item a sua chave, limitando o impacto de uma falha isolada." },
      { title: "Keychain, Secure Enclave e Face ID", text: "O material sensível do dispositivo é guardado através do Keychain do iOS. A Apple documenta proteção AES-256-GCM e acesso mediado pelo Secure Enclave para os segredos do Keychain. O Face ID ou o código autoriza localmente: a AAK não recebe nem guarda dados biométricos." },
      { title: "A Apple separa identidade e sincronização", text: "O Sign in with Apple autentica a conta, mas o identificador interno da AAK permanece separado das chaves do Legacy. A cópia cifrada do proprietário sincroniza-se na sua base CloudKit privada, num contentor isolado para a app." },
      { title: "Infraestrutura AAK e Cloudflare", text: "O backend trata apenas os dados operacionais necessários, verificações e pacotes de entrega já cifrados. O Cloudflare D1 acrescenta AES-256-GCM em repouso e TLS em trânsito. É uma camada adicional; o Zero Knowledge não depende dela." },
      { title: "Guardiões sem acesso, destinatários limitados", text: "A ativação exige verificação distribuída: nenhum guardião pode decidir ou ler sozinho. Cumprido o processo, cada destinatário só pode receber o pacote cifrado que o proprietário lhe atribuiu." },
      { title: "Recuperação sem porta traseira", text: "O Recovery Kit contém um segredo aleatório de 256 bits criado no dispositivo. A AAK não guarda uma cópia utilizável. Assim, o proprietário pode recuperar o acesso, mas a AAK, a Apple e o suporte não conseguem contornar a proteção." },
      { title: "Enquadramento europeu, afirmações verificáveis", text: "O AAK Legacy é concebido e gerido a partir de Espanha segundo os princípios do RGPD. Subcontratantes, transferências e residência efetiva serão documentados antes do lançamento público. Não afirmaremos alojamento exclusivo na UE sem auditar a configuração real de produção." },
    ],
    assurance: {
      eyebrow: "Privacidade desde a conceção", title: "A sua informação não é o nosso produto.",
      text: "A política do AAK Legacy parte de uma regra simples: recolher o mínimo, separar identidade e conteúdo e nunca criar um modelo comercial em torno da vida privada do utilizador.",
      points: ["Sem publicidade, venda de dados ou definição de perfis comerciais", "Apenas os metadados indispensáveis ao funcionamento do serviço", "Sem acesso humano habitual ao conteúdo do Legacy", "Direitos de acesso, retificação, apagamento e portabilidade"],
      linkLabel: "Ler a política de privacidade",
    },
    sourcesTitle: "Documentação técnica oficial",
    sourcesIntro: "Estas referências externas descrevem as proteções de plataforma e infraestrutura utilizadas pelo AAK Legacy. A sua conceção criptográfica acrescenta uma camada prévia e independente.",
    sources: [
      { label: "Apple Platform Security · Proteção do Keychain", url: sourceUrls.keychain }, { label: "Apple Platform Security · Data Protection", url: sourceUrls.dataProtection }, { label: "Apple Platform Security · Sign in with Apple", url: sourceUrls.signIn }, { label: "Apple Developer · CloudKit", url: sourceUrls.cloudKit }, { label: "Cloudflare Docs · Segurança de dados D1", url: sourceUrls.d1Security }, { label: "Cloudflare Docs · Jurisdição e localização D1", url: sourceUrls.d1Location }, { label: "Comissão Europeia · Enquadramento da proteção de dados", url: sourceUrls.gdpr },
    ],
  },
  ca: {
    title: "La teva privacitat no depèn d’una promesa.",
    lead: "AAK Legacy combina xifratge al dispositiu, proteccions natives d’Apple, còpies xifrades al núvol, infraestructura de coneixement mínim i un procés de lliurament distribuït. Cada capa limita allò que la següent pot veure o fer.",
    statement: "El teu Legacy surt de l’iPhone ja xifrat. AAK, els custodis i la infraestructura que el conserva no disposen de cap clau mestra capaç de llegir-lo.",
    sections: [
      { title: "Xifrat abans de sortir del dispositiu", text: "Textos, metadades i adjunts es protegeixen localment abans de desar-se o sincronitzar-se. CloudKit i la infraestructura AAK reben contingut xifrat, no l’original llegible." },
      { title: "Claus separades per espai i contingut", text: "La jerarquia Root Key → Space KEK → Item Key → DEK compartimenta el Legacy. Cadascun dels cinc espais té material criptogràfic propi i cada element es protegeix amb la seva clau, limitant l’impacte d’una fallada aïllada." },
      { title: "Keychain, Secure Enclave i Face ID", text: "El material sensible del dispositiu es conserva mitjançant el Keychain d’iOS. Apple documenta protecció AES-256-GCM i accés mediat pel Secure Enclave per als secrets del Keychain. Face ID o el codi autoritza localment: AAK no rep ni emmagatzema dades biomètriques." },
      { title: "Apple separa identitat i sincronització", text: "Sign in with Apple autentica el compte, però l’identificador intern d’AAK es manté separat de les claus del Legacy. La còpia xifrada del propietari se sincronitza a la seva base CloudKit privada, dins d’un contenidor aïllat per a l’app." },
      { title: "Infraestructura AAK i Cloudflare", text: "El backend tracta només les dades operatives necessàries, les verificacions i els paquets de lliurament ja xifrats. Cloudflare D1 afegeix AES-256-GCM en repòs i TLS en trànsit. És una capa addicional; el Zero Knowledge no en depèn." },
      { title: "Custodis sense accés, destinataris limitats", text: "L’activació exigeix verificació distribuïda: cap custodi no pot decidir ni llegir tot sol. Un cop complert el procés, cada destinatari només pot rebre el paquet xifrat que el propietari li ha assignat." },
      { title: "Recuperació sense porta del darrere", text: "El Recovery Kit conté un secret aleatori de 256 bits creat al dispositiu. AAK no en conserva cap còpia utilitzable. Per això el propietari pot recuperar l’accés, però AAK, Apple i el suport no poden eludir-ne la protecció." },
      { title: "Marc europeu, afirmacions verificables", text: "AAK Legacy es dissenya i gestiona des d’Espanya d’acord amb els principis del RGPD. Encarregats, transferències i residència efectiva es documentaran abans del llançament públic. No afirmarem allotjament exclusiu a la UE sense auditar la configuració real de producció." },
    ],
    assurance: {
      eyebrow: "Privacitat des del disseny", title: "La teva informació no és el nostre producte.",
      text: "La política d’AAK Legacy parteix d’una regla senzilla: recollir el mínim, separar identitat i contingut i no crear mai un model comercial al voltant de la vida privada de l’usuari.",
      points: ["Sense publicitat, venda de dades ni perfilatge comercial", "Només les metadades imprescindibles per operar el servei", "Sense accés humà ordinari al contingut del Legacy", "Drets d’accés, rectificació, supressió i portabilitat"],
      linkLabel: "Llegir la política de privacitat",
    },
    sourcesTitle: "Documentació tècnica oficial",
    sourcesIntro: "Aquestes referències externes descriuen les proteccions de plataforma i infraestructura en què es basa AAK Legacy. El seu disseny criptogràfic hi afegeix una capa prèvia i independent.",
    sources: [
      { label: "Apple Platform Security · Protecció del Keychain", url: sourceUrls.keychain }, { label: "Apple Platform Security · Data Protection", url: sourceUrls.dataProtection }, { label: "Apple Platform Security · Sign in with Apple", url: sourceUrls.signIn }, { label: "Apple Developer · CloudKit", url: sourceUrls.cloudKit }, { label: "Cloudflare Docs · Seguretat de dades D1", url: sourceUrls.d1Security }, { label: "Cloudflare Docs · Jurisdicció i ubicació D1", url: sourceUrls.d1Location }, { label: "Comissió Europea · Marc de protecció de dades", url: sourceUrls.gdpr },
    ],
  },
};
