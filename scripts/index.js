
//Navegação
const instituto = document.querySelectorAll('#instituto li a')
instituto.forEach( item =>{
    item.addEventListener("click",()=>{
        window.location.href="index.html";
    });
})

const projetos = document.querySelector('#projetos');
projetos.addEventListener("click",()=>{
    window.location.href="projetos.html"
})

const editais = document.querySelector('#editais');
editais.addEventListener("click",()=>{
    window.location.href="editais.html"
})

const parceiros = document.querySelector('#parceiros')
parceiros.addEventListener("click",()=>{
    window.location.href="parceiros.html"
})



