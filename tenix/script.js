
document.querySelectorAll(".modificar").forEach(button => {
    button.addEventListener("click", function() {
        const quadrado = this.closest(".quadrados"); 
        const nomeElemento = quadrado.querySelector(".nome");
        const precoElemento = quadrado.querySelector(".preco");

        
        document.getElementById("novoNome").value = nomeElemento.textContent;
        document.getElementById("novoPreco").value = precoElemento.textContent;

        document.getElementById("popup").style.display = "block"; 
       
        document.getElementById("salvarButton").dataset.quadradoId = quadrado.id;
    });
});


document.getElementById("closeButton").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none"; 
});

document.getElementById("salvarButton").addEventListener("click", function() {
    const novoNome = document.getElementById("novoNome").value;
    const novoPreco = document.getElementById("novoPreco").value; 
    const quadradoId = this.dataset.quadradoId; 

    const quadrado = document.getElementById(quadradoId);
    const nomeElemento = quadrado.querySelector(".nome");
    const precoElemento = quadrado.querySelector(".preco");

    nomeElemento.textContent = novoNome; 
    precoElemento.textContent = novoPreco; 
    document.getElementById("popup").style.display = "none"; 
});


document.querySelectorAll(".excluir").forEach(button => {
    button.addEventListener("click", function() {
       
        const confirmacao = confirm("Você tem certeza que deseja excluir este produto?");
        
        if (confirmacao) {
            const quadrado = this.closest(".quadrados"); 
            const lixeira = document.getElementById("lixeira");

          
            const quadradoClone = quadrado.cloneNode(true);
            quadradoClone.querySelector(".excluir").textContent = "Restaurar"; 
            quadradoClone.querySelector(".excluir").addEventListener("click", function() {
               
              lixeira.removeChild(quadradoClone); 
                quadrado.style.display = "block"; 
            });

            lixeira.appendChild(quadradoClone); 
            quadrado.style.display = "none"; 
        }
    });
});


document.getElementById("abrirLixeira").addEventListener("click", function() {
    document.getElementById("popupLixeira").style.display = "block"; 
});


document.getElementById("fecharLixeira").addEventListener("click", function() {
    document.getElementById("popupLixeira").style.display = "none"; 
});