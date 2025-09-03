// funções servem basicamente para "capturar" uma série de comandos  e váriáveis, e toda vez que esta função for requerida, traz esses comandos e variáveis

function getpao(pao) { // o (pao) serve como parâmetro de entrada, ou valor do getPao que pode ser manipulado conforme a quantidade de pães que eu quero
    console.log('SaiDeCasa')
    console.log('moveDireita')
    console.log('moveCima')
    console.log('moveBaixo')
    console.log('compre ' + pao + ' pães')
}

getpao(20) // a variável virou esse valor, que eu atribui(parâmetro ou argumento) 