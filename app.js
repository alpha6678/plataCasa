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
const VIDRO_COR = "#4a4a4a";
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
// Três folhas na frente, da parede A até a face da coluna (x = 3,265). Não entram no pilar.
// Fechadas: fixa e central se encontram em 3 cm. A última sobreposição fica em 2,5 cm
// para o puxador terminar na face x = 3,265, sem entrar no pilar e sem crescer a folha.
// Fixa e central 1,09 m; puxador 1,14 m.
// Abertas: a central e a do puxador correm até ficarem rentes à parede A. A terceira é fixa.
// As três camadas ficam no eixo da coluna (14 cm, de y 4,00 a 4,14), não para dentro do cômodo.
const F3_FACE = 3.265;
const F3_OVER = 0.03;
const F3_L = 1.09;
const F3_L1 = 1.14;
const F3_T = 0.04;
const F3_Y0 = 4.07 - (3 * F3_T) / 2;
const F3_FIXA = { x: 0, w: F3_L, y: F3_Y0 };
const F3_CENTRO = { x: F3_L - F3_OVER, w: F3_L, y: F3_Y0 + F3_T };
const F3_PUX = { x: F3_FACE - F3_L1, w: F3_L1, y: F3_Y0 + 2 * F3_T };
const F3_COR = "#4a4a4a";
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
const J4_COR = "#4a4a4a";
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
const JANELA_ALTURA = 1.15;

const VB_NORMAL = { x: 0, y: 0, w: STAGE_W, h: STAGE_H };
const VB_ROTATED = { x: 0, y: 0, w: STAGE_H, h: STAGE_W };
let VB_INIT = VB_NORMAL;
let vb = { ...VB_INIT };
const TEXTO_MAX = 15;
const BASE_W = 846;
let zoom = 1;
let rotated = false;
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
function rotuloCm(m) {
  const cm = Math.round(m * 1000) / 10;
  const texto = Number.isInteger(cm) ? String(cm) : cm.toFixed(1).replace(".", ",");
  return `${texto} cm`;
}

function camada(nome) {
  return document.body.classList.contains(nome);
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
  const scaleX = canvas.width / vb.w;
  const scaleY = canvas.height / vb.h;
  const cx = (ux - vb.x) * scaleX;
  const cy = (uy - vb.y) * scaleY;
  const dpr = canvas.width / (canvas.clientWidth || 1);
  const cssPx = Math.min(size * (BASE_W / STAGE_W), TEXTO_MAX);
  const pxFonte = Math.max(1, cssPx * dpr);
  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.font = `${weight} ${pxFonte}px "Segoe UI", system-ui, sans-serif`;
  ctx.textAlign = align;
  ctx.textBaseline = "middle";
  ctx.lineJoin = "round";
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = Math.max(1, pxFonte * 0.18);
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

const COR_PILAR = "#1c1c1c";
const COR_PAREDE = "#2a2a2a";
const COR_EIXO = "#9aa0a6";
const COR_COTA = "#1a56c4";
const COR_FACE = COR_COTA;
const COR_GERAL = COR_COTA;
const COR_AMBIENTE = "#2f6b4f";
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

const COR_PAREDE_MIOLO = "#e7eaee";
const PAREDE_TRACO = 1.15;
const PILAR_TRACO = 2.8;

function hachuraNoClip(x0, y0, x1, y1) {
  const minX = Math.min(x0, x1) - 2;
  const maxX = Math.max(x0, x1) + 2;
  const minY = Math.min(y0, y1) - 2;
  const maxY = Math.max(y0, y1) + 2;
  ctx.save();
  ctx.clip();
  ctx.beginPath();
  ctx.strokeStyle = "rgba(42, 42, 42, 0.4)";
  ctx.lineWidth = 0.55;
  ctx.setLineDash([]);
  const step = 5.5;
  const altura = maxY - minY;
  for (let x = minX - altura; x < maxX; x += step) {
    ctx.moveTo(x, minY);
    ctx.lineTo(x + altura, maxY);
  }
  ctx.stroke();
  ctx.restore();
}

function blocoParede(x, y, w, h) {
  const x0 = px(x);
  const y0 = py(y);
  const rw = u(w);
  const rh = u(h);
  ctx.save();
  ctx.beginPath();
  ctx.rect(x0, y0, rw, rh);
  ctx.fillStyle = COR_PAREDE_MIOLO;
  ctx.fill();
  hachuraNoClip(x0, y0, x0 + rw, y0 + rh);
  ctx.beginPath();
  ctx.rect(x0, y0, rw, rh);
  ctx.strokeStyle = COR_PAREDE;
  ctx.lineWidth = PAREDE_TRACO;
  ctx.lineJoin = "miter";
  ctx.setLineDash([]);
  ctx.stroke();
  ctx.restore();
}

// Faixa de 14 cm centrada no eixo gravado. As faces ficam a 7 cm de cada lado.
function faixaCentral(x1, y1, x2, y2, t) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy);
  if (len < 1e-6) return;
  const nx = (-dy / len) * (t / 2);
  const ny = (dx / len) * (t / 2);
  const xs = [x1 + nx, x2 + nx, x2 - nx, x1 - nx].map(px);
  const ys = [y1 + ny, y2 + ny, y2 - ny, y1 - ny].map(py);
  ctx.beginPath();
  ctx.moveTo(xs[0], ys[0]);
  ctx.lineTo(xs[1], ys[1]);
  ctx.lineTo(xs[2], ys[2]);
  ctx.lineTo(xs[3], ys[3]);
  ctx.closePath();
  ctx.fillStyle = COR_PAREDE_MIOLO;
  ctx.fill();
  hachuraNoClip(Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys));
  ctx.beginPath();
  ctx.moveTo(xs[0], ys[0]);
  ctx.lineTo(xs[1], ys[1]);
  ctx.lineTo(xs[2], ys[2]);
  ctx.lineTo(xs[3], ys[3]);
  ctx.closePath();
  ctx.strokeStyle = COR_PAREDE;
  ctx.lineWidth = PAREDE_TRACO;
  ctx.lineJoin = "miter";
  ctx.setLineDash([]);
  ctx.stroke();
}

