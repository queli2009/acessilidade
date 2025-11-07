//Variáveis
var btnAbreDialog = document.querySelector('#abreDialog');
var dialog = document.querySelector('.dialogNewsletter');
var dialogBody = document.querySelector('.dialogNewsletter-body');
var dialogOverlay = document.querySelector('.dialogNewsletter-overlay');


//quando abrir a dialog...
btnAbreDialog.addEventListener('click' , function() {
    dialog.classList.add('dialoNewsletter--aberto');
});

function fechandoDialog () {
    document.activeElement.getBoundingClientRect();
    dialog.classList.add('dialogNewsletter--aberto');
}

//listerners

document.querySelector('.dialogNewsletter-fechar').addEventListener('click' , fechandoDialog);