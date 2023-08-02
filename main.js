'use strict'

// 3 - var  -> Mutável -> global
// 2 - let  -> Mutável -> bloco
// 1 - const  -.  Nao é mutável -> bloco

function trocarTitulo (){
    const tituloAtual = document.getElementById('Nome') 
    const tituloNovo = prompt ('Digite seu Nome') 
     tituloAtual.textContent =  'Nome: ' + tituloNovo 

    const tituloIdade = document.getElementById('Idade') 
    const tituloNovoIdade = prompt ('Digite sua Idade') 
    tituloIdade.textContent =  'Idade: ' + tituloNovoIdade 

    const tituloCidade = document.getElementById('Cidade') 
    const tituloNovoCidade = prompt ('Digite sua Cidade') 
    tituloCidade.textContent =  'Idade: ' + tituloNovoCidade 

    const tituloMedia = document.getElementById('Media') 
    const tituloNovaMedia = prompt ('Digite sua Media') 
    tituloMedia.textContent =  'Media: ' + tituloNovaMedia 

    if(tituloNovaMedia >= '5'){
        tituloMedia.className = ''
        tituloMedia.classList.add('azul')
    }else if (tituloNovaMedia <= '5'){
        tituloMedia.className = ''
        tituloMedia.classList.add('vermelho')
    }

}

const botaoTrocar = document.getElementById('trocar-titulo')
botaoTrocar.addEventListener('click', trocarTitulo)

