import type { HomeContent } from "./home";

export const fr: HomeContent = {
  locale: "fr",
  canonicalPath: "/fr/",
  title: "AAK Legacy — Protégez et préparez ce qui compte",
  description: "Organisez documents, instructions, souvenirs et décisions dans un Legacy chiffré, prêt pour les personnes que vous choisissez.",
  nav: { how: "Comment ça marche", spaces: "Les 5 espaces", people: "Personnes", security: "Sécurité", blog: "Blog", availability: "Disponibilité", menu: "Ouvrir la navigation" },
  hero: {
    eyebrow: "Votre héritage, préparé sereinement",
    title: "Ce qui compte ne devrait jamais rester sans explication.",
    lead: "AAK Legacy vous aide à organiser documents, instructions, souvenirs et décisions, à les protéger par un chiffrement sur votre appareil et à les préparer pour les personnes que vous choisissez.",
    primary: "Découvrir comment ça marche", secondary: "Explorer les 5 espaces", visualLabel: "Une place pour chaque chose", visualTitle: "Votre Legacy", visualNote: "Cinq espaces. Une vision unique. Tout sous votre contrôle."
  },
  trust: ["Le contenu est chiffré dès l’origine", "AAK ne peut pas lire votre Legacy", "Aucun gardien ne décide seul", "Vous choisissez chaque destinataire"],
  purpose: {
    kicker: "Bien plus que stocker des fichiers", title: "Mettre de l’ordre, c’est aussi prendre soin.",
    text: "Il y a des choses que vous seul savez localiser, expliquer et transmettre. AAK Legacy rassemble ce contexte pour qu’il ne dépende pas d’une conversation inachevée ou d’un dossier impossible à comprendre.",
    quote: "Le préparer aujourd’hui, c’est apporter de la clarté demain."
  },
  how: {
    kicker: "Comment ça marche", title: "Conçu pour avancer étape par étape.", intro: "La sécurité fait partie du parcours dès le premier contenu, sans vous obliger à comprendre la technologie qui le protège.",
    steps: [
      { number: "01", title: "Connectez-vous avec Apple", text: "L’identité de votre compte reste séparée de ce que vous choisissez de conserver." },
      { number: "02", title: "Préparez votre Recovery Kit", text: "Avant d’enregistrer le premier contenu réel, l’app vous guide pour créer votre voie personnelle de récupération." },
      { number: "03", title: "Organisez votre Legacy", text: "Ajoutez chaque document, instruction ou souvenir dans l’espace qui lui correspond." },
      { number: "04", title: "Décidez qui participe", text: "Choisissez des gardiens pour vérifier et des destinataires pour recevoir uniquement ce que vous leur avez attribué." }
    ]
  },
  spaces: {
    kicker: "Les 5 espaces", title: "Chaque chose à sa place.", intro: "Une structure simple pour organiser les aspects pratiques, numériques, patrimoniaux, émotionnels et ceux qui doivent rester particulièrement confidentiels.",
    items: [
      { number: "01", title: "Famille", text: "Les informations qui aident votre famille à savoir quoi faire et qui contacter.", details: ["Instructions essentielles", "Documents importants", "Contacts clés", "Messages et avis"] },
      { number: "02", title: "Vie numérique", text: "Comptes, services, abonnements et contexte sur la vie qui existe aussi en ligne." },
      { number: "03", title: "Patrimoine", text: "Références sur les biens, assurances, contrats et décisions qu’il convient de laisser faciles à retrouver." },
      { number: "04", title: "Héritage émotionnel", text: "Messages, photographies, audio et vidéo pour préserver bien plus que des informations." },
      { number: "05", title: "Privé", text: "Contenu particulièrement sensible, réservé aux seules personnes que vous désignez." }
    ]
  },
  people: {
    kicker: "Personnes et décisions", title: "Garder n’est pas recevoir.", intro: "AAK Legacy sépare deux responsabilités souvent confondues. Vérifier un processus ne donne jamais accès au contenu.",
    guardianTitle: "Gardiens", guardianText: "Des personnes de confiance qui aident à vérifier quand le processus doit se poursuivre.",
    guardianPoints: ["Ils ne peuvent pas lire votre Legacy", "Personne ne peut décider seul", "Ils peuvent remplir leur rôle depuis le site sécurisé"],
    recipientTitle: "Destinataires", recipientText: "Les personnes qui recevront uniquement ce que vous leur avez attribué.",
    recipientPoints: ["Chaque contenu a son destinataire", "Ils ne reçoivent pas le reste de votre Legacy", "En mode standard, ils n’ont pas besoin de le savoir de votre vivant"],
    note: "La vérification et la remise restent séparées par conception."
  },
  recovery: {
    kicker: "Recovery Kit", title: "Votre confidentialité exige aussi une voie de récupération sûre.", text: "Le Recovery Kit est la voie externe qui vous permet de récupérer votre Legacy si vous changez ou perdez vos appareils. Il est créé sur votre appareil et doit être conservé hors d’AAK Legacy.",
    cardTitle: "Recovery Kit", cardSubtitle: "Personnel · Externe · Indispensable",
    points: ["Secret aléatoire de 256 bits", "QR principal et texte de secours", "Prévu pour une récupération entièrement hors ligne", "AAK Legacy ne conserve aucune copie utilisable"],
    warning: "Si vous perdez tous vos appareils autorisés ainsi que le Recovery Kit, ni AAK, ni Apple, ni l’assistance ne peuvent récupérer le contenu."
  },
  security: {
    kicker: "La sécurité dès la conception", title: "Votre confidentialité ne dépend pas d’une promesse.",
    statement: "Zero Knowledge. Chiffrement sur votre appareil. AAK Legacy ne peut pas lire votre Legacy lorsqu’il le conserve.",
    text: "Le contenu est protégé avant son stockage. L’identité, le contenu et les décisions de remise restent séparés afin de limiter ce que chaque partie peut connaître ou contrôler.",
    items: [
      { title: "Chiffré dès l’origine", text: "La première donnée persistée est déjà chiffrée sur l’appareil." },
      { title: "Clés sous le contrôle de l’appareil", text: "Le matériel sensible est protégé par les capacités de sécurité d’iOS et n’est pas envoyé avec le contenu chiffré." },
      { title: "Infrastructure sans l’original lisible", text: "CloudKit et les services AAK conservent des copies et paquets déjà chiffrés ; la protection ne dépend pas uniquement du serveur." },
      { title: "Décision distribuée", text: "L’activation ne dépend pas d’une seule personne et un gardien isolé ne peut pas l’imposer." }
    ]
  },
  faq: {
    kicker: "Questions fréquentes", title: "L’essentiel, expliqué clairement.",
    items: [
      { question: "AAK Legacy peut-il lire ce que j’enregistre ?", answer: "Non. Le contenu est chiffré sur votre appareil avant d’être stocké. AAK Legacy peut gérer l’identité de votre compte, mais ne peut pas lire le contenu de votre Legacy lorsqu’il le conserve." },
      { question: "Un gardien peut-il accéder à mes documents ?", answer: "Non. Son rôle consiste à participer à la vérification. Il n’accède pas au contenu et ne peut pas décider seul." },
      { question: "Mes destinataires doivent-ils installer l’app ?", answer: "En mode standard, ils n’ont pas besoin d’installer l’app, de créer un compte ni de connaître leur désignation de votre vivant." },
      { question: "Que se passe-t-il si je perds le Recovery Kit ?", answer: "Vos appareils autorisés peuvent encore vous donner accès. Mais si vous perdez tous ces appareils ainsi que le kit, le contenu devient cryptographiquement irrécupérable." },
      { question: "Remplace-t-il un testament ?", answer: "Non. AAK Legacy aide à organiser informations, instructions et souvenirs, mais ne remplace ni testament, ni acte notarié, ni conseil juridique." }
    ]
  },
  blog: {
    kicker: "Guides et connaissances", title: "Le blog d’AAK Legacy", intro: "Des contenus pratiques pour organiser votre héritage numérique, comprendre sa sécurité et prendre vos décisions à temps.", soon: "Prochainement",
    posts: [
      { category: "Organisation et héritage", title: "Qu’est-ce qu’un héritage numérique et pourquoi le préparer ?", summary: "Une manière claire d’identifier les informations qui méritent contexte et continuité." },
      { category: "Guides", title: "Gardiens et destinataires : deux rôles différents", summary: "Qui vérifie, qui reçoit et pourquoi ces responsabilités restent séparées." },
      { category: "Sécurité et confidentialité", title: "Recovery Kit : la confidentialité implique aussi une responsabilité", summary: "Ce qu’il protège, pourquoi AAK n’en garde aucune copie et comment le conserver." }
    ]
  },
  cta: { label: "Disponibilité", title: "AAK Legacy est en cours de développement pour iPhone.", text: "Le téléchargement sera activé ici lorsque l’application sera officiellement disponible sur l’App Store.", button: "Bientôt sur l’App Store", note: "Aucun lien anticipé ni date de lancement non confirmée." },
  footer: { claim: "Protégez ce qui compte. Préparez-le.", product: "Produit", resources: "Ressources", legal: "Mentions légales", links: ["Comment ça marche", "Les 5 espaces", "Sécurité", "Blog", "Confidentialité", "Conditions", "Assistance"], transition: "Serenia Legacy est désormais AAK Legacy.", rights: "AAK Developer · Tous droits réservés." }
};

