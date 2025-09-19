//ESCREVER UMA FUNÇÃO QUE SELECIONARÁ UM NOME ALEATÓRIO EM UMA LISTA, O ESCOLHIDO VAI PAGAR A CONTA
// EX DE ENTRADA: ['Paula','João','Paula','Marselo']
//EX SAÍDA: [PAULA VAI PAGAR A CONTA ]
//DICAS: precisar do array.length, matriz começa por zero sempre.

let galera = ["Paula","Marselo","Bufalo Bill","Hilary Clinton"];

function sorteioPagador() {

    let pagador = Math.floor(Math.random() * galera.length);
    
    return pagador, galera[pagador] + ' irá pagar a conta!'
    
}






