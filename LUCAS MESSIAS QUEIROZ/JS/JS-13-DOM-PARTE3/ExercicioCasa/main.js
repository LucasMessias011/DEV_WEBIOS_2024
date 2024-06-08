document.addEventListener('DOMContentLoaded', () => {
    // Selecionando o botão e adicionando um evento de clique
    document.querySelector('button').addEventListener('click', calcularNovoSalario);
});

function calcularNovoSalario(){
    // Obtendo o valor do salário atual do input
    const salarioAtual = parseFloat(document.getElementById('salarioAtual').value);
}
    // Verificando se o valor é um número válido
    if (isNaN(salarioAtual) || salarioAtual <= 0) {
        alert("Por favor, insira um valor válido para o salário atual.");
        return;
    }

    // Calculando o aumento de 17%
    const aumentoPercentual = salarioAtual * 0.17;

    // Adicionando o reajuste anual de R$215
    const reajusteAnual = 215;

    // Calculando o novo salário
    const novoSalario = salarioAtual + aumentoPercentual + reajusteAnual;

    // Exibindo o resultado
    document.getElementById('resultado').innerText = `O novo salário é: R$ ${novoSalario.toFixed(2)}`;