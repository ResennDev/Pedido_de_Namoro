const carta=document.getElementById("carta");
const conteudo=document.getElementById("conteudo");
const nomeEl=document.getElementById("nome");
const nao=document.getElementById("nao");
const sim=document.getElementById("sim");
const overlay=document.getElementById("overlay");
const musica=document.getElementById("musica");

carta.onclick=()=>{
    carta.style.display="none";
    conteudo.style.display="block";
    //AQUI VOCE VAI ESCREVER O NOME DA SUA PESSOA AMADA
    escreverNome("NOME AQUI 💖");

    musica.volume=0.4;
    musica.currentTime=0;
    musica.play().catch(()=>{});
};

function escreverNome(texto){
    let i=0;
    const interval=setInterval(()=>{
        nomeEl.innerHTML+=texto[i];
        i++;
        if(i>=texto.length)clearInterval(interval);
    },70);
}

nao.addEventListener("mouseover",()=>{
    nao.style.top=Math.random()*70+"%";
    nao.style.left=Math.random()*70+"%";
});

sim.addEventListener("click",()=>{

    overlay.style.opacity=1;
    overlay.style.pointerEvents="all";

    setInterval(()=>{
        const h=document.createElement("div");
        h.classList.add("heart");
        h.innerHTML="❤";
        h.style.left=Math.random()*100+"vw";
        h.style.bottom="-20px";
        h.style.fontSize=(Math.random()*30+20)+"px";
        document.body.appendChild(h);
        setTimeout(()=>h.remove(),4000);
    },120);

    for(let i=0;i<120;i++){
        const f=document.createElement("div");
        f.classList.add("fire");
        f.style.left=Math.random()*100+"vw";
        f.style.top=Math.random()*100+"vh";
        f.style.setProperty("--x",(Math.random()*300-150)+"px");
        f.style.setProperty("--y",(Math.random()*300-150)+"px");
        document.body.appendChild(f);
        setTimeout(()=>f.remove(),1000);
    }
});
