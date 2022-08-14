// Linhas Animadas Start

function mouseEnter8() {

    const line = document.getElementById("linenav3");
    line.style.width = "125px";
    line.style.transition = "all 1s";

}

function mouseLeave8() {

    const line = document.getElementById("linenav3");
    line.style.width = "0px";

}

function mouseEnter7() {

    const line = document.getElementById("linenav2");
    line.style.width = "113px";
    line.style.transition = "all 1s";

}

function mouseLeave7() {

    const line = document.getElementById("linenav2");
    line.style.width = "0px";

}

const menu2 = document.querySelectorAll(".nav-menu a");

menu2.forEach(item => {
    item.addEventListener('click', Scrollclick1);
});

function getScroll(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

function Scrollclick1(event){ 
    event.preventDefault();
    const to = getScroll(event.target) - 100;
    ScrolltoP(to);
}

function ScrolltoP(to) {
    window.scroll({
        top: to,
        behavior: "smooth",
    });
}

function mouseEnter6() {

    const line = document.getElementById("linenav1");
    line.style.width = "64px";
    line.style.transition = "all 1s";

}

function mouseLeave6() {

    const line = document.getElementById("linenav1");
    line.style.width = "0px";

}


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

    const shiro = document.getElementsByClassName("SHIROEDITS");
    shiro[0].style.transform = "scale(1.05)";
    shiro[0].style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";

    var img = document.getElementById("img2");
    img.style.transform = "scale(1.05)";
    img.style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";
    img.setAttribute('src', 'images/perfil2.png');

}

function mouseLeaveIMG2() {

    const shiro = document.getElementsByClassName("SHIROEDITS");
    shiro[0].style.transform = "scale(1.00)";
    shiro[0].style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";

    var img = document.getElementById("img2");
    img.style.transform = "scale(1.00)";
    img.style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";
    img.setAttribute('src', 'images/perfil.png');
}


// Perfil End

// Habilidades Interação Start

function mousezoom1enter() {

    const zoom = document.getElementById("zoom1");
    zoom.style.transform = "scale(1.1)";
    zoom.style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";

    const p = document.getElementsByClassName("p1");
    p[0].style.display = "block";

    const h = document.getElementsByClassName("h1");
    h[0].style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";
    h[0].style.paddingBottom = "50px";

    const namef = document.getElementsByClassName("namef1");
    namef[0].style.transition = "all 2s cubic-bezier(.39,.18,0,.85)";
    namef[0].style.opacity = "1";
    namef[0].style.position = "relative";
    namef[0].style.top = "-50px";

}

function mousezoom1leave() {

    const zoom = document.getElementById("zoom1");
    zoom.style.transform = "scale(1.0)";
    zoom.style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";

    const h = document.getElementsByClassName("h1");
    h[0].style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";
    h[0].style.paddingBottom = "20px";

    const namef = document.getElementsByClassName("namef1");
    namef[0].style.transition = "all 0.5s cubic-bezier(.39,.18,0,.85)";
    namef[0].style.opacity = "0";
    namef[0].style.position = "relative";
    namef[0].style.top = "-50px";

}

function mouseclick1() {

    const close = document.getElementById("close");
    close.style.transition = "all 5s cubic-bezier(.39,.18,0,.85)";
    close.style.opacity = "1";
    close.style.cursor = "Pointer";

    const closeanimate = document.getElementsByClassName("closejustify");
    closeanimate[0].style.transition = "transform 2s cubic-bezier(.39,.18,0,.85)";
    closeanimate[0].style.transform = "scale(1.5) rotate(20deg)";
    closeanimate[0].style.margin = "30px";

    if (closeanimate[0].style.transform = "scale(1.5)") {
        closeanimate[0].style.transition = "left 2s cubic-bezier(.49,-0.57,.63,.94)";
        closeanimate[0].style.left = "0px";
    }
    if (closeanimate[0].style.transform = "scale(1.5) rotate(20deg)") {
        closeanimate[0].style.transition = "all 2s ease";
        closeanimate[0].style.transform = "rotate(360deg)";
    }

    const p = document.getElementsByClassName("p1");
    p[0].style.transition = "all 2.5s cubic-bezier(.39,.18,0,.85)";
    p[0].innerHTML = `<div class="mark p1size">
        TEMPO DE USO : 1 ano e meio<br>
        Uso After Effects para fazer edições de video com 3D,<br> nele sou experiente em fazer animações 3D e 2D<br>
    </div>
    `;
    p[0].style.fontSize = "20px";
    p[0].style.top = "0px";
    p[0].style.opacity = "1";

    const click = document.getElementsByClassName("bloco");
    click[0].style.transition = "height 1s cubic-bezier(.39,.18,0,.85)";
    click[0].style.height = "225px";

}

