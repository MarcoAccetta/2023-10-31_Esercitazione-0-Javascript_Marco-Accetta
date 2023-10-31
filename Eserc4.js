let n;
let x;

numerare(n)

function numerare (x) {
    n = parseInt(prompt('inserisci un numero'))
    x = 0

    while (x<=n) {
    
    
    if (z!= 0 && w!= 0 && k!=0){
        console.log(x);
        x++;
    }
    
    z = x%3
    w = x%5
    k = x%15 

    
    

    if (z === 0) {
        console.log('Fizz');
    }
    else if (w === 0) {
        console.log('Buzz');
    }
    else if (z == 0 && w == 0) {
        console.log('FizzBuzz');
    }
}
} 