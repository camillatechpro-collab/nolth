// Biblioteca — parte 6: altura, máquinas pesadas, eletricidade, serviços especiais e fundações.
window.DDS_LIB = (window.DDS_LIB || []).concat([
  {
    id: "linha-de-vida",
    titulo: "Linha de vida: quem segura quem segura você",
    categoria: "Trabalho em altura",
    nr: "NR-35",
    duracao: 5,
    tags: ["altura"],
    objetivo: "Mostrar os cuidados na instalação, inspeção e uso de linhas de vida.",
    texto: [
      "A linha de vida permite que o trabalhador se desloque em altura sem ficar desconectado. Mas ela só protege se for projetada, instalada e inspecionada corretamente.",
      "A linha de vida deve ter projeto ou especificação de profissional habilitado, com ancoragens resistentes, cabo ou fita adequados e tensão correta. Linha frouxa demais aumenta a distância de queda.",
      "Antes de usar, verifique as ancoragens, os grampos, o cabo e os esticadores. Cabo com fios rompidos, corrosão ou amassamentos não pode ser usado. Linha que segurou uma queda deve ser retirada de uso e avaliada.",
      "Respeite o número máximo de pessoas presas ao mesmo trecho da linha."
    ],
    caso: "Uma linha de vida improvisada com corda comum, amarrada em dois pilares, se rompeu quando um carpinteiro escorregou da borda da laje.",
    perguntas: [
      "Quem instalou e liberou a linha de vida que usamos?",
      "O que inspecionar antes de se prender?",
      "Quantas pessoas podem usar o mesmo trecho?"
    ],
    mensagem: "Linha de vida improvisada não salva vida."
  },
  {
    id: "trava-quedas",
    titulo: "Trava-quedas retrátil e talabarte com absorvedor",
    categoria: "Trabalho em altura",
    nr: "NR-35",
    duracao: 5,
    tags: ["altura", "epi"],
    objetivo: "Explicar como funcionam os sistemas de retenção de queda e a zona livre de queda.",
    texto: [
      "O talabarte com absorvedor de energia e o trava-quedas retrátil servem para parar a queda e reduzir o impacto sobre o corpo. Cada um tem um uso correto.",
      "O absorvedor se abre durante a queda e aumenta a distância percorrida. Por isso é preciso conhecer a zona livre de queda: o espaço necessário abaixo do trabalhador para que ele não bata no chão ou em uma estrutura antes de ser retido.",
      "Em alturas pequenas, um talabarte comprido pode não ser suficiente para evitar o impacto. Nesses casos, o trava-quedas retrátil costuma ser a melhor opção.",
      "Inspecione o cabo ou a fita do retrátil, teste o travamento puxando com força e verifique o indicador de queda. Equipamento que segurou uma queda sai de uso."
    ],
    caso: "Um pintor, a quatro metros do chão, usava um talabarte longo com absorvedor. Ao cair, o absorvedor abriu, mas a distância não foi suficiente e ele bateu os pés no piso.",
    perguntas: [
      "O que é a zona livre de queda?",
      "Quando o trava-quedas retrátil é mais indicado?",
      "Como testar o travamento do retrátil?"
    ],
    mensagem: "Saber quanto você cai antes de parar é parte da segurança."
  },
  {
    id: "guarda-corpo",
    titulo: "Guarda-corpo provisório: como deve ser",
    categoria: "Trabalho em altura",
    nr: "NR-18",
    duracao: 4,
    tags: ["altura"],
    objetivo: "Ensinar a reconhecer um guarda-corpo adequado e a importância de mantê-lo íntegro.",
    texto: [
      "O guarda-corpo é a proteção coletiva mais comum contra quedas em bordas de laje, escadas, rampas e aberturas. Ele protege todos ao mesmo tempo, sem depender de cada um lembrar do cinto.",
      "Um guarda-corpo adequado tem travessão superior, travessão intermediário e rodapé, com altura e resistência definidas na norma, e fica firmemente fixado à estrutura. O vão entre os travessões pode ser fechado com tela.",
      "Corda, fita zebrada ou sarrafo pregado de qualquer jeito não são guarda-corpo. Eles apenas sinalizam.",
      "Nunca sente, se apoie com força ou pendure materiais no guarda-corpo. Se precisar retirá-lo, use cinto, avise o encarregado e recoloque logo depois."
    ],
    caso: "Um servente se apoiou em um guarda-corpo feito com sarrafos mal pregados para descansar. A madeira se soltou e ele caiu do segundo pavimento.",
    perguntas: [
      "Quais são as partes de um guarda-corpo?",
      "Por que fita zebrada não é proteção contra queda?",
      "Há algum guarda-corpo danificado na obra hoje?"
    ],
    mensagem: "Guarda-corpo firme protege todos que passam."
  },
  {
    id: "rampas-passarelas",
    titulo: "Rampas e passarelas: caminho firme",
    categoria: "Trabalho em altura",
    nr: "NR-18",
    duracao: 4,
    tags: ["altura", "ergonomia"],
    objetivo: "Garantir que rampas e passarelas sejam seguras para pessoas e carrinhos.",
    texto: [
      "Rampas e passarelas são usadas o dia todo para circular entre níveis e transportar materiais. Quando estão mal feitas, causam quedas, tropeços e carrinhos virados.",
      "Elas devem ser construídas com material resistente, bem fixadas, com largura adequada, guarda-corpo nas laterais e, nas rampas, peças transversais para evitar escorregões. A inclinação não pode ser exagerada.",
      "Tábuas soltas, quebradas ou empenadas devem ser substituídas. Não deixe materiais e entulho no caminho.",
      "Com chuva, a rampa fica escorregadia: redobre a atenção e reduza a carga do carrinho."
    ],
    caso: "Uma passarela de tábuas sem fixação se deslocou quando um ajudante passou com o carrinho cheio. Ele caiu dentro de uma vala de fundação.",
    perguntas: [
      "As nossas rampas têm guarda-corpo?",
      "Há tábuas soltas ou quebradas em alguma passagem?",
      "O que muda no uso da rampa em dia de chuva?"
    ],
    mensagem: "Passagem firme, passo seguro."
  },
  {
    id: "escadas-acesso",
    titulo: "Escadas de acesso entre pavimentos",
    categoria: "Trabalho em altura",
    nr: "NR-18",
    duracao: 4,
    tags: ["altura", "comportamento"],
    objetivo: "Manter as escadas provisórias e definitivas seguras durante a obra.",
    texto: [
      "As escadas da obra são o principal caminho entre os pavimentos. Escada sem corrimão, com degraus irregulares ou cheia de entulho é lugar certo de queda.",
      "Escadas provisórias devem ter degraus uniformes, piso antiderrapante, corrimão e guarda-corpo. Nas escadas de concreto ainda sem acabamento, o vão lateral precisa de proteção.",
      "Mantenha os degraus limpos e livres. Não carregue volumes que tapem a visão dos pés e use sempre uma das mãos no corrimão.",
      "Desça e suba com calma. A pressa na escada é uma das causas mais comuns de torções e quedas."
    ],
    caso: "Um encarregado desceu a escada com pressa carregando rolos de projeto, sem segurar o corrimão. Pisou em um resto de argamassa, escorregou e quebrou o tornozelo.",
    perguntas: [
      "Nossas escadas têm corrimão e proteção lateral?",
      "Como transportar materiais pela escada com segurança?",
      "Quem é responsável por manter a escada limpa?"
    ],
    mensagem: "Escada é caminho, não depósito."
  },
  {
    id: "munck",
    titulo: "Caminhão munck: patolas, solo e capacidade",
    categoria: "Içamento de cargas",
    nr: "NR-11 / NR-12",
    duracao: 5,
    tags: ["icamento", "maquinas", "eletricidade"],
    objetivo: "Prevenir tombamentos e acidentes com caminhões munck.",
    texto: [
      "O munck é muito usado para descarregar e posicionar materiais. Os acidentes mais graves são o tombamento do caminhão e o contato da lança com a rede elétrica.",
      "Antes de içar, o caminhão deve estar em solo firme e nivelado, com todas as patolas estendidas e apoiadas sobre calços ou bases adequadas. Nunca apoie a patola na borda de valas ou sobre tampas de caixas.",
      "Consulte a tabela de carga: quanto mais a lança se estende, menor a capacidade. O operador deve ser habilitado e ter um sinaleiro.",
      "Ninguém fica sob a carga ou na área de giro. Atenção total à rede elétrica."
    ],
    caso: "Um munck ergueu uma carga com uma patola apoiada sobre uma tampa de caixa de esgoto. A tampa cedeu e o caminhão tombou sobre o tapume.",
    perguntas: [
      "Onde o munck deve ser posicionado na nossa obra?",
      "Por que a capacidade diminui com a lança estendida?",
      "Quem será o sinaleiro hoje?"
    ],
    mensagem: "Patola bem apoiada e carga dentro da tabela."
  },
  {
    id: "grua",
    titulo: "Grua: inspeção diária e limites de operação",
    categoria: "Içamento de cargas",
    nr: "NR-18 / NR-12",
    duracao: 5,
    tags: ["icamento", "chuva"],
    objetivo: "Reforçar a rotina de inspeção e os limites de uso da grua.",
    texto: [
      "A grua move cargas pesadas por cima de toda a obra. Uma falha pode atingir qualquer pessoa no canteiro.",
      "O operador deve fazer a checagem diária: freios, limitadores de carga e de curso, cabos, ganchos com trava, comunicação por rádio e anemômetro. Qualquer falha é registrada e a grua não opera até ser corrigida.",
      "Respeite a curva de carga, que varia conforme a distância do gancho até a torre. Não arraste cargas nem faça içamentos inclinados.",
      "Com vento acima do limite do fabricante, a operação para e a grua fica liberada para girar livremente com o vento, conforme o procedimento."
    ],
    caso: "Para ganhar tempo, um operador ignorou o alarme do limitador de carga. A lança se deformou e a carga caiu sobre a área de armação, por sorte sem ninguém embaixo.",
    perguntas: [
      "O que o operador verifica na checagem diária?",
      "O que é a curva de carga da grua?",
      "O que fazer quando o vento passa do limite?"
    ],
    mensagem: "Alarme de limite não se ignora: ele existe para salvar vidas."
  },
  {
    id: "escavadeira",
    titulo: "Escavadeiras e retroescavadeiras: área de giro e cabine",
    categoria: "Máquinas e equipamentos",
    nr: "NR-12",
    duracao: 4,
    tags: ["maquinas", "transito", "escavacao"],
    objetivo: "Prevenir esmagamentos e atropelamentos com máquinas de terraplanagem.",
    texto: [
      "A escavadeira gira a parte de cima em 360 graus. Quem estiver na área de giro pode ser prensado entre a máquina e um muro, um caminhão ou outra estrutura.",
      "A área de giro e de trabalho deve ser isolada. Ninguém se aproxima sem contato visual e autorização do operador. Durante a escavação, ninguém deve ficar dentro da vala perto da caçamba.",
      "O operador deve usar o cinto, manter a cabine limpa, descer de frente usando os apoios e baixar a caçamba ao chão sempre que sair da máquina.",
      "Ninguém usa a caçamba para transportar pessoas ou como plataforma de trabalho."
    ],
    caso: "Um servente se posicionou entre a escavadeira e um caminhão para orientar a descarga. A máquina girou e ele foi prensado contra a carroceria.",
    perguntas: [
      "Qual é a área de giro da escavadeira hoje?",
      "Como se aproximar com segurança de uma máquina em operação?",
      "O que o operador deve fazer ao sair da cabine?"
    ],
    mensagem: "Na área de giro, só a máquina."
  },
  {
    id: "compactacao",
    titulo: "Rolo compactador e placa vibratória",
    categoria: "Máquinas e equipamentos",
    nr: "NR-12",
    duracao: 4,
    tags: ["maquinas", "ergonomia"],
    objetivo: "Orientar o uso seguro de equipamentos de compactação.",
    texto: [
      "O rolo compactador pode tombar em taludes e bordas de valas, e a placa vibratória e o sapo compactador causam lesões por vibração e esmagamento dos pés.",
      "O rolo deve ser operado por pessoa habilitada, com cinto e estrutura de proteção contra capotamento. Mantenha distância segura das bordas e de taludes inclinados.",
      "Na placa vibratória, use botina com biqueira, protetor auricular e luvas. Nunca puxe o equipamento na sua direção, para não prensar os pés. Reveze a operação para reduzir a exposição à vibração.",
      "Abasteça com o motor desligado e frio, longe de fontes de calor."
    ],
    caso: "Um operador de sapo compactador puxou o equipamento para trás em um espaço apertado. A base atingiu o pé dele, causando fratura nos dedos.",
    perguntas: [
      "Quem está habilitado para operar o rolo?",
      "Por que não puxar a placa vibratória na sua direção?",
      "Como revezar o equipamento na equipe?"
    ],
    mensagem: "Compactar o solo, não os pés."
  },
  {
    id: "gerador-combustivel",
    titulo: "Gerador e abastecimento de combustíveis",
    categoria: "Incêndio e emergência",
    nr: "NR-20",
    duracao: 4,
    tags: ["fogo", "eletricidade"],
    objetivo: "Prevenir incêndios e intoxicações no uso de geradores e no abastecimento.",
    texto: [
      "Geradores e máquinas a combustão liberam monóxido de carbono, um gás sem cheiro e sem cor que pode matar em ambientes fechados.",
      "O gerador deve ficar em local ventilado, aterrado, protegido da chuva e longe de materiais inflamáveis. Nunca opere geradores dentro de subsolos, poços ou salas fechadas.",
      "Abasteça com o equipamento desligado e frio. Não fume, não use celular durante o abastecimento e tenha um extintor por perto. Guarde o combustível em recipientes próprios, identificados e em local ventilado.",
      "Derramou combustível? Limpe antes de ligar o equipamento."
    ],
    caso: "Uma equipe usou um gerador dentro do subsolo para iluminação durante a noite. Dois trabalhadores passaram mal com dor de cabeça e tontura, intoxicados por monóxido de carbono.",
    perguntas: [
      "Onde fica o gerador da nossa obra?",
      "Por que o monóxido de carbono é tão perigoso?",
      "Como guardar o combustível corretamente?"
    ],
    mensagem: "Motor a combustão só em local ventilado."
  },
  {
    id: "policorte",
    titulo: "Policorte: corte de metais com segurança",
    categoria: "Ferramentas",
    nr: "NR-12",
    duracao: 4,
    tags: ["maquinas", "ferramentas", "fogo"],
    objetivo: "Prevenir acidentes com a máquina policorte.",
    texto: [
      "A policorte corta ferros e perfis com um disco abrasivo de alta rotação. Ela gera fagulhas, ruído e risco de quebra do disco.",
      "Fixe a máquina em bancada firme e prenda a peça na morsa: nunca segure com a mão ou com o pé. A capa de proteção do disco deve estar sempre no lugar.",
      "Use o disco correto, sem trincas e dentro da validade. Posicione-se fora da linha do disco e direcione as fagulhas para longe de pessoas e materiais inflamáveis.",
      "Use óculos, protetor facial, protetor auricular, luvas e avental. Espere o disco parar antes de retirar a peça."
    ],
    caso: "Um serralheiro segurou com a mão uma barra curta para cortá-la na policorte. A peça girou, prendeu o disco e ele se quebrou, atingindo o braço do trabalhador.",
    perguntas: [
      "Nossa policorte está fixa e com proteção?",
      "Como fixar peças curtas para cortar?",
      "Para onde as fagulhas devem ser direcionadas?"
    ],
    mensagem: "Peça presa na morsa, mãos longe do disco."
  },
  {
    id: "serra-marmore",
    titulo: "Serra mármore: corte a úmido e mãos protegidas",
    categoria: "Ferramentas",
    nr: "NR-12 / NR-15",
    duracao: 4,
    tags: ["ferramentas", "poeira", "eletricidade"],
    objetivo: "Prevenir cortes, choques e exposição à poeira no uso da serra mármore.",
    texto: [
      "A serra mármore é usada para cortar cerâmica, porcelanato, pedra e concreto. Ela pode dar trancos, causar cortes graves e gerar muita poeira de sílica.",
      "Use sempre a ferramenta com a proteção do disco e as duas mãos firmes nas empunhaduras. Apoie a peça em uma superfície firme e nunca corte apoiando a peça na perna ou no joelho.",
      "Prefira o corte a úmido, que reduz muito a poeira. Nesse caso, a ferramenta e a instalação elétrica precisam ser adequadas para evitar choques.",
      "Use óculos, protetor facial, máscara PFF2, protetor auricular e luvas. Desligue e espere o disco parar antes de apoiar a ferramenta."
    ],
    caso: "Um azulejista apoiou a peça de porcelanato sobre o joelho para fazer um corte rápido. A serra deu um tranco e o disco atingiu a perna dele.",
    perguntas: [
      "Onde apoiamos as peças para corte?",
      "Por que preferir o corte a úmido?",
      "Quais EPIs são necessários para a serra mármore?"
    ],
    mensagem: "Corte com apoio firme e poeira controlada."
  },
  {
    id: "ferramentas-eletricas-inspecao",
    titulo: "Ferramentas elétricas: inspeção antes de ligar",
    categoria: "Eletricidade",
    nr: "NR-10 / NR-12",
    duracao: 4,
    tags: ["eletricidade", "ferramentas"],
    objetivo: "Criar o hábito de inspecionar ferramentas elétricas antes do uso.",
    texto: [
      "Uma ferramenta elétrica com defeito pode dar choque, pegar fogo ou se desmontar durante o uso. A inspeção leva menos de um minuto.",
      "Verifique: cabo sem cortes, emendas ou partes desencapadas; plugue inteiro e no padrão; carcaça sem rachaduras; gatilho funcionando e voltando à posição desligada; proteções no lugar.",
      "Ferramenta com defeito deve ser identificada com etiqueta e retirada de uso até ser consertada por pessoa qualificada.",
      "Ao terminar, desligue, retire da tomada pelo plugue e guarde em local seco."
    ],
    caso: "Um pedreiro usou uma lixadeira com o cabo emendado com fita isolante. A emenda se abriu durante o uso e ele levou um choque.",
    perguntas: [
      "Quais itens você verifica em uma ferramenta antes de ligar?",
      "O que fazer com uma ferramenta defeituosa?",
      "Onde guardamos as ferramentas elétricas?"
    ],
    mensagem: "Um minuto de inspeção evita um choque."
  },
  {
    id: "quadro-provisorio",
    titulo: "Quadro elétrico provisório: o que observar",
    categoria: "Eletricidade",
    nr: "NR-10 / NR-18",
    duracao: 4,
    tags: ["eletricidade", "chuva"],
    objetivo: "Ensinar a identificar problemas nos quadros de distribuição da obra.",
    texto: [
      "Os quadros provisórios distribuem energia para máquinas e ferramentas de toda a obra. Quando estão abertos, molhados ou improvisados, viram um risco para todos.",
      "Um quadro adequado fica fechado, sinalizado com o símbolo de risco elétrico, aterrado, protegido da chuva e com disjuntores e dispositivo DR identificados. As tomadas devem ser do padrão correto.",
      "Não abra o quadro, não ligue fios direto nos disjuntores e não deixe materiais encostados nele. Apenas eletricista autorizado faz alterações.",
      "Quadro aberto, com fios expostos, molhado ou esquentando? Afaste-se e comunique imediatamente."
    ],
    caso: "Um quadro provisório sem tampa ficou exposto à chuva durante a noite. Pela manhã, um ajudante encostou nele para ligar uma ferramenta e levou um choque.",
    perguntas: [
      "Onde ficam os quadros elétricos da obra?",
      "Como é um quadro em boas condições?",
      "Quem pode abrir o quadro?"
    ],
    mensagem: "Quadro fechado e aterrado, risco controlado."
  },
  {
    id: "aterramento-dr",
    titulo: "Aterramento e DR: as proteções invisíveis",
    categoria: "Eletricidade",
    nr: "NR-10",
    duracao: 4,
    tags: ["eletricidade"],
    objetivo: "Explicar para que servem o aterramento e o dispositivo DR.",
    texto: [
      "Muitas proteções elétricas não aparecem, mas salvam vidas. Duas das mais importantes são o aterramento e o dispositivo DR.",
      "O aterramento leva para a terra a corrente que escapa quando há um defeito no equipamento, evitando que ela passe pelo corpo de quem o toca. O DR desliga o circuito em fração de segundo quando detecta uma fuga de corrente.",
      "Nunca corte o pino terra do plugue, nunca use adaptadores que eliminem o aterramento e nunca 'jampeie' um DR que fica desarmando.",
      "DR desarmando com frequência é sinal de defeito na instalação ou no equipamento. Chame o eletricista para descobrir a causa."
    ],
    caso: "Irritado porque o DR desarmava toda hora, um trabalhador fez uma ligação direta para ignorá-lo. Dias depois, uma betoneira com defeito deu choque em um colega, e nada desligou o circuito.",
    perguntas: [
      "Para que serve o pino terra?",
      "O que significa um DR que desarma muito?",
      "Por que nunca devemos desativar o DR?"
    ],
    mensagem: "DR desarmou? Procure a causa, não o atalho."
  },
  {
    id: "solda-fumos",
    titulo: "Solda: fumos metálicos e radiação",
    categoria: "Saúde e bem-estar",
    nr: "NR-15 / NR-6",
    duracao: 4,
    tags: ["saude", "epi", "fogo"],
    objetivo: "Proteger os soldadores e quem está por perto dos fumos e da radiação da solda.",
    texto: [
      "A solda produz fumos metálicos que, respirados com frequência, causam doenças respiratórias e intoxicações. O arco elétrico emite radiação que queima os olhos e a pele.",
      "Solde em locais ventilados ou com exaustão. Posicione-se fora da coluna de fumaça e use proteção respiratória adequada quando necessário.",
      "Use máscara de solda com o filtro certo para o processo, e óculos por baixo. Proteja a pele com mangas longas e roupas de material resistente.",
      "Quem está ao redor também corre risco. Use biombos e nunca olhe diretamente para o arco: a chamada 'vista queimada' causa dor intensa e pode deixar sequelas."
    ],
    caso: "Um ajudante ficou observando o soldador trabalhar sem proteção nos olhos. À noite, acordou com dor intensa, olhos vermelhos e sensação de areia nos olhos.",
    perguntas: [
      "Os locais onde soldamos têm boa ventilação?",
      "Por que não olhar o arco da solda?",
      "Como proteger quem está por perto?"
    ],
    mensagem: "Solda protege a peça; o EPI protege o soldador."
  },
  {
    id: "impermeabilizacao-quente",
    titulo: "Impermeabilização a quente: asfalto e maçarico",
    categoria: "Incêndio e emergência",
    nr: "NR-18",
    duracao: 4,
    tags: ["fogo", "calor", "epi"],
    objetivo: "Prevenir queimaduras e incêndios na aplicação de mantas e asfalto quente.",
    texto: [
      "A aplicação de manta asfáltica com maçarico e o uso de asfalto quente envolvem chamas, gás e material em alta temperatura. Os riscos são queimaduras graves, incêndio e inalação de vapores.",
      "Verifique o cilindro, a mangueira e o regulador do maçarico antes de começar. Mantenha o extintor por perto e afaste materiais combustíveis.",
      "Use luvas e mangotes de raspa, botinas, calça comprida e proteção para o rosto. Trabalhe com ventilação adequada, principalmente em locais fechados como caixas d'água e subsolos.",
      "Nunca deixe o maçarico aceso sem supervisão e feche o gás ao terminar."
    ],
    caso: "O maçarico ficou aceso apoiado no chão enquanto o aplicador ajustava a manta. A chama atingiu rolos de manta empilhados e iniciou um incêndio na cobertura.",
    perguntas: [
      "Onde fica o extintor durante a impermeabilização?",
      "Quais EPIs são necessários?",
      "Por que a ventilação é importante em locais fechados?"
    ],
    mensagem: "Chama acesa exige atenção total."
  },
  {
    id: "gesso-drywall",
    titulo: "Gesso e drywall: poeira, cortes e postura",
    categoria: "Ergonomia",
    nr: "NR-17 / NR-6",
    duracao: 4,
    tags: ["poeira", "ergonomia", "ferramentas"],
    objetivo: "Reduzir os riscos nos serviços de gesso e drywall.",
    texto: [
      "Placas de drywall são grandes e pesadas, o lixamento gera muita poeira e o trabalho em forros exige ficar muito tempo com os braços acima da cabeça.",
      "Transporte placas em dupla ou com carrinho próprio. Use estilete com lâmina retrátil e corte sempre na direção oposta ao corpo.",
      "No lixamento, use máscara PFF2 e óculos e prefira lixadeiras com aspiração. Mantenha o ambiente ventilado.",
      "Em forros, use plataformas ou andaimes na altura certa para não trabalhar com os braços esticados. Faça pausas e alongue os ombros e o pescoço."
    ],
    caso: "Um montador de drywall cortava uma placa puxando o estilete em direção ao corpo. A lâmina escorregou e causou um corte profundo na coxa.",
    perguntas: [
      "Como transportar as placas com segurança?",
      "Para que lado se puxa o estilete?",
      "Como reduzir o esforço nos ombros ao montar forros?"
    ],
    mensagem: "Estilete para longe do corpo, máscara no rosto."
  },
  {
    id: "vidros",
    titulo: "Vidros: transporte e instalação",
    categoria: "Ferramentas",
    nr: "NR-18",
    duracao: 4,
    tags: ["ferramentas", "altura", "epi"],
    objetivo: "Prevenir cortes graves e quedas no manuseio de vidros.",
    texto: [
      "Vidros são pesados, escorregadios e, quando quebram, produzem bordas extremamente cortantes. Um corte com vidro pode atingir veias e tendões.",
      "Use luvas anticorte, mangotes, óculos e botinas. Transporte as chapas na vertical, com ventosas ou cavaletes próprios, e em número suficiente de pessoas.",
      "Isole a área durante a instalação, principalmente em fachadas. Ninguém deve ficar embaixo de vidros sendo içados ou instalados.",
      "Cacos e sobras devem ir para um recipiente resistente e identificado, nunca soltos no entulho."
    ],
    caso: "Dois vidraceiros carregavam uma chapa grande sem ventosas. A chapa escorregou, quebrou e um dos trabalhadores teve um corte profundo no antebraço.",
    perguntas: [
      "Quais EPIs usamos para manusear vidros?",
      "Por que o vidro deve ser transportado na vertical?",
      "Como descartar os cacos corretamente?"
    ],
    mensagem: "Vidro exige mãos protegidas e movimento planejado."
  },
  {
    id: "estrutura-metalica",
    titulo: "Montagem de estrutura metálica",
    categoria: "Içamento de cargas",
    nr: "NR-18 / NR-35",
    duracao: 5,
    tags: ["altura", "icamento"],
    objetivo: "Destacar os riscos combinados de altura e içamento na montagem de estruturas.",
    texto: [
      "Na montagem de estruturas metálicas, os trabalhadores ficam em altura, sobre vigas estreitas, recebendo peças pesadas içadas por guindaste. É uma das atividades de maior risco na construção.",
      "O trabalho deve seguir um plano de montagem e um plano de içamento. As peças só são soltas do guindaste depois de fixadas com o número mínimo de parafusos definido.",
      "Os montadores devem estar sempre presos a linhas de vida ou trava-quedas. Ninguém caminha sobre vigas sem estar ancorado.",
      "Use cordas-guia para posicionar as peças. Ferramentas devem estar amarradas para não caírem, e a área embaixo da montagem deve ser isolada."
    ],
    caso: "Uma viga foi solta do guindaste com apenas um parafuso provisório. A peça girou e derrubou o montador, que estava sem talabarte conectado.",
    perguntas: [
      "Quando a peça pode ser solta do guindaste?",
      "Onde os montadores se ancoram durante o deslocamento?",
      "Como evitar a queda de ferramentas?"
    ],
    mensagem: "Peça fixada, montador ancorado, área isolada."
  },
  {
    id: "tubulao",
    titulo: "Tubulão e poço de fundação",
    categoria: "Escavações",
    nr: "NR-18 / NR-33",
    duracao: 5,
    tags: ["escavacao", "espaco-confinado"],
    objetivo: "Alertar para os riscos de soterramento, falta de ar e queda em tubulões.",
    texto: [
      "Tubulões e poços de fundação são escavações estreitas e profundas. Neles existe risco de desmoronamento, queda de objetos, falta de oxigênio e presença de gases.",
      "A escavação deve seguir o projeto e ter revestimento ou escoramento quando necessário. A boca do poço precisa de proteção e guarda-corpo, e materiais não podem ficar próximos da borda.",
      "A descida e a subida devem ser feitas com equipamento adequado e o trabalhador deve usar cinto conectado a um sistema de resgate, com alguém sempre de vigia na superfície. Meça a atmosfera e garanta ventilação.",
      "Ao sentir falta de ar, tontura ou cheiro diferente, saia imediatamente."
    ],
    caso: "Um trabalhador desceu em um tubulão sem medição de gases e sem ventilação. Perdeu a consciência no fundo e precisou ser resgatado pelos bombeiros.",
    perguntas: [
      "Quais são os riscos de um tubulão?",
      "Qual o papel do vigia na superfície?",
      "Por que medir a atmosfera antes de descer?"
    ],
    mensagem: "Poço fundo pede proteção, ventilação e vigia."
  },
  {
    id: "estacas",
    titulo: "Estacas e bate-estaca: área isolada",
    categoria: "Máquinas e equipamentos",
    nr: "NR-18 / NR-12",
    duracao: 4,
    tags: ["maquinas", "epi"],
    objetivo: "Prevenir acidentes na execução de estacas e fundações profundas.",
    texto: [
      "Bate-estacas e perfuratrizes são máquinas de grande porte, com peças pesadas em movimento, cabos sob tensão e muito ruído.",
      "A área de operação deve ser isolada e sinalizada. Ninguém fica próximo ao martelo, à torre ou aos cabos durante a operação. A máquina deve estar em solo firme e nivelado para não tombar.",
      "Os cabos de aço devem ser inspecionados diariamente. A comunicação entre o operador e os ajudantes precisa ser clara e combinada antes de iniciar.",
      "Use protetor auricular, capacete, óculos e botinas. Furos de estacas abertos devem ser cobertos ou protegidos para evitar quedas."
    ],
    caso: "Um ajudante entrou na área de operação do bate-estaca para recolher um calço. O cabo se rompeu e chicoteou próximo a ele, causando ferimentos no braço.",
    perguntas: [
      "Qual é a área isolada da máquina?",
      "Como combinamos a comunicação com o operador?",
      "O que fazer com os furos de estaca abertos?"
    ],
    mensagem: "Máquina de fundação trabalha sozinha na sua área."
  },
  {
    id: "esgotamento-valas",
    titulo: "Água em valas e bombas de esgotamento",
    categoria: "Escavações",
    nr: "NR-18 / NR-10",
    duracao: 4,
    tags: ["escavacao", "chuva", "eletricidade"],
    objetivo: "Prevenir desmoronamentos e choques em escavações com água.",
    texto: [
      "A água acumulada em valas e escavações enfraquece o solo, aumenta o risco de desmoronamento e esconde buracos e objetos no fundo.",
      "Depois de chuvas ou quando há lençol freático alto, a escavação deve ser avaliada antes de alguém descer. As bombas de esgotamento devem ser instaladas de forma segura.",
      "Bombas elétricas precisam de cabos em bom estado, ligação a quadro com DR e manuseio apenas quando desligadas. Nunca entre na água com a bomba ligada.",
      "Bombas a combustão devem ficar fora de valas e locais fechados, por causa da fumaça."
    ],
    caso: "Um ajudante entrou na vala alagada para reposicionar a bomba submersa, que estava ligada e com o cabo danificado. Levou um choque dentro da água.",
    perguntas: [
      "Como a água afeta a estabilidade da vala?",
      "O que fazer antes de mexer na bomba?",
      "Onde deve ficar uma bomba a combustão?"
    ],
    mensagem: "Vala com água: primeiro avalie, depois desligue, só então entre."
  },
  {
    id: "medicao-gases",
    titulo: "Atmosfera perigosa: por que medir antes de entrar",
    categoria: "Espaço confinado",
    nr: "NR-33",
    duracao: 5,
    tags: ["espaco-confinado"],
    objetivo: "Explicar a importância da medição de gases em espaços confinados.",
    texto: [
      "Dentro de caixas, galerias, poços e reservatórios, o ar pode ter pouco oxigênio ou conter gases tóxicos e inflamáveis. Nossos sentidos não conseguem perceber esses perigos.",
      "Antes de entrar, a atmosfera deve ser medida com detector calibrado, em diferentes alturas, verificando oxigênio, gases inflamáveis e gases tóxicos. A medição deve continuar durante todo o trabalho.",
      "Se os valores não estiverem seguros, ninguém entra. É preciso ventilar e medir novamente.",
      "Ao ouvir o alarme do detector, todos saem imediatamente, sem terminar o serviço."
    ],
    caso: "Uma equipe mediu a atmosfera apenas na boca de uma caixa de inspeção. No fundo, havia acúmulo de gás. Um trabalhador passou mal ao descer e foi resgatado pelo vigia.",
    perguntas: [
      "Quais gases o detector mede?",
      "Por que medir em diferentes alturas?",
      "O que fazer quando o alarme toca?"
    ],
    mensagem: "No espaço confinado, quem decide se é seguro é o detector."
  },
  {
    id: "isolamento-area",
    titulo: "Isolamento e sinalização de áreas de risco",
    categoria: "Comportamento seguro",
    nr: "NR-18 / NR-26",
    duracao: 4,
    tags: ["comportamento", "icamento"],
    objetivo: "Reforçar a importância de isolar áreas de risco e respeitar os isolamentos.",
    texto: [
      "Içamentos, serviços em altura, escavações, testes elétricos e demolições criam zonas onde ninguém deve entrar sem autorização. O isolamento é o que mantém as pessoas fora delas.",
      "Isole com barreiras, cones, correntes ou fitas, sempre acompanhados de placas que digam qual é o risco. O isolamento deve ser grande o suficiente para cobrir toda a área de perigo.",
      "Quem montou o isolamento é responsável por retirá-lo quando o serviço acabar. Isolamento esquecido faz as pessoas deixarem de respeitar os outros.",
      "Nunca passe por baixo de fitas ou remova barreiras sem autorização."
    ],
    caso: "Um isolamento de içamento cobria apenas a área da carga, mas não o trajeto de giro da grua. Um trabalhador que passava fora da fita foi atingido de raspão pela carga.",
    perguntas: [
      "Quais áreas precisam de isolamento hoje?",
      "Quem retira o isolamento quando o serviço acaba?",
      "Por que o isolamento deve indicar o risco?"
    ],
    mensagem: "Área isolada se respeita; isolamento esquecido se retira."
  }
]);
