const cadastroCras = [{
    nome: "Julia",
    cpf: 11122233300,
    email: "julia@gmail.com",
    telefone: 21999999999,
    senha: "abc123",
    cep: 12345000,
    rua: "rua jorge jose",
    numero: 21,
    bairro: "iraja",
    municipio: "Rio de Janeiro",
    estado: "RJ"
  }];
  
  console.log(cadastroCras);
  
  let btn = document.getElementById('btnCadastro');
  
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
    const familiaCarente = {
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
    cadastroCras.push(familiaCarente);
  

  });
  
// Para fazer a verificação de senha
let btnlogin =  document.getElementById('btnlogin')

btnlogin.addEventListener('click', (event)=> {
    event.preventDefault()

    let email = document.getElementById('usernamelogin').value
    let password = document.getElementById('passwordlogin').value

    if (email === 'x' && password === 'abc123') {
        window.location.href = '/html/opcaoCras.html'
    } else {
        alert('digita o email')
    }
})
