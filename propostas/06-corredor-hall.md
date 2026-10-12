# Corredor iluminado e hall de dormitórios

Proposta de estruturação dos dois espaços de circulação, lidos juntos. Medidas conferidas em `especificacoes.md` e em `app.js` (ambientes, divisórias, portas, `B_JANELA`, blocos de vidro, clerestório e pilares). Não altera código, especificações nem planta.

---

## Restrições

- Laje inteira: sem claraboia. Parede A e parede C cegas. A luz natural deste trecho entra pela parede B e, dali, por empréstimo.
- Cozinha, sala e corredor seguem sem divisória entre si. Em y = 7,15, entre x = 3,40 e x = 7,45, não há parede.
- Janela alta na parede B: y 7,20–10,37, comprimento 3,17 m, peitoril 1,40 m, topo 2,55 m. Ventila o corredor e entra como apoio do banheiro social. O banheiro social tem a própria báscula para a lavanderia; o apoio desta janela é o ar que atravessa sala e cozinha, ambas abertas.
- Trecho cego da parede B: y 10,37–14,20. Nessa faixa de y o hall existe, mas não encosta na parede B. Quem encosta na parede B é o quarto da criança (x 4,50–7,45).
- Blocos de vidro na parede x = 3,40, no desenho em planta: despensa a partir de y ≈ 7,50, comprimento 0,80 m ao longo de y; closet a partir de y ≈ 9,00, comprimento 0,80 m; dormitório casal/hall a partir de y ≈ 11,20, comprimento 1,60 m. Esses 0,80 m e 1,60 m são o tamanho do painel no plano. A cota vertical do bloco (peitoril) não está dada.
- Clerestório do quarto da criança em y = 10,32, x 5,00–7,00 (2,00 m), voltado ao corredor.
- Pilares em (3,40; 7,15), (7,45; 7,15), (3,40; 10,32) e (7,45; 10,32), seção 27 × 14 cm, lado maior no eixo y. No desenho, o pilar está centrado no ponto da grade.
- Porta do quarto da criança em y = 10,32, vão x 5,20–6,00 (0,80 m), abre para o sul, para dentro do quarto.
- Porta do casal em x = 3,40, vão y 13,20–14,00 (0,80 m), abre para o oeste, para dentro do quarto.
- Pé-direito geral não está especificado. As únicas alturas usadas abaixo são as já dadas: peitoril 1,40 m, topo da janela 2,55 m, e o vidro da divisória sala/varanda até 2,55 m.

**Dois retângulos**

| Espaço | Origem (x; y) | L × P | Área |
|---|---|---|---|
| Corredor iluminado | 3,40; 7,15 | 4,05 × 3,17 m | 12,84 m² |
| Hall de dormitórios | 3,40; 10,32 | 1,10 × 3,88 m | 4,27 m² |

O hall é a faixa entre x = 3,40 e o quarto da criança (x = 4,50). A boca norte do hall, x 3,40–4,50 em y = 10,32, não tem folha no modelo.

---

## Referências

Cinco fontes. Nenhuma reúne, num só exemplo, peitoril de 1,40 m, bloco de vidro interno, hall de 1,10 m e laje fechada. Cada uma cobre uma parte do problema. A casa deste projeto é desenhada no sistema brasileiro; o decreto português entra só como comparação do número 1,10 m.

### 1. Largura de corredor na NBR 9050:2020

