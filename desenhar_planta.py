# Traça a planta inteira a partir das coordenadas de app.js.
# O renderer não decide layout: só executa a lista de riscos (de–até, cor, espessura).
# Vista igual à do index com rotação e espelho: parede A em cima, frente à esquerda.

import math
import os

from PIL import Image, ImageDraw, ImageFont

S = 86  # px por metro
OX = 250  # margem esquerda (y = 0)
OY = 250  # margem superior (x = 0)
LARGURA = 7.45
PROFUNDIDADE = 14.20

FUNDO = (255, 255, 255)
AMBIENTE = (238, 241, 245)
EXTERNO = (250, 251, 252)
PAREDE = (43, 49, 64)
PORTA = (47, 109, 240)
ABERTO = (120, 128, 140)
COTA = (224, 72, 72)
TEXTO = (31, 36, 48)
MUDO = (107, 114, 128)

RISCOS = []


def linha(x1, y1, x2, y2, cor, espessura, tracejado=False):
    RISCOS.append(("linha", x1, y1, x2, y2, cor, espessura, tracejado))


def retangulo(x, y, w, h, cor):
    """Retângulo com canto (x, y) e tamanho w no eixo x, h no eixo y."""
    RISCOS.append(("ret", x, y, w, h, cor))


def coluna(x, y, orient):
    """Pilar 27×14 cm centrado no ponto. orient 'x' põe os 27 cm na largura."""
    lado_x = 0.27 if orient == "x" else 0.14
    lado_y = 0.14 if orient == "x" else 0.27
    RISCOS.append(("coluna", x, y, lado_x, lado_y))


def texto(x, y, conteudo, tamanho, cor, negrito=False):
    RISCOS.append(("texto", x, y, conteudo, tamanho, cor, negrito))


def arco(cx, cy, raio, angulo_ini, angulo_fim, cor, espessura):
    """Arco em radianos no plano da planta (0 = +x, sentido para +y)."""
    RISCOS.append(("arco", cx, cy, raio, angulo_ini, angulo_fim, cor, espessura))


def porta_horizontal(y, x0, w, abrir, cor_vao=AMBIENTE):
    """Parede em y constante. Dobradiça em (x0, y). abrir -1 norte, +1 sul."""
    linha(x0, y, x0 + w, y, cor_vao, 10)
    linha(x0, y, x0, y + abrir * w, PORTA, 2)
    fim = math.pi / 2 if abrir > 0 else -math.pi / 2
    arco(x0, y, w, 0, fim, PORTA, 2)


def porta_vertical(x, y0, w, abrir):
    """Parede em x constante. Dobradiça em (x, y0). abrir -1 oeste, +1 leste."""
    linha(x, y0, x, y0 + w, AMBIENTE, 10)
    linha(x, y0, x + abrir * w, y0, PORTA, 2)
    fim = 0 if abrir > 0 else math.pi
    arco(x, y0, w, math.pi / 2, fim, PORTA, 2)


def cota(x1, y1, x2, y2, legenda, cor=COTA):
    linha(x1, y1, x2, y2, cor, 2)
    mx, my = (x1 + x2) / 2, (y1 + y2) / 2
    if abs(x1 - x2) >= abs(y1 - y2):
        my -= 0.32
    else:
        mx -= 0.28
    texto(mx, my, legenda, 15, cor, negrito=True)


def area_m2(w, h):
    return f"{w * h:.2f}".replace(".", ",") + " m²"


def rotulo_comodo(x, y, w, h, linhas, tamanho, dy=0.0):
    """Empilha linhas no eixo x (vertical na tela) para não sobrepor."""
    cx, cy = x + w / 2, y + h / 2 + dy
    passo = (tamanho + 8) / S
    x0 = cx - (len(linhas) - 1) * passo / 2
    for i, (conteudo, cor, negrito) in enumerate(linhas):
        texto(x0 + i * passo, cy, conteudo, tamanho, cor, negrito)


def metros(valor):
    return f"{valor:.2f}".replace(".", ",") + " m"


def peca(x, y, w, h, nome):
    """Contorno de peça sanitária. Não é parede."""
    linha(x, y, x + w, y, MUDO, 2)
    linha(x + w, y, x + w, y + h, MUDO, 2)
    linha(x + w, y + h, x, y + h, MUDO, 2)
    linha(x, y + h, x, y, MUDO, 2)
    texto(x + w / 2, y + h / 2, nome, 10, MUDO)


def cota_fora(x1, x2, y, legenda):
    """Cota paralela ao eixo x, com o texto do lado de y maior (direita na tela)."""
    linha(x1, y, x2, y, COTA, 2)
    texto((x1 + x2) / 2, y + 0.38, legenda, 13, COTA, negrito=True)


