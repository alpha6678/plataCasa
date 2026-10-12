# Dormitório Casal

Cômodo em x = 0, y = 10,32, **3,40 × 3,88 m**, área **13,19 m²**. Coordenadas no mesmo sistema da planta: (x, y) é o canto de menor x e menor y; L corre em x e P corre em y. Menor y é o norte (fachada); y = 14,20 é a parede C, ao sul. Medidas conferidas em `especificacoes.md` e em `app.js` (`dorm-casal`, portas `doorH(10.32, 1.30, 0.80, -1)` e `doorV(3.40, 13.20, 0.80, -1)`, bloco em y = 11,20 com 1,60 m ao longo da parede, mobília e pilar em (3,40; 10,32) com o lado de 27 cm no eixo y).

## Restrições

- Envelope fechado. Parede A (x = 0) cega. Parede C (y = 14,20) é subsolo e cega. Sem claraboia e sem janela de fachada neste quarto.
- Luz só pelo bloco de vidro na divisória do hall, x = 3,40. No desenho o painel mede **1,60 m ao longo da parede, de y 11,20 a 12,80**. A especificação chama essa medida de altura; não há peitoril nem pé-direito para transformá-la em cota vertical.
- O hall (x 3,40–4,50, 1,10 m) não tem parede no norte: abre para o corredor (y 7,15–10,32). A janela alta da parede B (y 7,20–10,37) ilumina esse corredor. A luz do quarto é emprestada e indireta, atravessando o hall estreito.
- Porta do hall: vão y **13,20–14,00** (0,80 m), x = 3,40, abrindo para oeste, para dentro do quarto, junto da parede C (da folha ao fundo sobram 0,20 m). No desenho, a dobradiça está em (3,40; 13,20); a folha aberta fica sobre y = 13,20 até x = 2,60. O giro é o quarto de círculo de raio 0,80 m a sul dessa dobradiça (x 2,60–3,40, y 13,20–14,00).
- Porta do closet: vão x **1,30–2,10** (0,80 m), y = 10,32, abrindo para o norte, para o closet. A folha não entra no quarto. Cada lado do vão tem 1,30 m de parede.
- Pilar (3,40; 10,32), 27 × 14 cm, lado maior no eixo y, centrado na quina norte-leste. Face oeste em x = 3,33; face sul em y = 10,455. Não alcança o bloco (y 11,20) nem o vão do closet (até x = 2,10).

## Referências

Não há planta publicada que reúna, de uma vez, dormitório de casal por volta de 3,4 × 3,9 m (~13 m²), encostado em duas paredes cegas (lateral e fundo), sem claraboia, sem janela de fachada, e com luz só por bloco de vidro voltado a um hall de 1,10 m. As cinco fontes cobrem as partes: o tamanho da cama, a folga lateral, o quarto pequeno e o bloco como luz com privacidade.

1. **Tamanhos no Brasil.** Solteiro 0,88 × 1,88 m; viúva 1,20 × 2,00 m; casal 1,38 × 1,88 m; queen 1,58 × 1,98 m; king 1,93 × 2,03 m. A lista do artigo escreve esses números com a unidade “cm”; 1,38 cm não é cama — são as medidas de mercado em metros. O casal é descrito como a cama de duas pessoas mais compacta e a melhor escolha em apartamento pequeno para ainda deixar circulação. A queen pede que se meça o quarto para não atrapalhar a circulação. O king “necessita de mais espaço”. Não há folga lateral em centímetros.  
   https://tuacasa.uol.com.br/tamanhos-de-cama/

2. **Quarto de casal pequeno.** A matéria pede medir o cômodo antes de encaixar os móveis, ficar no essencial e não acumular peça que atrapalhe a circulação. Não traz planta de 13 m², nem parede cega, nem bloco de vidro.  
   https://tuacasa.uol.com.br/quarto-de-casal-pequeno/

