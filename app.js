// Protótipo navegável do EcoCiclo: mesmos dados de demonstração e regras do app (V4__ecociclo.sql)
const MAPTILER_KEY = window.ECOCICLO_MAPTILER_KEY || '';
const INCENTIVO_ATELIE = 50; // ateliê dá +50% de EcoMoedas, como na API

const I = {
  home: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z',
  place: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
  qr: 'M3 11h8V3H3v8zm2-6h4v4H5V5zM3 21h8v-8H3v8zm2-6h4v4H5v-4zM13 3v8h8V3h-8zm6 6h-4V5h4v4zM19 19h2v2h-2zM13 13h2v2h-2zM15 15h2v2h-2zM13 17h2v2h-2zM15 19h2v2h-2zM17 17h2v2h-2zM17 13h2v2h-2zM19 15h2v2h-2z',
  cart: 'M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0020 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z',
  heart: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
  refresh: 'M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z',
  back: 'M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z',
  logout: 'M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z',
  check: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z',
  recycling: 'M5.77,7.15L7.2,4.78l1.03,-1.71c0.39,-0.65 1.33,-0.65 1.72,0l1.48,2.46l-1.23,2.06L9.2,9.21L5.77,7.15zM21.72,12.97l-1.6,-2.66l-3.46,2L18.87,16H20c0.76,0 1.45,-0.43 1.79,-1.11C21.93,14.61 22,14.31 22,14C22,13.64 21.9,13.29 21.72,12.97zM16,21h1.5c0.76,0 1.45,-0.43 1.79,-1.11L20.74,17H16v-2l-4,4l4,4V21zM10,17H5.7l-0.84,1.41c-0.3,0.5 -0.32,1.12 -0.06,1.65l0,0C5.08,20.63 5.67,21 6.32,21H10V17zM6.12,14.35l1.73,1.04L6.48,9.9L1,11.27l1.7,1.02l-0.41,0.69c-0.35,0.59 -0.38,1.31 -0.07,1.92l1.63,3.26L6.12,14.35zM17.02,5.14l-1.3,-2.17C15.35,2.37 14.7,2 14,2h-3.53l3.12,5.2l-1.72,1.03l5.49,1.37l1.37,-5.49L17.02,5.14z',
  flor: 'M12,22c4.97,0 9,-4.03 9,-9 -4.97,0 -9,4.03 -9,9zM5.6,10.25c0,1.38 1.12,2.5 2.5,2.5 0.53,0 1.01,-0.16 1.42,-0.44l-0.02,0.19c0,1.38 1.12,2.5 2.5,2.5s2.5,-1.12 2.5,-2.5l-0.02,-0.19c0.4,0.28 0.89,0.44 1.42,0.44 1.38,0 2.5,-1.12 2.5,-2.5 0,-1 -0.59,-1.85 -1.43,-2.25 0.84,-0.4 1.43,-1.25 1.43,-2.25 0,-1.38 -1.12,-2.5 -2.5,-2.5 -0.53,0 -1.01,0.16 -1.42,0.44l0.02,-0.19C14.5,2.12 13.38,1 12,1S9.5,2.12 9.5,3.5l0.02,0.19c-0.4,-0.28 -0.89,-0.44 -1.42,-0.44 -1.38,0 -2.5,1.12 -2.5,2.5 0,1 0.59,1.85 1.43,2.25 -0.84,0.4 -1.43,1.25 -1.43,2.25zM12,5.5c1.38,0 2.5,1.12 2.5,2.5s-1.12,2.5 -2.5,2.5S9.5,9.38 9.5,8s1.12,-2.5 2.5,-2.5zM3,13c0,4.97 4.03,9 9,9 0,-4.97 -4.03,-9 -9,-9z',
};
const ic = (nome) => `<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="${I[nome]}"/></svg>`;
const f = (n) => n.toLocaleString('pt-BR', { maximumFractionDigits: 2 });

