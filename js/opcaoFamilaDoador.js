
// Dados de exemplo
const pessoas = [
    { nome: "Ana Souza", cidade: "Curitiba, PR" },
    { nome: "João Lima", cidade: "São Paulo, SP" },
    { nome: "Maria Clara", cidade: "Rio de Janeiro, RJ" },
    { nome: "Ana Souza", cidade: "Curitiba, PR" },
    { nome: "João Lima", cidade: "São Paulo, SP" },
    { nome: "Maria Clara", cidade: "Rio de Janeiro, RJ" }
];

const cardContainer1 = document.getElementById("card");

// Loop para criar os cards dinamicamente
pessoas.forEach(pessoa => {
    const cardHTML = `
    <a href="./pagamento.html" class="card">
    <div>
    <h4>${pessoa.nome} - ${pessoa.cidade}</h4>
    </div>
    </a>
    `;
    // Adiciona cada card ao contêiner
    cardContainer1.innerHTML += cardHTML;
});


