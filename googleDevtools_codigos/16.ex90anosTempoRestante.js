//CRIAR UMA FUNÇÃO QUE DIGA QUANTOS DIAS, SEMANAS E MESES FALTAM COGITANDO QUE VOCÊ VIVERÁ ATÉ OS 90 ANOS 

let suaIdade = prompt('Insira a idade')

function tempoRestante(suaIdade) {
    let dias =  (90 * 365) - (suaIdade * 365)
    let semanas = (90 * 52) - (suaIdade * 52)
    let meses = (90 * 12) - (suaIdade * 12)
    
    console.log = ('Te restam ' + dias + ' dias, ' + semanas + ' semanas e ' + meses + ' meses de vida ' )
    
}

tempoRestante(suaIdade)