- Síntese publicada: [Área de circulação e manobra — Canal Consultoria](https://www.canalconsultoria.com/area-de-circulacao-e-manobra/)
- Edição identificada pela capa do PDF público da Prefeitura de São Paulo (ABNT NBR 9050:2020, 03.08.2020, 147 páginas, título *Accessibility to buildings, equipment and the urban environment*): [NBR9050_20.pdf](https://prefeitura.sp.gov.br/cidade/secretarias/upload/NBR9050_20.pdf)

A síntese atribui à NBR 9050 estas larguras livres de corredor:

- 0,90 m em corredor de uso comum com extensão até 4,00 m;
- 1,20 m em corredor de uso comum com extensão até 10,00 m;
- 1,50 m quando a extensão passa de 10,00 m;
- 1,50 m em corredor de uso público.

Para cadeira de rodas, a mesma página registra 0,90 m em deslocamento reto de uma pessoa; 1,20 m a 1,50 m quando um pedestre cruza com a cadeira; rotação de 90° em 1,20 × 1,20 m; rotação de 180° em 1,50 × 1,20 m; rotação de 360° num círculo de 1,50 m de diâmetro.

O corpo do PDF está em fonte que não devolveu o item numerado nesta leitura. Os números acima são os da síntese, não uma transcrição do item. A NBR 9050 vale para rota acessível. Casa unifamiliar particular nem sempre é obrigada a essa rota. O código de obras do município não está no projeto.

### 2. Mínimo de 1,1 m dentro da habitação (Portugal)

- Texto da secção 3.3.2: [DL n.º 163/2006 no PGDL](https://pgdlisboa.pt/leis/lei_mostra_articulado.php?nid=3110&tabela=leis&ficha=1&artigo_id=3110X0001)
- Diploma: [Decreto-Lei n.º 163/2006 — Diário da República](https://diariodarepublica.pt/dr/detalhe/decreto-lei/163-2006-538624)
- Leitura de projeto, com o mesmo número: [Corredores em habitação — AC Arquitetos](https://www.ac-arquitetos.com/post/corredores-em-habitacao-larguras-minimas-para-uma-circulacao-confortavel-e-segura)

Secção 3.3.2, edifícios de habitação: os corredores e os outros espaços de circulação horizontal das habitações têm largura não inferior a 1,1 m. Pode haver troço com largura não inferior a 0,9 m se a extensão não passar de 1,5 m e se esse troço não der acesso lateral a portas de compartimentos.

Esse decreto é português. Serve aqui porque o hall tem exatamente 1,10 m e porque a exceção de 0,9 m exige trecho curto e sem porta lateral. O hall tem 3,88 m e porta lateral do casal, então ficaria de fora dessa exceção mesmo nesse diploma.

### 3. Janela alta e clerestório, com a parede de baixo livre

- [What Are Clerestory Windows and Their Spatial Advantages in 24 Projects — ArchDaily, 16 ago 2023](https://www.archdaily.com/1005402/what-are-clerestory-windows-and-their-spatial-advantages-in-24-projects)
- [Eight home interiors brightened by clerestory windows — Dezeen, 13 jul 2024](https://www.dezeen.com/2024/07/13/clerestory-windows-interiors-lookbooks/)

O ArchDaily define o clerestório como faixa de janela acima da linha dos olhos: entra luz, a visão de fora diminui, e a ventilação alta entra no repertório da casa contemporânea. O Dezeen registra o mesmo em interiores residenciais, com folha operável para ventilar e com uso em casa estreita, onde a faixa alta segura a privacidade do térreo.

A janela da parede B deste projeto tem peitoril a 1,40 m, abaixo da linha dos olhos de uma pessoa em pé (cerca de 1,50–1,60 m). É janela alta com parede cheia embaixo, e ainda permite olhar para fora em pé. O clerestório do quarto da criança é que corresponde à faixa alta da referência: está na divisória, acima da zona da porta, e a cota vertical dele não foi dada.

### 4. Bloco de vidro: luz, privacidade e módulo de 190 mm

- [Micro Casa de Bloco de Vidro / ROOM+ Design & Build — ArchDaily em português](https://www.archdaily.com.br/br/936646/micro-casa-de-bloco-do-vidro-room-plus-design-and-build)
- Texto dos autores, com o módulo: [Glass-block Micro House — ArchDaily](https://www.archdaily.com/936020/glass-block-micro-house-room-plus-design-and-build)

Casa urbana de 2019, muito escura antes da obra, em terreno de 18 m², com dois quartos. Os autores trocam duas fachadas de tijolo por bloco de vidro translúcido e janelas integradas. O texto atribui luz e ventilação a essas fachadas, com privacidade. O módulo citado é 190 × 190 mm. Circulação, escada e banheiros ficam a oeste, fora do volume principal iluminado. No quarto, banheiro e guarda-roupa ficam atrás de divisórias de vidro. Há pérgola no topo, descrita como segunda pele da fachada (plantas, privacidade, calor). O texto não usa claraboia como fonte de luz.

Diferença em relação a esta planta: lá o bloco é fachada. Aqui o bloco é painel interno, e a fonte é a janela alta do corredor.

### 5. Bloco de vidro como divisória que empresta luz

- [Alvenaria de blocos de vidro alia iluminação natural e privacidade — AECweb, 2016](https://www.aecweb.com.br/revista/materias/alvenaria-de-blocos-de-vidro-alia-iluminacao-natural-e-privacidade/14717)

O artigo trata o bloco como vedação sem função estrutural, útil quando se quer luz sem transparência total — o exemplo citado é um núcleo fechado dentro de casa. Aponta a NBR 14899-1/2002 para o produto. Para pano contínuo, registra limites de referência: área até 15 m², comprimento até 7,5 m, altura até 6 m. Os três painéis desta planta ficam muito abaixo desses limites e não substituem os pilares.

Quatro módulos de 190 mm mais juntas de cerca de 10 mm somam cerca de 0,79 m. Oito módulos somam cerca de 1,59 m. Os comprimentos já desenhados, 0,80 m e 1,60 m, cabem nesse módulo. A proposta mantém 0,80 m e 1,60 m.

---

## Proposta

O corredor de 4,05 m de largura é uma sala de passagem integrada à sala de estar. O hall de 1,10 m é a continuação estreita do lado oeste. A linha x = 4,50, que só vira parede a partir de y = 10,32, organiza os dois.

### Eixo de circulação

Duas faixas, no mesmo x do que vem depois:

| Faixa | x | Largura | Papel |
|---|---|---|---|
| Oeste, passagem | 3,40–4,50 | 1,10 m | Eixo x = 3,95 m. Segue reto da sala para o hall e para a porta do casal. Sem móvel. |
| Leste, luz | 4,50–7,45 | 2,95 m | Alinha com o quarto da criança. Recebe a janela alta, a porta da criança (centro em x = 5,60) e o clerestório. |

Em y = 7,15 a passagem sala–corredor tem a largura toda, 4,05 m. Os pilares dos extremos, centrados em x = 3,40 e x = 7,45, avançam 7 cm cada um para dentro. O vão livre entre as faces fica em cerca de 3,91 m (de x = 3,47 a x = 7,38).

A faixa oeste permanece desimpedida em todo o y do corredor (7,15–10,32) e em todo o hall (10,32–14,20). Quem vai ao casal não precisa atravessar a faixa da janela. Quem vai à criança atravessa a faixa leste e entra pelo vão x 5,20–6,00.

### O que pode encostar na janela alta

A parede B do corredor, de y = 7,15 a y = 10,32, é quase toda a janela. O vidro útil dentro do corredor vai de y = 7,20 a y = 10,32 (3,12 m). Os 5 cm finais da janela, y 10,32–10,37, caem na parede B do quarto da criança, já na linha da divisória. O hall não ganha janela com esses 5 cm.

Alturas já dadas, de baixo para cima:

- De 0 a 1,40 m: parede cheia. Cabe peça baixa (banco ou aparador), com o topo abaixo do peitoril de 1,40 m e profundidade de cerca de 0,40 m. Fica na faixa leste, encostada na parede B, entre y ≈ 7,35 e y ≈ 10,10 (cerca de 2,75 m). O início fica ao sul do pilar (7,45; 7,15), cuja face sul está em y ≈ 7,29. O fim fica ao norte do pilar (7,45; 10,32), cuja face norte está em y ≈ 10,19. Uma peça de 0,40 m ocupa até x ≈ 7,05, longe do vão da porta da criança (que termina em x = 6,00).
- De 1,40 m a 2,55 m: vidro, 1,15 m de altura de abertura. Essa faixa fica livre, para a luz chegar à faixa oeste e ao clerestório, e para a folha ventilar. O ar de apoio ao banheiro social sai por aqui, atravessa o corredor aberto, a sala e a cozinha, e chega à porta do banheiro em y = 2,50. Por isso y = 7,15, entre x = 3,40 e x = 7,45, continua sem parede.
- Acima de 2,55 m: sem pé-direito dado, sem proposta de sanca, prateleira ou fechamento.

A peça baixa não entra na faixa oeste e não entra na área de aproximação da porta da criança (em planta, cerca de x 5,00–6,20 e y 9,40–10,32).

### Blocos de vidro e clerestório

Os três blocos assentam no plano da parede x = 3,40, sem ressalto para o corredor nem para o hall. Ressalto comeria a largura de 1,10 m.

| Painel | y do painel | Comprimento | O que fica em volta |
|---|---|---|---|
| Despensa | 7,50–8,30 | 0,80 m | Dentro da parede leste da despensa (y 7,15–8,35). A 0,35 m da divisória norte e a 0,05 m da divisória sul. A prateleira indicativa está na parede norte, fora desse pano. O pilar (3,40; 7,15) termina em y ≈ 7,29; o painel começa em 7,50. |
| Closet | 9,00–9,80 | 0,80 m | No meio da parede leste do closet (y 8,35–10,32). |
| Casal / hall | 11,20–12,80 | 1,60 m | Na parede do hall. Do pilar (face sul y ≈ 10,46) até o vidro há cerca de 0,74 m de parede. Do fim do vidro (12,80) até a porta (13,20) há 0,40 m. |

O bloco do casal empresta ao quarto a luz que já chegou ao hall. A fonte continua sendo a janela alta, através da boca de 1,10 m. O bloco não é uma segunda janela de fachada.

O cabideiro indicativo do closet em x = 2,75, y 8,50–10,20, profundidade 0,55 m, chega a x = 3,30 e cobre o painel y 9,00–9,80 pelo lado do closet. O desenho de mobília é só indicativo. O painel fica livre dos dois lados: no corredor, a faixa oeste não recebe móvel; no closet, o cabideiro leste interrompe-se diante do vidro.

Clerestório: linha y = 10,32, de x = 5,00 a x = 7,00. A porta da criança ocupa x 5,20–6,00 nessa mesma parede. O clerestório cobre a porta, avança 0,20 m para oeste do vão e 1,00 m para leste, e para 0,45 m antes da parede B. A face interna do pilar (7,45; 10,32) está em x ≈ 7,38, a 0,38 m do fim do clerestório.

A cota vertical do clerestório não está dada. Ele fica na faixa alta da divisória, acima da verga da porta, para levar ao quarto a luz da janela cujo topo já está em 2,55 m. O alinhamento desse topo com os 2,55 m da janela B (e com o vidro sala/varanda, também até 2,55 m) só se fecha quando houver pé-direito. Até lá, o comprimento em planta permanece 2,00 m.

### Passagem sala → corredor → hall → quartos

1. **Sala → corredor.** Sala em x 3,40–7,45, y 4,00–7,15. Travessia em y = 7,15, largura livre cerca de 3,91 m entre pilares. Sem porta.
2. **Corredor, faixa oeste.** De y = 7,15 a y = 10,32, em x 3,40–4,50, eixo x = 3,95. Passa ao lado dos blocos da despensa e do closet, sem encostar móvel neles.
3. **Corredor, faixa leste, quarto da criança.** Aproximação até o vão x 5,20–6,00. A folha abre para o sul, para dentro do quarto, e o corredor fica livre do giro. O clerestório está nessa parede.
4. **Corredor → hall.** Boca x 3,40–4,50 em y = 10,32, sem folha. É a única boca de luz e de ar do hall. O pilar (3,40; 10,32) reduz essa boca a cerca de 1,03 m nos cerca de 14 cm em que metade da seção de 27 cm entra no hall (face leste do pilar em x = 3,47). Daí até a parede C, a largura nominal volta a 1,10 m.
5. **Hall → quarto do casal.** Percurso de 3,88 m para o sul, eixo x = 3,95. A porta está na parede oeste, y 13,20–14,00, a 0,20 m da parede C (y = 14,20). A folha abre para oeste, para dentro do quarto.

Cadeia de luz, da fonte ao quarto cego:

janela alta (faixa leste) → boca de 1,10 m → hall → bloco y 11,20–12,80 → dormitório casal.

O quarto da criança recebe caminho mais curto: janela alta, 2,95 m de faixa leste, clerestório de 2,00 m.

### O aperto do hall de 1,10 m

O hall tem 1,10 m entre as linhas x = 3,40 e x = 4,50, e 3,88 m de comprimento. A planta não inclui espessura de parede. O 1,10 m é a distância entre linhas. A largura livre depois do revestimento é o que a circulação usa.

Conta do aperto, com a porta como está:

- Folha de 0,80 m abre para o quarto. O hall inteiro permanece com a largura da faixa.
- Se a folha abrisse para o hall, 0,80 m dentro de 1,10 m deixariam 0,30 m de passagem.
- Diante da porta, o espaço perpendicular ao vão é os próprios 1,10 m. Para uma pessoa a pé, com a folha no quarto, o percurso fecha.
- O bloco termina 0,40 m antes da porta e não invade o vão.
- O pilar do fundo não está na porta; o estreitamento de 1,03 m dura cerca de 14 cm na boca.

Leitura pelas duas fontes de largura:

- Pela síntese da NBR 9050, corredor de uso comum até 4,00 m pode ter 0,90 m. O hall tem 3,88 m e 1,10 m nominais, e o aperto do pilar fica em cerca de 1,03 m. Isso cobre o mínimo de 0,90 m do corredor curto. Não cobre 1,20 m, nem o quadrado de 1,20 × 1,20 m da rotação de 90°. Uma cadeira de rodas não gira nesse hall para entrar no quarto.
- Pelo DL 163/2006, secção 3.3.2, o mínimo interno da habitação é 1,1 m. O hall está nesse número. A folga para 0,9 m só vale em trecho de até 1,5 m e sem porta lateral. O hall tem 3,88 m e a porta do casal é lateral. O aperto do pilar (cerca de 1,03 m em cerca de 14 cm, longe da porta) ainda está acima de 0,9 m. O diploma é português e não substitui o código local.

O hall fica sem móvel, sem cabide saliente e sem segunda porta na boca. Alargar a faixa para 1,20 m empurraria x = 4,50 para dentro do quarto da criança (hoje com 2,95 m). Isso fica fora desta proposta.

---

## Manter e ajustar

### Manter

- Integração sala–corredor: sem parede em y = 7,15 entre x = 3,40 e x = 7,45.
- Janela alta y 7,20–10,37, peitoril 1,40 m, topo 2,55 m, operável, com a faixa de 1,40 m a 2,55 m livre.
- Trecho cego da parede B em y 10,37–14,20, sem abrir janela nova para o hall. O hall não chega à parede B.
- Blocos nos y e nos comprimentos já desenhados: 7,50 / 0,80 m, 9,00 / 0,80 m, 11,20 / 1,60 m, no plano da parede x = 3,40.
- Clerestório x 5,00–7,00 em y = 10,32.
- Porta da criança para o sul; porta do casal para o oeste.
- Boca do hall sem folha, x 3,40–4,50.
- Pilares 27 × 14 cm com o lado maior em y.
- Largura nominal do hall em 1,10 m.
- Laje sem furo.

### Ajustar

- Tratar o corredor como duas faixas: passagem a oeste (x 3,40–4,50, eixo x = 3,95) e luz a leste (x 4,50–7,45). A peça baixa da janela fica só na faixa leste, topo abaixo de 1,40 m, profundidade cerca de 0,40 m, y ≈ 7,35–10,10.
- Deixar livre a aproximação da porta da criança, cerca de x 5,00–6,20 e y 9,40–10,32.
- No closet, afastar o cabideiro indicativo do painel y 9,00–9,80. A luz artificial do closet continua; o bloco é o empréstimo.
- Quando a espessura das paredes for definida, contar o 1,10 m como largura livre entre faces acabadas. Revestimento e rodapé para dentro das duas linhas derrubam o hall abaixo do 1,10 m e, se passarem de 10 cm no total, aproximam-no do piso de 0,90 m da NBR.
- Reservar o alargamento do hall (levar x = 4,50 para leste até sobrar 1,20 m livres) ao caso em que o quarto do casal precise de rota de cadeira de rodas, com o quadrado de 1,20 × 1,20 m. Enquanto isso, o 1,10 m permanece.
- A cota vertical dos blocos e o peitoril do clerestório esperam o pé-direito. O comprimento em planta desses vãos permanece o atual. O topo de referência já existente para a faixa alta é 2,55 m.

---

## Resumo ao coordenador

1. Corredor (4,05 × 3,17 m, 12,84 m²) e hall (1,10 × 3,88 m, 4,27 m²) são um percurso só: a faixa oeste de 1,10 m, eixo x = 3,95, sai da sala sem parede em y = 7,15, entra na boca aberta do hall e chega à porta do casal.
2. A faixa leste de 2,95 m (x 4,50–7,45) alinha com o quarto da criança, toma a janela alta e a porta em x 5,20–6,00, centro x = 5,60.
3. Sob o peitoril de 1,40 m cabe peça baixa, topo abaixo dessa cota, profundidade cerca de 0,40 m, y ≈ 7,35–10,10. De 1,40 m a 2,55 m o vidro fica livre, para luz e para o ar que segue pela planta aberta até o banheiro social.
4. Os blocos em x = 3,40 medem em planta 0,80 m (despensa, y 7,50–8,30), 0,80 m (closet, y 9,00–9,80) e 1,60 m (casal, y 11,20–12,80), no plano da parede. A altura vertical deles não está dada. O cabideiro indicativo do closet sai da frente do painel.
5. O clerestório fica em y = 10,32, x 5,00–7,00, na faixa alta da mesma parede da porta da criança. O hall não toca a parede B; o trecho cego y 10,37–14,20 é a fachada do quarto da criança.
6. A porta do casal (y 13,20–14,00) abre para oeste. Do bloco até a porta há 0,40 m. O pilar (3,40; 10,32) reduz a boca do hall a cerca de 1,03 m em cerca de 14 cm.
7. Pela síntese da NBR 9050:2020, corredor de uso comum até 4,00 m admite 0,90 m e, até 10,00 m, 1,20 m; o giro de 90° pede 1,20 × 1,20 m. O hall de 1,10 × 3,88 m cobre o mínimo curto e não cobre o quadrado de 1,20 m.
8. No DL 163/2006 português, secção 3.3.2, o corredor da habitação tem mínimo de 1,1 m; troço de 0,9 m só até 1,5 m e sem porta lateral. O hall está no 1,1 m, tem 3,88 m e tem porta lateral. Esse decreto não é o código local da casa.
9. Manter integração com a sala, janela alta, blocos, clerestório, porta do casal para oeste, porta da criança para sul, hall sem folha na boca e sem móvel.
10. Quando houver espessura de parede, preservar 1,10 m livres entre faces. Alargar o hall só se o quarto do casal exigir rota de cadeira de rodas.
