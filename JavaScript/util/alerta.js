/**
 * Função = Alerta.
 * Apresenta um alerta no padrão Bootstrap5, caso itens
 * errados na tela de login.
 * 
 * @param {string} mensagem Mensagem de alerta
 * @param {string} tipo Tipo de alerta do Bootstrap 
 * @returns {string} Retorna um DIV com conteúdo do Alerta
 */
function alerta (mensagem, tipo){
    let mensagemAlerta = document.getElementById('msgAlerta')
    let wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-'+tipo +
    ' alert-dismissible m-3" role="alert">' +
    mensagem +
   '<button type="button" class="btn-close"' +
   'data-bs-dismiss="alert"></button></div>'
   mensagemAlerta.append(wrapper) 
}