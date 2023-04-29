function validarFormulario() {
    if(document.getElementById('nome').value == ""){
        alert('O campo "NOME" deve ser preenchido');
        return false; 
    }
    if(document.getElementById('email').value == ""){
        alert('O campo "E-MAIL" deve ser preenchido');
        return false;
    }
    if(document.getElementById('telefone').value == ""){
        alert('O campo "TELEFONE" deve ser preenchido');
        return false;
    }
}

function enviarFormulario() {
    if(document.getElementById('nome').value != "" 
        && document.getElementById('email').value != ""
        && document.getElementById('telefone').value != ""){
            document.write('<h1 style="color: red; font-family: Arial">Formulário enviado com sucesso</h1>')
        }
}