function mousezoom2enter() {

    const zoom = document.getElementById("zoom2");
    zoom.style.transform = "scale(1.1)";
    zoom.style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";

    const p = document.getElementsByClassName("p2");
    p[0].style.display = "block";

    const h = document.getElementsByClassName("h2");
    h[0].style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";
    h[0].style.paddingBottom = "50px";

    const namef = document.getElementsByClassName("namef2");
    namef[0].style.transition = "all 2s cubic-bezier(.39,.18,0,.85)";
    namef[0].style.opacity = "1";
    namef[0].style.position = "relative";
    namef[0].style.left = "15px";
    namef[0].style.top = "-45px";


}

function mousezoom2leave() {

    const zoom = document.getElementById("zoom2");
    zoom.style.transform = "scale(1.0)";
    zoom.style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";

    const h = document.getElementsByClassName("h2");
    h[0].style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";
    h[0].style.paddingBottom = "20px";

    const namef = document.getElementsByClassName("namef2");
    namef[0].style.transition = "all 0.5s cubic-bezier(.39,.18,0,.85)";
    namef[0].style.opacity = "0";
    namef[0].style.position = "relative";
    namef[0].style.left = "15px";
    namef[0].style.top = "-45px";

}

function mouseclick2() {

    const p = document.getElementsByClassName("p2");

    p[0].style.transition = "all 2.5s cubic-bezier(.39,.18,0,.85)";
    p[0].innerHTML = `<div class="mark p2size">
        TEMPO DE USO : 1 ano e meio<br>
        Uso o Photoshop para fazer alguns retoques nas edições.
    </div>
    `;
    p[0].style.fontSize = "20px";
    p[0].style.top = "0px";
    p[0].style.opacity = "1";

    const close = document.getElementById("close");
    close.style.transition = "all 5s cubic-bezier(.39,.18,0,.85)";
    close.style.opacity = "1";
    close.style.cursor = "Pointer";

    const closeanimate = document.getElementsByClassName("closejustify");
    closeanimate[0].style.transition = "transform 1s cubic-bezier(.39,.18,0,.85)";
    closeanimate[0].style.transform = "rotate(20deg)";
    closeanimate[0].style.margin = "30px";

    if (closeanimate[0].style.transform = "scale(1.5)") {
        closeanimate[0].style.transition = "left 2s cubic-bezier(.49,-0.57,.63,.94)";
        closeanimate[0].style.left = "0px";
    }
    if (closeanimate[0].style.transform = "scale(1.5) rotate(20deg)") {
        closeanimate[0].style.transition = "all 2s ease";
        closeanimate[0].style.transform = "rotate(360deg)";
    }



    const click = document.getElementsByClassName("bloco");
    click[0].style.transition = "height 1s cubic-bezier(.39,.18,0,.85)";
    click[0].style.height = "200px";

}

function mousezoom3enter() {

    const zoom = document.getElementById("zoom3");
    zoom.style.transform = "scale(1.1)";
    zoom.style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";

    const p = document.getElementsByClassName("p3");
    p[0].style.display = "block";

    const h = document.getElementsByClassName("h3");
    h[0].style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";
    h[0].style.paddingBottom = "50px";

    const namef = document.getElementsByClassName("namef3");
    namef[0].style.transition = "all 2s cubic-bezier(.39,.18,0,.85)";
    namef[0].style.opacity = "1";
    namef[0].style.position = "relative";
    namef[0].style.left = "15px";
    namef[0].style.top = "-45px";

}

