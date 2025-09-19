// sequência de fibonnacci = soma o número anterior ao atual, para dar sequência ao próxima número

//0,1,1,2,3,5,8,13,21,34....
// 0+1=1 1+1=2 1+2=3 ...



function fibonacciGenerator(n) {

    let output = []

    if ( n === 1 ) {
        output = [0]
    }
    else if ( n === 2 ){
        output = [0, 1]
    }
    else {
        output = [0, 1]
        for(let i = 2; i < n; i++ ){
            output.push(output[output.length - 2] + output[output.length - 1])
        }
    }        
    return output
    
}


