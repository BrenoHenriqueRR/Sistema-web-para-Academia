function exibirForm(){
    var form = document.getElementById("form-promocao");
    var valor = '' // variavel para armazenar os dados do formulário
    var codpromo = Math.ceil(Math.random() * 1000); // numeros inteiros de 0 a 1000
    var formData = new FormData(form); // cria um conjunto de chaves e valor ,como um array: [ key : valor ]
    for (var valores of formData.entries()) {
        valor+= `${valores[0]}: ${valores[1]}\n`; // atribui os valores do form a variavel valor
        console.log(valores[0] + ': ' + valores[1]); // exibe no console
    }
    alert(valor + '\nCodigo promocional: ' + codpromo) // Exibe na tela os valores do cadastro mais o seu codigo promocional
    //aqui guardaria essas informações no banco possivelmente
}

function cpf(v){ //replace permite substituir paartes de uma string
    v=v.replace(/\D/g,"")    // /D = carcteres que nao são digitos,/g = modificador global                
    v=v.replace(/(\d{3})(\d)/,"$1.$2")      // \d{3} captura os 3 primeiros digitos $1.$2 adiciona um ponto entre os numero capturados
    v=v.replace(/(\d{3})(\d)/,"$1.$2")  //mesma ideia acima    
                                            
    v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2") // captura os dois digitos ao final da string e coloca um hífen antes deles
    return v
}

function getQueryParam(param) {
    let params = new URLSearchParams(window.location.search); 
    return params.get(param); // pega os parametros da url
}

