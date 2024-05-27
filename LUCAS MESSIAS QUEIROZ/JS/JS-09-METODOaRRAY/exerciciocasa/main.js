let numeros = [17, 43, 8, 4, 97, 56, 29]


function verificarParOuImpar(numeros) {
    numeros.forEach(num => {
        if (num % 2 === 0) {
            console.log(`${num} é par`);
        } else {
            console.log(`${num} é ímpar`);
        }
    });

}

verificarParOuImpar(numeros);



//---------------------------------------------------------------------

const numeros2 = [17, 43, 8, 4, 97, 56, 29, 3, 75, 34, 88, 82, 61];


const numerosFiltrados = numeros2.filter(valor => valor > 20 && valor < 80);


console.log(numerosFiltrados);