# Closet — proposta de estruturação

Walk-in anexo ao dormitório de casal. Medidas em metros. Coordenadas do canto de menor x e menor y, como em `especificacoes.md` e `app.js`. Nada aqui altera código, especificações ou a planta.

## Resumo ao coordenador

1. O closet está em x = 0, y = 8,35, com 3,40 × 1,97 m e 6,70 m². A única porta fica em y = 10,32, vão x 1,30–2,10 (0,80 m), e abre para o norte, para dentro do closet.
2. A Parede A (x = 0) é cega. A divisória norte (y = 8,35) é cega com a despensa. Não há claraboia. O bloco de vidro para o corredor está na parede leste (x = 3,40), no trecho y 9,00–9,80 (0,80 m no desenho). O modelo não informa peitoril.
3. Os cabideiros atuais ocupam x 0,10–0,65 e x 2,75–3,30, ambos em y 8,50–10,20 (0,55 × 1,70). O corredor entre as faces mede 2,10 m.
4. A IKEA publica estrutura PAX com profundidade de 58,0 cm, estrutura rasa de 35,5 cm e roupeiro PAX/FORSAND com profundidade de 60 cm. Essas páginas não fixam corredor mínimo.
5. Vi i Villa e a Wikipedia descrevem o walk-in junto ao quarto, com espelho e boa luz, em geral sem portas nas prateleiras. Viva Decora e Decor Fácil reforçam o espelho no closet fechado e pequeno.
6. Não surgiu exemplo publicado de walk-in de cerca de 3,4 × 2,0 m, sem janela, com bloco de vidro para a circulação e porta de 0,80 m. O análogo de catálogo mais próximo é a linha de roupeiros abertos de 58 cm de profundidade, com combinações até 3,75 m de comprimento.
7. A circulação entre os dois módulos de 0,55 m cabe e deve ser mantida. Com 0,60 m de cada lado, encostados nas paredes, ainda restam 2,20 m livres.
8. O cabideiro leste contínuo fica na frente do bloco de vidro e não é compatível com a luz emprestada. O ajuste é interromper o móvel em y 9,00–9,80 e deixar cerca de 0,60 m livres a partir de x = 3,40.
9. Mantêm-se a porta, o cabideiro oeste e o corredor central. No leste ficam um módulo curto ao norte do bloco (y 8,45–8,95) e uma sapateira curta ao sul (y 9,85–10,15), fora do pilar do canto.
10. O espelho fica na parede norte, entre x ≈ 0,70 e 2,75, que é o fundo visto da porta. A iluminação é artificial. Esta proposta não cria pé-direito nem espessura de parede.

## Restrições

- Parede A (x = 0) cega, em todo o closet. Sem claraboia: a laje não é perfurável.
- Sem luz natural direta. Iluminação artificial e espelhos. Luz emprestada só pelo bloco de vidro para o corredor.
- Bloco de vidro em x = 3,40, y ≈ 9,00, com 0,80 m ao longo da parede. Em `app.js` o retângulo vai de y = 9,00 a y = 9,80. Isso é o comprimento do trecho em planta. Peitoril e altura de instalação não constam do modelo.
- Porta closet / dormitório de casal em y = 10,32, vão x 1,30–2,10. Abre para o norte (−1 no desenho), para dentro do closet. A folha, aberta a 90°, vai da dobradiça (x = 1,30) até y = 9,52. Não há outra porta ligando o closet ao quarto pela face sul.
- Norte: divisória cega com a despensa em y = 8,35, de x = 0 a x = 3,40.
- Leste: divisória com o corredor iluminado em x = 3,40.
- Sul: divisória com o dormitório de casal em y = 10,32.
- Envelope do cômodo: x 0–3,40, y 8,35–10,32. Área 3,40 × 1,97 = 6,698 m², registrada como 6,70 m².
- Pilar no canto sudeste, centro em (3,40 ; 10,32), orientação y, seção 27 × 14 cm (27 cm em y, 14 cm em x), desenhado centrado na grade. A parte que cai dentro do closet chega a cerca de x = 3,33 e y = 10,19. Não se adota espessura de parede além desse pilar já cotado.
- Mobília atual é camada indicativa, não especificação de obra.

