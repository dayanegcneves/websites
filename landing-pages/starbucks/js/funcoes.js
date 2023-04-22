function trocarImagem(caminhoImagem, corFundo) {
    // Atualizar a imagem principal
    document.getElementById('imagem-principal').src = caminhoImagem;
    
    // Atualizar a cor de fundo do elemento .circle
    document.getElementById('circle').style.backgroundColor = corFundo;

    document.getElementById('social-media').style.backgroundColor = corFundo;

    document.getElementById('button').style.backgroundColor = corFundo;

    document.getElementById('span').style.color = corFundo;

}