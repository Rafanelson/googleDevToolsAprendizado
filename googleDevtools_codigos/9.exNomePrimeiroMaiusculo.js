let nome = prompt('escreva seu nome')

let primeiraMaiuscula = nome.slice(0,1)

let restoDoNome = nome.slice(1)

let nomeCorrigido = primeiraMaiuscula.toUpperCase() + restoDoNome.toLowerCase()

alert = 'olá ' + nomeCorrigido

//toLowerCase pra caixa baixa
