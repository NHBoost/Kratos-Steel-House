/* Contenu repris tel quel de la version HTML d'origine */
/* ===== Photography (Unsplash licence — illustrations until Kratos site photos are supplied) ===== */
export const IMG = {
  hero:'hero', villa:'villa', render:'render', renderRear:'render-rear', extension:'extension', brickModern:'brick-modern',
  roofers:'roofers', roofTiles:'roof-tiles', roofWork:'roof-work', dormers:'dormers', dormers2:'dormers-2',
  scaffold:'scaffold', scaffold2:'scaffold-2', timber:'timber', blocks:'blocks', structure:'structure', reno:'reno',
  interior:'interior', interior2:'interior-2', stair:'stair', kitchen:'kitchen', bath:'bath', insulation:'insulation',
  plans:'plans', brussels:'brussels', square:'square', canal:'canal', detail:'detail'
};
export const src = k => `/img/${IMG[k]||k}.webp`;
// Images pleine largeur : 800 px sur mobile, 1600 px au-delà
export const srcset = k => `/img/${IMG[k]||k}-800.webp 800w, ${src(k)} 1600w`;
export const SVC_IMG = {
  'construction-generale':['timber','scaffold'],
  'renovation-generale':['interior','reno'],
  'renovation-toiture':['roofers','roofTiles'],
  'facade-crepi':['render','renderRear'],
  'isolation-thermique':['insulation','roofWork'],
  'creation-lucarnes':['dormers','dormers2'],
  'extensions-annexes':['extension','brickModern'],
  'gros-oeuvre-transformations':['blocks','structure']
};
export const PROJ_IMG = {
  'toiture-uccle':['roofers','roofTiles','roofWork'],
  'lucarne-woluwe':['dormers','dormers2','scaffold2'],
  'extension-waterloo':['extension','brickModern','kitchen'],
  'facade-lasne':['render','renderRear','detail'],
  'renovation-ixelles':['interior','stair','reno'],
  'construction-tervuren':['villa','timber','scaffold'],
  'gros-oeuvre-schaerbeek':['structure','blocks','interior2'],
  'toiture-wavre':['roofWork','roofTiles','roofers'],
  'lucarne-dilbeek':['dormers2','dormers','bath']
};
export const ART_IMG = { 'preparer-renovation':'plans','materiau-toiture':'roofTiles','isolation-facade':'render','demarches-extension':'extension','creation-lucarne-points':'dormers','valoriser-bien':'villa','ameliorer-peb':'insulation' };
export const REG_IMG = { bx:'brussels', vb:'brickModern', bw:'villa' };

/* ===== Content (would live in the CMS back-office on the production site) ===== */
export const CO = {
  name: 'Kratos Steel House',
  phone: '+32 2 000 00 00',
  phoneNote: 'numéro à confirmer',
  email: 'devis@kratossteelhouse.be',
  emailNote: 'adresse à confirmer',
  whatsapp: '+32 470 00 00 00',
  address: 'Adresse du siège à communiquer',
  bce: 'BE 0XXX.XXX.XXX',
  hours: 'Lun–ven 8h00–18h00 · sam. sur rendez-vous'
};

