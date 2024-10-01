function buscarEndereco() {
    const cep = document.getElementById('cep').value;

    if (cep.length === 8) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if (!data.erro) {
                    document.getElementById('rua').value = data.logradouro;
                    document.getElementById('bairro').value = data.bairro;
                    document.getElementById('municipio').value = data.localidade;
                    document.getElementById('estado').value = data.uf;
                } else {
                    alert('CEP inválido! Tente novamente.');
                }
            })
            .catch(error => {
                console.error('Erro ao buscar o endereço:', error);
            });
    } else {
        alert('CEP deve ter 8 dígitos.');
    }
}
