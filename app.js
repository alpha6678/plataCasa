// Planta da Casa — folhas de papel vegetal sobre o mesmo desenho.
// Escala: 1 m = 60 px no palco · origem (OX, OY) = (60, 80)
// Eixos: x = largura (0 a 7,45), y = profundidade (frente y = 4,00, fundo y = 14,20)
// Vista inicial: parede A em cima, frente à esquerda.
// Folhas: Estrutura, Vedação, Esquadrias, Cotas, Ambientes.
// Cota vermelha = eixo a eixo. Cota azul = face a face.

const S = 60;
const OX = 60;
const OY = 80;
const W = 7.45;
const Y0 = 4.00;
const H = 14.20;
const D = H - Y0;
const STAGE_W = 600;
const STAGE_H = 780;
const WALL_T = 0.14; // 14 cm, lado menor da pilastra
const DIV_COLOR = "#1f59d8";
const STORAGE_KEY = "planta-paredes";
// Folha Vedação — o par gravado é o eixo da parede. A faixa desenhada tem 14 cm, centrada nesse eixo.
const DIVISOES = [
  { x1: 0, y1: 7.085, x2: 3.33, y2: 7.085, espessura: 0.14 },
  { x1: 0, y1: 8.835, x2: 3.33, y2: 8.835, espessura: 0.14 },
  { x1: 3.40, y1: 8.185, x2: 3.40, y2: 9.035, espessura: 0.14 },
  { x1: 3.40, y1: 9.935, x2: 3.40, y2: 10.185, espessura: 0.14 },
  { x1: 3.40, y1: 10.455, x2: 3.40, y2: 14.20, espessura: 0.14 },
  { x1: 3.47, y1: 10.32, x2: 3.60, y2: 10.32, espessura: 0.14 },
  { x1: 4.50, y1: 10.32, x2: 7.31, y2: 10.32, espessura: 0.14 },
  { x1: 3.535, y1: 4.07, x2: 7.18, y2: 4.07, espessura: 0.14 },
  { x1: 7.38, y1: 7.015, x2: 7.38, y2: 5.7775, espessura: 0.14 },
];
// Coluna da camada 2, inteira dentro dos 1,238 m. A face da abertura continua em 5,7775 m.
const PORTAS = [
  { x1: 3.40, y1: 7.285, x2: 3.40, y2: 8.185, tipo: "giro" },
  { x1: 3.40, y1: 9.035, x2: 3.40, y2: 9.935, tipo: "giro" },
  { x1: 3.60, y1: 10.32, x2: 4.50, y2: 10.32, tipo: "giro" },
];
// Vidro de correr da entrada, uma folha, rente à face interna da parede B.
// Vão entre a face da coluna da frente (y = 4,14) e a face da parede (y = 5,7775).
// A folha é 5 cm maior que esse vão. Aberta, o puxador ocupa 20 cm da área sem parede.
const VIDRO_COR = "#0c7f96";
const ENT_COL_FRENTE = 4.14;
const ENT_PAREDE = 5.7775;
const ENT_PUXADOR = 0.20;
const ENT_TRANSPASSE = 0.05;
const ENT_VAO = ENT_PAREDE - ENT_COL_FRENTE;
const ENT_FOLHA = ENT_VAO + ENT_TRANSPASSE;
const ENT_PASSAGEM = ENT_VAO - ENT_PUXADOR;
const ENT_FOLHA_T = 0.04;
const ENT_X = 7.31 - ENT_FOLHA_T;
const ENT_FECHADA_Y = ENT_COL_FRENTE;
const ENT_ABERTA_Y = ENT_PAREDE - ENT_PUXADOR;
const ENT_ABERTA_FIM = ENT_ABERTA_Y + ENT_FOLHA;
const COLUNAS_DIVISAO = [
  { x: 7.45, y: 5.9125, orient: "y", vao: "ponta da divisória da entrada" },
];

const px = (m) => OX + m * S;
const py = (m) => OY + (m - Y0) * S;
const u = (m) => m * S;

const B_ENTRADA = { y0: 4.00, y1: 7.20 };
const B_JANELA = { y0: 7.20, y1: 10.37 };
const B_CEGA = { y0: 10.37, y1: 14.20 };
// Folha Vedação — coluna falsa no meio do trecho cego da parede B.
// Cano Ø 15 cm. Na parede, 27 cm como a coluna. Para dentro, 20 cm:
// a face externa fica no bordo e os 6 cm além dos 14 cm da parede entram na casa.
const CANO_D = 0.15;
const FALSA_L = 0.27;
const FALSA_P = 0.20;
const COLUNA_FALSA = {
  x: W - FALSA_P,
  y: (B_JANELA.y0 + B_JANELA.y1) / 2 - FALSA_L / 2,
  w: FALSA_P,
  h: FALSA_L,
};