function mousezoom3leave() {

    const zoom = document.getElementById("zoom3");
    zoom.style.transform = "scale(1.0)";
    zoom.style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";

    const h = document.getElementsByClassName("h3");
    h[0].style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";
    h[0].style.paddingBottom = "20px";

    const namef = document.getElementsByClassName("namef3");
    namef[0].style.transition = "all 0.5s cubic-bezier(.39,.18,0,.85)";
    namef[0].style.opacity = "0";
    namef[0].style.position = "relative";
    namef[0].style.left = "15px";
    namef[0].style.top = "-47px";

}

function mouseclick3() {

    const p1 = document.getElementsByClassName("p3");
    p1[0].style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";
    p1[0].style.opacity = "0";

    const p = document.getElementsByClassName("p3");

    p[0].style.transition = "all 2.5s cubic-bezier(.39,.18,0,.85)";
    p[0].innerHTML = `<div class="mark p3size">
        TEMPO DE USO : 2 anos<br>
        Uso Vegas PRO para fazer edições de video simples<br>
        hoje em dia utilizo mais o after effects para<br>
        editar, mas ainda tenho experiencia nesse aplicativo.
    </div>
    `;
    p[0].style.fontSize = "20px";
    p[0].style.top = "0px";
    p[0].style.opacity = "1";

    const close = document.getElementById("close");
    close.style.transition = "all 5s cubic-bezier(.39,.18,0,.85)";
    close.style.opacity = "1";
    close.style.cursor = "Pointer";

    const closeanimate = document.getElementsByClassName("closejustify");
    closeanimate[0].style.transition = "transform 1s cubic-bezier(.39,.18,0,.85)";
    closeanimate[0].style.transform = "rotate(20deg)";
    closeanimate[0].style.margin = "30px";

    if (closeanimate[0].style.transform = "scale(1.5)") {
        closeanimate[0].style.transition = "left 2s cubic-bezier(.49,-0.57,.63,.94)";
        closeanimate[0].style.left = "0px";
    }
    if (closeanimate[0].style.transform = "scale(1.5) rotate(20deg)") {
        closeanimate[0].style.transition = "all 2s ease";
        closeanimate[0].style.transform = "rotate(360deg)";
    }



    const click = document.getElementsByClassName("bloco");
    click[0].style.transition = "height 1s cubic-bezier(.39,.18,0,.85)";
    click[0].style.height = "245px";

}

function mousezoom4enter() {

    const zoom = document.getElementById("zoom4");
    zoom.style.transform = "scale(1.1)";
    zoom.style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";

    const p = document.getElementsByClassName("p4");
    p[0].style.display = "block";

    const h = document.getElementsByClassName("h4");
    h[0].style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";
    h[0].style.paddingBottom = "50px";

    const namef = document.getElementsByClassName("namef4");
    namef[0].style.transition = "all 2s cubic-bezier(.39,.18,0,.85)";
    namef[0].style.opacity = "1";
    namef[0].style.position = "relative";
    namef[0].style.top = "-50px";

}

function mousezoom4leave() {

    const zoom = document.getElementById("zoom4");
    zoom.style.transform = "scale(1.0)";
    zoom.style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";

    const h = document.getElementsByClassName("h4");
    h[0].style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";
    h[0].style.paddingBottom = "20px";

    const namef = document.getElementsByClassName("namef4");
    namef[0].style.transition = "all 0.5s cubic-bezier(.39,.18,0,.85)";
    namef[0].style.opacity = "0";
    namef[0].style.position = "relative";
    namef[0].style.top = "-50px";

}

