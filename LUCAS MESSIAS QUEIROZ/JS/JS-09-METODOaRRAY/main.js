// Metodo ForEach
let frutas = ["maçã", "Banana", "coco", "Uva", "carambola", "Jabuticaba"]

frutas.forEach(retornaInfo);
function retornaInfo(nomefruta, indice){
    console.log(`(nomefruta: %{((nomefruta)}`)
    console.log(`indice: ${(indice)}`)
}

// Exibir o nome e o indice
// formato com for

//for(var i = 0; i < frutas.length ; i++){
  //  console.log(`nomefruta: ${nomefruta[i]}`)
    //console.log(`indice: ${[1]}`)
//}



// arrow Function
frutas.forEach(teste = (nomefruta, indice) =>{
    console.log(`nomefruta: ${nomefruta}`)
    console.log(`indice: ${indice}`)
})

frutas.forEach((teste, indice) => console.log(teste, indice))
//Ele vai retornar apenas o nome e não vai retornar o indice
console.clear()


let tarefa = [
    {
        id: 1,
        isPronta: true,
        nomeTarefa: "pular"
    },
    {
        id: 2,
        isPronta: false,
        nomeTarefa: "Agachar"
    },
    {
        id: 3,
        isPronta: true,
        nomeTarefa: "Deitar"
    }
]

tarefa.forEach((tarefa) => console.log(tarefa.nomeTarefa))

console.clear()

let numeros = [4, 9, 16, 25]
let novoArray = numeros.map(Math.sqrt)

console.log("Array antigo" + numeros)
console.log("Novo Array" + novoArray)

//let mapText = tarefas.map((retornaText) => {
    //console;log(retornaText.nomeTarefa)
//})

console.clear()

let numeros2 = [3, 13, 24, 36, 37, 50, 60, 78, 89]

let resultado = numeros2.filter(retornaFiltro)

function retornaFiltro(num){
    return num > 30
}

console.log(resultado)

let tarefasFiltro = tarefa.filter((resultadoFiltro) => {
    return resultadoFiltro.isPronta === false
  
})

console.log(tarefasFiltro)

console.clear()

let sapatos = [
    {marca: "nike", quantidade: 3},
    {marca: "adidas", quantidade: 5},
    {marca: "puma", quantidade: 7}
]


sapatos.find((retornafind) => {
    console.log(retornafind.marca == "puma")
}) 

