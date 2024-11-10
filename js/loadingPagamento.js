let btn =  document.getElementById('btn')


btn.addEventListener('click', (event)=> {
    event.preventDefault()
    setTimeout(()=> {
        window.location.href = '/html/loadingPagamento.html'
    },100)
})


