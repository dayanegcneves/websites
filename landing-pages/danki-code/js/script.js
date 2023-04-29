function validarFormulario() {
    if (document.getElementById('nome').value == "") {
        alert('O campo "NOME" deve ser preenchido');
        return false;
    }
    if (document.getElementById('email').value == "") {
        alert('O campo "E-MAIL" deve ser preenchido');
        return false;
    }
    if (document.getElementById('telefone').value == "") {
        alert('O campo "TELEFONE" deve ser preenchido');
        return false;
    }
}

function enviarFormulario() {
    if (document.getElementById('nome').value != ""
        && document.getElementById('email').value != ""
        && document.getElementById('telefone').value != "") {
        document.write('<h1 style="color: red; font-family: Arial">Formulário enviado com sucesso</h1>')
    }
}

function dataDeAcesso() {
    const dataAtual = new Date();
    var dia = dataAtual.getDay();
    var mes = dataAtual.getMonth();
    var ano = dataAtual.getFullYear();

    if(dia < 10){
        dia = '0' + dia;
    }

    if(mes < 10){
        mes = '0' + mes;
    }

    return dia + '/' + mes + '/' + ano + ' - ' + dataAtual.getHours() + ':' + dataAtual.getMinutes();
}

function exibirRodape() {
    elementoFinal = document.getElementById('rodape-final');
    elementoFinal.innerHTML = 'Data de Acesso: ' + dataDeAcesso();
}