def montar():
    # A frente é a linha da laje. A faixa y < 4 (área externa) não entra no desenho.
    y_laje = 4.00
    y_meio = 7.15
    hall_x = 4.50
    # Faixa da suíte: 1,80 de profundidade por 3,10 ao longo da parede A.
    # 1,80 cabe o box de 0,90 e mais 0,90 à frente; o comprimento leva vaso e pia.
    suite_p = 1.80
    suite_y1 = 10.25
    # Faixa social: 2,95 ao longo da sala por 1,90 de profundidade, fundo na parede B.
    social_y1 = 9.05
    quarto_casal = 3.40 * (PROFUNDIDADE - y_meio) - suite_p * (suite_y1 - y_meio)
    prof_crianca = PROFUNDIDADE - social_y1

    # Sob a laje. Banheiros em faixa: box, vaso e pia numa linha, porta fora dela.
    retangulo(0, y_laje, 3.40, y_meio - y_laje, AMBIENTE)
    retangulo(3.40, y_laje, 4.05, y_meio - y_laje, AMBIENTE)
    retangulo(0, y_meio, 3.40, PROFUNDIDADE - y_meio, AMBIENTE)
    retangulo(3.40, y_meio, hall_x - 3.40, social_y1 - y_meio, AMBIENTE)
    retangulo(hall_x, y_meio, LARGURA - hall_x, social_y1 - y_meio, AMBIENTE)
    retangulo(3.40, social_y1, hall_x - 3.40, prof_crianca, AMBIENTE)
    retangulo(hall_x, social_y1, LARGURA - hall_x, prof_crianca, AMBIENTE)

    rotulo_comodo(
        0,
        y_laje,
        3.40,
        y_meio - y_laje,
        [("Cozinha", TEXTO, True), (area_m2(3.40, 3.15), MUDO, False)],
        17,
    )
    rotulo_comodo(
        3.40,
        y_laje,
        4.05,
        y_meio - y_laje,
        [
            ("Sala", TEXTO, True),
            ("estar / jantar", TEXTO, True),
            (area_m2(4.05, 3.15), MUDO, False),
        ],
        15,
    )
    rotulo_comodo(
        0.90,
        7.70,
        0.70,
        1.10,
        [
            ("Banho suíte", TEXTO, True),
            (area_m2(suite_p, suite_y1 - y_meio), MUDO, False),
        ],
        11,
    )
    rotulo_comodo(
        0,
        suite_y1,
        3.40,
        PROFUNDIDADE - suite_y1,
        [
            ("Dormitório", TEXTO, True),
            ("casal", TEXTO, True),
            (f"{quarto_casal:.2f}".replace(".", ",") + " m²", MUDO, False),
        ],
        15,
    )
    rotulo_comodo(
        3.40,
        y_meio,
        hall_x - 3.40,
        social_y1 - y_meio,
        [
            ("Corredor", TEXTO, True),
            (area_m2(hall_x - 3.40, social_y1 - y_meio), MUDO, False),
        ],
        11,
    )
    rotulo_comodo(
        5.40,
        7.25,
        1.50,
        0.70,
        [
            ("Banho social", TEXTO, True),
            (area_m2(LARGURA - hall_x, social_y1 - y_meio), MUDO, False),
        ],
        12,
    )
    rotulo_comodo(
        3.40,
        social_y1,
        hall_x - 3.40,
        prof_crianca,
        [("Hall", TEXTO, True), (area_m2(hall_x - 3.40, prof_crianca), MUDO, False)],
        12,
    )
    rotulo_comodo(
        hall_x,
        social_y1,
        LARGURA - hall_x,
        prof_crianca,
        [
            ("Dormitório", TEXTO, True),
            ("criança", TEXTO, True),
            (area_m2(LARGURA - hall_x, prof_crianca), MUDO, False),
        ],
        15,
        dy=0.35,
    )

    # Perímetro. A parede A começa na frente (y = 4,00).
    linha(0, y_laje, 0, PROFUNDIDADE, PAREDE, 5)
    linha(0, PROFUNDIDADE, LARGURA, PROFUNDIDADE, PAREDE, 5)
    linha(LARGURA, y_laje, LARGURA, 7.20, ABERTO, 3, tracejado=True)
    linha(LARGURA, 7.20, LARGURA, 10.37, PAREDE, 5)
    linha(LARGURA, 10.37, LARGURA, PROFUNDIDADE, PAREDE, 5)

    # Cozinha / suíte, e sala / banho social. O corredor fica aberto.
    linha(0, y_meio, 3.40, y_meio, PAREDE, 3)
    linha(hall_x, y_meio, LARGURA, y_meio, PAREDE, 3)
    # Banho da suíte, faixa junto à parede A. Porta na face leste, para o quarto.
    linha(suite_p, y_meio, suite_p, 9.45, PAREDE, 3)
    linha(0, suite_y1, suite_p, suite_y1, PAREDE, 3)
    # Banho social, faixa junto à parede B. Porta na face oeste, para o corredor.
    linha(hall_x, y_meio, hall_x, 7.40, PAREDE, 3)
    linha(hall_x, 8.20, hall_x, social_y1, PAREDE, 3)
    linha(hall_x, social_y1, LARGURA, social_y1, PAREDE, 3)
    # Suíte / hall e hall / quarto da criança.
    linha(3.40, y_meio, 3.40, 11.50, PAREDE, 3)
    linha(3.40, 12.30, 3.40, PROFUNDIDADE, PAREDE, 3)
    linha(hall_x, social_y1, hall_x, 9.30, PAREDE, 3)
    linha(hall_x, 10.10, hall_x, PROFUNDIDADE, PAREDE, 3)

    porta_vertical(suite_p, 9.45, 0.80, 1)
    porta_vertical(hall_x, 7.40, 0.80, 1)
    porta_vertical(hall_x, 9.30, 0.80, 1)
    porta_vertical(3.40, 11.50, 0.80, -1)

    # Box no fundo, vaso no meio, pia perto da porta. A folha não cruza as peças.
    peca(0.08, 7.28, 0.90, 0.90, "box")
    peca(0.10, 8.40, 0.55, 0.70, "vaso")
    peca(0.10, 9.25, 0.45, 0.70, "pia")
    peca(6.50, 8.10, 0.90, 0.90, "box")
    peca(5.55, 8.35, 0.60, 0.65, "vaso")
    peca(4.65, 8.48, 0.70, 0.48, "pia")

    texto(0.85, 6.70, metros(suite_p), 11, COTA, negrito=True)
    texto(6.00, 6.70, metros(LARGURA - hall_x), 11, COTA, negrito=True)
    for x, y, orient in (
        (3.40, 4.00, "x"),
        (7.45, 4.00, "x"),
        (3.40, 7.15, "y"),
        (7.45, 7.15, "y"),
        (3.40, 10.32, "y"),
        (7.45, 10.32, "y"),
    ):
        coluna(x, y, orient)

    # Trechos ao longo da profundidade, a partir da frente.
    cota(-0.50, y_laje, -0.50, y_meio, metros(y_meio - y_laje))
    cota(-0.50, y_meio, -0.50, suite_y1, metros(suite_y1 - y_meio))
    cota(-0.50, suite_y1, -0.50, PROFUNDIDADE, metros(PROFUNDIDADE - suite_y1))
    # Larguras da parede A até a B, logo à frente da fachada.
    cota(0, y_laje - 0.90, 3.40, y_laje - 0.90, metros(3.40))
    cota(3.40, y_laje - 0.90, LARGURA, y_laje - 0.90, metros(4.05))
    # Parede C, já repartida pelos quartos.
    cota_fora(0, 3.40, 14.58, metros(3.40))
    cota_fora(3.40, hall_x, 14.58, metros(hall_x - 3.40))
    cota_fora(hall_x, LARGURA, 14.58, metros(LARGURA - hall_x))
    # Parede B, cada trecho.
    texto(LARGURA + 0.58, 5.60, metros(3.20), 13, ABERTO, negrito=True)
    texto(LARGURA + 0.58, 8.79, metros(3.17), 13, PAREDE, negrito=True)
    texto(LARGURA + 0.58, 12.29, metros(3.83), 13, PAREDE, negrito=True)
    texto(LARGURA / 2, y_laje - 1.70, metros(LARGURA), 16, TEXTO, negrito=True)
    texto(
        -2.05,
        6.2,
        "Planta da casa    ·    parede A em cima, frente à esquerda",
        15,
        TEXTO,
        negrito=True,
    )