function ehJanelaDaFrente(p) {
  return Math.abs(p.y1 - 4.07) < 0.02 && Math.abs(p.y2 - 4.07) < 0.02
    && Math.min(p.x1, p.x2) < 3.6 && Math.max(p.x1, p.x2) > 7.1;
}

function drawEixos() {
  const folga = 0.22;
  ctx.save();
  ctx.strokeStyle = COR_EIXO;
  ctx.lineWidth = 0.8;
  ctx.setLineDash([16, 3, 2, 3]);
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
  ctx.beginPath();
  ctx.rect(px(box.x), py(box.y), u(box.w), u(box.h));
  ctx.fillStyle = COR_PILAR;
  ctx.fill();
  ctx.strokeStyle = "#111111";
  ctx.lineWidth = PILAR_TRACO;
  ctx.lineJoin = "miter";
  ctx.setLineDash([]);
  ctx.stroke();
  ctx.restore();
}

function drawColunaFalsa() {
  drawPilar(COLUNA_FALSA);
  ctx.save();
  ctx.beginPath();
  ctx.strokeStyle = "#f2f2f2";
  ctx.lineWidth = 1.35;
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
  drawDim(0, Y0 - 0.75, 3.40, Y0 - 0.75, "3,40 m", COR_COTA);
  drawDim(3.40, Y0 - 0.75, 7.45, Y0 - 0.75, "4,05 m", COR_COTA);
  drawDim(-0.75, 4.00, -0.75, 7.15, "3,15 m", COR_COTA);
  drawDim(-0.75, 7.15, -0.75, 10.32, "3,17 m", COR_COTA);
  drawDim(-0.75, 10.32, -0.75, 14.20, "3,88 m", COR_COTA);
  drawDim(0, Y0 - 0.35, W, Y0 - 0.35, "7,45 m", COR_GERAL);
  drawDim(-0.35, Y0, -0.35, H, "10,20 m", COR_GERAL);
}

