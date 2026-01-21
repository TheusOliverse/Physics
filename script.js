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
}); elementos_animados.conv.style.opacity = '0';
window.addEventListener('scroll', () => {

    elementos_animados.botoes_iniciais.style.transition = '1s';

    if (window.scrollY < 200) {
        elementos_animados.conv.style.opacity = '0';
    } else {
        elementos_animados.conv.style.opacity = '1';
    }
});

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
});

//Icon go
window.addEventListener('scroll', () => {
    let icon_go = document.getElementById("ani_go");
    if (window.scrollY < 100) {
        icon_go.classList.remove("ani_go2");
    } else {
        icon_go.classList.add("ani_go2");
    }
});

//Open cursos para o usuário
let cursos_g = document.getElementById("ofc_curso");
document.getElementById("artc_links").style.display = 'none';
cursos_g.addEventListener('click', () => {
    document.getElementById("artc_links").style.display = '';
}); document.getElementById("but_ocult_curso").addEventListener('click', () => {
    document.getElementById("artc_links").style.display = 'none';
});

//Opções adicionais
document.getElementById("opad").style.display = 'none';
document.getElementById("but_add_opad").addEventListener('click', () => {
    document.getElementById("opad").style.display = '';
}); document.getElementById("close_opad").addEventListener('click', () => {
    document.getElementById("opad").style.display = 'none';
});

//Sobrepor
function sobrepor() {
    document.getElementById("sobrepor").classList.add("sobrepor_opacity");
    setTimeout(() => {
        document.getElementById("sobrepor").style.display = 'none';
    }, 3600);
}
sobrepor()

//News API (Notícias do G1)
const rssUrl = 'https://g1.globo.com/rss/g1/educacao';
const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

async function carregarNoticias() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.status === 'ok') {
            const container = document.getElementById('newsAPI');
            container.innerHTML = '';
            data.items.forEach(item => {
                const card = `
                            <div class="noticia">
                                <h2>${item.title}</h2>
                                 <p class="p_news">${item.description}</p>
                                <small>Publicado em: ${new Date(item.pubDate).toLocaleDateString('pt-BR')}</small>
                                <br>
                                <a href="${item.link}" target="_blank">Ler notícia completa</a>
                            </div>
                        `;
                container.innerHTML += card;
            });
        };
    } catch (error) {
        document.getElementById('newsAPI').innerHTML = "Erro ao carregar notícias.";
        console.error(error);
    };
};
carregarNoticias()

//Pesquisa de artigos
const res_ocult = document.getElementById("ocult_pes");
res_ocult.style.display = 'none';

async function buscarArtigos() {
    const query = document.getElementById('input_pesquisa').value;
    const resultadosDiv = document.getElementById('resultados');
    const status = document.getElementById('status');

    if (!query) return;
    status.innerText = "Verificando...";
    resultadosDiv.innerHTML = "";
    const url = `https://api.semanticscholar.org/graph/v1/paper/search?query=${encodeURIComponent(query)}&limit=5&fields=title,abstract,year,citationCount,url`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        status.innerText = "";

        if (!data.data || data.data.length === 0) {
            status.innerText = "Nenhum artigo encontrado.";
            return;
        }
        data.data.forEach(artigo => {
            const div = document.createElement('div');
            div.className = 'artigo';
            div.innerHTML = `
                    <a href="${artigo.url}" target="_blank" class="titulo_pesquisa">${artigo.title}</a>
                    <div class="stats_pesquisa">
                        <span>📅 ${artigo.year || 'N/A'}</span> | 
                        <span class="badge_pesquisa">🔥 ${artigo.citationCount} citações</span>
                    </div>
                    <p class="resumo_pesquisa">${artigo.abstract ? artigo.abstract.substring(0, 200) + '...' : 'Resumo não disponível.'}</p>
                `;
            resultadosDiv.appendChild(div);
            res_ocult.style.display = '';
        })
    } catch (error) {
        console.error(error);
        buscarArtigos()
    }
}

function ocult_pes() {
    res_ocult.style.display = 'none';
    document.getElementById("resultados").innerHTML = '';
}

//Professores dos períodos
const p1 = document.getElementById("p1_profs");
const p2 = document.getElementById("p2_profs");

p1.style.display = 'none';
p2.style.display = 'none';

function profs_list(x) {
    if (x == 1) {
        p1.style.display = '';
        p2.style.display = 'none';
    } else if (x == 2) {
        p1.style.display = 'none';
        p2.style.display = '';
    }
}