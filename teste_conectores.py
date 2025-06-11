
# Solicita o preço do produto
preco = float(input("Digite o preço do produto: R$ "))

# Classificação da prateleira
if preco <= 100:
    prateleira = "Baixo custo"
elif 101 <= preco <= 500:
    prateleira = "Médio custo"
else:
    prateleira = "Alto custo"

# Exibe a classificação na tela
print(f"O produto deve ser armazenado na prateleira de: {prateleira}")