const walls = [
  { id: "A", label: "Parede A", tipo: "cega", comprimento: D, aberturas: "Nenhuma — parede cega sem janelas",
    x1: 0, y1: Y0, x2: 0, y2: H, color: "#2b3140", width: 5 },
  { id: "C", label: "Parede C", tipo: "subsolo/cega", comprimento: W, aberturas: "Nenhuma — parede de subsolo",
    x1: 0, y1: H, x2: W, y2: H, color: "#2b3140", width: 5 },
  { id: "B-ent", label: "Parede B — entrada", tipo: "abertura/entrada", comprimento: 3.20,
    aberturas: "Entrada 3,20 m (acesso principal)",
    x1: W, y1: B_ENTRADA.y0, x2: W, y2: B_ENTRADA.y1, color: "#6b7280", width: 2.5, dash: [5, 5] },
  { id: "B-jan", label: "Parede B", tipo: "cega", comprimento: 3.17,
    aberturas: "Trecho cego",
    x1: W, y1: B_JANELA.y0, x2: W, y2: B_JANELA.y1, color: "#2b3140", width: 5 },
  { id: "B-ceg", label: "Parede B — trecho cego", tipo: "cega", comprimento: 3.83,
    aberturas: "Trecho cego",
    x1: W, y1: B_CEGA.y0, x2: W, y2: B_CEGA.y1, color: "#2b3140", width: 5 },
];

const COL_W = 0.27, COL_H = 0.14;
// A coluna no bordo da laje fica inteira para dentro: a face externa é rente ao bordo.
function columnBox(c) {
  const w = c.orient === "x" ? COL_W : COL_H;
  const h = c.orient === "x" ? COL_H : COL_W;
  let x = c.x - w / 2;
  let y = c.y - h / 2;
  if (y < Y0) y = Y0;
  if (y + h > H) y = H - h;
  if (x + w > W) x = W - w;
  if (x < 0) x = 0;
  return { x, y, w, h };
}
// Três folhas na frente, da parede A até a coluna (3,40; 4,00).
// Fechadas: 3 cm de sobreposição em cada encontro.
// Folhas arredondadas para cima: 111 cm, 111 cm e 116 cm. O extra fica sobre a coluna.
// Abertas: a central e a do puxador correm até ficarem rentes à parede A. A terceira é fixa.
// As três camadas ficam no eixo da coluna (14 cm, de y 4,00 a 4,14), não para dentro do cômodo.
const F3_FACE = 3.265;
const F3_OVER = 0.03;
const F3_L = 1.11;
const F3_L1 = 1.16;
const F3_T = 0.04;
const F3_Y0 = 4.07 - (3 * F3_T) / 2;
const F3_FIXA = { x: 0, w: F3_L, y: F3_Y0 };
const F3_CENTRO = { x: F3_L - F3_OVER, w: F3_L, y: F3_Y0 + F3_T };
const F3_PUX = { x: 2 * F3_L - 2 * F3_OVER, w: F3_L1, y: F3_Y0 + 2 * F3_T };
const F3_COR = "#2457c5";
// Janela alta na parede da frente, entre as faces das colunas (3,535 a 7,18 = 3,645 m).
// Duas fixas nas pontas e duas móveis que se encontram no centro.
// Aberta, cada móvel deixa 10 cm no vão: 7 cm de puxador + 3 cm de sobreposição.
// Folhas arredondadas para cima: fixa 89 cm, móvel 99 cm.
const J4_X0 = 3.535;
const J4_X1 = 7.18;
const J4_F = 0.89;
const J4_M = 0.99;
const J4_SOBRA = 0.10;
const J4_MEIO = (J4_X0 + J4_X1) / 2;
const J4_T = 0.04;
const J4_Y_FIXA = 4.07 - J4_T;
const J4_Y_MOVEL = 4.07;
const J4_COR = "#0e7a4a";
const J4_MOV_L_FECHADA = J4_MEIO + 0.015 - J4_M;
const J4_MOV_R_FECHADA = J4_MEIO - 0.015;
const columns = [
  { x: 3.40, y: 4.00, orient: "x", vao: "vão frontal" },
  { x: 7.45, y: 4.00, orient: "x", vao: "vão frontal (canto B∩D)" },
  { x: 3.40, y: 7.15, orient: "y", vao: "vão central" },
  { x: 7.45, y: 7.15, orient: "y", vao: "vão central (parede B)" },
  { x: 3.40, y: 10.32, orient: "y", vao: "vão fundo" },
  { x: 7.45, y: 10.32, orient: "y", vao: "vão fundo (parede B)" },
];

const canvas = document.getElementById("planta");
const ctx = canvas.getContext("2d");
const infoPanel = document.getElementById("infoPanel");
const JANELA_ALTURA = 1.15;

const VB_NORMAL = { x: 0, y: 0, w: STAGE_W, h: STAGE_H };
const VB_ROTATED = { x: 0, y: 0, w: STAGE_H, h: STAGE_W };
let VB_INIT = VB_ROTATED;
let vb = { ...VB_INIT };
const TEXTO_MAX = 15;
const DPR0 = window.devicePixelRatio || 1;
function zoomPagina() {
  const pinça = window.visualViewport ? window.visualViewport.scale : 1;
  const navegador = (window.devicePixelRatio || 1) / DPR0;
  return Math.max(pinça, navegador, 0.01);
}
let rotated = true;
let flipV = true;

const paredes = loadParedes();
window.plantaParedes = paredes;
const PORTA_KEY = "planta-portas";
const portas = loadPortas();
window.plantaPortas = portas;
let startPoint = null;
let hoverPoint = null;

function fmt(n) { return n.toFixed(2).replace(".", ","); }
function fmt3(n) { return n.toFixed(3).replace(".", ","); }

