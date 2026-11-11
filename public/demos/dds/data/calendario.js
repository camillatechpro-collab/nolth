// Campanhas e datas que influenciam a sugestão do "DDS de hoje".
// mes: 1–12 · de/ate: dias do mês (opcional; sem eles vale o mês inteiro)
// tags: os DDS com alguma dessas tags ganham prioridade nesse período.
window.DDS_CALENDARIO = [
  { mes: 1, nome: 'Janeiro Branco', descricao: 'Mês de conscientização sobre saúde mental. Também é época de calor forte: atenção à hidratação.', tags: ['saude-mental', 'calor'] },
  { mes: 2, nome: 'Carnaval', descricao: 'Período de festas: reforce álcool e direção, retorno ao trabalho e descanso adequado.', tags: ['alcool', 'transito', 'calor'] },
  { mes: 3, nome: 'Período de chuvas', descricao: 'Chuvas e ventos fortes: descargas atmosféricas, escavações e piso escorregadio.', tags: ['chuva', 'escavacao'] },
  { mes: 4, de: 22, ate: 30, nome: '28 de abril — Dia Mundial da Segurança e Saúde no Trabalho', descricao: 'Semana em memória das vítimas de acidentes e doenças do trabalho.', tags: ['comportamento', 'altura', 'epi'] },
  { mes: 4, nome: 'Abril Verde', descricao: 'Mês da prevenção de acidentes e doenças do trabalho.', tags: ['comportamento', 'altura', 'epi', 'maquinas'] },
  { mes: 5, nome: 'Maio Amarelo', descricao: 'Movimento pela segurança no trânsito, dentro e fora do canteiro.', tags: ['transito'] },
  { mes: 6, nome: 'Festas juninas e frio', descricao: 'Fogos, fogueiras e queimaduras. Em algumas regiões, frio e baixa umidade.', tags: ['fogo', 'primeiros-socorros'] },
  { mes: 7, nome: 'Julho — tempo seco', descricao: 'Ar seco e poeira: proteção respiratória, hidratação e risco de incêndio.', tags: ['poeira', 'fogo', 'calor'] },
  { mes: 8, nome: 'Agosto — combate ao fumo', descricao: '29/08 é o Dia Nacional de Combate ao Fumo.', tags: ['tabagismo', 'saude'] },
  { mes: 9, nome: 'Setembro Amarelo', descricao: 'Prevenção ao suicídio e cuidado com a saúde mental.', tags: ['saude-mental'] },
  { mes: 10, nome: 'Outubro Rosa', descricao: 'Prevenção do câncer de mama. Bom momento para falar de saúde e exames.', tags: ['saude', 'cancer'] },
  { mes: 11, nome: 'Novembro Azul', descricao: 'Saúde do homem e prevenção do câncer de próstata.', tags: ['saude', 'cancer'] },
  { mes: 12, nome: 'Fim de ano', descricao: 'Festas, viagens e calor: álcool e direção, cansaço e pressa para entregar a obra.', tags: ['alcool', 'transito', 'calor', 'comportamento'] },
];
