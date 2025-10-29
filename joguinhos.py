# Palavra secreta do jogo
palavra_secreta = "PYTHON"

# Inicializa variáveis do jogo
letras_descobertas = ["_"] * len(palavra_secreta)
tentativas_restantes = 6
letras_usadas = []

# Desenhos da forca em etapas (cabeça, corpo, braços, pernas)
forca = [
    """
     _______
    |/      
    |      
    |      
    |       
    |      
    |
    """,
    """
     _______
    |/      |
    |      (_)
    |      
    |       
    |      
    |
    """,
    """
     _______
    |/      |
    |      (_)
    |       |
    |       |
    |      
    |
    """,
    """
     _______
    |/      |
    |      (_)
    |      \\|
    |       |
    |      
    |
    """,
    """
     _______
    |/      |
    |      (_)
    |      \\|/
    |       |
    |      
    |
    """,
    """
     _______
    |/      |
    |      (_)
    |      \\|/
    |       |
    |      / 
    |
    """,
    """
     _______
    |/      |
    |      (_)
    |      \\|/
    |       |
    |      / \\
    |
    """
]

# Função para mostrar a palavra com letras descobertas
def mostrar_palavra():
    print(" ".join(letras_descobertas))

# Loop principal do jogo
while tentativas_restantes > 0 and "_" in letras_descobertas:
    print("\n" + forca[6 - tentativas_restantes])  # Mostra boneco conforme erros
    mostrar_palavra()
    print(f"Tentativas restantes: {tentativas_restantes}")
    
    letra = input("Digite uma letra: ").upper()
    
    if letra in letras_usadas:
        print("Você já tentou essa letra. Tente outra.")
        continue
    
    letras_usadas.append(letra)
    
    if letra in palavra_secreta:
        print("✅ Acertou!")
        for i, l in enumerate(palavra_secreta):
            if l == letra:
                letras_descobertas[i] = letra
    else:
        print("❌ Errou!")
        tentativas_restantes -= 1

# Resultado final
print("\n" + forca[6 - tentativas_restantes])
if "_" not in letras_descobertas:
    print(f"🎉 Parabéns! Você adivinhou a palavra: {palavra_secreta}")
else:
    print(f"💀 Você perdeu! A palavra era: {palavra_secreta}")



======================


import time

# Senha fixa
SENHA_CORRETA = "1234"

# Configurações do login
tentativas_restantes = 3
tempo_maximo = 30  # segundos

# Marca o início do tempo
inicio = time.time()

while tentativas_restantes > 0 and (time.time() - inicio) < tempo_maximo:
    senha_digitada = input("Digite a senha: ")
    
    if senha_digitada == SENHA_CORRETA:
        print("✅ Acesso concedido!")
        break
    else:
        tentativas_restantes -= 1
        print(f"❌ Senha incorreta. Tentativas restantes: {tentativas_restantes}")

# Verifica o motivo do encerramento do loop
if tentativas_restantes == 0:
    print("🚫 Acesso negado: você excedeu o número de tentativas.")
elif (time.time() - inicio) >= tempo_maximo:
    print("🚫 Acesso negado: tempo limite para login expirado.")


=============================


# Função para exibir o tabuleiro
def exibir_tabuleiro(tabuleiro):
    for linha in tabuleiro:
        print(" | ".join(linha))
        print("-" * 5)

# Função para verificar se alguém venceu
def verificar_vitoria(tabuleiro, jogador):
    # Verificar linhas, colunas e diagonais
    for i in range(3):
        # Verificar linhas
        if all([celula == jogador for celula in tabuleiro[i]]):
            return True
        # Verificar colunas
        if all([tabuleiro[j][i] == jogador for j in range(3)]):
            return True

    # Verificar diagonais
    if all([tabuleiro[i][i] == jogador for i in range(3)]):
        return True
    if all([tabuleiro[i][2-i] == jogador for i in range(3)]):
        return True

    return False

# Função para verificar se o tabuleiro está cheio (empate)
def verificar_empate(tabuleiro):
    for linha in tabuleiro:
        if " " in linha:
            return False
    return True

# Função para validar se a posição está disponível
def posicao_valida(tabuleiro, linha, coluna):
    if 0 <= linha < 3 and 0 <= coluna < 3:
        if tabuleiro[linha][coluna] == " ":
            return True
    return False

# Função principal do jogo
def jogo_da_velha():
    # Inicializar o tabuleiro
    tabuleiro = [[" " for _ in range(3)] for _ in range(3)]
    jogador_atual = "X"

    while True:
        # Exibir o tabuleiro
        exibir_tabuleiro(tabuleiro)

        # Pedir a jogada do jogador
        print(f"Jogador {jogador_atual}, faça sua jogada.")
        linha = int(input("Digite a linha (0, 1, 2): "))
        coluna = int(input("Digite a coluna (0, 1, 2): "))

        # Validar se a posição é válida
        if posicao_valida(tabuleiro, linha, coluna):
            tabuleiro[linha][coluna] = jogador_atual
        else:
            print("Posição inválida, tente novamente.")
            continue

        # Verificar se alguém venceu
        if verificar_vitoria(tabuleiro, jogador_atual):
            exibir_tabuleiro(tabuleiro)
            print(f"Jogador {jogador_atual} venceu!")
            break

        # Verificar empate
        if verificar_empate(tabuleiro):
            exibir_tabuleiro(tabuleiro)
            print("Empate!")
            break

        # Alternar o jogador
        jogador_atual = "O" if jogador_atual == "X" else "X"

# Iniciar o jogo
if __name__ == "__main__":
    jogo_da_velha()

====================================
