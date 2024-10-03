function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    // logica semelhante ao que a função toggle faz
    // if(html.classList.contains('light')) {
    //     html.classList.remove('light')
    // } else {
    //     html.classList.add('light')
    // }


    // pegar a tag img
    const img = document.querySelector("#profile img")

    // substituir a imagem
    if(html.classList.contains('light')) {
        // se tiver light mode, adicionar a imagem com fundo azul 
        img.setAttribute('src', './assets/perfilazul.png')
        img.setAttribute('alt', 'Foto sorrindo, usando casaco azul marinho, com fundo azul')
    } else {
        // se tiver sem light mode, manter a imagem com fundo branco 
        img.setAttribute('src', './assets/perfil.png')
        img.setAttribute('alt', 'Foto sorrindo, usando casaco azul marinho, com fundo branco')
    }
}