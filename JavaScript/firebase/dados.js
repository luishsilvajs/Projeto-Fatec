function salvar (event, collection){
    event.preventDefault()
    if(document.getElementById('nome').value === ''){
        alerta('Campo Nome deve ser preenchido.')
    }
    else if (document.getElementById('email').value === ''){
        alerta('Campo Email deve ser preenchido.')
    }
    else if (document.getElementById('cpf').value === ''){
        alerta('Campo CPF deve ser preenchido.')
    }
    else if (document.getElementById('peso').value < 0){
        alerta('Campo Peso deve ser preenchido.')
    }
    else if (document.getElementById('altura').value < 0 ||
             document.getElementById('altura').value > 3){
        alerta('Campo Email deve ser preenchido.')
    }
    else {
        incluir(event, collection)
    }
}