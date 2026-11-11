// Biblioteca — parte 1: trabalho em altura, EPI e eletricidade.
// Campos: id, titulo, categoria, nr, duracao (min), tags, objetivo, texto (parágrafos), caso, perguntas, mensagem.
window.DDS_LIB = (window.DDS_LIB || []).concat([
  {
    id: "altura-cinto",
    titulo: "Cinto paraquedista: uso correto e inspeção antes de subir",
    categoria: "Trabalho em altura",
    nr: "NR-35",
    duracao: 5,
    tags: ["altura", "epi"],
    objetivo: "Garantir que todos saibam vestir, ajustar e inspecionar o cinto paraquedista.",
    texto: [
      "Todo trabalho acima de dois metros, com risco de queda, exige o cinto tipo paraquedista. Mas não basta estar com o cinto no corpo: ele precisa estar bem ajustado e conectado a um ponto de ancoragem seguro.",
      "Antes de vestir, inspecione: costuras soltas, fitas desfiadas, cortadas ou queimadas, fivelas tortas e mosquetões que não travam. Se encontrar qualquer defeito, o cinto sai de uso na hora e vai para o técnico de segurança.",
      "No ajuste, as fitas das pernas devem ficar firmes, sem apertar demais — deve passar a mão espremida entre a fita e a perna. A argola dorsal fica no meio das costas, na altura das omoplatas. Cinto frouxo pode escorregar do corpo durante a queda.",
      "E lembre: o talabarte precisa estar preso o tempo todo. Ao mudar de posição, use o talabarte duplo, prendendo um lado antes de soltar o outro."
    ],
    caso: "Um trabalhador usava o cinto com as fitas das pernas soltas porque 'incomodava'. Ao escorregar da laje, o cinto subiu pelo corpo e ele ficou pendurado pelas axilas, com muita dor e risco de sufocamento até ser resgatado.",
    perguntas: [
      "Quem aqui já encontrou um cinto com defeito? O que fez?",
      "Como você sabe se o cinto está bem ajustado?",
      "Em quais pontos da nossa obra o talabarte duplo é obrigatório?"
    ],
    mensagem: "Cinto no corpo e preso no ponto certo: é a sua vida pendurada nele."
  },
  {
    id: "altura-ancoragem",
    titulo: "Ponto de ancoragem: onde (não) prender o talabarte",
    categoria: "Trabalho em altura",
    nr: "NR-35",
    duracao: 5,
    tags: ["altura"],
    objetivo: "Mostrar que o cinto só protege se estiver preso a uma ancoragem resistente e bem posicionada.",
    texto: [
      "De nada adianta o melhor cinto do mercado se ele estiver preso a um ponto fraco. A ancoragem precisa aguentar o impacto de uma queda, que é muitas vezes maior que o peso da pessoa.",
      "Use somente pontos de ancoragem definidos no projeto ou liberados pelo responsável: linhas de vida instaladas, olhais e estruturas avaliadas. Nunca prenda em tubulação, eletroduto, guarda-corpo provisório, andaime não liberado ou ferragem solta.",
      "A posição também importa. O ideal é a ancoragem acima da cabeça, para reduzir a distância de queda. Ancoragem abaixo dos pés aumenta a queda e o impacto, e pode fazer o trabalhador bater no pavimento de baixo antes de o talabarte travar.",
      "Se você não tem certeza se o ponto é seguro, pare e pergunte. Essa dúvida pode salvar a sua vida."
    ],
    caso: "Em uma obra, um carpinteiro prendeu o talabarte em uma barra de ferro de espera do pilar. Na queda, a barra dobrou e não segurou. Ele caiu um pavimento e fraturou as duas pernas.",
    perguntas: [
      "Quais são os pontos de ancoragem liberados na nossa frente de serviço hoje?",
      "Por que a ancoragem acima da cabeça é melhor?",
      "O que você faz se não encontrar um ponto seguro para se prender?"
    ],
    mensagem: "Sem ancoragem segura, não há trabalho em altura."
  },
  {
    id: "altura-escadas",
    titulo: "Escadas portáteis: o equipamento mais comum e mais subestimado",
    categoria: "Trabalho em altura",
    nr: "NR-18",
    duracao: 5,
    tags: ["altura"],
    objetivo: "Reforçar as regras de inspeção, posicionamento e uso de escadas de mão.",
    texto: [
      "Grande parte das quedas na construção não acontece de grandes alturas, mas de escadas. Por ser algo do dia a dia, a gente acaba usando de qualquer jeito.",
      "Antes de usar, verifique degraus quebrados ou soltos, montantes rachados e sapatas antiderrapantes. Escada improvisada, de madeira com pregos ou emendada, não pode ser usada.",
      "Posicione em piso firme e nivelado. A escada de encosto deve ultrapassar em cerca de um metro o ponto de apoio superior e ficar inclinada na proporção de 1 para 4: para cada quatro metros de altura, um metro de afastamento da base. Amarre no topo sempre que possível.",
      "Suba e desça de frente para a escada, com três pontos de contato: duas mãos e um pé, ou dois pés e uma mão. Ferramentas vão na bolsa ou são içadas com corda, nunca na mão."
    ],
    caso: "Um eletricista subiu numa escada apoiada em piso molhado, sem ninguém segurando. A base escorregou, ele caiu de cerca de três metros e bateu a cabeça. Ficou dois meses afastado.",
    perguntas: [
      "O que significa 'três pontos de contato'?",
      "Temos alguma escada na obra que deveria ser descartada?",
      "Quando é melhor usar plataforma ou andaime em vez de escada?"
    ],
    mensagem: "Escada é para acesso rápido, não para gambiarra."
  },
  {
    id: "andaime-liberado",
    titulo: "Andaime só se usa depois de liberado",
    categoria: "Andaimes",
    nr: "NR-18",
    duracao: 6,
    tags: ["altura"],
    objetivo: "Conscientizar sobre os itens obrigatórios do andaime e a importância da liberação antes do uso.",
    texto: [
      "Andaime não é só empilhar peças. Ele deve ser montado por pessoas capacitadas, seguindo o projeto ou as orientações do fabricante, e liberado pelo responsável antes de alguém subir.",
      "Observe sempre: base apoiada em sapatas sobre piso firme e nivelado; travamentos em X; piso completo, sem vãos e travado; guarda-corpo com travessão superior, intermediário e rodapé; e escada de acesso própria. Andaime acima de certa altura precisa estar ancorado à estrutura.",
      "Nunca retire peças por conta própria, nem para passar material. Nunca suba pelas travessas. Não acumule material no piso do andaime além do necessário para o trabalho.",
      "Andaime com rodízio deve ter as rodas travadas, e ninguém pode ficar em cima dele enquanto é deslocado."
    ],
    caso: "Um servente retirou uma prancha do piso do andaime para usar como rampa no térreo. Mais tarde, um pedreiro subiu sem perceber o vão, pisou no espaço vazio e caiu de cinco metros.",
    perguntas: [
      "Como sabemos que um andaime foi liberado aqui na obra?",
      "O que você faz se perceber que falta uma peça ou o rodapé?",
      "Por que não se pode subir pelas travessas?"
    ],
    mensagem: "Andaime incompleto é armadilha montada."
  },
  {
    id: "altura-aberturas",
    titulo: "Aberturas no piso e periferia da laje",
    categoria: "Trabalho em altura",
    nr: "NR-18",
    duracao: 5,
    tags: ["altura"],
    objetivo: "Destacar a proteção coletiva contra quedas em aberturas, poços e bordas de laje.",
    texto: [
      "Poço de elevador, shaft, vão de escada e borda de laje são pontos onde muitas quedas graves acontecem. Por isso, essas aberturas precisam ter proteção coletiva: guarda-corpo, tampas resistentes e fixadas, ou telas.",
      "A proteção coletiva vem antes da individual: ela protege todos que passam por ali, não só quem está usando cinto. Uma tampa de compensado solta não é proteção, é armadilha.",
      "Se você precisar retirar uma proteção para trabalhar, avise o encarregado, use o cinto preso em ancoragem e recoloque a proteção assim que terminar. Nunca deixe uma abertura desprotegida 'só por um minuto'.",
      "Viu uma abertura sem proteção? Isole a área e comunique na hora."
    ],
    caso: "Um ajudante carregava sacos de argamassa e pisou numa tampa de shaft que estava apenas apoiada, sem fixação e sem aviso. A tampa virou e ele caiu dois pavimentos.",
    perguntas: [
      "Onde estão as aberturas mais perigosas da obra hoje?",
      "Quem é responsável por recolocar uma proteção retirada?",
      "Como deve ser uma tampa de abertura segura?"
    ],
    mensagem: "Tirou a proteção? Recolocou. Viu aberta? Comunicou."
  },
  {
    id: "altura-telhado",
    titulo: "Trabalho em telhados e coberturas",
    categoria: "Trabalho em altura",
    nr: "NR-35",
    duracao: 5,
    tags: ["altura", "chuva"],
    objetivo: "Alertar para os riscos específicos de telhados: telhas frágeis, inclinação e clima.",
    texto: [
      "Telhado é um dos lugares mais traiçoeiros da obra. Telhas de fibrocimento, translúcidas ou já desgastadas não aguentam o peso de uma pessoa. Quem pisa direto na telha pode atravessá-la.",
      "Para trabalhar em telhado é preciso ter linha de vida, cinto ligado a ela o tempo todo e tábuas ou passarelas apoiadas sobre a estrutura, nunca sobre a telha.",
      "Não se trabalha em telhado com chuva, vento forte ou telha molhada, nem com risco de raios. Verifique também a presença de rede elétrica próxima.",
      "Planeje a descida de material e o acesso antes de começar. Improviso em cima do telhado é muito perigoso."
    ],
    caso: "Um instalador caminhava sobre o telhado para chegar a uma calha e pisou numa telha translúcida, que parecia firme. Ela quebrou e ele caiu seis metros até o piso do galpão.",
    perguntas: [
      "Que tipo de telha temos na nossa obra?",
      "Por que a passarela deve ficar sobre a estrutura?",
      "Em que condições de clima devemos parar o serviço?"
    ],
    mensagem: "Em telhado, nunca confie na telha: confie na linha de vida."
  },
  {
    id: "altura-queda-materiais",
    titulo: "Queda de materiais: proteção para quem está embaixo",
    categoria: "Trabalho em altura",
    nr: "NR-18",
    duracao: 5,
    tags: ["altura", "epi"],
    objetivo: "Prevenir acidentes com objetos que caem de pavimentos superiores.",
    texto: [
      "Um parafuso, um pedaço de tijolo ou uma ferramenta caindo de alguns andares chegam ao chão com força suficiente para matar. Por isso a obra precisa de bandejas de proteção, telas na fachada e isolamento das áreas embaixo de serviços em altura.",
      "Quem trabalha em cima deve manter o piso livre de entulho na borda, usar rodapé no guarda-corpo, amarrar ferramentas quando possível e nunca jogar material de cima. Entulho desce por tubo coletor ou elevador.",
      "Quem está embaixo deve respeitar as áreas isoladas e usar capacete com jugular. Não atravesse áreas sinalizadas para 'cortar caminho'.",
      "Se precisar descer algo, comunique quem está embaixo e espere a área estar livre."
    ],
    caso: "Uma marreta escorregou da mão de um pedreiro no quarto pavimento e caiu ao lado de um servente que passava por área sem isolamento. Por centímetros não houve uma morte.",
    perguntas: [
      "Onde estão as áreas isoladas de hoje?",
      "Como o entulho deve descer dos pavimentos?",
      "Por que o capacete precisa estar com a jugular?"
    ],
    mensagem: "O que cai lá de cima não escolhe em quem bate."
  },
  {
    id: "altura-resgate",
    titulo: "Suspensão inerte: por que o resgate precisa ser rápido",
    categoria: "Trabalho em altura",
    nr: "NR-35",
    duracao: 6,
    tags: ["altura", "primeiros-socorros"],
    objetivo: "Explicar o risco de ficar pendurado no cinto após uma queda e a importância do plano de resgate.",
    texto: [
      "O cinto segurou a queda. Acabou o perigo? Não. Uma pessoa pendurada sem se mexer pode sofrer a chamada suspensão inerte: as fitas apertam as pernas, o sangue fica preso nos membros inferiores e, em poucos minutos, ela pode desmaiar e ter complicações graves.",
      "Por isso todo trabalho em altura precisa ter um plano de resgate definido antes de começar: quem resgata, com qual equipamento e como chamar ajuda.",
      "Se você ficar suspenso e estiver consciente, mexa as pernas e procure apoiar os pés em algo. Alguns cintos têm fitas de alívio para apoiar os pés: saiba se o seu tem.",
      "Ninguém deve tentar um resgate improvisado sem treinamento e sem estar ancorado. Assim se cria uma segunda vítima."
    ],
    caso: "Em um galpão, um montador ficou pendurado após uma queda. A equipe não tinha plano de resgate e precisou esperar o socorro externo por mais de 30 minutos. Ele foi levado ao hospital desacordado.",
    perguntas: [
      "Qual é o plano de resgate da nossa frente de trabalho?",
      "Quem aqui é treinado para resgate?",
      "O que você faria se ficasse suspenso pelo cinto?"
    ],
    mensagem: "Trabalho em altura sem plano de resgate está incompleto."
  },
  {
    id: "epi-por-que",
    titulo: "EPI: por que usar todos os dias, mesmo nos serviços rápidos",
    categoria: "EPI",
    nr: "NR-6",
    duracao: 5,
    tags: ["epi", "comportamento"],
    objetivo: "Reforçar o uso correto e constante do EPI e as responsabilidades de cada um.",
    texto: [
      "O EPI é a última barreira entre você e a lesão. Ele não impede o acidente, mas reduz muito o dano. E é justamente no 'serviço rápido', no 'só vou ali', que muita gente se machuca sem proteção.",
      "A empresa deve fornecer o EPI adequado, com Certificado de Aprovação, treinar e substituir quando danificado. O trabalhador deve usar, guardar, conservar e comunicar quando o EPI estiver com defeito.",
      "EPI adaptado, cortado ou emprestado perde a proteção. Se o seu EPI incomoda, fale com o técnico: muitas vezes existe um modelo melhor para você.",
      "Cada atividade tem o seu EPI. Antes de começar, pergunte-se: estou com tudo que esta tarefa exige?"
    ],
    caso: "Um armador foi 'só cortar um ferrinho' sem óculos. Uma lasca do disco atingiu o olho e ele perdeu parte da visão.",
    perguntas: [
      "Qual EPI você acha mais desconfortável? Por quê?",
      "O que fazer quando o EPI estraga no meio do serviço?",
      "Qual o EPI necessário para a sua tarefa de hoje?"
    ],
    mensagem: "Serviço rápido também machuca. EPI sempre."
  },
  {
    id: "epi-capacete",
    titulo: "Capacete: aba para frente e jugular presa",
    categoria: "EPI",
    nr: "NR-6",
    duracao: 4,
    tags: ["epi"],
    objetivo: "Orientar sobre uso, ajuste e conservação do capacete de segurança.",
    texto: [
      "O capacete protege contra impactos de objetos que caem, batidas em vigas e tubulações e, em alguns modelos, contra choque elétrico. Para funcionar, ele precisa estar com a carneira ajustada à cabeça e a jugular presa sob o queixo.",
      "Sem a jugular, o capacete sai da cabeça na primeira abaixada ou na queda, exatamente quando você mais precisa dele.",
      "Não faça furos, não pinte com tinta à base de solvente, não guarde no sol e não use boné por baixo. Capacete que sofreu impacto forte deve ser trocado, mesmo que pareça inteiro.",
      "Verifique rachaduras, a validade e o estado da carneira. Higienize regularmente: ele vai na sua cabeça o dia todo."
    ],
    caso: "Um servente caiu de uma escada de dois metros. O capacete, sem jugular, voou na queda e ele bateu a cabeça diretamente no piso, sofrendo um traumatismo.",
    perguntas: [
      "Por que algumas pessoas não usam a jugular?",
      "Quando o capacete deve ser substituído?",
      "Alguém tem capacete com rachadura ou carneira quebrada hoje?"
    ],
    mensagem: "Capacete sem jugular é só um chapéu."
  },
  {
    id: "epi-ruido",
    titulo: "Ruído e protetor auricular: a surdez não tem volta",
    categoria: "EPI",
    nr: "NR-6 / NR-15",
    duracao: 5,
    tags: ["epi", "saude"],
    objetivo: "Conscientizar sobre a perda auditiva causada pelo ruído e o uso correto do protetor.",
    texto: [
      "Serra circular, martelete, betoneira, vibrador de concreto: a obra é barulhenta. A exposição diária ao ruído vai destruindo aos poucos as células do ouvido, sem dor. Quando a pessoa percebe, a perda auditiva já é permanente.",
      "Sinais de alerta: zumbido no fim do dia, precisar aumentar o volume da TV, ter dificuldade de entender conversas em lugares com barulho.",
      "O protetor tipo plug deve ser enrolado e inserido com a orelha puxada para cima e para trás, até ficar bem vedado. O tipo concha deve cobrir toda a orelha. Protetor mal colocado protege muito pouco.",
      "Use durante todo o tempo de exposição. Tirar por alguns minutos em local ruidoso já reduz muito a proteção do dia."
    ],
    caso: "Um operador de martelete, com 20 anos de profissão, passou a não ouvir os filhos e o rádio de comunicação da obra. O exame mostrou perda auditiva induzida por ruído, sem cura.",
    perguntas: [
      "Quais máquinas da obra são mais barulhentas?",
      "Alguém sente zumbido no fim do expediente?",
      "Quem pode mostrar como se coloca o plug corretamente?"
    ],
    mensagem: "Ouvido não tem peça de reposição."
  },
  {
    id: "epi-luvas",
    titulo: "Luva certa para cada tarefa",
    categoria: "EPI",
    nr: "NR-6",
    duracao: 4,
    tags: ["epi"],
    objetivo: "Mostrar que existem luvas diferentes para riscos diferentes e quando não usá-las.",
    texto: [
      "As mãos são as partes do corpo que mais se machucam no trabalho: cortes, perfurações, esmagamentos, queimaduras e dermatites. A luva certa evita boa parte disso.",
      "Luva de vaqueta ou de raspa para manuseio de materiais pesados e ásperos; luva nitrílica ou de PVC para cimento, argamassa e produtos químicos; luva isolante específica para eletricidade; luva de raspa com manga longa para solda.",
      "Atenção: luva não se usa perto de partes giratórias, como furadeira de bancada ou betoneira em movimento, porque pode enroscar e puxar a mão.",
      "Luva furada, encharcada de produto ou rasgada deve ser trocada. Lave as mãos ao tirar a luva, principalmente depois de trabalhar com cimento."
    ],
    caso: "Um pedreiro trabalhou o dia todo com as mãos na argamassa usando luva de pano, que encharcou. Desenvolveu uma dermatite grave e precisou ser afastado.",
    perguntas: [
      "Qual luva é a certa para a sua tarefa de hoje?",
      "Em que máquinas não se deve usar luva?",
      "O que acontece com a pele no contato com cimento molhado?"
    ],
    mensagem: "Suas mãos trabalham por você: proteja-as do jeito certo."
  },
  {
    id: "epi-olhos",
    titulo: "Proteção dos olhos: um segundo é suficiente",
    categoria: "EPI",
    nr: "NR-6",
    duracao: 4,
    tags: ["epi", "poeira"],
    objetivo: "Reforçar o uso de óculos e protetor facial nas atividades com projeção de partículas.",
    texto: [
      "Corte, lixamento, martelamento, quebra de concreto, limpeza com ar comprimido, aplicação de produtos: tudo isso pode lançar partículas nos olhos. Basta um segundo para uma lesão que dura a vida inteira.",
      "Óculos de segurança devem ser usados sempre que houver projeção de partículas. Para esmerilhadeira e serviços com muitos estilhaços, use também o protetor facial por cima dos óculos.",
      "Óculos riscados atrapalham a visão e acabam ficando na testa. Peça a troca. Se embaçam, existem modelos e produtos antiembaçantes.",
      "Se cair algo no olho, não esfregue. Lave com bastante água limpa e procure atendimento."
    ],
    caso: "Ao quebrar um pedaço de concreto com marreta, sem óculos, um servente foi atingido por um estilhaço. Teve lesão na córnea e ficou semanas sem enxergar direito.",
    perguntas: [
      "Quais tarefas de hoje exigem óculos?",
      "Por que não se deve esfregar o olho quando cai algo?",
      "Seus óculos estão em boas condições?"
    ],
    mensagem: "Óculos no rosto, não na testa."
  },
  {
    id: "eletrica-gambiarra",
    titulo: "Gambiarras e extensões improvisadas",
    categoria: "Eletricidade",
    nr: "NR-10",
    duracao: 5,
    tags: ["eletricidade"],
    objetivo: "Combater as instalações elétricas improvisadas no canteiro.",
    texto: [
      "Fio desencapado, emenda com fita crepe, tomada sem plugue com fio enfiado direto, extensão passando pela água: tudo isso é comum em obra e pode matar.",
      "As instalações elétricas do canteiro devem ser feitas por profissional qualificado, com quadros fechados, sinalizados, aterrados e com dispositivo DR. Os cabos devem estar suspensos ou protegidos contra passagem de veículos e pessoas.",
      "Use só extensões em bom estado, com plugues e tomadas adequados. Não sobrecarregue com benjamins. Nunca puxe o plugue pelo fio.",
      "Somente eletricista autorizado mexe em quadro e instalação. Se o equipamento está dando choque ou esquentando, desligue, sinalize e avise."
    ],
    caso: "Um servente ligou a betoneira enfiando as pontas do fio direto na tomada. Encostou numa parte desencapada com a mão molhada e levou um choque que o derrubou.",
    perguntas: [
      "Você já viu alguma gambiarra elétrica aqui?",
      "Quem pode mexer no quadro elétrico?",
      "Para que serve o dispositivo DR?"
    ],
    mensagem: "Eletricidade não dá segunda chance."
  },
  {
    id: "eletrica-bloqueio",
    titulo: "Bloqueio e etiquetagem: desligou, travou, sinalizou",
    categoria: "Eletricidade",
    nr: "NR-10 / NR-12",
    duracao: 5,
    tags: ["eletricidade", "maquinas"],
    objetivo: "Ensinar a importância de bloquear energias antes de manutenção ou limpeza.",
    texto: [
      "Muitos acidentes acontecem quando alguém faz manutenção ou limpeza em uma máquina e outra pessoa, sem saber, liga o equipamento.",
      "Antes de intervir em máquina ou circuito: desligue, bloqueie com cadeado na chave ou no disjuntor, coloque etiqueta com nome e motivo, e teste para confirmar que não há energia. A chave do cadeado fica com quem está trabalhando.",
      "Lembre-se de outras energias além da elétrica: molas, sistemas hidráulicos e pneumáticos, peças que podem cair por gravidade.",
      "Só quem colocou o bloqueio pode retirá-lo, depois de conferir que todos estão afastados."
    ],
    caso: "Um mecânico limpava as pás de uma argamassadeira desligada só no botão. Um colega, sem ver, ligou para testar. O mecânico teve a mão prensada.",
    perguntas: [
      "Quais equipamentos da obra precisam de bloqueio antes da limpeza?",
      "Por que a chave do cadeado fica com quem trabalha?",
      "Que outras energias podem estar presentes numa máquina?"
    ],
    mensagem: "Cadeado na chave, vida protegida."
  },
  {
    id: "eletrica-chuva",
    titulo: "Eletricidade e água: combinação perigosa",
    categoria: "Eletricidade",
    nr: "NR-10",
    duracao: 4,
    tags: ["eletricidade", "chuva"],
    objetivo: "Alertar para o aumento do risco de choque elétrico em dias de chuva e áreas molhadas.",
    texto: [
      "A água conduz eletricidade e diminui a resistência do corpo. Por isso o risco de choque grave aumenta muito em dias de chuva, em áreas alagadas e quando trabalhamos com mãos ou botinas molhadas.",
      "Antes de ligar ferramentas, verifique cabos e extensões. Não deixe conexões dentro de poças. Proteja quadros e tomadas da chuva.",
      "Ferramenta elétrica que molhou deve ser desligada e avaliada antes do uso. Em caso de alagamento perto de equipamentos elétricos, não entre na água: avise o eletricista para desligar o circuito.",
      "Se alguém levar um choque, não toque na pessoa antes de desligar a energia."
    ],
    caso: "Depois de uma chuva forte, um operário pisou numa poça onde havia uma extensão com emenda mal feita. Levou um choque e caiu, batendo a cabeça.",
    perguntas: [
      "Onde a água costuma acumular na nossa obra?",
      "O que fazer se uma ferramenta molhar?",
      "Como ajudar alguém que está levando choque?"
    ],
    mensagem: "Choveu? Redobre a atenção com a eletricidade."
  },
  {
    id: "eletrica-rede-aerea",
    titulo: "Rede elétrica aérea: distância é segurança",
    categoria: "Eletricidade",
    nr: "NR-10",
    duracao: 5,
    tags: ["eletricidade", "maquinas"],
    objetivo: "Prevenir acidentes por contato ou aproximação de redes elétricas com materiais e máquinas.",
    texto: [
      "Redes de alta tensão podem dar choque mesmo sem contato direto: a eletricidade pode 'saltar' quando algo chega perto demais.",
      "Os acidentes mais comuns são com vergalhões, réguas de alumínio, tubos metálicos e lanças de caminhão munck, guindaste ou bomba de concreto que encostam ou se aproximam da rede.",
      "Antes de começar, identifique as redes próximas. Respeite as distâncias de segurança, sinalize e, se for preciso trabalhar perto, solicite à concessionária o desligamento ou a proteção da rede.",
      "Operador de máquina com lança deve ter um sinaleiro observando a aproximação da rede. Na dúvida, pare."
    ],
    caso: "Dois armadores carregavam uma barra de ferro de 12 metros na vertical para virá-la. A ponta se aproximou da rede da rua e ambos receberam uma descarga elétrica.",
    perguntas: [
      "Existe rede elétrica próxima à nossa obra? Onde?",
      "Quais materiais e máquinas aqui podem chegar perto dela?",
      "Quem devemos chamar antes de trabalhar perto da rede?"
    ],
    mensagem: "Não precisa encostar para morrer: mantenha distância da rede."
  }
]);
