import type { HomeContent } from "./home";

export const fr: HomeContent = {
  locale: "fr",
  canonicalPath: "/fr/",
  title: "AAK Legacy — Protégez et préparez ce qui compte",
  description: "Organisez documents, instructions, souvenirs et décisions dans un Legacy chiffré, prêt pour les personnes que vous choisissez.",
  nav: { how: "Comment ça marche", spaces: "Les 5 espaces", people: "Personnes", security: "Sécurité", blog: "Blog", availability: "Disponibilité", menu: "Ouvrir la navigation" },
  hero: {
    eyebrow: "Il y a des choses qui ne devraient jamais se perdre",
    title: "Vos décisions. Vos souvenirs. Et tout ce que vous seul pouvez expliquer.",
    lead: "AAK Legacy organise et protège le tout grâce à un chiffrement sur votre appareil, puis le prépare pour les personnes que vous choisissez.",
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
      { number: "02", title: "Vie numérique", text: "Comptes, services, abonnements et contexte sur la vie qui existe aussi en ligne.", details: ["Comptes et accès", "Abonnements actifs", "Services cloud", "Consignes de clôture"] },
      { number: "03", title: "Patrimoine", text: "Références sur les biens, assurances, contrats et décisions qu’il convient de laisser faciles à retrouver.", details: ["Biens et propriétés", "Contrats d’assurance", "Contrats importants", "Décisions en attente"] },
      { number: "04", title: "Héritage émotionnel", text: "Messages, photographies, audio et vidéo pour préserver bien plus que des informations.", details: ["Messages personnels", "Photographies", "Audio et vidéo", "Histoires à préserver"] },
      { number: "05", title: "Privé", text: "Contenu particulièrement sensible, réservé aux seules personnes que vous désignez.", details: ["Informations sensibles", "Instructions réservées", "Documents confidentiels", "Accès très restreint"] }
    ]
  },
  people: {
    kicker: "Personnes et décisions", title: "Garder n’est pas recevoir.", intro: "AAK Legacy sépare deux responsabilités souvent confondues. Vérifier un processus ne donne jamais accès au contenu.",
    guardianTitle: "Gardiens", guardianText: "Des personnes de confiance qui aident à vérifier quand le processus doit se poursuivre.",
    guardianPoints: ["Ils ne peuvent pas lire votre Legacy", "Personne ne peut décider seul", "Ils peuvent remplir leur rôle depuis le site sécurisé"],
    recipientTitle: "Destinataires", recipientText: "Les personnes qui recevront uniquement ce que vous leur avez attribué.",
    recipientPoints: ["Chaque contenu a son destinataire", "Ils ne reçoivent pas le reste de votre Legacy", "Vous décidez de les prévenir maintenant ou au moment de la remise"],
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
      { question: "Mes destinataires doivent-ils installer l’app ?", answer: "Non. Ils n’ont pas besoin d’installer l’app. Vous décidez aussi de les prévenir maintenant ou de garder leur désignation confidentielle jusqu’au moment de la remise." },
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
  cta: {
    label: "Liste privée", title: "Soyez parmi les premiers à découvrir AAK Legacy.", text: "Réservez votre place dans AAK Legacy et soyez parmi les premiers informés du lancement sur iPhone.",
    formTitle: "Réservez votre place", emailLabel: "Adresse e-mail", emailPlaceholder: "vous@email.com",
    consentPrefix: "J’accepte de recevoir des communications sur AAK Legacy et j’ai lu la", privacyLabel: "politique de confidentialité",
    button: "Réserver ma place", note: "Sans carte. Sans spam. Désinscription à tout moment.", previewNote: "Aperçu : votre e-mail ne sera pas encore enregistré.",
    previewSuccess: "L’expérience fonctionne. Votre e-mail n’a pas été enregistré dans cet aperçu.", success: "Votre place est réservée. Nous vous préviendrons lorsque AAK Legacy sera prêt.", error: "Nous n’avons pas pu réserver votre place. Réessayez dans quelques minutes."
  },
  footer: { claim: "Protégez ce qui compte. Préparez-le.", product: "Produit", resources: "Ressources", legal: "Mentions légales", links: ["Comment ça marche", "Les 5 espaces", "Sécurité", "Blog", "Confidentialité", "Conditions", "Assistance"], transition: "Serenia Legacy est désormais AAK Legacy.", rights: "AAK Developer · Tous droits réservés." }
};