function mouseclick4() {

    const p1 = document.getElementsByClassName("p4");
    p1[0].style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";
    p1[0].style.opacity = "0";

    const p = document.getElementsByClassName("p4");

    p[0].style.transition = "all 2.5s cubic-bezier(.39,.18,0,.85)";
    p[0].innerHTML = `<div class="mark p4size">
        TEMPO DE USO : 1 ano<br>
        Uso o FL Studio para fazer com que a música<br>
        fique mais viva.
    </div>
    `;
    p[0].style.fontSize = "20px";
    p[0].style.top = "0px";
    p[0].style.opacity = "1";

    const close = document.getElementById("close");
    close.style.transition = "all 5s cubic-bezier(.39,.18,0,.85)";
    close.style.opacity = "1";
    close.style.cursor = "Pointer";

    const closeanimate = document.getElementsByClassName("closejustify");
    closeanimate[0].style.transition = "transform 1s cubic-bezier(.39,.18,0,.85)";
    closeanimate[0].style.transform = "rotate(20deg)";
    closeanimate[0].style.margin = "30px";

    if (closeanimate[0].style.transform = "scale(1.5)") {
        closeanimate[0].style.transition = "left 2s cubic-bezier(.49,-0.57,.63,.94)";
        closeanimate[0].style.left = "0px";
    }
    if (closeanimate[0].style.transform = "scale(1.5) rotate(20deg)") {
        closeanimate[0].style.transition = "all 2s ease";
        closeanimate[0].style.transform = "rotate(360deg)";
    }



    const click = document.getElementsByClassName("bloco");
    click[0].style.transition = "height 1s cubic-bezier(.39,.18,0,.85)";
    click[0].style.height = "215px";

}

function mousezoom5enter() {

    const zoom = document.getElementById("zoom5");
    zoom.style.transform = "scale(1.1)";
    zoom.style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";

    const p = document.getElementsByClassName("p5");
    p[0].style.display = "block";

    const h = document.getElementsByClassName("h5");
    h[0].style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";
    h[0].style.paddingBottom = "50px";

    const namef = document.getElementsByClassName("namef5");
    namef[0].style.transition = "all 2s cubic-bezier(.39,.18,0,.85)";
    namef[0].style.opacity = "1";
    namef[0].style.position = "relative";
    namef[0].style.left = "15px";
    namef[0].style.top = "-45px";

}

function mousezoom5leave() {

    const zoom = document.getElementById("zoom5");
    zoom.style.transform = "scale(1.0)";
    zoom.style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";

    const h = document.getElementsByClassName("h5");
    h[0].style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";
    h[0].style.paddingBottom = "20px";

    const namef = document.getElementsByClassName("namef5");
    namef[0].style.transition = "all 0.5s cubic-bezier(.39,.18,0,.85)";
    namef[0].style.opacity = "0";
    namef[0].style.position = "relative";
    namef[0].style.left = "15px";
    namef[0].style.top = "-45px";


}

function mouseclick5() {

    const p1 = document.getElementsByClassName("p5");
    p1[0].style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";
    p1[0].style.opacity = "0";

    const p = document.getElementsByClassName("p5");

    p[0].style.transition = "all 2.5s cubic-bezier(.39,.18,0,.85)";
    p[0].innerHTML = `<div class="mark p5size">
        TEMPO DE EXPERIÊNCIA : 1 ano<br>
        Aprendi a mexer com HTML no YOUTUBE com o<br>
        canal <a href="https://www.youtube.com/watch?v=Ejkb_YpuHWs&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n">Curso em Video</a> do professor Gustavo<br>
        Guanabara. HTML é uma das linguagens que<br>
        utilizamos para desenvolver websites.
    </div>
    
    `;
    p[0].style.fontSize = "20px";
    p[0].style.top = "0px";
    p[0].style.opacity = "1";

    const close = document.getElementById("close");
    close.style.transition = "all 5s cubic-bezier(.39,.18,0,.85)";
    close.style.opacity = "1";
    close.style.cursor = "Pointer";

    const closeanimate = document.getElementsByClassName("closejustify");
    closeanimate[0].style.transition = "transform 1s cubic-bezier(.39,.18,0,.85)";
    closeanimate[0].style.transform = "rotate(20deg)";
    closeanimate[0].style.margin = "30px";

    if (closeanimate[0].style.transform = "scale(1.5)") {
        closeanimate[0].style.transition = "left 2s cubic-bezier(.49,-0.57,.63,.94)";
        closeanimate[0].style.left = "0px";
    }
    if (closeanimate[0].style.transform = "scale(1.5) rotate(20deg)") {
        closeanimate[0].style.transition = "all 2s ease";
        closeanimate[0].style.transform = "rotate(360deg)";
    }



    const click = document.getElementsByClassName("bloco");
    click[0].style.transition = "height 1s cubic-bezier(.39,.18,0,.85)";
    click[0].style.height = "280px";

}