export const SERVICES = [
  { slug:'construction-generale', short:'Construction générale', illus:'construction', mood:'grey',
    h1:'Entreprise générale de construction en Belgique',
    card:'Bâtiments, habitations et coordination de l’ensemble des corps de métier.',
    hook:'De la structure aux finitions, donnez vie à votre projet avec une entreprise qui privilégie la qualité à chaque étape.',
    intro:['Kratos Steel House réalise des projets de construction neuve et coordonne les différents corps de métier nécessaires, du gros œuvre jusqu’aux finitions. Vous disposez d’un interlocuteur unique qui organise le chantier, suit le planning et veille à la cohérence de l’exécution.','Nous travaillons avec les architectes, bureaux d’études et ingénieurs en stabilité qui conçoivent votre projet, et nous traduisons leurs plans en un ouvrage soigné, durable et conforme.'],
    works:['Construction de bâtiments et d’habitations','Travaux de gros œuvre','Maçonnerie et travaux structurels','Transformations importantes de bâtiments','Coordination de projets de construction','Extensions et annexes','Aménagements et finitions'],
    benefits:[['Un interlocuteur unique','Une seule entreprise coordonne les intervenants et répond de l’ensemble.'],['Une exécution maîtrisée','Les plans de l’architecte sont suivis avec rigueur, étape par étape.'],['Des finitions à la hauteur','Le même niveau d’exigence du gros œuvre jusqu’au dernier détail.']],
    faq:[['Travaillez-vous avec mon architecte ?','Oui. Nous exécutons les projets conçus par votre architecte et échangeons avec lui tout au long du chantier. Si vous n’avez pas encore d’architecte, nous pouvons vous orienter.'],['Prenez-vous en charge la coordination complète du chantier ?','Selon le périmètre convenu, nous coordonnons les différents corps de métier et assurons le suivi du chantier jusqu’à la réception.'],['Quelle est la taille minimale d’un projet de construction ?','Nous étudions chaque demande. Les projets de construction neuve et de transformation lourde font partie de notre cœur de métier.']],
    kw:'Entreprise construction Belgique', cat:'construction' },
  { slug:'renovation-generale', short:'Rénovation générale', illus:'renovation', mood:'warm',
    h1:'Rénovation générale à Bruxelles et en Belgique',
    card:'Rénovation complète de maisons, appartements et immeubles, du gros œuvre aux finitions.',
    hook:'Moderniser, optimiser et valoriser votre bien, sans compromis sur les finitions.',
    intro:['Une rénovation complète touche à la fois la structure, l’enveloppe, les espaces intérieurs et les finitions. Kratos Steel House prend en charge ces chantiers dans leur globalité, avec une organisation qui limite les ruptures entre les différentes phases.','Maisons de maître bruxelloises, villas des deux Brabants, appartements ou immeubles de rapport : chaque bâtiment est abordé selon son histoire, ses contraintes et le résultat que vous visez.'],
    works:['Rénovation complète de maisons','Rénovation d’appartements et d’immeubles','Transformation de bâtiments existants','Modernisation intérieure et extérieure','Réaménagement des espaces','Rénovation lourde et travaux structurels','Travaux de finition haut de gamme'],
    benefits:[['Moderniser votre bien','Des espaces actuels, lumineux et adaptés à votre manière de vivre.'],['Améliorer le confort','Une meilleure enveloppe, des volumes mieux pensés, des matériaux durables.'],['Valoriser le patrimoine','Une rénovation bien exécutée préserve le bâtiment et soutient sa valeur.']],
    faq:[['Rénovez-vous des biens occupés ?','C’est possible pour certains travaux, avec une organisation par phases. Pour une rénovation lourde, un logement libéré facilite le chantier et réduit sa durée.'],['Pouvez-vous gérer une rénovation de A à Z ?','Oui, nous prenons en charge les rénovations complètes, du gros œuvre jusqu’aux finitions intérieures et extérieures.'],['Faut-il un permis pour une rénovation ?','Cela dépend des travaux. Une modification de volume, de façade, de structure ou d’affectation demande souvent une autorisation. Nous vous aidons à identifier les démarches à vérifier auprès de votre commune.']],
    kw:'Rénovation générale Bruxelles', cat:'renovation' },
  { slug:'renovation-toiture', short:'Rénovation de toiture', illus:'toiture', mood:'day',
    h1:'Rénovation de toiture à Bruxelles, Brabant wallon et Brabant flamand',
    card:'Réfection complète, charpente, couverture, isolation et zinguerie.',
    hook:'Une toiture refaite dans les règles de l’art : étanche, durable et esthétique.',
    intro:['Kratos Steel House prend en charge la réfection complète de toitures inclinées et plates. Nous accordons une importance particulière à l’étanchéité, à la durabilité des matériaux et à l’intégration esthétique de la toiture dans l’architecture du bâtiment.','Une rénovation de toiture est aussi le bon moment pour améliorer l’isolation, revoir la zinguerie ou intégrer une fenêtre de toit ou une lucarne.'],
    works:['Rénovation complète de toitures inclinées','Rénovation et étanchéité de toitures plates','Travaux sur charpente','Pose de nouvelles couvertures','Isolation de toiture','Zinguerie et évacuation des eaux pluviales','Intégration de fenêtres de toit et lucarnes'],
    benefits:[['Étanchéité durable','Une couverture et des raccords exécutés avec soin pour protéger le bâtiment.'],['Confort thermique','L’isolation de la toiture limite les pertes de chaleur par le haut.'],['Esthétique soignée','Matériaux et détails choisis pour s’accorder à votre façade.']],
    faq:[['Quels matériaux de couverture proposez-vous ?','Ardoises, tuiles, zinc ou membranes pour toitures plates : le choix se fait selon le bâtiment, les contraintes urbanistiques et vos attentes. Les matériaux précis sont confirmés lors de l’étude.'],['Peut-on isoler la toiture en même temps ?','Oui, et c’est généralement recommandé : la réfection de la couverture permet d’intégrer une isolation adaptée.'],['Intervenez-vous pour de petites réparations ?','Notre activité porte principalement sur la rénovation complète de toitures. Contactez-nous pour toute demande, nous vous dirons si nous pouvons y répondre.']],
    kw:'Rénovation toiture Bruxelles', cat:'toiture' },
  { slug:'facade-crepi', short:'Façade & crépi', illus:'villa', mood:'day',
    h1:'Rénovation de façade et crépi extérieur en Belgique',
    card:'Rénovation, crépi, isolation extérieure et finitions décoratives.',
    hook:'Une façade renouvelée change le regard porté sur tout le bâtiment.',
    intro:['La façade est la première image de votre bien. Kratos Steel House rénove, protège et modernise les façades, avec ou sans isolation par l’extérieur, en soignant particulièrement les raccords, les angles et les encadrements.','Lorsque les travaux intègrent une isolation adaptée, la rénovation de façade contribue aussi à la performance énergétique du bâtiment.'],
    works:['Rénovation de façades','Application de crépi','Isolation extérieure','Finitions décoratives','Modernisation de l’aspect extérieur','Travaux de protection et d’embellissement'],
    benefits:[['Un aspect contemporain','Des teintes et textures choisies pour donner une nouvelle identité au bâtiment.'],['Une protection durable','Un enduit bien appliqué protège les maçonneries des intempéries.'],['Une enveloppe plus performante','Avec une isolation adaptée, les pertes de chaleur par les murs diminuent.']],
    faq:[['Peut-on poser un crépi sur une façade en briques ?','Souvent oui, après analyse du support et préparation adaptée. À Bruxelles et dans certaines communes, une modification d’aspect de façade peut nécessiter une autorisation : il faut le vérifier avant les travaux.'],['Le crépi peut-il être combiné à une isolation ?','Oui, un système d’isolation par l’extérieur avec enduit de finition est une solution courante.'],['Combien de temps dure une rénovation de façade ?','La durée dépend de la surface, du support et des conditions météo. Un planning est communiqué avec la proposition.']],
    kw:'Rénovation façade Bruxelles', cat:'facade' },
  { slug:'isolation-thermique', short:'Isolation thermique', illus:'isolation', mood:'warm',
    h1:'Travaux d’isolation thermique à Bruxelles et dans les deux Brabants',
    card:'Toiture, murs et façades : une enveloppe plus performante.',
    hook:'Un bâtiment mieux isolé, plus confortable, été comme hiver.',
    intro:['L’isolation thermique améliore le confort et contribue à la performance énergétique du bâtiment. Kratos Steel House réalise l’isolation des toitures, des murs extérieurs et des façades, seule ou dans le cadre d’une rénovation complète.','Chaque solution est choisie en fonction du bâtiment, de son état et des autres travaux prévus, pour éviter les ponts thermiques et les problèmes d’humidité.'],
    works:['Isolation de toiture','Isolation des murs extérieurs','Isolation de façade','Isolation dans le cadre d’une rénovation complète','Solutions d’amélioration de l’efficacité énergétique'],
    benefits:[['Confort thermique','Des températures intérieures plus stables et moins de parois froides.'],['Moins de pertes de chaleur','Une enveloppe continue limite les déperditions.'],['Performance énergétique','Des consommations potentiellement réduites et une contribution au PEB du bâtiment.']],
    faq:[['Combien vais-je économiser ?','Les économies dépendent de l’état initial du bâtiment, des travaux réalisés et de vos habitudes. Nous ne promettons pas de pourcentage sans étude technique.'],['Existe-t-il des primes ?','Chaque Région propose ses propres aides à la rénovation énergétique, dont les conditions évoluent. Renseignez-vous auprès de votre Région avant de signer.'],['Quelle isolation privilégier en premier ?','La toiture est souvent prioritaire, car une part importante de la chaleur s’échappe par le haut. Une visite permet de définir l’ordre le plus pertinent.']],
    kw:'Isolation maison Bruxelles', cat:'renovation' },
  { slug:'creation-lucarnes', short:'Création de lucarnes', illus:'lucarne', mood:'day',
    h1:'Création de lucarnes sur mesure en Belgique',
    card:'Plus de volume, plus de lumière : vos combles deviennent un espace de vie.',
    hook:'Transformez vos combles en un véritable espace de vie grâce à une lucarne réalisée sur mesure.',
    intro:['La création d’une lucarne transforme des combles sous-exploités en chambre, bureau ou salle de bain baignés de lumière naturelle. Kratos Steel House conçoit l’exécution de lucarnes intégrées à la toiture existante, avec une attention particulière à la structure, à l’étanchéité et aux finitions.','Habillage zinc, ardoise ou bardage, grandes baies ou fenêtres plus traditionnelles : la lucarne est dessinée pour s’accorder à l’architecture de la maison.'],
    works:['Création de lucarnes','Transformation de toiture','Agrandissement du volume utilisable sous toiture','Apport de lumière naturelle','Intégration esthétique à la toiture existante','Isolation et finitions'],
    benefits:[['Des mètres carrés en plus','Le volume habitable sous toiture augmente sans toucher à l’emprise au sol.'],['De la lumière naturelle','De grandes ouvertures transforment l’ambiance des combles.'],['Une intégration soignée','Proportions, matériaux et raccords pensés avec la toiture existante.']],
    faq:[['Faut-il un permis pour créer une lucarne ?','Dans la plupart des cas, une lucarne modifie le volume et l’aspect de la toiture et nécessite un permis d’urbanisme (omgevingsvergunning en Flandre). Les règles varient selon la Région et la commune : elles doivent être vérifiées avant les travaux.'],['Ma charpente peut-elle accueillir une lucarne ?','Cela se vérifie lors de la visite technique. Une adaptation de la structure est souvent nécessaire et, si besoin, une étude de stabilité est réalisée.'],['La lucarne est-elle isolée ?','Oui, l’isolation et l’étanchéité font partie intégrante de l’ouvrage.']],
    kw:'Création lucarne Belgique', cat:'lucarnes', permit:true },
  { slug:'extensions-annexes', short:'Extensions & annexes', illus:'extension', mood:'day',
    h1:'Extension de maison et création d’annexes sur mesure',
    card:'Agrandir votre maison en restant cohérent avec l’existant.',
    hook:'Gagnez de l’espace sans déménager, avec une extension pensée pour votre maison.',
    intro:['Une extension bien conçue prolonge la maison au lieu de s’y ajouter. Kratos Steel House réalise des extensions et annexes en veillant à la cohérence architecturale entre l’ancien et le nouveau, ainsi qu’à la qualité des raccords structurels et d’étanchéité.','Extension contemporaine vitrée, annexe en maçonnerie traditionnelle ou agrandissement d’une pièce de vie : chaque projet est exécuté selon les plans validés et les autorisations obtenues.'],
    works:['Extensions de maison','Construction d’annexes','Agrandissement d’espaces de vie','Extensions contemporaines','Transformations structurelles','Raccordement architectural entre l’ancien et le nouveau','Finitions intérieures et extérieures'],
    benefits:[['Surface habitable','De nouveaux mètres carrés pour une cuisine, un séjour ou une suite.'],['Un logement adapté','Votre maison évolue avec votre famille ou votre activité.'],['Valeur du bien','Une extension soignée peut contribuer à valoriser le bien.']],
    faq:[['Faut-il un permis pour une extension ?','En règle générale oui. Certaines petites constructions peuvent être dispensées selon la Région, mais les conditions sont strictes. Les démarches sont à vérifier avec votre architecte et votre commune.'],['Combien de temps dure une extension ?','Selon la taille et la technique, de quelques semaines à plusieurs mois. Le planning est précisé dans la proposition.'],['Peut-on rester dans la maison pendant les travaux ?','Souvent oui, avec une organisation adaptée, la jonction avec l’existant étant réalisée en fin de chantier.']],
    kw:'Extension maison Bruxelles', cat:'extensions' },
  { slug:'gros-oeuvre-transformations', short:'Gros œuvre & transformations', illus:'grosoeuvre', mood:'grey',
    h1:'Gros œuvre et transformation de bâtiments en Belgique',
    card:'Maçonnerie, structure, ouvertures et transformations lourdes.',
    hook:'Ouvrir, renforcer, transformer : la structure d’abord, exécutée avec précision.',
    intro:['Créer une grande ouverture, supprimer un mur porteur, reprendre une structure ou préparer une extension : ces travaux demandent rigueur et savoir-faire. Kratos Steel House réalise le gros œuvre et les transformations structurelles selon les études techniques fournies.','Les interventions qui nécessitent une étude de stabilité ou une autorisation sont réalisées dans le respect des obligations applicables, en coordination avec l’ingénieur et l’architecte.'],
    works:['Maçonnerie','Travaux de structure','Création ou modification d’ouvertures','Transformations lourdes','Travaux préparatoires à une extension','Adaptation de bâtiments existants','Mise en œuvre d’éléments porteurs selon études techniques'],
    benefits:[['Des espaces ouverts','Des volumes décloisonnés et plus de lumière.'],['Une structure sûre','Des éléments porteurs mis en œuvre selon l’étude de stabilité.'],['Une base solide','Un gros œuvre précis facilite toutes les finitions qui suivent.']],
    faq:[['Pouvez-vous supprimer un mur porteur ?','Oui, sur base d’une étude de stabilité réalisée par un ingénieur, avec étançonnement et mise en place d’un élément porteur adapté.'],['Qui réalise l’étude de stabilité ?','Un ingénieur en stabilité, mandaté par vous ou votre architecte. Nous travaillons en coordination avec lui.'],['Ces travaux sont-ils soumis à permis ?','Une modification structurelle peut l’être selon les cas. C’est à vérifier en amont avec votre architecte.']],
    kw:'Gros œuvre Belgique', cat:'construction' }
];

