let x;

function cifre (x) {
    x = parseFloat(prompt('inserisci un numero compreso tra 0 e 9999'))
    if (x>=0 && x<10) {
        console.log('1 cifra');
    } 
    else if (x>=10 && x<100) {
        console.log('2 cifre');
    } 
    else if (x>=100 && x<999) {
        console.log('3 cifre');
    }
    else if (x>=1000 && x<9999) {
        console.log('4 cifre');
    }
}

cifre(x)