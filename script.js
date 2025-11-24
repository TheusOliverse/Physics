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

//animar (Início do site)
let background_header = document.getElementById("background_header");
let titulo_header = document.getElementById("titulo_header");
let subtitulo = document.getElementById("subtit_header");
let abaixo_do_subtitulo = document.getElementById("p_header_tit");

let but_ini = document.getElementById("but_ini");
let conv = document.getElementById("conv");

// caixas de informações (animações)
let box_info_1 = document.getElementById("box_inf1");
let box_info_2 = document.getElementById("box_inf2");
let box_info_3 = document.getElementById("box_inf3");

const elementos_animados = {
    'background_header': background_header,
    'titulo': titulo_header,
    'subtitulo': subtitulo,
    'abaixo_do_subtitulo': abaixo_do_subtitulo,

    'botoes_iniciais': but_ini,
    'conv': conv,
}

const classes = {
    'background_header': 'background_header',
    'titulo': 'titulo_header',
    'subtitulo': 'subtitulo_header',
    'abaixo_do_subtitulo': 'abaixo_do_subtitulo',

    'botoes_iniciais': 'but_ini',
    'conv': 'conv',

}

//Código contendo as tags das caixas informativas
const box = {
    'box1': box_info_1,
    'box2': box_info_2,
    'box3': box_info_3
}

box.box1.style.transition = '1.5s';
box.box2.style.transition = '2s';
box.box3.style.transition = '2.5s';

box_info_1.style.opacity = '0';
box_info_2.style.opacity = '0';
box_info_3.style.opacity = '0';

//Animações com o Scrool
window.addEventListener('scroll', () => {

    //Caixa de direcionamento inicial
    elementos_animados.conv.style.transition = '4s';

    if (window.scrollY < 100) {
        //Parte I (Início)
        elementos_animados.background_header.classList.remove(`${classes.background_header}`);
        elementos_animados.titulo.classList.remove(`${classes.titulo}`);
        elementos_animados.subtitulo.classList.remove(`${classes.subtitulo}`);
        elementos_animados.abaixo_do_subtitulo.classList.remove(`${classes.abaixo_do_subtitulo}`);
        
        //Parte II (Botões interativos)
        elementos_animados.botoes_iniciais.style.gap = '20px';
        elementos_animados.botoes_iniciais.style.opacity = '1';

        //Box de informações
        box_info_1.style.opacity = '0';
        box_info_2.style.opacity = '0';
        box_info_3.style.opacity = '0';
    } else {
        elementos_animados.background_header.classList.add(`${classes.background_header}`);
        elementos_animados.titulo.classList.add(`${classes.titulo}`);
        elementos_animados.subtitulo.classList.add(`${classes.subtitulo}`);
        elementos_animados.abaixo_do_subtitulo.classList.add(`${classes.abaixo_do_subtitulo}`);

        elementos_animados.botoes_iniciais.style.gap = '100px';
        elementos_animados.botoes_iniciais.style.opacity = '0';

        box_info_1.style.opacity = '1';
        box_info_2.style.opacity = '1';
        box_info_3.style.opacity = '1';
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

//Main (conteúdo principal)
//Cursos (interações e atividade)
let cursos = document.getElementById("cursos");
cursos.style.transition = '2s';
cursos.style.opacity = '0';

window.addEventListener('scroll', () => {
    if (window.scrollY < 600) {
        cursos.style.opacity = '0';
    } else {
        cursos.style.opacity = '1';
    }   
})

//Icon go
window.addEventListener('scroll', () => {
    let icon_go = document.getElementById("ani_go");
    if (window.scrollY < 100) {
        icon_go.classList.remove("ani_go2");
    } else {
        icon_go.classList.add("ani_go2");
    }
})

//Open cursos para o usuário
let cursos_g = document.getElementById("ofc_curso");
document.getElementById("artc_links").style.display = 'none'
cursos_g.addEventListener('click', () => {
    document.getElementById("artc_links").style.display = ''
})

document.getElementById("but_ocult_curso").addEventListener('click', () => {
    document.getElementById("artc_links").style.display = 'none'
})

