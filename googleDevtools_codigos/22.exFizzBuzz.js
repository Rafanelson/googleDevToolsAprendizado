// IMPRIMIR DE 1 A 100, PORÉM, MULTIPLOS DE 3 DEVEM IMPRIMIR A PALAVRA "FIZZ" E MULTIPLOS DE 5, A PALAVRA "BUZZ" E MULTIPLOS DE AMBOS, "FIZZBUZZ"

// .pop remove o ultimo elemento da array

let output = []

let count = 1  //o count será "pushado" para dentro do output

function fizzBuzz() {
    

    count++ // = count + 1 

    if (count % 3 ===0 && count % 5 === 0) {
        output.push("FizzBuzz")
    }else if (count % 5 === 0) {
        output.push("Buzz")
    }else if (count % 3 === 0) {
        output.push("Fizz")
    }else {
        output.push(count)
    }

    console.log(output)

}


