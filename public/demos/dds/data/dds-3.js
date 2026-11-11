// Biblioteca — parte 3: comportamento seguro, saúde, ergonomia, clima e primeiros socorros.
window.DDS_LIB = (window.DDS_LIB || []).concat([
  {
    id: "comport-pressa",
    titulo: "A pressa é inimiga da segurança",
    categoria: "Comportamento seguro",
    nr: "NR-1",
    duracao: 4,
    tags: ["comportamento"],
    objetivo: "Refletir sobre como a pressa leva a atalhos e acidentes.",
    texto: [
      "Prazo apertado, concreto chegando, chefe cobrando. É nessas horas que a gente pula etapas: deixa de prender o cinto, não espera a máquina parar, sobe na escada sem ninguém segurando.",
      "A maioria dos acidentes não acontece por falta de conhecimento, mas por atalhos. Sabemos o jeito certo, mas fazemos o jeito rápido.",
      "Fazer certo leva poucos minutos a mais. Um acidente custa semanas, meses ou uma vida, e ainda para a obra inteira.",
      "Se a pressão por prazo estiver colocando alguém em risco, fale com o encarregado ou com o técnico. Ninguém é obrigado a trabalhar de forma insegura."
    ],
    caso: "Para terminar a concretagem antes da chuva, um ajudante resolveu não prender o cinto 'só para puxar a mangueira'. Escorregou da borda e caiu na periferia da laje.",
    perguntas: [
      "Em que momentos do dia sentimos mais pressa?",
      "Qual atalho você já viu alguém tomar?",
      "Como podemos planejar o serviço para não ter que correr?"
    ],
    mensagem: "Chegar mais cedo em casa começa trabalhando sem pressa."
  },
  {
    id: "comport-recusa",
    titulo: "Direito de recusa: pare quando o risco é grave",
    categoria: "Comportamento seguro",
    nr: "NR-1",
    duracao: 4,
    tags: ["comportamento"],
    objetivo: "Informar que o trabalhador pode interromper uma atividade quando houver risco grave e iminente.",
    texto: [
      "Todo trabalhador tem o direito de interromper uma tarefa quando perceber que há risco grave e iminente para a sua vida ou de outras pessoas. Isso está nas normas de segurança e não é motivo de punição.",
      "Exemplos: andaime sem travamento, vala sem escoramento, máquina sem proteção, falta do EPI necessário, rede elétrica próxima sem desligamento.",
      "Ao parar, comunique imediatamente o encarregado ou o técnico de segurança e explique o motivo. O serviço só volta quando o risco for controlado.",
      "Parar não é corpo mole. É responsabilidade. A obra precisa de você inteiro amanhã."
    ],
    caso: "Um armador se recusou a subir num andaime sem guarda-corpo e avisou o técnico. Na inspeção, descobriram que o andaime também estava sem ancoragem. Ele evitou um acidente grave.",
    perguntas: [
      "Você se sentiria à vontade para parar um serviço inseguro?",
      "A quem devemos comunicar?",
      "Que situações aqui na obra justificariam parar o trabalho?"
    ],
    mensagem: "Na dúvida, pare. Sua vida vale mais que qualquer prazo."
  },
  {
    id: "comport-quase-acidente",
    titulo: "Quase-acidente: o aviso que não podemos ignorar",
    categoria: "Comportamento seguro",
    nr: "NR-1",
    duracao: 4,
    tags: ["comportamento"],
    objetivo: "Incentivar a comunicação de quase-acidentes e condições inseguras.",
    texto: [
      "Para cada acidente grave, acontecem dezenas de pequenos incidentes e centenas de quase-acidentes antes. Aquele martelo que caiu e não acertou ninguém, aquele escorregão que não virou queda.",
      "O quase-acidente é um aviso gratuito: mostra onde o próximo acidente pode acontecer. Se ninguém fala, o problema continua lá esperando a próxima pessoa.",
      "Comunicar não é dedurar ninguém. O objetivo é corrigir a condição, não procurar culpados.",
      "Viu, quase aconteceu? Conte ao encarregado ou ao técnico ainda hoje."
    ],
    caso: "Uma tábua solta na rampa fez três pessoas tropeçarem em uma semana, mas ninguém comunicou. Na quarta vez, um carpinteiro caiu e quebrou o punho.",
    perguntas: [
      "Alguém passou por um quase-acidente nesta semana?",
      "Por que muitas pessoas não comunicam?",
      "Como podemos facilitar essa comunicação aqui?"
    ],
    mensagem: "Quase-acidente comunicado é acidente evitado."
  },
  {
    id: "comport-celular",
    titulo: "Celular e distração no trabalho",
    categoria: "Comportamento seguro",
    nr: "NR-1",
    duracao: 4,
    tags: ["comportamento", "transito"],
    objetivo: "Alertar para o risco de usar o celular durante tarefas e deslocamentos na obra.",
    texto: [
      "Olhar o celular por alguns segundos enquanto anda pela obra, opera uma máquina ou está em altura tira toda a sua atenção do ambiente. É assim que se pisa num buraco, numa ponta de ferro ou na frente de uma máquina.",
      "Operador de máquina, sinaleiro e quem trabalha em altura não devem usar o celular durante a tarefa. Fones de ouvido também atrapalham, porque impedem ouvir alarmes e avisos.",
      "Precisa atender? Pare, vá para um local seguro e depois retome o trabalho.",
      "Fora da obra, a regra é a mesma no trânsito: celular e direção não combinam."
    ],
    caso: "Um ajudante descia a escada da obra respondendo uma mensagem, errou o degrau e caiu, torcendo o tornozelo e batendo o rosto.",
    perguntas: [
      "Em quais tarefas o celular é mais perigoso?",
      "Como combinamos as ligações urgentes durante o expediente?",
      "Por que o fone de ouvido é perigoso na obra?"
    ],
    mensagem: "Atenção no trabalho, mensagem no intervalo."
  },
  {
    id: "comport-pensar-antes",
    titulo: "Pare, pense e depois faça",
    categoria: "Comportamento seguro",
    nr: "NR-1 / NR-18",
    duracao: 5,
    tags: ["comportamento"],
    objetivo: "Estimular a análise de riscos rápida antes de iniciar qualquer tarefa.",
    texto: [
      "Antes de começar qualquer serviço, tire um minuto para pensar: o que pode dar errado? Como posso me machucar ou machucar alguém? O que preciso para fazer isso com segurança?",
      "Observe o local: há risco de queda, de choque, de algo cair? O caminho está livre? As ferramentas estão boas? Tenho o EPI certo? Preciso de permissão de trabalho?",
      "Se a tarefa mudou ou apareceu algo diferente do planejado, pare e reavalie. Muitos acidentes acontecem quando surge um imprevisto e a pessoa improvisa.",
      "Essa análise é a base da APR (Análise Preliminar de Risco). Participe e dê sua opinião: você conhece a tarefa melhor que ninguém."
    ],
    caso: "Uma equipe começou a demolir uma parede sem verificar que havia um eletroduto energizado dentro dela. Um dos trabalhadores levou choque ao atingir o cabo com a talhadeira.",
    perguntas: [
      "Quais são os principais riscos da sua tarefa de hoje?",
      "Já aconteceu algum imprevisto que mudou o serviço?",
      "Quem participa da APR na nossa equipe?"
    ],
    mensagem: "Um minuto pensando pode evitar uma vida de arrependimento."
  },
  {
    id: "comport-cuidado-ativo",
    titulo: "Cuidar do colega: segurança é de todos",
    categoria: "Comportamento seguro",
    nr: "NR-1",
    duracao: 4,
    tags: ["comportamento", "saude-mental"],
    objetivo: "Incentivar a cultura de cuidado mútuo e a abordagem respeitosa.",
    texto: [
      "Você vê um colega trabalhando sem cinto, sem óculos, ou passando embaixo de uma carga. O que faz? Muitas vezes ficamos calados para não parecer chato.",
      "Avisar é um ato de cuidado. Faça com respeito: 'Ei, prende o cinto aí, não quero te ver machucado.' Ninguém gosta de levar bronca, mas todo mundo gosta de ser cuidado.",
      "E se for você quem recebe o alerta, agradeça. A pessoa pode ter acabado de evitar o pior dia da sua vida.",
      "Cuidar também é perceber quando alguém não está bem: cansado, nervoso, distraído. Pergunte se está tudo bem."
    ],
    caso: "Um pedreiro percebeu que o colega ia cortar uma peça sem a coifa da serra e o chamou a tempo. Dias depois, o colega contou que estava distraído com problemas em casa.",
    perguntas: [
      "Como você gosta de ser alertado sobre um risco?",
      "Já deixou de avisar alguém por vergonha?",
      "O que fazer quando percebemos que um colega não está bem?"
    ],
    mensagem: "Quem cuida do colega, cuida da equipe inteira."
  },
  {
    id: "ergo-levantamento",
    titulo: "Levantamento manual de cargas: poupe sua coluna",
    categoria: "Ergonomia",
    nr: "NR-17",
    duracao: 5,
    tags: ["ergonomia", "saude"],
    objetivo: "Ensinar a técnica correta para levantar e transportar cargas.",
    texto: [
      "Sacos de cimento, blocos, latas de massa, barras de ferro: a construção exige muito esforço físico. As dores nas costas são uma das principais causas de afastamento.",
      "Para levantar: aproxime-se da carga, afaste os pés na largura dos ombros, dobre os joelhos e mantenha as costas retas. Segure firme, levante usando a força das pernas e mantenha a carga perto do corpo.",
      "Não gire o tronco com a carga: vire com os pés. Se a carga for pesada ou desajeitada, peça ajuda ou use carrinho, giricas e outros meios mecânicos.",
      "Avalie o caminho antes: ele deve estar livre e você precisa enxergar por onde anda."
    ],
    caso: "Um servente levantava sacos de cimento curvando as costas e girando o corpo para colocá-los no carrinho. Sentiu uma dor forte na lombar e foi diagnosticado com hérnia de disco.",
    perguntas: [
      "Quais cargas mais pesadas manuseamos aqui?",
      "Quem pode demonstrar o jeito certo de levantar?",
      "Quais equipamentos temos para evitar o carregamento manual?"
    ],
    mensagem: "Força nas pernas, coluna reta, carga perto do corpo."
  },
  {
    id: "ergo-alongamento",
    titulo: "Alongamento e postura: prepare o corpo para o dia",
    categoria: "Ergonomia",
    nr: "NR-17",
    duracao: 5,
    tags: ["ergonomia", "saude"],
    objetivo: "Incentivar o alongamento antes do trabalho e pausas em atividades repetitivas.",
    texto: [
      "Assim como um atleta aquece antes do jogo, o trabalhador da construção precisa preparar o corpo. Músculos frios se lesionam com mais facilidade.",
      "Alguns minutos de alongamento de pescoço, ombros, braços, punhos, costas e pernas antes de começar ajudam a prevenir distensões e dores.",
      "Em tarefas repetitivas, como assentar cerâmica, amarrar ferragem ou pintar, varie a postura e faça pequenas pausas. Trabalhe com o material na altura certa, evitando ficar muito tempo agachado ou com os braços acima da cabeça.",
      "Dor que não passa é sinal de alerta. Comunique e procure avaliação antes que vire uma lesão séria."
    ],
    caso: "Um azulejista trabalhava o dia todo agachado, sem pausas. Com o tempo, desenvolveu dores fortes nos joelhos e na lombar e precisou se afastar por meses.",
    perguntas: [
      "Vamos fazer juntos um alongamento agora?",
      "Qual parte do corpo mais dói no fim do dia?",
      "Como podemos ajustar a altura do trabalho na sua tarefa?"
    ],
    mensagem: "Corpo preparado trabalha melhor e por mais tempo."
  },
  {
    id: "calor-hidratacao",
    titulo: "Calor e hidratação: beba água antes de sentir sede",
    categoria: "Clima e meio ambiente",
    nr: "NR-21 / NR-15",
    duracao: 4,
    tags: ["calor", "saude"],
    objetivo: "Prevenir a exaustão e a insolação em dias quentes.",
    texto: [
      "Trabalhar sob o sol forte faz o corpo perder muita água e sais minerais pelo suor. Sem reposição, vêm a tontura, dor de cabeça, cãibras, enjoo e, nos casos graves, a insolação, que pode levar à morte.",
      "Beba água várias vezes ao longo do dia, mesmo sem sede: quando a sede aparece, o corpo já está desidratado. Evite refrigerante e bebidas alcoólicas.",
      "Use roupas leves, chapéu ou touca árabe sob o capacete e protetor solar. Nos horários mais quentes, faça pausas à sombra quando possível.",
      "Se um colega estiver confuso, com pele muito quente e vermelha ou desmaiar, leve-o para a sombra, afrouxe as roupas, molhe o corpo e chame socorro."
    ],
    caso: "Num dia de calor intenso, um servente que não tinha bebido água desde o café da manhã começou a ficar tonto e caiu no meio da laje. Foi levado ao pronto-socorro com desidratação.",
    perguntas: [
      "Onde estão os bebedouros da obra?",
      "Quantas vezes você bebeu água ontem durante o trabalho?",
      "Quais são os sinais de que alguém está passando mal pelo calor?"
    ],
    mensagem: "Água é EPI em dia de calor."
  },
  {
    id: "calor-sol-pele",
    titulo: "Sol e câncer de pele: proteja-se todos os dias",
    categoria: "Clima e meio ambiente",
    nr: "NR-21",
    duracao: 4,
    tags: ["calor", "cancer", "saude"],
    objetivo: "Conscientizar sobre o risco de câncer de pele em quem trabalha a céu aberto.",
    texto: [
      "O câncer de pele é o tipo de câncer mais comum no Brasil, e quem trabalha a céu aberto está muito mais exposto. O sol causa danos que vão se acumulando ao longo dos anos.",
      "Proteja-se: use protetor solar no rosto, orelhas, nuca e braços, reaplicando ao longo do dia. Use camisa de manga longa, touca árabe ou aba no capacete e óculos com proteção UV.",
      "Mesmo em dias nublados a radiação ultravioleta atinge a pele.",
      "Observe manchas e pintas que mudam de cor, tamanho ou formato, ou feridas que não cicatrizam. Procure um médico: no começo, o tratamento é simples."
    ],
    caso: "Um mestre de obras, com mais de 30 anos de trabalho no sol, notou uma ferida na orelha que não cicatrizava. Era câncer de pele e precisou de cirurgia.",
    perguntas: [
      "Quem usa protetor solar todos os dias?",
      "Quais partes do corpo ficam mais expostas ao sol?",
      "Você já reparou em alguma pinta diferente na pele?"
    ],
    mensagem: "Sol todo dia exige proteção todo dia."
  },
  {
    id: "chuva-raios",
    titulo: "Tempestades e raios: hora de parar",
    categoria: "Clima e meio ambiente",
    nr: "NR-21 / NR-18",
    duracao: 4,
    tags: ["chuva", "altura", "eletricidade"],
    objetivo: "Orientar sobre como agir durante tempestades com raios e ventos fortes.",
    texto: [
      "Durante tempestades, o canteiro de obras é um lugar perigoso: estruturas metálicas, gruas, andaimes e lajes altas atraem raios, e o vento forte pode derrubar materiais, telhas e tapumes.",
      "Ao sinal de tempestade, interrompa os trabalhos em altura, com içamento, em telhados e em áreas abertas. Abaixe a carga das gruas e prenda materiais soltos.",
      "Abrigue-se em local coberto e seguro. Evite ficar perto de estruturas metálicas, árvores isoladas, cercas e postes. Não se abrigue embaixo de andaimes.",
      "Só retome o trabalho depois que a tempestade passar e a área for inspecionada."
    ],
    caso: "Durante uma tempestade, um trabalhador continuou na cobertura metálica para terminar o serviço. Um raio caiu próximo à estrutura e ele sofreu queimaduras e lesões graves.",
    perguntas: [
      "Qual é o nosso local de abrigo em caso de tempestade?",
      "Quais serviços devem parar quando o tempo fecha?",
      "O que precisa ser verificado antes de voltar ao trabalho?"
    ],
    mensagem: "Trovejou? Pare e procure abrigo."
  },
  {
    id: "alcool-drogas",
    titulo: "Álcool e drogas: não combinam com trabalho",
    categoria: "Saúde e bem-estar",
    nr: "NR-1",
    duracao: 5,
    tags: ["alcool", "saude", "comportamento"],
    objetivo: "Conscientizar sobre os efeitos do álcool e das drogas na segurança e oferecer apoio.",
    texto: [
      "Álcool e drogas diminuem os reflexos, a atenção, o equilíbrio e a capacidade de perceber o perigo. Na obra, isso pode significar uma queda, um acidente com máquina ou colocar a vida de um colega em risco.",
      "O efeito do álcool não passa com café ou banho. A bebida de ontem à noite ainda pode estar no seu corpo hoje de manhã.",
      "Se você percebe que um colega chegou alterado, comunique o encarregado. Não é para punir, é para proteger. Ninguém deve trabalhar nessas condições.",
      "A dependência é uma doença e tem tratamento. Quem precisa de ajuda pode procurar o RH, o SESMT, o CAPS AD ou grupos de apoio como os Alcoólicos Anônimos."
    ],
    caso: "Um operador de miniescavadeira chegou ao trabalho depois de uma noite de bebida. Perdeu o controle da máquina numa rampa e tombou, ficando preso na cabine.",
    perguntas: [
      "Como o álcool afeta quem trabalha em altura ou com máquinas?",
      "O que fazer se um colega chegar alterado?",
      "Onde alguém pode procurar ajuda?"
    ],
    mensagem: "Trabalho seguro exige mente sóbria."
  },
  {
    id: "alcool-direcao",
    titulo: "Se beber, não dirija: o trajeto também conta",
    categoria: "Trânsito no canteiro",
    nr: "",
    duracao: 4,
    tags: ["alcool", "transito"],
    objetivo: "Prevenir acidentes de trajeto e no trânsito, principalmente em feriados e fins de semana.",
    texto: [
      "Muitos trabalhadores se acidentam no caminho de casa para o trabalho e no trânsito do fim de semana. Moto, carro, bicicleta: o risco está em todos.",
      "Álcool e direção não combinam. Mesmo uma pequena quantidade já afeta a visão, os reflexos e a noção de distância. Se beber, use transporte público, aplicativo ou vá de carona com quem não bebeu.",
      "No trajeto: capacete afivelado na moto, cinto de segurança para todos no carro, respeito aos limites de velocidade e nada de celular ao volante.",
      "Cansaço também mata no trânsito. Depois de um dia pesado, não pegue a estrada com sono."
    ],
    caso: "Na segunda-feira, a equipe soube que um colega tinha sofrido um acidente de moto no domingo, voltando de uma festa onde bebeu. Ele ficou meses internado.",
    perguntas: [
      "Como você vem para a obra todos os dias?",
      "O que você faz quando vai a uma festa e está de carro ou moto?",
      "Quais cuidados tomar no caminho de volta para casa?"
    ],
    mensagem: "Sua família te espera em casa. Volte inteiro."
  },
  {
    id: "saude-mental",
    titulo: "Saúde mental: tudo bem não estar bem",
    categoria: "Saúde e bem-estar",
    nr: "NR-1",
    duracao: 5,
    tags: ["saude-mental", "saude"],
    objetivo: "Abrir espaço para falar de saúde mental e buscar ajuda sem preconceito.",
    texto: [
      "Problemas financeiros, distância da família, pressão no trabalho, luto, brigas em casa: todo mundo passa por momentos difíceis. Na construção civil, muitos homens aprendem a esconder o que sentem e sofrem calados.",
      "Ansiedade e depressão são doenças, como qualquer outra, e têm tratamento. Elas também afetam a segurança: a pessoa fica distraída, cansada e mais exposta a acidentes.",
      "Sinais de alerta: isolamento, tristeza constante, irritação fora do comum, falta de sono, abuso de álcool, falar em desistir de tudo.",
      "Se você não está bem, fale com alguém de confiança, procure o posto de saúde ou o CVV, que atende 24 horas pelo telefone 188, de graça. Se perceber um colega assim, ouça sem julgar e ajude a buscar apoio."
    ],
    caso: "Um encarregado percebeu que um pedreiro, sempre animado, estava calado e faltando muito. Puxou conversa no intervalo e descobriu que ele passava por uma fase muito difícil. Ajudou-o a procurar atendimento.",
    perguntas: [
      "Por que é tão difícil falar sobre o que sentimos?",
      "Como podemos apoiar um colega que está passando por um momento difícil?",
      "Vocês conhecem o CVV (188)?"
    ],
    mensagem: "Pedir ajuda é coragem, não fraqueza."
  },
  {
    id: "sono-fadiga",
    titulo: "Sono e cansaço: o risco que ninguém vê",
    categoria: "Saúde e bem-estar",
    nr: "NR-1",
    duracao: 4,
    tags: ["saude", "comportamento"],
    objetivo: "Mostrar como a falta de sono aumenta o risco de acidentes.",
    texto: [
      "Dormir pouco ou mal deixa o corpo e a mente mais lentos. A pessoa demora para reagir, se distrai e comete mais erros. Ficar muitas horas sem dormir tem efeito parecido com o de ter bebido.",
      "Muitos trabalhadores acordam muito cedo, gastam horas no transporte e ainda fazem 'bicos' no fim de semana. O cansaço vai se acumulando.",
      "Procure dormir entre sete e oito horas por noite. Evite celular e TV até tarde, café e energético à noite e refeições pesadas antes de deitar.",
      "Se você está com muito sono ou cansaço para fazer uma tarefa de risco, como operar máquina ou trabalhar em altura, avise o encarregado."
    ],
    caso: "Um operador de grua que vinha fazendo horas extras e dormindo pouco cochilou por instantes durante uma manobra. A carga bateu na estrutura, por sorte sem ferir ninguém.",
    perguntas: [
      "Quantas horas você dormiu esta noite?",
      "O que mais atrapalha o seu sono?",
      "Em que tarefas o cansaço é mais perigoso?"
    ],
    mensagem: "Descanso também é segurança."
  },
  {
    id: "primeiros-socorros",
    titulo: "Aconteceu um acidente: o que fazer?",
    categoria: "Primeiros socorros",
    nr: "NR-7",
    duracao: 6,
    tags: ["primeiros-socorros"],
    objetivo: "Orientar as primeiras ações em caso de acidente na obra.",
    texto: [
      "Em um acidente, os primeiros minutos são decisivos. Mas uma ajuda feita de qualquer jeito pode piorar a situação ou criar novas vítimas.",
      "Primeiro, garanta a sua segurança: o local ainda tem risco de choque, queda, desmoronamento ou máquina ligada? Desligue, isole e só então se aproxime.",
      "Chame ajuda: avise o encarregado e o socorrista da obra, e ligue para o SAMU (192) ou os Bombeiros (193). Informe o endereço, o que aconteceu e o estado da vítima.",
      "Não movimente a vítima, a não ser que haja risco imediato no local, principalmente em quedas, por causa do risco de lesão na coluna. Fale com ela, mantenha-a calma e aquecida. Em sangramento, faça compressão com um pano limpo. Não dê água nem comida."
    ],
    caso: "Após a queda de um colega, dois trabalhadores o levantaram e o carregaram até o carro. Ele tinha uma lesão na coluna, que foi agravada pelo transporte inadequado.",
    perguntas: [
      "Qual é o número do SAMU? E dos Bombeiros?",
      "Quem são os socorristas treinados da obra?",
      "Onde fica a caixa de primeiros socorros?"
    ],
    mensagem: "Socorro certo começa com calma e segurança."
  },
  {
    id: "queimaduras",
    titulo: "Queimaduras: prevenção e primeiros cuidados",
    categoria: "Primeiros socorros",
    nr: "",
    duracao: 4,
    tags: ["fogo", "primeiros-socorros"],
    objetivo: "Prevenir queimaduras por calor, eletricidade e produtos químicos e saber como agir.",
    texto: [
      "Na obra, as queimaduras podem vir de solda, maçarico, asfalto quente, eletricidade, cimento e produtos químicos. Fora dela, festas juninas, fogos e fogueiras também causam muitos acidentes.",
      "Em caso de queimadura térmica, resfrie o local com água corrente em temperatura ambiente por vários minutos. Não use gelo, pasta de dente, manteiga ou pó de café. Não estoure as bolhas.",
      "Retire anéis, relógios e roupas que não estejam grudadas na pele. Cubra com pano limpo e procure atendimento.",
      "Em queimadura química, lave com bastante água por muito tempo, retirando a roupa contaminada. Em queimadura elétrica, desligue a energia antes de tocar na vítima: mesmo que a pele pareça pouco atingida, pode haver lesões internas."
    ],
    caso: "Um trabalhador que se queimou com asfalto quente passou pasta de dente no braço, como tinha aprendido em casa. A ferida infeccionou e demorou muito mais para cicatrizar.",
    perguntas: [
      "Quais serviços da obra podem causar queimaduras?",
      "Qual é o primeiro cuidado com uma queimadura?",
      "Que receitas caseiras vocês já ouviram falar e não devem ser usadas?"
    ],
    mensagem: "Queimou? Água corrente e atendimento, nada de receita caseira."
  },
  {
    id: "saude-homem",
    titulo: "Saúde do homem: cuidar de si também é trabalho",
    categoria: "Saúde e bem-estar",
    nr: "NR-7",
    duracao: 5,
    tags: ["saude", "cancer"],
    objetivo: "Incentivar os cuidados preventivos com a saúde, com destaque para o câncer de próstata.",
    texto: [
      "Os homens vão menos ao médico e, por isso, muitas doenças são descobertas tarde: pressão alta, diabetes, colesterol e câncer de próstata.",
      "O câncer de próstata é um dos mais comuns entre os homens. No início, quase não dá sintomas. Por isso a conversa com o médico e os exames preventivos são tão importantes, principalmente a partir dos 50 anos, ou antes para quem tem casos na família.",
      "Medir a pressão, fazer exames de sangue e manter as vacinas em dia são atitudes simples que salvam vidas. O posto de saúde oferece isso gratuitamente.",
      "Alimentação equilibrada, atividade física, menos sal, menos álcool e nada de cigarro também fazem diferença. Preconceito não pode ser maior que a vontade de viver."
    ],
    caso: "Um armador de 55 anos foi ao médico por insistência da filha. O exame detectou um câncer de próstata no início. Ele fez o tratamento e voltou ao trabalho curado.",
    perguntas: [
      "Quando foi a última vez que você foi ao médico sem estar doente?",
      "Por que muitos homens evitam fazer exames?",
      "Onde podemos fazer exames gratuitos perto daqui?"
    ],
    mensagem: "Homem que se cuida vive mais para quem ama."
  },
  {
    id: "saude-mulher",
    titulo: "Outubro Rosa: prevenção é cuidado",
    categoria: "Saúde e bem-estar",
    nr: "",
    duracao: 4,
    tags: ["saude", "cancer"],
    objetivo: "Falar sobre a prevenção do câncer de mama e o papel de cada um em incentivar as mulheres da família.",
    texto: [
      "O câncer de mama é o tipo de câncer que mais atinge as mulheres no Brasil. Quando descoberto cedo, as chances de cura são muito altas.",
      "As mulheres devem conhecer o próprio corpo e procurar o posto de saúde ao perceber nódulos, alterações na pele ou no mamilo. A mamografia é recomendada periodicamente a partir de certa idade, conforme orientação médica.",
      "Mesmo quem não é mulher tem um papel importante: incentive sua mãe, esposa, filha, irmã e colegas de trabalho a fazer os exames. Ofereça companhia, ajude a encontrar horário.",
      "Hábitos saudáveis, como atividade física, alimentação equilibrada e evitar álcool e cigarro, também ajudam na prevenção."
    ],
    caso: "Depois de um DDS sobre o Outubro Rosa, um servente incentivou a mãe a fazer a mamografia que ela vinha adiando. O exame detectou um tumor bem no começo, e ela se tratou a tempo.",
    perguntas: [
      "As mulheres da sua família fazem os exames preventivos?",
      "Como você pode ajudar alguém a não adiar o exame?",
      "Onde fica o posto de saúde mais próximo de casa?"
    ],
    mensagem: "Leve este assunto para casa: prevenção salva vidas."
  },
  {
    id: "tabagismo",
    titulo: "Cigarro: um risco para a saúde e para a obra",
    categoria: "Saúde e bem-estar",
    nr: "NR-23",
    duracao: 4,
    tags: ["tabagismo", "saude", "fogo"],
    objetivo: "Conscientizar sobre os danos do tabagismo e o risco de incêndio no canteiro.",
    texto: [
      "O cigarro está ligado a câncer de pulmão, boca e garganta, infarto, derrame e enfisema. Para quem trabalha com poeira de obra, os danos aos pulmões se somam e ficam ainda maiores.",
      "Na obra, cigarro também é risco de incêndio: perto de tintas, solventes, gases, madeira e isopor, uma bituca pode começar um fogo. Só se fuma nas áreas permitidas, e a bituca vai no lugar certo.",
      "Parar de fumar é difícil, mas possível, e os benefícios começam logo nos primeiros dias. O SUS oferece tratamento gratuito para quem quer parar, com acompanhamento e, quando indicado, medicamentos.",
      "Cigarro eletrônico também faz mal e vicia."
    ],
    caso: "Uma bituca jogada perto do depósito de materiais incendiou rolos de manta asfáltica. O fogo se espalhou rapidamente e destruiu parte do almoxarifado.",
    perguntas: [
      "Onde fica a área permitida para fumar na obra?",
      "Quem aqui já tentou parar de fumar? O que ajudou?",
      "Que materiais da obra pegam fogo facilmente?"
    ],
    mensagem: "Cada cigarro a menos é mais vida."
  }
]);
