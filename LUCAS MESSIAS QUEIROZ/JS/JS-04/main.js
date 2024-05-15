//IF
//Se todos os alunos estiverem com blusa e o crachá então todos recebem 10
var TodosDeCracha = true;

if (TodosDeCracha == true) {
    console.log("Todos recebem nota 10 em JS")
} else {
    console.log("Todos recebem nota 0 em JS")
}

console.clear()

var numero1 = 4
var numero2 = 2

numero1 > numero2 ? console.log("numero1 é maior") : console.log("numero1 é menor0")

//if(numero1 > numero2 ){
//   console.log("numero1 é maior que o numero2")


//}else{
// console.log("numero1 é menor que o numero2")}

console.clear()

//Gerente / estagio/ CEO
// Você é Gerente >> No perfil de gerente aparece todas as informações sobre os estagiarios

///Nome e Senha
//Gerente / Estagiario / CEO



let mes = "JANEIRO"

if(mes == "JANEIRO"){
    console.log("É verão")
}else if(mes == "JUNHO"){
    console.log("É outono")
}else{
    console.log("É inverno")
}

console.clear()




switch(mes){ // Guardo a expressão que quero validar
    case mes == "JANEIRO":
        console.log("É verão")

        case mes == "JUNHO":
            console.log("È outono")
            case mes == "OUTUBRO"
            
            console.log("È primavera")
            default:
                console.log("È inverno")

}