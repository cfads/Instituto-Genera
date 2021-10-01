const instituto = document.querySelectorAll('#instituto li a')

instituto.forEach( item =>{
    item.addEventListener("click",()=>{
        window.location.href="index.html";
    });
})


