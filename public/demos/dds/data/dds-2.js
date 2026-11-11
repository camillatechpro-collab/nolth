// Biblioteca — parte 2: máquinas, ferramentas, içamento, escavações, químicos, incêndio e canteiro.
window.DDS_LIB = (window.DDS_LIB || []).concat([
  {
    id: "maquinas-serra-circular",
    titulo: "Serra circular de bancada: respeito total",
    categoria: "Máquinas e equipamentos",
    nr: "NR-12 / NR-18",
    duracao: 5,
    tags: ["maquinas"],
    objetivo: "Reforçar as proteções obrigatórias e o modo seguro de operar a serra circular.",
    texto: [
      "A serra circular é uma das máquinas que mais amputam dedos na construção civil. Ela é rápida, e um descuido de um segundo é suficiente.",
      "A serra deve ter coifa protetora do disco, cutelo divisor, empurrador de madeira, chave liga-desliga ao alcance e aterramento. Mesa firme, nivelada e sem pregos na madeira.",
      "Só opera quem é treinado e autorizado. Use óculos, protetor auricular e avental. Nunca use luvas. Nunca tire a coifa e nunca empurre peças pequenas com a mão: use o empurrador.",
      "Desligue a serra e espere o disco parar antes de limpar ou ajustar. Disco trincado ou com dentes faltando deve ser trocado."
    ],
    caso: "Um carpinteiro retirou a coifa da serra porque ela 'atrapalhava a visão do corte'. Ao empurrar uma tábua curta com a mão, perdeu dois dedos.",
    perguntas: [
      "Quem está autorizado a operar a serra aqui?",
      "Para que serve o cutelo divisor?",
      "Por que não se usa luva na serra?"
    ],
    mensagem: "A serra não perdoa pressa nem improviso."
  },
  {
    id: "maquinas-betoneira",
    titulo: "Betoneira e argamassadeira: cuidado com as partes móveis",
    categoria: "Máquinas e equipamentos",
    nr: "NR-12",
    duracao: 4,
    tags: ["maquinas", "eletricidade"],
    objetivo: "Prevenir acidentes com engrenagens, correias e choque elétrico em betoneiras.",
    texto: [
      "A betoneira parece simples, mas tem correias, polias e engrenagens que podem prender roupas, mãos e cabelos. Essas partes devem estar sempre protegidas por carenagem.",
      "Nunca coloque a mão ou a pá dentro do tambor com a máquina ligada. Para limpar, desligue e bloqueie. A máquina precisa estar aterrada e com chave de partida protegida.",
      "Posicione a betoneira em piso firme e nivelado, longe de valas e da passagem de veículos. Mantenha a área ao redor limpa e seca.",
      "Use óculos, luvas adequadas para o cimento, protetor auricular e máscara ao manusear cimento e cal."
    ],
    caso: "Um servente tentou retirar uma pedra presa no tambor com a máquina girando. A pá enroscou e o braço dele foi puxado, sofrendo fratura.",
    perguntas: [
      "A proteção das correias da nossa betoneira está no lugar?",
      "Como se faz a limpeza do tambor com segurança?",
      "Quais EPIs usamos na betoneira?"
    ],
    mensagem: "Máquina ligada: mãos e ferramentas fora."
  },
  {
    id: "ferramentas-manuais",
    titulo: "Ferramentas manuais: a ferramenta certa, em bom estado",
    categoria: "Ferramentas",
    nr: "NR-18",
    duracao: 4,
    tags: ["ferramentas"],
    objetivo: "Incentivar a inspeção e o uso correto de ferramentas manuais.",
    texto: [
      "Martelo com cabo solto, talhadeira com cabeça rebarbada, chave de fenda usada como alavanca: ferramentas danificadas ou usadas de forma errada causam muitos acidentes nas mãos e nos olhos.",
      "Inspecione antes de usar: cabos firmes e sem rachaduras, cabeças sem rebarbas, lâminas afiadas e protegidas. Ferramenta com defeito sai de uso.",
      "Use cada ferramenta para a sua finalidade. Não improvise. Carregue ferramentas cortantes com a lâmina protegida e nunca no bolso.",
      "Guarde as ferramentas em caixas ou painéis. Ferramenta jogada no chão causa tropeços e pode cair de andares superiores."
    ],
    caso: "A cabeça de um martelo com cabo rachado se soltou durante o uso e atingiu o rosto de um colega que estava ao lado.",
    perguntas: [
      "Qual ferramenta você mais usa? Ela está em bom estado?",
      "Já viu alguém improvisando ferramenta? O que aconteceu?",
      "Onde guardamos as ferramentas no fim do dia?"
    ],
    mensagem: "Ferramenta boa, usada do jeito certo, é trabalho sem lesão."
  },
  {
    id: "ferramentas-esmerilhadeira",
    titulo: "Esmerilhadeira (lixadeira): o disco certo e a proteção no lugar",
    categoria: "Ferramentas",
    nr: "NR-12",
    duracao: 5,
    tags: ["maquinas", "ferramentas", "poeira", "fogo"],
    objetivo: "Prevenir cortes, quebras de disco e projeções ao usar a esmerilhadeira.",
    texto: [
      "A esmerilhadeira gira em altíssima rotação. Se o disco quebrar, os pedaços saem como projéteis. Se a ferramenta 'pegar', ela pode dar um tranco e atingir o próprio operador.",
      "Use o disco adequado ao material e compatível com a rotação da máquina. Nunca use disco de corte para desbaste nem disco trincado ou vencido. A capa de proteção nunca deve ser retirada.",
      "Segure com as duas mãos, usando o punho lateral, e mantenha o corpo fora da linha do disco. Use óculos e protetor facial, protetor auricular, luvas e, em serviços com poeira, máscara.",
      "As fagulhas podem causar incêndio: afaste materiais inflamáveis. Ao terminar, espere o disco parar antes de apoiar a ferramenta."
    ],
    caso: "Um serralheiro usou um disco de corte de diâmetro maior, sem a capa de proteção. O disco estourou e um fragmento atingiu o rosto dele.",
    perguntas: [
      "Como verificar se o disco é adequado à máquina?",
      "Por que segurar com as duas mãos?",
      "O que pode pegar fogo perto de onde usamos a esmerilhadeira?"
    ],
    mensagem: "Sem capa e sem disco certo, a esmerilhadeira vira arma."
  },
  {
    id: "icamento-carga-suspensa",
    titulo: "Içamento: ninguém embaixo da carga suspensa",
    categoria: "Içamento de cargas",
    nr: "NR-11 / NR-18",
    duracao: 5,
    tags: ["maquinas", "icamento"],
    objetivo: "Reforçar as regras de isolamento e comunicação em operações de içamento.",
    texto: [
      "Guinchos, gruas, munck e elevadores de carga levantam toneladas todos os dias. Se algo falhar, quem estiver embaixo não tem tempo de correr.",
      "A área de içamento deve ser isolada e sinalizada. Ninguém passa ou fica sob carga suspensa, nem por um instante.",
      "A comunicação entre operador e sinaleiro deve ser clara, com sinais padronizados ou rádio. Só uma pessoa dá os sinais. O operador para sempre que perder o contato visual ou a comunicação.",
      "Respeite a capacidade do equipamento. Não içe com vento forte. Use cordas-guia para controlar a carga, nunca as mãos."
    ],
    caso: "Uma cinta de amarração rompeu durante o içamento de um fardo de blocos. Um ajudante que passou por baixo para buscar uma ferramenta foi atingido.",
    perguntas: [
      "Quem é o sinaleiro das operações de hoje?",
      "Por que só uma pessoa deve dar os sinais?",
      "Como controlar uma carga que está girando?"
    ],
    mensagem: "Carga no ar, área livre. Sem exceção."
  },
  {
    id: "icamento-acessorios",
    titulo: "Cintas, cabos e manilhas: inspecione antes de içar",
    categoria: "Içamento de cargas",
    nr: "NR-11",
    duracao: 5,
    tags: ["icamento"],
    objetivo: "Ensinar a identificar defeitos nos acessórios de içamento.",
    texto: [
      "O acessório de içamento é o elo mais fraco da operação. Uma cinta cortada ou um cabo com fios rompidos pode ceder sem aviso.",
      "Cintas: verifique cortes, desgaste, queimaduras, costuras abertas e se a etiqueta com a capacidade está legível. Cabos de aço: procure fios partidos, amassamentos, nós, corrosão e 'gaiola de passarinho'. Manilhas e ganchos: verifique deformações, trincas e trava de segurança.",
      "Proteja a cinta contra quinas vivas da carga. Observe o ângulo entre as pernas da linga: quanto mais aberto, maior o esforço em cada perna.",
      "Acessório danificado é retirado e inutilizado, para ninguém usar de novo por engano."
    ],
    caso: "Uma cinta sem etiqueta, já desgastada, foi usada para içar uma viga metálica. Ela rompeu na quina da peça, que caiu sobre um contêiner.",
    perguntas: [
      "Qual é a capacidade das cintas que usamos aqui?",
      "O que é 'gaiola de passarinho' em um cabo de aço?",
      "O que fazemos com um acessório danificado?"
    ],
    mensagem: "Antes de içar a carga, inspecione quem vai segurá-la."
  },
  {
    id: "escavacao-desmoronamento",
    titulo: "Escavações: o desmoronamento não avisa",
    categoria: "Escavações",
    nr: "NR-18",
    duracao: 6,
    tags: ["escavacao", "chuva"],
    objetivo: "Prevenir soterramentos em valas e escavações.",
    texto: [
      "Um metro cúbico de terra pesa mais de uma tonelada. Em um desmoronamento, a pessoa pode ficar presa e esmagada em segundos, mesmo em valas que parecem rasas.",
      "Escavações a partir de certa profundidade precisam de escoramento ou taludes com inclinação adequada, definidos por profissional habilitado. A terra retirada deve ficar afastada da borda, assim como máquinas e materiais.",
      "Toda vala deve ter escada de acesso e saída próxima de quem trabalha. A borda deve ser sinalizada e protegida contra queda de pessoas.",
      "Depois de chuva, vibração ou passagem de máquinas, o solo muda. A escavação deve ser inspecionada antes de alguém descer."
    ],
    caso: "Após uma noite de chuva, dois trabalhadores desceram numa vala de dois metros sem escoramento. A parede desmoronou e um deles ficou soterrado até a cintura, com fraturas.",
    perguntas: [
      "Nossa escavação tem escoramento? Quem avaliou?",
      "Onde deve ficar a terra retirada?",
      "O que muda no solo depois de uma chuva?"
    ],
    mensagem: "Vala sem escoramento pode virar túmulo."
  },
  {
    id: "escavacao-interferencias",
    titulo: "Antes de cavar: o que existe embaixo do chão?",
    categoria: "Escavações",
    nr: "NR-18",
    duracao: 4,
    tags: ["escavacao", "eletricidade"],
    objetivo: "Evitar acidentes com redes enterradas de energia, gás e água.",
    texto: [
      "Embaixo do chão pode haver cabos elétricos, tubulações de gás, água, esgoto e telefonia. Atingir uma rede de energia ou de gás pode causar choque, explosão e incêndio.",
      "Antes de escavar, consulte os projetos e as concessionárias e procure sinais na superfície: tampas, marcos, placas, faixas de aviso.",
      "Perto de redes conhecidas, a escavação deve ser manual e cuidadosa. Se encontrar uma fita de aviso ou tubulação não prevista, pare e comunique.",
      "Cheiro de gás? Afaste todos, não acione equipamentos elétricos nem chamas e chame o responsável e a concessionária."
    ],
    caso: "Uma retroescavadeira rompeu uma tubulação de gás não mapeada durante a abertura de uma vala. A rua precisou ser evacuada.",
    perguntas: [
      "Quais redes passam pelo nosso terreno?",
      "O que fazer ao encontrar uma fita de aviso enterrada?",
      "Como agir se sentir cheiro de gás?"
    ],
    mensagem: "Na dúvida sobre o que tem embaixo, pare e pergunte."
  },
  {
    id: "quimicos-cimento",
    titulo: "Cimento, cal e argamassa: cuidado com a pele",
    categoria: "Produtos químicos",
    nr: "NR-6",
    duracao: 4,
    tags: ["epi", "saude"],
    objetivo: "Prevenir dermatites e queimaduras causadas por cimento e cal.",
    texto: [
      "O cimento molhado é alcalino e pode causar queimaduras químicas e dermatite, uma das doenças de pele mais comuns na construção. Muitas vezes a queimadura não dói na hora e só aparece horas depois.",
      "Use luvas impermeáveis (nitrílica ou PVC), botas e, ao preparar a massa, óculos e máscara contra a poeira. Não deixe o cimento entrar pelo cano da bota ou pelas luvas.",
      "Se a roupa ficar encharcada de concreto ou argamassa, troque. Lave a pele com água corrente e sabão neutro ao final do serviço.",
      "Coceira, vermelhidão, rachaduras ou feridas nas mãos? Procure atendimento: tratar no começo evita afastamentos."
    ],
    caso: "Um trabalhador ajoelhou-se sobre o concreto fresco durante horas para nivelar o piso. Teve queimaduras químicas nos joelhos e foi afastado.",
    perguntas: [
      "Quem já teve irritação na pele por causa do cimento?",
      "Qual luva é a correta para argamassa?",
      "O que fazer se o concreto entrar na bota?"
    ],
    mensagem: "Cimento queima devagar, mas queima."
  },
  {
    id: "quimicos-rotulagem",
    titulo: "Produtos químicos: leia o rótulo e a ficha de segurança",
    categoria: "Produtos químicos",
    nr: "NR-26",
    duracao: 5,
    tags: ["saude", "fogo"],
    objetivo: "Mostrar como identificar os perigos dos produtos usados na obra.",
    texto: [
      "Tintas, solventes, impermeabilizantes, colas, desmoldantes e aditivos têm riscos à saúde e podem pegar fogo. O rótulo e a Ficha com Dados de Segurança (FDS) dizem quais são esses riscos e como se proteger.",
      "Observe os pictogramas do rótulo: chama (inflamável), caveira (tóxico), corrosão, ponto de exclamação (irritante), entre outros.",
      "Nunca transfira produto para garrafa de refrigerante ou embalagem sem identificação. Guarde em local ventilado, longe de calor e de faíscas. Feche bem as embalagens.",
      "Use os EPIs indicados na FDS, como luvas, óculos e máscara com filtro adequado. Trabalhe em local ventilado e não coma nem fume durante o uso."
    ],
    caso: "Um ajudante bebeu um gole de solvente que estava guardado numa garrafa de água sem identificação. Precisou ser levado às pressas para o hospital.",
    perguntas: [
      "Quais produtos químicos usamos nesta obra?",
      "Onde ficam as FDS desses produtos?",
      "O que significa o pictograma da chama?"
    ],
    mensagem: "Produto sem rótulo é perigo escondido."
  },
  {
    id: "incendio-extintores",
    titulo: "Extintores: qual usar e como usar",
    categoria: "Incêndio e emergência",
    nr: "NR-23",
    duracao: 5,
    tags: ["fogo"],
    objetivo: "Ensinar as classes de incêndio e o uso correto do extintor.",
    texto: [
      "Usar o extintor errado pode piorar o incêndio ou causar choque. Por isso é importante saber as classes: A — materiais sólidos, como madeira, papel e tecido; B — líquidos inflamáveis, como gasolina, tinta e solvente; C — equipamentos elétricos energizados.",
      "Água é para classe A e nunca deve ser usada em eletricidade ou líquidos inflamáveis. O pó químico ABC serve para as três. O CO₂ é indicado para B e C.",
      "Para usar: retire o pino, segure a mangueira, aponte para a base do fogo e aperte o gatilho, fazendo movimentos de varredura. Mantenha uma rota de fuga às suas costas.",
      "Extintores devem estar sinalizados, desobstruídos e com carga em dia. Se o fogo crescer, saia e chame o Corpo de Bombeiros (193)."
    ],
    caso: "Um princípio de incêndio em um quadro elétrico foi combatido com um balde de água. O trabalhador levou um choque e o fogo se espalhou.",
    perguntas: [
      "Onde fica o extintor mais próximo daqui?",
      "Qual extintor usar em um quadro elétrico pegando fogo?",
      "Para onde se aponta o jato do extintor?"
    ],
    mensagem: "Saber usar o extintor antes do incêndio faz toda a diferença."
  },
  {
    id: "incendio-trabalho-quente",
    titulo: "Trabalho a quente: solda, corte e maçarico",
    categoria: "Incêndio e emergência",
    nr: "NR-18",
    duracao: 5,
    tags: ["fogo", "epi"],
    objetivo: "Prevenir incêndios e queimaduras em serviços de solda e corte.",
    texto: [
      "Fagulhas de solda e corte podem voar vários metros e ficar em brasa por muito tempo dentro de entulho, madeira, isopor ou mantas, iniciando um incêndio mesmo depois que o serviço acabou.",
      "Antes de começar, retire ou proteja materiais combustíveis, tenha um extintor ao lado e, se exigido, obtenha a permissão de trabalho. Verifique os cilindros: devem estar em pé, presos, com válvulas antirretrocesso e mangueiras em bom estado.",
      "Use máscara de solda com filtro adequado, avental, luvas e mangotes de raspa e perneiras. Proteja quem está ao redor com biombos contra a radiação.",
      "Ao terminar, inspecione o local por um tempo para garantir que não ficou nenhuma brasa."
    ],
    caso: "Depois de cortar uma estrutura metálica, o soldador foi embora. Uma fagulha caiu sobre uma pilha de isopor e, meia hora depois, um incêndio atingiu o almoxarifado.",
    perguntas: [
      "Que materiais combustíveis existem perto de onde se solda hoje?",
      "Como devem ficar os cilindros de gás?",
      "Por que vigiar o local depois do serviço?"
    ],
    mensagem: "Terminou a solda? Fique de olho mais um pouco."
  },
  {
    id: "espaco-confinado",
    titulo: "Espaço confinado: nunca entre sem permissão",
    categoria: "Espaço confinado",
    nr: "NR-33",
    duracao: 6,
    tags: ["espaco-confinado"],
    objetivo: "Alertar para os riscos invisíveis de poços, caixas, tanques e galerias.",
    texto: [
      "Caixas d'água, cisternas, poços, galerias, tanques e caixas de inspeção podem ser espaços confinados: lugares com entrada e saída limitadas e ventilação ruim, onde pode faltar oxigênio ou haver gases tóxicos e inflamáveis.",
      "Esses gases muitas vezes não têm cheiro nem cor. A pessoa desmaia em poucos segundos e não consegue sair.",
      "Só entra em espaço confinado quem é treinado e autorizado, com Permissão de Entrada e Trabalho, medição de gases, ventilação, vigia do lado de fora e equipamentos de resgate prontos.",
      "A maioria das mortes em espaço confinado é de quem tenta socorrer um colega sem proteção. Se alguém desmaiar lá dentro, não entre: acione o resgate."
    ],
    caso: "Um trabalhador desceu numa caixa de esgoto para desentupir a rede e desmaiou. Dois colegas desceram para ajudá-lo e também desmaiaram. Os três morreram.",
    perguntas: [
      "Quais espaços confinados existem na nossa obra?",
      "O que é a Permissão de Entrada e Trabalho?",
      "Por que não devemos entrar para socorrer alguém sem equipamento?"
    ],
    mensagem: "No espaço confinado, o perigo não se vê. Sem permissão, não entre."
  },
  {
    id: "ordem-limpeza",
    titulo: "Ordem e limpeza: obra limpa é obra segura",
    categoria: "Ordem e limpeza",
    nr: "NR-18",
    duracao: 4,
    tags: ["comportamento", "fogo"],
    objetivo: "Mostrar a ligação direta entre organização do canteiro e prevenção de acidentes.",
    texto: [
      "Tropeços, escorregões, cortes e pregos no pé têm uma causa em comum: bagunça. Entulho no caminho, material espalhado, cabos atravessados e restos de madeira com pregos.",
      "Cada um é responsável por manter limpa a sua área de trabalho. Limpe enquanto trabalha, não só no fim do dia. Entulho vai para o local certo. Pregos devem ser retirados ou dobrados.",
      "Mantenha as passagens, escadas, saídas de emergência e extintores sempre livres. Empilhe materiais de forma estável, sem alturas exageradas.",
      "Organização também evita incêndios e economiza tempo: quem acha a ferramenta rápido trabalha melhor."
    ],
    caso: "Um ajudante carregando uma lata de massa tropeçou numa pilha de restos de madeira deixada na escada e caiu vários degraus, quebrando o braço.",
    perguntas: [
      "Qual é o ponto mais desorganizado da obra hoje?",
      "O que podemos melhorar ainda nesta manhã?",
      "Onde deve ser colocado cada tipo de entulho?"
    ],
    mensagem: "Limpou ao trabalhar, preveniu um acidente."
  },
  {
    id: "pregos-vergalhoes",
    titulo: "Pontas de vergalhão e pregos: perigo no caminho",
    categoria: "Ordem e limpeza",
    nr: "NR-18",
    duracao: 4,
    tags: ["comportamento", "epi"],
    objetivo: "Prevenir perfurações e empalamentos com pontas de ferro e pregos.",
    texto: [
      "As esperas de vergalhão de pilares e fundações e os pregos expostos em formas desmontadas causam perfurações graves. Uma queda sobre uma ponta de ferro pode ser fatal.",
      "Toda ponta de vergalhão exposta deve ter protetor tipo 'cogumelo' ou ser dobrada. Madeiras desformadas devem ter os pregos retirados ou rebatidos logo depois da desforma.",
      "Use botina com solado resistente e atenção ao caminhar em áreas de forma e armação. Não pule sobre armaduras.",
      "Viu uma ponta sem proteção? Proteja ou avise. Pode ser o seu colega quem vai cair nela."
    ],
    caso: "Um servente escorregou de uma rampa e caiu sobre as esperas de um bloco de fundação sem proteção. Uma barra perfurou a perna dele.",
    perguntas: [
      "Onde temos esperas sem proteção agora?",
      "O que fazer com as tábuas de desforma?",
      "Sua botina está em bom estado?"
    ],
    mensagem: "Ponta protegida, vida protegida."
  },
  {
    id: "poeira-silica",
    titulo: "Poeira de sílica: o pulmão não esquece",
    categoria: "Saúde e bem-estar",
    nr: "NR-15",
    duracao: 5,
    tags: ["poeira", "saude", "epi"],
    objetivo: "Conscientizar sobre a silicose e as formas de controlar a poeira.",
    texto: [
      "Cortar, lixar ou quebrar concreto, tijolo, cerâmica, granito e pedra gera uma poeira muito fina com sílica. Ela entra fundo nos pulmões e pode causar a silicose, uma doença grave, progressiva e sem cura, que muitas vezes aparece anos depois.",
      "A melhor forma de controle é evitar a poeira: corte a úmido, use ferramentas com aspiração e trabalhe em locais ventilados. Não varra a seco: umedeça antes.",
      "Quando houver poeira, use máscara adequada (PFF2 ou superior), bem vedada no rosto. Barba atrapalha a vedação. Troque a máscara quando estiver suja, úmida ou difícil de respirar.",
      "Não limpe a roupa com ar comprimido. Tosse persistente e falta de ar devem ser avaliadas pelo médico."
    ],
    caso: "Um marmorista que trabalhou anos cortando pedra a seco sem proteção começou a sentir falta de ar subindo escadas. Foi diagnosticado com silicose aos 45 anos.",
    perguntas: [
      "Quais serviços da obra geram mais poeira?",
      "Como podemos fazer esses cortes de forma úmida?",
      "Como saber se a máscara está bem vedada?"
    ],
    mensagem: "Poeira de hoje, falta de ar amanhã. Proteja seu pulmão."
  },
  {
    id: "transito-canteiro",
    titulo: "Máquinas e pessoas: trânsito dentro do canteiro",
    categoria: "Trânsito no canteiro",
    nr: "NR-18 / NR-12",
    duracao: 5,
    tags: ["transito", "maquinas"],
    objetivo: "Prevenir atropelamentos e colisões com veículos e máquinas na obra.",
    texto: [
      "Caminhões, retroescavadeiras, empilhadeiras e minicarregadeiras circulam no meio das pessoas. Elas têm grandes pontos cegos: o operador simplesmente não vê quem está atrás ou ao lado.",
      "Respeite as rotas de pedestres e as áreas isoladas. Nunca passe atrás de máquina em manobra. Faça contato visual com o operador antes de se aproximar.",
      "Operadores devem ser habilitados e autorizados, respeitar a velocidade da obra, usar cinto e manter o alarme de ré funcionando. Manobras de ré e de caminhões devem ter sinaleiro.",
      "Use colete refletivo ou uniforme de alta visibilidade em áreas com tráfego. Ninguém pega carona em máquina."
    ],
    caso: "Um servente caminhava atrás de uma retroescavadeira que dava ré, sem sinaleiro. O operador não o viu e o atingiu.",
    perguntas: [
      "Onde ficam os pontos cegos de uma retroescavadeira?",
      "Quais são as rotas de pedestres da nossa obra?",
      "Por que fazer contato visual com o operador?"
    ],
    mensagem: "Se você não vê o operador, ele também não vê você."
  }
]);
