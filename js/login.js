// Para fazer a verificação de senha
let btnlogin =  document.getElementById('btnlogin')

btnlogin.addEventListener('click', (event)=> {
    event.preventDefault()

    let email = document.getElementById('usernamelogin').value
    let password = document.getElementById('passwordlogin').value

    if (email == 'julia@gmail.com' && password == 'abc123') {
        window.location.href = '/html/telaAgenteSocial.html'
    } else {
        alert('Digite o e-mail e a senha correta.')
    }
})