function mousezoom6enter() {

    const zoom = document.getElementById("zoom6");
    zoom.style.transform = "scale(1.1)";
    zoom.style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";

    const p = document.getElementsByClassName("p6");
    p[0].style.display = "block";

    const h = document.getElementsByClassName("h6");
    h[0].style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";
    h[0].style.paddingBottom = "50px";

    const namef = document.getElementsByClassName("namef6");
    namef[0].style.transition = "all 2s cubic-bezier(.39,.18,0,.85)";
    namef[0].style.opacity = "1";
    namef[0].style.position = "relative";
    namef[0].style.left = "15px";
    namef[0].style.top = "-45px";

}

function mousezoom6leave() {

    const zoom = document.getElementById("zoom6");
    zoom.style.transform = "scale(1.0)";
    zoom.style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";

    const h = document.getElementsByClassName("h6");
    h[0].style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";
    h[0].style.paddingBottom = "20px";

    const namef = document.getElementsByClassName("namef6");
    namef[0].style.transition = "all 0.5s cubic-bezier(.39,.18,0,.85)";
    namef[0].style.opacity = "0";
    namef[0].style.position = "relative";
    namef[0].style.left = "15px";
    namef[0].style.top = "-47px";

}

function mouseclick6() {

    const p1 = document.getElementsByClassName("p6");
    p1[0].style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";
    p1[0].style.opacity = "0";

    const p = document.getElementsByClassName("p6");

    p[0].style.transition = "all 2.5s cubic-bezier(.39,.18,0,.85)";
    p[0].innerHTML = `<div class="mark p6size">
        TEMPO DE EXPERIÊNCIA : 1 ano<br>
        Aprendi a mexer com CSS no YOUTUBE com o<br>
        canal <a href="https://www.youtube.com/watch?v=Ejkb_YpuHWs&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n">Curso em Video</a> do professor Gustavo<br>
        Guanabara. O CSS ajuda a editar, alinhar, remover<br>
        e trabalhar no espaço entre elementos de uma página,<br>
        resumindo, é o Designer do site.
    </div>
    `;
    
    p[0].style.fontSize = "20px";
    p[0].style.top = "0px";
    p[0].style.opacity = "1";

    const close = document.getElementById("close");
    close.style.transition = "all 5s cubic-bezier(.39,.18,0,.85)";
    close.style.opacity = "1";
    close.style.cursor = "Pointer";

    const closeanimate = document.getElementsByClassName("closejustify");
    closeanimate[0].style.transition = "transform 1s cubic-bezier(.39,.18,0,.85)";
    closeanimate[0].style.transform = "rotate(20deg)";
    closeanimate[0].style.margin = "30px";

    if (closeanimate[0].style.transform = "scale(1.5)") {
        closeanimate[0].style.transition = "left 2s cubic-bezier(.49,-0.57,.63,.94)";
        closeanimate[0].style.left = "0px";
    }
    if (closeanimate[0].style.transform = "scale(1.5) rotate(20deg)") {
        closeanimate[0].style.transition = "all 2s ease";
        closeanimate[0].style.transform = "rotate(360deg)";
    }



    const click = document.getElementsByClassName("bloco");
    click[0].style.transition = "height 1s cubic-bezier(.39,.18,0,.85)";
    click[0].style.height = "300px";

}

