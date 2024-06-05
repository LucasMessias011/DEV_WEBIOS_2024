//DOM
//Link com o arquivo HTML
//document.head ou .body .div feito //Suficiente para acessar o HTML

//document.body.style.backgroundColor = "blue"

//se for 1 > São Paulo(cor de fundo vermelho) senão 0 Corinthians)(cor de fundo preto)

//prompt("Qual é o nome do time?")
document.title = "Times"

var time = prompt("Qual é o nome do time?")
if(time == "São Paulo"){
    alert("O time é o São Paulo")
    document.body.style.backgroundColor = "red"
    let nomeTime = document.createElement('h1')
    nomeTime.innerHTML = "São Paulo - Rogério ceni"
    document.body.appendChild(nomeTime)

    //creatElement > serve para criar uma tag no HTML
    //innerHTML > Inserir uma informação no HTML

}else if(time == "Corinthians"){
    alert("O time é o Corinthians")
    document.body.style.backgroundColor = "black"
    let nomeTime = document.createElement('h1')
    document.body.appendChild(nomeTime)
    nomeTime.style.color = "white"
    nomeTime.innerHTML = "Corinthians O MELHOR"

}else if(time == "Palmeiras"){
    alert("O time é o Palmeiras")
    document.body.style.backgroundColor = "green"
    let nomeTime = document.createElement('h1')
    document.body.appendChild(nomeTime)
    nomeTime.style.color = "white"
    nomeTime.innerHTML = "Palmeiras porcada lixo"

}else{
   alert("Não sei qual é esse time")
}



//window.prompt("Deseja realmente sair desse jogo ?");