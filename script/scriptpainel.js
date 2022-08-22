document.getElementById("identify").addEventListener("mouseenter", MouseEnter);
document.getElementById("identify").addEventListener("mouseout", MouseOut);

function MouseEnter() {
    const line = document.getElementById("line");
    line.style.width = "100%";
    line.style.margin = "0px auto";
}

function MouseOut() {
    
    const line = document.getElementById("line");
    line.style.width = "0%";
}

