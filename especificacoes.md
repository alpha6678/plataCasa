# Especificações da planta

Documento consolidado a partir de [index.html](index.html) e [app.js](app.js). Medidas em metros; áreas em m². Formato decimal com vírgula quando aplicável (como na interface).

**Resumo:** planta em **L**, estilo moderno · envelope **7,45 × 14,20 m** · **~86 m² internos + ~13,5 m² externos** (área coberta/implantação **~99,7 m²**).

---

## Sistema de coordenadas

| Parâmetro | Valor |
|-----------|--------|
| Eixo **x** | Largura, de **0** (Parede A) a **7,45** (Parede B) |
| Eixo **y** | Profundidade, de **0** (fachada frontal nova) a **14,20** (Parede C / fundo) |
| Escala no desenho | **1 m = 60 px** |
| Origem SVG | **(60, 60)** px |

---

## Envelope e implantação

### Caixa externa

- **Largura total:** 7,45 m (Parede A ↔ Parede B)
- **Profundidade total:** 14,20 m (fachada D ↔ Parede C), incluindo extensão frontal

### Planta em L — extensão frontal

- **Faixa oeste** (x **0–3,40**): extensão com **4,00 m** de profundidade (lavanderia, banheiro, cozinha até y = 4,00 na divisória com varanda).
- **Faixa leste** (x **3,40–7,45**): varanda com **2,50 m** de profundidade (y **1,50–4,00**).

### Reentrância (fora da edificação)

- Região **x 3,40–7,45**, **y 0–1,50**
- Dimensões: **4,05 × 1,50 m**
- Área: **6,08 m²** (não construída)

### Áreas de referência

| Descrição | Cálculo | Área |
|-----------|---------|------|
| Retângulo envolvente | 7,45 × 14,20 | 105,79 m² |
| Menos reentrância | − 4,05 × 1,50 | − 6,08 m² |
| **Implantação / área coberta** | | **99,72 m²** |
| Ambientes internos (sem lavanderia ext. e varanda) | soma dos cômodos fechados/semiabertos | **86,19 m²** (tela: **86,20 m²** arredondando cada ambiente) |
| Áreas externas (lavanderia + varanda) | 3,40 + 10,125 | **13,53 m²** na tela (**13,525 m²** exato) |

---

## Ambientes

Coordenadas: canto **inferior esquerdo** do retângulo do ambiente **(x, y)**; **L × P** = largura × profundidade.

| Ambiente | x | y | L × P (m) | Área (m²) | Integrado / aberto | Iluminação / ventilação | Observação |
|----------|---|---|-----------|-----------|---------------------|-------------------------|------------|
| Lavanderia (Externa) | 0 | 0 | 3,40 × 1,00 | 3,40 | Aberto | Aberta para área externa | Extensão frontal · integrada à varanda |
| Banheiro Social | 0 | 1,00 | 3,40 × 1,50 | 5,10 | Fechado | Báscula voltada para lavanderia externa | Faixa de serviço frontal · acesso pela cozinha |
| Cozinha | 0 | 2,50 | 3,40 × 4,65 | 15,81 | Integrado (sem parede com sala/corredor) | Vidro D + luz da varanda | Bancada em L rente à Parede A |
| Sala Estar / Jantar | 3,40 | 4,00 | 4,05 × 3,15 | 12,76 | Integrado | Divisória de vidro + janela alta B | Entrada pela Parede B (3,20 m) · vista varanda |
| Varanda | 3,40 | 1,50 | 4,05 × 2,50 | 10,13 | Aberto (guarda-corpo) | Aberta | Divisória de vidro com a sala |
| Corredor Iluminado | 3,40 | 7,15 | 4,05 × 3,17 | 12,84 | Integrado à sala | Janela alta B | Acesso hall e quartos |
| Despensa | 0 | 7,15 | 3,40 × 1,20 | 4,08 | Fechado | Bloco de vidro (corredor) | Uso seco · anexa à cozinha |
| Closet | 0 | 8,35 | 3,40 × 1,97 | 6,70 | Fechado | Artificial / espelhos | Walk-in anexo ao dorm. casal |
| Hall de Dormitórios | 3,40 | 10,32 | 1,10 × 3,88 | 4,27 | Fechado | Aberto ao corredor iluminado | Acesso ao dormitório de casal |
| Dormitório Casal | 0 | 10,32 | 3,40 × 3,88 | 13,19 | Fechado | Bloco de vidro (hall) | Acesso pelo hall |
| Dormitório Criança | 4,50 | 10,32 | 2,95 × 3,88 | 11,45 | Fechado | Clerestory (corredor) | Acesso pelo corredor |

**Integração:** cozinha, sala e corredor **não possuem divisórias entre si** (planta aberta nesse eixo).

---

## Paredes perimetrais (A, B, C, D)

Convenção da interface ([index.html](index.html)):

