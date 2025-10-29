# Lista de alunos presentes
alunos = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo"]

# Nome do aluno que queremos verificar
aluno_procurado = "Carlos"

# Verifica se o aluno está na lista
encontrado = False

for aluno in alunos:
    if aluno == aluno_procurado:
        print(f"✅ O aluno {aluno_procurado} está presente na sala.")
        encontrado = True
        break  # Encerra o loop assim que encontra o aluno

if not encontrado:
    print(f"❌ O aluno {aluno_procurado} não está na lista de presença.")
=====================================

# Valor que queremos alcançar
meta = 100

# Valor guardado até agora
saldo = 0

# Contador de semanas
semanas = 0

# Enquanto o saldo for menor que a meta
while saldo < meta:
    saldo += 10      # Guarda R$ 10 por semana
    semanas += 1     # Conta mais uma semana
    print(f"Semana {semanas}: você tem R$ {saldo}")

print(f"🎯 Você alcançou a meta de R$ {meta} em {semanas} semanas!")

===========================================

# Quantidade inicial de mensagens não lidas
mensagens_novas = 5

# Enquanto houver mensagens novas...
while mensagens_novas > 0:
    print(f"📩 Você tem {mensagens_novas} mensagem(ns) nova(s).")
    print("Lendo e respondendo uma mensagem...")
    
    # Após responder, diminui o contador
    mensagens_novas -= 1

print("✅ Todas as mensagens foram lidas e respondidas!")


==================================================


# Lista de preços dos itens (em reais)
precos = [5.50, 12.30, 8.99, 3.75, 10.00]

# Variável para armazenar o total
total = 0

# Loop para somar cada preço
for preco in precos:
    total += preco

# Exibe o resultado final
print(f"O total da compra é R$ {total:.2f}")

==================================================

# Lista dos dias da semana
dias_da_semana = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", "Domingo"]

# Loop para percorrer os dias
for dia in dias_da_semana:
    if dia == "Sábado" or dia == "Domingo":
        print(f"{dia}: 🎉 Finalmente fim de semana!")
    else:
        print(f"{dia}: Ainda é dia de trabalho... força aí! 💪")