## Referências

Nenhuma fonte encontrada descreve um quarto de vestir de 3,4 × 2,0 m, sem janela, com bloco de vidro para o corredor, porta de 0,80 m e dois cabideiros laterais ao mesmo tempo. O que se confirma é a profundidade usual do corpo de cabideiro e o programa do cômodo (anexo ao quarto, espelho, luz, prateleiras abertas).

1. **Estrutura PAX, profundidade 58,0 cm**  
   [PAX estrutura de roupeiro, branco, 100×58×236 cm](https://www.ikea.com/pt/pt/p/pax-estrutura-de-roupeiro-branco-80458207/)  
   Ficha de medidas: profundidade 58,0 cm; “estrutura, profundidade” 58 cm. É a linha de corpo usada para roupa pendurada no sistema PAX. A mesma família, na categoria de roupeiros abertos da IKEA Alemanha, aparece em combinações de 150, 175, 200, 250 e 375 cm de comprimento, todas com 58 cm de profundidade: [Begehbare Kleiderschränke](https://www.ikea.com/de/de/cat/begehbare-kleiderschraenke-43633/). O comprimento de 3,75 m é a peça de catálogo mais próxima de uma parede de 3,40 m; a profundidade continua sendo a do móvel (0,58 m), não a de um cômodo de 2 m. A página não informa corredor mínimo.

2. **Roupeiro PAX / FORSAND, profundidade 60 cm**  
   [PAX / FORSAND roupeiro, branco/branco, 250×60×201 cm](https://www.ikea.com/pt/pt/p/pax-forsand-roupeiro-branco-branco-s09502728/)  
   Ficha de medidas: profundidade 60 cm. Confirma o topo da faixa 0,55–0,60 m. Não informa corredor mínimo.

3. **Estrutura PAX rasa, profundidade 35,5 cm**  
   [PAX estrutura de roupeiro, branco, 100×35×236 cm](https://www.ikea.com/pt/pt/p/pax-estrutura-de-roupeiro-branco-70458199/)  
   Ficha de medidas: profundidade 35,5 cm. Serve de contraste: o cabideiro de 0,55 m do projeto está na faixa dos corpos de 58–60 cm, acima desta linha rasa. Não informa corredor mínimo.

4. **Programa do cômodo: quarto ao lado, espelho e luz**  
   [Garderoberom — Slik planlegger du det (Vi i Villa)](https://viivilla.no/interior/garderobe/garderoberom-slik-planlegger-du-det/)  
   O texto trata o walk-in como cômodo próprio, de preferência parede a parede com o quarto. Recomenda prateleiras sem portas, pelo menos um espelho (de preferência dois ou mais, para ver o traje de ângulos diferentes), boa iluminação sobre o espelho e sobre as roupas, e um banco ou cadeira. Não dá profundidade de cabideiro nem largura mínima de corredor.  
   [Walk-in closet (Wikipedia)](https://en.wikipedia.org/wiki/Walk-in_closet)  
   Define o cômodo como espaço em que se entra para ver e trocar de roupa, em geral com cabides, prateleiras e gavetas sem portas, espelho quando cabe a troca de roupa, e boa iluminação. Também sem medidas de corredor.

5. **Espelho no fundo do closet fechado e pequeno**  
   [Closet (Viva Decora)](https://casaeconstrucao.vivadecora.com.br/closet/)  
   Em ambiente fechado, o espelho amplia a sensação de espaço e serve para se vestir. Cabideiro para o que não deve ser dobrado. Porta ou cortina de vidro aparece como recurso de closet aberto, o que não é o bloco de vidro deste projeto. Sem cotas de 0,55–0,60 m nem de corredor.  
   [Closet (Decor Fácil)](https://www.decorfacil.com/closet/)  
   As legendas das referências visuais dizem que espelho ao fundo dá profundidade ao closet e que espelhos ampliam closets pequenos. Há um exemplo descrito como closet em formato de corredor. Sem número de corredor mínimo.

**Profundidade usual registrada:** 0,58 m (estrutura PAX) e 0,60 m (PAX/FORSAND). O 0,55 m desenhado fica no limite inferior dessa faixa. A linha de 0,355 m é outro produto, mais raso.

**Corredor mínimo:** as cinco fontes acima não declaram largura mínima de corredor entre cabideiros. A circulação abaixo é a que a planta deste closet produz, não um mínimo copiado de norma.

## Leitura do desenho atual

| Peça | Canto (x ; y) | Δx × Δy | Ocupação |
|------|----------------|---------|----------|
| Cabideiro oeste | 0,10 ; 8,50 | 0,55 × 1,70 | x 0,10–0,65 · y 8,50–10,20 |
| Cabideiro leste | 2,75 ; 8,50 | 0,55 × 1,70 | x 2,75–3,30 · y 8,50–10,20 |

- Recuo do módulo oeste à Parede A: 0,10 m. Recuo do módulo leste à parede do corredor: 0,10 m (o fundo do móvel fica em x = 3,30). São recuos da mobília em relação à linha desenhada, não espessura de parede.
- Folga ao norte: 8,50 − 8,35 = 0,15 m. Folga ao sul: 10,32 − 10,20 = 0,12 m.
- Corredor entre faces: 2,75 − 0,65 = **2,10 m**.
- Se os dois corpos passarem a 0,60 m e encostarem nas paredes (x 0–0,60 e x 2,80–3,40), o vão livre fica 3,40 − 1,20 = **2,20 m**.
- A porta está centrada: meio do vão em x = 1,70, meio do cômodo em x = 1,70. O vão x 1,30–2,10 cai inteiro no corredor. Da face oeste (x = 0,65) à dobradiça (x = 1,30) há 0,65 m. Do batente leste (x = 2,10) à face do módulo leste (x = 2,75) há 0,65 m. O arco da folha não cruza os retângulos dos cabideiros.
- O módulo leste cobre y 8,50–10,20, e o bloco ocupa y 9,00–9,80. O móvel está a 0,10 m da parede que leva o bloco. Em planta, o cabideiro leste contínuo fica na frente do vidro.

## Proposta com medidas

Manter o esquema de dois lados e corredor central. A profundidade de 1,97 m é a direção em que se entra; os 0,55 m de cada cabideiro consomem a largura de 3,40 m, não essa profundidade. Por isso o corredor de 2,10 m existe e a porta de 0,80 m abre dentro dele.

### Porta (lado sul)

Manter o vão x 1,30–2,10 em y = 10,32, abertura para o norte. A folha aberta ocupa a linha x = 1,30, de y = 10,32 a y = 9,52. Não encosta no cabideiro oeste nem no módulo leste proposto.

### Cabideiro oeste — manter

| | |
|--|--|
| Canto | (0,10 ; 8,50) |
| Δx × Δy | 0,55 × 1,70 |
| Até | x = 0,65 · y = 10,20 |

Parede A cega, sem abertura. Comprimento útil de barra: 1,70 m.

### Parede leste e bloco de vidro — ajustar

Faixa sem móvel diante do bloco: **x 2,80–3,40** (0,60 m a partir da parede) e **y 9,00–9,80**. Assim o fundo de um corpo de 0,55–0,60 m não se apoia no vidro.

Módulo nordeste, cabide curto ou prateleira, parado antes do bloco:

| | |
|--|--|
| Canto | (2,85 ; 8,45) |
| Δx × Δy | 0,55 × 0,50 |
| Até | x = 3,40 · y = 8,95 |

Ficam 0,05 m entre o módulo (y = 8,95) e o início do bloco (y = 9,00).

Sapateira sudeste, curta, fora do pilar:

| | |
|--|--|
| Canto | (2,85 ; 9,85) |
| Δx × Δy | 0,45 × 0,30 |
| Até | x = 3,30 · y = 10,15 |

O pilar centrado em (3,40 ; 10,32) entra no cômodo até cerca de x = 3,33 e y = 10,19. A sapateira para em x = 3,30 e y = 10,15. O trecho de parede ao sul do bloco (y 9,80–10,32 = 0,52 m) não comporta outro cabideiro de 1,70 m.

Corredor resultante:

- Diante do módulo nordeste e da sapateira, face em x = 2,85: vão livre 2,85 − 0,65 = **2,20 m**.
- Diante do bloco, sem móvel até x = 3,40: vão livre 3,40 − 0,65 = **2,75 m**.

A barra contínua de 1,70 m do leste deixa de existir. O comprimento de pendurar passa de 3,40 m (1,70 + 1,70) para cerca de 2,20 m (1,70 a oeste + 0,50 a nordeste). A sapateira não entra nessa conta. O ganho é a luz emprestada; a perda é barra no lado do vidro. Um corpo de 0,55 m ao longo de toda a parede leste e o bloco de vidro no meio dessa parede não cabem juntos: a parede leste do closet só tem 1,97 m, e o bloco ocupa 0,80 m no meio.

### Espelhos

- Principal: parede norte (y = 8,35), no trecho livre entre o cabideiro oeste e o módulo nordeste, cerca de **x 0,70–2,75**. É o fundo visto ao entrar pela porta, no sentido das referências de espelho ao fundo do closet pequeno. Sem cota vertical: o pé-direito não está no modelo.
- Segundo: na face interna da folha da porta, que abre para o closet. Com a porta fechada, o espelho volta-se para o cômodo.

Não há parede livre a oeste nem a leste para um espelho de corpo: a oeste está o cabideiro; a leste, o bloco e os módulos curtos.

### Luz

Artificial, sobre o corredor e voltada às roupas e ao espelho norte. O bloco em y 9,00–9,80 só empresta luz do corredor se essa faixa permanecer sem móvel, como acima. Sem claraboia e sem abertura na Parede A.

### O que não se propõe

Barra corrida na parede norte, de 0,55–0,60 m de profundidade, comeria a dimensão curta do cômodo (1,97 m). Com a face do móvel em y ≈ 8,90, restam 1,42 m até a parede da porta. Com a folha aberta até y = 9,52, a faixa entre a folha e essa face fica em cerca de 0,62 m. Dá para guardar roupa com a porta fechada; aperta para usar a barra norte com a porta aberta. Por isso a barra norte não entra na proposta. Também não se desenha banco: o corredor comporta, mas o pedido é estruturar cabideiros, porta, espelho, bloco e circulação.

## Manter vs ajustar

| Item | Decisão | Medida |
|------|---------|--------|
| Porta y = 10,32, vão x 1,30–2,10, abertura para o norte | Manter | 0,80 m; folha até y = 9,52 |
| Parede A cega, sem claraboia | Manter | x = 0 |
| Divisória norte cega com a despensa | Manter | y = 8,35 |
| Bloco de vidro na leste | Manter a posição | y 9,00–9,80 em x = 3,40 |
| Cabideiro oeste 0,55 × 1,70 | Manter | (0,10 ; 8,50) |
| Profundidade 0,55 m | Manter | Dentro da faixa; 0,58–0,60 m também deixam corredor acima de 2,00 m |
| Corredor entre os dois lados | Manter | 2,10 m hoje; 2,20 m diante dos módulos leste propostos |
| Cabideiro leste contínuo y 8,50–10,20 | Ajustar | Interromper; ele cobre o bloco |
| Faixa diante do bloco | Incluir livre | x 2,80–3,40 · y 9,00–9,80 |
| Módulo nordeste | Incluir | (2,85 ; 8,45), 0,55 × 0,50 |
| Sapateira sudeste | Incluir | (2,85 ; 9,85), 0,45 × 0,30, fora do pilar |
| Espelho na parede norte | Incluir | x ≈ 0,70–2,75 em y = 8,35 |
| Espelho na folha da porta | Incluir | Sem alterar o vão |
| Luz artificial | Incluir | Sem cota de teto |
| Barra na parede norte | Não adotar | Apertaria os 1,97 m e a folha aberta |
| Pé-direito e espessura de parede | Fora desta proposta | Não constam do modelo |
