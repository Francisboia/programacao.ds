# Define função para calcuclar preço final
def calcular_preco_final(nome, preco, desconto=0):
    preco_final = preco - (preco * desconto / 100)
    print(f"preço inicial de {nome}: R$ {preco}")
    print(f"Preço final de {nome}: R$ {preco_final:.2f}")
    

# Exemplo de uso
calcular_preco_final("Fone de ouvido", 200, 25)
