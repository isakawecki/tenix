document.querySelector(".novo").addEventListener("click", function() {
    const nome = prompt("Digite o nome do tênis:");
    const preco = prompt("Digite o preço do tênis:");
    const imagem = prompt("Digite o caminho da imagem:");

    if (nome && preco && imagem) {
        criarProduto(nome, preco, imagem);
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});

function criarProduto(nome, preco, imagem) {
    
    const divQuadrado = document.createElement('div');
    divQuadrado.className = 'quadrados';
    divQuadrado.id = `produto-${Date.now()}`; // Gera um ID único para o produto

    const img = document.createElement('img');
    img.src = imagem;
    img.alt = nome;
    img.className = 'pumafoto';

    const pNome = document.createElement('p');
    pNome.className = 'nome';
    pNome.textContent = nome;

    // Criar o cabeçalho com o preço
    const h2Preco = document.createElement('h2');
    h2Preco.className = 'preco';
    h2Preco.textContent = preco;

    // Criar a div para os botões
    const divBotoes = document.createElement('div');
    divBotoes.className = 'botoes';

    // Criar o botão modificar
    const btnModificar = document.createElement('button');
    btnModificar.className = 'botao modificar';
    btnModificar.textContent = 'Modificar';

    // Adicionar evento para modificar
    btnModificar.addEventListener("click", function() {
        document.getElementById("novoNome").value = pNome.textContent;
        document.getElementById("novoPreco").value = h2Preco.textContent;
        document.getElementById("popup").style.display = "block"; 
        document.getElementById("salvarButton").dataset.quadradoId = divQuadrado.id; // Armazena o ID do quadrado
        // Salva a referência ao produto para atualização
        divQuadrado.dataset.nomeOriginal = nome; 
        divQuadrado.dataset.precoOriginal = preco; 
        divQuadrado.dataset.imagemOriginal = imagem; 
    });

    
    const btnExcluir = document.createElement('button');
    btnExcluir.className = 'botao excluir';
    btnExcluir.textContent = 'Excluir';

    
    btnExcluir.addEventListener("click", function() {
        const confirmacao = confirm("Você tem certeza que deseja excluir este produto?");
        if (confirmacao) {
            divQuadrado.remove();
        }
    });

   
    divBotoes.appendChild(btnModificar);
    divBotoes.appendChild(btnExcluir);
    
    divQuadrado.appendChild(img);
    divQuadrado.appendChild(pNome);
    divQuadrado.appendChild(h2Preco);
    divQuadrado.appendChild(divBotoes);

   
    document.getElementById('produtosContainer').appendChild(divQuadrado);
}

document.getElementById("salvarButton").addEventListener("click", function() {
   const novoNome = document.getElementById("novoNome").value;
   const novoPreco = document.getElementById("novoPreco").value; 
   const quadradoId = this.dataset.quadradoId; 

   const quadrado = document.getElementById(quadradoId);
   if (quadrado) {
       // Atualiza os dados do produto no frontend
       quadrado.querySelector(".nome").textContent = novoNome; 
       quadrado.querySelector(".preco").textContent = novoPreco; 
       quadrado.querySelector('img').src = quadrado.dataset.imagemOriginal; // Mantém a imagem original ou atualiza se necessário
       
       // Atualiza os dados armazenados no dataset
       quadrado.dataset.nomeOriginal = novoNome;
       quadrado.dataset.precoOriginal = novoPreco;

       document.getElementById("popup").style.display = "none"; 
   }
});

document.getElementById("closeButton").addEventListener("click", function() {
   document.getElementById("popup").style.display = "none"; 
});