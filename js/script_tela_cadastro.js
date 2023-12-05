document.addEventListener('DOMContentLoaded', function() {
    emailInput = document.getElementById('email');
    usuarioCadastroInput = document.getElementById('usuarioCadastro');
    senhaCadastroInput = document.getElementById('senhaCadastro');
    botaoProntoCadastro = document.getElementById('botaoProntoCadastro');

    function atualizarEstadoDoBotaoCadastro() {
        if (emailInput.value && usuarioCadastroInput.value && senhaCadastroInput.value) {
            botaoProntoCadastro.style.opacity = '1';
            botaoProntoCadastro.style.pointerEvents = 'auto';
        } else {
            botaoProntoCadastro.style.opacity = '0.5';
            botaoProntoCadastro.style.pointerEvents = 'none';
        }
    }

    emailInput.addEventListener('input', atualizarEstadoDoBotaoCadastro);
    usuarioCadastroInput.addEventListener('input', atualizarEstadoDoBotaoCadastro);
    senhaCadastroInput.addEventListener('input', atualizarEstadoDoBotaoCadastro);

    botaoProntoCadastro.addEventListener('click', function(event) {
        if (botaoProntoCadastro.style.opacity === '0.5') {
            event.preventDefault();
        }
    });

    botaoProntoCadastro.style.opacity = '0.5';
    botaoProntoCadastro.style.pointerEvents = 'none';

    atualizarEstadoDoBotaoCadastro();

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