const PONTOS = [
  { id: 1, nome: 'Ponto de Papel - Administrativo', end: 'Avenida Principal, 100 · Centro', tipo: 'Papel', taxa: 2, lat: -23.55052, lng: -46.633308 },
  { id: 2, nome: 'Ponto de Plástico - Refeitório', end: 'Avenida Principal, 100 · Centro', tipo: 'Plástico', taxa: 5, lat: -23.5485, lng: -46.6388 },
  { id: 3, nome: 'Ponto de Vidro - Praça Central', end: 'Rua das Flores, 300 · Centro', tipo: 'Vidro', taxa: 1.5, lat: -23.5439, lng: -46.6425 },
  { id: 4, nome: 'Ponto de Metal - Galpão Norte', end: 'Rua Industrial, 50 · Centro', tipo: 'Metal', taxa: 8, lat: -23.5369, lng: -46.646 },
  { id: 5, nome: 'Cooperativa Recicla Centro', end: 'Rua do Comércio, 77 · Centro', tipo: 'Plástico', taxa: 5, lat: -23.5568, lng: -46.6279 },
  { id: 6, nome: 'Ateliê Mãos que Reciclam', end: 'Rua das Artes, 12 · Centro', tipo: 'Tecido', taxa: 1, lat: -23.5462, lng: -46.6361, artesao: true },
];
const LOJAS = [
  { id: 1, nome: 'Padaria Pão do Bairro', cat: 'Padaria', desc: 'Pães frescos e café da manhã.', end: 'Rua das Flores, 120' },
  { id: 2, nome: 'Quitanda Terra Boa', cat: 'Hortifruti', desc: 'Frutas e verduras de produtores locais.', end: 'Avenida Principal, 310' },
  { id: 3, nome: 'Mercadinho da Vila', cat: 'Mercado', desc: 'Itens do dia a dia perto de você.', end: 'Rua Industrial, 88' },
  { id: 4, nome: 'Padaria São Jorge', cat: 'Padaria', desc: 'Salgados e bolos caseiros.', end: 'Rua das Flores, 540' },
  { id: 5, nome: 'Barbearia do Largo', cat: 'Serviços', desc: 'Corte e barba com hora marcada.', end: 'Avenida Principal, 45' },
];
const IDEIAS = [
  { id: 1, titulo: 'Tapete de camisetas velhas', material: 'Tecido', autor: 'Ateliê Mãos que Reciclam', materiais: ['5 camisetas velhas', 'Tesoura', 'Agulha e linha grossa'], passos: ['Corte as camisetas em tiras de 3 cm.', 'Faça uma trança longa com três tiras.', 'Enrole a trança em espiral.', 'Costure as voltas por baixo para firmar.'] },
  { id: 2, titulo: 'Horta vertical com garrafas PET', material: 'Plástico', autor: 'Maria Souza', materiais: ['6 garrafas PET de 2 L', 'Barbante', 'Terra e mudas'], passos: ['Corte uma abertura lateral em cada garrafa.', 'Fure as tampas para drenar a água.', 'Amarre as garrafas uma abaixo da outra.', 'Coloque terra e plante as mudas.'] },
  { id: 3, titulo: 'Porta-lápis de latas', material: 'Metal', autor: 'Escola Municipal Centro', materiais: ['3 latas limpas', 'Lixa', 'Tinta e pincel'], passos: ['Lixe a borda das latas para não cortar.', 'Pinte as latas e deixe secar.', 'Cole as latas lado a lado.'] },
  { id: 4, titulo: 'Luminária de pote de vidro', material: 'Vidro', autor: 'João Lima', materiais: ['Pote de vidro com tampa', 'Pisca-pisca de LED a pilha'], passos: ['Lave e seque bem o pote.', 'Coloque o pisca-pisca dentro.', 'Feche a tampa e ligue.'] },
];
// Códigos de entrega de teste: cada um só pode ser usado uma vez
const CODIGOS = { 'ECO-4821': { ponto: 2, kg: 3 }, 'ECO-7310': { ponto: 4, kg: 1.2 }, 'ATL-0550': { ponto: 6, kg: 2 } };
const ponto = (id) => PONTOS.find((p) => p.id === id);

