//atalho para elementos DOM - Document Object Model
const formLogin = document.getElementById('formLogin')
const botaoGoogle = document.getElementById('loginGoogle')

//Adiciona um listener em cada item
formLogin.addEventListener('submit', (event) => {
    event.preventDefault() //evita recarregar página
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value
    loginFirebase(email, senha)
})

//listener botão Google
botaoGoogle.addEventListener('click', (event) => {
    event.preventDefault()
    loginGoogle()
})
// function login(email, senha){
//     //alert (`O email é ${email} e a senha é ${'HOJE NÃO PATRÃO'}`)
//     if(email === 'luishs.dev@gmail.com' && senha === "17041081"){
//         window.location.href = "/menu.html";
//     } 
//     else {
//         alerta('Login e/ou senha incorreta', "danger")
//     }
// }