export const pt: HomeContent = {
  locale: "pt",
  canonicalPath: "/pt/",
  title: "AAK Legacy — Proteja e prepare o que importa",
  description: "Organize documentos, instruções, memórias e decisões num Legacy cifrado, preparado para as pessoas que escolher.",
  nav: { how: "Como funciona", spaces: "Os 5 espaços", people: "Pessoas", security: "Segurança", blog: "Blog", availability: "Disponibilidade", menu: "Abrir navegação" },
  hero: {
    eyebrow: "Há coisas que nunca se deveriam perder", title: "As suas decisões. As suas memórias. E tudo aquilo que só você pode explicar.",
    lead: "O AAK Legacy organiza e protege tudo com cifragem no seu dispositivo, deixando-o preparado para as pessoas que escolher.",
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
      { number: "02", title: "Vida Digital", text: "Contas, serviços, subscrições e contexto sobre a vida que também existe online.", details: ["Contas e acessos", "Subscrições ativas", "Serviços na nuvem", "Instruções de encerramento"] },
      { number: "03", title: "Património", text: "Referências sobre bens, seguros, contratos e decisões que convém deixar fáceis de localizar.", details: ["Bens e propriedades", "Seguros e apólices", "Contratos relevantes", "Decisões pendentes"] },
      { number: "04", title: "Legado Emocional", text: "Mensagens, fotografias, áudio e vídeo para preservar mais do que informação.", details: ["Mensagens pessoais", "Fotografias", "Áudio e vídeo", "Histórias a preservar"] },
      { number: "05", title: "Privado", text: "Conteúdo especialmente sensível, reservado apenas às pessoas que determinar.", details: ["Informação sensível", "Instruções reservadas", "Documentos confidenciais", "Acesso muito restrito"] }
    ]
  },
  people: {
    kicker: "Pessoas e decisões", title: "Guardar não é receber.", intro: "O AAK Legacy separa duas responsabilidades que muitas vezes se confundem. Verificar um processo não dá acesso ao conteúdo.",
    guardianTitle: "Guardiões", guardianText: "Pessoas de confiança que ajudam a verificar quando o processo deve prosseguir.", guardianPoints: ["Não podem ler o seu Legacy", "Nenhum pode decidir sozinho", "Podem cumprir a sua função através da web segura"],
    recipientTitle: "Destinatários", recipientText: "Pessoas que receberão apenas aquilo que lhes atribuiu.", recipientPoints: ["Cada conteúdo tem o seu destinatário", "Não recebem o restante Legacy", "Decide se quer informá-los agora ou apenas no momento da entrega"],
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
      { question: "Os destinatários têm de instalar a app?", answer: "Não. Não precisam de instalar a app. Também decide se quer informá-los agora ou manter a sua designação privada até ao momento da entrega." },
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
  cta: {
    label: "Lista privada", title: "Seja uma das primeiras pessoas a descobrir o AAK Legacy.", text: "Reserve o seu lugar no AAK Legacy e seja uma das primeiras pessoas a conhecer o lançamento para iPhone.",
    formTitle: "Reserve o seu lugar", emailLabel: "Endereço de e-mail", emailPlaceholder: "voce@email.com",
    consentPrefix: "Aceito receber comunicações sobre o AAK Legacy e li a", privacyLabel: "política de privacidade",
    button: "Reservar o meu lugar", note: "Sem cartão. Sem spam. Cancele quando quiser.", previewNote: "Pré-visualização: o seu e-mail ainda não será guardado.",
    previewSuccess: "A experiência funciona. O seu e-mail não foi guardado nesta pré-visualização.", success: "O seu lugar está reservado. Avisaremos quando o AAK Legacy estiver pronto.", error: "Não foi possível reservar o seu lugar. Tente novamente dentro de alguns minutos."
  },
  footer: { claim: "Proteja o que importa. Deixe-o preparado.", product: "Produto", resources: "Recursos", legal: "Legal", links: ["Como funciona", "Os 5 espaços", "Segurança", "Blog", "Privacidade", "Termos", "Suporte"], transition: "Serenia Legacy é agora AAK Legacy.", rights: "AAK Developer · Todos os direitos reservados." }
};

