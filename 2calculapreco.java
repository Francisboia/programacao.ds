public class Produto {

    String nome;
    double preco;
    double desconto;

    public Produto(String nome, double preco, double desconto) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }

    public double calcularPrecoFinal() {
        return preco - (preco * desconto / 100);
    }

    public static void main(String[] args) {

        Produto produto = new Produto("Fone de ouvido", 200, 25);

        // Linha adicionada para exibir o preço inicial
        System.out.printf("Preço inicial de %s: R$ %.2f%n", produto.nome, produto.preco);

        // Linha já existente para exibir o preço final
        System.out.printf("Preço final de %s: R$ %.2f%n", produto.nome, produto.calcularPrecoFinal());
    }
}
