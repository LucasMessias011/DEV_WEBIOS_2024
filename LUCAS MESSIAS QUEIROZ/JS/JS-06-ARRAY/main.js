var numero = [-2, 40, 16, 111, 33, 64]
//posição/indi 0  1   2   3   4    5

console.log(numero)
console.log(numero[3])

var aleatorios = [true, "texto", 345, "texto", false]
console.log(aleatorios)

var especiais = ["Jesus", "Jaqueline", "Nicole", "Marluce", "Lucas", "Gleyde", "giovana", "Manuella"]

console.log(especiais[3], especiais[7])

console.clear()

//array bidimensional

var bidi = [
    ['Banana', 'Maçã', 'Pêra'], // linha 0
    ['Laranja', true, 1], //linha 1
    // 0, 1, 2, 3
    [null, 'Uva', -350] //linha 2
    //Ele conta as linhas e não o que esta dentro
]

console.log(bidi)
console.log(bidi[1][1])
console.log(bidi[2][2
])

console.clear()

// Array Bidi >> Crie um array 

var itens = [
    ['Pipoca', 'arroz', 'fejão', 'Batata'],
    ['Tomate', 'Alface', 'Leite em pó', 'Detergente'],
    ['LEite de coco', 'candida', 'maçã', "Vinagre"],
    ['Bolacha', 'Azeite', "limão", "shampoo"],

]
console.log(itens[0][2])
console.log(itens[1][3])
console.log(itens[2][2])
console.log(itens[3][3])

console.clear()


let moeda = ["Real", "Euro", "coroa", "Dolar"]
console.log (moeda)
moeda[3] = "Yen"
console.log(moeda)

console.clear()

let numArray = [2, 4, 6, 8, 10]
console.log(numArray)
var mudanca = numArray.toString();
console.log(mudanca)

console.clear()

var teste1 = [5, 10, 15, 20, 25, 30]

console.log(teste1)
var mudanca2 = teste1.join(" ** ")
console.log(mudanca2)

console.clear()

let array = [0, 2, 3, 4, 5]
console.log(array.length)

console.clear()

let utilizaPop = ['Banana', 'Laranja', 'maçã', 'Manga', 'Uva']

console.log(utilizaPop)
var mudanca4 = utilizaPop.pop()
console.log(mudanca4)
console.log(utilizaPop)

var mudanca5 = utilizaPop.push("corinthians")
console.log(mudanca5)
console.log(utilizaPop)

console.clear()

var nomesCarros = ['Audi', 'Celta', 'Uno com escada', 'HB20']
console.log(nomesCarros)
var mudanca6 = nomesCarros.shift()
console.log(mudanca6)
console.log(nomesCarros)

console.clear()

var insereNoinicio = [true, 34, 'mano', 'socorro', 'java']
delete insereNoinicio[2]

console.log(insereNoinicio)
//console.log(insereNoinicio)
//var mudanca7 = insereNoinicio.unshift('Nice')
//console.log(mudanca7)
//console.log(insereNoinicio)

