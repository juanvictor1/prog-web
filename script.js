let proximoId = 1;

function cadastrarVenda() {
    const nomeVendedor = document.getElementById('vendedor').value;
    const valorVenda = parseFloat(document.getElementById('valor').value);

    if (!nomeVendedor || isNaN(valorVenda)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    const desconto = valorVenda * 0.10;
    const valorFinal = valorVenda - desconto;

    const agora = new Date();
    const dataFormatada = agora.toLocaleDateString('pt-BR') + ', ' + agora.toLocaleTimeString('pt-BR');

    const tabela = document.getElementById('tabela-vendas');

    const novaLinha = document.createElement('tr');

    novaLinha.innerHTML = `
        <td>${proximoId}</td>
        <td>${nomeVendedor}</td>
        <td>R$ ${valorVenda.toFixed(2)}</td>
        <td>R$ ${desconto.toFixed(2)}</td>
        <td>R$ ${valorFinal.toFixed(2)}</td>
        <td>${dataFormatada}</td>
        <td><button class="btn-remover" onclick="removerLinha(this)">Remover</button></td>
    `;

    tabela.appendChild(novaLinha);
    proximoId++;

    document.getElementById('vendedor').value = '';
    document.getElementById('valor').value = '';
}

function removerLinha(botao) {
    const linha = botao.parentNode.parentNode;
    linha.remove();
}