function mousezoom7enter() {

    const zoom = document.getElementById("zoom7");
    zoom.style.transform = "scale(1.1)";
    zoom.style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";

    const p = document.getElementsByClassName("p7");
    p[0].style.display = "block";

    const h = document.getElementsByClassName("h7");
    h[0].style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";
    h[0].style.paddingBottom = "50px";

    const namef = document.getElementsByClassName("namef7");
    namef[0].style.transition = "all 2s cubic-bezier(.39,.18,0,.85)";
    namef[0].style.opacity = "1";
    namef[0].style.position = "relative";
    namef[0].style.top = "-50px";

}

function mousezoom7leave() {

    const zoom = document.getElementById("zoom7");
    zoom.style.transform = "scale(1.0)";
    zoom.style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";

    const h = document.getElementsByClassName("h7");
    h[0].style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";
    h[0].style.paddingBottom = "20px";

    const namef = document.getElementsByClassName("namef7");
    namef[0].style.transition = "all 0.5s cubic-bezier(.39,.18,0,.85)";
    namef[0].style.opacity = "0";
    namef[0].style.position = "relative";
    namef[0].style.top = "-50px";

}

function mouseclick7() {

    const p1 = document.getElementsByClassName("p7");
    p1[0].style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";
    p1[0].style.opacity = "0";

    const p = document.getElementsByClassName("p7");

    p[0].style.transition = "all 2.5s cubic-bezier(.39,.18,0,.85)";
    p[0].innerHTML = `<div class="mark p7size">
        TEMPO DE EXPERIÊNCIA : 7 meses<br>
        Uso o Javascript para fazer animações no site<br>
        como esse abre e fecha que fiz em javascript das<br>
        habilidades que eu tenho.
    </div>
    `;
    p[0].style.fontSize = "20px";
    p[0].style.top = "0px";
    p[0].style.opacity = "1";

    const close = document.getElementById("close");
    close.style.transition = "all 5s cubic-bezier(.39,.18,0,.85)";
    close.style.opacity = "1";
    close.style.cursor = "Pointer";

    const closeanimate = document.getElementsByClassName("closejustify");
    closeanimate[0].style.transition = "transform 1s cubic-bezier(.39,.18,0,.85)";
    closeanimate[0].style.transform = "rotate(20deg)";
    closeanimate[0].style.margin = "30px";

    if (closeanimate[0].style.transform = "scale(1.5)") {
        closeanimate[0].style.transition = "left 2s cubic-bezier(.49,-0.57,.63,.94)";
        closeanimate[0].style.left = "0px";
    }
    if (closeanimate[0].style.transform = "scale(1.5) rotate(20deg)") {
        closeanimate[0].style.transition = "all 2s ease";
        closeanimate[0].style.transform = "rotate(360deg)";
    }



    const click = document.getElementsByClassName("bloco");
    click[0].style.transition = "height 1s cubic-bezier(.39,.18,0,.85)";
    click[0].style.height = "250px";

}

function mousezoom8enter() {

    const zoom = document.getElementById("zoom8");
    zoom.style.transform = "scale(1.1)";
    zoom.style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";

    const p = document.getElementsByClassName("p7");
    p[0].style.display = "block";

    const h = document.getElementsByClassName("h8");
    h[0].style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";
    h[0].style.paddingBottom = "50px";

    const namef = document.getElementsByClassName("namef8");
    namef[0].style.transition = "all 2s cubic-bezier(.39,.18,0,.85)";
    namef[0].style.opacity = "1";
    namef[0].style.position = "relative";
    namef[0].style.left = "15px";
    namef[0].style.top = "-45px";

}

function mousezoom8leave() {

    const zoom = document.getElementById("zoom8");
    zoom.style.transform = "scale(1.0)";
    zoom.style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";
    
    const h = document.getElementsByClassName("h8");
    h[0].style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";
    h[0].style.paddingBottom = "20px";

    const namef = document.getElementsByClassName("namef8");
    namef[0].style.transition = "all 0.5s cubic-bezier(.39,.18,0,.85)";
    namef[0].style.opacity = "0";
    namef[0].style.position = "relative";
    namef[0].style.left = "15px";
    namef[0].style.top = "-45px";
}