function showInfoPanel(html) {
  if (!infoPanel) return;
  infoPanel.innerHTML = html;
  infoPanel.classList.add("has-info");
}
function camada(nome) {
  return document.body.classList.contains(nome);
}
function showHint() {
  const texto = camada("show-esquadrias")
    ? "Clique 1: início da folha da porta. Clique 2: fim. Porta de correr, uma folha."
    : "Ative a folha Esquadrias para marcar portas.";
  showInfoPanel(`<p class="hint">${texto}</p>`);
  infoPanel.classList.remove("has-info");
}

function copiaDivisoes() {
  return DIVISOES.map((p) => ({ ...p }));
}
function loadParedes() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (Array.isArray(raw) && raw.length) {
      const ok = raw.filter((p) => [p.x1, p.y1, p.x2, p.y2].every((n) => typeof n === "number" && Number.isFinite(n)));
      if (ok.length) return ok;
    }
  } catch { /* usa a camada gravada no projeto */ }
  return copiaDivisoes();
}
function persist() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(paredes)); } catch { /* navegação privada */ }
}
function loadPortas() {
  try {
    const raw = JSON.parse(localStorage.getItem(PORTA_KEY) || "null");
    if (Array.isArray(raw) && raw.length) {
      const ok = raw.filter((p) => [p.x1, p.y1, p.x2, p.y2].every((n) => typeof n === "number" && Number.isFinite(n)));
      if (ok.length) return ok;
    }
  } catch { /* usa as portas gravadas no projeto */ }
  return PORTAS.map((p) => ({ ...p }));
}
function persistPortas() {
  try { localStorage.setItem(PORTA_KEY, JSON.stringify(portas)); } catch { /* navegação privada */ }
}
function linhaLista(lista, texto) {
  const li = document.createElement("li");
  li.textContent = texto;
  lista.appendChild(li);
}
function renderPortas() {
  const lista = document.getElementById("portaList");
  if (!lista) return;
  lista.innerHTML = "";
  const giro = portas.filter((p) => p.tipo !== "correr").length;
  if (giro) linhaLista(lista, `${giro}× porta de giro · folha 0,90 m · 90°`);
  linhaLista(lista, `Entrada, parede B: 1× folha de vidro ${fmt3(ENT_FOLHA)} m · vão livre ${fmt3(ENT_PASSAGEM)} m`);
  linhaLista(lista, `Frente da cozinha: 1× folha com puxador ${fmt(F3_L1)} m · 1× folha central ${fmt(F3_L)} m · 1× folha fixa ${fmt(F3_L)} m`);
  const extras = new Map();
  for (const p of portas) {
    if (p.tipo !== "correr") continue;
    const chave = fmt(Math.hypot(p.x2 - p.x1, p.y2 - p.y1));
    extras.set(chave, (extras.get(chave) || 0) + 1);
  }
  for (const [medida, qtd] of extras) {
    linhaLista(lista, `${qtd}× porta de correr marcada · folha ${medida} m`);
  }
}
function renderJanelas() {
  const lista = document.getElementById("janelaList");
  if (!lista) return;
  lista.innerHTML = "";
  linhaLista(lista, `Frente da copa/sala: 2× folha fixa ${fmt(J4_F)} × ${fmt(JANELA_ALTURA)} m · 2× folha móvel ${fmt(J4_M)} × ${fmt(JANELA_ALTURA)} m`);
}

function stageToUser(sx, sy) {
  let x = sx;
  let y = sy;
  if (flipV) y = STAGE_H - y;
  if (rotated) {
    const nx = STAGE_H - y;
    const ny = x;
    x = nx;
    y = ny;
  }
  return [x, y];
}
function userToStage(ux, uy) {
  if (rotated && flipV) return { x: uy, y: ux };
  if (rotated) return { x: uy, y: STAGE_H - ux };
  if (flipV) return { x: ux, y: STAGE_H - uy };
  return { x: ux, y: uy };
}

function applyWorld() {
  const scaleX = canvas.width / vb.w;
  const scaleY = canvas.height / vb.h;
  ctx.setTransform(scaleX, 0, 0, scaleY, -vb.x * scaleX, -vb.y * scaleY);
  if (rotated) ctx.transform(0, 1, -1, 0, STAGE_H, 0);
  if (flipV) ctx.transform(1, 0, 0, -1, 0, STAGE_H);
}

function drawUpright(text, mx, my, fill, size, weight, align = "center") {
  const [ux, uy] = stageToUser(px(mx), py(my));
  const scale = canvas.width / vb.w;
  const cx = (ux - vb.x) * scale;
  const cy = (uy - vb.y) * (canvas.height / vb.h);
  const pageZoom = zoomPagina();
  const natural = size * ((canvas.clientWidth || 1) / vb.w);
  const naTela = Math.min(natural * pageZoom, TEXTO_MAX);
  const dpr = canvas.width / (canvas.clientWidth || 1);
  const pxFonte = Math.max(8, (naTela / pageZoom) * dpr);
  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.font = `${weight} ${pxFonte}px "Segoe UI", system-ui, sans-serif`;
  ctx.textAlign = align;
  ctx.textBaseline = "middle";
  ctx.lineJoin = "round";
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = Math.max(2, pxFonte * 0.22);
  ctx.strokeText(text, cx, cy);
  ctx.fillStyle = fill;
  ctx.fillText(text, cx, cy);
  ctx.restore();
}

