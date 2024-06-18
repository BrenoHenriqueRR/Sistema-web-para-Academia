function myFunction(validar) {
    var check = [
        "black",
        "silver",
        "bronze"
    ];
    let anyChecked = false;
    for (let index = 0; index < check.length; index++) {
        if (check[index] === validar) { //verificar quando o array for igual ao validar
            var x = document.getElementById(validar).checked;// verificar se está clicado
            if (x) {
                document.getElementById("pagar").innerHTML = validar; // adicionar o texto ao html
                anyChecked = true;
            }
        } else {
            document.getElementById(check[index]).checked = false; // desativar o check que estava antes
        }
    }
    document.getElementById('cad-pag').classList.toggle('active', anyChecked);
}