const inicial = () => ({
  logado: false, saldo: 31.6, kg: 12.4, usados: [], pontoEscolhido: null, entrega: null, voucher: null,
  passos: [false, false, false, false],
  historico: [
    { d: 'Voucher na Padaria Pão do Bairro', v: -10 },
    { d: '2,4 kg de Vidro em Ponto de Vidro - Praça Central', v: 3.6 },
    { d: '4 kg de Papel em Ponto de Papel - Administrativo', v: 8 },
    { d: '6 kg de Plástico em Ponto de Plástico - Refeitório', v: 30 },
  ],
});
// localStorage pode falhar (aba anônima); o protótipo segue funcionando só na memória
function carregar() { try { return JSON.parse(localStorage.getItem('ecociclo-demo')) || inicial(); } catch { return inicial(); } }
function salvar() { try { localStorage.setItem('ecociclo-demo', JSON.stringify(S)); } catch { /* sem armazenamento */ } }
let S = carregar();

const ir = (h) => { location.hash = h; };
const $ = (sel) => document.querySelector(sel);
let limpeza = []; // mapa e câmera precisam ser desligados ao trocar de tela

function creditar(idPonto, kg) {
  const p = ponto(idPonto);
  const moedas = Math.round(kg * p.taxa * (p.artesao ? 1 + INCENTIVO_ATELIE / 100 : 1) * 100) / 100;
  S.saldo = Math.round((S.saldo + moedas) * 100) / 100;
  S.kg = Math.round((S.kg + kg) * 100) / 100;
  S.historico.unshift({ d: `${f(kg)} kg de ${p.tipo} em ${p.nome}`, v: moedas });
  S.passos[0] = S.passos[1] = true;
  S.entrega = { ponto: idPonto, kg, moedas };
  salvar();
  ir('#entrega');
}