def tela(x, y):
    # y = 4 é a frente; o que ficava antes disso não é desenhado.
    return OX + (y - 4.0) * S, OY + x * S


def fonte(tamanho, negrito):
    nome = "segoeuib.ttf" if negrito else "segoeui.ttf"
    caminho = os.path.join(os.environ.get("WINDIR", r"C:\Windows"), "Fonts", nome)
    return ImageFont.truetype(caminho, tamanho)


def desenhar_linha(draw, x1, y1, x2, y2, cor, espessura, tracejado):
    p1, p2 = tela(x1, y1), tela(x2, y2)
    if not tracejado:
        draw.line([p1, p2], fill=cor, width=espessura)
        return
    dist = math.hypot(p2[0] - p1[0], p2[1] - p1[1])
    if dist == 0:
        return
    ux, uy = (p2[0] - p1[0]) / dist, (p2[1] - p1[1]) / dist
    t = 0
    while t < dist:
        t2 = min(t + 9, dist)
        draw.line(
            [(p1[0] + ux * t, p1[1] + uy * t), (p1[0] + ux * t2, p1[1] + uy * t2)],
            fill=cor,
            width=espessura,
        )
        t += 15


def executar(caminho):
    largura_px = int(OX + (15.8 - 4.0) * S + 460)
    altura_px = int(OY + LARGURA * S + 220)
    imagem = Image.new("RGB", (largura_px, altura_px), FUNDO)
    draw = ImageDraw.Draw(imagem)

    for item in RISCOS:
        tipo = item[0]
        if tipo == "ret":
            _, x, y, w, h, cor = item
            x0, y0 = tela(x, y)
            x1, y1 = tela(x + w, y + h)
            draw.rectangle([x0, y0, x1, y1], fill=cor)
        elif tipo == "linha":
            _, x1, y1, x2, y2, cor, esp, tracejado = item
            desenhar_linha(draw, x1, y1, x2, y2, cor, esp, tracejado)
        elif tipo == "arco":
            _, cx, cy, raio, a0, a1, cor, esp = item
            passos = 18
            pontos = []
            for i in range(passos + 1):
                a = a0 + (a1 - a0) * i / passos
                pontos.append(tela(cx + raio * math.cos(a), cy + raio * math.sin(a)))
            draw.line(pontos, fill=cor, width=esp)
        elif tipo == "texto":
            _, x, y, conteudo, tamanho, cor, negrito = item
            if not conteudo:
                continue
            f = fonte(tamanho, negrito)
            px_, py_ = tela(x, y)
            caixa = draw.textbbox((0, 0), conteudo, font=f)
            tw, th = caixa[2] - caixa[0], caixa[3] - caixa[1]
            draw.text((px_ - tw / 2, py_ - th / 2), conteudo, font=f, fill=cor)
        elif tipo == "coluna":
            _, x, y, lado_x, lado_y = item
            x0, y0 = tela(x - lado_x / 2, y - lado_y / 2)
            x1, y1 = tela(x + lado_x / 2, y + lado_y / 2)
            draw.rectangle([x0 - 3, y0 - 3, x1 + 3, y1 + 3], fill=FUNDO)
            draw.rectangle([x0, y0, x1, y1], fill=PAREDE)

    desenhar_legenda(draw, int(OX + (15.8 - 4.0) * S))
    legenda = "Colunas existentes 27×14 cm, posição fixa: (3,40;4,00) (7,45;4,00) (3,40;7,15) (7,45;7,15) (3,40;10,32) (7,45;10,32)"
    draw.text((24, altura_px - 36), legenda, font=fonte(14, False), fill=TEXTO)
    imagem.save(caminho, "PNG")
    return caminho


