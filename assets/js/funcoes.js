function exibirForm(){
    var form = document.getElementById("form-promocao");
    var valor = '' // variavel para armazenar os dados do formulário
    var codpromo = Math.ceil(Math.random() * 1000); // numeros inteiros de 0 a 1000
    var formData = new FormData(form);
    for (var valores of formData.entries()) {
        valor+= `${valores[0]}: ${valores[1]}\n`;
        console.log(valores[0] + ': ' + valores[1]);
    }
    alert(valor + '\nCodigo promocional: ' + codpromo)
}