export const pt: HomeContent = {
  locale: "pt",
  canonicalPath: "/pt/",
  title: "AAK Legacy — Proteja e prepare o que importa",
  description: "Organize documentos, instruções, memórias e decisões num Legacy cifrado, preparado para as pessoas que escolher.",
  nav: { how: "Como funciona", spaces: "Os 5 espaços", people: "Pessoas", security: "Segurança", blog: "Blog", availability: "Disponibilidade", menu: "Abrir navegação" },
  hero: {
    eyebrow: "O seu legado, preparado com serenidade", title: "O que importa não deve ficar sem explicação.",
    lead: "O AAK Legacy ajuda-o a organizar documentos, instruções, memórias e decisões, a protegê-los com cifragem no seu dispositivo e a deixá-los preparados para as pessoas que escolher.",
    primary: "Descobrir como funciona", secondary: "Explorar os 5 espaços", visualLabel: "Um lugar para cada coisa", visualTitle: "O seu Legacy", visualNote: "Cinco espaços. Uma visão única. Tudo sob o seu controlo."
  },
  trust: ["O conteúdo nasce cifrado", "A AAK não pode ler o seu Legacy", "Nenhum guardião decide sozinho", "Escolhe cada destinatário"],
  purpose: {
    kicker: "Muito mais do que guardar ficheiros", title: "Deixar tudo organizado também é cuidar.",
    text: "Há coisas que só o próprio sabe onde estão, porque importam e o que deve ser feito com elas. O AAK Legacy reúne esse contexto para que não dependa de uma conversa pendente ou de uma pasta impossível de compreender.",
    quote: "Prepará-lo hoje é oferecer clareza amanhã."
  },
  how: {
    kicker: "Como funciona", title: "Concebido para avançar passo a passo.", intro: "A segurança faz parte do percurso desde o primeiro conteúdo, sem exigir que compreenda a tecnologia que o protege.",
    steps: [
      { number: "01", title: "Inicie sessão com a Apple", text: "A identidade da sua conta mantém-se separada daquilo que decide guardar." },
      { number: "02", title: "Prepare o seu Recovery Kit", text: "Antes de guardar o primeiro conteúdo real, a app orienta-o na criação da sua via pessoal de recuperação." },
      { number: "03", title: "Organize o seu Legacy", text: "Adicione cada documento, instrução ou memória ao espaço correspondente." },
      { number: "04", title: "Decida quem participa", text: "Escolha guardiões para verificar e destinatários para receber apenas aquilo que lhes atribuiu." }
    ]
  },
  spaces: {
    kicker: "Os 5 espaços", title: "Cada coisa no seu lugar.", intro: "Uma estrutura simples para organizar o que é prático, digital, patrimonial, emocional e aquilo que deve permanecer especialmente reservado.",
    items: [
      { number: "01", title: "Familiar", text: "A informação que ajuda a sua família a compreender o que fazer e quem contactar.", details: ["Instruções essenciais", "Documentos importantes", "Contactos-chave", "Mensagens e avisos"] },
      { number: "02", title: "Vida Digital", text: "Contas, serviços, subscrições e contexto sobre a vida que também existe online." },
      { number: "03", title: "Património", text: "Referências sobre bens, seguros, contratos e decisões que convém deixar fáceis de localizar." },
      { number: "04", title: "Legado Emocional", text: "Mensagens, fotografias, áudio e vídeo para preservar mais do que informação." },
      { number: "05", title: "Privado", text: "Conteúdo especialmente sensível, reservado apenas às pessoas que determinar." }
    ]
  },
  people: {
    kicker: "Pessoas e decisões", title: "Guardar não é receber.", intro: "O AAK Legacy separa duas responsabilidades que muitas vezes se confundem. Verificar um processo não dá acesso ao conteúdo.",
    guardianTitle: "Guardiões", guardianText: "Pessoas de confiança que ajudam a verificar quando o processo deve prosseguir.", guardianPoints: ["Não podem ler o seu Legacy", "Nenhum pode decidir sozinho", "Podem cumprir a sua função através da web segura"],
    recipientTitle: "Destinatários", recipientText: "Pessoas que receberão apenas aquilo que lhes atribuiu.", recipientPoints: ["Cada conteúdo tem o seu destinatário", "Não recebem o restante Legacy", "No modo padrão, não precisam de saber durante a sua vida"],
    note: "A verificação e a entrega mantêm-se separadas por conceção."
  },
  recovery: {
    kicker: "Recovery Kit", title: "A sua privacidade também exige uma via segura de recuperação.", text: "O Recovery Kit é a via externa que lhe permite recuperar o Legacy se mudar ou perder os seus dispositivos. É criado no seu dispositivo e deve ser guardado fora do AAK Legacy.",
    cardTitle: "Recovery Kit", cardSubtitle: "Pessoal · Externo · Essencial", points: ["Segredo aleatório de 256 bits", "QR principal e texto alternativo", "Preparado para recuperação totalmente offline", "O AAK Legacy não guarda uma cópia utilizável"],
    warning: "Se perder todos os dispositivos autorizados e também o Recovery Kit, nem a AAK, nem a Apple, nem o suporte poderão recuperar o conteúdo."
  },
  security: {
    kicker: "Segurança desde a conceção", title: "A sua privacidade não depende de uma promessa.", statement: "Zero Knowledge. Cifragem no seu dispositivo. O AAK Legacy não pode ler o seu Legacy enquanto o guarda.",
    text: "O conteúdo é protegido antes de ser armazenado. A identidade, o conteúdo e as decisões de entrega mantêm-se separados para reduzir aquilo que cada parte pode conhecer ou controlar.",
    items: [
      { title: "Cifragem desde a origem", text: "O primeiro dado persistido já nasce cifrado no dispositivo." },
      { title: "Chaves sob controlo do dispositivo", text: "O material sensível é protegido pelas capacidades de segurança do iOS e não é enviado juntamente com o conteúdo cifrado." },
      { title: "Infraestrutura sem o original legível", text: "O CloudKit e os serviços AAK guardam cópias e pacotes já cifrados; a proteção não depende apenas do servidor." },
      { title: "Decisão distribuída", text: "A ativação não depende de uma só pessoa e um guardião isolado não a pode forçar." }
    ]
  },
  faq: {
    kicker: "Perguntas frequentes", title: "O essencial, explicado com clareza.",
    items: [
      { question: "O AAK Legacy pode ler o que guardo?", answer: "Não. O conteúdo é cifrado no seu dispositivo antes de ser armazenado. O AAK Legacy pode gerir a identidade da sua conta, mas não pode ler o conteúdo do seu Legacy enquanto o guarda." },
      { question: "Um guardião pode aceder aos meus documentos?", answer: "Não. A sua função é participar na verificação. Não recebe acesso ao conteúdo e também não pode decidir sozinho." },
      { question: "Os destinatários têm de instalar a app?", answer: "No modo padrão, não precisam de instalar a app, criar uma conta ou conhecer a sua designação durante a sua vida." },
      { question: "O que acontece se perder o Recovery Kit?", answer: "Os dispositivos autorizados podem continuar a dar-lhe acesso. Mas, se perder todos esses dispositivos e também o kit, o conteúdo será criptograficamente irrecuperável." },
      { question: "Substitui um testamento?", answer: "Não. O AAK Legacy ajuda a organizar informação, instruções e memórias, mas não substitui um testamento, documento notarial ou aconselhamento jurídico." }
    ]
  },
  blog: {
    kicker: "Guias e conhecimento", title: "O blog do AAK Legacy", intro: "Conteúdo prático para organizar o seu legado digital, compreender a segurança e tomar decisões atempadamente.", soon: "Brevemente",
    posts: [
      { category: "Organização e legado", title: "O que é um legado digital e porque deve prepará-lo", summary: "Uma forma clara de compreender que informação merece contexto e continuidade." },
      { category: "Guias", title: "Guardiões e destinatários: duas funções diferentes", summary: "Quem verifica, quem recebe e porque estas responsabilidades permanecem separadas." },
      { category: "Segurança e privacidade", title: "Recovery Kit: privacidade também significa responsabilidade", summary: "O que protege, porque a AAK não guarda uma cópia e como deve conservá-lo." }
    ]
  },
  cta: { label: "Disponibilidade", title: "O AAK Legacy está em desenvolvimento para iPhone.", text: "A transferência será ativada aqui quando a aplicação estiver oficialmente disponível na App Store.", button: "Brevemente na App Store", note: "Sem ligações de transferência antecipadas nem datas não confirmadas." },
  footer: { claim: "Proteja o que importa. Deixe-o preparado.", product: "Produto", resources: "Recursos", legal: "Legal", links: ["Como funciona", "Os 5 espaços", "Segurança", "Blog", "Privacidade", "Termos", "Suporte"], transition: "Serenia Legacy é agora AAK Legacy.", rights: "AAK Developer · Todos os direitos reservados." }
};

