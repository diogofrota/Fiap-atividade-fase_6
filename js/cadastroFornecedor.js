const cadastroFornecedor = [{
    nome: "Mario",
    cpf: 11122233300,
    email: "mario@gmail.com",
    telefone: 21999999999,
    senha: "abc123",
    cep: 12345000,
    rua: "rua marataizes",
    numero: 21,
    bairro: "iraja",
    municipio: "Rio de Janeiro",
    estado: "RJ"
  }];
  
  
  let btn = document.getElementById('btn');

  console.log(cadastroFornecedor)
  
  btn.addEventListener('click', (event) => {
    event.preventDefault();
  
    // Capturando os valores do formulário
    let nome = document.getElementById('nome').value;
    let cpf = document.getElementById('cpf').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value; 
    let senha = document.getElementById('senha').value; 
    let cep = document.getElementById('cep').value;
    let rua = document.getElementById('rua').value; 
    let numero = document.getElementById('numero').value;
    let bairro = document.getElementById('bairro').value;
    let municipio = document.getElementById('municipio').value;
    let estado = document.getElementById('estado').value;
  
    // Criando o objeto para adicionar ao cadastro
    const fornecedor = {
      nome: nome,
      cpf: cpf,
      email: email,
      telefone: telefone,
      senha: senha,
      cep: cep,
      rua: rua,
      numero: numero,
      bairro: bairro,
      municipio: municipio,
      estado: estado
    };
  
    // Adicionando o objeto ao array
    cadastroFornecedor.push(fornecedor);
  
    console.log('novo cadastro de fornecedor atualizado')
    console.log(cadastroFornecedor)


    setTimeout( ()=> {

      // colocar um pagian previa de carregamento com gif animado de loading

      
      window.location.href ='/html/confirmaCadastro.html'
    },500)
  });