// getE lementByid
let primeiroTitulo = document.getElementById("primeiroTitulo");

primeiroTitulo.style.color = 'red' // Para mudar a cor do texto sem precisar usar CSS
primeiroTitulo.innerText = 'Corinthians' // para mudar o texto sem precisar ir ao HTML  

//getElementByClassName

let pegaClasse = document.getElementsByClassName('getClass');

for(i = 0; i <pegaClasse.length; i++){
    pegaClasse[i].style.color = 'blue';
}

console.log(pegaClasse);
console.clear()



//getElementsByName
let byName = document.getElementsByName("filho");

console.log(byName);

byName.forEach(funcao)

function funcao (cont,  indice) {
    return byName[indice].style.color = "pink"
}
console.clear()

//getElementsByTagName
let byTagName = document.getElementsByTagName("p");

for(c =0; c < byTagName.length; c++){
    byTagName[c].style.color = '#FF4500'
    byTagName[c].style.fontSize = '20px'
    byTagName[c].style.boxShadow = '10px 10px 10px #000000'
    if(c % 2) byTagName[c].style.backgroundColor = '#ffff00'
    else byTagName[c].style.backgroundColor = '#21ff54'
}
console.log(byTagName)

let removendo = document.getElementById('remova1')
removendo.remove()
console.log.apply(byTagName )

let recebeLista = document.getElementById('paiLista')

recebeLista.style.listStyle = 'none'