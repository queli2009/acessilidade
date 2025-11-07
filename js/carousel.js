var btns = document.querySelectorAll('.listaDeArtigo-slider-item');

//Percorrer todos os botoes controladores
btns.forEach(function(btn){
   btn.addEventListener('click', function()) {


    //Remover class 'ativo' dos outros botoes
    btns.forEach(function(btnRomoveClass) {
       btnRomoveClass.classList.remove('listaDeArtigo-slider-item-ativo')
    })

    this.classList.add('listaDeArtigo-slider-item--ativo')
   })
})