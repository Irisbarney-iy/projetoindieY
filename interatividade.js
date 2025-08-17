var header = document.getElementById('header')
var botao = document.getElementById('modos')
var a = document.querySelectorAll('#link')
var footer = document.getElementById('footer')
var body = document.getElementById('body')
var caixamenu = document.getElementById('caixamenu')
var opcoes = document.getElementsByClassName('opcoes')
var yellow = 'rgb(249, 194, 91)'
var corprinci = 'rgba(0, 0, 0, 0.8)'
var corsecun = 'rgba(211, 211, 211, 0.8)'
var black = 'rgb(0,0,0)'
var fundo = 'escuro'
var background = 'background.png';
var backgroundclaro = 'backgroundclaro.png';

botao.addEventListener('click', function() {

    if(fundo === 'escuro') {
        a.forEach(function(as) {
           as.style.color = 'black'
        })
        corprinci = 'rgba(211, 211, 211, 0.8)'
        botao.innerText = 'modo escuro'
        header.style.borderBottom = '4px solid black'
        footer.style.borderTop = '4px solid black'
        caixamenu.style.border = '2px solid rgba(0, 0, 0, 1)'
        document.documentElement.style.setProperty ('--imagem-fundo', `url("${backgroundclaro}")`)
        document.documentElement.style.setProperty('--cor-linha', black)
        document.documentElement.style.setProperty('--cor-fundo', corsecun)
        document.documentElement.style.setProperty('--cor-texto', black)
        fundo = 'claro'
    }
    else{
        a.forEach(function(as) {
           as.style.color = 'rgb(249, 194, 91)'
        })
        corprinci = 'rgba(0, 0, 0, 0.8)'
        botao.innerText = 'modo claro'
        header.style.borderBottom = '4px solid rgb(249, 194, 91)'
        footer.style.borderTop = '4px solid rgb(249, 194, 91)'
        caixamenu.style.border = '2px solid rgb(249, 194, 91)'
        document.documentElement.style.setProperty ('--imagem-fundo', `url("${background}")`)
        document.documentElement.style.setProperty('--cor-linha', 'rgb(249, 194, 91)')
        document.documentElement.style.setProperty('--cor-fundo', corprinci)
        document.documentElement.style.setProperty('--cor-texto', yellow)
        fundo = 'escuro'
    }
});
