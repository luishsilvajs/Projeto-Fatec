function salvar(event, collection){
    alert('test')
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
    let sexo = ''
    if(document.getElementById('sexo-0').values !== ''){
        sexo = 'Masculino'
    }
    else if (document.getElementById('sexo-1').values !== ''){
        sexo = 'Feminino'
    }
    return await firebase.database().ref(collection).push({
        nome: document.getElementById('nome').values,
        email: document.getElementById('email').values,
        cpf: document.getElementById('cpf').values,
        nascimento: document.getElementById('nascimento').values,
        peso: document.getElementById('peso').values,
        altura: document.getElementById('altura').values,
        sexo: sexo
    })
    .then(()=> {
        alerta('Dados registrados com sucesso.', 'success')
        // limpando o formulário
        document.getElementById('formCadastro').reset()
    })
    .catch (error => {
        alerta('Erro ao registrar dados.' + error.message, 'danger')
    })
}