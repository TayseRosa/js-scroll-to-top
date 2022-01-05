function upScroll(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function statusScroll(){
    if( window.scrollY === 0 ){
        // Ocultar botao
        document.querySelector('.scrollButton').style.display = 'none';
    }else{
        // mostrar botao
        document.querySelector('.scrollButton').style.display = 'block';
    }
}
// setInterval(statusScroll, 1000)
window.addEventListener('scroll', statusScroll);
