var botao = document.querySelector("#adicionar-paciente")

botao.addEventListener("click", function (event){
    
    event.preventDefault();
   
    var form = document.querySelector("#formadiciona");

    var paciente = obtemPacienteFormulario(form);

    var erros = validaPaciente(paciente);

    console.log(erros);

    if( erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    } 

    adicionaPacienteNaTabela(paciente);
        
    form.reset();

    var mensagemErro = document.querySelector("#mensagens-erro")

    mensagemErro.innerHTML = "";
});



function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

}
    

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro")

    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro
        ul.appendChild(li)
    })

}


function obtemPacienteFormulario (form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}


function montaTr (paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente")

       
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}


function montaTd (dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}


function validaPaciente (paciente) {
    
    var erros = []
    
    if (!validaPeso(paciente.peso)) erros.push("Peso inválido!"); /*qdo o if é simples, pode remover o colchete e deixar tudo na mesma linha)*/
    
    if(!validaAltura(paciente.altura)) erros.push("Altura inválida!");

    if (paciente.nome.length == 0) erros.push ("O campo nome é obrigatório!");
    if(paciente.peso.length == 0) erros.push("O campo peso é obrigatório!")
    if(paciente.altura.length == 0) erros.push("O campo altura é obrigatório!")
    if(paciente.gordura.length == 0) erros.push("O campo gordura é obrigatório!")

    return erros;
}