3. **Folga lateral de cama dupla.** Quarto duplo precisa caber uma cama de casal (ou duas de solteiro), criado-mudo, cômoda e roupeiro com no mínimo 550 mm de profundidade e 600 mm de comprimento por pessoa. Para fazer a cama, uma dupla de 1500 mm de largura pede **700 mm de acesso de cada lado**. Solteiro de 900 mm: 350–400 mm em pelo menos um lado. O 700 mm vale para cama de 1,50 m, um pouco mais larga que o casal brasileiro (1,38 m) e perto da queen (1,58 m).  
   https://www.designingbuildings.co.uk/wiki/Bedroom

4. **Bloco de vidro no quarto.** O tijolo de vidro aumenta a claridade sem abrir mão da privacidade. Peça vazada também passa ar; peça fechada, não. O arquiteto Mateus Persin (Dezoito Arquitetura) indica o material para dividir ambientes — o texto cita separar quarto e closet — e adverte que muito vidro na parede em que a cama encosta pode atrapalhar o descanso. Não descreve hall de 1,10 m nem quarto sem janela.  
   https://tuacasa.uol.com.br/tijolo-de-vidro/

5. **Luz controlada e privacidade.** Blocos translúcidos formam superfície contínua que admite bastante luz natural e dilui a vista, útil onde a privacidade pesa mais do que numa sala. É o mecanismo do painel para o hall, não um quarto de 13 m² com duas fachadas cegas.  
   https://www.archdaily.com.br/pt/958186/tijolos-de-vidro-em-casas-argentinas-iluminacao-natural-e-privacidade-com-blocos-translucidos

