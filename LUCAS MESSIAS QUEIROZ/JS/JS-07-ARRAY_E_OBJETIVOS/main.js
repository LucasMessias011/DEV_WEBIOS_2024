//objetos
let pessoa = {
    corDosOlhos: "Verde",
    Altura: 1.70,
    corDoCabelo: "Preto",
    nome: "Lucas",
    sobrenome: "Messias",
    hobbie: ["Futebol", "LOL", "Tocar guitarra"],
    //Criar outro objeto:
    endereco: {
        rua: "jao mineiro",
        numero: 999,
        cidade: "São Paulo",
        estado: "SP"
    }
}
console.log(pessoa)
console.log(pessoa.corDoCabelo) //Retornar apenas uma proprieade
console.log(pessoa.hobbie) // Para retornar todos os hobbies
console.log(pessoa.hobbie[1]) // Para retornar apenas 1
console.log(pessoa.endereco) // Para retornar todo o endereco
console.log(pessoa.endereco.rua) // Para retornar apenas uma informação de endereço


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

console.log(tarefa)
console.log(tarefa[2]) // Retorna 1 objeto
console.log(tarefa[0].nomeTarefa) // Retorna uma unica ropriedade de um objeto

console.clear()

let recebeJAINSON = JSON.stringify(pessoa);

console.log(recebeJAINSON)

var JSON = '{ "corDosOlhos":"Verde", "Altura":1.7, "corDoCabelo":"Preto", "nome":"Lucas", "sobrenome":"Messias", "hobbie": ["Futebol", "LOL", "Tocar guitarra"], "endereco": { "rua":"jao mineiro", "numero":999, "cidade":"São Paulo", "estado":"SP"}}'

console.log(JSONITO)
console.log(JSON.parse(JSONITO))