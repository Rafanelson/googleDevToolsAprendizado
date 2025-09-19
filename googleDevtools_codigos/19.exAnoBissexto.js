// PROGRAMA ONDE DETERMINE SE O ANO É BISSEXTO OU NÃO, 1 ANO = 365 DIAS, BISSEXTO = 366 DIAS, 
// ANO BISSEXTO É IGUALMENTE DIVISÍVEL POR 4 (NÚMERO INTEIRO);
// EXCETO SE ESSE ANO FOR TAMBÉM DIVISÍVEL POR 10
// A NÃO SER QUE NAQUELE ANO TAMBÉM É DIVISÍVEL UNIFORMEMENTE POR 400;
// EX: 2000 

// 2000 / 4 = 500
// 2000 /100 = 20 V
//2000 / 400 = 5 v 

function anoBissexto(ano) {

    let calc4 = (ano % 4)
    let calc100 = (ano % 100)
    let calc400 = ano % 400

    if (calc4, calc100, calc400 === 0) {
        console.log = ('é ano bissexto')
        
    }else if (calc4, calc100, calc400 > 0) {
        console.log = ('não é ano bissexto')
    }
}

anoBissexto(2001)