export const ca: HomeContent = {
  locale: "ca",
  canonicalPath: "/ca/",
  title: "AAK Legacy — Protegeix i prepara allò que importa",
  description: "Organitza documents, instruccions, records i decisions en un Legacy xifrat, preparat per a les persones que triïs.",
  nav: { how: "Com funciona", spaces: "Els 5 espais", people: "Persones", security: "Seguretat", blog: "Blog", availability: "Disponibilitat", menu: "Obre la navegació" },
  hero: {
    eyebrow: "El teu llegat, preparat amb serenitat", title: "Allò que importa no hauria de quedar sense explicació.",
    lead: "AAK Legacy t’ajuda a organitzar documents, instruccions, records i decisions, a protegir-los amb xifratge al teu dispositiu i a deixar-los preparats per a les persones que triïs.",
    primary: "Descobreix com funciona", secondary: "Explora els 5 espais", visualLabel: "Un lloc per a cada cosa", visualTitle: "El teu Legacy", visualNote: "Cinc espais. Una sola visió. Tot sota el teu control."
  },
  trust: ["El contingut neix xifrat", "AAK no pot llegir el teu Legacy", "Cap custodi decideix sol", "Tu tries cada destinatari"],
  purpose: {
    kicker: "Molt més que desar arxius", title: "Deixar ordre també és tenir cura.", text: "Hi ha coses que només tu saps on són, per què importen i què caldria fer-ne. AAK Legacy reuneix aquest context perquè no depengui d’una conversa pendent o d’una carpeta impossible d’entendre.", quote: "Preparar-ho avui és donar claredat demà."
  },
  how: {
    kicker: "Com funciona", title: "Dissenyat per avançar pas a pas.", intro: "La seguretat forma part del recorregut des del primer contingut, sense obligar-te a entendre la tecnologia que el protegeix.",
    steps: [
      { number: "01", title: "Inicia sessió amb Apple", text: "La identitat del teu compte es manté separada d’allò que decideixes desar." },
      { number: "02", title: "Prepara el teu Recovery Kit", text: "Abans de desar el primer contingut real, l’app et guia per crear la teva via personal de recuperació." },
      { number: "03", title: "Organitza el teu Legacy", text: "Afegeix cada document, instrucció o record a l’espai que li correspon." },
      { number: "04", title: "Decideix qui hi participa", text: "Tria custodis per verificar i destinataris perquè rebin únicament allò que els hagis assignat." }
    ]
  },
  spaces: {
    kicker: "Els 5 espais", title: "Cada cosa al seu lloc.", intro: "Una estructura senzilla per ordenar allò pràctic, digital, patrimonial, emocional i el que ha de romandre especialment reservat.",
    items: [
      { number: "01", title: "Familiar", text: "La informació que ajuda la teva família a entendre què ha de fer i amb qui ha de parlar.", details: ["Instruccions essencials", "Documents importants", "Contactes clau", "Missatges i avisos"] },
      { number: "02", title: "Vida Digital", text: "Comptes, serveis, subscripcions i context sobre la vida que també existeix en línia." },
      { number: "03", title: "Patrimoni", text: "Referències sobre béns, assegurances, contractes i decisions que convé deixar localitzades." },
      { number: "04", title: "Llegat Emocional", text: "Missatges, fotografies, àudio i vídeo per conservar alguna cosa més que informació." },
      { number: "05", title: "Privat", text: "Contingut especialment sensible, reservat només per a les persones que tu determinis." }
    ]
  },
  people: {
    kicker: "Persones i decisions", title: "Custodiar no és rebre.", intro: "AAK Legacy separa dues responsabilitats que sovint es confonen. Verificar un procés no dona accés al contingut.",
    guardianTitle: "Custodis", guardianText: "Persones de confiança que ajuden a verificar quan el procés ha de continuar.", guardianPoints: ["No poden llegir el teu Legacy", "Cap d’ells pot decidir tot sol", "Poden completar la seva funció des del web segur"],
    recipientTitle: "Destinataris", recipientText: "Persones que rebran únicament allò que els hagis assignat.", recipientPoints: ["Cada contingut té el seu destinatari", "No reben la resta del teu Legacy", "En el mode estàndard no cal que ho sàpiguen mentre ets viu"],
    note: "La verificació i el lliurament es mantenen separats per disseny."
  },
  recovery: {
    kicker: "Recovery Kit", title: "La teva privacitat també exigeix una via segura de recuperació.", text: "El Recovery Kit és la via externa que et permet recuperar el teu Legacy si canvies o perds els dispositius. Es crea al teu dispositiu i s’ha de conservar fora d’AAK Legacy.",
    cardTitle: "Recovery Kit", cardSubtitle: "Personal · Extern · Imprescindible", points: ["Secret aleatori de 256 bits", "QR principal i text de suport", "Preparat per a una recuperació completament fora de línia", "AAK Legacy no en conserva cap còpia utilitzable"],
    warning: "Si perds tots els dispositius autoritzats i també el Recovery Kit, ni AAK, ni Apple ni el suport poden recuperar el contingut."
  },
  security: {
    kicker: "Seguretat des del disseny", title: "La teva privacitat no depèn d’una promesa.", statement: "Zero Knowledge. Xifratge al teu dispositiu. AAK Legacy no pot llegir el teu Legacy mentre el custodia.",
    text: "El contingut es protegeix abans d’emmagatzemar-se. La identitat, el contingut i les decisions de lliurament es mantenen separats per reduir allò que cada part pot conèixer o controlar.",
    items: [
      { title: "Xifratge des de l’origen", text: "La primera dada persistent ja neix xifrada al dispositiu." },
      { title: "Claus sota el control del dispositiu", text: "El material sensible es protegeix amb les capacitats de seguretat d’iOS i no s’envia juntament amb el contingut xifrat." },
      { title: "Infraestructura sense l’original llegible", text: "CloudKit i els serveis AAK conserven còpies i paquets ja xifrats; la protecció no depèn únicament del servidor." },
      { title: "Decisió distribuïda", text: "L’activació no depèn d’una sola persona i un custodi aïllat no la pot forçar." }
    ]
  },
  faq: {
    kicker: "Preguntes freqüents", title: "L’essencial, explicat amb claredat.",
    items: [
      { question: "AAK Legacy pot llegir el que hi deso?", answer: "No. El contingut es xifra al teu dispositiu abans d’emmagatzemar-se. AAK Legacy pot gestionar la identitat del teu compte, però no pot llegir el contingut del teu Legacy mentre el custodia." },
      { question: "Un custodi pot accedir als meus documents?", answer: "No. La seva funció és participar en la verificació. No rep accés al contingut i tampoc pot decidir tot sol." },
      { question: "Els meus destinataris han d’instal·lar l’app?", answer: "En el mode estàndard, no han d’instal·lar l’app, crear un compte ni conèixer la seva designació mentre ets viu." },
      { question: "Què passa si perdo el Recovery Kit?", answer: "Els dispositius autoritzats et poden continuar donant accés. Però si perds tots aquests dispositius i també el kit, el contingut serà criptogràficament irrecuperable." },
      { question: "Substitueix un testament?", answer: "No. AAK Legacy ajuda a organitzar informació, instruccions i records, però no substitueix un testament, un document notarial ni assessorament jurídic." }
    ]
  },
  blog: {
    kicker: "Guies i coneixement", title: "El blog d’AAK Legacy", intro: "Contingut pràctic per ordenar el teu llegat digital, comprendre la seguretat i prendre decisions amb temps.", soon: "Properament",
    posts: [
      { category: "Organització i llegat", title: "Què és un llegat digital i per què convé preparar-lo", summary: "Una manera clara d’entendre quina informació mereix context i continuïtat." },
      { category: "Guies", title: "Custodis i destinataris: dues funcions diferents", summary: "Qui verifica, qui rep i per què totes dues responsabilitats estan separades." },
      { category: "Seguretat i privacitat", title: "Recovery Kit: privacitat també significa responsabilitat", summary: "Què protegeix, per què AAK no en desa una còpia i com s’ha de conservar." }
    ]
  },
  cta: { label: "Disponibilitat", title: "AAK Legacy està en desenvolupament per a iPhone.", text: "La descàrrega s’activarà aquí quan l’aplicació estigui disponible oficialment a l’App Store.", button: "Properament a l’App Store", note: "Sense enllaços de descàrrega anticipats ni promeses de data." },
  footer: { claim: "Protegeix allò que importa. Deixa-ho preparat.", product: "Producte", resources: "Recursos", legal: "Legal", links: ["Com funciona", "Els 5 espais", "Seguretat", "Blog", "Privacitat", "Termes", "Suport"], transition: "Serenia Legacy ara és AAK Legacy.", rights: "AAK Developer · Tots els drets reservats." }
};
