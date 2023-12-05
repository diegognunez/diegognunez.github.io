document.addEventListener('DOMContentLoaded', function() {
    usuarioInput = document.getElementById('usuario');
    senhaInput = document.getElementById('senha');
    botaoPronto = document.getElementById('botaoPronto');
    loading = document.querySelector('.loading');

    function atualizarEstadoDoBotao() {
        if (usuarioInput.value && senhaInput.value) {
            botaoPronto.style.opacity = '1';
            botaoPronto.style.pointerEvents = 'auto';
        } else {
            botaoPronto.style.opacity = '0.5';
            botaoPronto.style.pointerEvents = 'none';
        }
    }

    usuarioInput.addEventListener('input', atualizarEstadoDoBotao);
    senhaInput.addEventListener('input', atualizarEstadoDoBotao);

    botaoPronto.addEventListener('click', function(event) {
        if (botaoPronto.style.opacity === '0.5') {
            event.preventDefault();
        }
    });

    botaoPronto.style.opacity = '0.5';
    botaoPronto.style.pointerEvents = 'none';

    atualizarEstadoDoBotao();



    function before() {
        loading = document.querySelector('.loading')
        loading.classList.remove('hidden')
    }

    pronto = document.querySelector('.pronto')

    pronto.addEventListener('click', function(event) {
        event.preventDefault();

        before();

        setTimeout(function() {
            window.location.href = "tela_principal.html";
        }, 1500);
    });


});