export const CATS = [['all','Tous les projets'],['toiture','Toiture'],['facade','Façade'],['renovation','Rénovation'],['lucarnes','Lucarnes'],['extensions','Extensions'],['construction','Construction']];

export const PROJECTS = [
  { id:'toiture-uccle', name:'Rénovation complète d’une toiture en ardoises', cat:'toiture', catL:'Toiture', loc:'Uccle', region:'Bruxelles', illus:'toiture', mood:'day', svc:'renovation-toiture', year:'Exemple',
    initial:'Maison de maître des années 1930 dont la couverture d’origine présentait des ardoises manquantes, une zinguerie fatiguée et aucune isolation.',
    done:['Dépose complète de l’ancienne couverture','Contrôle et renforcement ponctuel de la charpente','Pose d’une isolation de toiture et d’une sous-toiture','Nouvelle couverture en ardoises','Remplacement de la zinguerie et des descentes d’eau pluviale'],
    finish:'Ardoises naturelles posées au crochet, zinguerie prépatinée, raccords de cheminée refaits.' },
  { id:'lucarne-woluwe', name:'Création d’une lucarne en zinc', cat:'lucarnes', catL:'Lucarnes', loc:'Woluwe-Saint-Pierre', region:'Bruxelles', illus:'lucarne', mood:'day', svc:'creation-lucarnes', year:'Exemple',
    initial:'Combles sous-exploités, peu de hauteur sous plafond et une seule fenêtre de toit.',
    done:['Ouverture de la toiture et adaptation de la charpente','Structure de la lucarne','Habillage en zinc à joints debout','Pose d’une grande baie vitrée','Isolation et finitions intérieures'],
    finish:'Zinc à joints debout, châssis aluminium anthracite, raccords d’étanchéité soignés.' },
  { id:'extension-waterloo', name:'Extension contemporaine vitrée', cat:'extensions', catL:'Extensions', loc:'Waterloo', region:'Brabant wallon', illus:'extension', mood:'day', svc:'extensions-annexes', year:'Exemple',
    initial:'Maison en briques avec une cuisine fermée et peu de lien avec le jardin.',
    done:['Fondations et gros œuvre de l’extension','Ouverture dans la façade arrière existante','Toiture plate et étanchéité','Grandes baies coulissantes','Finitions intérieures et raccords avec l’existant'],
    finish:'Bardage sombre, couvre-mur en bronze, baies grand format.' },
  { id:'facade-lasne', name:'Façade crépie et isolation par l’extérieur', cat:'facade', catL:'Façade', loc:'Lasne', region:'Brabant wallon', illus:'villa', mood:'day', svc:'facade-crepi', year:'Exemple',
    initial:'Villa dont l’enduit d’origine était taché et fissuré, avec des menuiseries datées.',
    done:['Préparation et réparation du support','Pose d’un isolant par l’extérieur','Enduit de base armé','Crépi de finition','Habillage décoratif en bardage'],
    finish:'Crépi minéral teinte blanc cassé, encadrements nets, bardage teinte bronze.' },
  { id:'renovation-ixelles', name:'Rénovation intérieure complète', cat:'renovation', catL:'Rénovation', loc:'Ixelles', region:'Bruxelles', illus:'renovation', mood:'warm', svc:'renovation-generale', year:'Exemple',
    initial:'Appartement ancien cloisonné, sols et murs à reprendre entièrement.',
    done:['Démolitions et ouverture des espaces','Reprise des murs et plafonds','Nouvelle cuisine ouverte','Sols et menuiseries intérieures','Finitions et peintures'],
    finish:'Parquet chêne, menuiseries sur mesure, grandes fenêtres à profils fins.' },
  { id:'construction-tervuren', name:'Construction d’une habitation', cat:'construction', catL:'Construction', loc:'Tervuren', region:'Brabant flamand', illus:'construction', mood:'grey', svc:'construction-generale', year:'Exemple',
    initial:'Terrain à bâtir et plans d’architecte pour une habitation unifamiliale.',
    done:['Implantation et fondations','Gros œuvre et dalles','Charpente et toiture','Coordination des techniques','Parachèvements'],
    finish:'Exécution selon plans d’architecte et étude de stabilité.' },
  { id:'gros-oeuvre-schaerbeek', name:'Ouverture d’un mur porteur', cat:'construction', catL:'Construction', loc:'Schaerbeek', region:'Bruxelles', illus:'grosoeuvre', mood:'grey', svc:'gros-oeuvre-transformations', year:'Exemple',
    initial:'Rez-de-chaussée en enfilade avec deux pièces séparées par un mur porteur.',
    done:['Étançonnement provisoire','Mise en place d’une poutre acier selon étude de stabilité','Reprises de maçonnerie','Finitions des retours et du plafond'],
    finish:'Grande ouverture traversante, poutre intégrée au plafond.' },
  { id:'toiture-wavre', name:'Isolation et nouvelle couverture', cat:'toiture', catL:'Toiture', loc:'Wavre', region:'Brabant wallon', illus:'toiture', mood:'dusk', svc:'renovation-toiture', year:'Exemple',
    initial:'Toiture non isolée avec infiltrations ponctuelles.',
    done:['Dépose de la couverture','Isolation entre et sur chevrons','Nouvelle couverture','Fenêtre de toit'],
    finish:'Couverture ardoise, fenêtre de toit encastrée.' },
  { id:'lucarne-dilbeek', name:'Lucarne et aménagement des combles', cat:'lucarnes', catL:'Lucarnes', loc:'Dilbeek', region:'Brabant flamand', illus:'lucarne', mood:'dusk', svc:'creation-lucarnes', year:'Exemple',
    initial:'Grenier non aménagé sous une toiture en ardoises.',
    done:['Création de la lucarne','Isolation complète des combles','Aménagement d’une suite parentale'],
    finish:'Zinc anthracite, baie fixe et ouvrant.' }
];

