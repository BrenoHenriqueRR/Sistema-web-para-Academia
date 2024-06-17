function exibirForm(){
    var form = document.getElementById("form-promocao");
    var formData = new FormData(form);
    for (var valores of formData.entries()) {
        console.log(valores[0] + ': ' + valores[1]);
    }
}