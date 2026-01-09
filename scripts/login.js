//Estrutura HTML e interatividade
document.getElementById("div_loading").style.display = 'none';

//"Banco de Dados" e Login
const matricula_matriz = ["2"];
const senha_matriz = ["2"];

function login() {
    let matricula = document.getElementById("matricula");
    let senha = document.getElementById("senha");

    if (matricula_matriz.includes(matricula.value) && senha_matriz.includes(senha.value)) {
        document.getElementById("form").style.display = 'none';
        document.getElementById("div_loading").style.display = '';
        setTimeout(() => {
            window.location.href = '../index.html'
        }, 1000);
    } else {
        alert("Erro!");
    }
}