export const FAQ = [
  ['Quels types de travaux prenez-vous en charge ?','Construction générale, rénovation complète, rénovation de toiture, façade et crépi, isolation thermique, création de lucarnes, extensions et annexes, gros œuvre et transformations structurelles. Nous intervenons sur des projets de différentes envergures.'],
  ['Intervenez-vous en dehors de Bruxelles ?','Oui. Nous sommes principalement actifs à Bruxelles, dans le Brabant flamand et dans le Brabant wallon, et nous étudions les projets partout en Belgique selon leur nature et leur importance.'],
  ['Réalisez-vous des rénovations complètes ?','Oui, c’est l’un de nos métiers principaux : nous prenons en charge la rénovation de A à Z, du gros œuvre jusqu’aux finitions.'],
  ['Est-il possible de créer une lucarne ou une extension ?','Oui. Ces projets demandent généralement un permis d’urbanisme. Nous vous aidons à identifier les démarches à vérifier avant le démarrage des travaux.'],
  ['Comment obtenir une proposition pour mon projet ?','Remplissez le formulaire de demande de devis en décrivant votre projet, idéalement avec quelques photos ou plans. Nous vous recontactons pour en discuter et organiser, si nécessaire, une visite.'],
  ['La visite et le devis sont-ils payants ?','Les conditions de la visite technique et de la remise de prix sont précisées lors du premier échange. (À confirmer par Kratos Steel House.)'],
  ['Travaillez-vous avec les architectes ?','Oui. Nous exécutons des projets conçus par des architectes et bureaux d’études, et nous échangeons avec eux tout au long du chantier.'],
  ['Qui s’occupe du permis d’urbanisme ?','La demande de permis est en principe introduite par le maître d’ouvrage avec son architecte. Nous pouvons vous conseiller sur les points techniques du dossier.'],
  ['Quels sont vos délais ?','Ils dépendent de la nature du projet et de notre planning. Une indication est donnée lors de la proposition ; les engagements de délais sont précisés dans le contrat.'],
  ['Travaillez-vous pour les copropriétés et les professionnels ?','Oui : syndics, copropriétés, investisseurs, promoteurs, commerces et entreprises pour leurs travaux de toiture, de façade, de rénovation et de transformation.']
];

