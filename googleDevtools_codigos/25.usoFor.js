//o for pré incrementa as condições necessárias para um loop ideal (while "enxuto")
// for ( let i=0; i<2; i++) { // codigo }
// i=1 ****inicio
// i<2 ****condição para loop acontecer(enquanto verdadeira)
// i++ ****quantidade que será incrementada a cada loop 

let output = []



function fizzBuzz() {

    //while(count < 100)
        
   // count++ // = count + 1 
    
for (let count = 1; count <= 100; count ++ ) {

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
        
    }

    

