// funcao
function soma(num1, num2, num3) { // Parametros
    //         2      3     2
    var num1
    var num2
    var num3
    return num1 + num2 + num3;
}
console.log(soma(2, 3)) // com parentese = precisa passar um valor para a variavel.
//console.log(soma) // sem parentese   = retorna toda a função para  a  variavel.

console.clear()

// Crie uma funcao que recebe 4 valores e retorne apenas a media desses valores

function media(n1, n2, n3, n4) {
    return (n1 + n2 + n3 + n4) /4;
};
console.log (media(8,2,15,9));

console.clear()

const media2 = (n1, n2, n3, n4) => {
    return (n1 + n2 + n3 + n4) / 4;
}
console.log(media2(5, 5, 5, 5))

console.clear()






function onloadTela() {
    alert("Sua tela está carregando Bem-vindo")
    console.log("REcarregou a Tela")
}

console. clear()
const clique = () => {
    alert("Bem vindo. Você clicou em mim")
    console.log("Você clicou em um botão")
}