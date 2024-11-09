const cadastroFamilia = [{
    nome: "Mario",
    cpf: 11122233300,
    email: "mario@gmail.com",
    telefone: 21999999999,
  }];
  
  
  let btn = document.getElementById('btn');

  console.log(cadastroFamilia)
  
  btn.addEventListener('click', (event) => {
    event.preventDefault();
  
    // Capturando os valores do formulário
    let nome = document.getElementById('nome').value;
    let cpf = document.getElementById('cpf').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value; 
    
  
    // Criando o objeto para adicionar ao cadastro
    const familia = {
      nome: nome,
      cpf: cpf,
      email: email,
      telefone: telefone,
      
    };
  
    // Adicionando o objeto ao array
    cadastroFamilia.push(familia);
  
    console.log('novo cadastro de fornecedor atualizado')
    console.log(cadastroFamilia)


    setTimeout( ()=> {

      // colocar um pagian previa de carregamento com gif animado de loading

      
      window.location.href ='/html/confirmaCadastro.html'
    },500)
  });