function strokeMeters(x1, y1, x2, y2, color, width, dash) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.lineCap = "butt";
  ctx.setLineDash(dash || []);
  ctx.beginPath();
  ctx.moveTo(px(x1), py(y1));
  ctx.lineTo(px(x2), py(y2));
  ctx.stroke();
  ctx.restore();
}

const COR_EIXO = "#e04848";
const COR_FACE = DIV_COLOR;
const COR_GERAL = "#6b7280";
const COR_PAREDE = "#2b3140";
const EIXOS_X = [0, 3.40, 7.45];
const EIXOS_Y = [4.00, 7.15, 10.32, 14.20];

// Linha de cota, linhas de extensão e traço oblíquo. Os extremos continuam o intervalo medido.
function drawDim(x1, y1, x2, y2, label, color) {
  const horizontal = Math.abs(y1 - y2) < 1e-6;
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const paraDentroX = Math.sign(W / 2 - mx) || 1;
  const paraDentroY = Math.sign((Y0 + H) / 2 - my) || 1;
  const alcanca = 0.22;
  const passa = 0.05;
  const tick = 0.055;
  if (horizontal) {
    strokeMeters(x1, y1 - paraDentroY * passa, x1, y1 + paraDentroY * alcanca, color, 1.05);
    strokeMeters(x2, y2 - paraDentroY * passa, x2, y2 + paraDentroY * alcanca, color, 1.05);
  } else {
    strokeMeters(x1 - paraDentroX * passa, y1, x1 + paraDentroX * alcanca, y1, color, 1.05);
    strokeMeters(x2 - paraDentroX * passa, y2, x2 + paraDentroX * alcanca, y2, color, 1.05);
  }
  strokeMeters(x1, y1, x2, y2, color, 1.2);
  strokeMeters(x1 - tick, y1 - tick, x1 + tick, y1 + tick, color, 1.35);
  strokeMeters(x2 - tick, y2 - tick, x2 + tick, y2 + tick, color, 1.35);
  if (horizontal) {
    drawUpright(label, mx, my - 0.18, color, 12, "600");
  } else {
    const fora = mx < W / 2;
    drawUpright(label, fora ? mx - 0.14 : mx + 0.14, my, color, 12, "600", fora ? "right" : "left");
  }
}

function blocoParede(x, y, w, h) {
  ctx.fillStyle = COR_PAREDE;
  ctx.fillRect(px(x), py(y), u(w), u(h));
}

// Faixa de 14 cm centrada no eixo gravado. As faces ficam a 7 cm de cada lado.
function faixaCentral(x1, y1, x2, y2, t) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy);
  if (len < 1e-6) return;
  const nx = (-dy / len) * (t / 2);
  const ny = (dx / len) * (t / 2);
  ctx.beginPath();
  ctx.moveTo(px(x1 + nx), py(y1 + ny));
  ctx.lineTo(px(x2 + nx), py(y2 + ny));
  ctx.lineTo(px(x2 - nx), py(y2 - ny));
  ctx.lineTo(px(x1 - nx), py(y1 - ny));
  ctx.closePath();
  ctx.fillStyle = COR_PAREDE;
  ctx.fill();
}

function ehJanelaDaFrente(p) {
  return Math.abs(p.y1 - 4.07) < 0.02 && Math.abs(p.y2 - 4.07) < 0.02
    && Math.min(p.x1, p.x2) < 3.6 && Math.max(p.x1, p.x2) > 7.1;
}

function drawEixos() {
  const folga = 0.22;
  ctx.save();
  ctx.strokeStyle = "#3d4454";
  ctx.lineWidth = 1.2;
  ctx.setLineDash([14, 4, 2, 4]);
  ctx.lineCap = "butt";
  ctx.beginPath();
  for (const x of EIXOS_X) {
    ctx.moveTo(px(x), py(Y0 - folga));
    ctx.lineTo(px(x), py(H + folga));
  }
  for (const y of EIXOS_Y) {
    ctx.moveTo(px(-folga), py(y));
    ctx.lineTo(px(W + folga), py(y));
  }
  ctx.stroke();
  ctx.restore();
}

function drawPilar(box) {
  ctx.save();
  ctx.fillStyle = COR_EIXO;
  ctx.strokeStyle = "#7f1d1d";
  ctx.lineWidth = 1;
  ctx.fillRect(px(box.x), py(box.y), u(box.w), u(box.h));
  ctx.strokeRect(px(box.x), py(box.y), u(box.w), u(box.h));
  ctx.restore();
}

function drawColunaFalsa() {
  ctx.fillStyle = COR_EIXO;
  ctx.fillRect(px(COLUNA_FALSA.x), py(COLUNA_FALSA.y), u(COLUNA_FALSA.w), u(COLUNA_FALSA.h));
  ctx.save();
  ctx.beginPath();
  ctx.strokeStyle = COR_PAREDE;
  ctx.lineWidth = 1.25;
  ctx.arc(
    px(COLUNA_FALSA.x + COLUNA_FALSA.w / 2),
    py(COLUNA_FALSA.y + COLUNA_FALSA.h / 2),
    u(CANO_D / 2),
    0, Math.PI * 2
  );
  ctx.stroke();
  ctx.restore();
}

