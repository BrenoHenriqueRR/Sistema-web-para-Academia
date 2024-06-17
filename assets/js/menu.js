document.addEventListener('DOMContentLoaded', () => {
    
    // Declaração de uma função assíncrona chamada menu que recebe uma URL como parâmetro.
    const menu  = async (url) => {
        
        // Faz uma requisição fetch para a URL fornecida.
        const response = await fetch(url);
        
        // Converte a resposta da requisição para texto.
        const text = await response.text();
        
        // Cria um novo elemento 'div'.
        const template = document.createElement('div');
        
        // Define o conteúdo HTML da 'div' criada como o texto obtido da resposta da requisição.
        template.innerHTML = text;
        
        // Seleciona o template do conteúdo da 'div', clona o conteúdo do template e o retorna.
        return template.querySelector('template').content.cloneNode(true);
    };

    // Declaração de uma função assíncrona chamada 'insertTemplate'.
    const insertTemplate = async () => {
        
        // Chama a função 'loadTemplate' com o caminho do template e aguarda a resolução da promessa.
        const templateContent = await menu('../../includes/menu.html');
        
        // Insere o conteúdo do template clonado no início do elemento 'body' do documento.
        document.body.prepend(templateContent);

        document.getElementById('open_btn').addEventListener('click', function(){
            document.getElementById('menu-lat').classList.toggle('open-menu');
            document.getElementById('overlay').classList.toggle('active');
            document.getElementById('body').classList.toggle('no-scroll');
        });

        document.getElementById('open_btn2').addEventListener('click', function(){
            document.getElementById('menu-lat').classList.toggle('open-menu');
            document.getElementById('overlay').classList.toggle('active');
            document.getElementById('body').classList.toggle('no-scroll');
        });
    };

    // Chama a função 'insertTemplate' para carregar e inserir o template na página.
    insertTemplate();
});
