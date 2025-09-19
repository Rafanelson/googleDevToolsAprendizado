// converter a variável da função em reais, e retornar a quantidade de pães que eu posso comprar (cada pão a R$ 1,50)
function getPao(precoPao, custoPorPao) {
    

    console.log = ('vc pode comprar ' + calcPao(precoPao,custoPorPao) + ' paes')
        
    return troco(precoPao, custoPorPao) //uso do return para obter troco (% mostra o resto da divisão) 
}

getPao(4, 2)

function calcPao(valorDoDinheiro, custoPorPao) {

    let numeroDePaes = Math.floor(valorDoDinheiro / custoPorPao) //uso do Math.floor para arredondamento

    return numeroDePaes
}

function troco(dinheiroInicial, custoPorPao) {
    
    let trocoDoPao = dinheiroInicial % custoPorPao
    
    return trocoDoPao
    
}