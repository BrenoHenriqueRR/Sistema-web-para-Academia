class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        fetch('./../includes/footer.html') // busca o conteúdo do arquivo menu.html 
        .then(response => response.text()) // converte a resposta em texto
        .then(html => {
            this.innerHTML = html; // define o header do html com os elementos do menu.html
        });
    }
}

customElements.define('footer-component', Footer); //crie um componente reutilazado

  