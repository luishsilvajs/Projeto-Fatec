function salvar (event, collection){
    event.preventDefault()
    if(document.getElementById('nome').value === ''){
        alert('Campo nome deve ser preenchido.')
    }
}