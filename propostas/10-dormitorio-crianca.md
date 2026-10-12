# Dormitório Criança

Cômodo em x = 4,50, y = 10,32, **2,95 × 3,88 m**, área **11,45 m²**. Coordenadas no mesmo sistema da planta: (x, y) é o canto de menor x e menor y; L corre em x e P corre em y. Medidas conferidas em `especificacoes.md` e em `app.js` (`dorm-crianca`, porta `doorH(10.32, 5.20, 0.80, 1)`, clerestório de x 5,00 a 7,00, mobília e pilar em (7,45; 10,32) com o lado de 27 cm no eixo y).

## Restrições

- Envelope fechado. Parede oeste em x = 4,50, contra o hall de 1,10 m (x 3,40–4,50). Sem porta para o hall.
- Parede B no trecho do quarto (y 10,37–14,20, 3,83 m) permanece cega. Parede C (y = 14,20) é subsolo e permanece cega. Sem claraboia.
- Luz só pela divisória do corredor, y = 10,32. O corredor é iluminado pela janela alta da parede B (y 7,20–10,37, peitoril 1,40 m, topo 2,55 m). O clerestório é abertura interna para esse corredor.
- Porta de acesso no corredor: vão x 5,20–6,00 (0,80 m), y = 10,32, abrindo para o sul. No desenho, a dobradiça está em (5,20; 10,32); a folha aberta fica sobre x = 5,20 até y = 11,12. O giro é o quarto de círculo de raio 0,80 m a leste dessa dobradiça (x 5,20–6,00, y 10,32–11,12).
- Pilar (7,45; 10,32), 27 × 14 cm, lado maior no eixo y, centrado na quina. Face oeste em x = 7,38; face sul em y = 10,455. Esse trecho da parede norte não recebe vidro nem batente.
- A planta não define pé-direito geral nem altura da folha da porta. A faixa 1,40–2,55 m entra só como a altura em que a janela do corredor de fato ilumina.

## Referências

Não há planta publicada que reúna, de uma vez, quarto de solteiro por volta de 3 × 4 m, duas fachadas externas cegas, sem claraboia, e luz apenas por bandeira ou clerestório interno voltado a um corredor com janela alta. As cinco fontes abaixo cobrem as partes desse problema: a peça sobre a porta, o vidro ao lado do vão, a faixa alta, o quarto de uma criança e a área de cerca de 11 m².

1. **Bandeira (transom).** A travessa horizontal separa a porta da janela que fica acima dela. Essa janela alta servia para trazer luz e ar sem abrir a folha. É o modo de o vão x 5,20–6,00 e o vidro ocuparem o mesmo x sem serem o mesmo furo.  
   https://en.wikipedia.org/wiki/Transom_(architecture)

2. **Vidro ao lado da porta (sidelight).** Faixa de vidro junto à porta, também em porta interna, quando se precisa de mais luz. Em altura dos olhos pede tratamento de privacidade; a bandeira, por estar alta, quase não tem esse problema. O painel a leste do vão é essa peça, ao lado da bandeira.  
   https://en.wikipedia.org/wiki/Sidelight

3. **Clerestório.** Faixa de janela acima da linha dos olhos, para luz com privacidade. Em casa aparece como banda estreita no topo da parede. O verbete separa esse tipo de janela de claraboia e de água-furtada: a abertura deste quarto é faixa na divisória, não furo de laje.  
   https://www.designingbuildings.co.uk/wiki/Clerestory

4. **Quarto de criança e folgas.** O quarto jovem acumula cama, estudo e roupa. Para cama de solteiro de 900 mm de largura, a folga para fazer a cama é de 350–400 mm em pelo menos um lado. O roupeiro pede no mínimo 550 mm de profundidade.  
   https://www.designingbuildings.co.uk/wiki/Bedroom

