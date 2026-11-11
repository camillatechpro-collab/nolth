// Biblioteca — parte 4: serviços de obra, equipamentos, materiais e emergência.
window.DDS_LIB = (window.DDS_LIB || []).concat([
  {
    id: "formas-escoramento",
    titulo: "Formas e escoramento de laje: a base de tudo",
    categoria: "Estrutura e concretagem",
    nr: "NR-18",
    duracao: 5,
    tags: ["altura", "comportamento"],
    objetivo: "Prevenir colapsos de formas e escoramentos durante e após a concretagem.",
    texto: [
      "Quando um escoramento cede, a laje inteira pode desabar com concreto, máquinas e pessoas em cima. Esse é um dos acidentes mais graves da construção.",
      "O escoramento deve seguir o projeto: escoras aprumadas, contraventadas, apoiadas em base firme e sem emendas improvisadas. Escora de madeira rachada, torta ou com emenda de pregos não deve ser usada.",
      "Antes da concretagem, o responsável precisa conferir e liberar formas e escoras. Durante a concretagem, alguém deve ficar observando o escoramento por baixo, a uma distância segura, para avisar sobre qualquer deformação.",
      "Nunca retire escoras antes do prazo definido pelo engenheiro, nem para passar material."
    ],
    caso: "Durante a concretagem, uma escora apoiada sobre entulho afundou. Parte da forma cedeu e dois trabalhadores que estavam embaixo, retirando sobras de madeira, foram atingidos.",
    perguntas: [
      "Quem libera o escoramento antes da concretagem?",
      "Por que a base da escora precisa ser firme?",
      "O que fazer se perceber a forma deformando durante o lançamento?"
    ],
    mensagem: "Escora bem montada segura a laje e a vida de todos embaixo dela."
  },
  {
    id: "concretagem",
    titulo: "Concretagem: bomba, mangote e vibrador",
    categoria: "Estrutura e concretagem",
    nr: "NR-18 / NR-12",
    duracao: 5,
    tags: ["maquinas", "epi"],
    objetivo: "Destacar os riscos do dia de concretagem e como organizar a equipe.",
    texto: [
      "O dia de concretagem é corrido: caminhões chegando, bomba funcionando, mangote pesado se movendo, muita gente na laje. É um dia em que a organização faz toda a diferença.",
      "O mangote da bomba pode chicotear se houver entupimento ou ar na linha. Ninguém deve ficar na frente da saída do mangote nem se apoiar nele. A lança da bomba deve ficar longe da rede elétrica, com um sinaleiro orientando.",
      "O vibrador de concreto deve ter cabo e conexões em bom estado e ser usado com luvas e botas impermeáveis. Respeite as bordas: na correria, ninguém pode esquecer o guarda-corpo e o cinto.",
      "Concreto na pele queima. Use luvas, botas de cano alto e óculos."
    ],
    caso: "Com o mangote entupido, o operador aumentou a pressão da bomba. O mangote chicoteou e atingiu o ajudante que o segurava, jogando-o contra o guarda-corpo.",
    perguntas: [
      "Quem coordena a equipe no dia da concretagem?",
      "O que fazer quando o mangote entope?",
      "Quais EPIs são necessários para lançar e vibrar o concreto?"
    ],
    mensagem: "Concretagem segura é concretagem planejada."
  },
  {
    id: "armacao",
    titulo: "Armação: corte e dobra de ferro com segurança",
    categoria: "Estrutura e concretagem",
    nr: "NR-18",
    duracao: 4,
    tags: ["ferramentas", "ergonomia", "epi"],
    objetivo: "Prevenir cortes, perfurações e lesões no serviço de armação.",
    texto: [
      "Armadores lidam com peças pesadas, pontas afiadas e ferramentas de corte. Cortes nas mãos, perfurações e dores nas costas são os problemas mais comuns.",
      "A bancada de armação deve ficar em local firme, coberto e organizado. A máquina de corte e dobra precisa ter proteções e só pode ser operada por quem foi treinado. Use luvas de vaqueta, óculos e botina.",
      "Barras longas devem ser transportadas por duas pessoas, sempre atentas à rede elétrica e a quem está por perto. Armaduras prontas devem ser içadas com acessórios adequados, nunca carregadas no ombro por grandes distâncias.",
      "Ao amarrar ferragem, varie a postura e evite ficar muito tempo curvado."
    ],
    caso: "Um armador cortava ferro com a policorte apoiada no chão e segurava a barra com o pé. A barra girou e o disco atingiu a botina, ferindo o pé.",
    perguntas: [
      "Como está a organização da nossa central de armação?",
      "Como transportar barras longas com segurança?",
      "Quais as posturas que mais cansam no serviço de armação?"
    ],
    mensagem: "Ferro tem ponta e peso: respeite os dois."
  },
  {
    id: "elevador-obra",
    titulo: "Elevador de obra: regras para usar sem risco",
    categoria: "Máquinas e equipamentos",
    nr: "NR-18",
    duracao: 5,
    tags: ["maquinas", "altura"],
    objetivo: "Reforçar as regras de uso do elevador de carga e de passageiros da obra.",
    texto: [
      "O elevador de obra transporta pessoas e materiais todos os dias. Por isso precisa de manutenção em dia, operador capacitado e regras claras.",
      "Elevador de carga não transporta pessoas. No elevador de passageiros, respeite a lotação e a capacidade indicada na placa. As cancelas dos pavimentos devem permanecer fechadas e só abrir quando a cabine estiver parada no andar.",
      "Ninguém debruça na torre, coloca a cabeça ou os braços para fora ou fica embaixo da cabine. Carga deve estar bem distribuída e amarrada, sem sair para fora da cabine.",
      "Ruído estranho, tranco ou falha nos dispositivos de segurança? O elevador para e só volta depois de avaliado."
    ],
    caso: "Um ajudante abriu a cancela do pavimento para chamar o elevador e se inclinou para olhar a torre. A cabine estava descendo e por pouco não o atingiu.",
    perguntas: [
      "Qual é a capacidade do nosso elevador?",
      "Por que a cancela deve ficar sempre fechada?",
      "Quem é o operador autorizado hoje?"
    ],
    mensagem: "Elevador de obra tem regra. Respeite todas, todos os dias."
  },
  {
    id: "plataforma-elevatoria",
    titulo: "Plataforma elevatória (PEMT): cuidado lá em cima",
    categoria: "Máquinas e equipamentos",
    nr: "NR-18 / NR-12",
    duracao: 5,
    tags: ["altura", "maquinas"],
    objetivo: "Orientar o uso seguro de plataformas tipo tesoura e lança.",
    texto: [
      "Plataformas elevatórias facilitam o trabalho em altura, mas podem tombar, prensar o operador contra estruturas ou bater em redes elétricas.",
      "Só opera quem foi treinado e autorizado. Antes de usar, faça a inspeção diária: controles, alarmes, pneus, nível de bateria ou combustível, guarda-corpo e botão de emergência. Verifique o piso: buracos, desníveis e bordas de laje podem causar tombamento.",
      "Na plataforma tipo lança, use cinto preso ao ponto de ancoragem da cesta. Não suba no guarda-corpo, não ultrapasse a capacidade e não use a plataforma como guindaste.",
      "Vento forte é motivo para parar. Atenção também ao subir perto de vigas e lajes, para não ser prensado."
    ],
    caso: "Um eletricista subia a plataforma tipo lança olhando para baixo. Foi prensado entre o guarda-corpo da cesta e uma viga metálica e sofreu fraturas nas costelas.",
    perguntas: [
      "Quais itens a inspeção diária da plataforma verifica?",
      "Onde o cinto deve ser preso na plataforma tipo lança?",
      "Como evitar ser prensado contra a estrutura?"
    ],
    mensagem: "Plataforma inspecionada e piso conferido antes de subir."
  },
  {
    id: "martelete-vibracao",
    titulo: "Martelete e rompedor: vibração, ruído e poeira",
    categoria: "Ferramentas",
    nr: "NR-15",
    duracao: 4,
    tags: ["ferramentas", "poeira", "saude", "epi"],
    objetivo: "Prevenir lesões por vibração, perda auditiva e doenças respiratórias.",
    texto: [
      "O martelete junta três riscos de uma vez: vibração nas mãos e braços, ruído alto e poeira de sílica. Usado por muito tempo, pode causar dormência, perda de força nas mãos, surdez e problemas no pulmão.",
      "Revezar a tarefa entre a equipe e fazer pausas reduz a exposição. Deixe a ferramenta fazer o trabalho: não force o corpo contra ela. Mantenha a ponteira afiada e a ferramenta revisada, porque ferramenta desregulada vibra mais.",
      "Use protetor auricular, óculos, máscara PFF2 e luvas. Sempre que possível, umedeça o local para reduzir a poeira.",
      "Formigamento ou dedos brancos e frios? Comunique e procure avaliação médica."
    ],
    caso: "Um operário que passou meses quebrando concreto com martelete, sem revezar, começou a sentir as mãos dormentes à noite e a deixar cair objetos.",
    perguntas: [
      "Como podemos revezar o martelete na equipe?",
      "Quais EPIs são necessários para esse serviço?",
      "Alguém sente formigamento nas mãos depois do trabalho?"
    ],
    mensagem: "Revezar, pausar e proteger: assim o martelete não cobra a conta."
  },
  {
    id: "demolicao",
    titulo: "Demolição: planejar antes de derrubar",
    categoria: "Demolição",
    nr: "NR-18",
    duracao: 5,
    tags: ["altura", "poeira", "eletricidade"],
    objetivo: "Conscientizar sobre os riscos de desabamento e projeção de materiais em demolições.",
    texto: [
      "Demolir parece fácil, mas é um dos serviços mais perigosos. Paredes, lajes e telhados podem cair de forma inesperada quando a estrutura perde o apoio.",
      "Antes de começar, as instalações de energia, água e gás devem ser desligadas e o serviço planejado por profissional habilitado. A demolição segue uma ordem: de cima para baixo, retirando primeiro os materiais frágeis, como vidros e telhas.",
      "A área deve ser isolada para os vizinhos e pedestres. Entulho desce por calhas fechadas, nunca jogado. Não acumule entulho sobre lajes, porque o peso pode provocar o desabamento.",
      "Use capacete, óculos, máscara, luvas e protetor auricular. Umedeça para reduzir a poeira."
    ],
    caso: "Ao demolir uma parede de apoio sem avaliar a estrutura, a laje de cima perdeu sustentação e desabou parcialmente sobre a equipe.",
    perguntas: [
      "As instalações do local a ser demolido estão desligadas?",
      "Por que a ordem da demolição é importante?",
      "Como o entulho deve ser retirado?"
    ],
    mensagem: "Na demolição, quem planeja não se machuca."
  },
  {
    id: "area-vivencia",
    titulo: "Área de vivência: higiene e respeito ao espaço de todos",
    categoria: "Saúde e bem-estar",
    nr: "NR-18 / NR-24",
    duracao: 4,
    tags: ["saude", "comportamento"],
    objetivo: "Valorizar o uso correto de banheiros, vestiários e refeitório.",
    texto: [
      "Banheiro, vestiário, refeitório e bebedouro fazem parte da segurança e da saúde no trabalho. Um ambiente sujo espalha doenças, atrai insetos e ratos e deixa todo mundo desconfortável.",
      "Cada um faz a sua parte: dar descarga, não jogar papel no chão, guardar as roupas no armário, lavar as mãos antes de comer e deixar a mesa limpa.",
      "Não se come no local de trabalho, no meio da poeira e dos produtos químicos. Marmitas devem ser aquecidas e guardadas corretamente.",
      "Encontrou algo quebrado, falta de sabão ou papel, ou problema com a água? Comunique para que seja resolvido."
    ],
    caso: "Na obra, várias pessoas tiveram diarreia na mesma semana. A investigação mostrou que o filtro do bebedouro não era trocado havia meses e que muitos comiam sem lavar as mãos.",
    perguntas: [
      "O que pode melhorar na nossa área de vivência?",
      "Por que não devemos comer no local de trabalho?",
      "Quando foi a última limpeza do bebedouro?"
    ],
    mensagem: "Área de vivência limpa é saúde para toda a equipe."
  },
  {
    id: "armazenamento-materiais",
    titulo: "Armazenamento e empilhamento de materiais",
    categoria: "Ordem e limpeza",
    nr: "NR-18 / NR-11",
    duracao: 4,
    tags: ["comportamento", "ergonomia"],
    objetivo: "Prevenir desmoronamento de pilhas e acidentes no almoxarifado.",
    texto: [
      "Pilhas de blocos, sacos de cimento, tubos e chapas podem tombar e esmagar quem estiver perto. Muitas vezes isso acontece porque a pilha foi montada alta demais ou sobre piso irregular.",
      "Empilhe em piso firme e nivelado, respeitando a altura máxima e travando as camadas. Sacos de cimento devem ficar sobre estrados, longe da umidade e das paredes. Tubos e barras precisam de calços laterais para não rolarem.",
      "Materiais mais pesados ficam embaixo; os mais usados, em local de fácil acesso. Mantenha corredores livres entre as pilhas.",
      "Não retire material de baixo da pilha. Não suba nas pilhas para pegar algo."
    ],
    caso: "Um servente retirou blocos da parte de baixo de uma pilha alta para ganhar tempo. A pilha tombou sobre a perna dele.",
    perguntas: [
      "Qual pilha da obra está mais instável hoje?",
      "Como armazenar tubos e barras para que não rolem?",
      "Qual a altura máxima das pilhas no nosso canteiro?"
    ],
    mensagem: "Material bem armazenado não cai em ninguém."
  },
  {
    id: "carrinho-transporte",
    titulo: "Carrinho de mão e transporte de materiais",
    categoria: "Ergonomia",
    nr: "NR-17",
    duracao: 4,
    tags: ["ergonomia", "comportamento"],
    objetivo: "Orientar o transporte seguro de materiais com carrinho e giricas.",
    texto: [
      "O carrinho de mão é usado o dia todo e, mal usado, causa dores nas costas, quedas e lesões nos punhos.",
      "Verifique o pneu, os braços e a caçamba antes de usar. Não encha demais: carga excessiva tira o equilíbrio e força a coluna. Levante o carrinho com as pernas, mantendo as costas retas.",
      "Use rampas firmes, largas e com guarda-corpo, sem degraus ou tábuas soltas. Em descida, mantenha o carrinho à frente e controle a velocidade.",
      "Caminho livre é essencial. Cabos, mangueiras e entulho no trajeto fazem o carrinho virar."
    ],
    caso: "Um servente descia uma rampa de tábuas com o carrinho cheio de entulho. A roda prendeu numa tábua solta, o carrinho virou e ele caiu da rampa.",
    perguntas: [
      "As rampas da obra estão firmes e com proteção?",
      "Qual é a carga certa para o carrinho?",
      "Como descer uma rampa com segurança?"
    ],
    mensagem: "Carrinho cheio demais pesa na coluna e no risco."
  },
  {
    id: "pintura-solventes",
    titulo: "Pintura e solventes em locais fechados",
    categoria: "Produtos químicos",
    nr: "NR-26",
    duracao: 4,
    tags: ["fogo", "saude", "epi"],
    objetivo: "Prevenir intoxicações e incêndios ao usar tintas e solventes.",
    texto: [
      "Tintas, vernizes, thinner e colas liberam vapores que causam dor de cabeça, tontura e enjoo. Em locais fechados, os vapores se acumulam e também podem pegar fogo com uma faísca.",
      "Mantenha portas e janelas abertas e, quando necessário, use ventilação forçada. Use máscara com filtro químico adequado, luvas e óculos.",
      "Não fume, não use maçarico ou esmerilhadeira e não ligue equipamentos que soltem faísca perto de solventes. Feche as latas após o uso e não deixe panos sujos de solvente amontoados.",
      "Sentiu tontura ou enjoo? Saia para o ar livre e avise o encarregado."
    ],
    caso: "Um pintor aplicava verniz num banheiro sem janela. Depois de algum tempo, ficou tonto, caiu da escada e bateu a cabeça.",
    perguntas: [
      "Quais locais da obra têm pouca ventilação?",
      "Qual máscara é a correta para tinta e solvente?",
      "O que fazer com panos sujos de solvente?"
    ],
    mensagem: "Ar livre e máscara certa: vapor de solvente não é brincadeira."
  },
  {
    id: "cilindros-gas",
    titulo: "Cilindros de gás: GLP, oxigênio e acetileno",
    categoria: "Incêndio e emergência",
    nr: "NR-18 / NR-20",
    duracao: 5,
    tags: ["fogo"],
    objetivo: "Orientar o manuseio, transporte e armazenamento seguro de cilindros.",
    texto: [
      "Um cilindro de gás danificado pode explodir ou virar um projétil. Vazamentos podem causar incêndio, explosão ou asfixia.",
      "Armazene os cilindros em pé, presos com corrente, em local ventilado, sinalizado e longe de calor e de materiais inflamáveis. Oxigênio fica separado dos gases combustíveis. Cilindros vazios e cheios devem ser identificados.",
      "Transporte com carrinho próprio e capacete de proteção da válvula. Nunca role, arraste ou use o cilindro como apoio. Não use óleo ou graxa nas válvulas de oxigênio.",
      "Para verificar vazamentos, use espuma de sabão, nunca uma chama."
    ],
    caso: "Um cilindro de acetileno solto caiu ao ser esbarrado por um carrinho. A válvula quebrou e houve vazamento perto de onde se soldava, causando um princípio de incêndio.",
    perguntas: [
      "Os nossos cilindros estão presos e bem armazenados?",
      "Por que não se usa óleo na válvula de oxigênio?",
      "Como testar um vazamento com segurança?"
    ],
    mensagem: "Cilindro em pé, preso e longe do fogo."
  },
  {
    id: "ar-comprimido",
    titulo: "Ar comprimido: força que machuca",
    categoria: "Máquinas e equipamentos",
    nr: "NR-12",
    duracao: 4,
    tags: ["maquinas", "poeira"],
    objetivo: "Prevenir acidentes com compressores, mangueiras e jatos de ar.",
    texto: [
      "O ar comprimido parece inofensivo, mas um jato direto pode lesionar olhos e ouvidos, lançar partículas em alta velocidade e até entrar na pele, causando lesões graves.",
      "Nunca aponte o jato para pessoas e nunca use ar comprimido para limpar a roupa ou o corpo. Use óculos ao limpar peças.",
      "Verifique mangueiras e conexões antes de usar: mangueiras rachadas ou engates soltos podem se soltar e chicotear. Use travas nas conexões e despressurize a linha antes de desconectar.",
      "O compressor deve ter manutenção, válvula de segurança e manômetro funcionando."
    ],
    caso: "Por brincadeira, um trabalhador apontou o jato de ar comprimido para o rosto de um colega. Partículas de poeira atingiram o olho, causando lesão na córnea.",
    perguntas: [
      "Por que não limpar a roupa com ar comprimido?",
      "O que fazer antes de desconectar uma mangueira?",
      "Onde está o compressor e quem cuida dele?"
    ],
    mensagem: "Ar comprimido não é brinquedo nem escova de roupa."
  },
  {
    id: "finca-pino",
    titulo: "Pistola finca-pino: ferramenta de impacto",
    categoria: "Ferramentas",
    nr: "NR-18",
    duracao: 4,
    tags: ["ferramentas", "epi"],
    objetivo: "Orientar o uso seguro de ferramentas de fixação a pólvora ou a gás.",
    texto: [
      "A pistola finca-pino dispara pinos com força parecida com a de uma arma de fogo. Um pino que atravessa o material ou ricocheteia pode ferir gravemente.",
      "Só opera quem foi treinado e autorizado. Verifique o material base: não use em materiais muito duros, frágeis ou finos, nem perto de bordas.",
      "Mantenha a pistola perpendicular à superfície. Nunca aponte para alguém, mesmo descarregada. Garanta que ninguém esteja do outro lado da parede ou da laje.",
      "Use óculos, protetor auricular e luvas. Guarde a ferramenta descarregada e os cartuchos em local seguro."
    ],
    caso: "Um pino atravessou uma parede fina de drywall e atingiu o braço de um eletricista que trabalhava do outro lado.",
    perguntas: [
      "Quem está autorizado a usar a finca-pino aqui?",
      "Em que materiais não se deve usar?",
      "Como garantir que não há ninguém do outro lado?"
    ],
    mensagem: "Finca-pino só na mão de quem é treinado."
  },
  {
    id: "furadeira",
    titulo: "Furadeira e parafusadeira: o tranco que torce o punho",
    categoria: "Ferramentas",
    nr: "NR-12",
    duracao: 4,
    tags: ["ferramentas", "eletricidade"],
    objetivo: "Prevenir lesões no punho, enroscamentos e choques ao usar furadeiras.",
    texto: [
      "Quando a broca trava no material, a furadeira gira com força e pode torcer ou quebrar o punho do operador. Mangas largas, luvas e cabelos compridos podem enroscar na broca.",
      "Segure a ferramenta com firmeza e use o punho auxiliar. Fixe peças pequenas com grampo ou morsa, nunca com a mão. Use a broca certa para cada material.",
      "Antes de furar paredes e lajes, verifique se não há eletrodutos ou tubulações embutidas. Confira o cabo, o plugue e o estado da carcaça.",
      "Use óculos de proteção. Desligue e retire da tomada antes de trocar a broca."
    ],
    caso: "Ao furar uma viga metálica sem o punho auxiliar, a broca travou e a furadeira girou violentamente, causando uma fratura no punho do montador.",
    perguntas: [
      "Por que usar o punho auxiliar?",
      "Como prender peças pequenas antes de furar?",
      "Como saber se há eletroduto na parede?"
    ],
    mensagem: "Firmeza na ferramenta e atenção ao material."
  },
  {
    id: "iluminacao-noturno",
    titulo: "Trabalho noturno e iluminação",
    categoria: "Comportamento seguro",
    nr: "NR-18",
    duracao: 4,
    tags: ["comportamento", "eletricidade"],
    objetivo: "Alertar para os riscos adicionais do trabalho com pouca luz ou à noite.",
    texto: [
      "Com pouca luz, buracos, pontas de ferro, aberturas e degraus ficam escondidos. À noite, o cansaço também aumenta e a atenção diminui.",
      "Todas as frentes de trabalho, escadas, passagens e acessos devem ter iluminação adequada. Luminárias provisórias precisam ser instaladas por eletricista, com cabos protegidos e sem gambiarras.",
      "Em serviços noturnos, use roupas refletivas, planeje as tarefas com mais cuidado e evite atividades de maior risco quando possível.",
      "Lâmpada queimada ou local escuro? Comunique antes de trabalhar ali."
    ],
    caso: "Em um serviço noturno, um trabalhador caminhou por uma área sem iluminação e caiu em uma vala aberta que não estava sinalizada.",
    perguntas: [
      "Quais locais da obra estão mal iluminados?",
      "Como o cansaço afeta quem trabalha à noite?",
      "O que muda no planejamento de um serviço noturno?"
    ],
    mensagem: "Onde não se enxerga, não se trabalha."
  },
  {
    id: "sinalizacao",
    titulo: "Sinalização de segurança: cores e placas que falam",
    categoria: "Comportamento seguro",
    nr: "NR-26",
    duracao: 4,
    tags: ["comportamento"],
    objetivo: "Ensinar o significado das cores e placas de segurança.",
    texto: [
      "As placas e cores de segurança são uma linguagem: avisam sobre perigos, obrigações e equipamentos de emergência, mesmo para quem acabou de chegar à obra.",
      "Vermelho indica equipamentos de combate a incêndio e proibições. Amarelo indica atenção e cuidado. Azul indica obrigação, como o uso de EPI. Verde indica segurança, saídas e primeiros socorros.",
      "Fitas zebradas e cones isolam áreas de risco: não passe por baixo nem retire sem autorização.",
      "Sinalização apagada, caída ou escondida não protege ninguém. Comunique quando encontrar uma assim."
    ],
    caso: "Um ajudante passou por baixo da fita zebrada para encurtar o caminho e entrou na área onde a grua içava uma carga. Por pouco não foi atingido.",
    perguntas: [
      "O que significa a cor azul nas placas?",
      "Quais áreas estão isoladas hoje?",
      "Existe alguma placa na obra que precisa ser recolocada?"
    ],
    mensagem: "Placa não é enfeite: leia, entenda e respeite."
  },
  {
    id: "plano-emergencia",
    titulo: "Plano de emergência e rota de fuga",
    categoria: "Incêndio e emergência",
    nr: "NR-23",
    duracao: 5,
    tags: ["fogo", "primeiros-socorros"],
    objetivo: "Garantir que todos saibam como agir e para onde ir em uma emergência.",
    texto: [
      "Incêndio, desabamento, vazamento de gás ou acidente grave: em uma emergência não há tempo para descobrir para onde correr.",
      "Todos devem conhecer o sinal de alarme, as rotas de fuga, as saídas e o ponto de encontro. As rotas e saídas precisam estar desobstruídas e sinalizadas.",
      "Ao ouvir o alarme, interrompa o trabalho, desligue os equipamentos se puder fazer isso com segurança e siga para o ponto de encontro sem correr. Não volte para buscar objetos.",
      "No ponto de encontro, o encarregado confere se todos estão presentes. Saber quem falta ajuda o resgate."
    ],
    caso: "Durante um princípio de incêndio, alguns trabalhadores não sabiam onde ficava o ponto de encontro e voltaram ao andar para buscar as mochilas. Atrapalharam a ação da brigada.",
    perguntas: [
      "Onde fica o nosso ponto de encontro?",
      "Qual é o sinal de alarme da obra?",
      "Quem faz parte da brigada de emergência?"
    ],
    mensagem: "Na emergência, saber o caminho salva vidas."
  },
  {
    id: "animais-peconhentos",
    titulo: "Animais peçonhentos: cobras, escorpiões e aranhas",
    categoria: "Clima e meio ambiente",
    nr: "NR-21",
    duracao: 4,
    tags: ["chuva", "calor", "primeiros-socorros"],
    objetivo: "Prevenir picadas e orientar os primeiros cuidados.",
    texto: [
      "Entulho, pilhas de madeira, tijolos e mato acumulado são esconderijos perfeitos para escorpiões, aranhas e cobras. Em épocas de calor e chuva, eles aparecem mais.",
      "Mantenha o canteiro limpo e o mato roçado. Não coloque a mão em buracos, frestas ou embaixo de materiais sem olhar antes. Use luvas e botinas. Sacuda as botas, luvas e roupas antes de vesti-las.",
      "Em caso de picada, mantenha a vítima calma e deitada, lave o local com água e sabão e leve imediatamente ao atendimento. Se possível, fotografe o animal com segurança.",
      "Não faça torniquete, não corte nem chupe o local e não use receitas caseiras."
    ],
    caso: "Um servente foi picado por um escorpião ao pegar uma tábua de uma pilha antiga, sem luvas. Precisou ser levado às pressas ao hospital.",
    perguntas: [
      "Quais locais da obra podem esconder esses animais?",
      "O que fazer ao encontrar uma cobra no canteiro?",
      "Quais cuidados não devemos fazer em caso de picada?"
    ],
    mensagem: "Olhe antes de pôr a mão."
  },
  {
    id: "protecao-respiratoria",
    titulo: "Máscaras: qual usar e como vedar",
    categoria: "EPI",
    nr: "NR-6",
    duracao: 5,
    tags: ["epi", "poeira", "saude"],
    objetivo: "Explicar os tipos de proteção respiratória e o uso correto.",
    texto: [
      "Nem toda máscara protege contra tudo. A PFF2 protege contra poeiras e névoas, como as de cimento, gesso e corte de concreto. Para vapores de tintas e solventes, é preciso respirador com filtro químico. Máscara cirúrgica ou de pano não serve como EPI.",
      "Para funcionar, a máscara deve ficar bem vedada no rosto: ajuste as tiras, molde o clipe nasal e faça o teste de vedação, inspirando com força e verificando se a máscara se encolhe sem entrar ar pelas laterais.",
      "Barba impede a vedação. Troque a PFF2 quando estiver suja, úmida, deformada ou difícil de respirar. Filtros químicos têm prazo e devem ser trocados conforme a orientação.",
      "Guarde a máscara em local limpo, nunca pendurada no pescoço no meio da poeira."
    ],
    caso: "Um pintor usava máscara de poeira para aplicar tinta à base de solvente. Passou mal com os vapores, porque a máscara não tinha filtro para gases.",
    perguntas: [
      "Qual máscara é a certa para a sua tarefa?",
      "Como se faz o teste de vedação?",
      "Quando a máscara deve ser trocada?"
    ],
    mensagem: "Máscara certa e bem vedada, pulmão protegido."
  },
  {
    id: "botina",
    titulo: "Botina de segurança: pés protegidos",
    categoria: "EPI",
    nr: "NR-6",
    duracao: 4,
    tags: ["epi"],
    objetivo: "Reforçar a importância da botina adequada e em bom estado.",
    texto: [
      "Pregos, pontas de ferro, objetos que caem, piso escorregadio e concreto: os pés estão expostos a muitos riscos na obra.",
      "A botina de segurança deve ter biqueira, solado resistente e antiderrapante. Para concretagem e áreas molhadas, use bota de borracha de cano alto. Para eletricidade, a botina deve ser sem partes metálicas e adequada ao risco.",
      "Botina furada, com solado gasto ou descolado já não protege. Peça a troca. Não ande na obra de chinelo, tênis ou sapato comum, nem mesmo 'só para buscar algo'.",
      "Use meias limpas e deixe a botina secar depois do expediente, para evitar frieiras."
    ],
    caso: "Um ajudante usava a botina com o solado gasto e um furo. Pisou em um prego de uma tábua de desforma, que atravessou o pé.",
    perguntas: [
      "Sua botina está em bom estado?",
      "Quando é necessário usar bota de borracha?",
      "Como cuidar dos pés no dia a dia?"
    ],
    mensagem: "Pé protegido, passo seguro."
  },
  {
    id: "uniforme",
    titulo: "Uniforme e vestimenta adequada",
    categoria: "EPI",
    nr: "NR-6 / NR-18",
    duracao: 4,
    tags: ["epi", "calor", "maquinas"],
    objetivo: "Mostrar que a roupa certa também é proteção.",
    texto: [
      "Bermuda, camiseta regata, roupa rasgada ou muito larga deixam o corpo exposto a cortes, queimaduras, sol e produtos químicos. Roupas largas e acessórios também podem enroscar em máquinas.",
      "Use o uniforme fornecido, com calça comprida e camisa, de preferência de manga longa para quem trabalha no sol. Em áreas com tráfego de veículos, use colete refletivo.",
      "Evite correntes, anéis, pulseiras e relógios em trabalhos com máquinas e eletricidade. Cabelos compridos devem ficar presos.",
      "Roupa encharcada de concreto, óleo ou solvente deve ser trocada."
    ],
    caso: "A manga larga da camisa de um operador enroscou no eixo de uma bomba que estava sem proteção. O braço foi puxado e ele sofreu uma luxação no ombro.",
    perguntas: [
      "Por que manga longa ajuda quem trabalha no sol?",
      "Quais acessórios devemos tirar antes de trabalhar com máquinas?",
      "Seu uniforme está em boas condições?"
    ],
    mensagem: "A roupa certa é a primeira camada de proteção."
  },
  {
    id: "balancim",
    titulo: "Balancim e andaime suspenso: fachada com segurança",
    categoria: "Andaimes",
    nr: "NR-18 / NR-35",
    duracao: 5,
    tags: ["altura", "chuva"],
    objetivo: "Reforçar os cuidados obrigatórios no uso de balancins e cadeiras suspensas.",
    texto: [
      "Balancins e andaimes suspensos são usados em fachadas, pinturas e revestimentos. Uma falha na fixação, no cabo ou no guincho pode derrubar a plataforma inteira.",
      "O equipamento deve ser instalado conforme o projeto e liberado antes do uso. As vigas de sustentação precisam estar bem fixadas na estrutura, nunca apenas com contrapeso improvisado de sacos de areia ou entulho.",
      "Cada trabalhador usa cinto paraquedista preso a um trava-quedas em uma linha de vida independente, fixada em ponto diferente do balancim. Assim, se o balancim cair, o trabalhador continua preso.",
      "Inspecione cabos, guinchos, freios e guarda-corpos todos os dias. Não use com vento forte ou chuva e não ultrapasse a capacidade de carga."
    ],
    caso: "O cabo de um balancim rompeu durante a pintura de uma fachada. Um dos pintores estava com o trava-quedas preso em linha de vida independente e ficou suspenso. O outro, preso ao próprio balancim, caiu junto com ele.",
    perguntas: [
      "Por que a linha de vida deve ser independente do balancim?",
      "O que verificar no balancim antes de começar?",
      "Em quais condições de tempo o serviço deve parar?"
    ],
    mensagem: "No balancim, sua linha de vida não pode depender dele."
  }
]);