function mouseclick8() {

    const p1 = document.getElementsByClassName("p8");
    p1[0].style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";
    p1[0].style.opacity = "0";

    const p = document.getElementsByClassName("p8");

    p[0].style.transition = "all 2.5s cubic-bezier(.39,.18,0,.85)";
    p[0].innerHTML = `<div class="mark p8size">
        TEMPO DE EXPERIÊNCIA : 5 meses<br>
        Utilizo PHP para fazer Sistemas de Login e Cadastro,<br>
        Ligando banco de dados MySQL.
    </div>`;
    p[0].style.fontSize = "20px";
    p[0].style.top = "0px";
    p[0].style.opacity = "1";

    const close = document.getElementById("close");
    close.style.transition = "all 5s cubic-bezier(.39,.18,0,.85)";
    close.style.opacity = "1";
    close.style.cursor = "Pointer";

    const closeanimate = document.getElementsByClassName("closejustify");
    closeanimate[0].style.transition = "transform 1s cubic-bezier(.39,.18,0,.85)";
    closeanimate[0].style.transform = "rotate(20deg)";
    closeanimate[0].style.margin = "30px";

    if (closeanimate[0].style.transform = "scale(1.5)") {
        closeanimate[0].style.transition = "left 2s cubic-bezier(.49,-0.57,.63,.94)";
        closeanimate[0].style.left = "0px";
    }
    if (closeanimate[0].style.transform = "scale(1.5) rotate(20deg)") {
        closeanimate[0].style.transition = "all 2s ease";
        closeanimate[0].style.transform = "rotate(360deg)";
    }



    const click = document.getElementsByClassName("bloco");
    click[0].style.transition = "height 1s cubic-bezier(.39,.18,0,.85)";
    click[0].style.height = "220px";

}

function mousezoom9enter() {

    const zoom = document.getElementById("zoom9");
    zoom.style.transform = "scale(1.1)";
    zoom.style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";

    const p = document.getElementsByClassName("p7");
    p[0].style.display = "block";

    const h = document.getElementsByClassName("h9");
    h[0].style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";
    h[0].style.paddingBottom = "50px";

    const namef = document.getElementsByClassName("namef9");
    namef[0].style.transition = "all 2s cubic-bezier(.39,.18,0,.85)";
    namef[0].style.opacity = "1";
    namef[0].style.position = "relative";
    namef[0].style.left = "15px";
    namef[0].style.top = "-45px";

}

function mousezoom9leave() {

    const zoom = document.getElementById("zoom9");
    zoom.style.transform = "scale(1.0)";
    zoom.style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";

    const h = document.getElementsByClassName("h9");
    h[0].style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";
    h[0].style.paddingBottom = "20px";

    const namef = document.getElementsByClassName("namef9");
    namef[0].style.transition = "all 0.5s cubic-bezier(.39,.18,0,.85)";
    namef[0].style.opacity = "0";
    namef[0].style.position = "relative";
    namef[0].style.left = "15px";
    namef[0].style.top = "-47px";

}

function mouseclick9() {

    const p1 = document.getElementsByClassName("p9");
    p1[0].style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";
    p1[0].style.opacity = "0";

    const p = document.getElementsByClassName("p8");

    p[0].style.transition = "all 2.5s cubic-bezier(.39,.18,0,.85)";
    p[0].innerHTML = `<div class="mark p9size">
        TEMPO DE EXPERIÊNCIA : 5 meses<br>
        Aprendi a usar o MySQL com o canal <a href="https://www.youtube.com/watch?v=Ofktsne-utM&list=PLHz_AreHm4dkBs-795Dsgvau_ekxg8g1r">Curso em Video</a><br>
        ele serve para armazenar os dados de seu site ou da sua<br>
        empresa, de forma segura e organizada.
    </div>`;
    p[0].style.fontSize = "20px";
    p[0].style.top = "0px";
    p[0].style.opacity = "1";

    const close = document.getElementById("close");
    close.style.transition = "all 5s cubic-bezier(.39,.18,0,.85)";
    close.style.opacity = "1";
    close.style.cursor = "Pointer";

    const closeanimate = document.getElementsByClassName("closejustify");
    closeanimate[0].style.transition = "transform 1s cubic-bezier(.39,.18,0,.85)";
    closeanimate[0].style.transform = "rotate(20deg)";
    closeanimate[0].style.margin = "30px";

    if (closeanimate[0].style.transform = "scale(1.5)") {
        closeanimate[0].style.transition = "left 2s cubic-bezier(.49,-0.57,.63,.94)";
        closeanimate[0].style.left = "0px";
    }
    if (closeanimate[0].style.transform = "scale(1.5) rotate(20deg)") {
        closeanimate[0].style.transition = "all 2s ease";
        closeanimate[0].style.transform = "rotate(360deg)";
    }



    const click = document.getElementsByClassName("bloco");
    click[0].style.transition = "height 1s cubic-bezier(.39,.18,0,.85)";
    click[0].style.height = "250px";

}




