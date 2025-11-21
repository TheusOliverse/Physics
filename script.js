//Configuração do Select dos períodos
document.getElementById("periodo1").style.display = 'none';
document.getElementById("periodo2").style.display = 'none';
let ocult_box_periodo = document.getElementById("ocult_box_perio")
ocult_box_periodo.style.display = 'none';

const select = document.getElementById("select_periodo");

document.getElementById("ocult_box_perio").addEventListener('click', () => {
    document.getElementById("periodo1").style.display = 'none';
    document.getElementById("periodo2").style.display = 'none';
    ocult_box_periodo.style.display = 'none';
})
document.getElementById("achar_perio").addEventListener('click', () => {
    ocult_box_periodo.style.display = '';
    if (select.value === 'o1') {
        document.getElementById("periodo1").style.display = '';
        document.getElementById("periodo2").style.display = 'none';
    } else if(select.value === 'o2') {
        document.getElementById("periodo2").style.display = '';
        document.getElementById("periodo1").style.display = 'none';
    } else {
        alert("Erro!")
    }
})