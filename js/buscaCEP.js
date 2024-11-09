function buscarCEP(cep) {
    // Remove qualquer caractere não numérico
    cep = cep.replace(/\D/g, '');

    // Verifica se o CEP possui 8 dígitos
    if (cep.length !== 8) {
        alert("CEP inválido!");
        return;
    }

    // Faz a requisição à API ViaCEP
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => {
            if (!response.ok) throw new Error("Erro na requisição");
            return response.json();
        })
        .then(data => {
            if (data.erro) {
                alert("CEP não encontrado!");
            } else {
                // Exibe os dados do CEP
                console.log(data);
                // Exemplo de preenchimento dos campos
                document.getElementById('rua').value = data.logradouro;
                document.getElementById('bairro').value = data.bairro;
                document.getElementById('municipio').value = data.localidade;
                document.getElementById('estado').value = data.uf;
            }
        })
        .catch(error => {
            console.error("Erro ao buscar CEP:", error);
        });
}

// Exemplo de uso
document.getElementById("cep").addEventListener("blur", (event) => {
    buscarCEP(event.target.value);
});