export const ARTICLES = [
  { id:'preparer-renovation', t:'Comment préparer une rénovation complète de maison en Belgique ?', illus:'renovation', ex:'Programme, budget, architecte, permis et planning : les étapes à anticiper avant le premier coup de marteau.',
    body:[['p','Une rénovation complète réussie se joue en grande partie avant le chantier. Plus le projet est défini tôt, moins les décisions de dernière minute pèsent sur le budget et le planning.'],['h2','1. Définir le programme'],['p','Listez ce que vous attendez du bien rénové : nombre de chambres, cuisine ouverte ou non, bureau, rangements, performance énergétique visée. Ce programme sert de base à l’architecte et aux entreprises.'],['h2','2. Faire appel à un architecte si nécessaire'],['p','En Belgique, l’intervention d’un architecte est obligatoire pour les travaux soumis à permis d’urbanisme. Même lorsqu’elle ne l’est pas, elle aide à concevoir des espaces cohérents.'],['h2','3. Vérifier les autorisations'],['p','Modification de façade, de volume, de structure ou d’affectation : ces travaux demandent souvent un permis. Les règles diffèrent entre Bruxelles, la Wallonie et la Flandre.'],['h2','4. Anticiper le budget et les aides'],['p','Prévoyez une réserve pour les imprévus, fréquents dans les bâtiments anciens. Renseignez-vous aussi sur les primes régionales à la rénovation, dont les conditions évoluent régulièrement.'],['h2','5. Organiser le chantier'],['p','Un ordre logique des travaux évite de défaire ce qui vient d’être fait : structure et toiture d’abord, puis enveloppe, techniques, et enfin finitions.']] },
  { id:'materiau-toiture', t:'Quel matériau choisir pour rénover sa toiture ?', illus:'toiture', ex:'Ardoise, tuile, zinc ou membrane : les critères qui comptent vraiment.',
    body:[['p','Le bon matériau dépend de la pente du toit, du style du bâtiment, des règles urbanistiques locales et du budget.'],['h2','Ardoise'],['p','Très présente à Bruxelles et en Wallonie, elle offre une grande longévité et une esthétique sobre.'],['h2','Tuile'],['p','Céramique ou béton, elle s’adapte à de nombreux styles et se rencontre souvent en Flandre et en zone rurale.'],['h2','Zinc'],['p','Apprécié pour les lucarnes, les toitures à faible pente et les architectures contemporaines.'],['h2','Membranes pour toits plats'],['p','EPDM, bitume ou autres systèmes : la qualité de la pose et des relevés fait toute la différence.'],['p','Dans tous les cas, la rénovation de toiture est l’occasion d’isoler et de revoir la zinguerie.']] },
  { id:'isolation-facade', t:'Quels sont les avantages d’une isolation de façade ?', illus:'isolation', ex:'Confort, protection des maçonneries et nouvelle esthétique en un seul chantier.',
    body:[['p','L’isolation par l’extérieur enveloppe le bâtiment d’une couche continue d’isolant, recouverte d’un enduit ou d’un bardage.'],['h2','Moins de ponts thermiques'],['p','L’isolant passe devant les planchers et les murs de refend, ce qui limite les zones froides.'],['h2','Aucune surface perdue à l’intérieur'],['p','Les travaux se font depuis l’extérieur, sans réduire les pièces.'],['h2','Une façade renouvelée'],['p','Le crépi ou le bardage de finition modernise l’aspect du bâtiment.'],['p','Attention : une modification de façade peut nécessiter une autorisation selon la commune.']] },
  { id:'demarches-extension', t:'Quelles démarches prévoir pour construire une extension ?', illus:'extension', ex:'Permis, architecte, voisinage et étude de stabilité : le point sur les étapes.',
    body:[['p','Une extension modifie le volume du bâtiment : dans la grande majorité des cas, un permis d’urbanisme est nécessaire.'],['h2','Architecte et permis'],['p','L’architecte conçoit le projet et constitue le dossier de demande auprès de la commune. Les délais d’instruction doivent être intégrés au planning.'],['h2','Stabilité'],['p','La jonction avec l’existant et les fondations sont dimensionnées par un ingénieur en stabilité.'],['h2','Voisinage'],['p','Mitoyenneté, vues et hauteurs sont des points d’attention fréquents, en particulier en ville.']] },
  { id:'creation-lucarne-points', t:'Création de lucarne : quels sont les points à vérifier ?', illus:'lucarne', ex:'Permis, charpente, hauteur sous plafond et intégration architecturale.',
    body:[['p','Une lucarne peut transformer des combles. Avant de se lancer, quelques vérifications s’imposent.'],['h2','Le permis d’urbanisme'],['p','La lucarne modifie le volume et l’aspect de la toiture : un permis est généralement requis. Les règles varient selon la Région et la commune.'],['h2','La charpente'],['p','Elle doit pouvoir être adaptée. Une étude de stabilité peut être nécessaire.'],['h2','L’usage visé'],['p','Chambre, bureau, salle de bain : la hauteur sous plafond et l’accès aux combles conditionnent le projet.']] },
  { id:'valoriser-bien', t:'Comment valoriser son bien immobilier grâce à une rénovation ?', illus:'villa', ex:'Les travaux qui améliorent réellement l’attrait et la valeur d’un bien.',
    body:[['p','Toutes les rénovations ne se valent pas en matière de valorisation. Certains travaux sont particulièrement appréciés des acquéreurs et locataires.'],['h2','La performance énergétique'],['p','Le certificat PEB est obligatoire lors d’une vente ou d’une location et influence la perception du bien.'],['h2','Les volumes et la lumière'],['p','Ouvrir les espaces, créer une lucarne ou une extension change la manière de vivre le bien.'],['h2','L’enveloppe'],['p','Une toiture et une façade en bon état rassurent et évitent des travaux à court terme.']] },
  { id:'ameliorer-peb', t:'Quels travaux envisager pour améliorer le PEB de son habitation ?', illus:'isolation', ex:'Toiture, murs, menuiseries, ventilation : par où commencer ?',
    body:[['p','Le certificat PEB indique la performance énergétique d’un logement. Il est accompagné de recommandations utiles pour prioriser les travaux.'],['h2','Isoler la toiture'],['p','C’est souvent le premier poste, pour un rapport effort/résultat intéressant.'],['h2','Isoler murs et façades'],['p','Par l’extérieur ou l’intérieur, selon le bâtiment et les contraintes urbanistiques.'],['h2','Remplacer les menuiseries'],['p','Des châssis performants complètent une enveloppe isolée.'],['h2','Penser à la ventilation'],['p','Un bâtiment plus étanche doit être correctement ventilé pour garder un air sain.'],['p','Les aides régionales évoluent : vérifiez les conditions en vigueur avant de lancer vos travaux.']] }
];

