class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() { // função própria do javascript que e chamado automaticamente pelo navegador
        fetch('./../includes/menu.html') // busca o conteúdo do arquivo menu.html 
        .then(response => response.text()) // converte a resposta em texto
        .then(html => {
            this.innerHTML = html; // define o header do html com os elementos do menu.html
            this.querySelector('#open_btn').addEventListener('click', () => {
                document.getElementById('menu-lat').classList.toggle('open-menu');
                document.getElementById('overlay').classList.toggle('active');
                document.body.classList.toggle('no-scroll');
            });
    
            this.querySelector('#open_btn2').addEventListener('click', () => {
                document.getElementById('menu-lat').classList.toggle('open-menu');
                document.getElementById('overlay').classList.toggle('active');
                document.body.classList.toggle('no-scroll');
            });
        });
    }
}

customElements.define('header-component', Header); //crie um componente reutilazado

  