// Folha Estrutura: eixos, pilares e cotas de eixo. Sem parede, porta ou grade.
function drawEstrutura() {
  drawEixos();
  for (const c of columns) drawPilar(columnBox(c));
  for (const c of COLUNAS_DIVISAO) drawPilar(columnBox(c));
  drawDim(0, Y0 - 0.75, 3.40, Y0 - 0.75, "3,40 m", COR_EIXO);
  drawDim(3.40, Y0 - 0.75, 7.45, Y0 - 0.75, "4,05 m", COR_EIXO);
  drawDim(-0.75, 4.00, -0.75, 7.15, "3,15 m", COR_EIXO);
  drawDim(-0.75, 7.15, -0.75, 10.32, "3,17 m", COR_EIXO);
  drawDim(-0.75, 10.32, -0.75, 14.20, "3,88 m", COR_EIXO);
  drawDim(0, Y0 - 0.35, W, Y0 - 0.35, "7,45 m", COR_GERAL);
  drawDim(-0.35, Y0, -0.35, H, "10,20 m", COR_GERAL);
}

// Folha Vedação: envelope e divisões em faixa de 14 cm. A frente entre as colunas não volta a ser parede cega.
function drawVedacao() {
  blocoParede(0, Y0, WALL_T, D);
  blocoParede(0, H - WALL_T, W, WALL_T);
  for (const w of walls) {
    const naParedeB = Math.abs(w.x1 - W) < 1e-6 && Math.abs(w.x2 - W) < 1e-6;
    if (!naParedeB || w.dash) continue;
    const y0 = Math.min(w.y1, w.y2);
    const y1 = Math.max(w.y1, w.y2);
    blocoParede(W - WALL_T, y0, WALL_T, y1 - y0);
  }
  for (const p of paredes) {
    if (ehJanelaDaFrente(p)) continue;
    faixaCentral(p.x1, p.y1, p.x2, p.y2, p.espessura || WALL_T);
  }
  drawColunaFalsa();
  drawDim(W + 0.35, B_ENTRADA.y0, W + 0.35, B_ENTRADA.y1, "3,20 (entrada)", COR_GERAL);
  drawDim(W + 0.35, B_JANELA.y0, W + 0.35, B_JANELA.y1, "3,17 m", COR_GERAL);
  drawDim(W + 0.35, B_CEGA.y0, W + 0.35, B_CEGA.y1, "3,83 (cega)", COR_GERAL);
}

