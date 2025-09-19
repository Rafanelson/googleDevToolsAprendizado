
function imcCalculator(peso, altura) {
    
    let imc = (peso / Math.pow(altura, 2)) //  Math.pow serve pra potenciar um número, é equivalente a: (peso / (altura*altura)) Math.round serve pra arredondar (=> 5 arredonda pra cima)

    if (imc < 18.5 ) {
        
    console.log = ('magrao da silva')
        
    } else if( imc >= 18.5 && imc < 24.9) {
        
    console.log = ('seu imc é ' + imc.toFixed(2) + ' voce ta no peso ideal') //A função toFixed() é usada para formatar um número, arredondando-o para um número específico de casas decimais. Ela retorna o número como uma string.
        
    } else {
        
    console.log = ('seu imc é ' + imc.toFixed(2) + ' rolha de poço')
        
    }
}

imcCalculator(85, 1.95)





