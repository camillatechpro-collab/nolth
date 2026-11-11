/* Dados FICTÍCIOS para a demonstração no site da NOLTH.
 * Carregado depois de app.js e gestao.js (usa novoId, TERMO_PADRAO) e antes de nuvem.js, que abre o app.
 * Só preenche quando o navegador ainda não tem dados do app; as datas são relativas a hoje,
 * para o painel sempre mostrar trocas atrasadas, próximas trocas, estoque baixo e assinaturas pendentes.
 */
(function () {
  const MARCA = 'fichaEpi.demoSemeado';
  const temDados = Object.keys(localStorage).some((k) => k.startsWith('fichaEpi.') && k !== MARCA);
  if (temDados || localStorage.getItem(MARCA)) return;

  const dia = (n) => {
    const d = new Date();
    d.setDate(d.getDate() + n);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  };
  const agora = new Date().toISOString();
  const set = (k, v) => localStorage.setItem(k, JSON.stringify(v));

  // Catálogo de EPIs (sem CA: os números reais devem vir da base CAEPI do cliente)
  const epi = (nome, descricao, vidaUtil, estoqueMinimo) => ({ id: novoId(), ca: '', nome, descricao, vidaUtil, estoqueMinimo, criadoEm: agora });
  const E = {
    capacete: epi('Capacete de segurança', 'Classe B, com jugular', 730, 5),
    oculos: epi('Óculos de proteção', 'Lente incolor, antirrisco', 180, 10),
    plug: epi('Protetor auricular tipo plug', 'Silicone, com cordão', 30, 50),
    luva: epi('Luva de vaqueta', 'Punho com elástico', 30, 20),
    botina: epi('Botina de segurança', 'Bico de composite', 365, 5),
  }
  set('fichaEpi.epis', Object.values(E));

  // Estoque: saldo inicial e uma saída (Óculos fica abaixo do mínimo)
  const mov = (e, qtd, data, obs) => ({ id: novoId(), epiId: e.id, data, qtd, obs });
  set('fichaEpi.estoque', [
    mov(E.capacete, 15, dia(-120), 'Saldo inicial'),
    mov(E.oculos, 12, dia(-120), 'Saldo inicial'),
    mov(E.plug, 200, dia(-120), 'Saldo inicial'),
    mov(E.luva, 40, dia(-120), 'Saldo inicial'),
    mov(E.botina, 10, dia(-120), 'Saldo inicial'),
    mov(E.oculos, -2, dia(-15), 'Avaria'),
  ]);

  // Funções e kit de EPIs
  const kit = (...lista) => lista.map(([e, qtd]) => ({ epiId: e.id, qtd }));
  set('fichaEpi.funcoes', [
    { nome: 'Eletricista', setor: 'Instalações', kit: kit([E.capacete, 1], [E.oculos, 1], [E.botina, 1], [E.plug, 2]) },
    { nome: 'Pedreiro', setor: 'Obra', kit: kit([E.capacete, 1], [E.oculos, 1], [E.luva, 2], [E.botina, 1]) },
    { nome: 'Servente', setor: 'Obra', kit: kit([E.capacete, 1], [E.luva, 2], [E.botina, 1]) },
  ]);

  // Colaboradores fictícios (sem CPF)
  const colab = (nome, funcao, setor, matricula, admissao) => ({
    id: novoId(), nome, cpf: '', funcao, setor, matricula, admissao, ativo: true, criadoEm: agora });
  const C = {
    carlos: colab('Carlos Mendes', 'Pedreiro', 'Obra', '1021', dia(-900)),
    ana: colab('Ana Ribeiro', 'Eletricista', 'Instalações', '1034', dia(-420)),
    joao: colab('João Batista', 'Pedreiro', 'Obra', '1047', dia(-200)),
    marcos: colab('Marcos Lima', 'Servente', 'Obra', '1052', dia(-60)),
  }
  set('fichaEpi.colaboradores', Object.values(C));

  // Fichas de entrega
  const item = (e, qtd, entrega, recebido = true) => ({
    uid: novoId(), epiId: e.id, epi: e.nome, descricao: e.descricao, ca: '', qtd, entrega, recebimento: recebido ? entrega : '' });
  const ficha = (c, data, itens) => ({
    id: novoId(), colaborador: c.nome, colaboradorId: c.id, funcao: c.funcao, data,
    empresaNome: 'Construtora Exemplo Ltda', empresaCnpj: '', empresaLogo: '',
    itens, termo: TERMO_PADRAO, obs: '', cpf: '', assinaturas: [], criadoEm: agora, atualizadoEm: agora });
  set('fichaEpi.fichas', [
    ficha(C.carlos, dia(-40), [item(E.capacete, 1, dia(-40)), item(E.oculos, 1, dia(-40)), item(E.luva, 2, dia(-40)), item(E.botina, 1, dia(-40))]),
    ficha(C.ana, dia(-25), [item(E.capacete, 1, dia(-25)), item(E.oculos, 1, dia(-25)), item(E.botina, 1, dia(-25))]),
    ficha(C.joao, dia(-20), [item(E.capacete, 1, dia(-20)), item(E.oculos, 1, dia(-20)), item(E.luva, 2, dia(-20)), item(E.botina, 1, dia(-20))]),
    ficha(C.marcos, dia(-2), [item(E.capacete, 1, dia(-2), false), item(E.luva, 2, dia(-2), false), item(E.botina, 1, dia(-2), false)]),
  ]);

  set('fichaEpi.ultimaEmpresa', { nome: 'Construtora Exemplo Ltda', cnpj: '', logo: '' });
  localStorage.setItem(MARCA, '1');
})();
