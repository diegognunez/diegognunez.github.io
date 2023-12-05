document.addEventListener('DOMContentLoaded', function() {
    const valorInput = document.getElementById('valor');

    valorInput.addEventListener('blur', function() {
        const valor = parseFloat(valorInput.value);

        if (isNaN(valor) || valor < 0) {
            exibirAviso("O valor mínimo deve ser de 0 reais", 'rgba(255, 0, 0, 0.8)');
            valorInput.style.border = '1px solid red'; // Adiciona a borda vermelha
        } else {
            valorInput.style.border = '1px solid #ced4da'; // Se for válido, remove a borda vermelha
        }
    });

    const form = document.getElementById('formGanhosGastos');

    const botoes = document.querySelectorAll('.Ganhos, .Gastos');

    botoes.forEach(function(botao) {
        botao.addEventListener('click', function(event) {
            const valor = parseFloat(valorInput.value);

            if (isNaN(valor) || valor <= 0) {
                exibirAviso("Corrigir ou inserir informação do valor", 'rgba(255, 102, 102, 0.9)');
            } else {
                const tipoTransacao = botao.value;

                if (tipoTransacao === 'Ganho') {
                    exibirAviso("Ganho adicionado com sucesso", 'rgba(129, 250, 108, 0.9)');
                } else if (tipoTransacao === 'Gasto') {
                    exibirAviso("Gasto adicionado com sucesso", 'rgba(255, 74, 74, 0.9)');
                }
            }
        });
    });
});

function exibirAviso(mensagem, cor) {
    const avisoDiv = document.createElement('div');
    avisoDiv.textContent = mensagem;
    avisoDiv.style.position = 'fixed';
    avisoDiv.style.top = '50%';
    avisoDiv.style.left = '50%';
    avisoDiv.style.transform = 'translate(-50%, -50%)';
    avisoDiv.style.backgroundColor = cor;
    avisoDiv.style.padding = '20px';
    avisoDiv.style.color = '#fff';
    avisoDiv.style.borderRadius = '5px';
    avisoDiv.style.zIndex = '9999';
    avisoDiv.style.textAlign = 'center';

    document.body.appendChild(avisoDiv);

    setTimeout(function() {
        avisoDiv.remove();
    }, 3000); // 3000 milissegundos = 3 segundos (ajuste conforme necessário)
}