def desenhar_legenda(draw, x):
    linhas = [
        (17, True, "Alturas a partir do piso"),
        (13, False, "Piso até a viga"),
        (13, False, "O projeto não traz essa cota."),
        (13, False, ""),
        (13, False, "Piso até a laje"),
        (13, False, "O projeto não traz essa cota."),
        (13, False, "A laje fica acima da viga."),
        (13, False, ""),
        (17, True, "Paredes"),
        (13, False, "A — cega, sem janela: 10,20 m"),
        (13, False, "B — entrada: 3,20 m"),
        (13, False, "y 4,00 m a 7,20 m"),
        (13, False, "B — cega: 3,17 m"),
        (13, False, "B — cega: 3,83 m"),
        (13, False, "y 10,37 m a 14,20 m"),
        (13, False, "C — subsolo, cega: 7,45 m"),
        (13, False, ""),
        (13, False, "Cotas do topo: trechos"),
        (13, False, "ao longo da profundidade."),
        (13, False, "Colunas seguem em"),
        (13, False, "y = 7,15 m e 10,32 m."),
    ]
    y = 36
    for tamanho, negrito, linha in linhas:
        if linha:
            draw.text((x, y), linha, font=fonte(tamanho, negrito), fill=TEXTO)
        y += 26 if tamanho >= 17 else 20


if __name__ == "__main__":
    montar()
    destino = os.path.join(os.getcwd(), "planta-exata.png")
    print(executar(destino))