export const REGIONS = [
  { k:'bx', name:'Bruxelles', color:'#17191C', illus:'brussels', communes:['Bruxelles-Ville','Anderlecht','Ixelles','Uccle','Schaerbeek','Woluwe-Saint-Lambert','Woluwe-Saint-Pierre','Etterbeek','Jette','Evere','Auderghem','Forest','Saint-Gilles','Watermael-Boitsfort','Molenbeek','Koekelberg','Ganshoren','Berchem-Sainte-Agathe','Saint-Josse','Bruxelles (19 communes)'].slice(0,19), txt:'Maisons de maître, immeubles et appartements : nous rénovons et transformons dans les 19 communes de la Région bruxelloise.' },
  { k:'vb', name:'Brabant flamand', color:'#E7B650', illus:'flanders', communes:['Vilvoorde','Zaventem','Machelen','Grimbergen','Dilbeek','Asse','Tervuren','Kortenberg','Louvain'], txt:'Toitures, extensions et rénovations complètes en périphérie bruxelloise et jusqu’à Louvain.' },
  { k:'bw', name:'Brabant wallon', color:'#777E86', illus:'villa', communes:['Waterloo','Braine-l’Alleud','Nivelles','Wavre','Rixensart','La Hulpe','Lasne','Ottignies-Louvain-la-Neuve'], txt:'Villas et maisons familiales : façades, toitures, extensions et transformations haut de gamme.' }
];

