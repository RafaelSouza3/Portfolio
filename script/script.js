// Linhas Animadas Start

function mouseEnter() {

    const line = document.getElementById("line");
    line.style.width = "170px";
    line.style.transition = "all 1s";

}

function mouseLeave() {

    const line = document.getElementById("line");
    line.style.width = "0px";

}

function mouseEnter2() {

    const line = document.getElementById("line2");
    line.style.width = "161px";
    line.style.transition = "all 1s";

}

function mouseLeave2() {

    const line = document.getElementById("line2");
    line.style.width = "0px";

}

function mouseEnter3() {

    const line = document.getElementById("line3");
    line.style.width = "148px";
    line.style.transition = "all 1s";

}

function mouseLeave3() {

    const line = document.getElementById("line3");
    line.style.width = "0px";

}

function mouseEnter4() {

    const line = document.getElementById("line4");
    line.style.width = "151px";
    line.style.transition = "all 1s";

}

function mouseLeave4() {

    const line = document.getElementById("line4");
    line.style.width = "0px";

}

function mouseEnter5() {

    const line = document.getElementById("line5");
    line.style.width = "135px";
    line.style.transition = "all 1s";

}

function mouseLeave5() {

    const line = document.getElementById("line5");
    line.style.width = "0px";

}

// Linhas Animadas End

// Perfil Start

function mouseEnterIMG() {

    var img = document.getElementById("img");
    img.setAttribute('src', 'images/perfil2.png');

}

function mouseLeaveIMG() {
    var img = document.getElementById("img");
    img.setAttribute('src', 'images/perfil.png');
}

function mouseEnterIMG2() {

    var img = document.getElementById("img2");
    img.style.transform = "scale(1.05)";
    img.style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";
    img.setAttribute('src', 'images/perfil2.png');

}

function mouseLeaveIMG2() {
    var img = document.getElementById("img2");
    img.style.transform = "scale(1.00)";
    img.style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";
    img.setAttribute('src', 'images/perfil.png');
}


// Perfil End

// Habilidades Interação Start

function mouseEnterimg1() {

    this.disp = document.getElementsByClassName("p1");

    this.disp[0].style.opacity = "1";
    this.disp[0].style.color = "white";
    this.disp[0].innerHTML = `O Adobe After Effects é um software gráfico que tem como objetivo<br>
    oferecer funções simples e práticas voltadas para o acabamento<br>
    e últimos retoques de edição de vídeo ou imagens`;
    

    this.zoom = document.getElementById("zoom1");
    
    this.zoom.style.transform = "scale(1.1)";
    this.zoom.style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";

}

function mouseLeaveimg1() {

    this.disp = document.getElementsByClassName("p1");

    this.disp[0].innerHTML = `ARRASTE O MOUSE NAS HABILIDADES`;

    this.zoom = document.getElementById("zoom1");

    zoom.style.transform = "scale(1.0)";
    zoom.style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";

}

function mouseEnterimg2() {

    this.disp = document.getElementsByClassName("p2");

    this.disp[0].style.opacity = "1";
    this.disp[0].style.color = "white";
    this.disp[0].innerHTML = `A facilidade de edição e manipulação de imagens cria a oportunidade<br>
    para criar artes conceituais para jogos e filmes, por exemplo.<br>
    Além disso, o software é bastante utilizado no cinema, em animações e claro, na fotografia.`;
    

    this.zoom = document.getElementById("zoom2");

    zoom.style.transform = "scale(1.1)";
    zoom.style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";

}

function mouseLeaveimg2() {

    this.disp = document.getElementsByClassName("p2");

    this.disp[0].innerHTML = `ARRASTE O MOUSE NAS HABILIDADES`;

    this.zoom = document.getElementById("zoom2");

    zoom.style.transform = "scale(1.0)";
    zoom.style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";

}

function mouseEnterimg3() {

    this.disp = document.getElementsByClassName("p3");

    this.disp[0].style.opacity = "1";
    this.disp[0].style.color = "white";
    this.disp[0].innerHTML = `O VEGAS Pro oferece todas as ferramentas necessárias para<br>
    a edição profissional de vídeo com correção de cor HDR<br>
    avançada, transmissão ao vivo e design de som.`;
    

    this.zoom = document.getElementById("zoom3");

    zoom.style.transform = "scale(1.1)";
    zoom.style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";

}

function mouseLeaveimg3() {

    this.disp = document.getElementsByClassName("p3");

    this.disp[0].innerHTML = `ARRASTE O MOUSE NAS HABILIDADES`;

    this.zoom = document.getElementById("zoom3");

    zoom.style.transform = "scale(1.0)";
    zoom.style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";

}

