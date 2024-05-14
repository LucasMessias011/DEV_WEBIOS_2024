var string = "Os alunos estão ";
var string2 = "reprovados ";
var string3 = "ou aprovados?"; 

// + >> soma ou cancatenação
console.log(string + string2 + string3);
// template string
console.log(`${string + string2 + string3 }`)






console.clear()




var texto1 = "IOS fez uma excursão na TOTVS com três cabritinhos(alunos)."

console.log(texto1.charAt(58))
console.log(texto1[27]);

console.clear()

var texto2 = "IOS"
var texto3 = "Está chovendo hamburguer"

console.log(`na variavel texto2 tem ${texto2.length} caracteres`)
console.log(`na variavel texto3 tem ${texto3.length} caracteres `)

var texto4 = "aqui esta em minusculo"
var texto5 = "AQUI ESTA EM MAIUSCULO"
console.log(`minusculo: ${texto5.toLowerCase()}`)
console.log(`maiusculo: ${texto4.toUpperCase()}`)



var str = "Mozilla";
console.log(str);
console.log(str.substring(1, 3))
console.log(str.substring(3))

console.clear()

var texto6 = "olha a pipoca"

console.log(texto6.replace(`pipoca`, `carreta furacão'`))
