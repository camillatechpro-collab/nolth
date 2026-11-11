/* DDS Diário — app sem servidor: tudo fica salvo no próprio aparelho (localStorage). */
(() => {
  'use strict';

  const BIBLIOTECA = window.DDS_LIB || [];
  const CALENDARIO = window.DDS_CALENDARIO || [];
  const $app = document.getElementById('app');

  // ---------- Armazenamento ----------
  const store = {
    get(chave, padrao) {
      try {
        const v = localStorage.getItem('dds_' + chave);
        return v ? JSON.parse(v) : padrao;
      } catch { return padrao; }
    },
    set(chave, valor) { localStorage.setItem('dds_' + chave, JSON.stringify(valor)); },
  };
  const config = () => ({ empresa: '', cnpj: '', obra: '', responsavel: '', linhas: 20, fonte: 19, ...store.get('config', {}) });

  // ---------- CNPJ (numérico e alfanumérico, este último em vigor desde jul/2026) ----------
  const limparCNPJ = (v) => String(v || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 14);
  function formatarCNPJ(v) {
    const c = limparCNPJ(v);
    return [c.slice(0, 2), c.slice(2, 5), c.slice(5, 8)].filter(Boolean).join('.')
      + (c.length > 8 ? '/' + c.slice(8, 12) : '')
      + (c.length > 12 ? '-' + c.slice(12) : '');
  }
  function cnpjValido(v) {
    const c = limparCNPJ(v);
    if (!/^[A-Z0-9]{12}\d{2}$/.test(c) || /^(.)\1+$/.test(c)) return false;
    // Cada caractere vale (código ASCII − 48): dígitos 0–9, letras A=17 … Z=42. Pesos 2 a 9 da direita para a esquerda.
    const dv = (base) => {
      let soma = 0, peso = 2;
      for (let i = base.length - 1; i >= 0; i--) { soma += (base.charCodeAt(i) - 48) * peso; peso = peso === 9 ? 2 : peso + 1; }
      const resto = soma % 11;
      return resto < 2 ? 0 : 11 - resto;
    };
    const d1 = dv(c.slice(0, 12));
    const d2 = dv(c.slice(0, 12) + d1);
    return c.slice(12) === `${d1}${d2}`;
  }
  function prepararCampoCNPJ(input) {
    input.value = formatarCNPJ(input.value);
    input.setCustomValidity(input.value && !cnpjValido(input.value) ? 'CNPJ inválido. Confira os números (e letras, se houver).' : '');
  }
  // Empresas já usadas (histórico + ajustes), com o CNPJ mais recente de cada uma.
  function empresasConhecidas() {
    const mapa = new Map();
    const c = config();
    if (c.empresa) mapa.set(c.empresa.toLowerCase(), { nome: c.empresa, cnpj: c.cnpj || '' });
    [...historico()].sort((a, b) => a.data.localeCompare(b.data)).forEach((h) => {
      if (h.empresa) mapa.set(h.empresa.toLowerCase(), { nome: h.empresa, cnpj: h.cnpj || mapa.get(h.empresa.toLowerCase())?.cnpj || '' });
    });
    return [...mapa.values()];
  }

  // ---------- Utilidades ----------
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const semAcento = (s) => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  const isoDe = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  const hojeISO = () => isoDe(new Date());
  const fmtData = (iso) => { const [a, m, d] = String(iso).split('-'); return `${d}/${m}/${a}`; };
  const hashTexto = (str) => { let h = 2166136261; for (const c of str) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; };

  function toast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('mostrar');
    clearTimeout(toast._t);
    toast._t = setTimeout(() => t.classList.remove('mostrar'), 2400);
  }

  const meus = () => store.get('meus', []);
  const todos = () => [...BIBLIOTECA, ...meus()];
  const porId = (id) => todos().find((d) => d.id === id);
  const historico = () => store.get('historico', []);
  const favoritos = () => new Set(store.get('favoritos', []));
  const feitosSet = () => new Set(historico().map((h) => h.id));
  const categorias = () => [...new Set(todos().map((d) => d.categoria))].sort((a, b) => a.localeCompare(b, 'pt-BR'));

  // ---------- Calendário de campanhas ----------
  function campanhaDoDia(data = new Date()) {
    const m = data.getMonth() + 1, d = data.getDate();
    const casa = (c) => c.mes === m && d >= (c.de || 1) && d <= (c.ate || 31);
    // Campanhas com período específico (ex.: semana do 28/04) têm prioridade sobre as do mês inteiro.
    return CALENDARIO.filter((c) => c.de).find(casa) || CALENDARIO.filter((c) => !c.de).find(casa) || null;
  }

  // ---------- Escolha do DDS do dia ----------
  // Mesmo dia = mesmo DDS (até você pedir outro). Prioriza temas ainda não realizados
  // e, em parte dos dias, temas da campanha do mês.
  function ddsDoDia(trocar = false) {
    const hoje = hojeISO();
    const salvo = store.get('hoje', null);
    const doDia = salvo && salvo.data === hoje;
    if (!trocar && doDia && porId(salvo.id)) return porId(salvo.id);

    const pulados = doDia ? [...(salvo.pulados || [])] : [];
    if (trocar && doDia) pulados.push(salvo.id);

    const lista = todos();
    if (!lista.length) return null;
    const feitos = feitosSet();
    let pool = lista.filter((d) => !feitos.has(d.id) && !pulados.includes(d.id));

    if (!pool.length) {
      // Todos já foram dados: volta aos que foram feitos há mais tempo.
      const ultimaVez = {};
      historico().forEach((h) => { if (!ultimaVez[h.id] || h.data > ultimaVez[h.id]) ultimaVez[h.id] = h.data; });
      const ordenados = lista.filter((d) => !pulados.includes(d.id))
        .sort((a, b) => (ultimaVez[a.id] || '').localeCompare(ultimaVez[b.id] || ''));
      pool = ordenados.slice(0, Math.max(5, Math.ceil(ordenados.length / 3)));
      if (!pool.length) { pulados.length = 0; pool = lista; }
    }

    const semente = hashTexto(hoje + '|' + pulados.length);
    const camp = campanhaDoDia();
    let escolhaPool = pool;
    if (camp) {
      const daCampanha = pool.filter((d) => (d.tags || []).some((t) => camp.tags.includes(t)));
      if (daCampanha.length && semente % 3 !== 0) escolhaPool = daCampanha;
    }
    const dds = escolhaPool[semente % escolhaPool.length];
    store.set('hoje', { data: hoje, id: dds.id, pulados });
    return dds;
  }

  // ---------- Leitura em voz alta ----------
  function pararVoz() {
    if ('speechSynthesis' in window) speechSynthesis.cancel();
    document.querySelectorAll('[data-acao="voz"]').forEach((b) => { b.textContent = '🔊 Ler em voz alta'; b.setAttribute('aria-pressed', 'false'); });
  }
  function lerEmVoz(dds, btn) {
    if (!('speechSynthesis' in window)) { toast('Este navegador não tem leitura em voz alta.'); return; }
    if (speechSynthesis.speaking) { pararVoz(); return; }
    const vozes = speechSynthesis.getVoices();
    const voz = vozes.find((v) => /pt[-_]br/i.test(v.lang)) || vozes.find((v) => /^pt/i.test(v.lang));
    const partes = [
      dds.titulo,
      'Objetivo: ' + dds.objetivo,
      ...dds.texto,
      dds.caso ? 'Caso para reflexão. ' + dds.caso : '',
      dds.perguntas?.length ? 'Perguntas para a turma. ' + dds.perguntas.join(' ') : '',
      dds.mensagem || '',
    ].filter(Boolean);
    partes.forEach((texto, i) => {
      const u = new SpeechSynthesisUtterance(texto);
      u.lang = 'pt-BR';
      if (voz) u.voice = voz;
      u.rate = 0.95;
      if (i === partes.length - 1) u.onend = pararVoz;
      speechSynthesis.speak(u);
    });
    btn.textContent = '⏹ Parar leitura';
    btn.setAttribute('aria-pressed', 'true');
  }

  // ---------- Impressão com lista de presença ----------
  function imprimir(dds) {
    const c = config();
    const linhas = Math.min(Math.max(parseInt(c.linhas, 10) || 20, 5), 60);
    // Empresa dos Ajustes; se não houver, a última usada no histórico.
    const ultima = [...historico()].filter((h) => h.empresa).sort((a, b) => a.data.localeCompare(b.data)).pop();
    const empresa = c.empresa || ultima?.empresa || '';
    const cnpj = c.empresa ? c.cnpj : (ultima?.cnpj || '');
    const cab = `
      <table class="imp-cab">
        <tr><td colspan="4" class="imp-titulo">DDS — DIÁLOGO DIÁRIO DE SEGURANÇA</td></tr>
        <tr><td colspan="3"><b>Empresa:</b> ${esc(empresa)}</td><td><b>CNPJ:</b> ${esc(cnpj)}</td></tr>
        <tr><td colspan="4"><b>Obra / frente:</b> ${esc(c.obra)}</td></tr>
        <tr><td><b>Data:</b> ____/____/______</td><td><b>Início:</b> ____:____</td><td><b>Término:</b> ____:____</td><td><b>Duração prevista:</b> ${esc(dds.duracao || 5)} min</td></tr>
        <tr><td colspan="2"><b>Tema:</b> ${esc(dds.titulo)}</td><td colspan="2"><b>Responsável:</b> ${esc(c.responsavel)}</td></tr>
      </table>`;
    const corpo = `
      <h1>${esc(dds.titulo)}</h1>
      <p><b>Objetivo:</b> ${esc(dds.objetivo)}</p>
      ${dds.texto.map((p) => `<p>${esc(p)}</p>`).join('')}
      ${dds.caso ? `<h2>Caso para reflexão</h2><p>${esc(dds.caso)}</p>` : ''}
      ${dds.perguntas?.length ? `<h2>Perguntas para a turma</h2><ol>${dds.perguntas.map((q) => `<li>${esc(q)}</li>`).join('')}</ol>` : ''}
      ${dds.mensagem ? `<div class="imp-msg">${esc(dds.mensagem)}</div>` : ''}
      ${dds.nr ? `<p style="font-size:9pt;margin-top:6px">Referência: ${esc(dds.nr)}</p>` : ''}`;
    const presenca = `
      <div class="imp-quebra"></div>
      ${cab}
      <h2>Lista de presença</h2>
      <table class="imp-presenca">
        <thead><tr><th>Nº</th><th>Nome</th><th style="width:22%">Função</th><th style="width:28%">Assinatura</th></tr></thead>
        <tbody>${Array.from({ length: linhas }, (_, i) => `<tr><td>${i + 1}</td><td></td><td></td><td></td></tr>`).join('')}</tbody>
      </table>
      <div class="imp-assin"><div>Responsável pelo DDS</div><div>Técnico / Engenheiro de Segurança</div></div>`;
    document.getElementById('impressao').innerHTML = cab + corpo + presenca;
    window.print();
  }

  // ---------- Diálogo "realizado" ----------
  function registrarRealizado(dds) {
    const dlg = document.getElementById('dlg-realizado');
    const f = dlg.querySelector('form');
    f.reset();
    dlg.querySelector('.dlg-tema').textContent = dds.titulo;
    const c = config();
    f.data.value = hojeISO();
    f.obra.value = c.obra || '';
    // Sugere a última empresa usada (ou a dos Ajustes).
    const ultimo = [...historico()].filter((h) => h.empresa).sort((a, b) => a.data.localeCompare(b.data)).pop();
    f.empresa.value = ultimo?.empresa || c.empresa || '';
    f.cnpj.value = ultimo ? (ultimo.cnpj || '') : (c.cnpj || '');
    prepararCampoCNPJ(f.cnpj);
    document.getElementById('lista-empresas').innerHTML = empresasConhecidas().map((e) => `<option value="${esc(e.nome)}">`).join('');
    f.oninput = (e) => {
      if (e.target.name === 'cnpj') prepararCampoCNPJ(e.target);
      if (e.target.name === 'empresa') {
        const achada = empresasConhecidas().find((x) => x.nome.toLowerCase() === e.target.value.trim().toLowerCase());
        if (achada && achada.cnpj) { f.cnpj.value = achada.cnpj; prepararCampoCNPJ(f.cnpj); }
      }
    };
    f.onsubmit = (e) => {
      if (!e.submitter || e.submitter.value !== 'ok') return;
      const h = historico();
      h.push({
        uid: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
        id: dds.id,
        titulo: dds.titulo,
        categoria: dds.categoria,
        data: f.data.value || hojeISO(),
        empresa: f.empresa.value.trim(),
        cnpj: formatarCNPJ(f.cnpj.value),
        obra: f.obra.value.trim(),
        participantes: f.participantes.value ? Number(f.participantes.value) : null,
        obs: f.obs.value.trim(),
      });
      store.set('historico', h);
      toast('DDS registrado no histórico ✓');
      render();
    };
    dlg.showModal();
  }

  // ---------- Componentes de tela ----------
  function htmlLeitor(dds) {
    const fav = favoritos().has(dds.id);
    const feitoHoje = historico().some((h) => h.id === dds.id && h.data === hojeISO());
    return `
      <div class="barra" role="toolbar" aria-label="Ações do DDS">
        <button class="btn amarelo" data-acao="voz" aria-pressed="false">🔊 Ler em voz alta</button>
        <button class="btn" data-acao="imprimir">🖨️ Imprimir / PDF</button>
        <button class="btn ${feitoHoje ? 'sec' : 'verde'}" data-acao="realizado">${feitoHoje ? '✓ Registrado hoje' : '✓ Marcar como realizado'}</button>
        <button class="btn sec" data-acao="favorito" aria-pressed="${fav}">${fav ? '★ Favorito' : '☆ Favoritar'}</button>
        <button class="btn sec peq" data-acao="fonte-menos" title="Diminuir letra" aria-label="Diminuir letra">A−</button>
        <button class="btn sec peq" data-acao="fonte-mais" title="Aumentar letra" aria-label="Aumentar letra">A+</button>
      </div>
      <article class="cartao dds" style="--fonte-leitura:${config().fonte}px">
        <div class="dds-meta">
          <span class="selo">${esc(dds.categoria)}</span>
          ${dds.nr ? `<span class="selo nr">${esc(dds.nr)}</span>` : ''}
          ${dds.personalizado ? '<span class="selo meu">Meu DDS</span>' : ''}
          <span>⏱ ${esc(dds.duracao || 5)} min</span>
        </div>
        <h1>${esc(dds.titulo)}</h1>
        <p class="objetivo"><strong>Objetivo:</strong> ${esc(dds.objetivo)}</p>
        <section class="leitura">${dds.texto.map((p) => `<p>${esc(p)}</p>`).join('')}</section>
        ${dds.caso ? `<section class="caso"><h2>Caso para reflexão</h2><p>${esc(dds.caso)}</p></section>` : ''}
        ${dds.perguntas?.length ? `<section class="perguntas"><h2>Perguntas para a turma</h2><ol>${dds.perguntas.map((q) => `<li>${esc(q)}</li>`).join('')}</ol></section>` : ''}
        ${dds.mensagem ? `<blockquote class="mensagem">${esc(dds.mensagem)}</blockquote>` : ''}
      </article>
      <div class="barra">
        ${dds.personalizado
          ? `<a class="btn sec" href="#/meus/editar/${encodeURIComponent(dds.id)}">✏️ Editar</a>`
          : `<a class="btn sec" href="#/meus/copiar/${encodeURIComponent(dds.id)}">✏️ Copiar e adaptar</a>`}
      </div>`;
  }

  function htmlItem(d, feitos, favs) {
    return `
      <a class="item" href="#/dds/${encodeURIComponent(d.id)}">
        <h3>${favs.has(d.id) ? '★ ' : ''}${esc(d.titulo)}</h3>
        <div class="selos">
          <span class="selo">${esc(d.categoria)}</span>
          ${d.nr ? `<span class="selo nr">${esc(d.nr)}</span>` : ''}
          ${d.personalizado ? '<span class="selo meu">Meu DDS</span>' : ''}
          ${feitos.has(d.id) ? '<span class="selo feito">✓ já realizado</span>' : ''}
        </div>
        <p>${esc(d.objetivo)}</p>
      </a>`;
  }

  // ---------- Telas ----------
  let ddsAtual = null;

  function telaHoje() {
    const dds = ddsDoDia(false);
    ddsAtual = dds;
    const camp = campanhaDoDia();
    const dataLonga = new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    const dataExt = dataLonga.charAt(0).toUpperCase() + dataLonga.slice(1);
    const obra = config().obra;
    if (!dds) return `<div class="cartao vazio">Nenhum DDS na biblioteca.</div>`;
    return `
      <div class="saudacao">
        <div>
          <h1>DDS de hoje</h1>
          <p class="data">${esc(dataExt)}${obra ? ' · ' + esc(obra) : ''}</p>
        </div>
        <button class="btn sec" data-acao="trocar">🔄 Outro tema</button>
      </div>
      ${camp ? `<div class="campanha"><strong>📣 ${esc(camp.nome)}</strong><span>${esc(camp.descricao)}</span></div>` : ''}
      ${htmlLeitor(dds)}`;
  }

  function telaDds(id) {
    const dds = porId(id);
    ddsAtual = dds;
    if (!dds) return `<div class="cartao vazio">DDS não encontrado. <a href="#/biblioteca">Voltar à biblioteca</a></div>`;
    return `<p><a href="#/biblioteca">← Biblioteca</a></p>${htmlLeitor(dds)}`;
  }

  const filtroBib = { busca: '', categoria: '', favoritos: false, pendentes: false };
  function telaBiblioteca() {
    const cats = categorias();
    return `
      <h1>Biblioteca de DDS</h1>
      <div class="filtros">
        <input type="search" id="f-busca" placeholder="Buscar tema, NR ou palavra (ex.: andaime, NR-35, calor)" value="${esc(filtroBib.busca)}" aria-label="Buscar">
        <select id="f-cat" aria-label="Categoria">
          <option value="">Todas as categorias</option>
          ${cats.map((c) => `<option ${c === filtroBib.categoria ? 'selected' : ''}>${esc(c)}</option>`).join('')}
        </select>
      </div>
      <div class="barra">
        <button class="btn sec peq" data-acao="f-fav" aria-pressed="${filtroBib.favoritos}">★ Só favoritos</button>
        <button class="btn sec peq" data-acao="f-pend" aria-pressed="${filtroBib.pendentes}">Só os não realizados</button>
      </div>
      <div id="resultado"></div>`;
  }
  function atualizarBiblioteca() {
    const alvo = document.getElementById('resultado');
    if (!alvo) return;
    const termos = semAcento(filtroBib.busca).split(/\s+/).filter(Boolean);
    const feitos = feitosSet(), favs = favoritos();
    const lista = todos().filter((d) => {
      if (filtroBib.categoria && d.categoria !== filtroBib.categoria) return false;
      if (filtroBib.favoritos && !favs.has(d.id)) return false;
      if (filtroBib.pendentes && feitos.has(d.id)) return false;
      if (!termos.length) return true;
      const alvoTxt = semAcento([d.titulo, d.categoria, d.nr, d.objetivo, (d.tags || []).join(' '), d.texto.join(' ')].join(' '));
      return termos.every((t) => alvoTxt.includes(t));
    }).sort((a, b) => a.titulo.localeCompare(b.titulo, 'pt-BR'));
    alvo.innerHTML = `
      <p class="contagem">${lista.length} ${lista.length === 1 ? 'tema' : 'temas'}</p>
      ${lista.length ? `<div class="lista">${lista.map((d) => htmlItem(d, feitos, favs)).join('')}</div>` : '<div class="vazio">Nenhum DDS encontrado com esses filtros.</div>'}`;
  }

  function telaMeus() {
    const lista = meus();
    const feitos = feitosSet(), favs = favoritos();
    return `
      <div class="saudacao">
        <div><h1>Meus DDS</h1><p class="data">Temas escritos ou adaptados por você. Eles também entram no sorteio do "DDS de hoje".</p></div>
        <a class="btn amarelo" href="#/meus/novo">＋ Novo DDS</a>
      </div>
      ${lista.length
        ? `<div class="lista">${lista.map((d) => htmlItem(d, feitos, favs)).join('')}</div>`
        : `<div class="cartao vazio">Você ainda não criou nenhum DDS.<br>Crie um do zero ou abra um tema da biblioteca e use <b>"Copiar e adaptar"</b>.</div>`}`;
  }

  function telaFormulario(modo, id) {
    let d = { titulo: '', categoria: '', nr: '', duracao: 5, objetivo: '', texto: [], caso: '', perguntas: [], mensagem: '' };
    if (modo === 'editar') {
      const achado = meus().find((x) => x.id === id);
      if (!achado) return `<div class="cartao vazio">DDS não encontrado. <a href="#/meus">Voltar</a></div>`;
      d = achado;
    } else if (modo === 'copiar') {
      const base = porId(id);
      if (base) d = { ...base, titulo: base.titulo + ' (adaptado)' };
    }
    const cats = categorias();
    return `
      <p><a href="#/meus">← Meus DDS</a></p>
      <h1>${modo === 'editar' ? 'Editar DDS' : 'Novo DDS'}</h1>
      <form class="cartao" id="form-dds" data-modo="${modo}" data-id="${esc(modo === 'editar' ? id : '')}">
        <label>Título *<input type="text" name="titulo" required maxlength="120" value="${esc(d.titulo)}"></label>
        <label>Categoria *
          <input type="text" name="categoria" required maxlength="60" list="lista-cat" value="${esc(d.categoria)}" placeholder="Ex.: Trabalho em altura">
          <datalist id="lista-cat">${cats.map((c) => `<option value="${esc(c)}">`).join('')}</datalist>
        </label>
        <div class="filtros" style="grid-template-columns:1fr 160px">
          <label>NR de referência <input type="text" name="nr" maxlength="40" value="${esc(d.nr)}" placeholder="Ex.: NR-35"></label>
          <label>Duração (min) <input type="number" name="duracao" min="1" max="60" value="${esc(d.duracao || 5)}"></label>
        </div>
        <label>Objetivo *<input type="text" name="objetivo" required maxlength="250" value="${esc(d.objetivo)}"></label>
        <label>Texto para leitura * <span class="dica">— deixe uma linha em branco entre os parágrafos</span>
          <textarea name="texto" rows="10" required>${esc((d.texto || []).join('\n\n'))}</textarea></label>
        <label>Caso para reflexão <span class="dica">— um exemplo de acidente ou quase-acidente</span>
          <textarea name="caso" rows="3">${esc(d.caso)}</textarea></label>
        <label>Perguntas para a turma <span class="dica">— uma por linha</span>
          <textarea name="perguntas" rows="4">${esc((d.perguntas || []).join('\n'))}</textarea></label>
        <label>Mensagem final<input type="text" name="mensagem" maxlength="200" value="${esc(d.mensagem)}"></label>
        <div class="barra">
          <button class="btn amarelo" type="submit">💾 Salvar</button>
          ${modo === 'editar' ? '<button class="btn perigo" type="button" data-acao="excluir-meu">🗑️ Excluir</button>' : ''}
        </div>
      </form>`;
  }

  function salvarFormulario(form) {
    const f = form.elements;
    const lista = meus();
    const modo = form.dataset.modo;
    const id = modo === 'editar' ? form.dataset.id : 'meu-' + Date.now().toString(36);
    const tagsBase = modo === 'copiar' ? (porId(location.hash.split('/').pop())?.tags || []) : [];
    const anterior = lista.find((x) => x.id === id);
    const dds = {
      id,
      personalizado: true,
      titulo: f.titulo.value.trim(),
      categoria: f.categoria.value.trim(),
      nr: f.nr.value.trim(),
      duracao: Number(f.duracao.value) || 5,
      objetivo: f.objetivo.value.trim(),
      texto: f.texto.value.split(/\n\s*\n/).map((p) => p.replace(/\s*\n\s*/g, ' ').trim()).filter(Boolean),
      caso: f.caso.value.trim(),
      perguntas: f.perguntas.value.split('\n').map((p) => p.trim()).filter(Boolean),
      mensagem: f.mensagem.value.trim(),
      tags: anterior?.tags || tagsBase,
    };
    if (anterior) lista[lista.indexOf(anterior)] = dds; else lista.push(dds);
    store.set('meus', lista);
    toast('DDS salvo ✓');
    location.hash = '#/dds/' + encodeURIComponent(id);
  }

  function telaHistorico() {
    const h = [...historico()].sort((a, b) => b.data.localeCompare(a.data));
    const mesAtual = hojeISO().slice(0, 7);
    const doMes = h.filter((x) => x.data.startsWith(mesAtual));
    const participantes = doMes.reduce((s, x) => s + (x.participantes || 0), 0);
    return `
      <div class="saudacao">
        <div><h1>Histórico</h1><p class="data">DDS registrados como realizados neste aparelho.</p></div>
        ${h.length ? '<button class="btn sec" data-acao="exportar-csv">⬇️ Exportar planilha (CSV)</button>' : ''}
      </div>
      <div class="numeros">
        <div class="numero"><b>${doMes.length}</b><span>DDS neste mês</span></div>
        <div class="numero"><b>${participantes}</b><span>participações no mês</span></div>
        <div class="numero"><b>${new Set(h.map((x) => x.id)).size}/${todos().length}</b><span>temas já abordados</span></div>
      </div>
      ${h.length ? `
        <div class="cartao" style="overflow-x:auto">
          <table class="tabela">
            <thead><tr><th>Data</th><th>Tema</th><th>Empresa</th><th>Obra</th><th>Part.</th><th></th></tr></thead>
            <tbody>${h.map((x) => `
              <tr>
                <td>${esc(fmtData(x.data))}</td>
                <td><a href="#/dds/${encodeURIComponent(x.id)}">${esc(x.titulo)}</a>${x.obs ? `<br><small class="dica">${esc(x.obs)}</small>` : ''}</td>
                <td>${esc(x.empresa || '—')}${x.cnpj ? `<br><small class="dica">CNPJ ${esc(x.cnpj)}</small>` : ''}</td>
                <td>${esc(x.obra)}</td>
                <td>${x.participantes ?? '—'}</td>
                <td><button class="btn perigo peq" data-acao="remover-hist" data-uid="${esc(x.uid)}" aria-label="Remover registro">✕</button></td>
              </tr>`).join('')}
            </tbody>
          </table>
        </div>` : '<div class="cartao vazio">Nenhum DDS registrado ainda. Depois de fazer o DDS, toque em <b>"Marcar como realizado"</b>.</div>'}`;
  }

  function telaAjustes() {
    const c = config();
    return `
      <h1>Ajustes</h1>
      <form class="cartao" id="form-config">
        <h2 style="margin-top:0">Dados para o cabeçalho e a lista de presença</h2>
        <label>Empresa <input type="text" name="empresa" maxlength="120" value="${esc(c.empresa)}"></label>
        <label>CNPJ <span class="dica">— opcional</span>
          <input type="text" name="cnpj" id="cfg-cnpj" maxlength="18" autocomplete="off" spellcheck="false" placeholder="00.000.000/0000-00" style="text-transform:uppercase" value="${esc(c.cnpj)}"></label>
        <label>Obra / frente de serviço <input type="text" name="obra" maxlength="120" value="${esc(c.obra)}"></label>
        <label>Responsável pelo DDS <input type="text" name="responsavel" maxlength="120" value="${esc(c.responsavel)}"></label>
        <label>Linhas na lista de presença <input type="number" name="linhas" min="5" max="60" value="${esc(c.linhas)}"></label>
        <button class="btn amarelo" type="submit">💾 Salvar ajustes</button>
      </form>
      <div class="cartao">
        <h2 style="margin-top:0">Backup</h2>
        <p class="dica">Os dados ficam só neste aparelho. Faça backup para levar seus DDS e o histórico para outro celular ou computador.</p>
        <div class="barra">
          <button class="btn" data-acao="backup">⬇️ Baixar backup</button>
          <label class="btn sec" style="margin:0">⬆️ Restaurar backup<input type="file" id="arq-backup" accept="application/json,.json" hidden></label>
        </div>
      </div>
      <div class="cartao">
        <h2 style="margin-top:0">Instalar no celular</h2>
        <p class="dica">No Android (Chrome): menu ⋮ → <b>Instalar app</b> ou <b>Adicionar à tela inicial</b>. No iPhone (Safari): botão Compartilhar → <b>Adicionar à Tela de Início</b>. Depois de aberto uma vez, funciona sem internet.</p>
        <p class="dica">Biblioteca atual: <b>${BIBLIOTECA.length}</b> DDS prontos + <b>${meus().length}</b> seus.</p>
      </div>`;
  }

  // ---------- Roteamento ----------
  function render() {
    pararVoz();
    const partes = location.hash.replace(/^#\/?/, '').split('/').map(decodeURIComponent);
    const [r, a, b] = partes;
    let html, rotaMenu = r || 'hoje';
    if (!r) html = telaHoje();
    else if (r === 'dds') { html = telaDds(a); rotaMenu = porId(a)?.personalizado ? 'meus' : 'biblioteca'; }
    else if (r === 'biblioteca') html = telaBiblioteca();
    else if (r === 'meus' && (a === 'novo' || a === 'editar' || a === 'copiar')) html = telaFormulario(a, b);
    else if (r === 'meus') html = telaMeus();
    else if (r === 'historico') html = telaHistorico();
    else if (r === 'ajustes') html = telaAjustes();
    else { html = telaHoje(); rotaMenu = 'hoje'; }

    $app.innerHTML = html;
    document.querySelectorAll('.menu a').forEach((l) => l.classList.toggle('ativo', l.dataset.rota === rotaMenu));
    if (r === 'biblioteca') atualizarBiblioteca();
  }

  // ---------- Eventos ----------
  $app.addEventListener('click', (e) => {
    const b = e.target.closest('[data-acao]');
    if (!b) return;
    const acao = b.dataset.acao;
    const c = config();
    switch (acao) {
      case 'voz': lerEmVoz(ddsAtual, b); break;
      case 'imprimir': imprimir(ddsAtual); break;
      case 'realizado': registrarRealizado(ddsAtual); break;
      case 'trocar': ddsDoDia(true); render(); window.scrollTo(0, 0); break;
      case 'favorito': {
        const favs = favoritos();
        favs.has(ddsAtual.id) ? favs.delete(ddsAtual.id) : favs.add(ddsAtual.id);
        store.set('favoritos', [...favs]);
        render();
        break;
      }
      case 'fonte-mais':
      case 'fonte-menos': {
        c.fonte = Math.min(30, Math.max(15, c.fonte + (acao === 'fonte-mais' ? 2 : -2)));
        store.set('config', c);
        document.querySelector('.dds')?.style.setProperty('--fonte-leitura', c.fonte + 'px');
        break;
      }
      case 'f-fav': filtroBib.favoritos = !filtroBib.favoritos; b.setAttribute('aria-pressed', filtroBib.favoritos); atualizarBiblioteca(); break;
      case 'f-pend': filtroBib.pendentes = !filtroBib.pendentes; b.setAttribute('aria-pressed', filtroBib.pendentes); atualizarBiblioteca(); break;
      case 'excluir-meu': {
        const id = b.closest('form').dataset.id;
        if (!confirm('Excluir este DDS? Essa ação não pode ser desfeita.')) return;
        store.set('meus', meus().filter((x) => x.id !== id));
        toast('DDS excluído');
        location.hash = '#/meus';
        break;
      }
      case 'remover-hist':
        if (!confirm('Remover este registro do histórico?')) return;
        store.set('historico', historico().filter((x) => x.uid !== b.dataset.uid));
        render();
        break;
      case 'exportar-csv': exportarCSV(); break;
      case 'backup': baixar(`dds-backup-${hojeISO()}.json`, JSON.stringify({
        app: 'dds-diario', versao: 1, gerado: new Date().toISOString(),
        config: store.get('config', {}), meus: meus(), historico: historico(), favoritos: [...favoritos()],
      }, null, 2), 'application/json'); break;
    }
  });

  $app.addEventListener('input', (e) => {
    if (e.target.id === 'f-busca') { filtroBib.busca = e.target.value; atualizarBiblioteca(); }
    if (e.target.id === 'cfg-cnpj') prepararCampoCNPJ(e.target);
  });
  $app.addEventListener('change', (e) => {
    if (e.target.id === 'f-cat') { filtroBib.categoria = e.target.value; atualizarBiblioteca(); }
    if (e.target.id === 'arq-backup' && e.target.files[0]) restaurar(e.target.files[0]);
  });
  $app.addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id === 'form-dds') salvarFormulario(e.target);
    if (e.target.id === 'form-config') {
      const f = e.target.elements;
      store.set('config', { ...config(), empresa: f.empresa.value.trim(), cnpj: formatarCNPJ(f.cnpj.value), obra: f.obra.value.trim(), responsavel: f.responsavel.value.trim(), linhas: Number(f.linhas.value) || 20 });
      toast('Ajustes salvos ✓');
    }
  });

  function baixar(nome, conteudo, tipo) {
    const url = URL.createObjectURL(new Blob([conteudo], { type: tipo }));
    const a = Object.assign(document.createElement('a'), { href: url, download: nome });
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function exportarCSV() {
    const cel = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`;
    const linhas = [['Data', 'Tema', 'Categoria', 'Empresa', 'CNPJ', 'Obra', 'Participantes', 'Observações'].map(cel).join(';')];
    [...historico()].sort((a, b) => a.data.localeCompare(b.data)).forEach((x) =>
      linhas.push([fmtData(x.data), x.titulo, x.categoria, x.empresa, x.cnpj, x.obra, x.participantes ?? '', x.obs].map(cel).join(';')));
    baixar(`historico-dds-${hojeISO()}.csv`, '﻿' + linhas.join('\r\n'), 'text/csv;charset=utf-8');
  }

  function restaurar(arquivo) {
    const leitor = new FileReader();
    leitor.onload = () => {
      try {
        const d = JSON.parse(leitor.result);
        if (d.app !== 'dds-diario') throw new Error('arquivo inválido');
        if (!confirm('Restaurar este backup? Os dados atuais deste aparelho serão substituídos.')) return;
        store.set('config', d.config || {});
        store.set('meus', Array.isArray(d.meus) ? d.meus : []);
        store.set('historico', Array.isArray(d.historico) ? d.historico : []);
        store.set('favoritos', Array.isArray(d.favoritos) ? d.favoritos : []);
        toast('Backup restaurado ✓');
        render();
      } catch {
        toast('Não foi possível ler esse arquivo de backup.');
      }
    };
    leitor.readAsText(arquivo);
  }

  window.addEventListener('hashchange', () => { render(); window.scrollTo(0, 0); });
  render();

  // ---------- Offline (PWA) ----------
  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
})();