function mouseEnterimg4() {

    this.disp = document.getElementsByClassName("p4");

    this.disp[0].style.opacity = "1";
    this.disp[0].style.color = "white";
    this.disp[0].innerHTML = `O FL Studio (Fruity Loops Studio) é um software<br>
    desenvolvido para a criação e produção de música. Atualmente é uma<br> 
    das DAWS mais utilizadas no mundo por músicos e DJ’s profissionais.`;
    

    this.zoom = document.getElementById("zoom4");

    zoom.style.transform = "scale(1.1)";
    zoom.style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";

}

function mouseLeaveimg4() {

    this.disp = document.getElementsByClassName("p4");
    this.disp[0].style.opacity = "0";

    this.zoom = document.getElementById("zoom4");

    zoom.style.transform = "scale(1.0)";
    zoom.style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";

}

function mouseEnterimg5() {

    this.disp = document.getElementsByClassName("p5");

    this.disp[0].style.opacity = "1";
    this.disp[0].style.color = "white";
    this.disp[0].innerHTML = `o HTML é o componente base da web. Isso quer dizer que<br>
    ele permite a construção de websites e a inserção de<br>
    novos conteúdos, como imagens e vídeos, por meio dos hipertextos.`;
    

    this.zoom = document.getElementById("zoom5");

    zoom.style.transform = "scale(1.1)";
    zoom.style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";

}

function mouseLeaveimg5() {

    this.disp = document.getElementsByClassName("p5");

    this.disp[0].style.opacity = '0';

    this.zoom = document.getElementById("zoom5");

    zoom.style.transform = "scale(1.0)";
    zoom.style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";

}

function mouseEnterimg6() {

    this.disp = document.getElementsByClassName("p6");

    this.disp[0].style.opacity = "1";
    this.disp[0].style.color = "white";
    this.disp[0].innerHTML = `O CSS é uma linguagem de folha de estilos usada amplamente na web
    <br>
    e criada com o propósito principal de estilizar páginas HTML.
    `;
    

    this.zoom = document.getElementById("zoom6");

    zoom.style.transform = "scale(1.1)";
    zoom.style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";

}

function mouseLeaveimg6() {

    this.disp = document.getElementsByClassName("p6");

    this.disp[0].style.opacity = '0';

    this.zoom = document.getElementById("zoom6");

    zoom.style.transform = "scale(1.0)";
    zoom.style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";

}

function mouseEnterimg7() {

    this.disp = document.getElementsByClassName("p7");

    this.disp[0].style.opacity = "1";
    this.disp[0].style.color = "white";
    this.disp[0].innerHTML = `JavaScript é uma linguagem de programação de alto<br>
    nível criada,a princípio, para ser executada em<br>
    navegadores e manipular comportamentos de páginas web.`;
    

    this.zoom = document.getElementById("zoom7");

    zoom.style.transform = "scale(1.1)";
    zoom.style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";

}

function mouseLeaveimg7() {

    this.disp = document.getElementsByClassName("p7");

    this.disp[0].style.opacity = '0';

    this.zoom = document.getElementById("zoom7");

    zoom.style.transform = "scale(1.0)";
    zoom.style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";

}

function mouseEnterimg8() {

    this.disp = document.getElementsByClassName("p8");

    this.disp[0].style.opacity = "1";
    this.disp[0].style.color = "white";
    this.disp[0].innerHTML = `A linguagem PHP é hoje a mais utilizada quando<br>
    nos referimos a aplicações web e cerca de 80%<br>
    dos sites da internet são desenvolvidos com ele.`;
    

    this.zoom = document.getElementById("zoom8");

    zoom.style.transform = "scale(1.1)";
    zoom.style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";

}

function mouseLeaveimg8() {

    this.disp = document.getElementsByClassName("p8");

    this.disp[0].style.opacity = '0';

    this.zoom = document.getElementById("zoom8");

    zoom.style.transform = "scale(1.0)";
    zoom.style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";

}


function mouseEnterimg9() {

    this.disp = document.getElementsByClassName("p9");

    this.disp[0].style.opacity = "1";
    this.disp[0].style.color = "white";
    this.disp[0].innerHTML = `O MySQL é um sistema gerenciador de banco de dados<br>
    relacional de código aberto usado na maioria das<br>
    aplicações gratuitas para gerir suas bases de dados.`;
    

    this.zoom = document.getElementById("zoom9");

    zoom.style.transform = "scale(1.1)";
    zoom.style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";

}

function mouseLeaveimg9() {

    this.disp = document.getElementsByClassName("p9");

    this.disp[0].style.opacity = '0';

    this.zoom = document.getElementById("zoom9");

    zoom.style.transform = "scale(1.0)";
    zoom.style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";

}



// Habilidades Interação End

