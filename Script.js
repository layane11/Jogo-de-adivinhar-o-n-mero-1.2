let numeroSecreto = Math.floor(Math.random() * 101);
let tentativas = 10;
let jogoAcabou = false;

function checkGuess() {
    if (jogoAcabou) return;

    const palpite = parseInt(document.getElementById("guess").value);
    const mensagem = document.getElementById("message");
    const tentativasElem = document.getElementById("attempts");

    if (isNaN(palpite) || palpite < 0 || palpite > 100) {
        mensagem.textContent = "⚠️ Digite um número válido entre 0 e 100!";
        mensagem.className = "wrong";
        return;
    }

    tentativas--;
    tentativasElem.textContent = `Tentativas restantes: ${tentativas}`;

    if (palpite === numeroSecreto) {
        mensagem.textContent = `🎉 Parabéns! Você acertou o número ${numeroSecreto}!`;
        mensagem.className = "correct";
        finalizarJogo();
    } else if (tentativas === 0) {
        mensagem.textContent = `❌ Fim de jogo! O número era ${numeroSecreto}.`;
        mensagem.className = "wrong";
        finalizarJogo();
    } else if (palpite < numeroSecreto) {
        mensagem.textContent = "📉 Tente um número MAIOR!";
        mensagem.className = "wrong";
    } else {
        mensagem.textContent = "📈 Tente um número MENOR!";
        mensagem.className = "wrong";
    }
}

function finalizarJogo() {
    jogoAcabou = true;
    document.getElementById("guess").disabled = true;
    document.getElementById("reset").style.display = "inline-block";
}

function resetGame() {
    numeroSecreto = Math.floor(Math.random() * 101);
    tentativas = 10;
    jogoAcabou = false;

    document.getElementById("guess").disabled = false;
    document.getElementById("guess").value = "";
    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent = "Tentativas restantes: 10";
    document.getElementById("reset").style.display = "none";
}
