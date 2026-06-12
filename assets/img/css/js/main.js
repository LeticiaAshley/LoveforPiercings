// Cria um array vazio chamado carrinho
let carrinho = [];


// Quando a página terminar de carregar
window.onload = function () {

    // Pega os dados salvos no localStorage com o nome "carrinho"
    let dados = localStorage.getItem("carrinho");

    // Verifica se existe algo salvo
    if (dados) {

        // Converte o texto salvo novamente em array/objeto
        carrinho = JSON.parse(dados);
    }

    // Atualiza o carrinho na tela
    atualizarCarrinho();
};


// Função para adicionar produtos ao carrinho
function adicionarAoCarrinho(nome, preco, imagem) {

    // Cria um objeto chamado produto
    let produto = {

        // Guarda o nome recebido
        nome: nome,

        // Guarda o preço recebido
        preco: preco,

        // Guarda a imagem recebida
        imagem: imagem
    };

    // Adiciona o produto dentro do array carrinho
    carrinho.push(produto);

    // Salva o carrinho no localStorage
    salvarCarrinho();

    // Mostra mensagem de produto adicionado
    alert("Produto adicionado ao carrinho 🛒");

    // Atualiza os produtos na tela
    atualizarCarrinho();
}


// Função responsável por salvar o carrinho
function salvarCarrinho() {

    // Salva o array carrinho no localStorage
    // JSON.stringify transforma o array em texto
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}


// Função para atualizar o carrinho na tela
function atualizarCarrinho() {

    // Pega a div onde os produtos serão mostrados
    let lista = document.getElementById("listaCarrinho");

    // Pega a div onde ficará o valor total
    let total = document.getElementById("total");

    // Se lista ou total não existirem, para a função
    if (!lista || !total) return;

    // Limpa a lista antes de atualizar
    lista.innerHTML = "";

    // Percorre todos os produtos do carrinho
    carrinho.forEach(function (item, index) {

        // Cria uma nova div
        let div = document.createElement("div");

        // Adiciona a classe CSS "item-carrinho"
        div.classList.add("item-carrinho");

        // Adiciona conteúdo HTML dentro da div
        div.innerHTML = `

            <!-- Mostra a imagem do produto -->
            <img src="${item.imagem}" width="80">

            <!-- Mostra o nome do produto -->
            <p>${item.nome}</p>

            <!-- Mostra o preço do produto -->
            <p>R$ ${item.preco.toFixed(2)}</p>

            <!-- Botão para remover o produto -->
            <button onclick="removerItem(${index})">Remover</button>
        `;

        // Coloca a div dentro da lista do carrinho
        lista.appendChild(div);
    });

    // Soma todos os preços do carrinho
    let soma = carrinho.reduce(function (acc, item) {

        // Soma o acumulador com o preço do item
        return acc + item.preco;

    // Valor inicial da soma = 0
    }, 0);

    // Mostra o valor total formatado
    total.innerHTML = "Total: R$ " + soma.toFixed(2);
}


// Função para remover produto do carrinho
function removerItem(index) {

    // Remove 1 item da posição recebida
    carrinho.splice(index, 1);

    // Salva novamente o carrinho atualizado
    salvarCarrinho();

    // Atualiza os produtos na tela
    atualizarCarrinho();
}


// Função para abrir o carrinho lateral
function abrirCarrinho() {

    // Adiciona a classe "ativo" no carrinho
    document.getElementById("carrinhoLateral").classList.add("ativo");
}


// Função para fechar o carrinho lateral
function fecharCarrinho() {

    // Remove a classe "ativo" do carrinho
    document.getElementById("carrinhoLateral").classList.remove("ativo");
}





 