export const ca: HomeContent = {
  locale: "ca",
  canonicalPath: "/ca/",
  title: "AAK Legacy — Protegeix i prepara allò que importa",
  description: "Organitza documents, instruccions, records i decisions en un Legacy xifrat, preparat per a les persones que triïs.",
  nav: { how: "Com funciona", spaces: "Els 5 espais", people: "Persones", security: "Seguretat", blog: "Blog", availability: "Disponibilitat", menu: "Obre la navegació" },
  hero: {
    eyebrow: "Hi ha coses que no s’haurien de perdre mai", title: "Les teves decisions. Els teus records. I tot allò que només tu pots explicar.",
    lead: "AAK Legacy ho organitza i ho protegeix amb xifratge al teu dispositiu, i ho deixa preparat per a les persones que tu triïs.",
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
      { number: "02", title: "Vida Digital", text: "Comptes, serveis, subscripcions i context sobre la vida que també existeix en línia.", details: ["Comptes i accessos", "Subscripcions actives", "Serveis al núvol", "Indicacions de tancament"] },
      { number: "03", title: "Patrimoni", text: "Referències sobre béns, assegurances, contractes i decisions que convé deixar localitzades.", details: ["Béns i propietats", "Assegurances i pòlisses", "Contractes rellevants", "Decisions pendents"] },
      { number: "04", title: "Llegat Emocional", text: "Missatges, fotografies, àudio i vídeo per conservar alguna cosa més que informació.", details: ["Missatges personals", "Fotografies", "Àudios i vídeos", "Històries per conservar"] },
      { number: "05", title: "Privat", text: "Contingut especialment sensible, reservat només per a les persones que tu determinis.", details: ["Informació sensible", "Instruccions reservades", "Documents confidencials", "Accés molt restringit"] }
    ]
  },
  people: {
    kicker: "Persones i decisions", title: "Custodiar no és rebre.", intro: "AAK Legacy separa dues responsabilitats que sovint es confonen. Verificar un procés no dona accés al contingut.",
    guardianTitle: "Custodis", guardianText: "Persones de confiança que ajuden a verificar quan el procés ha de continuar.", guardianPoints: ["No poden llegir el teu Legacy", "Cap d’ells pot decidir tot sol", "Poden completar la seva funció des del web segur"],
    recipientTitle: "Destinataris", recipientText: "Persones que rebran únicament allò que els hagis assignat.", recipientPoints: ["Cada contingut té el seu destinatari", "No reben la resta del teu Legacy", "Tu decideixes si els ho comuniques ara o quan arribi el moment del lliurament"],
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
      { question: "Els meus destinataris han d’instal·lar l’app?", answer: "No. No han d’instal·lar l’app. A més, tu decideixes si els ho comuniques ara o mantens la seva designació en privat fins al moment del lliurament." },
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
  cta: {
    label: "Llista privada", title: "Sigues dels primers a descobrir AAK Legacy.", text: "Reserva la teva plaça a AAK Legacy i sigues dels primers a conèixer el llançament per a iPhone.",
    formTitle: "Reserva la teva plaça", emailLabel: "Correu electrònic", emailPlaceholder: "tu@email.com",
    consentPrefix: "Accepto rebre comunicacions sobre AAK Legacy i he llegit la", privacyLabel: "política de privacitat",
    button: "Reservar la meva plaça", note: "Sense targeta. Sense correu brossa. Baixa quan vulguis.", previewNote: "Previsualització: encara no es desarà el teu correu.",
    previewSuccess: "L’experiència funciona. En aquesta previsualització no hem desat el teu correu.", success: "La teva plaça està reservada. T’avisarem quan AAK Legacy estigui a punt.", error: "No hem pogut reservar la teva plaça. Torna-ho a provar d’aquí a uns minuts."
  },
  footer: { claim: "Protegeix allò que importa. Deixa-ho preparat.", product: "Producte", resources: "Recursos", legal: "Legal", links: ["Com funciona", "Els 5 espais", "Seguretat", "Blog", "Privacitat", "Termes", "Suport"], transition: "Serenia Legacy ara és AAK Legacy.", rights: "AAK Developer · Tots els drets reservats." }
};