Leitura de apoio, sem ser modelo de planta: janela de quarto entra como luz, ar e regulação do sono ([Janelas para quarto](https://tuacasa.uol.com.br/janelas-para-quarto/)). Neste cômodo isso não se resolve abrindo a parede A nem a C. O bloco substitui a luz, de forma indireta; não é janela de fachada.

## Proposta

### O que a cama atual faz

| Peça atual | x | y | L × P | Ocupa | Contra o quê |
|------------|---|---|-------|-------|----------------|
| Cama | 0,90 | 10,35 | 1,60 × 1,50 | x 0,90–2,50; y 10,35–11,85 | 0,03 m da parede norte |
| Guarda-roupa | 0,10 | 12,40 | 0,55 × 1,60 | x 0,10–0,65; y 12,40–14,00 | Parede A, 0,20 m antes da parede C |
| Criado-mudo | 2,60 | 10,60 | 0,45 × 0,45 | x 2,60–3,05; y 10,60–11,05 | Norte, fora do bloco |

A cama **bloqueia a parede norte**. O retângulo começa 3 cm ao sul de y = 10,32 e cobre x 0,90–2,50, isto é, o vão inteiro do closet (x 1,30–2,10). A folha abre para o closet, então não bate na cama; mesmo assim não há passagem: sobram 3 cm. Nenhum flanco da porta tem cama de casal: 1,30 m de cada lado, e o colchão de casal tem 1,38 m de largura.

O bloco **não fica atrás dessa cama**. Ele está na parede leste (x = 3,40), y 11,20–12,80. A cama termina em x = 2,50, a 0,90 m do vidro. Em y, só 0,65 m do painel (11,20–11,85) fica ao lado dela; os outros 0,95 m (11,85–12,80) estão ao sul, livres. O criado termina em y = 11,05, 0,15 m antes do bloco.

1,50 m de profundidade não é comprimento de casal (1,88 m) nem de queen (1,98 m). 1,60 m de largura chega perto da queen (1,58 m), mas o retângulo está deitado na parede errada e curto no comprimento.

A porta do hall, em y 13,20–14,00, não é atingida por essa cama (ela acaba em y = 11,85). O problema da peça atual é a porta do closet e a medida, não o giro do hall.

### Cabeceira

A cabeceira não cabe na parede norte: a porta do closet está no meio e cada lado tem 1,30 m. Não cabe na parede leste: o bloco ocupa y 11,20–12,80 e a porta do hall ocupa y 13,20–14,00; entre os dois sobram 0,40 m. Pôr a cabeceira no vidro ainda contraria a advertência de luz demais na parede da cama.

A cabeceira fica na **parede A** (cega), com o comprimento do colchão no eixo x. Assim os dois lados longos da cama — norte, para o closet, e sul, para a porta do hall — ficam com mais de 0,70 m, e o vidro permanece na zona dos pés.

Cabeceira na parede C também livra o closet e o bloco, mas o lado oeste fica no mínimo da referência. Com 0,70 m a oeste de um casal de 1,38 m, a face leste cai em x = 2,08. A folha aberta chega a x = 2,60, e nesse trecho da cabeceira sobram 0,52 m com a porta aberta. Por isso a proposta não usa a parede C.

### Mobília

Colchão de casal, 1,38 × 1,88 m, sem somar espessura de cabeceira nem de parede — a planta não define isso. O retângulo é o módulo, como na camada atual.

| Peça | x | y | L × P | Até (x, y) | Parede |
|------|---|---|-------|------------|--------|
| Cama casal | 0,00 | 11,72 | 1,88 × 1,38 | 1,88 ; 13,10 | Cabeceira em x = 0. Comprimento no eixo x. |
| Criado norte | 0,10 | 11,17 | 0,45 × 0,45 | 0,55 ; 11,62 | Lado norte da cabeceira. 0,10 m até a cama. |
| Criado sul | 0,10 | 13,20 | 0,45 × 0,45 | 0,55 ; 13,65 | Lado sul da cabeceira. Fora do giro (giro só a partir de x = 2,60). |
| Roupeiro | 0,00 | 10,32 | 1,20 × 0,55 | 1,20 ; 10,87 | Parede norte, a oeste da porta do closet. Porta de correr. |

Circulação, com a folga de 0,70 m da cama de 1,50 m aplicada ao casal de 1,38 m (cama mais estreita, mesma folga):

- Norte da cama, até a parede do closet: **1,40 m** (y 10,32–11,72). O vão x 1,30–2,10 fica inteiro nesse piso, sem móvel na frente.
- Sul da cama, até a parede C: **1,10 m** (y 13,10–14,20). A face sul para 0,10 m antes da linha da dobradiça (y = 13,20).
- Pés, até a parede do hall: **1,52 m** (x 1,88–3,40). O bloco está nessa parede.
- Giro da porta do hall: quarto de círculo x 2,60–3,40, y 13,20–14,00. A cama acaba em x = 1,88. Folga de **0,72 m** entre o canto da cama e a ponta da folha.
- Roupeiro até a cama: 11,72 − 10,87 = **0,85 m**. Até o batente do closet (x = 1,30): **0,10 m**. Porta de correr para essa folha não cruzar os 0,85 m nem o vão.
- O criado sul ocupa só x 0,10–0,55. No resto do lado sul a passagem continua de 1,10 m. Ao lado do criado, até a parede C, ficam 0,55 m; não é o caminho da porta.

O bloco fica **livre, não atrás da cama**. A cabeceira está em x = 0. O painel y 11,20–12,80 encontra a cama só em y 11,72–12,80, e aí a distância é a dos pés, 1,52 m. Os 0,52 m de painel ao norte da cama (y 11,20–11,72) iluminam a ida ao closet. Nada encosta no vidro.

O pilar da quina norte-leste fica fora de todas as peças. O flanco leste da porta do closet (x 2,10–3,33) permanece vazio, para a passagem do hall até o vão não estreitar.

Queen (1,58 × 1,98 m) ainda respeita os 0,70 m dos dois lados se a face sul continuar em y = 13,10: o norte cai para 1,20 m e os pés para 1,42 m. Cabe, com menos folga. A fonte brasileira manda medir a queen justamente para não perder circulação; neste quarto o casal é o que sobra mais. King (1,93 × 2,03 m) deixa o norte em cerca de 0,95 m se o sul guardar 1,00 m para a porta, e os pés em 1,37 m. A mesma fonte diz que king pede mais espaço. Não entra na proposta.

O closet walk-in (6,70 m²) já é o guarda-roupa do casal. O roupeiro de 1,20 × 0,55 m cobre a profundidade mínima de 0,55 m e fica aquém dos 0,60 m por pessoa (1,20 m no total) só porque o vão corta a parede norte: 1,60 m, como a peça atual, não cabem num flanco de 1,30 m. O comprimento que falta fica no closet. Se o roupeiro do quarto sair, a cama e as portas não mudam.

## Manter e ajustar

**Manter**

- O retângulo 3,40 × 3,88 m, origem (0; 10,32), área 13,19 m².
- Paredes A e C cegas; sem claraboia; sem janela de fachada.
- Bloco de vidro em x = 3,40, y 11,20–12,80, como única luz, emprestada do hall e do corredor.
- Porta do hall em y 13,20–14,00, dobradiça em (3,40; 13,20), abrindo para oeste, com o giro livre.
- Porta do closet em x 1,30–2,10, abrindo para o norte, com o piso à frente do vão livre.
- Pilar (3,40; 10,32), 27 × 14 cm, lado maior em y.
- Função de roupa no quarto, em peça baixa e curta; o closet continua sendo o guarda-roupa principal.
- Criado-mudo de 0,45 × 0,45 m.

**Ajustar**

- Cama de (0,90; 10,35), 1,60 × 1,50 m, para **(0,00; 11,72), 1,88 × 1,38 m**, cabeceira na parede A. A peça atual tapa a porta do closet e não tem comprimento de casal.
- Guarda-roupa de (0,10; 12,40), 0,55 × 1,60 m, para **(0,00; 10,32), 1,20 × 0,55 m**, na parede norte, a oeste do vão, com porta de correr. No sudoeste ele cairia em cima da cama nova.
- Criado-mudo de (2,60; 10,60) para os dois lados da cabeceira: **(0,10; 11,17)** e **(0,10; 13,20)**. O segundo é peça nova; a camada atual tem um só.
- Não usar a parede norte como cabeceira e não encostar cama no bloco.

## Resumo ao coordenador

Quarto em (0; 10,32), 3,40 × 3,88 m, 13,19 m². Paredes A e C seguem cegas; sem claraboia e sem janela de fachada.
A luz é o bloco em x = 3,40, de y 11,20 a 12,80 (1,60 m ao longo da parede; não há peitoril na planta). O hall tem 1,10 m e abre ao norte para o corredor da janela alta na parede B. A luz é emprestada e indireta.
Porta do hall permanece em y 13,20–14,00, dobradiça em (3,40; 13,20), abrindo para oeste. A folha aberta chega a x = 2,60. O giro fica vazio.
Porta do closet permanece em x 1,30–2,10, y = 10,32, abrindo para o norte. Cada flanco tem 1,30 m, menos que a largura de um casal (1,38 m).
A cama atual (0,90; 10,35), 1,60 × 1,50 m, fica a 3 cm da parede norte e cobre o vão do closet. O bloco não está atrás dela: está na parede leste, a 0,90 m.
1,50 m não é comprimento de casal. Referência brasileira: casal 1,38 × 1,88 m, queen 1,58 × 1,98 m, king 1,93 × 2,03 m. Para cama dupla de 1,50 m, a folga de fazer a cama é 0,70 m de cada lado.
Cabeceira na parede A. Cama casal 1,88 × 1,38 m em (0,00; 11,72). Norte com 1,40 m até o closet; sul com 1,10 m até a parede C; pés com 1,52 m até o hall. Os dois lados passam de 0,70 m.
O bloco fica livre, ao lado dos pés e da ida ao closet, a 1,52 m da cama, não atrás da cabeceira. Cabeceira na parede C deixaria 0,52 m no leste com a porta do hall aberta.
Guarda-roupa sai de (0,10; 12,40) e vai para (0,00; 10,32), 1,20 × 0,55 m, a oeste da porta do closet, com porta de correr. O closet de 6,70 m² segue como roupa principal.
Criados de 0,45 × 0,45 m em (0,10; 11,17) e (0,10; 13,20). Queen ainda cabe, com o norte em 1,20 m e os pés em 1,42 m. King não é a proposta.