| Parede | Posição | Comprimento | Condição |
|--------|---------|-------------|----------|
| **A** | Esquerda (x = 0) | **14,20 m** | Cega, sem janelas |
| **B** | Direita (x = 7,45) | **14,20 m** total | Ver segmentos abaixo |
| **C** | Fundo (y = 14,20) | **7,45 m** | Subsolo · cega |
| **D** | Frente (y = 0 e bordas frontais) | Ver ab abaixo | Lavanderia aberta + varanda + vidro interno |

### Parede B — segmentos (de y = 0 para y = 14,20)

| Segmento | y (m) | Comprimento | Tipo |
|----------|-------|-------------|------|
| Reentrância | 0 – 1,50 | — | Sem parede B (vazio do L) |
| Guarda-corpo varanda | 1,50 – 4,00 | **2,50 m** | Aberto |
| **Entrada** | 4,00 – 7,20 | **3,20 m** | Abertura (acesso principal) |
| **Janela alta** | 7,20 – 10,37 | **3,17 m** | Peitoril **1,40 m**, topo **2,55 m** · ilumina/ventila corredor e banheiro social |
| Trecho cego | 10,37 – 14,20 | **3,83 m** | Cega |

### Parede D e frontais

| Elemento | Extensão | Comprimento | Tipo |
|----------|----------|-------------|------|
| Borda lavanderia externa | x 0 → 3,40 em y = 0 | **3,40 m** | Totalmente aberta |
| Borda varanda (frente) | x 3,40 → 7,45 em y = 1,50 | **4,05 m** | Guarda-corpo |
| Divisória sala / varanda | x 3,40 → 7,45 em y = 4,00 | **4,05 m** | Vidro interno até **2,55 m** de altura |

### Parede norte do banheiro

- Linha **y = 1,00**, x **0 → 3,40** (**3,40 m**)
- **Báscula** voltada para a lavanderia externa (ventilação)

---

## Divisórias internas

Oito segmentos (cozinha / sala / corredor **sem** parede entre si):

| De (x1, y1) | Até (x2, y2) | Função |
|-------------|--------------|--------|
| (3,40 ; 0) | (3,40 ; 4,00) | Lavanderia+banho+cozinha \| externa/varanda |
| (0 ; 2,50) | (3,40 ; 2,50) | Banheiro / cozinha |
| (0 ; 7,15) | (3,40 ; 7,15) | Cozinha / despensa |
| (0 ; 8,35) | (3,40 ; 8,35) | Despensa / closet |
| (0 ; 10,32) | (3,40 ; 10,32) | Closet / dormitório casal |
| (3,40 ; 7,15) | (3,40 ; 14,20) | Bloco oeste \| corredor+hall |
| (4,50 ; 10,32) | (7,45 ; 10,32) | Corredor / dormitório criança |
| (4,50 ; 10,32) | (4,50 ; 14,20) | Hall / dormitório criança |

---

## Portas

Todas com vão **0,80 m**.

| Parede (y ou x) | Posição do vão | Abertura |
|-----------------|----------------|----------|
| y = **2,50** (banheiro/cozinha) | x **1,30 → 2,10** | Para **norte** (−1) |
| y = **7,15** (cozinha/despensa) | x **1,30 → 2,10** | Para **sul** (+1) |
| y = **10,32** (closet/dorm. casal) | x **1,30 → 2,10** | Para **norte** (−1) |
| x = **3,40** (hall/dorm. casal) | y **13,20 → 14,00** | Para **oeste** (−1) |
| y = **10,32** (corredor/dorm. criança) | x **5,20 → 6,00** | Para **sul** (+1) |

---

## Estrutura — colunas e vãos

### Pilares

- **Quantidade:** 6
- **Seção:** **27 × 14 cm**
- **Grade:** x ∈ **{3,40 ; 7,45}**, y ∈ **{4,00 ; 7,15 ; 10,32}** (grade estrutural deslocada **+4,00 m** em y pela extensão frontal)
- **Orientação:** eixo **x** = lado maior (27 cm) na largura; eixo **y** = lado maior na profundidade

| Posição (x ; y) m | Orientação | Vão |
|-------------------|------------|-----|
| 3,40 ; 4,00 | x | Vão frontal (divisória sala/varanda) |
| 7,45 ; 4,00 | x | Vão frontal (canto B ∩ D) |
| 3,40 ; 7,15 | y | Vão central (1ª interna) |
| 7,45 ; 7,15 | y | Vão central (Parede B) |
| 3,40 ; 10,32 | y | Vão fundo (2ª interna) |
| 7,45 ; 10,32 | y | Vão fundo (Parede B) |

### Cotas estruturais (vãos livres)

**Em x** (entre Parede A e Parede B):

- **3,40 m** (x 0 → 3,40)
- **4,05 m** (x 3,40 → 7,45)

**Em y** (a partir de y = **4,00**, grade original):

- **3,15 m** (y 4,00 → 7,15)
- **3,17 m** (y 7,15 → 10,32)
- **3,88 m** (y 10,32 → 14,20)