// Habilidades Interação End

// Close X Start

function mouseclickX() {

    const click = document.getElementsByClassName("bloco");
    click[0].style.transition = "all 2s cubic-bezier(.39,.18,0,.85)";
    click[0].style.height = "0px";

    const p1 = document.getElementsByClassName("p1");
    p1[0].style.transition = "all 0.6s cubic-bezier(.39,.18,0,.85)";
    p1[0].style.opacity = "0";
    p1[0].style.top = "-50px";
    p1[0].style.cursor = "Default";

    const p2 = document.getElementsByClassName("p2");
    p2[0].style.transition = "all 0.6s cubic-bezier(.39,.18,0,.85)";
    p2[0].style.opacity = "0";
    p2[0].style.top = "-50px";
    p2[0].style.cursor = "Default";
    

    const p3 = document.getElementsByClassName("p3");
    p3[0].style.transition = "all 0.6s cubic-bezier(.39,.18,0,.85)";
    p3[0].style.opacity = "0";
    p3[0].style.top = "-60px";
    p3[0].style.cursor = "Default";
    

    const p4 = document.getElementsByClassName("p4");
    p4[0].style.transition = "all 0.6s cubic-bezier(.39,.18,0,.85)";
    p4[0].style.opacity = "0";
    p4[0].style.top = "-50px";
    p4[0].style.cursor = "Default";

    const p5 = document.getElementsByClassName("p5");
    p5[0].style.transition = "all 0.6s cubic-bezier(.39,.18,0,.85)";
    p5[0].style.opacity = "0";
    p5[0].style.top = "-80px";
    p5[0].style.cursor = "Default";

    const p6 = document.getElementsByClassName("p6");
    p6[0].style.transition = "all 0.2s cubic-bezier(.39,.18,0,.85)";
    p6[0].style.opacity = "0";
    setTimeout(() => {
        p6[0].style.top = "-110px";
    });
    p6[0].style.cursor = "Default";

    const p7 = document.getElementsByClassName("p7");
    p7[0].style.transition = "all 0.5s cubic-bezier(.39,.18,0,.85)";
    p7[0].style.opacity = "0";
    p7[0].style.top = "-50px";
    p7[0].style.cursor = "Default";

    const p8 = document.getElementsByClassName("p8");
    p8[0].style.transition = "all 0.5s cubic-bezier(.39,.18,0,.85)";
    p8[0].style.opacity = "0";
    p8[0].style.top = "-50px";
    p8[0].style.cursor = "Default";

    const p9 = document.getElementsByClassName("p9");
    p9[0].style.transition = "all 0.5s cubic-bezier(.39,.18,0,.85)";
    p9[0].style.opacity = "0";
    p9[0].style.top = "-50px";
    p9[0].style.cursor = "Default";

    const close = document.getElementById("close");
    close.style.transition = "all 1s cubic-bezier(.39,.18,0,.85)";
    close.style.opacity = "0";
    close.style.cursor = "Default";

    const closeanimate = document.getElementsByClassName("closejustify");
    closeanimate[0].style.transition = "transform 2s cubic-bezier(.39,.18,0,.85)";
    closeanimate[0].style.transform = "rotate(0deg)";

}

// Close X End




