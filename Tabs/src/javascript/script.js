const tabs = document.querySelectorAll('.tab-btn');
//Isso seleciona todos os elementos com a classe `.tab-btn` e os armazena na constante `tabs`.

tabs.forEach(tab => tab.addEventListener('click', () => tabClicked(tab)));
// Para cada aba, adiciona um evento de clique que chama a função `tabClicked` passando a aba clicada como argumento.

const tabClicked = (tab) => {
    tabs.forEach(tab => tab.classList.remove('active'));
    tab.classList.add('active');

    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('show'));

    const contentId = tab.getAttribute('content-id');
    const content = document.getElementById(contentId);

    content.classList.add('show');
}
// Adiciona a classe `active` à aba clicada.
//Remove a classe `show` de todos os conteúdos para garantir que apenas o conteúdo correspondente à aba clicada será mostrado.
//Obter o ID do conteúdo correspondente
//Mostrar o conteúdo correspondente
//Adiciona a classe `show` ao conteúdo correspondente à aba clicada.

const currentActiveTab = document.querySelector('.tab-btn.active');
tabClicked(currentActiveTab);
//Ativar a aba que já está ativa inicialmente