---

## Luz natural e ventilação

| Elemento | Localização | Função |
|----------|-------------|--------|
| Fachada aberta lavanderia | y = 0, x 0–3,40 | Luz máxima · área externa |
| Báscula banheiro social | Parede y = 1,00, vão ~x **1,30–2,10** (desenho **0,80 m**) | Ventilação para lavanderia externa |
| Guarda-corpo varanda | y = 1,50 e x = 7,45 (1,50–4,00) | Luz externa |
| Divisória de vidro | y = 4,00, x 3,40–7,45 | Sala ↔ varanda |
| Janela alta Parede B | y 7,20–10,37 | Corredor (+ banheiro social) |
| Bloco de vidro | y ≈ 7,50, altura **0,80 m** | Despensa ↔ corredor |
| Bloco de vidro | y ≈ 9,00, altura **0,80 m** | Closet ↔ corredor |
| Clerestory | y = 10,32, x **5,00–7,00** (**2,00 m**) | Dormitório criança ↔ corredor |
| Bloco de vidro | y ≈ 11,20, altura **1,60 m** | Dormitório casal ↔ hall |

**Ventilação marcada:** báscula do banheiro social na parede norte; fluxo de ar orientado para a lavanderia externa.

---

## Mobília de referência

Camada opcional no desenho; **não constitui especificação de obra**, apenas layout indicativo. Posições **(x, y)** do canto inferior esquerdo; **L × P** em metros.

### Lavanderia externa

| Peça | x | y | L × P |
|------|---|---|-------|
| Tanque | 0,15 | 0,25 | 0,55 × 0,55 |
| Máquina | 0,85 | 0,25 | 0,55 × 0,55 |
| Bancada | 1,50 | 0,25 | 1,00 × 0,55 |

### Banheiro social

| Peça | x | y | L × P |
|------|---|---|-------|
| Pia | 0,15 | 1,15 | 0,65 × 0,40 |
| Vaso | 1,00 | 1,15 | 0,55 × 0,60 |
| Box | 2,40 | 1,10 | 0,90 × 1,30 |

### Cozinha

| Peça | x | y | L × P |
|------|---|---|-------|
| Bancada (parede A) | 0,10 | 2,60 | 0,60 × 4,45 |
| Bancada / ilha | 1,20 | 6,00 | 1,30 × 0,75 |
| Geladeira | 2,70 | 6,25 | 0,55 × 0,55 |

### Sala

| Peça | x | y | L × P |
|------|---|---|-------|
| Sofá | 3,65 | 4,10 | 2,00 × 0,55 |
| Rack | 3,65 | 6,85 | 1,00 × 0,25 |
| Mesa jantar | 5,85 | 6,55 | 1,40 × 0,55 |

### Varanda

| Peça | x | y | L × P |
|------|---|---|-------|
| Mesa | 4,90 | 3,20 | 1,30 × 0,65 |

### Despensa

| Peça | x | y | L × P |
|------|---|---|-------|
| Prateleira vertical | 0,10 | 7,30 | 0,35 × 0,90 |
| Prateleira horizontal | 0,45 | 7,30 | 2,80 × 0,35 |

### Closet

| Peça | x | y | L × P |
|------|---|---|-------|
| Cabideiro | 0,10 | 8,50 | 0,55 × 1,70 |
| Cabideiro | 2,75 | 8,50 | 0,55 × 1,70 |

### Dormitório casal

| Peça | x | y | L × P |
|------|---|---|-------|
| Cama | 0,90 | 10,35 | 1,60 × 1,50 |
| Guarda-roupa | 0,10 | 12,40 | 0,55 × 1,60 |
| Criado-mudo | 2,60 | 10,60 | 0,45 × 0,45 |

### Dormitório criança

| Peça | x | y | L × P |
|------|---|---|-------|
| Cama solteiro | 4,70 | 10,35 | 1,30 × 1,25 |
| Guarda-roupa | 6,90 | 10,60 | 0,50 × 1,55 |
| Escrivaninha | 4,70 | 13,45 | 1,50 × 0,55 |

---

## Restrições e condicionantes

- **Laje não perfurável:** sem claraboias.
- **Lavanderia** em área **externa** (extensão frontal); **banheiro social** na faixa de serviço com báscula para a lavanderia, garantindo ventilação.
- Este documento **não** inclui pé-direito global, espessuras de parede, materiais de acabamento ou detalhes construtivos além do que está no modelo da planta interativa.

---

## Fonte dos dados

| Arquivo | Conteúdo |
|---------|----------|
| [app.js](app.js) | Coordenadas, ambientes, paredes, portas, colunas, cotas, luz, mobília |
| [index.html](index.html) | Título, resumo de áreas, legenda das paredes A–D, nota sobre laje e lavanderia |

*Gerado para referência do projeto **Planta da Casa** (visualização SVG).*