export const STEPS = [['Échange et analyse','Compréhension de vos besoins, de vos attentes et des contraintes du bâtiment.'],['Étude et proposition','Visite technique et remise d’une proposition détaillée, adaptée au projet.'],['Réalisation','Mise en œuvre, coordination des corps de métier et suivi du chantier.'],['Finitions et livraison','Contrôle de chaque détail et réception des travaux avec vous.']];

export const svcBySlug = Object.fromEntries(SERVICES.map(s => [s.slug, s]));

// Conseils liés à chaque service (maillage interne services <-> articles)
export const SVC_ARTICLES = {
  'construction-generale': ['preparer-renovation', 'demarches-extension'],
  'renovation-generale': ['preparer-renovation', 'valoriser-bien', 'ameliorer-peb'],
  'renovation-toiture': ['materiau-toiture', 'ameliorer-peb'],
  'facade-crepi': ['isolation-facade', 'valoriser-bien'],
  'isolation-thermique': ['ameliorer-peb', 'isolation-facade'],
  'creation-lucarnes': ['creation-lucarne-points', 'valoriser-bien'],
  'extensions-annexes': ['demarches-extension', 'valoriser-bien'],
  'gros-oeuvre-transformations': ['demarches-extension', 'preparer-renovation']
};

// Les n éléments qui suivent `item` dans la liste (en boucle) : chaque page reçoit autant de liens
export const following = (list, item, n) => {
  const i = list.indexOf(item);
  return Array.from({ length: Math.min(n, list.length - 1) }, (_, k) => list[(i + 1 + k) % list.length]);
};
