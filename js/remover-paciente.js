var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector(".tabela")

tabela.addEventListener("dblclick", function(event) {   /*numa linha - event.target.parentNode.remove();--- */
        
    var alvoEvento = event.target
    var paiAlvo = alvoEvento.parentNode;

    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        paiAlvo.remove();
    }, 500);

        
   
       
});