// ---------- Telas ----------
const telas = {
  login: {
    titulo: 'EcoCiclo',
    html: () => `
      <section class="login">
        <!-- Ícone do app (ic_launcher): fundo verde, sol amarelo e folha; o viewBox recorta a área visível do ícone adaptativo -->
        <svg class="logo-app" viewBox="18 18 72 72" role="img" aria-label="Logo do EcoCiclo">
          <rect x="18" y="18" width="72" height="72" fill="#1B6B45"/>
          <path fill="#FFC857" d="M54,30a24,24 0,1 0,0.01 0z"/>
          <path fill="#1B6B45" d="M42,66C42,50 52,42 68,42C68,58 60,68 46,68L58,52L42,66Z"/>
        </svg>
        <h2>EcoCiclo</h2>
        <p>Seu reciclável vira moeda para gastar no bairro.</p>
        <form id="f-login">
          <label>Usuário<input name="u" value="maria" required autocomplete="username"></label>
          <label>Senha<input name="s" type="password" value="demo1234" required autocomplete="current-password"></label>
          <button class="btn largo">Entrar</button>
        </form>
        <p class="dica">Protótipo: o usuário de teste já vem preenchido. Toque em Entrar.</p>
      </section>`,
    depois: () => $('#f-login').addEventListener('submit', (e) => { e.preventDefault(); S.logado = true; salvar(); ir('#inicio'); }),
  },

  inicio: {
    titulo: 'Início', aba: 'inicio',
    html: () => `
      <div class="card saldo"><span class="rotulo">Saldo disponível</span><strong>${f(S.saldo)}</strong><span>EcoMoedas</span></div>
      <div class="card impacto"><span class="rotulo">Seu impacto</span><strong>${f(S.kg)} kg</strong><span>de resíduos desviados de aterros</span></div>
      <div class="card">
        <h2>Entregou seus recicláveis?</h2>
        <p>Escaneie o QR Code gerado pelo ecoponto na pesagem para receber suas EcoMoedas.</p>
        <div class="pilha">
          <a class="btn largo" href="#validar">${ic('qr')} Validar entrega</a>
          <a class="btn contorno largo" href="#mapa">${ic('place')} Achar ecoponto</a>
        </div>
      </div>
      <h3>Últimas movimentações</h3>
      <ul class="historico">${S.historico.slice(0, 6).map((t) => `
        <li><span>${t.d}</span><span class="${t.v >= 0 ? 'mais' : 'menos'}">${t.v >= 0 ? '+' : '−'}${f(Math.abs(t.v))}</span></li>`).join('')}
      </ul>`,
  },

  mapa: {
    titulo: 'Mapa', aba: 'mapa',
    html: () => `
      <div id="mapa" class="mapa" role="application" aria-label="Mapa com ${PONTOS.length} pontos de coleta. A mesma lista está abaixo."></div>
      <p class="legenda">
        <span><span class="ponto-cor" style="background:var(--primaria)"></span>Ecoponto</span>
        <span><span class="ponto-cor" style="background:var(--atelie)"></span>Ateliê de artesão (+${INCENTIVO_ATELIE}% EcoMoedas)</span>
      </p>
      ${PONTOS.map((p) => `
        <div class="card ${S.pontoEscolhido === p.id ? 'escolhido' : ''}" id="ponto-${p.id}">
          ${p.artesao ? `<span class="tag">Ateliê de artesão · +${INCENTIVO_ATELIE}% EcoMoedas</span>` : ''}
          <h2>${p.nome}</h2>
          <p>${p.end}</p>
          <p>Aceita ${p.tipo} · ${f(p.taxa)} EcoMoedas por kg · Disponível</p>
          <div class="acoes">
            <button class="btn" data-ponto="${p.id}">Vou entregar aqui</button>
            <a class="btn contorno" target="_blank" rel="noopener" href="https://www.google.com/maps/dir/?api=1&destination=${p.lat},${p.lng}">Como chegar</a>
          </div>
        </div>`).join('')}`,
    depois: () => {
      document.querySelectorAll('[data-ponto]').forEach((b) => b.addEventListener('click', () => {
        S.pontoEscolhido = Number(b.dataset.ponto); S.passos[0] = true; salvar(); ir('#validar');
      }));
      if (!window.L) return; // sem internet para a biblioteca: a lista abaixo continua funcionando
      const mapa = L.map('mapa', { zoomControl: true }).setView([-23.547, -46.637], 14);
      const osm = () => L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '© OpenStreetMap contributors' });
      const maptiler = `https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=${MAPTILER_KEY}`;
      // A chave recusada ainda devolve uma imagem "Invalid key", então testa antes; recusou ou sem chave = mapa do OSM
      (MAPTILER_KEY ? fetch(maptiler.replace('{z}/{x}/{y}', '0/0/0')).then((r) => r.ok).catch(() => false) : Promise.resolve(false))
        .then((ok) => {
          if (!document.body.contains(mapa.getContainer())) return; // saiu da tela antes do teste terminar
          (ok ? L.tileLayer(maptiler, { maxZoom: 20, attribution: '© MapTiler © OpenStreetMap contributors' }) : osm()).addTo(mapa);
        });
      PONTOS.forEach((p) => {
        const icone = L.divIcon({ className: '', iconSize: [40, 40], iconAnchor: [20, 20], html: `<div class="marcador" style="background:${p.artesao ? 'var(--atelie)' : 'var(--primaria)'}">${ic(p.artesao ? 'flor' : 'recycling')}</div>` });
        L.marker([p.lat, p.lng], { icon: icone, title: p.nome }).addTo(mapa)
          .bindPopup(`<b>${p.nome}</b><br>Aceita ${p.tipo}<br><a href="#ponto-${p.id}" data-rolar="${p.id}">Ver na lista</a>`);
      });
      mapa.on('popupopen', (e) => e.popup.getElement().querySelector('[data-rolar]')?.addEventListener('click', (ev) => {
        ev.preventDefault(); $(`#ponto-${ev.target.dataset.rolar}`).scrollIntoView({ behavior: 'smooth' });
      }));
      limpeza.push(() => mapa.remove());
    },
  },

  validar: {
    titulo: 'Validar', aba: 'validar',
    html: () => {
      const p = S.pontoEscolhido && ponto(S.pontoEscolhido);
      return `
      <div class="card">
        <h2>Validar uma entrega</h2>
        <p>${p ? `Entrega em <b>${p.nome}</b> (${p.tipo}).` : 'Na pesagem, o ecoponto gera um QR Code. Leia o código para receber suas EcoMoedas.'}</p>
      </div>
      <div class="visor" id="visor">
        <video id="video" playsinline muted hidden></video>
        <button class="btn" id="abrir-camera">Abrir câmera</button>
        <div class="mira"><span class="linha"></span></div>
        <p class="texto-visor" id="texto-visor">Aponte para o QR Code do ecoponto</p>
      </div>
      <button class="btn largo" id="simular">${ic('qr')} Simular leitura do QR Code</button>
      <div class="card">
        <form id="f-codigo" novalidate>
          <label>Ou digite o código<input id="codigo" placeholder="Ex.: ECO-4821" autocomplete="off" autocapitalize="characters"></label>
          <p class="erro" id="erro" role="alert"></p>
          <button class="btn contorno">Validar código</button>
        </form>
        <p class="dica">Códigos de teste (uso único): ECO-4821 (plástico), ECO-7310 (metal), ATL-0550 (ateliê).</p>
      </div>`;
    },
    depois: () => {
      // Cada leitura simulada é um QR novo gerado na pesagem: 3 kg no ponto escolhido (2 kg se for ateliê)
      const simular = () => { const id = S.pontoEscolhido || 2; creditar(id, ponto(id).artesao ? 2 : 3); };
      $('#simular').addEventListener('click', simular);
      $('#abrir-camera').addEventListener('click', async () => {
        const btn = $('#abrir-camera');
        try {
          const fluxo = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
          limpeza.push(() => fluxo.getTracks().forEach((t) => t.stop()));
          const v = $('#video'); v.srcObject = fluxo; v.hidden = false; await v.play(); btn.hidden = true;
          $('#texto-visor').textContent = 'Lendo QR Code...';
          // shortcut: a leitura é simulada após 3 s; ler o QR de verdade exigiria uma biblioteca de decodificação
          const t = setTimeout(simular, 3000); limpeza.push(() => clearTimeout(t));
        } catch {
          $('#texto-visor').textContent = 'Câmera indisponível. Use "Simular leitura" ou digite o código.';
        }
      });
      $('#f-codigo').addEventListener('submit', (e) => {
        e.preventDefault();
        const cod = $('#codigo').value.trim().toUpperCase();
        const erro = $('#erro');
        if (!CODIGOS[cod]) { erro.textContent = 'Código não encontrado. Confira e tente de novo.'; return; }
        if (S.usados.includes(cod)) { erro.textContent = 'Este código já foi usado.'; return; }
        S.usados.push(cod);
        creditar(CODIGOS[cod].ponto, CODIGOS[cod].kg);
      });
    },
  },

  entrega: {
    titulo: 'Entrega validada', voltar: '#inicio',
    html: () => {
      if (!S.entrega) return telas.validar.html();
      const p = ponto(S.entrega.ponto);
      return `
      <section class="card sucesso">
        <div class="selo-ok">${ic('check')}</div>
        <h2>+${f(S.entrega.moedas)} EcoMoedas</h2>
        <p>${f(S.entrega.kg)} kg de ${p.tipo} em ${p.nome}</p>
        ${p.artesao ? `<p class="bonus">Inclui +${INCENTIVO_ATELIE}% por entregar num ateliê.</p>` : ''}
        <p>Saldo atual: <b>${f(S.saldo)}</b> EcoMoedas</p>
        <p>Impacto total: <b>${f(S.kg)} kg</b> fora dos aterros</p>
        <div class="pilha">
          <a class="btn" href="#lojas">${ic('cart')} Usar EcoMoedas</a>
          <a class="btn contorno" href="#inicio">Voltar ao início</a>
        </div>
      </section>`;
    },
  },

  lojas: {
    titulo: 'Lojas', aba: 'lojas',
    html: () => {
      const cats = ['Todos', ...new Set(LOJAS.map((l) => l.cat))];
      return `
      <p>Saldo: <b>${f(S.saldo)}</b> EcoMoedas</p>
      <div class="chips" role="group" aria-label="Filtrar por categoria">
        ${cats.map((c, i) => `<button class="chip" data-cat="${c}" aria-pressed="${i === 0}">${c}</button>`).join('')}
      </div>
      <div id="lista-lojas"></div>`;
    },
    depois: () => {
      const listar = (cat) => {
        const lojas = LOJAS.filter((l) => cat === 'Todos' || l.cat === cat);
        $('#lista-lojas').innerHTML = lojas.map((l) => `
          <div class="card" style="margin-top:12px">
            <h2>${l.nome}</h2>
            <p>${l.cat} · ${l.end} · Centro</p>
            <p>${l.desc}</p>
            <div class="acoes"><a class="btn" href="#loja/${l.id}">Usar EcoMoedas aqui</a></div>
          </div>`).join('') || '<p>Nenhum comércio encontrado.</p>';
      };
      document.querySelectorAll('[data-cat]').forEach((b) => b.addEventListener('click', () => {
        document.querySelectorAll('[data-cat]').forEach((x) => x.setAttribute('aria-pressed', x === b));
        listar(b.dataset.cat);
      }));
      listar('Todos');
    },
  },

  loja: {
    titulo: 'Usar EcoMoedas', voltar: '#lojas',
    html: (id) => {
      const l = LOJAS.find((x) => x.id === Number(id));
      if (!l) return '<p>Loja não encontrada.</p><a class="btn" href="#lojas">Ver lojas</a>';
      return `
      <div class="card">
        <h2>${l.nome}</h2>
        <p>${l.cat} · ${l.end} · Centro</p>
        <p>${l.desc}</p>
      </div>
      <div class="card">
        <form id="f-valor" novalidate>
          <label>Valor em EcoMoedas<input id="valor" inputmode="decimal" value="${f(Math.min(10, S.saldo))}" aria-describedby="ajuda-valor"></label>
          <p class="dica" id="ajuda-valor">Saldo: ${f(S.saldo)} EcoMoedas</p>
          <p class="erro" id="erro" role="alert"></p>
          <button class="btn" value="voucher">Gerar voucher</button>
          <button class="btn contorno" value="transferencia">Transferir para a loja</button>
        </form>
        <p class="dica">Voucher: você mostra o código no caixa. Transferência: o saldo vai direto para a loja.</p>
      </div>`;
    },
    depois: (id) => {
      const l = LOJAS.find((x) => x.id === Number(id));
      if (!l) return;
      S.passos[2] = true; salvar();
      $('#f-valor').addEventListener('submit', (e) => {
        e.preventDefault();
        const txt = $('#valor').value.trim().replace(/\./g, '').replace(',', '.');
        const valor = Number(txt);
        const erro = $('#erro');
        if (!/^\d+(\.\d{1,2})?$/.test(txt) || valor <= 0) { erro.textContent = 'Informe um valor positivo com até 2 casas'; return; }
        if (valor > S.saldo) { erro.textContent = `Maior que seu saldo de ${f(S.saldo)}`; return; }
        const tipo = e.submitter?.value === 'transferencia' ? 'transferencia' : 'voucher';
        const codigo = 'VC-' + Math.random().toString(36).slice(2, 8).toUpperCase();
        S.saldo = Math.round((S.saldo - valor) * 100) / 100;
        S.historico.unshift({ d: `${tipo === 'voucher' ? 'Voucher' : 'Transferência'} na ${l.nome}`, v: -valor });
        S.voucher = { tipo, codigo, loja: l.nome, valor };
        S.passos[3] = true;
        salvar();
        ir('#voucher');
      });
    },
  },

  voucher: {
    titulo: 'Pronto!', voltar: '#lojas',
    html: () => {
      const v = S.voucher;
      if (!v) return '<p>Nenhum voucher gerado ainda.</p><a class="btn" href="#lojas">Ver lojas</a>';
      return `
      <section class="card sucesso">
        <div class="selo-ok">${ic('check')}</div>
        <h2>${v.tipo === 'voucher' ? 'Voucher gerado' : 'Transferência concluída'}</h2>
        <p>${f(v.valor)} EcoMoedas na ${v.loja}</p>
        ${v.tipo === 'voucher' ? `
          <div class="qr" id="qr" role="img" aria-label="QR Code do voucher ${v.codigo}"></div>
          <p class="codigo">${v.codigo}</p>
          <p>Mostre este código no caixa. Ele também fica no seu histórico.</p>` : '<p>O valor já está na conta da loja. Aproveite!</p>'}
        <p>Saldo restante: <b>${f(S.saldo)}</b> EcoMoedas</p>
        <div class="pilha">
          <a class="btn" href="#concluido">${ic('check')} Concluir jornada</a>
          <a class="btn contorno" href="#lojas">Usar em outra loja</a>
        </div>
      </section>`;
    },
    depois: () => {
      const el = $('#qr');
      if (el && window.QRCode) new QRCode(el, { text: `ECOCICLO:${S.voucher.codigo}`, width: 168, height: 168, colorDark: '#00210F' });
    },
  },

  concluido: {
    titulo: 'Jornada concluída',
    html: () => {
      const e = S.entrega, v = S.voucher;
      const itens = [
        ['Encontrou um ponto de coleta no mapa', S.passos[0]],
        [e ? `Entregou ${f(e.kg)} kg e ganhou ${f(e.moedas)} EcoMoedas` : 'Validou uma entrega com QR Code', S.passos[1]],
        ['Escolheu um comércio do bairro', S.passos[2]],
        [v ? `Usou ${f(v.valor)} EcoMoedas na ${v.loja}` : 'Usou as EcoMoedas', S.passos[3]],
      ];
      return `
      <section class="card sucesso">
        <div class="selo-ok">${ic('recycling')}</div>
        <h2>Ciclo completo!</h2>
        <p>O reciclável saiu do lixo, virou moeda e voltou para o comércio do bairro.</p>
        <ul class="checklist">${itens.map(([t, ok]) => `<li>${ok ? ic('check') : '<span class="ic"></span>'}<span>${t}${ok ? '' : ' (pendente)'}</span></li>`).join('')}</ul>
        <p>Seu impacto: <b>${f(S.kg)} kg</b> fora dos aterros · Saldo: <b>${f(S.saldo)}</b> EcoMoedas</p>
        <div class="pilha">
          <a class="btn" href="#ideias">${ic('heart')} Ver ideias de reaproveitamento</a>
          <a class="btn contorno" href="#inicio">Voltar ao início</a>
          <button class="btn contorno" data-acao="recomecar">Recomeçar demonstração</button>
        </div>
      </section>`;
    },
  },

  ideias: {
    titulo: 'Ideias', aba: 'ideias',
    html: () => {
      const mats = ['Todos', ...new Set(IDEIAS.map((i) => i.material))];
      return `
      <p>Transforme o que iria para o lixo em algo novo.</p>
      <div class="chips" role="group" aria-label="Filtrar por material">
        ${mats.map((m, i) => `<button class="chip" data-mat="${m}" aria-pressed="${i === 0}">${m}</button>`).join('')}
      </div>
      <div id="lista-ideias"></div>`;
    },
    depois: () => {
      const listar = (mat) => {
        $('#lista-ideias').innerHTML = IDEIAS.filter((i) => mat === 'Todos' || i.material === mat).map((i) => `
          <div class="card" style="margin-top:12px">
            <h2>${i.titulo}</h2>
            <p>${i.material} · por ${i.autor}</p>
            <div class="acoes"><a class="btn contorno" href="#ideia/${i.id}">Ler passo a passo</a></div>
          </div>`).join('');
      };
      document.querySelectorAll('[data-mat]').forEach((b) => b.addEventListener('click', () => {
        document.querySelectorAll('[data-mat]').forEach((x) => x.setAttribute('aria-pressed', x === b));
        listar(b.dataset.mat);
      }));
      listar('Todos');
    },
  },

  ideia: {
    titulo: 'Passo a passo', voltar: '#ideias', aba: 'ideias',
    html: (id) => {
      const i = IDEIAS.find((x) => x.id === Number(id));
      if (!i) return '<p>Ideia não encontrada.</p><a class="btn" href="#ideias">Ver ideias</a>';
      return `
      <div class="card">
        <h2>${i.titulo}</h2>
        <p>${i.material} · por ${i.autor}</p>
        <h3>Materiais</h3>
        <ul class="passos">${i.materiais.map((m) => `<li>${m}</li>`).join('')}</ul>
        <h3>Passo a passo</h3>
        <ol class="passos">${i.passos.map((p) => `<li>${p}</li>`).join('')}</ol>
        <div class="acoes">
          <a class="btn" href="#mapa">${ic('place')} Entregar as sobras</a>
          <a class="btn contorno" href="#ideias">Outras ideias</a>
        </div>
      </div>`;
    },
  },
};

