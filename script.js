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
    } else if (select.value === 'o2') {
        document.getElementById("periodo2").style.display = '';
        document.getElementById("periodo1").style.display = 'none';
    } else {
        alert("Erro!")
    }
})


//animar
let background_header = document.getElementById("background_header");
let titulo_header = document.getElementById("titulo_header");
let subtitulo = document.getElementById("subtit_header");
let abaixo_do_subtitulo = document.getElementById("p_header_tit");

let but_ini = document.getElementById("but_ini");
let conv = document.getElementById("conv");

const elementos_animados = {
    'background_header': background_header,
    'titulo': titulo_header,
    'subtitulo': subtitulo,
    'abaixo_do_subtitulo': abaixo_do_subtitulo,
    'botoes_iniciais': but_ini,
    'conv': conv
}

const classes = {
    'background_header': 'background_header',
    'titulo': 'titulo_header',
    'subtitulo': 'subtitulo_header',
    'abaixo_do_subtitulo': 'abaixo_do_subtitulo',

    'botoes_iniciais': 'but_ini',
    'conv': 'conv'
}

window.addEventListener('scroll', () => {

    elementos_animados.conv.style.transition = '1s';

    if (window.scrollY < 100) {
        elementos_animados.background_header.classList.remove(`${classes.background_header}`);
        elementos_animados.titulo.classList.remove(`${classes.titulo}`);
        elementos_animados.subtitulo.classList.remove(`${classes.subtitulo}`);
        elementos_animados.abaixo_do_subtitulo.classList.remove(`${classes.abaixo_do_subtitulo}`);

        elementos_animados.botoes_iniciais.style.gap = '20px';
        elementos_animados.botoes_iniciais.style.opacity = '1';
    } else {
        elementos_animados.background_header.classList.add(`${classes.background_header}`);
        elementos_animados.titulo.classList.add(`${classes.titulo}`);
        elementos_animados.subtitulo.classList.add(`${classes.subtitulo}`);
        elementos_animados.abaixo_do_subtitulo.classList.add(`${classes.abaixo_do_subtitulo}`);

        elementos_animados.botoes_iniciais.style.gap = '100px';
        elementos_animados.botoes_iniciais.style.opacity = '0';
    }
})

elementos_animados.conv.style.opacity = '0';
window.addEventListener('scroll', () => {

    elementos_animados.botoes_iniciais.style.transition = '1s';


    if (window.scrollY < 200) {
        elementos_animados.conv.style.opacity = '0';
    } else {
        elementos_animados.conv.style.opacity = '1';
    }
})