5. **Área de um quarto pequeno.** No padrão britânico NDSS, quarto de uma pessoa tem pelo menos 7,5 m² e 2,15 m de largura; quarto de duas pessoas, pelo menos 11,5 m² (um deles com largura de pelo menos 2,75 m). Este cômodo, com 11,45 m² e 2,95 m de largura, cabe um solteiro com estudo e roupeiro. O aperto está na porta, no pilar e nas fachadas cegas, não na área. O padrão cita pé-direito mínimo de 2,3 m na maior parte da área; isso não é adotado aqui, porque a planta não fixa pé-direito.  
   https://www.gov.uk/government/publications/technical-housing-standards-nationally-described-space-standard  
   PDF: https://assets.publishing.service.gov.uk/media/6123c60e8fa8f53dd1f9b04d/160519_Nationally_Described_Space_Standard.pdf

Leitura de apoio, sem ser modelo de planta: quarto com luz de um lado só tende a ficar vazio quando a pessoa pode escolher outro ([padrão 159, Light on Two Sides of Every Room](https://www.patternlanguage.com/apl/aplsample/apl159/apl159.htm)). Aqui a segunda fachada não existe (B e C cegas, sem claraboia). O que dá para fazer é alongar a única fonte e não pôr a escrivaninha no canto mais fundo.

## Proposta

### Clerestório e porta

Na parede norte (2,95 m, de x 4,50 a 7,45) não cabem, lado a lado, vão de 0,80 m e vidro contínuo de 2,00 m. A soma é 2,80 m. Até a face da coluna (x = 7,38) sobram 2,88 m, isto é, 8 cm para montante, batente e quina. Com a coluna ignorada, o resto seria 15 cm, e o vidro ainda entraria no pilar.

A faixa de 2,00 m fica em **x 5,20–7,20**, na mesma parede y = 10,32:

| Trecho | x | Comprimento | O que é |
|--------|---|-------------|---------|
| Bandeira | 5,20–6,00 | 0,80 m | Vidro só acima da folha, no x do vão. Não corta a porta. |
| Painel fixo | 6,00–7,20 | 1,20 m | Vidro ao lado da porta, do lado da janela alta do corredor. |
| Folga até a coluna | 7,20–7,38 | 0,18 m | Montante antes da face do pilar. |
| Parede a oeste da porta | 4,50–5,20 | 0,70 m | Cheia. O desenho atual punha 0,20 m de vidro aqui (x 5,00–5,20); essa fresta sai. |

O painel de 1,20 m é o que realmente ilumina: está mais perto da janela alta (parede B do corredor) do que o trecho x 5,00–5,20. A bandeira completa os 2,00 m e cobre o conflito de x.

Altura, sem inventar pé-direito: a luz direta dessa janela existe entre 1,40 m e 2,55 m. O painel leste pode ocupar essa faixa. A bandeira só existe no que sobrar acima da folha e até 2,55 m. Se a verga da porta ficar perto de 2,55 m, a bandeira fica curta e o painel leste sustenta a luz. Vidro fixo e translúcido no painel, se o peitoril descer até 1,40 m, para o corredor não olhar o quarto. Bandeira basculante para o corredor só vale no intervalo entre a verga e 2,55 m, quando a altura da folha estiver definida. Com vidro fixo, o quarto ganha luz e não ganha ventilação de fachada.

### Mobília

O giro da porta fica livre. Nada entra no quarto de círculo x 5,20–6,00, y 10,32–11,12.

| Peça | x | y | L × P | Até (x, y) | Parede |
|------|---|---|-------|------------|--------|
| Escrivaninha | 4,55 | 11,40 | 1,50 × 0,55 | 6,05 ; 11,95 | Solta, voltada para o norte (para o clerestório). Cadeira do lado sul. |
| Roupeiro | 6,85 | 10,55 | 0,60 × 1,60 | 7,45 ; 12,15 | Parede B, abaixo da coluna (face sul em y = 10,455). Porta de correr. |
| Cama de solteiro | 4,60 | 13,30 | 1,90 × 0,90 | 6,50 ; 14,20 | Lado longo na parede C. Colchão corrente cerca de 0,88–0,90 × 1,88–1,90 m. |

Circulação:

- Entre a escrivaninha (x até 6,05) e o roupeiro (x desde 6,85) ficam **0,80 m**.
- A cadeira, puxada cerca de 0,50 m para o sul, chega perto de y = 12,45 e ainda deixa cerca de 0,85 m até a cama (y = 13,30).
- A cama tem o lado norte livre para arrumar (a referência pede 0,35–0,40 m em um lado).
- A leste da cama, de x 6,50 à parede B, ficam **0,95 m**.
- O roupeiro termina em y = 12,15; até a cama há 1,15 m para cruzar até a parede B.

A escrivaninha inteira está fora do giro: a borda norte em y = 11,40 fica a 1,08 m da dobradiça, e o raio da porta é 0,80 m. O roupeiro começa em x = 6,85, também fora do giro. Porta de correr no roupeiro de 0,60 m: uma folha de abrir consumiria a passagem de 0,80 m.

A escrivaninha olha para a única luz. O canto junto à parede C, onde ela está hoje, é o mais distante dessa faixa.

## Manter e ajustar

**Manter**

- O retângulo 2,95 × 3,88 m, origem (4,50; 10,32), área 11,45 m².
- Paredes B e C cegas no quarto; sem claraboia; sem porta no hall.
- Porta em x 5,20–6,00, dobradiça a oeste, abrindo para o sul, com o giro livre. Deslocar a porta para “abrir espaço” ao vidro não rende 2,00 m contínuos com montante e coluna.
- As três funções: cama, estudo, roupa.
- Roupeiro na parede B (cega) e escrivaninha de 1,50 × 0,55 m.
- Clerestório interno de 2,00 m na parede y = 10,32, puxado para o leste, do lado da janela alta.

**Ajustar**

- Clerestório de x 5,00–7,00 para **x 5,20–7,20**. O miolo 5,20–6,00 vira bandeira; 6,00–7,20 é painel fixo; 5,00–5,20 deixa de ser vidro.
- Cama de (4,70; 10,35), 1,30 × 1,25 m, para **(4,60; 13,30), 1,90 × 0,90 m**. O retângulo atual cobre o giro (a folha vai até y = 11,12 e a cama começa em y = 10,35) e 1,25 m não é comprimento de solteiro.
- Escrivaninha de (4,70; 13,45) para **(4,55; 11,40)**, mesmo 1,50 × 0,55 m, voltada ao clerestório.
- Roupeiro de (6,90; 10,60), 0,50 × 1,55 m, para **(6,85; 10,55), 0,60 × 1,60 m**, encostado na parede B e abaixo da coluna. A profundidade de 0,50 m fica aquém dos 0,55 m da referência; 0,60 m resolve. Porta de correr.

## Resumo ao coordenador

Quarto em (4,50; 10,32), 2,95 × 3,88 m, 11,45 m². Paredes B (y 10,37–14,20) e C seguem cegas; sem claraboia e sem porta para o hall.
A luz é interna, na parede y = 10,32, vinda da janela alta do corredor (peitoril 1,40 m, topo 2,55 m). Não há pé-direito geral para fixar verga.
Porta permanece em x 5,20–6,00, dobradiça em x = 5,20, abrindo para o sul. O giro de raio 0,80 m, até y = 11,12, fica vazio.
Vidro de 2,00 m ao lado da porta não cabe: 0,80 + 2,00 = 2,80 m, e a coluna deixa a face em x = 7,38.
Clerestório passa para x 5,20–7,20. Os 0,80 m do vão são bandeira acima da folha; x 6,00–7,20 é painel fixo, 0,18 m antes da coluna. A fresta x 5,00–5,20 sai.
O painel leste pode usar a faixa 1,40–2,55 m; a bandeira só o que couber entre a verga e 2,55 m. Vidro fixo não ventila o quarto.
Cama de solteiro 1,90 × 0,90 m em (4,60; 13,30), lado longo na parede C. A peça atual (1,30 × 1,25 m) está em cima da porta e é curta.
Escrivaninha 1,50 × 0,55 m vai para (4,55; 11,40), de frente para o clerestório. Passagem de 0,80 m até o roupeiro.
Roupeiro 0,60 × 1,60 m em (6,85; 10,55), na parede B, abaixo da coluna, com porta de correr. A leste da cama sobram 0,95 m.
