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

async function incluir (event, collection){
    event.preventDefault()
    let btSalvar = document.getElementById('btnSalvar')
    btSalvar.innerHTML = 'Carregando...'
    return await firebase.database().ref(collection).push({
        nome: document.getElementById('nome').values,
        email: document.getElementById('email').values,
        cpf: document.getElementById('cpf').values,
        nascimento: document.getElementById('nascimento').values,
        peso: document.getElementById('peso').values,
        altura: document.getElementById('altura').values
    })
}