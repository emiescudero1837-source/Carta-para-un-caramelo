const inicio = document.getElementById("inicio");
const sobre = document.getElementById("sobre");
const carta = document.getElementById("carta");
const foto = document.getElementById("foto");
const final = document.getElementById("final");

document.getElementById("corazon").onclick = () => {
    inicio.classList.add("oculto");
    sobre.classList.remove("oculto");
}

document.getElementById("envelope").onclick = () => {
    sobre.classList.add("oculto");
    carta.classList.remove("oculto");
}

document.getElementById("continuar").onclick = () => {
    carta.classList.add("oculto");
    foto.classList.remove("oculto");
}

document.getElementById("acepto").onclick = () => {
    foto.classList.add("oculto");
    final.classList.remove("oculto");

    lluviaCorazones();
}

function lluviaCorazones(){

    for(let i=0;i<120;i++){

        const corazon=document.createElement("div");

        corazon.innerHTML="❤️";

        corazon.className="petalo";

        corazon.style.left=Math.random()*100+"vw";

        corazon.style.animationDuration=(Math.random()*3+3)+"s";

        corazon.style.fontSize=(20+Math.random()*20)+"px";

        document.getElementById("petalos").appendChild(corazon);

        setTimeout(()=>{
            corazon.remove();
        },6000);

    }

}
const musica = document.getElementById("musica");
const musicaBtn = document.getElementById("musicaBtn");

musicaBtn.addEventListener("click", () => {

    if(musica.paused){

        musica.play();

        musicaBtn.innerHTML="⏸️ Pausar música";

    }else{

        musica.pause();

        musicaBtn.innerHTML="🎶 Tocame antes de abrir el sobre ❤️";

    }