// Folha Vedação: envelope e divisões em faixa de 14 cm. A frente entre as colunas não volta a ser parede cega.
// Esquerda e fundo são medidas internas: a faixa de 14 cm fica para fora da linha tracejada.
function drawVedacao() {
  blocoParede(-WALL_T, Y0, WALL_T, D + WALL_T);
  blocoParede(-WALL_T, H, W + WALL_T, WALL_T);
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
  for (const porta of portas) drawPorta(porta, "#4a4a4a");
  if (startPoint && hoverPoint && !samePoint(startPoint, hoverPoint)) {
    drawPorta(
      { x1: startPoint.x, y1: startPoint.y, x2: hoverPoint.x, y2: hoverPoint.y, tipo: "correr" },
      "rgba(74,74,74,0.45)"
    );
  }
  if (startPoint) {
    ctx.save();
    ctx.fillStyle = "#4a4a4a";
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
  drawCotasEsquadrias();
}

// Início e sobra da folha até a face seguinte. Menos de 1 cm não vira cota.
function cotaFolga(x1, y1, x2, y2) {
  const d = Math.hypot(x2 - x1, y2 - y1);
  if (d < 0.01) return;
  drawDim(x1, y1, x2, y2, `${fmt(d)} m`, COR_COTA);
}

function drawCotasEsquadrias() {
  // Porta 1, y 7,285–8,185: o início é a face da coluna. A sobra é a parede até a porta seguinte.
  cotaFolga(5.05, 8.185, 5.05, 9.035);
  // Porta 2, y 9,035–9,935: o início encosta na parede. A sobra vai até a face da coluna.
  cotaFolga(5.05, 9.935, 5.05, 10.185);
  // Porta 3, y 10,32, x 3,60–4,50: 13 cm depois da face x 3,47. O fim encosta na parede seguinte.
  cotaFolga(3.47, 9.40, 3.60, 9.40);
}

function drawAmbientes() {
  const cor = COR_AMBIENTE;
  const itens = [
    ["COZINHA", 2.45, 5.55],
    ["BANHEIRO", 2.15, 8.40],
    ["QUARTO CASAL", 2.05, 12.15],
    ["QUARTO SOLTEIRO", 5.70, 12.35],
    ["COPA/SALA", 5.20, 6.35],
  ];
  for (const [texto, x, y] of itens) drawUpright(texto, x, y, cor, 13, "700");
}

let drawing = false;
function draw() {
  if (drawing) return;
  drawing = true;
  try {
  placeCanvas();
  syncView();
  const dpr = window.devicePixelRatio || 1;
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
  drawJanelaFolha(J4_X0, J4_Y_FIXA, J4_F, "rgba(74,74,74,0.18)");
  drawJanelaFolha(J4_X1 - J4_F, J4_Y_FIXA, J4_F, "rgba(74,74,74,0.18)");
  drawJanelaFolha(J4_MOV_L_FECHADA, J4_Y_MOVEL, J4_M, "rgba(74,74,74,0)");
  drawJanelaFolha(J4_MOV_R_FECHADA, J4_Y_MOVEL, J4_M, "rgba(74,74,74,0)");
  setaEsquadria(J4_MOV_L_FECHADA + J4_M * 0.62, J4_Y_MOVEL + J4_T / 2, -1, 0);
  setaEsquadria(J4_MOV_R_FECHADA + J4_M * 0.38, J4_Y_MOVEL + J4_T / 2, 1, 0);
  const vão0 = J4_X0 + J4_F + J4_SOBRA;
  const vão1 = J4_X1 - J4_F - J4_SOBRA;
  drawDim(J4_X0, 4.72, J4_X0 + J4_F, 4.72, `fixa ${fmt(J4_F)} m`, COR_COTA);
  drawDim(J4_MOV_L_FECHADA, 5.02, J4_MOV_L_FECHADA + J4_M, 5.02, `móvel ${fmt(J4_M)} m`, COR_COTA);
  drawDim(vão0, 5.40, vão1, 5.40, `vão ${fmt3(vão1 - vão0)} m`, COR_COTA);
  drawUpright("10 cm", J4_X0 + J4_F + J4_SOBRA / 2, 4.52, COR_COTA, 10, "600");
  drawUpright("10 cm", J4_X1 - J4_F - J4_SOBRA / 2, 4.52, COR_COTA, 10, "600");
}
function drawEntradaVidro() {
  ctx.save();
  ctx.fillStyle = "rgba(74,74,74,0.12)";
  ctx.strokeStyle = VIDRO_COR;
  ctx.lineWidth = 1.4;
  ctx.fillRect(px(ENT_X), py(ENT_FECHADA_Y), u(ENT_FOLHA_T), u(ENT_FOLHA));
  ctx.strokeRect(px(ENT_X), py(ENT_FECHADA_Y), u(ENT_FOLHA_T), u(ENT_FOLHA));
  ctx.restore();
  const ax = ENT_X - 0.08;
  ctx.save();
  ctx.strokeStyle = VIDRO_COR;
  ctx.lineWidth = 1.1;
  ctx.setLineDash([10, 3, 2, 3, 2, 3]);
  ctx.beginPath();
  ctx.moveTo(px(ax), py(ENT_FECHADA_Y));
  ctx.lineTo(px(ax), py(ENT_ABERTA_Y));
  ctx.stroke();
  ctx.restore();
  setaEsquadria(ENT_X + ENT_FOLHA_T / 2, ENT_FECHADA_Y + 0.18, 0, 1);
  const entFim = ENT_FECHADA_Y + ENT_FOLHA;
  if (ENT_PAREDE - entFim >= 0.01) {
    drawDim(7.15, entFim, 7.15, ENT_PAREDE, `${fmt(ENT_PAREDE - entFim)} m`, COR_COTA);
  }
  drawDim(6.95, ENT_FECHADA_Y, 6.95, entFim, `folha ${fmt3(ENT_FOLHA)} m`, COR_COTA);
  drawDim(6.35, ENT_FECHADA_Y, 6.35, ENT_ABERTA_Y, `vão ${fmt3(ENT_PASSAGEM)} m`, COR_COTA);
  drawDim(6.65, ENT_ABERTA_Y, 6.65, ENT_PAREDE, `${fmt(ENT_PUXADOR)} m`, COR_COTA);
  drawDim(5.95, ENT_ABERTA_Y, 5.95, ENT_ABERTA_FIM, "arraste", COR_COTA);
  drawUpright(`${fmt3(ENT_ABERTA_FIM)} m`, 5.95, ENT_ABERTA_FIM + 0.16, COR_COTA, 11, "600");
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
function setaEsquadria(x, y, dirX, dirY) {
  const len = Math.hypot(dirX, dirY) || 1;
  const ux = dirX / len;
  const uy = dirY / len;
  const pxn = -uy;
  const pyn = ux;
  const tipX = x + ux * 0.28;
  const tipY = y + uy * 0.28;
  const cor = "#4a4a4a";
  strokeMeters(x, y, tipX, tipY, cor, 1.6);
  strokeMeters(tipX, tipY, tipX - ux * 0.08 + pxn * 0.03, tipY - uy * 0.08 + pyn * 0.03, cor, 1.6);
  strokeMeters(tipX, tipY, tipX - ux * 0.08 - pxn * 0.03, tipY - uy * 0.08 - pyn * 0.03, cor, 1.6);
}
function setaParaParede(x, y) {
  setaEsquadria(x, y, -1, 0);
}
function drawTresFolhas() {
  drawFolha(F3_FIXA, "rgba(36,87,197,0.45)");
  drawFolha(F3_CENTRO, "rgba(36,87,197,0.12)");
  drawFolha(F3_PUX, "rgba(36,87,197,0.12)");
  setaParaParede(F3_CENTRO.x + F3_L * 0.62, F3_CENTRO.y + F3_T / 2);
  setaParaParede(F3_PUX.x + F3_L1 * 0.62, F3_PUX.y + F3_T / 2);
  drawDim(0, 4.62, F3_L, 4.62, `fixa ${fmt(F3_L)} m`, F3_COR);
  drawDim(F3_CENTRO.x, 4.88, F3_CENTRO.x + F3_L, 4.88, `central ${fmt(F3_L)} m`, F3_COR);
  drawDim(F3_PUX.x, 5.14, F3_PUX.x + F3_L1, 5.14, `puxador ${fmt(F3_L1)} m`, F3_COR);
  const sobreUlt = (F3_CENTRO.x + F3_L) - F3_PUX.x;
  drawUpright("3 cm", F3_L - F3_OVER / 2, 4.36, F3_COR, 10, "600");
  drawUpright(rotuloCm(sobreUlt), F3_PUX.x + sobreUlt / 2, 4.36, F3_COR, 10, "600");
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
  ctx.setLineDash([10, 3, 2, 3, 2, 3]);
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
  if (!camada("show-esquadrias")) return;
  if (!p) return;
  if (!startPoint) {
    startPoint = p;
    draw();
    return;
  }
  if (samePoint(startPoint, p)) {
    startPoint = null;
    hoverPoint = null;
    draw();
    return;
  }
  portas.push({ x1: startPoint.x, y1: startPoint.y, x2: p.x, y2: p.y, tipo: "correr" });
  persistPortas();
  renderPortas();
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

function ligaCamada(input, classe) {
  document.body.classList.toggle(classe, input.checked);
  input.addEventListener("change", () => {
    document.body.classList.toggle(classe, input.checked);
    if (!input.checked && classe === "show-esquadrias") {
      startPoint = null;
      hoverPoint = null;
    }
    draw();
  });
}
ligaCamada(chkEstrutura, "show-estrutura");
ligaCamada(chkVedacao, "show-vedacao");
ligaCamada(chkEsquadrias, "show-esquadrias");
ligaCamada(chkCotas, "show-cotas");
ligaCamada(chkAmbientes, "show-ambientes");

const viewport = document.getElementById("viewport");
const sheet = document.getElementById("sheet");

function baseSize() {
  return { w: BASE_W, h: BASE_W * STAGE_H / STAGE_W };
}
function syncSheet() {
  const b = baseSize();
  sheet.style.width = `${b.w * zoom}px`;
  sheet.style.height = `${b.h * zoom}px`;
}
function placeCanvas() {
  const port = viewport.getBoundingClientRect();
  const paper = sheet.getBoundingClientRect();
  const left = Math.max(port.left, paper.left);
  const top = Math.max(port.top, paper.top);
  const right = Math.min(port.right, paper.right);
  const bottom = Math.min(port.bottom, paper.bottom);
  const w = Math.max(0, right - left);
  const h = Math.max(0, bottom - top);
  canvas.style.left = `${left}px`;
  canvas.style.top = `${top}px`;
  canvas.style.width = `${Math.max(1, w)}px`;
  canvas.style.height = `${Math.max(1, h)}px`;
  canvas.style.visibility = w < 1 || h < 1 ? "hidden" : "visible";
}
function syncView() {
  const b = baseSize();
  const sheetW = Math.max(1, b.w * zoom);
  const sheetH = Math.max(1, b.h * zoom);
  const viewW = canvas.clientWidth || 1;
  const viewH = canvas.clientHeight || 1;
  vb.x = (Math.max(0, viewport.scrollLeft) / sheetW) * STAGE_W;
  vb.y = (Math.max(0, viewport.scrollTop) / sheetH) * STAGE_H;
  vb.w = (viewW / sheetW) * STAGE_W;
  vb.h = (viewH / sheetH) * STAGE_H;
}
function applyZoom(next, clientX, clientY) {
  const rect = viewport.getBoundingClientRect();
  const ox = clientX - rect.left;
  const oy = clientY - rect.top;
  const b = baseSize();
  const prevW = b.w * zoom;
  const prevH = b.h * zoom;
  const relX = (viewport.scrollLeft + ox) / prevW;
  const relY = (viewport.scrollTop + oy) / prevH;
  zoom = Math.max(1e-4, next);
  syncSheet();
  viewport.scrollLeft = relX * b.w * zoom - ox;
  viewport.scrollTop = relY * b.h * zoom - oy;
  draw();
}

function applyStage() {
  document.body.classList.toggle("rotated", false);
  document.body.classList.toggle("flip-v", flipV);
  VB_INIT = VB_NORMAL;
  syncSheet();
  draw();
}

canvas.addEventListener("mousemove", (e) => {
  if (!startPoint) return;
  hoverPoint = clientToPoint(e);
  draw();
});
canvas.addEventListener("click", (e) => {
  place(clientToPoint(e));
});
canvas.addEventListener("wheel", (e) => {
  if (!e.ctrlKey && !e.metaKey) {
    viewport.scrollLeft += e.deltaX;
    viewport.scrollTop += e.deltaY;
    e.preventDefault();
    return;
  }
  e.preventDefault();
  applyZoom(zoom * Math.exp(-e.deltaY * 0.0015), e.clientX, e.clientY);
}, { passive: false });
viewport.addEventListener("scroll", () => draw(), { passive: true });

let toque = null;
function distToque(e) {
  const a = e.touches[0];
  const b = e.touches[1];
  return Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
}
function meioToque(e) {
  return {
    x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
    y: (e.touches[0].clientY + e.touches[1].clientY) / 2,
  };
}
canvas.addEventListener("touchstart", (e) => {
  if (e.touches.length === 2) {
    toque = { tipo: "pinça", dist: distToque(e), zoom, meio: meioToque(e) };
  } else if (e.touches.length === 1) {
    const t = e.touches[0];
    toque = { tipo: "pan", x: t.clientX, y: t.clientY, sl: viewport.scrollLeft, st: viewport.scrollTop };
  }
}, { passive: true });
canvas.addEventListener("touchmove", (e) => {
  if (!toque) return;
  if (toque.tipo === "pinça" && e.touches.length === 2) {
    e.preventDefault();
    const meio = meioToque(e);
    applyZoom(toque.zoom * (distToque(e) / toque.dist), meio.x, meio.y);
  } else if (toque.tipo === "pan" && e.touches.length === 1) {
    e.preventDefault();
    const t = e.touches[0];
    viewport.scrollLeft = toque.sl - (t.clientX - toque.x);
    viewport.scrollTop = toque.st - (t.clientY - toque.y);
    draw();
  }
}, { passive: false });
canvas.addEventListener("touchend", () => { toque = null; });

window.addEventListener("keydown", (e) => {
  if (e.key !== "Escape" || !startPoint) return;
  startPoint = null;
  hoverPoint = null;
  draw();
});

const legendItems = [
  { swatch: "#1c1c1c", label: "Pilar em corte — cheio, contorno grosso" },
  { swatch: "parede", label: "Parede em corte — contorno e hachura, faixa de 14 cm" },
  { swatch: "esquadria", label: "Esquadria — linha fina" },
  { swatch: "eixo", label: "Eixo — traço longo e ponto" },
  { swatch: "#1a56c4", label: "Cota — linha fina" },
  { swatch: "#2f6b4f", label: "Texto de ambiente" },
];
const legendList = document.getElementById("legendList");
legendItems.forEach((it) => {
  const li = document.createElement("li");
  const sw = document.createElement("span");
  sw.className = "swatch";
  sw.style.background = it.swatch;
  if (it.swatch === "parede") {
    sw.style.background = "#e7eaee";
    sw.style.border = "1.5px solid #2a2a2a";
    sw.style.backgroundImage = "repeating-linear-gradient(135deg, transparent, transparent 2px, rgba(42,42,42,.45) 2px, rgba(42,42,42,.45) 3px)";
  } else if (it.swatch === "#1c1c1c") {
    sw.style.border = "2px solid #111111";
  } else if (it.swatch === "esquadria") {
    sw.style.background = "transparent";
    sw.style.border = "none";
    sw.style.borderTop = "2px solid #4a4a4a";
    sw.style.height = "2px";
    sw.style.marginTop = "5px";
  } else if (it.swatch === "eixo") {
    sw.style.background = "transparent";
    sw.style.border = "none";
    sw.style.borderTop = "2px dashed #9aa0a6";
    sw.style.height = "2px";
    sw.style.marginTop = "5px";
  }
  li.appendChild(sw);
  li.appendChild(document.createTextNode(it.label));
  legendList.appendChild(li);
});

if (typeof ResizeObserver !== "undefined") {
  new ResizeObserver(() => draw()).observe(viewport);
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