function drawEsquadrias() {
  drawEntradaVidro();
  drawTresFolhas();
  drawJanelaAltaFrente();
  for (const porta of portas) drawPorta(porta, "#2f6df0");
  if (startPoint && hoverPoint && !samePoint(startPoint, hoverPoint)) {
    drawPorta(
      { x1: startPoint.x, y1: startPoint.y, x2: hoverPoint.x, y2: hoverPoint.y, tipo: "correr" },
      "rgba(47,109,240,0.45)"
    );
  }
  if (startPoint) {
    ctx.save();
    ctx.fillStyle = "#2f6df0";
    ctx.beginPath();
    ctx.arc(px(startPoint.x), py(startPoint.y), 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

// Folha Cotas: só face a face, em azul.
function drawCotas() {
  drawDim(1.6, 4.00, 1.6, 7.015, "3,015 m", COR_FACE);
  drawDim(1.6, 7.155, 1.6, 8.765, "1,610 m", COR_FACE);
  drawDim(1.6, 8.905, 1.6, 14.20, "5,295 m", COR_FACE);
  drawDim(0, 6.70, 3.33, 6.70, "3,33 m", COR_FACE);
  drawDim(0, 9.15, 3.33, 9.15, "3,33 m", COR_FACE);
  drawDim(3.85, 7.285, 3.85, 10.185, "2,90 m", COR_FACE);
  drawDim(3.85, 10.455, 3.85, 14.20, "3,745 m", COR_FACE);
  drawDim(3.47, 9.92, 7.31, 9.92, "3,84 m", COR_FACE);
  drawDim(3.535, 4.40, 7.18, 4.40, "3,645 m", COR_FACE);
  drawDim(7.05, 5.7775, 7.05, 7.015, "1,238 m", COR_FACE);
}

function drawAmbientes() {
  const cor = "#1f2430";
  const itens = [
    ["A · cozinha", 2.45, 5.55],
    ["B · banheiro", 2.15, 8.40],
    ["C · quarto casal", 2.05, 12.15],
    ["D · quarto solteiro", 5.70, 12.35],
    ["E · copa/sala", 5.20, 6.35],
  ];
  for (const [texto, x, y] of itens) drawUpright(texto, x, y, cor, 13, "700");
}

let drawing = false;
function draw() {
  if (drawing) return;
  drawing = true;
  try {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const cssW = canvas.clientWidth || STAGE_W;
  const cssH = canvas.clientHeight || STAGE_H;
  const bw = Math.max(1, Math.round(cssW * dpr));
  const bh = Math.max(1, Math.round(cssH * dpr));
  if (canvas.width !== bw || canvas.height !== bh) {
    canvas.width = bw;
    canvas.height = bh;
  }
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  applyWorld();

  ctx.fillStyle = "#fbfcfe";
  ctx.fillRect(px(0), py(Y0), u(W), u(D));

  if (camada("show-vedacao")) drawVedacao();
  if (camada("show-estrutura")) drawEstrutura();
  if (camada("show-esquadrias")) drawEsquadrias();
  if (camada("show-cotas")) drawCotas();
  if (camada("show-ambientes")) drawAmbientes();
  } finally {
    drawing = false;
  }
}

function drawJanelaFolha(x, y, w, fill, dash) {
  ctx.save();
  ctx.fillStyle = fill;
  ctx.strokeStyle = J4_COR;
  ctx.lineWidth = 1.5;
  if (dash) ctx.setLineDash(dash);
  ctx.fillRect(px(x), py(y), u(w), u(J4_T));
  ctx.strokeRect(px(x), py(y), u(w), u(J4_T));
  ctx.restore();
}
function drawJanelaAltaFrente() {
  drawJanelaFolha(J4_X0, J4_Y_FIXA, J4_F, "rgba(14,122,74,0.55)");
  drawJanelaFolha(J4_X1 - J4_F, J4_Y_FIXA, J4_F, "rgba(14,122,74,0.55)");
  drawJanelaFolha(J4_MOV_L_FECHADA, J4_Y_MOVEL, J4_M, "rgba(14,122,74,0.28)");
  drawJanelaFolha(J4_MOV_R_FECHADA, J4_Y_MOVEL, J4_M, "rgba(14,122,74,0.28)");
  drawJanelaFolha(J4_X0, J4_Y_MOVEL, J4_M, "rgba(14,122,74,0.06)", [5, 4]);
  drawJanelaFolha(J4_X1 - J4_M, J4_Y_MOVEL, J4_M, "rgba(14,122,74,0.06)", [5, 4]);
  const vão0 = J4_X0 + J4_F + J4_SOBRA;
  const vão1 = J4_X1 - J4_F - J4_SOBRA;
  drawDim(J4_X0, 4.72, J4_X0 + J4_F, 4.72, `fixa ${fmt(J4_F)} m`, J4_COR);
  drawDim(J4_MOV_L_FECHADA, 5.02, J4_MOV_L_FECHADA + J4_M, 5.02, `móvel ${fmt(J4_M)} m`, J4_COR);
  drawDim(vão0, 5.40, vão1, 5.40, `vão ${fmt3(vão1 - vão0)} m`, J4_COR);
  drawUpright("10 cm", J4_X0 + J4_F + J4_SOBRA / 2, 4.52, J4_COR, 10, "600");
  drawUpright("10 cm", J4_X1 - J4_F - J4_SOBRA / 2, 4.52, J4_COR, 10, "600");
}
function drawEntradaVidro() {
  ctx.save();
  ctx.fillStyle = "rgba(12,127,150,0.35)";
  ctx.strokeStyle = VIDRO_COR;
  ctx.lineWidth = 1.6;
  ctx.fillRect(px(ENT_X), py(ENT_FECHADA_Y), u(ENT_FOLHA_T), u(ENT_FOLHA));
  ctx.strokeRect(px(ENT_X), py(ENT_FECHADA_Y), u(ENT_FOLHA_T), u(ENT_FOLHA));
  ctx.setLineDash([6, 4]);
  ctx.strokeRect(px(ENT_X), py(ENT_ABERTA_Y), u(ENT_FOLHA_T), u(ENT_FOLHA));
  ctx.restore();
  const ax = ENT_X - 0.08;
  strokeMeters(ax, ENT_FECHADA_Y, ax, ENT_ABERTA_Y, VIDRO_COR, 1.4);
  strokeMeters(ax, ENT_ABERTA_Y, ax - 0.045, ENT_ABERTA_Y - 0.12, VIDRO_COR, 1.4);
  strokeMeters(ax, ENT_ABERTA_Y, ax + 0.045, ENT_ABERTA_Y - 0.12, VIDRO_COR, 1.4);
  drawDim(6.95, ENT_FECHADA_Y, 6.95, ENT_FECHADA_Y + ENT_FOLHA, `folha ${fmt3(ENT_FOLHA)} m`, VIDRO_COR);
  drawDim(6.35, ENT_FECHADA_Y, 6.35, ENT_ABERTA_Y, `vão ${fmt3(ENT_PASSAGEM)} m`, VIDRO_COR);
  drawDim(6.65, ENT_ABERTA_Y, 6.65, ENT_PAREDE, `${fmt(ENT_PUXADOR)} m`, VIDRO_COR);
  drawDim(5.95, ENT_ABERTA_Y, 5.95, ENT_ABERTA_FIM, "arraste", VIDRO_COR);
  drawUpright(`${fmt3(ENT_ABERTA_FIM)} m`, 5.95, ENT_ABERTA_FIM + 0.16, VIDRO_COR, 11, "600");
}
function drawFolha(box, fill, dash) {
  ctx.save();
  ctx.fillStyle = fill;
  ctx.strokeStyle = F3_COR;
  ctx.lineWidth = 1.5;
  if (dash) ctx.setLineDash(dash);
  ctx.fillRect(px(box.x), py(box.y), u(box.w), u(box.h || F3_T));
  ctx.strokeRect(px(box.x), py(box.y), u(box.w), u(box.h || F3_T));
  ctx.restore();
}
function setaParaParede(x, y) {
  const tip = x - 0.18;
  strokeMeters(x, y, tip, y, F3_COR, 1.4);
  strokeMeters(tip, y, tip + 0.07, y - 0.025, F3_COR, 1.4);
  strokeMeters(tip, y, tip + 0.07, y + 0.025, F3_COR, 1.4);
}
function drawTresFolhas() {
  drawFolha(F3_FIXA, "rgba(36,87,197,0.45)");
  drawFolha(F3_CENTRO, "rgba(36,87,197,0.28)");
  drawFolha(F3_PUX, "rgba(36,87,197,0.28)");
  drawFolha({ x: 0, y: F3_CENTRO.y, w: F3_L }, "rgba(36,87,197,0.08)", [5, 4]);
  drawFolha({ x: 0, y: F3_PUX.y, w: F3_L1 }, "rgba(36,87,197,0.08)", [5, 4]);
  setaParaParede(F3_CENTRO.x + F3_L * 0.55, F3_CENTRO.y + F3_T / 2);
  setaParaParede(F3_PUX.x + 0.35, F3_PUX.y + F3_T / 2);
  drawDim(0, 4.62, F3_L, 4.62, `fixa ${fmt(F3_L)} m`, F3_COR);
  drawDim(F3_CENTRO.x, 4.88, F3_CENTRO.x + F3_L, 4.88, `central ${fmt(F3_L)} m`, F3_COR);
  drawDim(F3_PUX.x, 5.14, F3_PUX.x + F3_L1, 5.14, `puxador ${fmt(F3_L1)} m`, F3_COR);
  drawUpright("3 cm", F3_L - F3_OVER / 2, 4.36, F3_COR, 10, "600");
  drawUpright("3 cm", F3_PUX.x + F3_OVER / 2, 4.36, F3_COR, 10, "600");
  drawUpright("5,5 cm", (F3_FACE + F3_PUX.x + F3_L1) / 2, 4.36, F3_COR, 10, "600");
}
function drawPorta(porta, color) {
  if (porta.tipo === "correr") drawPortaCorrer(porta, color);
  else drawPortaGiro(porta, color);
}
function drawPortaGiro(porta, color) {
  const hx = porta.x1, hy = porta.y1;
  const dx = porta.x2 - hx, dy = porta.y2 - hy;
  const raio = Math.hypot(dx, dy);
  if (raio < 0.02) return;
  strokeMeters(hx, hy, porta.x2, porta.y2, color, 2);
  const ox = hx - dy, oy = hy + dx;
  strokeMeters(hx, hy, ox, oy, color, 1.5);
  const a0 = Math.atan2(dy, dx);
  const a1 = Math.atan2(dx, -dy);
  let delta = a1 - a0;
  while (delta > Math.PI) delta -= Math.PI * 2;
  while (delta < -Math.PI) delta += Math.PI * 2;
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  const steps = 18;
  for (let i = 0; i <= steps; i++) {
    const ang = a0 + delta * (i / steps);
    const mx = hx + raio * Math.cos(ang);
    const my = hy + raio * Math.sin(ang);
    const sx = px(mx), sy = py(my);
    if (i === 0) ctx.moveTo(sx, sy);
    else ctx.lineTo(sx, sy);
  }
  ctx.stroke();
  ctx.restore();
}
function drawPortaCorrer(porta, color) {
  const x1 = porta.x1, y1 = porta.y1;
  const dx = porta.x2 - x1, dy = porta.y2 - y1;
  const len = Math.hypot(dx, dy);
  if (len < 0.02) return;
  const ux = dx / len, uy = dy / len;
  const nx = -uy, ny = ux;
  const folha = 0.04;
  strokeMeters(x1, y1, porta.x2, porta.y2, color, u(folha));
  const off = WALL_T / 2 + 0.04;
  const ax1 = x1 + nx * off, ay1 = y1 + ny * off;
  const ax2 = porta.x2 + nx * off, ay2 = porta.y2 + ny * off;
  strokeMeters(ax1, ay1, ax2, ay2, color, 1.4);
  const head = Math.min(0.16, len * 0.28);
  const wing = head * 0.45;
  strokeMeters(ax2, ay2, ax2 - ux * head + nx * wing, ay2 - uy * head + ny * wing, color, 1.4);
  strokeMeters(ax2, ay2, ax2 - ux * head - nx * wing, ay2 - uy * head - ny * wing, color, 1.4);
}

function snap(m) {
  return Math.round(m * 100) / 100;
}
function samePoint(a, b) {
  return Math.abs(a.x - b.x) < 0.005 && Math.abs(a.y - b.y) < 0.005;
}
function inRange(p) {
  return p.x >= -0.2 && p.x <= W + 0.2 && p.y >= Y0 - 0.2 && p.y <= H + 0.2;
}
function clientToPoint(e) {
  const rect = canvas.getBoundingClientRect();
  if (!rect.width || !rect.height) return null;
  const ux = vb.x + ((e.clientX - rect.left) / rect.width) * vb.w;
  const uy = vb.y + ((e.clientY - rect.top) / rect.height) * vb.h;
  const st = userToStage(ux, uy);
  const p = { x: snap((st.x - OX) / S), y: snap(Y0 + (st.y - OY) / S) };
  return inRange(p) ? p : null;
}

function place(p) {
  if (!camada("show-esquadrias")) {
    showHint();
    return;
  }
  if (!p) return;
  if (!startPoint) {
    startPoint = p;
    showInfoPanel(
      `<h3>Início da folha da porta</h3>` +
      `<div class="t-area">(${fmt(p.x)} ; ${fmt(p.y)}) m</div>` +
      `<div class="t-light">Clique o fim da folha da porta. A porta corre nesse sentido.</div>`
    );
    draw();
    return;
  }
  if (samePoint(startPoint, p)) {
    startPoint = null;
    hoverPoint = null;
    showHint();
    draw();
    return;
  }
  const raio = Math.hypot(p.x - startPoint.x, p.y - startPoint.y);
  portas.push({ x1: startPoint.x, y1: startPoint.y, x2: p.x, y2: p.y, tipo: "correr" });
  persistPortas();
  renderPortas();
  showInfoPanel(
    `<h3>Porta de correr</h3>` +
    `<div class="t-dim">Uma folha · <strong>${fmt(raio)} m</strong></div>` +
    `<div class="t-light">De (${fmt(startPoint.x)} ; ${fmt(startPoint.y)}) até (${fmt(p.x)} ; ${fmt(p.y)})</div>`
  );
  startPoint = null;
  hoverPoint = null;
  draw();
}

// --- Controles ---
const chkEstrutura = document.getElementById("chkEstrutura");
const chkVedacao = document.getElementById("chkVedacao");
const chkEsquadrias = document.getElementById("chkEsquadrias");
const chkCotas = document.getElementById("chkCotas");
const chkAmbientes = document.getElementById("chkAmbientes");
const btnFlip = document.getElementById("btnFlip");

function ligaCamada(input, classe) {
  document.body.classList.toggle(classe, input.checked);
  input.addEventListener("change", () => {
    document.body.classList.toggle(classe, input.checked);
    if (!input.checked && classe === "show-esquadrias") {
      startPoint = null;
      hoverPoint = null;
      showHint();
    }
    draw();
  });
}
ligaCamada(chkEstrutura, "show-estrutura");
ligaCamada(chkVedacao, "show-vedacao");
ligaCamada(chkEsquadrias, "show-esquadrias");
ligaCamada(chkCotas, "show-cotas");
ligaCamada(chkAmbientes, "show-ambientes");

function applyStage() {
  document.body.classList.toggle("rotated", true);
  document.body.classList.toggle("flip-v", flipV);
  VB_INIT = VB_ROTATED;
  vb = { ...VB_INIT };
  canvas.style.aspectRatio = `${VB_INIT.w} / ${VB_INIT.h}`;
  btnFlip.classList.toggle("active", flipV);
  draw();
}

btnFlip.addEventListener("click", () => { flipV = !flipV; applyStage(); });

canvas.addEventListener("mousemove", (e) => {
  if (!startPoint) return;
  hoverPoint = clientToPoint(e);
  draw();
});
canvas.addEventListener("click", (e) => {
  place(clientToPoint(e));
});

window.addEventListener("keydown", (e) => {
  if (e.key !== "Escape" || !startPoint) return;
  startPoint = null;
  hoverPoint = null;
  showHint();
  draw();
});

const legendItems = [
  { swatch: "#2b3140", label: "Parede · 14 cm" },
  { swatch: "#e04848", label: "Pilar 27×14 cm" },
  { swatch: "#e04848", label: "Coluna falsa · cano 150 mm" },
  { swatch: "#e04848", label: "Cota de eixo" },
  { swatch: "#1f59d8", label: "Cota de face" },
  { swatch: "#6b7280", label: "Cota geral" },
  { swatch: "#2f6df0", label: "Porta de giro" },
  { swatch: "#0c7f96", label: "Vidro de correr · entrada" },
  { swatch: "#2457c5", label: "Correr · 3 folhas" },
  { swatch: "#0e7a4a", label: "Janela alta · 4 folhas" },
];
const legendList = document.getElementById("legendList");
legendItems.forEach((it) => {
  const li = document.createElement("li");
  const sw = document.createElement("span");
  sw.className = "swatch";
  sw.style.background = it.swatch;
  if (it.swatch === "wall") {
    sw.style.background = "transparent";
    sw.style.border = "none";
    sw.style.borderTop = "3px solid #2b3140";
    sw.style.height = "3px";
    sw.style.marginTop = "5px";
  } else if (it.swatch === "wall-open") {
    sw.style.background = "transparent";
    sw.style.border = "none";
    sw.style.borderTop = "2px dashed var(--muted)";
    sw.style.height = "2px";
    sw.style.marginTop = "5px";
  } else if (it.label.startsWith("Parede marcada")) {
    sw.style.height = "8px";
  }
  li.appendChild(sw);
  li.appendChild(document.createTextNode(it.label));
  legendList.appendChild(li);
});

if (typeof ResizeObserver !== "undefined") {
  new ResizeObserver(() => draw()).observe(canvas);
}
for (let i = portas.length - 1; i >= 0; i--) {
  const p = portas[i];
  if (p.tipo === "correr" && Math.max(p.y1, p.y2) < 4.5 && Math.min(p.x1, p.x2) < 0.5 && Math.max(p.x1, p.x2) > 2) {
    portas.splice(i, 1);
  }
}
persistPortas();
renderPortas();
renderJanelas();
applyStage();
window.addEventListener("resize", () => draw());
if (window.visualViewport) {
  window.visualViewport.addEventListener("resize", () => draw());
}