// ---------- Moldura: menu e roteamento ----------
const ABAS = [['inicio', 'Início', 'home'], ['mapa', 'Mapa', 'place'], ['validar', 'Validar', 'qr'], ['lojas', 'Lojas', 'cart'], ['ideias', 'Ideias', 'heart']];

function render() {
  limpeza.forEach((fn) => fn()); limpeza = [];
  let [nome, arg] = location.hash.slice(1).split('/');
  if (!S.logado) nome = 'login';
  else if (!telas[nome] || nome === 'login') nome = 'inicio';
  const t = telas[nome];

  $('#titulo').textContent = t.titulo;
  document.title = `${t.titulo} · EcoCiclo`;
  const voltar = $('#voltar');
  voltar.hidden = !t.voltar;
  if (t.voltar) voltar.href = t.voltar;
  $('#sair').hidden = nome === 'login';
  $('#atualizar').hidden = nome === 'login';
  $('.barra').hidden = nome === 'login'; // como no app, o login não tem barra superior

  const abas = $('#abas');
  abas.hidden = nome === 'login';
  abas.innerHTML = ABAS.map(([id, rotulo, icone]) =>
    `<a href="#${id}" ${t.aba === id ? 'aria-current="page"' : ''}><span class="pilula">${ic(icone)}</span>${rotulo}</a>`).join('');

  const tela = $('#tela');
  tela.innerHTML = t.html(arg);
  tela.scrollTop = 0;
  t.depois?.(arg);
  tela.focus({ preventScroll: true });
}

$('#voltar').innerHTML = ic('back');
$('#sair').innerHTML = ic('logout');
$('#atualizar').innerHTML = ic('refresh');
// Sem servidor no protótipo: gira o ícone e redesenha a tela, como o app faz ao recarregar a carteira
$('#atualizar').addEventListener('click', () => {
  const b = $('#atualizar');
  b.classList.remove('girando'); void b.offsetWidth; b.classList.add('girando');
  render();
});
$('#sair').addEventListener('click', () => { S.logado = false; salvar(); ir('#login'); render(); });
document.addEventListener('click', (e) => {
  if (!e.target.closest('[data-acao="recomecar"]')) return;
  S = inicial(); salvar(); ir('#login'); render();
});
window.addEventListener('hashchange', render);
render();
