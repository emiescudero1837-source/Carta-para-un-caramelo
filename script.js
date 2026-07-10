const inicio = document.getElementById("inicio");
const sobre = document.querySelector('[identificación="sobre"]');
const carta = document.querySelector('[identificación="carta"]');
const foto = document.querySelector('[identificación="foto"]');
const final = document.querySelector('[identificación="final"]');

// Primer paso: clic al corazón
const corazonBtn = document.getElementById("corazon");
if(corazonBtn){
    corazonBtn.onclick = () => {
        if(inicio) inicio.classList.add("oculto");
        if(sobre) sobre.classList.remove("oculto");
    }
}

// Segundo paso: clic al sobre e inicia la animación
const sobreBtn = document.querySelector('[identificación="sobre"] div');
if(sobreBtn){
    sobreBtn.onclick = () => {
        if(sobre) sobre.classList.add("oculto");
        if(carta) carta.classList.remove("oculto");

        // Iniciamos la animación de escritura dentro de <pag>
        fetch('mensaje.txt')
            .then(response => response.text())
            .then(text => {
                new Typewriter('#carta pag', {
                    strings: text,
                    autoStart: true,
                    cursor: '|', 
                    delay: 50
                });
            })
            .catch(err => console.error("Error cargando mensaje.txt:", err));
    }
}

// Tercer paso: clic en continuar
const continuarBtn = document.querySelector('[identificación="continuar"]');
if(continuarBtn){
    continuarBtn.onclick = () => {
        if(carta) carta.classList.add("oculto");
        if(foto) foto.classList.remove("oculto");
    }
}

// Cuarto paso: clic en acepto
const aceptoBtn = document.getElementById("acepto");
if(aceptoBtn){
    aceptoBtn.onclick = () => {
        if(foto) foto.classList.add("oculto");
        if(final) final.classList.remove("oculto");
        lluviaCorazones();
    }
}

function lluviaCorazones(){
    for(let i=0;i<120;i++){
        const corazon=document.createElement("div");
        corazon.innerHTML="❤️";
        corazon.className="petalo";
        corazon.style.left=Math.random()*100+"vw";
        corazon.style.animationDuration=(Math.random()*3+3)+"s";
        corazon.style.fontSize=(20+Math.random()*20)+"px";
        const contenedor = document.getElementById("petalos");
        if(contenedor) contenedor.appendChild(corazon);

        setTimeout(()=>{
            corazon.remove();
        },6000);
    }
}

const musica = document.getElementById("musica");
const musicaBtn = document.getElementById("musicaBtn");

if(musicaBtn && musica){
    musicaBtn.addEventListener("click", () => {
        if(musica.paused){
            musica.play();
            musicaBtn.innerHTML="⏸️ Pausar música";
        }else{
            musica.pause();
            musicaBtn.innerHTML="🎶 Tocame antes de abrir el sobre ❤️";
        }
    });
}
