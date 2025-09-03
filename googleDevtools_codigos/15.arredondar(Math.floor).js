// converter a variável da função em reais, e retornar a quantidade de pães que eu posso comprar (cada pão a R$ 1,50)
function getPao(precoPao) {
    let custoPao = Math.floor(precoPao / 1.5) //uso do Math.floor para arredondamento

    console.log = ('vc pode comprar ' + custoPao + ' paes')
}

getPao(10)