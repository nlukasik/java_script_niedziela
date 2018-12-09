function prostaFunkcja () {
    console.log('wywolanie funkcji');
}

prostaFunkcja();

function prostaFunkcja2 (param1, param2) {
    console.log('wywolanie funkcji dla parametów: ' + param1 + ' ' + param2) ;
}

prostaFunkcja2('jeden', 'dwa')

function sum (liczbaPierwsza, liczbaDruga){
    return liczbaDruga + liczbaPierwsza;
}

console.log('wynik sumowania '+ sum (1,3));