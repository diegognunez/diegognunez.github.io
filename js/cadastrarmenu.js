function exibirMensagem(mensagem, cor) {
    var avisoOverlay = document.getElementById('avisoOverlay');
    var avisoBox = document.getElementById('avisoBox');

    avisoBox.innerHTML = '<p>' + mensagem + '</p>';
    avisoBox.style.backgroundColor = cor;
    avisoOverlay.style.display = 'block';

    setTimeout(function () {
        avisoOverlay.style.display = 'none';
    }, 3000);
}

function verificarInputs() {
    var campos = document.querySelectorAll('.digitar');
    var camposVazios = [];
    var camposComErro = [];

    campos.forEach(function (campo) {
        if (campo.value === '') {
            camposVazios.push(campo);
        }
        if (campo.style.border === '1px solid red') {
            camposComErro.push(campo);
        }
    });

    if (camposComErro.length > 0) {
        exibirMensagem('Arrume suas informações para confirmar o cadastro', 'lightcoral');
    } else if (camposVazios.length > 0) {
        exibirMensagem('Preencha todas informações', 'lightpink');
    } else {
        exibirMensagem('Seu produto foi cadastrado com sucesso', 'lightgreen');
    }
}


function mostrarMensagem() {
    // Criar um elemento div para a mensagem de confirmação
    var mensagem = document.createElement("div");
    mensagem.className = "mensagem-confirmacao";
    mensagem.innerHTML = `
        <div class="confirmacao">
            <p>Seu produto foi cadastrado com sucesso</p>
            <button onclick="fecharMensagem()">Ok</button>
        </div>
    `;
    
    // Adicionar a mensagem à página
    document.body.appendChild(mensagem);
}

function fecharMensagem() {
    var mensagem = document.querySelector(".mensagem-confirmacao");
    if (mensagem) {
        mensagem.remove();
    }
}
var timeoutId;

function exibirAviso(mensagem) {
    var avisoOverlay = document.getElementById('avisoOverlay');
    var avisoBox = document.getElementById('avisoBox');

    avisoBox.innerHTML = '<p>' + mensagem + '</p>';
    avisoOverlay.style.display = 'block';

    timeoutId = setTimeout(function () {
        avisoOverlay.style.display = 'none';
    }, 3000);
}

function verificarValor(campo) {
    clearTimeout(timeoutId);
    var input = document.getElementById(campo);

    if (input.value < 0 || input.value === '') {
        input.style.border = '1px solid red';
        exibirAviso('Valor mínimo = 0 reais');
    } else {
        input.style.border = '1px solid #ccc';
    }
}



